import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { HelpCircle, ChevronDown, Search, MessageSquare, ArrowUpRight, Sparkles } from 'lucide-react';
import { FAQ_ITEMS, WHATSAPP_LINK } from '../data/agencyData';
import { FAQItem, AppLanguage } from '../types';
import { translations } from '../data/translations';

interface FAQSectionProps {
  currentLanguage?: AppLanguage;
}

export const FAQSection: React.FC<FAQSectionProps> = ({ currentLanguage = 'EN' }) => {
  const t = translations[currentLanguage]?.faq || translations.EN.faq;
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [openFaqId, setOpenFaqId] = useState<string>('faq-1');

  const categories = [
    { id: 'all', name: 'All Questions' },
    { id: 'website', name: 'Website Development' },
    { id: 'seo', name: 'SEO & Google Profile' },
    { id: 'app', name: 'Mobile Apps' },
    { id: 'pricing', name: 'Pricing & Timeline' },
    { id: 'maintenance', name: 'Support & Care' }
  ];

  const filteredFaqs = FAQ_ITEMS.filter((item) => {
    const matchesCategory = selectedCategory === 'all' || 
      (selectedCategory === 'seo' && (item.category === 'seo' || item.category === 'gbp')) ||
      item.category === selectedCategory;

    const matchesSearch = searchQuery.trim() === '' ||
      item.question.toLowerCase().includes(searchQuery.toLowerCase()) ||
      item.answer.toLowerCase().includes(searchQuery.toLowerCase()) ||
      item.keywords.some(k => k.toLowerCase().includes(searchQuery.toLowerCase()));

    return matchesCategory && matchesSearch;
  });

  return (
    <section id="faq" className="py-24 bg-white text-slate-900 relative overflow-hidden border-t border-slate-200/80">
      
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center space-y-4 mb-12">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-blue-50 border border-blue-200 text-xs font-bold text-blue-700 shadow-sm">
            <HelpCircle className="w-3.5 h-3.5 text-blue-600" />
            <span>{t.badge}</span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-slate-900">
            {t.title}
          </h2>

          <p className="text-slate-600 text-base sm:text-lg leading-relaxed max-w-2xl mx-auto font-medium">
            {t.subtitle}
          </p>

          {/* Search Bar */}
          <div className="pt-4 max-w-md mx-auto relative">
            <Search className="w-4 h-4 text-slate-400 absolute left-4 top-1/2 -translate-y-1/2" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search FAQs by keyword (e.g., SEO, pricing, speed)..."
              className="w-full pl-11 pr-4 py-3 rounded-2xl bg-slate-50 border border-slate-200/90 text-xs text-slate-900 placeholder-slate-400 focus:outline-none focus:border-blue-600 transition-colors shadow-sm font-medium"
            />
          </div>

          {/* Category Filter Pills */}
          <div className="flex flex-wrap items-center justify-center gap-2 pt-4">
            {categories.map((cat) => (
              <button
                key={cat.id}
                onClick={() => setSelectedCategory(cat.id)}
                className={`px-3.5 py-1.5 rounded-xl text-xs font-bold transition-all shadow-sm ${
                  selectedCategory === cat.id
                    ? 'bg-blue-600 text-white'
                    : 'bg-slate-100 border border-slate-200 text-slate-600 hover:text-slate-900 hover:bg-slate-200/60'
                }`}
              >
                {cat.name}
              </button>
            ))}
          </div>
        </div>

        {/* FAQ Accordion List */}
        <div className="space-y-4">
          {filteredFaqs.length === 0 ? (
            <div className="text-center py-12 rounded-2xl bg-slate-50 border border-slate-200 space-y-3 shadow-sm">
              <p className="text-slate-600 text-sm font-medium">No FAQs matched your search keyword.</p>
              <button
                onClick={() => { setSearchQuery(''); setSelectedCategory('all'); }}
                className="text-xs text-blue-600 font-bold underline"
              >
                Reset Search Filters
              </button>
            </div>
          ) : (
            filteredFaqs.map((faq) => {
              const isOpen = openFaqId === faq.id;
              return (
                <div
                  key={faq.id}
                  className="rounded-2xl bg-slate-50 border border-slate-200/80 overflow-hidden transition-all duration-200 hover:border-blue-500/40 shadow-sm"
                >
                  <button
                    type="button"
                    onClick={() => setOpenFaqId(isOpen ? '' : faq.id)}
                    className="w-full p-6 text-left flex items-center justify-between gap-4 hover:bg-white transition-colors"
                  >
                    <span className="text-sm sm:text-base font-extrabold text-slate-900 leading-snug">
                      {faq.question}
                    </span>
                    <div className={`p-1.5 rounded-full transition-transform duration-300 shrink-0 ${isOpen ? 'rotate-180 bg-blue-600 text-white' : 'bg-slate-200 text-slate-600'}`}>
                      <ChevronDown className="w-4 h-4" />
                    </div>
                  </button>

                  <AnimatePresence>
                    {isOpen && (
                      <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: 'auto' }}
                        exit={{ opacity: 0, height: 0 }}
                        transition={{ duration: 0.3 }}
                      >
                        <div className="px-6 pb-6 pt-1 text-xs sm:text-sm text-slate-600 leading-relaxed border-t border-slate-200 space-y-4 font-medium bg-white">
                          <p>{faq.answer}</p>
                          
                          <div className="flex flex-wrap items-center gap-1.5 pt-2">
                            <span className="text-[10px] text-slate-400 font-bold uppercase mr-1">Related Keywords:</span>
                            {faq.keywords.map((kw, idx) => (
                              <span key={idx} className="text-[10px] px-2 py-0.5 rounded bg-blue-50 border border-blue-200 text-blue-700 font-mono font-bold">
                                #{kw}
                              </span>
                            ))}
                          </div>
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              );
            })
          )}
        </div>

        {/* FAQ Bottom WhatsApp Callout */}
        <div className="mt-12 p-6 rounded-2xl bg-slate-50 border border-slate-200 text-center space-y-3 shadow-sm">
          <p className="text-xs text-slate-600 font-bold">Have a custom question not listed here?</p>
          <a
            href={WHATSAPP_LINK}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-blue-600 hover:bg-blue-700 text-white font-bold text-xs shadow-md shadow-blue-500/20 transition-all hover:scale-105"
          >
            <MessageSquare className="w-3.5 h-3.5 fill-current" />
            <span>Ask Us Directly On WhatsApp</span>
            <ArrowUpRight className="w-3.5 h-3.5" />
          </a>
        </div>

      </div>
    </section>
  );
};
