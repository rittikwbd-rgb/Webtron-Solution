import React, { useState, useEffect, useRef } from 'react';
import { motion, useInView } from 'motion/react';
import { CheckCircle2, Star, Zap, TrendingUp, Globe2, Clock, Sparkles } from 'lucide-react';
import { ANIMATED_STATISTICS } from '../data/agencyData';
import { Statistic, AppLanguage } from '../types';
import { translations } from '../data/translations';

// Counter component for animated numbers
const CounterItem: React.FC<{ stat: Statistic }> = ({ stat }) => {
  const [count, setCount] = useState(0);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-50px' });

  useEffect(() => {
    if (isInView) {
      let start = 0;
      const end = stat.numberValue;
      const duration = 2000;
      const stepTime = 30;
      const steps = duration / stepTime;
      const increment = (end - start) / steps;

      const timer = setInterval(() => {
        start += increment;
        if (start >= end) {
          setCount(end);
          clearInterval(timer);
        } else {
          setCount(start);
        }
      }, stepTime);

      return () => clearInterval(timer);
    }
  }, [isInView, stat.numberValue]);

  const renderIcon = (name: string) => {
    switch (name) {
      case 'CheckCircle2': return <CheckCircle2 className="w-5 h-5 text-emerald-600" />;
      case 'Star': return <Star className="w-5 h-5 text-amber-500 fill-amber-500" />;
      case 'Zap': return <Zap className="w-5 h-5 text-blue-600" />;
      case 'TrendingUp': return <TrendingUp className="w-5 h-5 text-indigo-600" />;
      case 'Globe2': return <Globe2 className="w-5 h-5 text-purple-600" />;
      case 'Clock': return <Clock className="w-5 h-5 text-rose-600" />;
      default: return <Sparkles className="w-5 h-5 text-blue-600" />;
    }
  };

  const formattedNumber = stat.numberValue % 1 === 0 
    ? Math.floor(count).toLocaleString() 
    : count.toFixed(1);

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, scale: 0.9 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
      className="relative rounded-3xl p-6 bg-slate-50 border border-slate-200/80 hover:border-blue-500/40 hover:bg-white transition-all group shadow-sm hover:shadow-xl"
    >
      <div className="flex items-center justify-between mb-4">
        <div className="p-2.5 rounded-xl bg-white border border-slate-200 shadow-sm">
          {renderIcon(stat.iconName)}
        </div>
        <span className="text-[10px] uppercase tracking-wider font-extrabold text-blue-700 bg-blue-50 border border-blue-200 px-2.5 py-1 rounded-full font-mono">
          Verified Metric
        </span>
      </div>

      <div className="space-y-1">
        <div className="text-3xl sm:text-4xl font-extrabold text-slate-900 font-mono tracking-tight flex items-baseline gap-0.5">
          <span>{stat.prefix}</span>
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-indigo-600">
            {formattedNumber}
          </span>
          <span className="text-blue-600">{stat.suffix}</span>
        </div>
        <h3 className="text-sm font-extrabold text-slate-900">{stat.label}</h3>
        <p className="text-xs text-slate-600 leading-relaxed pt-1">{stat.description}</p>
      </div>
    </motion.div>
  );
};

interface AnimatedStatsSectionProps {
  currentLanguage?: AppLanguage;
}

export const AnimatedStatsSection: React.FC<AnimatedStatsSectionProps> = ({ currentLanguage = 'EN' }) => {
  const t = translations[currentLanguage]?.stats || translations.EN.stats;

  return (
    <section className="py-20 bg-white relative overflow-hidden border-t border-slate-200/80">
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <div>
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-blue-50 border border-blue-200 text-xs font-bold text-blue-700 mb-3 shadow-sm">
              <Zap className="w-3.5 h-3.5 text-blue-600" />
              <span>Proven Performance Track Record</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
              {t.title}
            </h2>
          </div>
          <p className="text-slate-600 text-sm max-w-md font-medium">
            {t.subtitle}
          </p>
        </div>

        {/* 6 Stats Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {ANIMATED_STATISTICS.map((stat) => (
            <CounterItem key={stat.id} stat={stat} />
          ))}
        </div>

      </div>
    </section>
  );
};
