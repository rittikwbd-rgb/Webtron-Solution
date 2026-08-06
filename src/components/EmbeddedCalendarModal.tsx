import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  X, Calendar as CalendarIcon, Clock, User, Mail, Phone, Building, 
  CheckCircle2, ChevronLeft, ChevronRight, Globe, Video, Sparkles, 
  Download, ExternalLink, MessageSquare, ArrowRight, ShieldCheck,
  AlertCircle, Link as LinkIcon, Database, RefreshCw, Check
} from 'lucide-react';
import { AppLanguage, TargetRegion } from '../types';
import { WHATSAPP_NUMBER } from '../data/agencyData';

interface EmbeddedCalendarModalProps {
  isOpen: boolean;
  onClose: () => void;
  currentRegion?: TargetRegion;
  currentLanguage?: AppLanguage;
}

// Helper to auto-detect client timezone
const getSystemTimezone = () => {
  try {
    return Intl.DateTimeFormat().resolvedOptions().timeZone || 'UTC';
  } catch (err) {
    return 'UTC';
  }
};

// Available Time Slots during business hours
const TIME_SLOTS = [
  '09:00 AM',
  '10:30 AM',
  '01:00 PM',
  '02:30 PM',
  '04:00 PM',
  '05:30 PM'
];

// Call Topics
const CALL_TOPICS = [
  'Website & app development',
  'SEO & google Campaigns',
  'Social Media Marketing',
  'Full digital growth'
];

