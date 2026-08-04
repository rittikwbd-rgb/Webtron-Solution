import React from 'react';
import { motion } from 'motion/react';
import { Star, Quote, CheckCircle2, MessageSquare, ArrowUpRight } from 'lucide-react';
import { TESTIMONIALS_LIST, WHATSAPP_LINK } from '../data/agencyData';
import { AppLanguage } from '../types';
import { translations } from '../data/translations';

interface TestimonialsSectionProps {
  currentLanguage?: AppLanguage;
}

export const TestimonialsSection: React.FC<TestimonialsSectionProps> = ({ currentLanguage = 'EN' }) => {
  const t = translations[currentLanguage]?.testimonials || translations.EN.testimonials;

  return (
    <section id="testimonials" className="py-24 bg-slate-50 text-slate-900 relative overflow-hidden border-t border-slate-200/80">
      
      {/* Background ambient glow */}
      <div className="absolute top-1/2 right-0 w-[500px] h-[500px] bg-blue-100/50 rounded-full blur-[160px] pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-amber-50 border border-amber-200 text-xs font-extrabold text-amber-800 shadow-sm">
            <Star className="w-3.5 h-3.5 text-amber-500 fill-amber-500" />
            <span>{t.badge}</span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-slate-900">
            {t.title}
          </h2>

          <p className="text-slate-600 text-base sm:text-lg leading-relaxed font-medium">
            {t.subtitle}
          </p>
        </div>

        {/* Testimonials Glass Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          {TESTIMONIALS_LIST.map((test, idx) => (
            <motion.div
              key={test.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              className="rounded-3xl p-8 bg-white border border-slate-200/80 hover:border-blue-500/40 transition-all duration-300 shadow-sm hover:shadow-xl flex flex-col justify-between group"
            >
              <div className="space-y-6">
                
                {/* Header: Rating & Verified Badge */}
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-1 text-amber-500">
                    {[...Array(test.rating)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-amber-500" />
                    ))}
                  </div>

                  <span className="inline-flex items-center gap-1 px-2.5 py-1 rounded-full bg-emerald-50 border border-emerald-200 text-[10px] font-bold text-emerald-800">
                    <CheckCircle2 className="w-3 h-3 text-emerald-600" />
                    <span>Verified Client {test.flag}</span>
                  </span>
                </div>

                {/* Content Quote */}
                <p className="text-xs sm:text-sm text-slate-700 leading-relaxed italic relative font-medium">
                  <Quote className="w-6 h-6 text-blue-500/15 absolute -top-3 -left-2 -z-10" />
                  "{test.content}"
                </p>

                {/* Result Highlight Pill */}
                <div className="p-3 rounded-xl bg-slate-50 border border-slate-200 flex items-center justify-between shadow-sm">
                  <span className="text-[11px] text-slate-500 font-medium">{test.metricLabel}</span>
                  <span className="text-sm font-black text-emerald-600 font-mono">{test.metric}</span>
                </div>

              </div>

              {/* Author Info */}
              <div className="mt-8 pt-4 border-t border-slate-100 flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-blue-50 border border-blue-200 text-blue-700 font-black flex items-center justify-center text-sm shadow-sm shrink-0">
                  {test.name.charAt(0)}
                </div>
                <div>
                  <div className="text-sm font-extrabold text-slate-900 group-hover:text-blue-600 transition-colors">
                    {test.name}
                  </div>
                  <div className="text-xs text-slate-500 font-medium">
                    {test.role} • <span className="text-blue-600 font-bold">{test.company}</span>
                  </div>
                  <div className="text-[10px] text-slate-400 font-mono">
                    {test.location}
                  </div>
                </div>
              </div>

            </motion.div>
          ))}
        </div>

        {/* Section Bottom WhatsApp Trigger */}
        <div className="text-center pt-4">
          <a
            href={WHATSAPP_LINK}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-6 py-3.5 rounded-2xl bg-white border border-slate-200 hover:border-blue-500/50 hover:bg-slate-50 text-slate-800 font-bold text-xs transition-all shadow-md hover:scale-105"
          >
            <MessageSquare className="w-4 h-4 text-emerald-600 fill-current" />
            <span>{t.ctaText}</span>
            <ArrowUpRight className="w-4 h-4 text-emerald-600" />
          </a>
        </div>

      </div>
    </section>
  );
};
