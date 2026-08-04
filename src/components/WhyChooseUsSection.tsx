import React, { useState } from 'react';
import { motion } from 'motion/react';
import { 
  Target, PhoneCall, TrendingUp, Zap, BarChart3, Rocket, 
  MessageSquare, ArrowUpRight, Calculator, CheckCircle2 
} from 'lucide-react';
import { CHOOSE_US_REASONS, WHATSAPP_LINK } from '../data/agencyData';
import { TargetRegion, AppLanguage } from '../types';
import { translations } from '../data/translations';

interface WhyChooseUsProps {
  currentRegion: TargetRegion;
  currentLanguage?: AppLanguage;
}

export const WhyChooseUsSection: React.FC<WhyChooseUsProps> = ({ currentRegion, currentLanguage = 'EN' }) => {
  const t = translations[currentLanguage]?.whyUs || translations.EN.whyUs;
  const [traffic, setTraffic] = useState<number>(2500);

  const currencySymbol = currentRegion === 'US' ? '$' : currentRegion === 'UK' ? '£' : '€';
  const avgDealValue = currentRegion === 'US' ? 1200 : currentRegion === 'UK' ? 950 : 1100;

  // Calculation formulas
  const currentLeads = Math.round(traffic * 0.01); // 1% typical rate
  const apexLeads = Math.round(traffic * 0.042); // 4.2% Apex optimized rate
  const leadIncrease = apexLeads - currentLeads;
  const estimatedRevenueLift = leadIncrease * 0.25 * avgDealValue; // 25% closing rate

  const getReasonIcon = (name: string) => {
    switch (name) {
      case 'Target': return <Target className="w-6 h-6 text-blue-600" />;
      case 'PhoneCall': return <PhoneCall className="w-6 h-6 text-emerald-600" />;
      case 'TrendingUp': return <TrendingUp className="w-6 h-6 text-indigo-600" />;
      case 'Zap': return <Zap className="w-6 h-6 text-amber-600" />;
      case 'BarChart3': return <BarChart3 className="w-6 h-6 text-purple-600" />;
      case 'Rocket': return <Rocket className="w-6 h-6 text-rose-600" />;
      default: return <TrendingUp className="w-6 h-6 text-blue-600" />;
    }
  };

  return (
    <section id="why-choose-us" className="py-24 bg-slate-50 text-slate-900 relative overflow-hidden border-t border-slate-200/80">
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-emerald-50 border border-emerald-200 text-xs font-bold text-emerald-700 shadow-sm">
            <BarChart3 className="w-3.5 h-3.5 text-emerald-600" />
            <span>{t.badge}</span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-slate-900">
            {t.title}
          </h2>

          <p className="text-slate-600 text-base sm:text-lg leading-relaxed">
            {t.subtitle}
          </p>
        </div>

        {/* 6 Reasons Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-20">
          {CHOOSE_US_REASONS.map((reason, idx) => (
            <motion.div
              key={reason.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.08 }}
              className="rounded-3xl p-6 bg-white border border-slate-200/80 hover:border-blue-500/40 transition-all duration-300 hover:shadow-xl flex flex-col justify-between group shadow-sm"
            >
              <div>
                <div className="flex items-center justify-between mb-5">
                  <div className="p-3 rounded-2xl bg-slate-50 border border-slate-200 group-hover:scale-110 transition-transform">
                    {getReasonIcon(reason.iconName)}
                  </div>
                  <div className="text-right">
                    <span className="text-2xl font-black text-emerald-600 font-mono block">
                      {reason.metric}
                    </span>
                    <span className="text-[10px] text-slate-500 uppercase tracking-wider font-extrabold">
                      {reason.metricLabel}
                    </span>
                  </div>
                </div>

                <h3 className="text-xl font-extrabold text-slate-900 mb-2 group-hover:text-blue-600 transition-colors">
                  {reason.title}
                </h3>
                <p className="text-xs font-bold text-blue-600 mb-2">
                  {reason.subtitle}
                </p>
                <p className="text-xs text-slate-600 leading-relaxed font-medium">
                  {reason.description}
                </p>
              </div>

              <div className="mt-6 pt-4 border-t border-slate-100 flex items-center justify-between">
                <span className="text-xs text-slate-500 font-medium">Core Metric Focus</span>
                <CheckCircle2 className="w-4 h-4 text-emerald-600" />
              </div>
            </motion.div>
          ))}
        </div>

        {/* Interactive Growth Lead Calculator Widget */}
        <div className="rounded-3xl p-8 md:p-10 bg-white border border-slate-200/90 shadow-xl relative overflow-hidden">
          
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            
            {/* Calculator Left: Controls */}
            <div className="lg:col-span-6 space-y-6">
              <div className="flex items-center gap-2">
                <div className="p-2.5 rounded-xl bg-blue-50 border border-blue-200 text-blue-600">
                  <Calculator className="w-5 h-5" />
                </div>
                <h3 className="text-2xl font-extrabold text-slate-900">{t.calcTitle}</h3>
              </div>

              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed font-medium">
                {t.calcDesc}
              </p>

              <div className="space-y-3">
                <div className="flex justify-between items-center text-xs font-extrabold">
                  <span className="text-slate-700">{t.calcVisitors}</span>
                  <span className="text-blue-600 font-mono text-base">{traffic.toLocaleString()} visitors/mo</span>
                </div>

                <input
                  type="range"
                  min="500"
                  max="20000"
                  step="500"
                  value={traffic}
                  onChange={(e) => setTraffic(Number(e.target.value))}
                  className="w-full h-2.5 bg-slate-200 rounded-lg appearance-none cursor-pointer accent-blue-600"
                />

                <div className="flex justify-between text-[10px] text-slate-500 font-mono font-bold">
                  <span>500</span>
                  <span>5,000</span>
                  <span>10,000</span>
                  <span>20,000+</span>
                </div>
              </div>
            </div>

            {/* Calculator Right: Output Metrics */}
            <div className="lg:col-span-6 bg-slate-50 rounded-2xl p-6 border border-slate-200 space-y-6">
              <div className="grid grid-cols-2 gap-4">
                <div className="p-4 rounded-xl bg-white border border-slate-200 shadow-sm">
                  <span className="text-[11px] text-slate-500 font-medium block mb-1">{t.calcStandard}</span>
                  <span className="text-xl font-black text-slate-700 font-mono">{currentLeads} leads/mo</span>
                </div>

                <div className="p-4 rounded-xl bg-emerald-50 border border-emerald-200 shadow-sm">
                  <span className="text-[11px] text-emerald-800 font-bold block mb-1">{t.calcOptimized}</span>
                  <span className="text-xl font-black text-emerald-600 font-mono">{apexLeads} leads/mo</span>
                </div>
              </div>

              <div className="p-4 rounded-xl bg-blue-50/80 border border-blue-200 text-center shadow-sm">
                <span className="text-xs text-blue-700 font-extrabold block mb-1">{t.calcRevenueLift}</span>
                <span className="text-3xl font-black text-slate-900 font-mono">
                  +{currencySymbol}{Math.round(estimatedRevenueLift).toLocaleString()} <span className="text-xs text-slate-500 font-sans font-medium">/ month</span>
                </span>
              </div>

              <a
                href={`${WHATSAPP_LINK}?text=Hi!%20My%20website%20gets%20around%20${traffic}%20visitors/month.%20I%20want%20to%20discuss%20generating%20${leadIncrease}%20more%20leads.`}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full py-3.5 rounded-xl bg-blue-600 hover:bg-blue-700 text-white font-bold text-xs flex items-center justify-center gap-2 shadow-lg shadow-blue-500/20 transition-all hover:scale-[1.02]"
              >
                <MessageSquare className="w-4 h-4 fill-current" />
                <span>{t.calcCta}</span>
                <ArrowUpRight className="w-4 h-4" />
              </a>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};
