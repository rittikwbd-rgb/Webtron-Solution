import React, { useState } from 'react';
import { motion } from 'motion/react';
import { 
  Search, Compass, Layout, Code, CheckCircle2, 
  Rocket, TrendingUp, Sparkles, Clock, Check, MessageSquare, ArrowUpRight 
} from 'lucide-react';
import { PROCESS_STEPS, WHATSAPP_LINK } from '../data/agencyData';
import { AppLanguage } from '../types';
import { translations } from '../data/translations';

interface DevelopmentProcessSectionProps {
  currentLanguage?: AppLanguage;
}

export const DevelopmentProcessSection: React.FC<DevelopmentProcessSectionProps> = ({ currentLanguage = 'EN' }) => {
  const t = translations[currentLanguage]?.process || translations.EN.process;
  const [activeStep, setActiveStep] = useState<number>(1);

  const getStepIcon = (name: string) => {
    switch (name) {
      case 'Search': return <Search className="w-5 h-5 text-blue-600" />;
      case 'Compass': return <Compass className="w-5 h-5 text-indigo-600" />;
      case 'Layout': return <Layout className="w-5 h-5 text-purple-600" />;
      case 'Code': return <Code className="w-5 h-5 text-emerald-600" />;
      case 'CheckCircle2': return <CheckCircle2 className="w-5 h-5 text-amber-600" />;
      case 'Rocket': return <Rocket className="w-5 h-5 text-rose-600" />;
      case 'TrendingUp': return <TrendingUp className="w-5 h-5 text-teal-600" />;
      default: return <Sparkles className="w-5 h-5 text-blue-600" />;
    }
  };

  const selectedStepData = PROCESS_STEPS.find(s => s.step === activeStep) || PROCESS_STEPS[0];

  return (
    <section id="process" className="py-24 bg-slate-50 text-slate-900 relative overflow-hidden border-t border-slate-200/80">
      
      {/* Background ambient light */}
      <div className="absolute top-1/2 right-0 w-[500px] h-[500px] bg-blue-100/50 rounded-full blur-[160px] pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-blue-50 border border-blue-200 text-xs font-bold text-blue-700 shadow-sm">
            <Clock className="w-3.5 h-3.5 text-blue-600" />
            <span>{t.badge}</span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-slate-900">
            {t.title}
          </h2>

          <p className="text-slate-600 text-base sm:text-lg leading-relaxed font-medium">
            {t.subtitle}
          </p>

          {/* Quick Concept-to-Market Workflow Banner */}
          <div className="pt-2">
            <div className="p-4 rounded-2xl bg-blue-50/90 border border-blue-200/90 text-left grid grid-cols-1 md:grid-cols-3 gap-4 shadow-sm">
              <div className="flex items-start gap-3">
                <div className="w-7 h-7 rounded-lg bg-blue-600 text-white font-mono font-bold text-xs flex items-center justify-center shrink-0 mt-0.5">
                  1
                </div>
                <div>
                  <div className="text-xs font-black text-slate-900">1. Basic Details Intake</div>
                  <div className="text-[11px] text-slate-600 font-medium leading-tight">
                    Tell us your business name, nature, & website type (online store, portfolio, etc.).
                  </div>
                </div>
              </div>

              <div className="flex items-start gap-3 border-t md:border-t-0 md:border-l border-blue-200/80 pt-3 md:pt-0 md:pl-4">
                <div className="w-7 h-7 rounded-lg bg-indigo-600 text-white font-mono font-bold text-xs flex items-center justify-center shrink-0 mt-0.5">
                  2
                </div>
                <div>
                  <div className="text-xs font-black text-slate-900">2. Working First Draft</div>
                  <div className="text-[11px] text-slate-600 font-medium leading-tight">
                    We deliver a live, functional draft website so you can judge our work quality.
                  </div>
                </div>
              </div>

              <div className="flex items-start gap-3 border-t md:border-t-0 md:border-l border-blue-200/80 pt-3 md:pt-0 md:pl-4">
                <div className="w-7 h-7 rounded-lg bg-emerald-600 text-white font-mono font-bold text-xs flex items-center justify-center shrink-0 mt-0.5">
                  3
                </div>
                <div>
                  <div className="text-xs font-black text-slate-900">3. Feedback & SEO Plans</div>
                  <div className="text-[11px] text-slate-600 font-medium leading-tight">
                    Based on your feedback, we polish design, implement Page 1 SEO & launch!
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Timeline Steps Selector Bar */}
        <div className="relative mb-12 overflow-x-auto pb-4">
          <div className="flex items-center justify-between min-w-[700px] gap-2 p-2 rounded-2xl bg-white border border-slate-200 shadow-sm">
            {PROCESS_STEPS.map((s) => {
              const isActive = s.step === activeStep;
              return (
                <button
                  key={s.step}
                  onClick={() => setActiveStep(s.step)}
                  className={`flex-1 flex items-center justify-center gap-2 py-3 px-3 rounded-xl transition-all ${
                    isActive
                      ? 'bg-blue-600 text-white font-bold shadow-md scale-[1.02]'
                      : 'text-slate-600 hover:text-slate-900 hover:bg-slate-100 font-medium'
                  }`}
                >
                  <span className={`w-6 h-6 rounded-full text-xs font-mono font-bold flex items-center justify-center ${
                    isActive ? 'bg-white text-blue-600' : 'bg-slate-100 text-slate-700'
                  }`}>
                    {s.step}
                  </span>
                  <span className="text-xs whitespace-nowrap">{s.title}</span>
                </button>
              );
            })}
          </div>
        </div>

        {/* Active Step Display Card */}
        <motion.div
          key={selectedStepData.step}
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.4 }}
          className="rounded-3xl p-8 md:p-10 bg-white border border-slate-200/90 shadow-xl relative overflow-hidden"
        >
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            
            <div className="lg:col-span-7 space-y-6">
              <div className="flex items-center gap-3">
                <div className="p-3 rounded-2xl bg-slate-50 border border-slate-200">
                  {getStepIcon(selectedStepData.iconName)}
                </div>
                <div>
                  <div className="text-xs text-blue-600 font-extrabold uppercase tracking-wider">
                    Step 0{selectedStepData.step} • {selectedStepData.duration}
                  </div>
                  <h3 className="text-2xl sm:text-3xl font-extrabold text-slate-900">
                    {selectedStepData.title}
                  </h3>
                </div>
              </div>

              <p className="text-sm sm:text-base text-slate-600 leading-relaxed font-medium">
                {selectedStepData.description}
              </p>

              <div className="space-y-3 pt-2">
                <span className="text-xs font-extrabold uppercase tracking-wider text-slate-500 block">
                  Step Deliverables:
                </span>
                <div className="space-y-2">
                  {selectedStepData.deliverables.map((del, dIdx) => (
                    <div key={dIdx} className="flex items-center gap-2 text-xs text-slate-700 font-semibold">
                      <Check className="w-4 h-4 text-emerald-600 shrink-0" />
                      <span>{del}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Right Step Graphic Summary Card */}
            <div className="lg:col-span-5 bg-slate-50 rounded-2xl p-6 border border-slate-200 space-y-5">
              <div className="flex items-center justify-between">
                <span className="text-xs text-slate-500 font-medium">Estimated Timeline:</span>
                <span className="text-xs font-bold text-blue-700 bg-blue-50 px-2.5 py-1 rounded-md border border-blue-200 font-mono">
                  {selectedStepData.duration}
                </span>
              </div>

              <div className="p-4 rounded-xl bg-white border border-slate-200 shadow-sm space-y-2">
                <span className="text-xs font-bold text-blue-600 block">Step Objective:</span>
                <p className="text-xs text-slate-600 leading-relaxed font-medium">
                  {selectedStepData.summary}
                </p>
              </div>

              <a
                href={`${WHATSAPP_LINK}?text=Hi!%20I%20want%20to%20start%20Step%201%20(Discovery%20%26%20Audit)%20for%20my%20business.`}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full py-3.5 rounded-xl bg-blue-600 hover:bg-blue-700 text-white font-bold text-xs flex items-center justify-center gap-2 shadow-md shadow-blue-500/20 transition-all hover:scale-[1.02]"
              >
                <MessageSquare className="w-4 h-4 fill-current" />
                <span>Kickoff Discovery On WhatsApp</span>
                <ArrowUpRight className="w-4 h-4" />
              </a>
            </div>

          </div>
        </motion.div>

      </div>
    </section>
  );
};
