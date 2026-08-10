import React, { useState, useEffect } from 'react';
import { 
  CheckCircle2, ArrowLeft, Sparkles, ShieldCheck, Globe, Zap, 
  Search, TrendingUp, Phone, Mail, Building, FileText, MessageSquare, 
  ArrowRight, Clock, Star, MapPin, Gauge, Lock
} from 'lucide-react';
import { WHATSAPP_LINK, WHATSAPP_NUMBER } from '../data/agencyData';

interface FreeAuditPageProps {
  onBackToHome?: () => void;
  onOpenCalendar?: () => void;
}

export function FreeAuditPage({ onBackToHome, onOpenCalendar }: FreeAuditPageProps) {
  const [websiteUrl, setWebsiteUrl] = useState('');
  const [businessName, setBusinessName] = useState('');
  const [fullName, setFullName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [growthGoal, setGrowthGoal] = useState('Increase Inbound Phone Calls & Leads');
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, []);

  const handleGoHome = () => {
    if (onBackToHome) {
      onBackToHome();
    } else {
      window.history.pushState({}, '', '/');
      window.dispatchEvent(new PopStateEvent('popstate'));
    }
  };

  const handleSubmitAudit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!websiteUrl || !fullName || !email || !phone) {
      alert('Please fill out all required fields.');
      return;
    }

    setIsSubmitting(true);
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);

      // Fire Meta Pixel Lead event if available
      if (typeof window !== 'undefined' && (window as any).fbq) {
        try {
          (window as any).fbq('track', 'Lead', {
            content_name: 'Free Website Audit Request',
            content_category: 'Audit'
          });
        } catch (err) {
          console.error('Meta Pixel error:', err);
        }
      }
    }, 1000);
  };

  const whatsappAuditMessage = `Hi Webtron Solution! I requested a Free Growth Audit for my website: ${websiteUrl} (${businessName || 'Business'}). My main goal is: ${growthGoal}. My contact is ${fullName} (${phone}).`;

  return (
    <div className="min-h-screen bg-slate-950 text-slate-100 flex flex-col justify-between selection:bg-blue-600 selection:text-white">
      
      {/* Top Header Navigation */}
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
            <Sparkles className="w-3.5 h-3.5 text-blue-400" />
            <span>Valued at $350 • 100% Free for SMBs</span>
          </div>
        </div>
      </header>

      {/* Main Form & Page Content */}
      <main className="flex-1 max-w-5xl w-full mx-auto px-4 py-12 sm:py-16">
        
        {/* Page Hero Header */}
        <div className="text-center max-w-3xl mx-auto mb-12 space-y-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-400 text-xs font-extrabold uppercase tracking-wider">
            <Search className="w-3.5 h-3.5 text-blue-400" />
            <span>15-Point Digital Growth & Speed Audit</span>
          </div>

          <h1 className="text-3xl sm:text-5xl font-black text-white tracking-tight leading-tight">
            Claim Your Free Website & Growth Audit
          </h1>

          <p className="text-base sm:text-lg text-slate-300 font-medium leading-relaxed">
            Discover why your website is losing prospective customers to competitors. Get a personalized 15-point breakdown analyzing your load speed, conversion bottlenecks, Google Maps ranking, and UX gaps.
          </p>
        </div>

        {/* Audit Form or Submission Confirmation */}
        {!isSubmitted ? (
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
            
            {/* Form Column */}
            <div className="lg:col-span-7 bg-slate-900 border border-slate-800 rounded-3xl p-6 sm:p-8 shadow-2xl relative overflow-hidden">
              <div className="absolute top-0 right-0 w-64 h-64 bg-blue-600/10 rounded-full blur-3xl pointer-events-none"></div>

              <h2 className="text-xl font-extrabold text-white mb-2">Request Audit Report</h2>
              <p className="text-xs text-slate-400 mb-6 font-medium">Delivered directly to your inbox & WhatsApp within 24 business hours.</p>

              <form onSubmit={handleSubmitAudit} className="space-y-4">
                <div>
                  <label className="text-xs font-extrabold text-slate-300 block mb-1 flex items-center gap-1.5">
                    <Globe className="w-3.5 h-3.5 text-blue-400" /> Website URL *
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="https://yourwebsite.com"
                    value={websiteUrl}
                    onChange={(e) => setWebsiteUrl(e.target.value)}
                    className="w-full px-4 py-3 rounded-xl bg-slate-950 border border-slate-800 text-xs font-bold text-white placeholder-slate-500 focus:outline-none focus:border-blue-500 shadow-inner"
                  />
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="text-xs font-extrabold text-slate-300 block mb-1 flex items-center gap-1.5">
                      <Building className="w-3.5 h-3.5 text-slate-400" /> Business Name
                    </label>
                    <input
                      type="text"
                      placeholder="e.g. Apex Legal Services"
                      value={businessName}
                      onChange={(e) => setBusinessName(e.target.value)}
                      className="w-full px-4 py-3 rounded-xl bg-slate-950 border border-slate-800 text-xs font-bold text-white placeholder-slate-500 focus:outline-none focus:border-blue-500 shadow-inner"
                    />
                  </div>

                  <div>
                    <label className="text-xs font-extrabold text-slate-300 block mb-1 flex items-center gap-1.5">
                      <FileText className="w-3.5 h-3.5 text-slate-400" /> Your Full Name *
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="e.g. Michael Scott"
                      value={fullName}
                      onChange={(e) => setFullName(e.target.value)}
                      className="w-full px-4 py-3 rounded-xl bg-slate-950 border border-slate-800 text-xs font-bold text-white placeholder-slate-500 focus:outline-none focus:border-blue-500 shadow-inner"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="text-xs font-extrabold text-slate-300 block mb-1 flex items-center gap-1.5">
                      <Mail className="w-3.5 h-3.5 text-slate-400" /> Work Email *
                    </label>
                    <input
                      type="email"
                      required
                      placeholder="michael@company.com"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      className="w-full px-4 py-3 rounded-xl bg-slate-950 border border-slate-800 text-xs font-bold text-white placeholder-slate-500 focus:outline-none focus:border-blue-500 shadow-inner"
                    />
                  </div>

                  <div>
                    <label className="text-xs font-extrabold text-slate-300 block mb-1 flex items-center gap-1.5">
                      <Phone className="w-3.5 h-3.5 text-blue-400" /> Phone / WhatsApp *
                    </label>
                    <input
                      type="tel"
                      required
                      placeholder="+1 (555) 000-0000"
                      value={phone}
                      onChange={(e) => setPhone(e.target.value)}
                      className="w-full px-4 py-3 rounded-xl bg-slate-950 border border-slate-800 text-xs font-bold text-white placeholder-slate-500 focus:outline-none focus:border-blue-500 shadow-inner"
                    />
                  </div>
                </div>

                <div>
                  <label className="text-xs font-extrabold text-slate-300 block mb-1">
                    Primary Digital Growth Goal:
                  </label>
                  <select
                    value={growthGoal}
                    onChange={(e) => setGrowthGoal(e.target.value)}
                    className="w-full px-4 py-3 rounded-xl bg-slate-950 border border-slate-800 text-xs font-bold text-white focus:outline-none focus:border-blue-500 shadow-inner"
                  >
                    <option value="Increase Inbound Phone Calls & Leads">Increase Inbound Phone Calls & Leads</option>
                    <option value="Rank #1 on Google Search & Maps">Rank #1 on Google Search & Maps</option>
                    <option value="Fix Slow Website Speed & Mobile UX">Fix Slow Website Speed & Mobile UX</option>
                    <option value="Launch Custom Mobile App">Launch Custom Mobile App</option>
                  </select>
                </div>

                <div className="pt-2">
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full py-4 rounded-xl bg-blue-600 hover:bg-blue-500 text-white font-extrabold text-sm flex items-center justify-center gap-2 shadow-xl shadow-blue-600/25 transition-all hover:scale-[1.01] active:scale-95 disabled:opacity-50"
                  >
                    {isSubmitting ? (
                      <span>Analyzing Website & Generating Audit...</span>
                    ) : (
                      <>
                        <Sparkles className="w-4 h-4" />
                        <span>Get My Free Growth Audit Report</span>
                        <ArrowRight className="w-4 h-4" />
                      </>
                    )}
                  </button>
                </div>

                <div className="flex items-center justify-center gap-2 text-[11px] text-slate-400 font-medium pt-2">
                  <Lock className="w-3.5 h-3.5 text-emerald-400" />
                  <span>100% Confidential. No sales pressure. Zero credit card required.</span>
                </div>

              </form>
            </div>

            {/* Included Checks List Column */}
            <div className="lg:col-span-5 space-y-6">
              
              <div className="bg-slate-900/60 border border-slate-800 p-6 rounded-3xl space-y-4">
                <h3 className="text-base font-extrabold text-white flex items-center gap-2">
                  <CheckCircle2 className="w-5 h-5 text-emerald-400" />
                  What Your Free Audit Includes:
                </h3>

                <ul className="space-y-3 text-xs text-slate-300 font-medium">
                  <li className="flex items-start gap-2.5">
                    <Gauge className="w-4 h-4 text-blue-400 shrink-0 mt-0.5" />
                    <div>
                      <strong className="text-white block">Google Core Web Vitals Diagnostic</strong>
                      Desktop & mobile load speed assessment with action steps to achieve sub-second speeds.
                    </div>
                  </li>

                  <li className="flex items-start gap-2.5">
                    <TrendingUp className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                    <div>
                      <strong className="text-white block">Conversion Funnel Bottleneck Check</strong>
                      Identification of friction points, weak CTAs, or poor layout design hurting conversion rates.
                    </div>
                  </li>

                  <li className="flex items-start gap-2.5">
                    <MapPin className="w-4 h-4 text-purple-400 shrink-0 mt-0.5" />
                    <div>
                      <strong className="text-white block">Google Maps & Local SEO Ranking Score</strong>
                      Check of local map pack rankings, citation consistency, and Google Business Profile optimization.
                    </div>
                  </li>

                  <li className="flex items-start gap-2.5">
                    <Search className="w-4 h-4 text-amber-400 shrink-0 mt-0.5" />
                    <div>
                      <strong className="text-white block">Competitor Keyword Gap Analysis</strong>
                      Comparison against top 3 local competitors in your territory (US, UK, or Europe).
                    </div>
                  </li>
                </ul>
              </div>

              {/* Instant WhatsApp Option Box */}
              <div className="bg-emerald-950/40 border border-emerald-800/60 p-6 rounded-3xl space-y-3 text-center">
                <h4 className="text-sm font-extrabold text-emerald-300">Need Immediate Advice?</h4>
                <p className="text-xs text-slate-300 font-medium leading-relaxed">
                  Connect directly with our senior growth strategists on WhatsApp for instant evaluation.
                </p>
                <a
                  href={`${WHATSAPP_LINK}?text=${encodeURIComponent('Hi Webtron Solution! I would like a fast website audit on WhatsApp.')}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-5 py-3 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white font-extrabold text-xs shadow-lg shadow-emerald-600/20 transition-all hover:scale-105"
                >
                  <MessageSquare className="w-4 h-4 fill-current" />
                  <span>Request Instant Audit on WhatsApp</span>
                </a>
              </div>

            </div>

          </div>
        ) : (
          /* Confirmation View */
          <div className="bg-slate-900 border border-slate-800 rounded-3xl p-8 max-w-2xl mx-auto text-center space-y-6 shadow-2xl">
            <div className="w-20 h-20 rounded-3xl bg-emerald-500/10 border-2 border-emerald-500/30 text-emerald-400 mx-auto flex items-center justify-center shadow-2xl">
              <CheckCircle2 className="w-10 h-10 animate-bounce" />
            </div>

            <div className="space-y-2">
              <h2 className="text-2xl sm:text-3xl font-black text-white">Audit Request Received!</h2>
              <p className="text-sm text-slate-300 leading-relaxed font-medium">
                Thank you, <strong className="text-white">{fullName}</strong>! Our technical audit team is preparing your custom 15-point diagnostic report for <strong className="text-blue-400">{websiteUrl}</strong>.
              </p>
            </div>

            <div className="p-4 rounded-2xl bg-slate-950 border border-slate-800 text-left text-xs space-y-2">
              <div className="text-slate-400"><strong>Email destination:</strong> {email}</div>
              <div className="text-slate-400"><strong>WhatsApp notification:</strong> {phone}</div>
              <div className="text-slate-400"><strong>Turnaround time:</strong> Within 24 business hours</div>
            </div>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4">
              {onOpenCalendar && (
                <button
                  type="button"
                  onClick={onOpenCalendar}
                  className="w-full sm:w-auto px-6 py-3.5 rounded-xl bg-blue-600 hover:bg-blue-500 text-white font-extrabold text-xs flex items-center justify-center gap-2 shadow-lg shadow-blue-600/20"
                >
                  <Clock className="w-4 h-4 text-blue-300" />
                  <span>Book 1-on-1 Strategy Call Now</span>
                </button>
              )}

              <a
                href={`${WHATSAPP_LINK}?text=${encodeURIComponent(whatsappAuditMessage)}`}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto px-6 py-3.5 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white font-extrabold text-xs flex items-center justify-center gap-2 shadow-lg shadow-emerald-600/20"
              >
                <MessageSquare className="w-4 h-4 fill-current" />
                <span>Notify Team on WhatsApp</span>
              </a>
            </div>

            <div className="pt-4 border-t border-slate-800">
              <button
                type="button"
                onClick={handleGoHome}
                className="text-xs text-slate-400 hover:text-white font-bold underline"
              >
                Return to Webtron Solution Homepage
              </button>
            </div>
          </div>
        )}

      </main>

      <footer className="border-t border-slate-900 py-6 text-center text-xs text-slate-500">
        © {new Date().getFullYear()} Webtron Solution. All rights reserved.
      </footer>

    </div>
  );
}
