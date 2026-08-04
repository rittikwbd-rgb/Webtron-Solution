import React, { useState } from 'react';
import { motion } from 'motion/react';
import { AlertTriangle, CheckCircle2, ArrowRight, ShieldAlert, Zap, MessageSquare, ArrowUpRight } from 'lucide-react';
import { PROBLEM_SOLUTIONS, WHATSAPP_LINK } from '../data/agencyData';
import { AppLanguage } from '../types';
import { translations } from '../data/translations';

interface TrustedGrowthPartnerSectionProps {
  currentLanguage?: AppLanguage;
}

export const TrustedGrowthPartnerSection: React.FC<TrustedGrowthPartnerSectionProps> = ({ currentLanguage = 'EN' }) => {
  const t = translations[currentLanguage]?.partner || translations.EN.partner;
  const [activeTab, setActiveTab] = useState<'all' | 'problems' | 'solutions'>('all');

  return (
    <section id="trusted-partner" className="py-24 bg-slate-50 relative overflow-hidden text-slate-900 border-t border-slate-200/80">
      
      {/* Background glow accents */}
      <div className="absolute top-1/2 -left-40 w-96 h-96 bg-blue-100/50 rounded-full blur-[140px] pointer-events-none"></div>
      <div className="absolute bottom-10 -right-40 w-96 h-96 bg-indigo-100/50 rounded-full blur-[140px] pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-rose-50 border border-rose-200 text-xs font-bold text-rose-700 shadow-sm">
            <ShieldAlert className="w-3.5 h-3.5 text-rose-600" />
            <span>{t.badge}</span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-slate-900">
            {t.title}
          </h2>

          <p className="text-slate-600 text-base sm:text-lg leading-relaxed">
            {t.subtitle}
          </p>

          {/* Toggle View Tabs */}
          <div className="inline-flex p-1 rounded-full bg-white border border-slate-200 text-xs font-bold shadow-sm">
            <button
              onClick={() => setActiveTab('all')}
              className={`px-4 py-2 rounded-full transition-all ${
                activeTab === 'all' ? 'bg-blue-600 text-white shadow-sm' : 'text-slate-600 hover:text-slate-900'
              }`}
            >
              Side-By-Side
            </button>
            <button
              onClick={() => setActiveTab('problems')}
              className={`px-4 py-2 rounded-full transition-all ${
                activeTab === 'problems' ? 'bg-rose-600 text-white shadow-sm' : 'text-slate-600 hover:text-slate-900'
              }`}
            >
              {t.tabProblems}
            </button>
            <button
              onClick={() => setActiveTab('solutions')}
              className={`px-4 py-2 rounded-full transition-all ${
                activeTab === 'solutions' ? 'bg-emerald-600 text-white shadow-sm' : 'text-slate-600 hover:text-slate-900'
              }`}
            >
              {t.tabSolutions}
            </button>
          </div>
        </div>

        {/* Problem vs Solution Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {PROBLEM_SOLUTIONS.map((item, idx) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              className="rounded-3xl bg-white border border-slate-200/80 hover:border-blue-500/40 p-6 transition-all duration-300 hover:shadow-xl flex flex-col justify-between group backdrop-blur-xl shadow-sm"
            >
              <div className="space-y-4">
                
                {/* Problem Section */}
                {(activeTab === 'all' || activeTab === 'problems') && (
                  <div className="space-y-2 pb-4 border-b border-slate-100">
                    <div className="flex items-center gap-2 text-rose-600 font-bold text-sm">
                      <AlertTriangle className="w-4 h-4 shrink-0" />
                      <span>{item.problemTitle}</span>
                    </div>
                    <p className="text-xs text-slate-500 leading-relaxed">
                      {item.problemDesc}
                    </p>
                  </div>
                )}

                {/* Arrow Transition */}
                {activeTab === 'all' && (
                  <div className="flex justify-center text-slate-400 group-hover:text-blue-600 transition-colors my-1">
                    <ArrowRight className="w-4 h-4 rotate-90 md:rotate-0" />
                  </div>
                )}

                {/* Solution Section */}
                {(activeTab === 'all' || activeTab === 'solutions') && (
                  <div className="space-y-2 pt-1">
                    <div className="flex items-center gap-2 text-emerald-600 font-bold text-sm">
                      <CheckCircle2 className="w-4 h-4 shrink-0" />
                      <span>{item.solutionTitle}</span>
                    </div>
                    <p className="text-xs text-slate-700 leading-relaxed font-medium">
                      {item.solutionDesc}
                    </p>
                  </div>
                )}

              </div>

              {/* Bottom Result Metric */}
              <div className="mt-6 pt-4 border-t border-slate-100 flex items-center justify-between">
                <span className="text-[11px] text-slate-500 font-medium">Verified Growth Impact:</span>
                <span className="text-xs font-extrabold text-blue-700 bg-blue-50 px-2.5 py-1 rounded-full border border-blue-200 font-mono">
                  {item.impactMetric}
                </span>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Section Callout CTA */}
        <div className="mt-16 rounded-3xl p-8 bg-white border border-slate-200/80 text-center flex flex-col md:flex-row items-center justify-between gap-6 shadow-xl hover:border-blue-500/40 transition-all">
          <div className="text-left space-y-1">
            <h3 className="text-xl font-bold text-slate-900">Ready to stop losing prospective customers to local competitors?</h3>
            <p className="text-sm text-slate-600">Get a free website audit & instant growth roadmap for your business today.</p>
          </div>

          <a
            href={WHATSAPP_LINK}
            target="_blank"
            rel="noopener noreferrer"
            className="shrink-0 px-8 py-4 rounded-xl bg-blue-600 hover:bg-blue-700 text-white font-bold text-sm transition-all flex items-center gap-2 shadow-lg shadow-blue-500/20 hover:scale-105"
          >
            <MessageSquare className="w-4 h-4 fill-current" />
            <span>Chat on WhatsApp</span>
            <ArrowUpRight className="w-4 h-4" />
          </a>
        </div>

      </div>
    </section>
  );
};