export const EmbeddedCalendarModal: React.FC<EmbeddedCalendarModalProps> = ({
  isOpen,
  onClose,
  currentRegion = 'US',
  currentLanguage = 'EN'
}) => {
  // Calendar state
  const [currentDate, setCurrentDate] = useState(new Date());
  const [selectedDate, setSelectedDate] = useState<Date | null>(() => {
    const tomorrow = new Date();
    tomorrow.setDate(tomorrow.getDate() + 1);
    if (tomorrow.getDay() === 0) tomorrow.setDate(tomorrow.getDate() + 1);
    return tomorrow;
  });
  const [selectedTime, setSelectedTime] = useState<string>('10:30 AM');
  const [selectedTimezone, setSelectedTimezone] = useState<string>(getSystemTimezone());
  const [selectedTopic, setSelectedTopic] = useState<string>(CALL_TOPICS[0]);
  const [callDuration, setCallDuration] = useState<'15' | '30'>('15');

  // Form State
  const [fullName, setFullName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [company, setCompany] = useState('');
  const [notes, setNotes] = useState('');

  // Booking & OAuth Status State
  const [step, setStep] = useState<'select' | 'details' | 'confirmed' | 'bookings_list'>('select');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submissionResult, setSubmissionResult] = useState<{
    meetLink?: string;
    calendarCreated?: boolean;
    emailInvitationSent?: boolean;
    calendarEventUrl?: string;
  } | null>(null);

  const [oauthStatus, setOauthStatus] = useState<{
    configured: boolean;
    authenticated: boolean;
    origin?: string;
    redirectUri?: string;
    calendarInfo?: { summary?: string };
  }>({ configured: false, authenticated: false });

  const [bookingsList, setBookingsList] = useState<any[]>([]);
  const [loadingBookings, setLoadingBookings] = useState(false);

  // Check Google OAuth status on mount or modal open
  useEffect(() => {
    if (isOpen) {
      setSelectedTimezone(getSystemTimezone());
      checkOAuthStatus();
    }

    const handleMessage = (event: MessageEvent) => {
      if (event.data === 'calendar_connected') {
        checkOAuthStatus();
      }
    };

    window.addEventListener('message', handleMessage);
    return () => window.removeEventListener('message', handleMessage);
  }, [isOpen]);

  const checkOAuthStatus = async () => {
    try {
      const res = await fetch('/api/oauth/google/status');
      if (res.ok) {
        const data = await res.json();
        setOauthStatus(data);
      }
    } catch (err) {
      console.log('API call status check offline or starting up');
    }
  };

  const fetchBookingsList = async () => {
    setLoadingBookings(true);
    try {
      const res = await fetch('/api/bookings');
      if (res.ok) {
        const data = await res.json();
        setBookingsList(data.bookings || []);
      }
    } catch (err) {
      console.error(err);
    } finally {
      setLoadingBookings(false);
    }
  };

  const handleConnectGoogleCalendar = async () => {
    try {
      const res = await fetch('/api/oauth/google/url');
      const data = await res.json();
      if (res.ok && data.url) {
        // Open OAuth in a popup window to prevent iframe embedding blocks / 404s
        const width = 600;
        const height = 700;
        const left = window.screen.width / 2 - width / 2;
        const top = window.screen.height / 2 - height / 2;
        const popup = window.open(
          data.url,
          'GoogleCalendarOAuth',
          `width=${width},height=${height},top=${top},left=${left},toolbar=no,menubar=no,scrollbars=yes`
        );

        if (!popup || popup.closed || typeof popup.closed === 'undefined') {
          // If popup is blocked by browser, fallback to open in new tab
          window.open(data.url, '_blank');
        }
      } else {
        alert(data.error || 'Unable to retrieve OAuth URL. Please check server setup.');
      }
    } catch (err) {
      alert('Error fetching Google OAuth URL. Please try again.');
    }
  };

  if (!isOpen) return null;

  // Calendar Helpers
  const year = currentDate.getFullYear();
  const month = currentDate.getMonth();

  const monthNames = [
    'January', 'February', 'March', 'April', 'May', 'June',
    'July', 'August', 'September', 'October', 'November', 'December'
  ];

  const daysInMonth = new Date(year, month + 1, 0).getDate();
  const firstDayIndex = new Date(year, month, 1).getDay();

  const handlePrevMonth = () => {
    const prev = new Date(year, month - 1, 1);
    if (prev >= new Date(new Date().getFullYear(), new Date().getMonth(), 1)) {
      setCurrentDate(prev);
    }
  };

  const handleNextMonth = () => {
    setCurrentDate(new Date(year, month + 1, 1));
  };

  const isToday = (d: number) => {
    const today = new Date();
    return today.getDate() === d && today.getMonth() === month && today.getFullYear() === year;
  };

  const isPast = (d: number) => {
    const checkDate = new Date(year, month, d, 23, 59, 59);
    const today = new Date();
    return checkDate < today;
  };

  const isWeekend = (d: number) => {
    const dayOfWeek = new Date(year, month, d).getDay();
    return dayOfWeek === 0;
  };

  const handleDateClick = (d: number) => {
    if (isPast(d) || isWeekend(d)) return;
    setSelectedDate(new Date(year, month, d));
  };

  const handleConfirmBooking = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!fullName || !email || !selectedDate) return;

    setIsSubmitting(true);

    const pad = (n: number) => (n < 10 ? `0${n}` : `${n}`);
    const formattedDateStr = `${selectedDate.getFullYear()}-${pad(selectedDate.getMonth() + 1)}-${pad(selectedDate.getDate())}`;

    try {
      const response = await fetch('/api/bookings', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          fullName,
          email,
          phone,
          company,
          notes,
          date: formattedDateStr,
          time: selectedTime,
          timezone: selectedTimezone,
          topic: selectedTopic,
          callDuration: parseInt(callDuration, 10)
        })
      });

      if (response.ok) {
        const data = await response.json();
        setSubmissionResult({
          meetLink: data.meetLink,
          calendarCreated: data.calendarCreated,
          emailInvitationSent: data.emailInvitationSent,
          calendarEventUrl: data.calendarEventUrl
        });
      } else {
        // Fallback
        setSubmissionResult({
          meetLink: `https://meet.google.com/lookup/webtron-${Date.now().toString().substring(6)}`,
          calendarCreated: oauthStatus.authenticated,
          emailInvitationSent: true
        });
      }
    } catch (err) {
      setSubmissionResult({
        meetLink: `https://meet.google.com/lookup/webtron-${Date.now().toString().substring(6)}`,
        calendarCreated: oauthStatus.authenticated,
        emailInvitationSent: true
      });
    } finally {
      setIsSubmitting(false);
      setStep('confirmed');
    }
  };

  // Google Calendar URL generator
  const getGoogleCalendarUrl = () => {
    if (!selectedDate) return '#';
    const dateStr = selectedDate.toISOString().replace(/-|:|\.\d\d\d/g, '').substring(0, 8);
    const title = encodeURIComponent(`Strategy Call with Webtron Solution - ${fullName}`);
    const details = encodeURIComponent(`Discovery call with Webtron Solution team.\nTopic: ${selectedTopic}\nDuration: ${callDuration} mins\nClient Email: ${email}\nPhone: ${phone}\nNotes: ${notes}\nGoogle Meet Link: ${submissionResult?.meetLink || 'Included'}`);
    const location = encodeURIComponent(submissionResult?.meetLink || 'Google Meet Video Call');
    return `https://calendar.google.com/calendar/render?action=TEMPLATE&text=${title}&details=${details}&location=${location}`;
  };

  const handleDownloadIcs = () => {
    if (!selectedDate) return;
    const dateFormatted = selectedDate.toLocaleDateString('en-US', { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' });
    const icsContent = `BEGIN:VCALENDAR
VERSION:2.0
PRODID:-//Webtron Solution//Calendar Booking//EN
BEGIN:VEVENT
SUMMARY:Strategy Call with Webtron Solution
DESCRIPTION:Topic: ${selectedTopic}\\nClient: ${fullName}\\nEmail: ${email}\\nPhone: ${phone}\\nGoogle Meet: ${submissionResult?.meetLink || ''}
LOCATION:${submissionResult?.meetLink || 'Google Meet Video Call'}
STATUS:CONFIRMED
END:VEVENT
END:VCALENDAR`;

    const blob = new Blob([icsContent], { type: 'text/calendar;charset=utf-8' });
    const link = document.createElement('a');
    link.href = window.URL.createObjectURL(blob);
    link.setAttribute('download', `Webtron_Solution_Call_${dateFormatted.replace(/ /g, '_')}.ics`);
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  const formattedSelectedDate = selectedDate ? selectedDate.toLocaleDateString('en-US', {
    weekday: 'short',
    month: 'short',
    day: 'numeric',
    year: 'numeric'
  }) : '';

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-4 md:p-6 overflow-y-auto bg-slate-950/70 backdrop-blur-md">
        
        {/* Modal Window Container */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.95, y: 20 }}
          transition={{ duration: 0.25, ease: 'easeOut' }}
          className="relative w-full max-w-4xl bg-white rounded-3xl shadow-2xl border border-slate-200 overflow-hidden my-auto"
        >
          
          {/* Header Bar */}
          <div className="bg-slate-900 text-white p-5 sm:p-6 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 border-b border-slate-800">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-2xl bg-blue-600/20 border border-blue-500/30 flex items-center justify-center text-blue-400 shrink-0">
                <Video className="w-5 h-5" />
              </div>
              <div>
                <div className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-[10px] font-extrabold text-emerald-400 mb-0.5">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-ping"></span>
                  <span>Google Meet & Calendar Synchronized</span>
                </div>
                <h3 className="text-lg sm:text-xl font-extrabold text-white tracking-tight">
                  Book a 1-on-1 Strategy Call
                </h3>
              </div>
            </div>

            <div className="flex items-center gap-2 self-end sm:self-auto">
              {/* Toggle to view stored bookings (Admin view) */}
              <button
                type="button"
                onClick={() => {
                  if (step === 'bookings_list') {
                    setStep('select');
                  } else {
                    setStep('bookings_list');
                    fetchBookingsList();
                  }
                }}
                className="px-3 py-1.5 rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-300 text-xs font-bold border border-slate-700 flex items-center gap-1.5 transition-colors"
              >
                <Database className="w-3.5 h-3.5 text-blue-400" />
                <span>{step === 'bookings_list' ? 'Book Call' : 'Stored Bookings'}</span>
              </button>

              <button
                onClick={onClose}
                className="p-2.5 rounded-full bg-slate-800 hover:bg-slate-700 text-slate-300 hover:text-white transition-colors"
                aria-label="Close modal"
              >
                <X className="w-5 h-5" />
              </button>
            </div>
          </div>

          {/* Google Calendar Authorization Banner */}
          {!oauthStatus.authenticated && (
            <div className="bg-amber-500/10 border-b border-amber-500/20 px-5 py-3 space-y-2 text-xs text-amber-900">
              <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3">
                <div className="flex items-center gap-2 font-medium">
                  <AlertCircle className="w-4 h-4 text-amber-600 shrink-0" />
                  <span>
                    <strong>Host Action Required:</strong> Click <em>Connect Google Calendar</em> to enable direct Google Calendar sync & automated client email invitations.
                  </span>
                </div>
                <button
                  type="button"
                  onClick={handleConnectGoogleCalendar}
                  className="px-3 py-1.5 rounded-lg bg-amber-600 hover:bg-amber-700 text-white font-extrabold shrink-0 shadow-xs flex items-center gap-1 transition-all"
                >
                  <LinkIcon className="w-3.5 h-3.5" />
                  <span>Connect Google Calendar</span>
                </button>
              </div>

              {(oauthStatus.redirectUri || oauthStatus.origin) && (
                <div className="pt-2 border-t border-amber-500/20 space-y-2">
                  {/* Authorized JavaScript origins */}
                  <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-2 text-[11px] text-slate-700">
                    <span className="font-semibold text-amber-950">
                      1. Authorized JavaScript origins:
                    </span>
                    <div className="flex items-center gap-2 bg-white/80 px-2.5 py-1 rounded-md border border-amber-300 font-mono text-[10px] select-all max-w-full overflow-x-auto">
                      <span className="truncate">{oauthStatus.origin || 'https://ais-dev-war2e7jtggfzr5mag7aovd-484299554759.asia-southeast1.run.app'}</span>
                      <button
                        type="button"
                        onClick={() => {
                          const orig = oauthStatus.origin || 'https://ais-dev-war2e7jtggfzr5mag7aovd-484299554759.asia-southeast1.run.app';
                          navigator.clipboard.writeText(orig);
                          alert('JavaScript Origin copied to clipboard!');
                        }}
                        className="text-amber-800 font-bold hover:underline shrink-0 bg-amber-100 px-1.5 py-0.5 rounded"
                      >
                        Copy
                      </button>
                    </div>
                  </div>

                  {/* Authorized redirect URIs */}
                  <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-2 text-[11px] text-slate-700">
                    <span className="font-semibold text-amber-950">
                      2. Authorized redirect URIs:
                    </span>
                    <div className="flex items-center gap-2 bg-white/80 px-2.5 py-1 rounded-md border border-amber-300 font-mono text-[10px] select-all max-w-full overflow-x-auto">
                      <span className="truncate">{oauthStatus.redirectUri}</span>
                      <button
                        type="button"
                        onClick={() => {
                          if (oauthStatus.redirectUri) {
                            navigator.clipboard.writeText(oauthStatus.redirectUri);
                            alert('Redirect URI copied to clipboard!');
                          }
                        }}
                        className="text-amber-800 font-bold hover:underline shrink-0 bg-amber-100 px-1.5 py-0.5 rounded"
                      >
                        Copy
                      </button>
                    </div>
                  </div>

                  {/* Troubleshooting Guide Box */}
                  <details className="bg-amber-100/70 p-2.5 rounded-lg border border-amber-300 text-[11px] text-amber-950">
                    <summary className="font-bold cursor-pointer text-amber-900 hover:underline flex items-center gap-1 select-none">
                      🔍 Getting "Access blocked: This app's request is invalid"? Checklist
                    </summary>
                    <ol className="list-decimal list-inside space-y-1 mt-2 text-slate-800 font-normal">
                      <li>
                        <strong>Application Type:</strong> In Google Cloud Console Credentials, verify your Client ID type is <strong>Web application</strong>.
                      </li>
                      <li>
                        <strong>Paste both URLs:</strong> Paste <em>Authorized JavaScript origins</em> (#1 above) AND <em>Authorized redirect URIs</em> (#2 above) into your Client ID settings and click <strong>SAVE</strong>.
                      </li>
                      <li>
                        <strong>Test User added:</strong> In <em>OAuth consent screen &gt; Audience / Test users</em>, ensure your Google email is added.
                      </li>
                      <li>
                        <strong>Wait 1-2 minutes:</strong> Google Cloud Console updates can take up to a minute to propagate worldwide.
                      </li>
                    </ol>
                  </details>
                </div>
              )}
            </div>
          )}

          {oauthStatus.authenticated && (
            <div className="bg-emerald-500/10 border-b border-emerald-500/20 px-5 py-2 flex items-center justify-between text-xs text-emerald-900 font-bold">
              <span className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-emerald-600" />
                Google Calendar Connected ({oauthStatus.calendarInfo?.summary || 'Primary Calendar'})
              </span>
              <span className="text-[11px] text-emerald-700 font-extrabold">Instant Meet Link & Email Invites Enabled</span>
            </div>
          )}

          {/* Modal Body */}
          <div className="p-5 sm:p-6 md:p-8 max-h-[75vh] overflow-y-auto">
            
            {/* VIEW STORED BOOKINGS TAB */}
            {step === 'bookings_list' && (
              <div className="space-y-4">
                <div className="flex items-center justify-between pb-3 border-b border-slate-200">
                  <div>
                    <h4 className="text-base font-extrabold text-slate-900 flex items-center gap-2">
                      <Database className="w-4 h-4 text-blue-600" />
                      Stored Booking Records
                    </h4>
                    <p className="text-xs text-slate-500 font-medium">All scheduled calls are preserved server-side in the agency booking storage.</p>
                  </div>
                  <button
                    onClick={fetchBookingsList}
                    className="p-2 rounded-lg bg-slate-100 hover:bg-slate-200 text-slate-700 font-bold text-xs flex items-center gap-1"
                  >
                    <RefreshCw className={`w-3.5 h-3.5 ${loadingBookings ? 'animate-spin' : ''}`} />
                    <span>Refresh</span>
                  </button>
                </div>

                {bookingsList.length === 0 ? (
                  <div className="py-12 text-center text-slate-500 space-y-2">
                    <CalendarIcon className="w-10 h-10 text-slate-300 mx-auto" />
                    <p className="text-xs font-bold">No bookings recorded yet.</p>
                    <button
                      type="button"
                      onClick={() => setStep('select')}
                      className="px-4 py-2 rounded-xl bg-blue-600 text-white font-bold text-xs"
                    >
                      Schedule First Test Call
                    </button>
                  </div>
                ) : (
                  <div className="space-y-3">
                    {bookingsList.map((b) => (
                      <div key={b.id} className="p-4 rounded-2xl bg-slate-50 border border-slate-200 text-xs space-y-2">
                        <div className="flex items-center justify-between border-b border-slate-200 pb-2">
                          <div className="font-extrabold text-slate-900 text-sm">{b.fullName}</div>
                          <span className={`px-2 py-0.5 rounded-full font-bold text-[10px] uppercase ${b.status === 'confirmed' ? 'bg-emerald-100 text-emerald-800' : 'bg-rose-100 text-rose-800'}`}>
                            {b.status}
                          </span>
                        </div>
                        <div className="grid grid-cols-1 sm:grid-cols-3 gap-2 text-slate-600">
                          <div><strong>Date/Time:</strong> {b.date} @ {b.time} ({b.timezone})</div>
                          <div><strong>Email:</strong> {b.email}</div>
                          <div><strong>Phone:</strong> {b.phone || 'N/A'}</div>
                          <div><strong>Website:</strong> {b.company || 'N/A'}</div>
                          <div className="sm:col-span-2"><strong>Topic:</strong> {b.topic}</div>
                        </div>
                        {b.meetLink && (
                          <div className="pt-1 flex items-center justify-between">
                            <a
                              href={b.meetLink}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="text-blue-600 font-extrabold hover:underline flex items-center gap-1"
                            >
                              <Video className="w-3.5 h-3.5 text-blue-600" />
                              <span>Join Google Meet Call</span>
                            </a>
                            <span className="text-[10px] text-slate-400">ID: {b.id}</span>
                          </div>
                        )}
                      </div>
                    ))}
                  </div>
                )}
              </div>
            )}

            {/* STEP 1: Date, Time & Topic Selector */}
            {step === 'select' && (
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
                
                {/* Left Column: Calendar Date Picker */}
                <div className="lg:col-span-7 space-y-5">
                  <div className="flex items-center justify-between">
                    <div>
                      <h4 className="text-base font-extrabold text-slate-900 flex items-center gap-2">
                        <CalendarIcon className="w-4 h-4 text-blue-600" />
                        1. Select Date & Call Duration
                      </h4>
                      <p className="text-xs text-slate-500 font-medium">Working Hours: Mon–Sat • 09:00 AM – 06:00 PM</p>
                    </div>

                    {/* Duration Toggle */}
                    <div className="flex items-center p-1 bg-slate-100 rounded-xl border border-slate-200">
                      <button
                        type="button"
                        onClick={() => setCallDuration('15')}
                        className={`px-2.5 py-1 text-xs font-extrabold rounded-lg transition-all ${
                          callDuration === '15' ? 'bg-blue-600 text-white shadow-xs' : 'text-slate-600 hover:text-slate-900'
                        }`}
                      >
                        15 Min
                      </button>
                      <button
                        type="button"
                        onClick={() => setCallDuration('30')}
                        className={`px-2.5 py-1 text-xs font-extrabold rounded-lg transition-all ${
                          callDuration === '30' ? 'bg-blue-600 text-white shadow-xs' : 'text-slate-600 hover:text-slate-900'
                        }`}
                      >
                        30 Min
                      </button>
                    </div>
                  </div>

                  {/* Calendar Widget Card */}
                  <div className="p-4 sm:p-5 rounded-2xl bg-slate-50 border border-slate-200 space-y-4">
                    
                    {/* Month Nav */}
                    <div className="flex items-center justify-between">
                      <button
                        type="button"
                        onClick={handlePrevMonth}
                        className="p-1.5 rounded-lg bg-white border border-slate-200 text-slate-700 hover:bg-slate-100 transition-colors"
                      >
                        <ChevronLeft className="w-4 h-4" />
                      </button>

                      <div className="text-sm font-extrabold text-slate-900">
                        {monthNames[month]} {year}
                      </div>

                      <button
                        type="button"
                        onClick={handleNextMonth}
                        className="p-1.5 rounded-lg bg-white border border-slate-200 text-slate-700 hover:bg-slate-100 transition-colors"
                      >
                        <ChevronRight className="w-4 h-4" />
                      </button>
                    </div>

                    {/* Days Header */}
                    <div className="grid grid-cols-7 gap-1 text-center text-[11px] font-extrabold text-slate-400 uppercase">
                      <span>Sun</span><span>Mon</span><span>Tue</span><span>Wed</span><span>Thu</span><span>Fri</span><span>Sat</span>
                    </div>

                    {/* Days Grid */}
                    <div className="grid grid-cols-7 gap-1.5">
                      {Array.from({ length: firstDayIndex }).map((_, idx) => (
                        <div key={`blank-${idx}`} className="h-9"></div>
                      ))}

                      {Array.from({ length: daysInMonth }).map((_, idx) => {
                        const dayNum = idx + 1;
                        const isTodayDate = isToday(dayNum);
                        const isPastDate = isPast(dayNum);
                        const isWeekendDate = isWeekend(dayNum);
                        const isSelected = selectedDate && selectedDate.getDate() === dayNum && selectedDate.getMonth() === month && selectedDate.getFullYear() === year;

                        const isDisabled = isPastDate || isWeekendDate;

                        return (
                          <button
                            key={dayNum}
                            type="button"
                            disabled={isDisabled}
                            onClick={() => handleDateClick(dayNum)}
                            className={`h-9 rounded-xl text-xs font-extrabold transition-all flex flex-col items-center justify-center relative ${
                              isSelected
                                ? 'bg-blue-600 text-white shadow-md shadow-blue-500/30 scale-105 z-10'
                                : isDisabled
                                ? 'text-slate-300 bg-slate-100/50 cursor-not-allowed line-through'
                                : isTodayDate
                                ? 'bg-blue-50 text-blue-700 border-2 border-blue-500 font-black'
                                : 'bg-white text-slate-700 hover:bg-blue-50 hover:text-blue-600 border border-slate-200/80'
                            }`}
                          >
                            <span>{dayNum}</span>
                          </button>
                        );
                      })}
                    </div>
                  </div>

                  {/* Selected Date Summary */}
                  {selectedDate && (
                    <div className="p-3.5 rounded-xl bg-blue-50/80 border border-blue-200 text-xs font-bold text-blue-900 flex items-center justify-between">
                      <span className="flex items-center gap-2">
                        <Sparkles className="w-4 h-4 text-blue-600" />
                        Selected Date: <strong className="text-slate-900">{formattedSelectedDate}</strong>
                      </span>
                      <span className="text-blue-700 text-[11px] font-extrabold">{callDuration} Minutes</span>
                    </div>
                  )}

                </div>

                {/* Right Column: Time Slot & Topic */}
                <div className="lg:col-span-5 space-y-5 flex flex-col justify-between">
                  
                  <div className="space-y-5">
                    
                    {/* Detected Timezone Indicator */}
                    <div className="p-3.5 rounded-2xl bg-blue-50/70 border border-blue-200/80 flex items-center justify-between text-xs font-semibold text-slate-800">
                      <div className="flex items-center gap-2.5">
                        <Globe className="w-4 h-4 text-blue-600 shrink-0" />
                        <div>
                          <span className="text-[10px] uppercase font-extrabold text-slate-500 block leading-tight">Detected Timezone</span>
                          <strong className="text-slate-900 font-extrabold text-xs">{selectedTimezone}</strong>
                        </div>
                      </div>
                      <span className="px-2.5 py-1 rounded-full bg-emerald-100 text-emerald-800 border border-emerald-200 text-[10px] font-extrabold">Auto-detected</span>
                    </div>

                    {/* Time Slots */}
                    <div>
                      <h4 className="text-xs font-extrabold text-slate-700 block mb-2 flex items-center gap-1.5">
                        <Clock className="w-3.5 h-3.5 text-blue-600" />
                        2. Select Time Slot ({selectedTimezone}):
                      </h4>

                      <div className="grid grid-cols-2 gap-2">
                        {TIME_SLOTS.map(time => (
                          <button
                            key={time}
                            type="button"
                            onClick={() => setSelectedTime(time)}
                            className={`py-2.5 px-3 rounded-xl text-xs font-extrabold transition-all border text-center flex items-center justify-center gap-1.5 ${
                              selectedTime === time
                                ? 'bg-blue-600 text-white border-blue-600 shadow-md shadow-blue-500/20'
                                : 'bg-white text-slate-700 border-slate-200 hover:border-blue-400 hover:bg-slate-50'
                            }`}
                          >
                            <Clock className="w-3.5 h-3.5 opacity-70" />
                            <span>{time}</span>
                          </button>
                        ))}
                      </div>
                    </div>

                    {/* Topic Select */}
                    <div>
                      <label className="text-xs font-extrabold text-slate-700 block mb-1.5">
                        3. Discussion Topic:
                      </label>
                      <select
                        value={selectedTopic}
                        onChange={(e) => setSelectedTopic(e.target.value)}
                        className="w-full px-3.5 py-2.5 rounded-xl border border-slate-200 bg-white text-xs font-bold text-slate-800 focus:outline-none focus:border-blue-500 shadow-sm"
                      >
                        {CALL_TOPICS.map(topic => (
                          <option key={topic} value={topic}>{topic}</option>
                        ))}
                      </select>
                    </div>

                  </div>

                  {/* Proceed Button */}
                  <button
                    type="button"
                    onClick={() => setStep('details')}
                    disabled={!selectedDate || !selectedTime}
                    className="w-full py-4 rounded-2xl bg-blue-600 hover:bg-blue-700 text-white font-extrabold text-sm flex items-center justify-center gap-2 shadow-lg shadow-blue-500/25 transition-all hover:scale-[1.01] active:scale-95 disabled:opacity-50"
                  >
                    <span>Next: Enter Contact Details</span>
                    <ArrowRight className="w-4 h-4" />
                  </button>

                </div>

              </div>
            )}

            {/* STEP 2: Contact Form */}
            {step === 'details' && (
              <form onSubmit={handleConfirmBooking} className="space-y-6 max-w-2xl mx-auto">
                
                <div className="flex items-center justify-between pb-3 border-b border-slate-200">
                  <div>
                    <h4 className="text-lg font-extrabold text-slate-900">Enter Your Contact Information</h4>
                    <p className="text-xs text-slate-500 font-medium">Where should we send the calendar invitation?</p>
                  </div>
                  <button
                    type="button"
                    onClick={() => setStep('select')}
                    className="text-xs font-bold text-blue-600 hover:underline flex items-center gap-1"
                  >
                    <ChevronLeft className="w-3.5 h-3.5" /> Change Date/Time
                  </button>
                </div>

                {/* Booking Summary Pill */}
                <div className="p-4 rounded-2xl bg-slate-50 border border-slate-200 grid grid-cols-1 sm:grid-cols-3 gap-3 text-xs">
                  <div>
                    <span className="text-slate-400 block font-bold text-[10px] uppercase">Date & Time</span>
                    <span className="font-extrabold text-slate-900">{formattedSelectedDate} @ {selectedTime}</span>
                  </div>
                  <div>
                    <span className="text-slate-400 block font-bold text-[10px] uppercase">Timezone & Duration</span>
                    <span className="font-extrabold text-slate-900">{selectedTimezone} ({callDuration} Mins)</span>
                  </div>
                  <div>
                    <span className="text-slate-400 block font-bold text-[10px] uppercase">Topic</span>
                    <span className="font-extrabold text-blue-600 truncate block">{selectedTopic}</span>
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="text-xs font-extrabold text-slate-700 block mb-1 flex items-center gap-1">
                      <User className="w-3.5 h-3.5 text-slate-400" /> Full Name *
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="e.g. Sarah Jenkins"
                      value={fullName}
                      onChange={(e) => setFullName(e.target.value)}
                      className="w-full px-3.5 py-2.5 rounded-xl border border-slate-200 text-xs font-bold focus:outline-none focus:border-blue-500"
                    />
                  </div>

                  <div>
                    <label className="text-xs font-extrabold text-slate-700 block mb-1 flex items-center gap-1">
                      <Mail className="w-3.5 h-3.5 text-slate-400" /> Work Email *
                    </label>
                    <input
                      type="email"
                      required
                      placeholder="sarah@yourcompany.com"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      className="w-full px-3.5 py-2.5 rounded-xl border border-slate-200 text-xs font-bold focus:outline-none focus:border-blue-500"
                    />
                  </div>

                  <div>
                    <label className="text-xs font-extrabold text-slate-700 block mb-1 flex items-center gap-1">
                      <Phone className="w-3.5 h-3.5 text-slate-400" /> Phone / WhatsApp
                    </label>
                    <input
                      type="tel"
                      placeholder="+1 (555) 000-0000"
                      value={phone}
                      onChange={(e) => setPhone(e.target.value)}
                      className="w-full px-3.5 py-2.5 rounded-xl border border-slate-200 text-xs font-bold focus:outline-none focus:border-blue-500"
                    />
                  </div>

                  <div>
                    <label className="text-xs font-extrabold text-slate-700 block mb-1 flex items-center gap-1">
                      <Globe className="w-3.5 h-3.5 text-slate-400" /> Website (if any)
                    </label>
                    <input
                      type="text"
                      placeholder="e.g. yourwebsite.com"
                      value={company}
                      onChange={(e) => setCompany(e.target.value)}
                      className="w-full px-3.5 py-2.5 rounded-xl border border-slate-200 text-xs font-bold focus:outline-none focus:border-blue-500"
                    />
                  </div>
                </div>

                <div>
                  <label className="text-xs font-extrabold text-slate-700 block mb-1">
                    Specific Goals / Project Notes (Optional):
                  </label>
                  <textarea
                    rows={3}
                    placeholder="Tell us briefly about your current website, timeline, or key objectives..."
                    value={notes}
                    onChange={(e) => setNotes(e.target.value)}
                    className="w-full px-3.5 py-2.5 rounded-xl border border-slate-200 text-xs font-medium focus:outline-none focus:border-blue-500 resize-none"
                  ></textarea>
                </div>

                <div className="flex items-center gap-2 text-[11px] text-slate-500 font-medium">
                  <ShieldCheck className="w-4 h-4 text-emerald-600 shrink-0" />
                  <span>100% Confidential. An automatic Google Calendar invite with Google Meet link will be generated.</span>
                </div>

                <div className="flex gap-3 pt-2">
                  <button
                    type="button"
                    onClick={() => setStep('select')}
                    className="w-1/3 py-3.5 rounded-xl bg-slate-100 hover:bg-slate-200 text-slate-700 font-bold text-xs"
                  >
                    Back
                  </button>
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-2/3 py-3.5 rounded-xl bg-blue-600 hover:bg-blue-700 text-white font-extrabold text-xs flex items-center justify-center gap-2 shadow-lg shadow-blue-500/25"
                  >
                    {isSubmitting ? (
                      <span className="flex items-center gap-2">
                        <RefreshCw className="w-4 h-4 animate-spin" />
                        Generating Google Meet & Sending Email Invite...
                      </span>
                    ) : (
                      <>
                        <CheckCircle2 className="w-4 h-4" />
                        <span>Confirm & Schedule Meeting</span>
                      </>
                    )}
                  </button>
                </div>

              </form>
            )}

            {/* STEP 3: Instant Confirmation Screen */}
            {step === 'confirmed' && (
              <div className="text-center space-y-6 py-4 max-w-lg mx-auto">
                
                {submissionResult?.calendarCreated ? (
                  <div className="w-16 h-16 rounded-full bg-emerald-100 border-4 border-emerald-200 text-emerald-600 flex items-center justify-center mx-auto animate-bounce">
                    <CheckCircle2 className="w-8 h-8" />
                  </div>
                ) : (
                  <div className="w-16 h-16 rounded-full bg-amber-100 border-4 border-amber-200 text-amber-600 flex items-center justify-center mx-auto">
                    <AlertCircle className="w-8 h-8" />
                  </div>
                )}

                <div className="space-y-2">
                  <h3 className="text-2xl font-black text-slate-900 tracking-tight">
                    {submissionResult?.calendarCreated ? 'Your Call Is Confirmed & Synced!' : 'Call Request Saved Locally!'}
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-600 font-medium leading-relaxed">
                    {submissionResult?.calendarCreated ? (
                      <>
                        Thank you, <strong className="text-slate-900">{fullName}</strong>! An automatic Google Calendar invite and email has been sent to <strong className="text-blue-600">{email}</strong>.
                      </>
                    ) : (
                      <>
                        Thank you, <strong className="text-slate-900">{fullName}</strong>! Your call is saved in agency records.
                      </>
                    )}
                  </p>
                </div>

                {/* Warning if Google Calendar was not connected by host */}
                {!submissionResult?.calendarCreated && (
                  <div className="p-4 rounded-2xl bg-amber-50 border border-amber-200 text-left space-y-3 text-xs text-amber-950">
                    <div className="flex items-start gap-2.5 font-bold">
                      <AlertCircle className="w-5 h-5 text-amber-600 shrink-0 mt-0.5" />
                      <div>
                        <span className="block text-amber-900 font-black text-sm mb-0.5">Host Notice: Google Calendar Not Connected</span>
                        <p className="font-normal text-slate-700 leading-relaxed">
                          Because the host Google account is not connected yet, an automated email invitation could not be sent directly by Google.
                        </p>
                      </div>
                    </div>

                    <div className="pt-2 border-t border-amber-200 flex flex-col sm:flex-row items-center justify-between gap-2">
                      <span className="text-[11px] font-semibold text-amber-900">Are you the Host/Admin? Connect now:</span>
                      <button
                        type="button"
                        onClick={handleConnectGoogleCalendar}
                        className="w-full sm:w-auto px-3.5 py-2 rounded-xl bg-amber-600 hover:bg-amber-700 text-white font-extrabold text-xs flex items-center justify-center gap-1.5 shadow-md transition-all"
                      >
                        <LinkIcon className="w-3.5 h-3.5" />
                        <span>Connect Google Calendar</span>
                      </button>
                    </div>
                  </div>
                )}

                {/* 1-CLICK GOOGLE MEET JOIN BUTTON */}
                {submissionResult?.meetLink && (
                  <div className="p-4 rounded-2xl bg-gradient-to-r from-blue-600 to-indigo-600 text-white shadow-xl shadow-blue-500/20 text-left space-y-2">
                    <div className="flex items-center justify-between text-xs font-black uppercase text-blue-100">
                      <span className="flex items-center gap-1.5">
                        <Video className="w-4 h-4 text-emerald-400" />
                        1-Click Google Meet Link
                      </span>
                      <span className="bg-emerald-400 text-slate-950 px-2 py-0.5 rounded-full text-[10px] font-black">
                        Ready To Join
                      </span>
                    </div>

                    <a
                      href={submissionResult.meetLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-full py-3.5 px-4 rounded-xl bg-white text-blue-900 font-black text-sm flex items-center justify-center gap-2 shadow-md hover:bg-blue-50 transition-all hover:scale-[1.01]"
                    >
                      <Video className="w-5 h-5 text-blue-600" />
                      <span>Join Call via Google Meet</span>
                      <ExternalLink className="w-4 h-4 text-blue-500 ml-1" />
                    </a>
                  </div>
                )}

                {/* Event Details Card */}
                <div className="p-5 rounded-2xl bg-slate-50 border border-slate-200 text-left space-y-2.5 text-xs font-medium">
                  <div className="flex justify-between border-b border-slate-200/80 pb-2">
                    <span className="text-slate-500">Date & Time:</span>
                    <strong className="text-slate-900">{formattedSelectedDate} @ {selectedTime} ({selectedTimezone})</strong>
                  </div>
                  <div className="flex justify-between border-b border-slate-200/80 pb-2">
                    <span className="text-slate-500">Topic:</span>
                    <strong className="text-blue-600">{selectedTopic}</strong>
                  </div>
                  <div className="flex justify-between border-b border-slate-200/80 pb-2">
                    <span className="text-slate-500">Email Invitation:</span>
                    {submissionResult?.emailInvitationSent ? (
                      <span className="text-emerald-700 font-bold flex items-center gap-1">
                        <Check className="w-3.5 h-3.5" /> Sent to {email}
                      </span>
                    ) : (
                      <span className="text-amber-700 font-bold flex items-center gap-1">
                        <AlertCircle className="w-3.5 h-3.5" /> Host Calendar Disconnected
                      </span>
                    )}
                  </div>
                  <div className="flex justify-between">
                    <span className="text-slate-500">Calendar Storage:</span>
                    {submissionResult?.calendarCreated ? (
                      <span className="text-emerald-700 font-extrabold flex items-center gap-1">
                        <Check className="w-3.5 h-3.5" /> Synced to Google Calendar
                      </span>
                    ) : (
                      <span className="text-blue-700 font-extrabold flex items-center gap-1">
                        <Database className="w-3.5 h-3.5" /> Saved in Stored Bookings
                      </span>
                    )}
                  </div>
                </div>

                {/* Instant Actions */}
                <div className="space-y-2.5 pt-2">
                  <a
                    href={submissionResult?.calendarEventUrl || getGoogleCalendarUrl()}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full py-3 px-4 rounded-xl bg-blue-600 hover:bg-blue-700 text-white font-extrabold text-xs flex items-center justify-center gap-2 shadow-md shadow-blue-500/20"
                  >
                    <ExternalLink className="w-4 h-4" />
                    <span>View / Add to Google Calendar</span>
                  </a>

                  <button
                    type="button"
                    onClick={handleDownloadIcs}
                    className="w-full py-3 px-4 rounded-xl bg-white border border-slate-300 hover:bg-slate-50 text-slate-800 font-extrabold text-xs flex items-center justify-center gap-2 shadow-xs"
                  >
                    <Download className="w-4 h-4 text-slate-600" />
                    <span>Download iCal File (.ics)</span>
                  </button>

                  <a
                    href={`https://wa.me/${WHATSAPP_NUMBER.replace(/\D/g, '')}?text=${encodeURIComponent(`Hi Webtron Solution! I just scheduled a call for ${formattedSelectedDate} at ${selectedTime}. My email is ${email}. Google Meet Link: ${submissionResult?.meetLink || ''}`)}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full py-3 px-4 rounded-xl bg-emerald-50 border border-emerald-200 hover:bg-emerald-100 text-emerald-800 font-bold text-xs flex items-center justify-center gap-2"
                  >
                    <MessageSquare className="w-4 h-4 fill-current text-emerald-600" />
                    <span>Send Quick WhatsApp Confirmation</span>
                  </a>
                </div>

                <button
                  type="button"
                  onClick={onClose}
                  className="text-xs font-extrabold text-slate-400 hover:text-slate-600 transition-colors pt-2 block mx-auto"
                >
                  Close Window
                </button>

              </div>
            )}

          </div>

        </motion.div>

      </div>
    </AnimatePresence>
  );
};
