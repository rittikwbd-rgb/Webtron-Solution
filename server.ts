import express from 'express';
import path from 'path';
import fs from 'fs';
import { createServer as createViteServer } from 'vite';
import { google } from 'googleapis';

const app = express();
const PORT = 3000;

app.use(express.json());

// Token & Booking Data File Paths for persistence
const DATA_DIR = path.join(process.cwd(), '.data');
const TOKENS_FILE = path.join(DATA_DIR, 'google_tokens.json');
const BOOKINGS_FILE = path.join(DATA_DIR, 'bookings_store.json');

// Ensure data directory exists
if (!fs.existsSync(DATA_DIR)) {
  fs.mkdirSync(DATA_DIR, { recursive: true });
}

// Memory stores
let googleTokens: any = null;
if (fs.existsSync(TOKENS_FILE)) {
  try {
    googleTokens = JSON.parse(fs.readFileSync(TOKENS_FILE, 'utf-8'));
  } catch (err) {
    console.error('Error reading tokens file:', err);
  }
}

interface Booking {
  id: string;
  fullName: string;
  email: string;
  phone?: string;
  company?: string;
  notes?: string;
  date: string;
  time: string;
  timezone: string;
  topic: string;
  callDuration: number;
  createdAt: string;
  meetLink?: string;
  eventId?: string;
  calendarEventUrl?: string;
  status: 'confirmed' | 'cancelled';
}

let bookingsStore: Booking[] = [];
if (fs.existsSync(BOOKINGS_FILE)) {
  try {
    bookingsStore = JSON.parse(fs.readFileSync(BOOKINGS_FILE, 'utf-8'));
  } catch (err) {
    console.error('Error reading bookings file:', err);
  }
}

function saveBookings() {
  try {
    fs.writeFileSync(BOOKINGS_FILE, JSON.stringify(bookingsStore, null, 2));
  } catch (err) {
    console.error('Error saving bookings:', err);
  }
}

function saveTokens(tokens: any) {
  googleTokens = tokens;
  try {
    fs.writeFileSync(TOKENS_FILE, JSON.stringify(tokens, null, 2));
  } catch (err) {
    console.error('Error saving tokens:', err);
  }
}

