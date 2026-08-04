import React from 'react';
import { motion } from 'motion/react';
import { MessageSquare, ArrowUpRight, CheckCircle2, Sparkles, Clock } from 'lucide-react';
import { WHATSAPP_LINK, WHATSAPP_NUMBER, WHATSAPP_MESSAGE_PRESETS } from '../data/agencyData';
import { AppLanguage } from '../types';
import { translations } from '../data/translations';

interface FinalCTASectionProps {
  currentLanguage?: AppLanguage;
}

export const FinalCTASection: React.FC<FinalCTASectionProps> = ({ currentLanguage = 'EN' }) => {
  const t = translations[currentLanguage]?.ctaSection || translations.EN.ctaSection;

  return (
    <section className="py-24 bg-white text-slate-900 relative overflow-hidden border-t border-slate-200/80">
      
      {/* Background glowing mesh */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] bg-blue-50/60 rounded-full blur-[180px] pointer-events-none"></div>

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center space-y-8">
        
        {/* Top Glow Badge */}
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-blue-50 border border-blue-200 text-xs font-bold text-blue-700 shadow-sm">
          <Sparkles className="w-4 h-4 text-blue-600" />
          <span>{t.badge}</span>
        </div>

        {/* Large Headline */}
        <h2 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-slate-900 leading-tight">
          {t.title}
        </h2>

        {/* Subheadline */}
        <p className="text-lg sm:text-xl text-slate-600 max-w-2xl mx-auto leading-relaxed font-medium">
          {t.subtitle}
        </p>

        {/* Pre-set Message Starter Chips */}
        <div className="pt-2 max-w-3xl mx-auto">
          <span className="text-xs text-slate-500 font-bold block mb-3">{t.presetHeader}</span>
          <div className="flex flex-wrap items-center justify-center gap-2 text-xs">
            <a
              href={WHATSAPP_MESSAGE_PRESETS.website}
              target="_blank"
              rel="noopener noreferrer"
              className="px-3.5 py-2 rounded-xl bg-slate-50 border border-slate-200 hover:border-blue-500/40 text-slate-700 hover:text-blue-600 transition-all hover:scale-105 shadow-sm font-bold"
            >
              💻 {t.presets.website}
            </a>
            <a
              href={WHATSAPP_MESSAGE_PRESETS.seo}
              target="_blank"
              rel="noopener noreferrer"
              className="px-3.5 py-2 rounded-xl bg-slate-50 border border-slate-200 hover:border-blue-500/40 text-slate-700 hover:text-blue-600 transition-all hover:scale-105 shadow-sm font-bold"
            >
              📈 {t.presets.seo}
            </a>
            <a
              href={WHATSAPP_MESSAGE_PRESETS.app}
              target="_blank"
              rel="noopener noreferrer"
              className="px-3.5 py-2 rounded-xl bg-slate-50 border border-slate-200 hover:border-blue-500/40 text-slate-700 hover:text-blue-600 transition-all hover:scale-105 shadow-sm font-bold"
            >
              📱 {t.presets.app}
            </a>
            <a
              href={WHATSAPP_MESSAGE_PRESETS.audit}
              target="_blank"
              rel="noopener noreferrer"
              className="px-3.5 py-2 rounded-xl bg-slate-50 border border-slate-200 hover:border-blue-500/40 text-slate-700 hover:text-blue-600 transition-all hover:scale-105 shadow-sm font-bold"
            >
              🔍 {t.presets.audit}
            </a>
          </div>
        </div>

        {/* MAIN PRIMARY CTA BUTTON */}
        <div className="pt-4 flex flex-col items-center justify-center gap-4">
          <a
            href={WHATSAPP_LINK}
            target="_blank"
            rel="noopener noreferrer"
            id="final-cta-whatsapp"
            className="relative group overflow-hidden rounded-2xl p-[1px] font-extrabold text-lg tracking-wide transition-all shadow-xl shadow-blue-500/20 hover:scale-105 active:scale-95"
          >
            <span className="absolute inset-0 bg-gradient-to-r from-blue-600 via-indigo-600 to-violet-600"></span>
            <div className="relative px-8 py-5 rounded-[15px] bg-blue-600 hover:bg-blue-700 flex items-center gap-3 text-white transition-colors">
              <div className="w-9 h-9 rounded-full bg-white/20 flex items-center justify-center text-white shadow-sm">
                <MessageSquare className="w-4 h-4 fill-current" />
              </div>
              <div className="text-left">
                <div className="text-base font-black text-white">{t.btnMain}</div>
                <div className="text-xs text-blue-100 font-mono font-bold">{WHATSAPP_NUMBER}</div>
              </div>
              <ArrowUpRight className="w-6 h-6 text-white group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform ml-2" />
            </div>
          </a>

          <div className="flex items-center gap-4 text-xs text-slate-500 font-medium pt-2">
            <span className="flex items-center gap-1.5 font-bold text-slate-700">
              <Clock className="w-3.5 h-3.5 text-emerald-600" />
              {t.responseTime}
            </span>
            <span className="w-1.5 h-1.5 rounded-full bg-slate-300"></span>
            <span className="flex items-center gap-1.5 font-bold text-slate-700">
              <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600" />
              {t.noPushySales}
            </span>
          </div>
        </div>

      </div>
    </section>
  );
};
