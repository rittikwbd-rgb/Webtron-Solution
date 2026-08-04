import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  Globe, Smartphone, TrendingUp, MapPin, Compass, Share2, 
  Cpu, ShieldCheck, Zap, Layout, Database, Check, ArrowUpRight, 
  MessageSquare, Sparkles, X, ChevronRight, Megaphone, Target 
} from 'lucide-react';
import { SERVICES_LIST, WHATSAPP_LINK } from '../data/agencyData';
import { Service, AppLanguage } from '../types';
import { translations } from '../data/translations';

interface ServicesSectionProps {
  currentLanguage?: AppLanguage;
}

export const ServicesSection: React.FC<ServicesSectionProps> = ({ currentLanguage = 'EN' }) => {
  const t = translations[currentLanguage]?.services || translations.EN.services;
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [activeModalService, setActiveModalService] = useState<Service | null>(null);

  const categories = [
    { id: 'all', name: t.categories.all },
    { id: 'web_apps', name: t.categories.web },
    { id: 'seo_growth', name: t.categories.seo },
    { id: 'social_media', name: t.categories.ppc },
    { id: 'automation_design', name: t.categories.gbp },
  ];

  const filteredServices = selectedCategory === 'all'
    ? SERVICES_LIST
    : SERVICES_LIST.filter(s => s.category === selectedCategory);

  const getServiceIcon = (name: string) => {
    switch (name) {
      case 'Globe': return <Globe className="w-6 h-6 text-blue-600" />;
      case 'Smartphone': return <Smartphone className="w-6 h-6 text-indigo-600" />;
      case 'TrendingUp': return <TrendingUp className="w-6 h-6 text-emerald-600" />;
      case 'MapPin': return <MapPin className="w-6 h-6 text-purple-600" />;
      case 'Compass': return <Compass className="w-6 h-6 text-amber-600" />;
      case 'Target': return <Target className="w-6 h-6 text-red-600" />;
      case 'Share2': return <Share2 className="w-6 h-6 text-rose-600" />;
      case 'Cpu': return <Cpu className="w-6 h-6 text-cyan-600" />;
      case 'ShieldCheck': return <ShieldCheck className="w-6 h-6 text-teal-600" />;
      case 'Zap': return <Zap className="w-6 h-6 text-yellow-600" />;
      case 'Layout': return <Layout className="w-6 h-6 text-fuchsia-600" />;
      case 'Database': return <Database className="w-6 h-6 text-sky-600" />;
      default: return <Sparkles className="w-6 h-6 text-blue-600" />;
    }
  };

  return (
    <section id="services" className="py-24 bg-white text-slate-900 relative overflow-hidden border-t border-slate-200/80">
      
      {/* Background ambient light */}
      <div className="absolute top-1/3 right-0 w-[500px] h-[500px] bg-blue-50/60 rounded-full blur-[140px] pointer-events-none"></div>
      <div className="absolute bottom-1/4 left-0 w-[500px] h-[500px] bg-purple-50/50 rounded-full blur-[140px] pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-12">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-blue-50 border border-blue-200/80 text-xs font-bold text-blue-700 shadow-sm">
            <Sparkles className="w-3.5 h-3.5 text-blue-600" />
            <span>{t.badge}</span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-slate-900">
            {t.title}
          </h2>

          <p className="text-slate-600 text-base sm:text-lg leading-relaxed">
            {t.subtitle}
          </p>

          {/* Category Filter Pills - Responsive & scrollable on mobile */}
          <div className="flex items-center justify-start sm:justify-center gap-2 pt-4 overflow-x-auto max-w-full pb-2 no-scrollbar scroll-smooth">
            {categories.map((cat) => (
              <button
                key={cat.id}
                onClick={() => setSelectedCategory(cat.id)}
                className={`px-4 py-2.5 rounded-full text-xs font-bold transition-all shrink-0 shadow-sm ${
                  selectedCategory === cat.id
                    ? 'bg-blue-600 text-white shadow-blue-500/20 scale-105'
                    : 'bg-slate-100 border border-slate-200/80 text-slate-600 hover:text-slate-900 hover:bg-slate-200/60'
                }`}
              >
                {cat.name}
              </button>
            ))}
          </div>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredServices.map((service, idx) => (
            <motion.div
              key={service.id}
              layout
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              whileHover={{ scale: 1.025, y: -4 }}
              exit={{ opacity: 0, scale: 0.9 }}
              transition={{ duration: 0.3 }}
              className="relative rounded-3xl p-6 bg-slate-50/70 border border-slate-200/80 hover:border-blue-500/40 hover:bg-white transition-all duration-300 hover:shadow-2xl hover:shadow-blue-500/10 flex flex-col justify-between group backdrop-blur-xl"
            >
              <div>
                
                {/* Top Badge & Icon */}
                <div className="flex items-center justify-between mb-5">
                  <div className="p-3 rounded-2xl bg-white border border-slate-200/80 group-hover:scale-110 group-hover:border-blue-500/40 transition-all duration-300 shadow-sm">
                    {getServiceIcon(service.iconName)}
                  </div>
                  {service.popular && (
                    <span className="px-2.5 py-1 text-[10px] font-extrabold uppercase tracking-wider text-amber-700 bg-amber-50 border border-amber-200 rounded-full shadow-sm">
                      ★ High Demand
                    </span>
                  )}
                  {service.category === 'social_media' && (
                    <span className="px-2.5 py-1 text-[10px] font-extrabold uppercase tracking-wider text-rose-700 bg-rose-50 border border-rose-200 rounded-full shadow-sm">
                      📣 Social Media
                    </span>
                  )}
                </div>

                {/* Service Title & Short Description */}
                <h3 className="text-xl font-extrabold text-slate-900 mb-2 group-hover:text-blue-600 transition-colors">
                  {service.title}
                </h3>
                <p className="text-xs text-slate-600 leading-relaxed mb-4">
                  {service.shortDesc}
                </p>

                {/* Key Deliverables Bullet Points */}
                <div className="space-y-2 mb-6">
                  {service.deliverables.slice(0, 3).map((item, dIdx) => (
                    <div key={dIdx} className="flex items-start gap-2 text-xs text-slate-700 font-medium">
                      <Check className="w-3.5 h-3.5 text-emerald-600 shrink-0 mt-0.5" />
                      <span>{item}</span>
                    </div>
                  ))}
                </div>

              </div>

              {/* Bottom Action Footer */}
              <div className="pt-4 border-t border-slate-200/80 space-y-3">
                <div className="flex items-center justify-between text-[11px]">
                  <span className="text-slate-500 font-medium">Expected Result:</span>
                  <span className="font-extrabold text-emerald-600">{service.roiImpact.split('.')[0]}</span>
                </div>

                <div className="grid grid-cols-2 gap-2">
                  <button
                    type="button"
                    onClick={() => setActiveModalService(service)}
                    className="w-full py-2.5 px-3 rounded-xl bg-white hover:bg-slate-100 border border-slate-200 text-xs font-bold text-slate-700 transition-colors flex items-center justify-center gap-1 shadow-sm"
                  >
                    <span>View Scope</span>
                    <ChevronRight className="w-3.5 h-3.5 text-slate-400" />
                  </button>

                  <a
                    href={`${WHATSAPP_LINK}?text=Hi!%20I%20am%20interested%20in%20${encodeURIComponent(service.title)}%20services.`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full py-2.5 px-3 rounded-xl bg-blue-600 hover:bg-blue-700 text-xs font-bold text-white transition-colors flex items-center justify-center gap-1 shadow-md shadow-blue-500/10"
                  >
                    <MessageSquare className="w-3 h-3 fill-current" />
                    <span>Inquire</span>
                    <ArrowUpRight className="w-3.5 h-3.5" />
                  </a>
                </div>
              </div>

            </motion.div>
          ))}
        </div>

      </div>

      {/* Service Detail Modal */}
      <AnimatePresence>
        {activeModalService && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/60 backdrop-blur-md">
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 20 }}
              className="relative w-full max-w-2xl bg-white border border-slate-200 rounded-3xl p-6 md:p-8 shadow-2xl text-slate-900 overflow-hidden max-h-[90vh] overflow-y-auto"
            >
              <button
                type="button"
                onClick={() => setActiveModalService(null)}
                className="absolute top-5 right-5 p-2 rounded-full bg-slate-100 hover:bg-slate-200 text-slate-500 hover:text-slate-900 transition-colors"
              >
                <X className="w-5 h-5" />
              </button>

              <div className="flex items-center gap-3 mb-4">
                <div className="p-3 rounded-2xl bg-blue-50 border border-blue-200">
                  {getServiceIcon(activeModalService.iconName)}
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-slate-900">{activeModalService.title}</h3>
                  <span className="text-xs text-blue-600 font-bold">Scope & Deliverables Breakdown</span>
                </div>
              </div>

              <p className="text-sm text-slate-600 leading-relaxed mb-6">
                {activeModalService.fullDesc}
              </p>

              <div className="space-y-4 mb-6">
                <h4 className="text-xs font-extrabold uppercase tracking-wider text-slate-500">
                  Key Scope Deliverables
                </h4>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                  {activeModalService.deliverables.map((del, dIdx) => (
                    <div key={dIdx} className="p-3 rounded-xl bg-slate-50 border border-slate-200 flex items-start gap-2 text-xs text-slate-700 font-medium">
                      <Check className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                      <span>{del}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Keywords Tag Cloud */}
              <div className="mb-6">
                <h4 className="text-xs font-extrabold uppercase tracking-wider text-slate-500 mb-2">
                  Targeted Capabilities & Keywords
                </h4>
                <div className="flex flex-wrap gap-1.5">
                  {activeModalService.keywords.map((kw, kIdx) => (
                    <span key={kIdx} className="text-[11px] px-2.5 py-1 rounded-md bg-blue-50 border border-blue-200 text-blue-700 font-medium">
                      #{kw}
                    </span>
                  ))}
                </div>
              </div>

              {/* Modal CTAs */}
              <div className="pt-4 border-t border-slate-200 flex flex-col sm:flex-row items-center justify-between gap-4">
                <div className="text-xs text-emerald-600 font-extrabold">
                  🚀 {activeModalService.roiImpact}
                </div>

                <a
                  href={`${WHATSAPP_LINK}?text=Hi!%20I%20want%20to%20discuss%20${encodeURIComponent(activeModalService.title)}%20for%20my%20business.`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full sm:w-auto px-6 py-3 rounded-xl bg-blue-600 hover:bg-blue-700 text-white font-bold text-xs flex items-center justify-center gap-2 shadow-md shadow-blue-500/20"
                >
                  <MessageSquare className="w-4 h-4 fill-current" />
                  <span>Discuss {activeModalService.title} On WhatsApp</span>
                  <ArrowUpRight className="w-4 h-4" />
                </a>
              </div>

            </motion.div>
          </div>
        )}
      </AnimatePresence>

    </section>
  );
};
