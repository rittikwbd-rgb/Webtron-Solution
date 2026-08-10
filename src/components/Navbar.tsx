import React, { useState, useEffect, useRef } from 'react';
import { MessageSquare, Globe, Menu, X, ArrowUpRight, Sparkles, ChevronDown, Check, Calendar } from 'lucide-react';
import { WHATSAPP_LINK, WHATSAPP_NUMBER } from '../data/agencyData';
import { TargetRegion, AppLanguage } from '../types';

interface NavbarProps {
  currentRegion: TargetRegion;
  onRegionChange: (region: TargetRegion) => void;
  onOpenCalculator: () => void;
  onOpenCalendar?: () => void;
  currentLanguage?: AppLanguage;
  onLanguageChange?: (lang: AppLanguage) => void;
}

export const LANGUAGES: { code: AppLanguage; label: string; flag: string; country: string }[] = [
  { code: 'EN', label: 'English', flag: '🇺🇸', country: 'US / UK' },
  { code: 'ES', label: 'Español', flag: '🇪🇸', country: 'EU / LatAm' },
  { code: 'FR', label: 'Français', flag: '🇫🇷', country: 'EU' },
  { code: 'DE', label: 'Deutsch', flag: '🇩🇪', country: 'EU' },
];

export const NAV_TRANSLATIONS: Record<AppLanguage, {
  portfolio: string;
  process: string;
  services: string;
  whyUs: string;
  growthRoi: string;
  faq: string;
  availableStatus: string;
  growthAgency: string;
  roiCalculator: string;
  chatWhatsapp: string;
  bookCall: string;
  langSelect: string;
}> = {
  EN: {
    portfolio: 'Portfolio',
    process: 'Process',
    services: 'Services',
    whyUs: 'Why Us',
    growthRoi: 'Growth ROI',
    faq: 'FAQ',
    availableStatus: 'Available for New Projects',
    growthAgency: 'Growth Agency',
    roiCalculator: 'ROI Calculator',
    chatWhatsapp: 'WhatsApp',
    bookCall: 'Book Call',
    langSelect: 'Select Language'
  },
  ES: {
    portfolio: 'Portafolio',
    process: 'Proceso',
    services: 'Servicios',
    whyUs: 'Nosotros',
    growthRoi: 'ROI Crecimiento',
    faq: 'Preguntas',
    availableStatus: 'Disponible para Proyectos',
    growthAgency: 'Agencia Digital',
    roiCalculator: 'Calculadora ROI',
    chatWhatsapp: 'WhatsApp',
    bookCall: 'Reservar Llamada',
    langSelect: 'Seleccionar Idioma'
  },
  FR: {
    portfolio: 'Portfolio',
    process: 'Processus',
    services: 'Services',
    whyUs: 'Pourquoi Nous',
    growthRoi: 'ROI Croissance',
    faq: 'FAQ',
    availableStatus: 'Disponible pour Projets',
    growthAgency: 'Agence Croissance',
    roiCalculator: 'Calculateur ROI',
    chatWhatsapp: 'WhatsApp',
    bookCall: 'Réserver un Appel',
    langSelect: 'Choisir la langue'
  },
  DE: {
    portfolio: 'Portfolio',
    process: 'Prozess',
    services: 'Leistungen',
    whyUs: 'Über Uns',
    growthRoi: 'Wachstums-ROI',
    faq: 'FAQ',
    availableStatus: 'Verfügbar für neue Projekte',
    growthAgency: 'Wachstumsagentur',
    roiCalculator: 'ROI-Rechner',
    chatWhatsapp: 'WhatsApp',
    bookCall: 'Termin Buchen',
    langSelect: 'Sprache wählen'
  }
};

