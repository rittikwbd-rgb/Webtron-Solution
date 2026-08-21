import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { X, Calculator, MessageSquare, ArrowUpRight } from 'lucide-react';
import { WHATSAPP_LINK } from '../data/agencyData';
import { TargetRegion, AppLanguage } from '../types';
import { translations } from '../data/translations';

interface GrowthCalculatorModalProps {
  isOpen: boolean;
  onClose: () => void;
  currentRegion: TargetRegion;
  currentLanguage?: AppLanguage;
}

export const InteractiveGrowthCalculatorModal: React.FC<GrowthCalculatorModalProps> = ({
  isOpen,
  onClose,
  currentRegion,
  currentLanguage = 'EN'
}) => {
  const t = translations[currentLanguage]?.modal || translations.EN.modal;
  const [industry, setIndustry] = useState('Medical & Healthcare');
  const [traffic, setTraffic] = useState(3000);
  const [goal, setGoal] = useState('Increase Inbound Calls & Leads');

  const currencySymbol = currentRegion === 'US' ? '$' : currentRegion === 'UK' ? '£' : '€';
  const dealMultiplier = currentRegion === 'US' ? 1200 : currentRegion === 'UK' ? 950 : 1100;

  const estimatedNewLeads = Math.round(traffic * 0.032);
  const estimatedRevenue = estimatedNewLeads * 0.25 * dealMultiplier;

  const whatsappMessage = `Hi Webtron Solution! I ran the Growth Estimator for my ${industry} business. We get ~${traffic} visitors/month. Our main goal is to ${goal}. I want to claim the projected +${currencySymbol}${Math.round(estimatedRevenue).toLocaleString()}/month revenue lift!`;

  if (!isOpen) return null;

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/60 backdrop-blur-md">
        <motion.div
          initial={{ opacity: 0, scale: 0.95, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.95, y: 20 }}
          className="relative w-full max-w-xl bg-white border border-slate-200 rounded-3xl p-6 sm:p-8 shadow-2xl text-slate-900 overflow-hidden"
        >
          <button
            type="button"
            onClick={onClose}
            className="absolute top-5 right-5 p-2 rounded-full bg-slate-100 hover:bg-slate-200 text-slate-500 hover:text-slate-900 transition-all"
          >
            <X className="w-5 h-5" />
          </button>

          <div className="flex items-center gap-3 mb-6">
            <div className="w-12 h-12 rounded-2xl bg-white border border-slate-200 shadow-sm p-1.5 flex items-center justify-center shrink-0">
              <img
                src="/logo.png"
                alt="Webtron Solution Logo"
                className="w-full h-full object-contain"
                width={48}
                height={48}
              />
            </div>
            <div>
              <h3 className="text-xl sm:text-2xl font-extrabold text-slate-900">{t.title}</h3>
              <p className="text-xs text-slate-500 font-bold">{t.regionNote.replace('{region}', currentRegion).replace('{symbol}', currencySymbol)}</p>
            </div>
          </div>

          <div className="space-y-4 mb-6">
            
            {/* Industry Selection */}
            <div>
              <label className="text-xs font-extrabold text-slate-700 block mb-1.5">{t.industryLabel}</label>
              <select
                value={industry}
                onChange={(e) => setIndustry(e.target.value)}
                className="w-full p-3 rounded-xl bg-slate-50 border border-slate-200 text-xs text-slate-900 font-bold focus:outline-none focus:border-blue-600 shadow-sm"
              >
                <option value="Medical & Healthcare">Medical & Healthcare Practices</option>
                <option value="Commercial Construction & Architecture">Commercial Construction & Contracting</option>
                <option value="E-commerce & Luxury Brands">E-commerce & Luxury Brands</option>
                <option value="Professional Legal & Accounting Services">Professional Legal & Financial Services</option>
                <option value="Local Home Services & Real Estate">Local Home Services & Real Estate</option>
                <option value="B2B Technology & SaaS">B2B Technology & SaaS Startup</option>
              </select>
            </div>

            {/* Traffic Slider */}
            <div>
              <div className="flex justify-between items-center text-xs mb-1 font-extrabold">
                <span className="text-slate-700">{t.trafficLabel}</span>
                <span className="text-blue-600 font-mono">{traffic.toLocaleString()} visitors</span>
              </div>
              <input
                type="range"
                min="500"
                max="25000"
                step="500"
                value={traffic}
                onChange={(e) => setTraffic(Number(e.target.value))}
                className="w-full h-2 bg-slate-200 rounded-lg appearance-none cursor-pointer accent-blue-600"
              />
            </div>

            {/* Goal Selection */}
            <div>
              <label className="text-xs font-extrabold text-slate-700 block mb-1.5">{t.goalLabel}</label>
              <select
                value={goal}
                onChange={(e) => setGoal(e.target.value)}
                className="w-full p-3 rounded-xl bg-slate-50 border border-slate-200 text-xs text-slate-900 font-bold focus:outline-none focus:border-blue-600 shadow-sm"
              >
                <option value="Increase Inbound Calls & Leads">Increase Inbound Phone Calls & Lead Inquiries</option>
                <option value="Rank #1 on Google Page 1 & Maps">Rank #1 on Google Search & Google Maps</option>
                <option value="Double Website Speed & Conversion Rate">Double Website Speed & Conversion Rate</option>
                <option value="Launch Custom Mobile App">Launch Custom iOS / Android Mobile App</option>
              </select>
            </div>

            {/* Estimate Result Box */}
            <div className="p-4 rounded-2xl bg-blue-50 border border-blue-200 text-center space-y-1 shadow-sm">
              <span className="text-xs text-blue-700 font-extrabold block">{t.impactHeader}</span>
              <div className="text-xl sm:text-2xl font-black text-slate-900 font-mono">
                +{estimatedNewLeads} {t.leadsMo} • +{currencySymbol}{Math.round(estimatedRevenue).toLocaleString()} {t.revenueMo}
              </div>
            </div>

          </div>

          <a
            href={`${WHATSAPP_LINK}?text=${encodeURIComponent(whatsappMessage)}`}
            target="_blank"
            rel="noopener noreferrer"
            className="w-full py-4 rounded-xl bg-blue-600 hover:bg-blue-700 text-white font-extrabold text-sm flex items-center justify-center gap-2 shadow-lg shadow-blue-500/20 transition-all hover:scale-[1.02]"
          >
            <MessageSquare className="w-4 h-4 fill-current" />
            <span>{t.ctaBtn}</span>
            <ArrowUpRight className="w-4 h-4" />
          </a>

        </motion.div>
      </div>
    </AnimatePresence>
  );
};
