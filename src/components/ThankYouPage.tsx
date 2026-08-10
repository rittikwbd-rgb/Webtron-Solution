import React, { useEffect } from 'react';
import { CheckCircle2, Calendar, Clock, Video, Mail, ArrowLeft, MessageSquare, ShieldCheck, Sparkles, Globe } from 'lucide-react';

interface ThankYouPageProps {
  onBackToHome?: () => void;
}

export function ThankYouPage({ onBackToHome }: ThankYouPageProps) {
  // Parse query params from URL
  const searchParams = new URLSearchParams(window.location.search);
  const name = searchParams.get('name') || searchParams.get('fullName') || 'Valued Client';
  const email = searchParams.get('email') || '';
  const date = searchParams.get('date') || '';
  const time = searchParams.get('time') || '';
  const timezone = searchParams.get('timezone') || searchParams.get('tz') || '';
  const meetLink = searchParams.get('meet') || searchParams.get('meetLink') || '';

  useEffect(() => {
    // Scroll to top
    window.scrollTo({ top: 0, behavior: 'smooth' });

    // Track Meta Pixel Conversion Events for Meta Ads Account
    if (typeof window !== 'undefined' && (window as any).fbq) {
      try {
        // Track standard Schedule event
        (window as any).fbq('track', 'Schedule', {
          content_name: '1-on-1 Strategy Call',
          currency: 'USD',
          value: 0.00
        });
        // Track standard Lead event
        (window as any).fbq('track', 'Lead', {
          content_name: 'Strategy Call Booking'
        });
      } catch (e) {
        console.error('Meta Pixel tracking error:', e);
      }
    }
  }, []);

  const handleGoHome = () => {
    if (onBackToHome) {
      onBackToHome();
    } else {
      window.history.pushState({}, '', '/');
      window.dispatchEvent(new PopStateEvent('popstate'));
    }
  };

  return (
    <div className="min-h-screen bg-slate-950 text-slate-100 flex flex-col justify-between selection:bg-blue-600 selection:text-white">
      
      {/* Top Navigation Bar */}
      <header className="border-b border-slate-800 bg-slate-900/80 backdrop-blur-xl sticky top-0 z-50 px-4 py-4 sm:px-8">
        <div className="max-w-6xl mx-auto flex items-center justify-between">
          <button
            onClick={handleGoHome}
            className="flex items-center gap-2 text-slate-300 hover:text-white font-bold text-sm transition-colors group"
          >
            <div className="w-8 h-8 rounded-lg bg-slate-800 flex items-center justify-center group-hover:bg-blue-600 transition-colors">
              <ArrowLeft className="w-4 h-4" />
            </div>
            <span>Back to Webtron Solution</span>
          </button>

          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-400 text-xs font-semibold">
            <span className="w-2 h-2 rounded-full bg-blue-400 animate-pulse"></span>
            <span>Meta Conversion Tracked (/thank-you)</span>
          </div>
        </div>
      </header>

      {/* Main Content Area */}
      <main className="flex-1 max-w-4xl w-full mx-auto px-4 py-12 sm:py-16 flex flex-col justify-center">
        
        {/* Animated Checkmark Icon */}
        <div className="text-center mb-8">
          <div className="inline-flex items-center justify-center w-20 h-20 sm:w-24 sm:h-24 rounded-3xl bg-emerald-500/10 border-2 border-emerald-500/30 text-emerald-400 mb-6 shadow-2xl shadow-emerald-500/20">
            <CheckCircle2 className="w-10 h-10 sm:w-12 sm:h-12 animate-bounce" />
          </div>

          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 text-xs font-extrabold uppercase tracking-wider mb-3">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Booking Confirmed</span>
          </div>

          <h1 className="text-3xl sm:text-5xl font-black text-white tracking-tight mb-3">
            Thank You, {name}!
          </h1>
          <p className="text-base sm:text-lg text-slate-300 max-w-xl mx-auto font-medium leading-relaxed">
            Your <strong className="text-white">1-on-1 Strategy Call</strong> has been successfully booked with our digital expansion team.
          </p>
        </div>

        {/* Meeting Summary Card */}
        <div className="bg-slate-900 border border-slate-800 rounded-3xl p-6 sm:p-8 shadow-2xl mb-8 relative overflow-hidden">
          <div className="absolute top-0 right-0 w-64 h-64 bg-blue-600/10 rounded-full blur-3xl pointer-events-none"></div>

          <h2 className="text-lg font-extrabold text-white mb-6 flex items-center gap-2 border-b border-slate-800 pb-4">
            <Calendar className="w-5 h-5 text-blue-400" />
            <span>Call Summary Details</span>
          </h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            
            {date && (
              <div className="flex items-start gap-3">
                <div className="w-10 h-10 rounded-xl bg-slate-800 flex items-center justify-center text-blue-400 shrink-0">
                  <Calendar className="w-5 h-5" />
                </div>
                <div>
                  <div className="text-xs font-bold text-slate-400 uppercase tracking-wider">Scheduled Date</div>
                  <div className="text-base font-extrabold text-white mt-0.5">{date}</div>
                </div>
              </div>
            )}

            {time && (
              <div className="flex items-start gap-3">
                <div className="w-10 h-10 rounded-xl bg-slate-800 flex items-center justify-center text-blue-400 shrink-0">
                  <Clock className="w-5 h-5" />
                </div>
                <div>
                  <div className="text-xs font-bold text-slate-400 uppercase tracking-wider">Selected Time</div>
                  <div className="text-base font-extrabold text-white mt-0.5">{time}</div>
                </div>
              </div>
            )}

            {timezone && (
              <div className="flex items-start gap-3">
                <div className="w-10 h-10 rounded-xl bg-slate-800 flex items-center justify-center text-blue-400 shrink-0">
                  <Globe className="w-5 h-5" />
                </div>
                <div>
                  <div className="text-xs font-bold text-slate-400 uppercase tracking-wider">Timezone</div>
                  <div className="text-base font-extrabold text-white mt-0.5">{timezone}</div>
                </div>
              </div>
            )}

            {email && (
              <div className="flex items-start gap-3">
                <div className="w-10 h-10 rounded-xl bg-slate-800 flex items-center justify-center text-blue-400 shrink-0">
                  <Mail className="w-5 h-5" />
                </div>
                <div>
                  <div className="text-xs font-bold text-slate-400 uppercase tracking-wider">Confirmation Email Sent To</div>
                  <div className="text-base font-extrabold text-white mt-0.5">{email}</div>
                </div>
              </div>
            )}

          </div>

          {/* Google Meet Link Action */}
          {meetLink && (
            <div className="mt-8 pt-6 border-t border-slate-800 flex flex-col sm:flex-row items-center justify-between gap-4 bg-slate-950/60 p-4 sm:p-5 rounded-2xl border border-slate-800/80">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-emerald-500/20 border border-emerald-500/30 flex items-center justify-center text-emerald-400 shrink-0">
                  <Video className="w-5 h-5" />
                </div>
                <div>
                  <div className="text-xs font-bold text-slate-400">Google Meet Video Room</div>
                  <div className="text-sm font-extrabold text-emerald-400 truncate max-w-xs">{meetLink}</div>
                </div>
              </div>

              <a
                href={meetLink}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto px-5 py-2.5 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white font-extrabold text-xs tracking-wide flex items-center justify-center gap-2 transition-all shadow-lg shadow-emerald-600/20"
              >
                <Video className="w-4 h-4" />
                <span>Join Google Meet Room</span>
              </a>
            </div>
          )}
        </div>

        {/* Next Steps Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
          
          <div className="bg-slate-900/60 border border-slate-800 p-5 rounded-2xl flex items-start gap-3">
            <div className="w-8 h-8 rounded-lg bg-blue-500/10 border border-blue-500/20 text-blue-400 flex items-center justify-center shrink-0 mt-0.5">
              <Mail className="w-4 h-4" />
            </div>
            <div>
              <h3 className="text-sm font-bold text-white mb-1">Check Your Inbox</h3>
              <p className="text-xs text-slate-400 leading-relaxed">
                We've sent a calendar invitation and meeting details to your email address.
              </p>
            </div>
          </div>

          <div className="bg-slate-900/60 border border-slate-800 p-5 rounded-2xl flex items-start gap-3">
            <div className="w-8 h-8 rounded-lg bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 flex items-center justify-center shrink-0 mt-0.5">
              <MessageSquare className="w-4 h-4" />
            </div>
            <div>
              <h3 className="text-sm font-bold text-white mb-1">Need Quick Updates?</h3>
              <p className="text-xs text-slate-400 leading-relaxed">
                Reach out directly on WhatsApp if you need to adjust or prepare notes beforehand.
              </p>
            </div>
          </div>

        </div>

        {/* CTA Actions */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <button
            onClick={handleGoHome}
            className="w-full sm:w-auto px-8 py-3.5 rounded-2xl bg-blue-600 hover:bg-blue-500 text-white font-extrabold text-sm transition-all shadow-xl shadow-blue-600/25 flex items-center justify-center gap-2"
          >
            <ArrowLeft className="w-4 h-4" />
            <span>Return to Homepage</span>
          </button>

          <a
            href="https://wa.me/919876543210?text=Hi%20Webtron%20Solution,%20I%20just%20scheduled%20a%20strategy%20call!"
            target="_blank"
            rel="noopener noreferrer"
            className="w-full sm:w-auto px-8 py-3.5 rounded-2xl bg-slate-800 hover:bg-slate-700 text-white font-extrabold text-sm border border-slate-700 transition-all flex items-center justify-center gap-2"
          >
            <MessageSquare className="w-4 h-4 text-emerald-400" />
            <span>Chat on WhatsApp</span>
          </a>
        </div>

        {/* Meta Ad Account Tracking Badge Note for User */}
        <div className="mt-12 p-4 bg-slate-900/40 border border-slate-800/80 rounded-2xl text-center text-xs text-slate-500">
          <div className="flex items-center justify-center gap-1.5 font-bold text-slate-400 mb-1">
            <ShieldCheck className="w-4 h-4 text-blue-400" />
            <span>Meta Ad Conversion Setup URL: <code className="text-blue-300 bg-slate-800 px-2 py-0.5 rounded font-mono">/thank-you</code></span>
          </div>
          Use URL rule <span className="text-slate-300 font-semibold">"URL contains /thank-you"</span> or the custom event <span className="text-slate-300 font-semibold">"Schedule"</span> in your Meta Ads Manager to track successful conversions.
        </div>

      </main>

      {/* Simple Footer */}
      <footer className="border-t border-slate-900 py-6 text-center text-xs text-slate-500">
        © {new Date().getFullYear()} Webtron Solution. All rights reserved.
      </footer>

    </div>
  );
}
