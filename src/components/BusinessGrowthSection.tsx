import React, { useState } from 'react';
import { motion } from 'motion/react';
import { 
  TrendingUp, ShieldCheck, Zap, Search, MapPin, 
  Share2, Smartphone, Target, AlertCircle, MessageSquare, ArrowUpRight, Sparkles 
} from 'lucide-react';
import { WHATSAPP_LINK, WHATSAPP_NUMBER } from '../data/agencyData';
import { AppLanguage } from '../types';
import { translations } from '../data/translations';

interface BusinessGrowthSectionProps {
  currentLanguage?: AppLanguage;
}

export const BusinessGrowthSection: React.FC<BusinessGrowthSectionProps> = ({ currentLanguage = 'EN' }) => {
  const t = translations[currentLanguage]?.businessGrowth || translations.EN.businessGrowth;
  const [activePillar, setActivePillar] = useState<number>(0);

  const growthPillars = [
    {
      title: 'Professional Website = Instant Authority & Trust',
      sub: 'Your website is your 24/7 storefront.',
      icon: <ShieldCheck className="w-5 h-5 text-blue-600" />,
      copy: 'When a potential buyer in the US, UK, or Europe searches for your services, they judge your credibility within 3 seconds. An outdated or broken layout communicates amateurism, forcing visitors to leave for a competitor. A bespoke, Apple-grade website establishes enterprise authority instantly, allowing you to charge premium prices.',
      stat: '75% of users admit to judging a company credibility based on its web design.',
      action: 'Upgrade Your Web Authority'
    },
    {
      title: 'Sub-Second Speed = Higher Conversion Rates',
      sub: 'Speed is not a luxury; it is your highest-leverage sales tool.',
      icon: <Zap className="w-5 h-5 text-amber-500" />,
      copy: 'A 1-second delay in page load time reduces conversions by 7% and increases bounce rates by 32%. We build with high-performance React architecture that renders in milliseconds. Every millisecond saved directly retains high-intent buyers who would otherwise drop off.',
      stat: '+35% average conversion boost when page load times drop below 1 second.',
      action: 'Optimize PageSpeed Now'
    },
    {
      title: 'SEO = Free Compounding Long-Term Traffic',
      sub: 'Stop renting traffic with temporary ad spends.',
      icon: <Search className="w-5 h-5 text-emerald-600" />,
      copy: 'Pay-per-click ad costs rise by 15% every year. When you stop paying for ads, your leads instantly drop to zero. Organic Search Engine Optimization (SEO) creates permanent search equity. By dominating Page 1 for high-intent buyer keywords, your business receives a steady stream of zero-ad-cost leads year after year.',
      stat: '53.3% of all web traffic comes from organic search results.',
      action: 'Dominate Google Page 1'
    },
    {
      title: 'Google Business Profile = Local Maps Dominance',
      sub: 'Capture buyers looking for service near them right now.',
      icon: <MapPin className="w-5 h-5 text-purple-600" />,
      copy: 'Over 82% of smartphone users conduct "near me" searches before buying local services. Ranking in the Google Maps Local 3-Pack puts your business directly in front of buyers at the exact moment they are ready to call or click to chat on WhatsApp.',
      stat: '#1 ranking on Google Maps gets 33% of all local clicks.',
      action: 'Rank #1 On Google Maps'
    },
    {
      title: 'Mobile Apps = Sticky Customer Retention & High LTV',
      sub: 'Stay permanently installed on your customer’s home screen.',
      icon: <Smartphone className="w-5 h-5 text-indigo-600" />,
      copy: 'Mobile applications provide direct, unmediated communication through push notifications, loyalty rewards, and 1-tap ordering. For repeat service businesses and e-commerce brands, custom iOS and Android apps increase customer lifetime value (LTV) by over 2.5x.',
      stat: 'Apps drive 3x higher purchase conversion rates than mobile browsers.',
      action: 'Develop Custom Mobile App'
    },
    {
      title: 'Social Media & Automation = Predictable Lead Pipeline',
      sub: 'Transform word-of-mouth into a predictable lead machine.',
      icon: <Target className="w-5 h-5 text-rose-600" />,
      copy: 'Relying solely on unpredictable word-of-mouth limits business growth. Combining targeted social proof with automated WhatsApp intake funnels turns your digital presence into a predictable, repeatable sales pipeline that fuels steady business expansion.',
      stat: 'Automated lead responses within 5 minutes increase conversions by 391%.',
      action: 'Automate Lead Generation'
    }
  ];

  return (
    <section id="business-growth" className="py-24 bg-white text-slate-900 relative overflow-hidden border-t border-slate-200/80">
      
      {/* Background ambient light */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[800px] h-[800px] bg-blue-50/50 rounded-full blur-[180px] pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-blue-50 border border-blue-200 text-xs font-bold text-blue-700 shadow-sm">
            <TrendingUp className="w-3.5 h-3.5 text-blue-600" />
            <span>{t.badge}</span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-slate-900">
            {t.title}
          </h2>

          <p className="text-slate-600 text-base sm:text-lg leading-relaxed font-medium">
            {t.subtitle}
          </p>
        </div>

        {/* 6 Growth Pillars Interactive Tabs & Display */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start mb-20">
          
          {/* Left Column: Pillar Selectors */}
          <div className="lg:col-span-5 space-y-3">
            {growthPillars.map((pillar, idx) => {
              const isActive = activePillar === idx;
              return (
                <button
                  key={idx}
                  onClick={() => setActivePillar(idx)}
                  className={`w-full text-left p-4 rounded-2xl border transition-all duration-300 flex items-center justify-between ${
                    isActive
                      ? 'bg-blue-600 border-blue-600 text-white shadow-lg shadow-blue-500/20 scale-[1.02]'
                      : 'bg-slate-50 border-slate-200 hover:border-slate-300 text-slate-700 hover:bg-slate-100'
                  }`}
                >
                  <div className="flex items-center gap-3">
                    <div className={`p-2.5 rounded-xl ${isActive ? 'bg-white/20 text-white' : 'bg-white border border-slate-200'}`}>
                      {pillar.icon}
                    </div>
                    <div>
                      <h3 className={`text-sm font-extrabold ${isActive ? 'text-white' : 'text-slate-900'}`}>
                        {pillar.title.split('=')[0]}
                      </h3>
                      <p className={`text-[11px] line-clamp-1 ${isActive ? 'text-blue-100' : 'text-slate-500'}`}>{pillar.sub}</p>
                    </div>
                  </div>
                  <div className={`w-2.5 h-2.5 rounded-full ${isActive ? 'bg-white' : 'bg-slate-300'}`}></div>
                </button>
              );
            })}
          </div>

          {/* Right Column: Active Pillar Expanded Display */}
          <div className="lg:col-span-7">
            <motion.div
              key={activePillar}
              initial={{ opacity: 0, scale: 0.98 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.4 }}
              className="rounded-3xl p-8 bg-slate-50 border border-slate-200/90 shadow-xl space-y-6 relative overflow-hidden"
            >
              <div className="flex items-center gap-3">
                <div className="p-3 rounded-2xl bg-white border border-slate-200 shadow-sm">
                  {growthPillars[activePillar].icon}
                </div>
                <div>
                  <span className="text-[10px] font-mono text-blue-600 uppercase tracking-widest font-extrabold">Growth Principle 0{activePillar + 1}</span>
                  <h3 className="text-xl sm:text-2xl font-extrabold text-slate-900">
                    {growthPillars[activePillar].title}
                  </h3>
                </div>
              </div>

              <p className="text-sm sm:text-base text-slate-600 leading-relaxed font-medium">
                {growthPillars[activePillar].copy}
              </p>

              <div className="p-4 rounded-2xl bg-blue-50 border border-blue-200 flex items-center gap-3 text-xs font-bold text-blue-800 shadow-sm">
                <Sparkles className="w-5 h-5 text-blue-600 shrink-0" />
                <span>{growthPillars[activePillar].stat}</span>
              </div>

              <div className="pt-2">
                <a
                  href={`${WHATSAPP_LINK}?text=Hi!%20I%20want%20to%20apply%20${encodeURIComponent(growthPillars[activePillar].title)}%20to%20my%20business.`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full sm:w-auto px-6 py-3.5 rounded-xl bg-blue-600 hover:bg-blue-700 text-white font-bold text-xs inline-flex items-center justify-center gap-2 shadow-lg shadow-blue-500/20 transition-all hover:scale-105"
                >
                  <MessageSquare className="w-4 h-4 fill-current" />
                  <span>{growthPillars[activePillar].action} On WhatsApp</span>
                  <ArrowUpRight className="w-4 h-4" />
                </a>
              </div>

            </motion.div>
          </div>

        </div>

        {/* High-Impact Alert Banner: "The Cost of Inaction" */}
        <div className="rounded-3xl p-8 bg-rose-50 border border-rose-200 shadow-lg relative overflow-hidden">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            
            <div className="flex items-start gap-4">
              <div className="p-3 rounded-2xl bg-rose-100 text-rose-700 border border-rose-200 shrink-0 mt-1 shadow-sm">
                <AlertCircle className="w-6 h-6" />
              </div>
              <div className="space-y-1">
                <span className="text-xs font-extrabold uppercase tracking-widest text-rose-700">The Hard Truth About Digital Inaction</span>
                <h3 className="text-xl font-extrabold text-slate-900">A Business Without A Strong Online Presence Loses Customers Every Single Day</h3>
                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed max-w-2xl font-medium">
                  Every day your website remains slow, unoptimized for mobile, or hidden on Page 2 of Google, your prospective local customers are contacting your competitors instead. Reclaim your market share today.
                </p>
              </div>
            </div>

            <a
              href={WHATSAPP_LINK}
              target="_blank"
              rel="noopener noreferrer"
              className="shrink-0 px-6 py-3.5 rounded-xl bg-blue-600 hover:bg-blue-700 text-white font-bold text-xs flex items-center gap-2 shadow-md hover:scale-105 transition-all"
            >
              <MessageSquare className="w-4 h-4 fill-current" />
              <span>Fix My Digital Presence</span>
              <ArrowUpRight className="w-4 h-4" />
            </a>

          </div>
        </div>

      </div>
    </section>
  );
};