// Helper to get OAuth2 Client
function getOAuth2Client(req?: express.Request) {
  const rawClientId = process.env.OAUTH_CLIENT_ID || '';
  const rawClientSecret = process.env.OAUTH_CLIENT_SECRET || '';
  const clientId = rawClientId.trim().replace(/^["']|["']$/g, '');
  const clientSecret = rawClientSecret.trim().replace(/^["']|["']$/g, '');
  
  let appUrl = (process.env.APP_URL || '').trim().replace(/^["']|["']$/g, '');
  if (!appUrl && req) {
    const host = (req.headers['x-forwarded-host'] as string) || req.headers.host;
    let proto = (req.headers['x-forwarded-proto'] as string) || 'https';
    if (proto.includes(',')) proto = proto.split(',')[0].trim();
    if (host) {
      appUrl = `${proto}://${host}`;
    }
  }
  if (!appUrl) {
    appUrl = 'http://localhost:3000';
  }

  const redirectUri = `${appUrl.replace(/\/$/, '')}/api/oauth/google/callback`;

  if (!clientId || !clientSecret) {
    return null;
  }

  const oauth2Client = new google.auth.OAuth2(clientId, clientSecret, redirectUri);
  if (googleTokens) {
    oauth2Client.setCredentials(googleTokens);
  }

  oauth2Client.on('tokens', (tokens) => {
    if (tokens.refresh_token) {
      saveTokens({ ...googleTokens, ...tokens });
    } else if (googleTokens) {
      saveTokens({ ...googleTokens, ...tokens });
    }
  });

  return oauth2Client;
}

// Timezone offset mapping helper
const TIMEZONE_IANA: Record<string, string> = {
  EST: 'America/New_York',
  EDT: 'America/New_York',
  CST: 'America/Chicago',
  CDT: 'America/Chicago',
  MST: 'America/Denver',
  MDT: 'America/Denver',
  PST: 'America/Los_Angeles',
  PDT: 'America/Los_Angeles',
  GMT: 'Europe/London',
  BST: 'Europe/London',
  CET: 'Europe/Berlin',
  CEST: 'Europe/Berlin',
  IST: 'Asia/Kolkata',
  GST: 'Asia/Dubai',
  SGT: 'Asia/Singapore',
  AEST: 'Australia/Sydney',
  AEDT: 'Australia/Sydney',
  UTC: 'UTC',
};

// Convert Date string + Time string + Timezone into accurate ISO Date range for Google Calendar API
function parseDateTimeRange(dateStr: string, timeStr: string, timezoneCode: string, durationMinutes: number) {
  let timeIana = 'America/New_York';
  if (timezoneCode) {
    if (timezoneCode.includes('/') || timezoneCode.includes('_') || timezoneCode === 'UTC') {
      timeIana = timezoneCode;
    } else if (TIMEZONE_IANA[timezoneCode.toUpperCase()]) {
      timeIana = TIMEZONE_IANA[timezoneCode.toUpperCase()];
    }
  }
  
  // timeStr is like "10:30 AM" or "02:30 PM"
  const match = timeStr.match(/^(\d{1,2}):(\d{2})\s*(AM|PM)$/i);
  let hours = 10;
  let minutes = 30;
  
  if (match) {
    hours = parseInt(match[1], 10);
    minutes = parseInt(match[2], 10);
    const ampm = match[3].toUpperCase();
    if (ampm === 'PM' && hours < 12) hours += 12;
    if (ampm === 'AM' && hours === 12) hours = 0;
  }

  const parts = dateStr.split('-');
  const y = parseInt(parts[0], 10) || 2026;
  const m = parseInt(parts[1] || '1', 10);
  const d = parseInt(parts[2] || '1', 10);

  // Calculate the exact UTC Date object corresponding to (year, month, day, hr, min) in `timeIana`
  const getUtcDateInZone = (year: number, month: number, day: number, hr: number, min: number, tz: string) => {
    const initialUtcGuess = new Date(Date.UTC(year, month - 1, day, hr, min, 0));
    const getPartsInTz = (dateObj: Date) => {
      let df: Intl.DateTimeFormat;
      try {
        df = new Intl.DateTimeFormat('en-US', {
          timeZone: tz,
          year: 'numeric', month: '2-digit', day: '2-digit',
          hour: '2-digit', minute: '2-digit', second: '2-digit', hour12: false
        });
      } catch (e) {
        df = new Intl.DateTimeFormat('en-US', {
          timeZone: 'UTC',
          year: 'numeric', month: '2-digit', day: '2-digit',
          hour: '2-digit', minute: '2-digit', second: '2-digit', hour12: false
        });
      }
      const p: Record<string, string> = {};
      df.formatToParts(dateObj).forEach(pt => p[pt.type] = pt.value);
      let h = parseInt(p.hour || '0', 10);
      if (h === 24) h = 0;
      return new Date(Date.UTC(
        parseInt(p.year || String(year), 10),
        parseInt(p.month || String(month), 10) - 1,
        parseInt(p.day || String(day), 10),
        h,
        parseInt(p.minute || '0', 10),
        parseInt(p.second || '0', 10)
      )).getTime();
    };

    const diff = getPartsInTz(initialUtcGuess) - initialUtcGuess.getTime();
    return new Date(initialUtcGuess.getTime() - diff);
  };

  const startUtc = getUtcDateInZone(y, m, d, hours, minutes, timeIana);
  const endUtc = new Date(startUtc.getTime() + (durationMinutes || 15) * 60 * 1000);

  return {
    startIso: startUtc.toISOString(),
    endIso: endUtc.toISOString(),
    timeZoneIana: timeIana
  };
}

// ==========================================
// API ROUTES
// ==========================================

// 1. Health check
app.get('/api/health', (req, res) => {
  res.json({ status: 'ok', time: new Date().toISOString() });
});

// 2. Check Google OAuth status
app.get('/api/oauth/google/status', async (req, res) => {
  const oauth2Client = getOAuth2Client(req);
  const isConfigured = !!(process.env.OAUTH_CLIENT_ID && process.env.OAUTH_CLIENT_SECRET);
  const isAuthenticated = !!(googleTokens && (googleTokens.access_token || googleTokens.refresh_token));

  let calendarInfo = null;
  if (oauth2Client && isAuthenticated) {
    try {
      const calendar = google.calendar({ version: 'v3', auth: oauth2Client });
      const primary = await calendar.calendars.get({ calendarId: 'primary' });
      calendarInfo = {
        summary: primary.data.summary,
        timeZone: primary.data.timeZone
      };
    } catch (err: any) {
      if (err?.message?.includes('insufficient authentication scopes') || err?.code === 403) {
        // Soft fallback if existing token scope is event-only
        calendarInfo = {
          summary: 'Google Calendar (Connected)',
          timeZone: 'UTC'
        };
      } else {
        console.error('Error fetching calendar info:', err?.message || err);
        calendarInfo = {
          summary: 'Google Calendar (Connected)',
          timeZone: 'UTC'
        };
      }
    }
  }

  let appUrl = process.env.APP_URL;
  if (!appUrl && req) {
    const host = (req.headers['x-forwarded-host'] as string) || req.headers.host;
    let proto = (req.headers['x-forwarded-proto'] as string) || 'https';
    if (proto.includes(',')) proto = proto.split(',')[0].trim();
    if (host) appUrl = `${proto}://${host}`;
  }
  if (!appUrl) appUrl = 'http://localhost:3000';

  const origin = appUrl.replace(/\/$/, '');
  const redirectUri = `${origin}/api/oauth/google/callback`;

  res.json({
    configured: isConfigured,
    authenticated: isAuthenticated,
    origin,
    redirectUri,
    calendarInfo
  });
});

// 3. Get Google OAuth Auth URL
app.get('/api/oauth/google/url', (req, res) => {
  const oauth2Client = getOAuth2Client(req);
  if (!oauth2Client) {
    return res.status(400).json({ error: 'OAuth client credentials (OAUTH_CLIENT_ID / OAUTH_CLIENT_SECRET) not set.' });
  }

  const url = oauth2Client.generateAuthUrl({
    access_type: 'offline',
    scope: [
      'https://www.googleapis.com/auth/calendar',
      'https://www.googleapis.com/auth/calendar.events',
      'https://www.googleapis.com/auth/calendar.readonly'
    ],
    prompt: 'consent'
  });

  res.json({ url });
});

// 4. Google OAuth Callback
app.get('/api/oauth/google/callback', async (req, res) => {
  const code = req.query.code as string;
  if (!code) {
    return res.status(400).send('Authorization code missing from request.');
  }

  try {
    const oauth2Client = getOAuth2Client(req);
    if (!oauth2Client) {
      throw new Error('OAuth2 client configuration missing.');
    }

    const { tokens } = await oauth2Client.getToken(code);
    saveTokens(tokens);

    res.send(`
      <!DOCTYPE html>
      <html>
        <head>
          <title>Google Calendar Connected</title>
          <meta name="viewport" content="width=device-width, initial-scale=1.0">
          <style>
            body { font-family: system-ui, -apple-system, sans-serif; display: flex; align-items: center; justify-content: center; height: 100vh; margin: 0; background: #0f172a; color: white; text-align: center; padding: 1rem; }
            .card { background: #1e293b; padding: 2.5rem 2rem; border-radius: 1.5rem; box-shadow: 0 20px 25px -5px rgba(0,0,0,0.5); max-width: 420px; border: 1px solid #334155; }
            .icon { width: 60px; h-60px; background: #064e3b; color: #34d399; border-radius: 50%; display: flex; align-items: center; justify-content: center; margin: 0 auto 1.5rem auto; font-size: 2rem; }
            h2 { color: #f8fafc; margin: 0 0 0.5rem 0; font-size: 1.5rem; font-weight: 800; }
            p { color: #94a3b8; font-size: 0.875rem; line-height: 1.5; margin-bottom: 1.5rem; }
            button { background: #2563eb; color: white; border: none; padding: 0.875rem 1.75rem; border-radius: 0.75rem; font-weight: 800; font-size: 0.875rem; cursor: pointer; transition: all 0.2s; width: 100%; }
            button:hover { background: #1d4ed8; }
          </style>
        </head>
        <body>
          <div class="card">
            <div class="icon">✓</div>
            <h2>Google Calendar Connected!</h2>
            <p>Your Google Calendar is successfully linked. Future strategy calls will automatically schedule directly into your calendar with Google Meet links & attendee invites.</p>
            <button onclick="finish();">Return to App</button>
          </div>
          <script>
            function finish() {
              if (window.opener) {
                try { window.opener.postMessage('calendar_connected', '*'); } catch (e) {}
                window.close();
              } else {
                window.location.href = '/';
              }
            }
            // Auto close popup after 2 seconds
            if (window.opener) {
              try { window.opener.postMessage('calendar_connected', '*'); } catch (e) {}
              setTimeout(() => { window.close(); }, 2500);
            }
          </script>
        </body>
      </html>
    `);
  } catch (error: any) {
    console.error('Error exchanging OAuth code:', error);
    res.status(500).send(`Authentication failed: ${error?.message || error}`);
  }
});

// 5. Get list of all booked meetings
app.get('/api/bookings', (req, res) => {
  res.json({
    total: bookingsStore.length,
    bookings: bookingsStore
  });
});

// 6. Create a New Booking & Schedule Google Calendar + Google Meet + Auto Email Invitation
app.post('/api/bookings', async (req, res) => {
  const {
    fullName,
    email,
    phone = '',
    company = '',
    notes = '',
    date, // YYYY-MM-DD
    time, // e.g. "10:30 AM"
    timezone = 'EST',
    topic = 'Custom Website Development',
    callDuration = 15
  } = req.body;

  if (!fullName || !email || !date || !time) {
    return res.status(400).json({ error: 'fullName, email, date, and time are required.' });
  }

  const bookingId = `bk_${Date.now()}_${Math.random().toString(36).substring(2, 7)}`;
  const { startIso, endIso, timeZoneIana } = parseDateTimeRange(date, time, timezone, Number(callDuration) || 15);

  let meetLink: string | undefined = undefined;
  let eventId: string | undefined = undefined;
  let calendarEventUrl: string | undefined = undefined;
  let calendarCreated = false;
  let emailInvitationSent = false;
  let calendarError: string | null = null;

  const oauth2Client = getOAuth2Client(req);

  if (!process.env.OAUTH_CLIENT_ID || !process.env.OAUTH_CLIENT_SECRET) {
    calendarError = 'Google OAuth credentials (OAUTH_CLIENT_ID / OAUTH_CLIENT_SECRET) are missing.';
  } else if (!googleTokens) {
    calendarError = 'Google Calendar is not connected to server. Host must click "Connect Google Calendar" in app settings.';
  } else if (!oauth2Client) {
    calendarError = 'Unable to initialize OAuth client.';
  } else {
    try {
      const calendar = google.calendar({ version: 'v3', auth: oauth2Client });

      // Create Google Calendar event with Google Meet videoconference and auto email invitation to client!
      const response = await calendar.events.insert({
        calendarId: 'primary',
        conferenceDataVersion: 1,
        sendUpdates: 'all', // Automatically sends calendar invitation email to attendees
        requestBody: {
          summary: `Strategy Call: ${fullName} (${company || 'Prospect'})`,
          description: `🌟 Webtron Solution Strategy Call\n\n📌 Topic: ${topic}\n👤 Client Name: ${fullName}\n✉️ Email: ${email}\n📞 Phone: ${phone || 'Not provided'}\n🏢 Website: ${company || 'N/A'}\n\n📝 Notes:\n${notes || 'None provided'}\n\n📞 Join Video Call via Google Meet link below.`,
          start: {
            dateTime: startIso,
            timeZone: timeZoneIana,
          },
          end: {
            dateTime: endIso,
            timeZone: timeZoneIana,
          },
          attendees: [
            { email: email, displayName: fullName }
          ],
          conferenceData: {
            createRequest: {
              requestId: `req-${bookingId}`,
              conferenceSolutionKey: {
                type: 'hangoutsMeet'
              }
            }
          },
          reminders: {
            useDefault: false,
            overrides: [
              { method: 'email', minutes: 24 * 60 },
              { method: 'popup', minutes: 15 }
            ]
          }
        }
      });

      const eventData = response.data;
      eventId = eventData.id || undefined;
      calendarEventUrl = eventData.htmlLink || undefined;
      meetLink = eventData.hangoutLink || eventData.conferenceData?.entryPoints?.find(ep => ep.entryPointType === 'video')?.uri || undefined;
      calendarCreated = true;
      emailInvitationSent = true;
    } catch (error: any) {
      console.error('Error creating Google Calendar event:', error?.message || error);
      calendarError = error?.message || String(error);
    }
  }

  // Fallback Google Meet link if calendar API isn't authenticated yet or fails
  if (!meetLink) {
    meetLink = `https://meet.google.com/lookup/webtron-${bookingId.substring(3, 9)}`;
  }

  const newBooking: Booking = {
    id: bookingId,
    fullName,
    email,
    phone,
    company,
    notes,
    date,
    time,
    timezone,
    topic,
    callDuration: Number(callDuration) || 15,
    createdAt: new Date().toISOString(),
    meetLink,
    eventId,
    calendarEventUrl,
    status: 'confirmed'
  };

  bookingsStore.unshift(newBooking);
  saveBookings();

  res.json({
    success: true,
    booking: newBooking,
    calendarCreated,
    emailInvitationSent,
    calendarError,
    meetLink,
    calendarEventUrl
  });
});

// 7. Cancel a Booking
app.delete('/api/bookings/:id', async (req, res) => {
  const { id } = req.params;
  const booking = bookingsStore.find(b => b.id === id);

  if (!booking) {
    return res.status(404).json({ error: 'Booking not found.' });
  }

  booking.status = 'cancelled';

  // Delete from Google Calendar if eventId exists
  if (booking.eventId) {
    const oauth2Client = getOAuth2Client();
    if (oauth2Client && googleTokens) {
      try {
        const calendar = google.calendar({ version: 'v3', auth: oauth2Client });
        await calendar.events.delete({
          calendarId: 'primary',
          eventId: booking.eventId,
          sendUpdates: 'all' // Sends cancellation email to attendee
        });
      } catch (err: any) {
        console.error('Error deleting calendar event:', err?.message || err);
      }
    }
  }

  saveBookings();
  res.json({ success: true, message: 'Booking cancelled.', booking });
});

// ==========================================
// VITE / STATIC MIDDLWARE
// ==========================================

async function startServer() {
  if (process.env.NODE_ENV !== 'production') {
    const vite = await createViteServer({
      server: { middlewareMode: true },
      appType: 'spa',
    });
    app.use(vite.middlewares);
  } else {
    const distPath = path.join(process.cwd(), 'dist');
    app.use(express.static(distPath));
    app.get('*', (req, res) => {
      res.sendFile(path.join(distPath, 'index.html'));
    });
  }

  app.listen(PORT, '0.0.0.0', () => {
    console.log(`Server listening on http://0.0.0.0:${PORT}`);
  });
}

startServer();