export const Navbar: React.FC<NavbarProps> = ({ 
  currentRegion, 
  onRegionChange, 
  onOpenCalculator,
  onOpenCalendar,
  currentLanguage = 'EN',
  onLanguageChange
}) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [langDropdownOpen, setLangDropdownOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  const t = NAV_TRANSLATIONS[currentLanguage] || NAV_TRANSLATIONS.EN;
  const currentLangObj = LANGUAGES.find(l => l.code === currentLanguage) || LANGUAGES[0];

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close dropdown on outside click
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setLangDropdownOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const handleSelectLang = (code: AppLanguage) => {
    if (onLanguageChange) {
      onLanguageChange(code);
    }
    setLangDropdownOpen(false);
  };

  const navLinks = [
    { name: t.portfolio, href: '#portfolio' },
    { name: t.process, href: '#process' },
    { name: t.services, href: '#services' },
    { name: t.whyUs, href: '#why-choose-us' },
    { name: t.growthRoi, href: '#business-growth' },
    { name: t.faq, href: '#faq' },
    { name: 'Free Audit', href: '/free-website-audit' },
  ];

  return (
    <header
      id="main-navbar"
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-white/90 backdrop-blur-2xl border-b border-slate-200/80 py-3 shadow-md'
          : 'bg-transparent py-5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          
          {/* Logo & Live Status Indicator */}
          <a href="#" className="flex items-center gap-3 group">
            <div className="relative flex items-center justify-center w-9 h-9 rounded-xl bg-blue-600 shadow-md group-hover:scale-105 transition-transform duration-300 text-white">
              <Sparkles className="w-4.5 h-4.5 text-white group-hover:rotate-12 transition-transform duration-300" />
            </div>
            <div className="flex flex-col">
              <div className="flex items-center gap-2">
                <span className="text-lg sm:text-xl font-black tracking-tight text-slate-900 font-sans uppercase">
                  WEBTRON<span className="text-blue-600"> SOLUTION</span>
                </span>
                <span className="px-2 py-0.5 text-[10px] font-extrabold uppercase tracking-wider text-blue-700 bg-blue-50 border border-blue-200 rounded-full">
                  {t.growthAgency}
                </span>
              </div>
              <div className="flex items-center gap-1.5 text-[11px] text-emerald-700 font-bold">
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-600"></span>
                </span>
                <span>{t.availableStatus}</span>
              </div>
            </div>
          </a>

          {/* Desktop Nav Links */}
          <nav className="hidden lg:flex items-center gap-1 bg-slate-100/80 border border-slate-200/80 rounded-full px-5 py-2 backdrop-blur-xl">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="text-sm font-bold text-slate-600 hover:text-blue-600 px-3 py-1.5 rounded-full hover:bg-white transition-all duration-200"
              >
                {link.name}
              </a>
            ))}
          </nav>

          {/* Right Controls: Language Toggle, Quick Estimator & WhatsApp CTA */}
          <div className="hidden md:flex items-center gap-2.5">
            
            {/* Language Selector Dropdown */}
            <div className="relative" ref={dropdownRef}>
              <button
                type="button"
                onClick={() => setLangDropdownOpen(!langDropdownOpen)}
                className="px-3 py-1.5 text-xs font-bold text-slate-700 bg-white/90 hover:bg-slate-100 border border-slate-200/90 rounded-full transition-all shadow-xs flex items-center gap-1.5"
                title={t.langSelect}
              >
                <span className="text-sm">{currentLangObj.flag}</span>
                <span className="font-extrabold text-slate-800">{currentLangObj.code}</span>
                <ChevronDown className={`w-3.5 h-3.5 text-slate-500 transition-transform ${langDropdownOpen ? 'rotate-180' : ''}`} />
              </button>

              {langDropdownOpen && (
                <div className="absolute right-0 mt-2 w-48 bg-white border border-slate-200 rounded-2xl shadow-xl py-2 z-50 animate-in fade-in slide-in-from-top-2 duration-150">
                  <div className="px-3 py-1.5 text-[10px] font-extrabold text-slate-400 uppercase tracking-wider border-b border-slate-100 mb-1">
                    {t.langSelect}
                  </div>
                  {LANGUAGES.map((lang) => (
                    <button
                      key={lang.code}
                      onClick={() => handleSelectLang(lang.code)}
                      className={`w-full px-3 py-2 text-left text-xs font-bold flex items-center justify-between transition-colors ${
                        currentLanguage === lang.code
                          ? 'bg-blue-50 text-blue-700'
                          : 'text-slate-700 hover:bg-slate-50'
                      }`}
                    >
                      <div className="flex items-center gap-2">
                        <span className="text-base">{lang.flag}</span>
                        <span>{lang.label}</span>
                        <span className="text-[10px] text-slate-400 font-normal">({lang.country})</span>
                      </div>
                      {currentLanguage === lang.code && <Check className="w-3.5 h-3.5 text-blue-600" />}
                    </button>
                  ))}
                </div>
              )}
            </div>

            {/* Quick Estimator Trigger */}
            <button
              type="button"
              onClick={onOpenCalculator}
              className="px-3.5 py-2 text-xs font-bold text-slate-700 bg-slate-100 hover:bg-slate-200 border border-slate-200 rounded-full transition-all flex items-center gap-1.5"
            >
              <span>{t.roiCalculator}</span>
            </button>

            {/* DIRECT CALENDAR CTA */}
            {onOpenCalendar && (
              <button
                type="button"
                onClick={onOpenCalendar}
                id="nav-cta-calendar"
                className="px-4 py-2.5 bg-slate-900 hover:bg-slate-800 text-white text-xs font-bold rounded-full transition-all duration-300 shadow-md shadow-slate-900/10 flex items-center gap-2 group"
              >
                <Calendar className="w-3.5 h-3.5 text-blue-400" />
                <span>{t.bookCall}</span>
              </button>
            )}

            {/* PRIMARY CTA: Chat on WhatsApp */}
            <a
              href={WHATSAPP_LINK}
              target="_blank"
              rel="noopener noreferrer"
              id="nav-cta-whatsapp"
              className="px-4 py-2.5 bg-blue-600 hover:bg-blue-700 text-white text-xs font-bold rounded-full transition-all duration-300 shadow-md shadow-blue-500/20 flex items-center gap-2 group"
            >
              <MessageSquare className="w-3.5 h-3.5 fill-current text-white" />
              <span>{t.chatWhatsapp}</span>
              <ArrowUpRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
            </a>
          </div>

          {/* Mobile Menu Button & Quick Language Button */}
          <div className="flex md:hidden items-center gap-1.5">
            {/* Mobile Language Switcher button */}
            <button
              type="button"
              onClick={() => {
                const nextLangIndex = (LANGUAGES.findIndex(l => l.code === currentLanguage) + 1) % LANGUAGES.length;
                handleSelectLang(LANGUAGES[nextLangIndex].code);
              }}
              className="px-2.5 py-1.5 rounded-xl bg-slate-100 border border-slate-200 text-xs font-extrabold text-slate-800 flex items-center gap-1"
              title={t.langSelect}
            >
              <span>{currentLangObj.flag}</span>
              <span>{currentLangObj.code}</span>
            </button>

            {onOpenCalendar && (
              <button
                type="button"
                onClick={onOpenCalendar}
                className="p-2 rounded-lg bg-slate-900 text-blue-400 border border-slate-800 flex items-center justify-center shadow-sm"
                title={t.bookCall}
              >
                <Calendar className="w-4 h-4" />
              </button>
            )}

            <a
              href={WHATSAPP_LINK}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 rounded-lg bg-blue-50 text-blue-600 border border-blue-200 flex items-center justify-center shadow-sm"
              title={t.chatWhatsapp}
            >
              <MessageSquare className="w-4 h-4 fill-current" />
            </a>

            <button
              type="button"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 rounded-xl bg-slate-100 border border-slate-200 text-slate-700 hover:text-slate-900"
              aria-label="Toggle navigation menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>

        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-white/95 border-b border-slate-200 backdrop-blur-2xl px-4 pt-4 pb-6 mt-3 space-y-4 shadow-xl animate-in slide-in-from-top-4 duration-200">
          
          {/* Mobile Language Selector Bar */}
          <div className="p-3 bg-slate-50 border border-slate-200 rounded-xl space-y-2">
            <div className="text-[11px] font-bold text-slate-500 uppercase flex items-center gap-1">
              <Globe className="w-3.5 h-3.5 text-blue-600" />
              <span>{t.langSelect}</span>
            </div>
            <div className="grid grid-cols-4 gap-1.5">
              {LANGUAGES.map((lang) => (
                <button
                  key={lang.code}
                  onClick={() => handleSelectLang(lang.code)}
                  className={`py-1.5 px-2 rounded-lg text-xs font-bold transition-all text-center flex items-center justify-center gap-1 ${
                    currentLanguage === lang.code
                      ? 'bg-blue-600 text-white shadow-xs'
                      : 'bg-white border border-slate-200 text-slate-700 hover:bg-slate-100'
                  }`}
                >
                  <span>{lang.flag}</span>
                  <span>{lang.code}</span>
                </button>
              ))}
            </div>
          </div>

          <div className="grid grid-cols-2 gap-2 pt-1">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="px-3 py-2.5 rounded-lg bg-slate-50 border border-slate-200 text-sm font-bold text-slate-700 hover:text-blue-600 hover:bg-slate-100 transition-colors"
              >
                {link.name}
              </a>
            ))}
          </div>

          <div className="pt-2 flex flex-col gap-2.5">
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenCalculator();
              }}
              className="w-full py-2.5 text-xs font-bold text-blue-700 bg-blue-50 border border-blue-200 rounded-xl text-center"
            >
              📊 {t.roiCalculator}
            </button>

            <a
              href={WHATSAPP_LINK}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full py-3 px-4 rounded-xl bg-blue-600 text-white font-bold text-sm text-center flex items-center justify-center gap-2 shadow-md shadow-blue-500/20"
            >
              <MessageSquare className="w-4 h-4 fill-current" />
              <span>{t.chatWhatsapp} ({WHATSAPP_NUMBER})</span>
              <ArrowUpRight className="w-4 h-4" />
            </a>
          </div>

        </div>
      )}
    </header>
  );
};

