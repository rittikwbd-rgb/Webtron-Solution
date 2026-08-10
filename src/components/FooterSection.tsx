import React from 'react';
import { Sparkles, MessageSquare, ArrowUpRight } from 'lucide-react';
import { WHATSAPP_LINK, WHATSAPP_NUMBER, SERVICES_LIST } from '../data/agencyData';
import { AppLanguage } from '../types';
import { translations } from '../data/translations';

interface FooterSectionProps {
  currentLanguage?: AppLanguage;
}

export const FooterSection: React.FC<FooterSectionProps> = ({ currentLanguage = 'EN' }) => {
  const t = translations[currentLanguage]?.footer || translations.EN.footer;

  return (
    <footer className="bg-slate-100 text-slate-600 text-xs border-t border-slate-200 pt-16 pb-12 relative overflow-hidden">
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          
          {/* Column 1: Agency Brand & Mission */}
          <div className="lg:col-span-2 space-y-4">
            <a href="#" className="flex items-center gap-2.5">
              <div className="w-8 h-8 rounded-xl bg-blue-600 flex items-center justify-center text-white shadow-md">
                <Sparkles className="w-4 h-4 text-white" />
              </div>
              <span className="text-lg font-black text-slate-900 tracking-tight uppercase">
                WEBTRON<span className="text-blue-600"> SOLUTION</span>
              </span>
            </a>

            <p className="text-xs text-slate-600 leading-relaxed max-w-sm font-medium">
              {t.brandDesc}
            </p>

            <div className="pt-2">
              <a
                href={WHATSAPP_LINK}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-white border border-slate-200 text-blue-700 font-extrabold text-xs hover:bg-blue-50 transition-all shadow-sm"
              >
                <MessageSquare className="w-3.5 h-3.5 fill-current text-emerald-600" />
                <span>Chat on WhatsApp: {WHATSAPP_NUMBER}</span>
                <ArrowUpRight className="w-3.5 h-3.5" />
              </a>
            </div>
          </div>

          {/* Column 2: Quick Navigation */}
          <div className="space-y-3">
            <h4 className="text-xs font-black uppercase tracking-wider text-slate-900">{t.quickLinks}</h4>
            <ul className="space-y-2 text-slate-600 font-medium">
              <li><a href="#portfolio" className="hover:text-blue-600 transition-colors">{t.links.portfolio}</a></li>
              <li><a href="#process" className="hover:text-blue-600 transition-colors">{t.links.process}</a></li>
              <li><a href="#services" className="hover:text-blue-600 transition-colors">{t.links.services}</a></li>
              <li><a href="#why-choose-us" className="hover:text-blue-600 transition-colors">{t.links.whyUs}</a></li>
              <li><a href="#business-growth" className="hover:text-blue-600 transition-colors">{t.links.growth}</a></li>
              <li><a href="/free-website-audit" className="text-blue-600 font-bold hover:underline">Free Website & Speed Audit</a></li>
              <li><a href="/thank-you" className="hover:text-blue-600 transition-colors">Meta Ads Thank You Page (/thank-you)</a></li>
              <li><a href="#faq" className="hover:text-blue-600 transition-colors">{t.links.faq}</a></li>
            </ul>
          </div>

          {/* Column 3: Core Services */}
          <div className="space-y-3">
            <h4 className="text-xs font-black uppercase tracking-wider text-slate-900">{t.capabilities}</h4>
            <ul className="space-y-2 text-slate-600 font-medium">
              {SERVICES_LIST.slice(0, 6).map((service) => (
                <li key={service.id}>
                  <a
                    href={`${WHATSAPP_LINK}?text=Hi!%20I%20am%20interested%20in%20${encodeURIComponent(service.title)}.`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:text-blue-600 transition-colors flex items-center justify-between"
                  >
                    <span>{service.title}</span>
                  </a>
                </li>
              ))}
            </ul>
          </div>

        </div>

        {/* SEO Sitemap Keywords Footer Bar */}
        <div className="pt-8 border-t border-slate-200 space-y-3">
          <span className="text-[10px] font-extrabold uppercase tracking-widest text-slate-400 block">
            Target Service Capabilities
          </span>
          <div className="flex flex-wrap gap-1.5 text-[10px] text-slate-500 font-medium">
            <span>Website Development</span> •
            <span>Professional Website Design</span> •
            <span>Custom Website Development</span> •
            <span>Mobile App Development</span> •
            <span>Android & iOS App Development</span> •
            <span>Flutter App Development</span> •
            <span>SEO Services</span> •
            <span>Social Media Marketing</span> •
            <span>Google Business Profile Optimization</span> •
            <span>Local SEO</span> •
            <span>Google Maps Ranking</span> •
            <span>Conversion Rate Optimization</span> •
            <span>React Development</span>
          </div>
        </div>

        {/* Bottom Copyright */}
        <div className="pt-6 border-t border-slate-200 flex flex-col sm:flex-row items-center justify-between gap-4 text-[11px] text-slate-500 font-medium">
          <div>
            © {new Date().getFullYear()} Webtron Solution. {t.rights}
          </div>

          <div className="flex items-center gap-4">
            <a href={WHATSAPP_LINK} target="_blank" rel="noopener noreferrer" className="hover:text-blue-600 transition-colors">
              {t.privacy}
            </a>
            <span>•</span>
            <a href={WHATSAPP_LINK} target="_blank" rel="noopener noreferrer" className="hover:text-blue-600 transition-colors">
              {t.terms}
            </a>
            <span>•</span>
            <a href={WHATSAPP_LINK} target="_blank" rel="noopener noreferrer" className="hover:text-blue-600 transition-colors">
              WhatsApp Support ({WHATSAPP_NUMBER})
            </a>
          </div>
        </div>

      </div>
    </footer>
  );
};
