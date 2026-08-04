import React, { useState, useEffect } from 'react';
import { motion } from 'motion/react';
import { MessageSquare, ArrowUpRight, CheckCircle2, Star, Zap, ShieldCheck, TrendingUp, Sparkles, MapPin, Eye, MousePointer } from 'lucide-react';
import { WHATSAPP_LINK, WHATSAPP_NUMBER, FEATURED_PROJECTS } from '../data/agencyData';
import { TargetRegion, AppLanguage } from '../types';
import { translations } from '../data/translations';

interface HeroSectionProps {
  currentRegion: TargetRegion;
  onOpenCalculator: () => void;
  currentLanguage?: AppLanguage;
}

export const HeroSection: React.FC<HeroSectionProps> = ({ currentRegion, onOpenCalculator, currentLanguage = 'EN' }) => {
  const t = translations[currentLanguage]?.hero || translations.EN.hero;
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [activeProjectIdx, setActiveProjectIdx] = useState<number>(1); // Default to index 1 (VK Constructions) or index 2 (Max Pet Corner)

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({
        x: (e.clientX / window.innerWidth - 0.5) * 20,
        y: (e.clientY / window.innerHeight - 0.5) * 20,
      });
    };
    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  const currencySymbol = currentRegion === 'US' ? '$' : currentRegion === 'UK' ? '£' : '€';

  // Selected featured project (VK Constructions or Max Pet Corner instead of Terra Nova)
  const currentProject = FEATURED_PROJECTS[activeProjectIdx];

  return (
    <section className="relative min-h-screen pt-32 pb-20 md:pt-40 md:pb-32 overflow-hidden flex items-center bg-gradient-to-b from-slate-50 via-white to-blue-50/40 text-slate-900 border-b border-slate-200/80">
      
      {/* Background Graphic & Light Mesh with Subtle Glow Orbs */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        
        {/* Soft Radial Ambient Lights */}
        <div
          className="absolute top-[-10%] left-[-5%] w-[550px] h-[550px] bg-blue-400/15 rounded-full blur-[140px] pointer-events-none transition-transform duration-700 ease-out"
          style={{ transform: `translate(${mousePosition.x * 1.5}px, ${mousePosition.y * 1.5}px)` }}
        ></div>
        <div
          className="absolute bottom-[-10%] right-[-5%] w-[650px] h-[650px] bg-indigo-400/15 rounded-full blur-[160px] pointer-events-none transition-transform duration-700 ease-out"
          style={{ transform: `translate(${-mousePosition.x * 1.2}px, ${-mousePosition.y * 1.2}px)` }}
        ></div>

        {/* Crisp Grid Pattern */}
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#00000008_1px,transparent_1px),linear-gradient(to_bottom,#00000008_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_40%,#000_70%,transparent_100%)]"></div>
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Main Hero Copy (Left Columns 1-7) */}
          <div className="lg:col-span-7 space-y-8 text-center lg:text-left">
            
            {/* Top Eyebrow Tag - Clean Light Pill */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="inline-flex items-center gap-2 px-3 sm:px-4 py-1.5 sm:py-2 rounded-full bg-white border border-slate-200/80 text-xs font-semibold text-slate-700 shadow-sm backdrop-blur-xl max-w-full text-center"
            >
              <span className="text-slate-900 font-extrabold text-[11px] sm:text-xs">{t.topBadge}</span>
            </motion.div>

            {/* H1 Headline */}
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-slate-900 leading-[1.08] font-sans"
            >
              {t.headlinePart1}{" "}
              <br className="hidden sm:inline" />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 via-indigo-600 to-violet-600">
                {t.headlineHighlight}
              </span>
            </motion.h1>

            {/* Subheadline */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-lg sm:text-xl text-slate-600 font-normal leading-relaxed max-w-2xl mx-auto lg:mx-0"
            >
              {t.subtitle}
            </motion.p>

            {/* Premium Service Badges Row (Below paragraph, above CTAs) */}
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.25 }}
              className="flex flex-wrap items-center justify-center lg:justify-start gap-2.5 text-xs font-bold text-slate-800"
            >
              <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-blue-50/90 border border-blue-200/80 text-blue-900 shadow-2xs">
                <CheckCircle2 className="w-3.5 h-3.5 text-blue-600 shrink-0" />
                <span>{t.badges.web}</span>
              </span>
              <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-blue-50/90 border border-blue-200/80 text-blue-900 shadow-2xs">
                <CheckCircle2 className="w-3.5 h-3.5 text-blue-600 shrink-0" />
                <span>{t.badges.apps}</span>
              </span>
              <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-blue-50/90 border border-blue-200/80 text-blue-900 shadow-2xs">
                <CheckCircle2 className="w-3.5 h-3.5 text-blue-600 shrink-0" />
                <span>{t.badges.seo}</span>
              </span>
              <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-blue-50/90 border border-blue-200/80 text-blue-900 shadow-2xs">
                <CheckCircle2 className="w-3.5 h-3.5 text-blue-600 shrink-0" />
                <span>{t.badges.ppc}</span>
              </span>
              <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-blue-50/90 border border-blue-200/80 text-blue-900 shadow-2xs">
                <CheckCircle2 className="w-3.5 h-3.5 text-blue-600 shrink-0" />
                <span>{t.badges.gbp}</span>
              </span>
              <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-blue-50/90 border border-blue-200/80 text-blue-900 shadow-2xs">
                <CheckCircle2 className="w-3.5 h-3.5 text-blue-600 shrink-0" />
                <span>{t.badges.smm}</span>
              </span>
            </motion.div>

            {/* CTAs Group */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4 pt-2"
            >
              {/* PRIMARY CTA: Chat on WhatsApp */}
              <a
                href={WHATSAPP_LINK}
                target="_blank"
                rel="noopener noreferrer"
                id="hero-primary-cta-whatsapp"
                className="w-full sm:w-auto group relative px-8 py-4 bg-blue-600 hover:bg-blue-700 text-white rounded-xl overflow-hidden shadow-lg shadow-blue-500/20 flex items-center justify-center gap-3 font-extrabold text-base hover:scale-[1.02] active:scale-95 transition-all"
              >
                <MessageSquare className="w-5 h-5 fill-current text-white relative z-10" />
                <span className="relative z-10 text-white flex items-center gap-2">
                  {t.ctaWhatsapp}
                  <ArrowUpRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </span>
              </a>

              {/* SECONDARY CTA: Explore Our Work */}
              <a
                href="#portfolio"
                className="w-full sm:w-auto px-8 py-4 bg-white border border-slate-200/90 hover:border-slate-300 text-slate-800 rounded-xl font-bold hover:bg-slate-50 transition-all flex items-center justify-center gap-2 shadow-sm"
              >
                <Eye className="w-4 h-4 text-blue-600" />
                <span>{t.ctaWork}</span>
              </a>

              {/* Free Website & Marketing Audit button */}
              <button
                type="button"
                onClick={onOpenCalculator}
                className="text-xs text-blue-600 hover:text-blue-800 underline underline-offset-4 font-bold transition-colors py-2"
              >
                {t.ctaAudit}
              </button>
            </motion.div>

            {/* Trust Badges Bar */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="pt-6 border-t border-slate-200/80 grid grid-cols-2 sm:grid-cols-4 gap-4 text-left"
            >
              <div className="flex items-center gap-2">
                <div className="p-2 rounded-xl bg-blue-50 border border-blue-200/60 text-blue-600">
                  <Star className="w-4 h-4 fill-blue-600" />
                </div>
                <div>
                  <div className="text-xs font-bold text-slate-900">4.9/5 Rating</div>
                  <div className="text-[10px] text-slate-500 font-medium">Clutch 5.0 ★</div>
                </div>
              </div>

              <div className="flex items-center gap-2">
                <div className="p-2 rounded-xl bg-emerald-50 border border-emerald-200/60 text-emerald-600">
                  <CheckCircle2 className="w-4 h-4" />
                </div>
                <div>
                  <div className="text-xs font-bold text-slate-900">Top Rated 2026</div>
                  <div className="text-[10px] text-slate-500 font-medium">Awwwards Nominee</div>
                </div>
              </div>

              <div className="flex items-center gap-2">
                <div className="p-2 rounded-xl bg-cyan-50 border border-cyan-200/60 text-cyan-600">
                  <Zap className="w-4 h-4" />
                </div>
                <div>
                  <div className="text-xs font-bold text-slate-900">Sub-Second Speed</div>
                  <div className="text-[10px] text-slate-500 font-medium">Google Web Vitals</div>
                </div>
              </div>

              <div className="flex items-center gap-2">
                <div className="p-2 rounded-xl bg-purple-50 border border-purple-200/60 text-purple-600">
                  <ShieldCheck className="w-4 h-4" />
                </div>
                <div>
                  <div className="text-xs font-bold text-slate-900">Google Partner</div>
                  <div className="text-[10px] text-slate-500 font-medium">Certified SEO Team</div>
                </div>
              </div>
            </motion.div>

          </div>

          {/* Featured Project Showcase (Right Columns 8-12) */}
          <div className="lg:col-span-5 relative">
            <div className="relative mx-auto max-w-md lg:max-w-none space-y-4">
              
              {/* Metric Card */}
              <motion.div
                initial={{ opacity: 0, scale: 0.95, y: 20 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                transition={{ duration: 0.7, delay: 0.2 }}
                className="p-6 rounded-3xl bg-white border border-slate-200/80 shadow-xl hover:border-blue-500/30 transition-all"
              >
                <div className="text-4xl font-black mb-1 font-mono text-slate-900">$12.5M+</div>
                <div className="text-xs uppercase tracking-widest text-slate-500 font-bold mb-4">Client Revenue Generated</div>
                <div className="flex gap-1">
                  <div className="h-1.5 flex-1 bg-slate-100 rounded-full overflow-hidden">
                    <div className="h-full w-[88%] bg-gradient-to-r from-blue-600 to-indigo-600"></div>
                  </div>
                  <div className="h-1.5 flex-1 bg-slate-100 rounded-full"></div>
                  <div className="h-1.5 flex-1 bg-slate-100 rounded-full"></div>
                </div>
              </motion.div>

              {/* Central Featured Client Showcase Card (VK Constructions / Max Pet Corner) */}
              <motion.div
                initial={{ opacity: 0, scale: 0.9, y: 20 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                transition={{ duration: 0.7, delay: 0.3 }}
                className="p-6 rounded-3xl bg-white border border-slate-200/90 shadow-xl relative group overflow-hidden hover:border-blue-500/40 transition-all"
              >
                {/* Client Selector Toggle on Top */}
                <div className="flex justify-between items-center mb-4">
                  <div>
                    <h3 className="text-xs font-extrabold uppercase tracking-wider text-blue-600">Featured Client Showcase</h3>
                    <p className="text-xl font-extrabold text-slate-900">{currentProject.title}</p>
                  </div>

                  {/* Switcher between other clients (VK Constructions & Max Pet Corner) */}
                  <div className="flex gap-1 bg-slate-100 p-1 rounded-xl border border-slate-200">
                    <button
                      type="button"
                      onClick={() => setActiveProjectIdx(1)}
                      className={`px-2 py-1 rounded-lg text-[10px] font-bold transition-all ${
                        activeProjectIdx === 1 ? 'bg-white text-blue-600 shadow-sm' : 'text-slate-500 hover:text-slate-900'
                      }`}
                    >
                      VK Const.
                    </button>
                    <button
                      type="button"
                      onClick={() => setActiveProjectIdx(2)}
                      className={`px-2 py-1 rounded-lg text-[10px] font-bold transition-all ${
                        activeProjectIdx === 2 ? 'bg-white text-blue-600 shadow-sm' : 'text-slate-500 hover:text-slate-900'
                      }`}
                    >
                      Max Pet
                    </button>
                  </div>
                </div>

                {/* Project Image Banner */}
                <div className="relative aspect-video rounded-2xl overflow-hidden border border-slate-200/80 group-hover:scale-[1.02] transition-transform duration-500">
                  <img
                    src={currentProject.image}
                    alt={currentProject.title}
                    className="w-full h-full object-cover"
                    referrerPolicy="no-referrer"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 via-transparent to-transparent"></div>
                  <div className="absolute bottom-3 left-3 right-3 flex items-center justify-between text-xs font-bold text-white">
                    <span className="bg-blue-600/90 px-3 py-1 rounded-full backdrop-blur-md flex items-center gap-1.5 shadow">
                      <TrendingUp className="w-3.5 h-3.5 text-white" /> {currentProject.results[0].value} {currentProject.results[0].label}
                    </span>
                    <span className="bg-slate-900/90 px-2.5 py-1 rounded-full border border-white/20 font-mono text-[11px]">
                      {currentProject.location}
                    </span>
                  </div>
                </div>

                <p className="mt-3 text-xs text-slate-600 line-clamp-2">
                  {currentProject.overview}
                </p>

                <div className="mt-4 flex items-center justify-between pt-3 border-t border-slate-100">
                  <div className="flex gap-1.5 flex-wrap">
                    <span className="text-[10px] font-semibold border border-slate-200 bg-slate-50 px-2.5 py-1 rounded-lg text-slate-700">
                      {currentProject.techStack[0]}
                    </span>
                    <span className="text-[10px] font-semibold border border-blue-200 bg-blue-50 px-2.5 py-1 rounded-lg text-blue-700">
                      {currentProject.servicesProvided[0]}
                    </span>
                  </div>
                  <a
                    href={currentProject.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-xs font-extrabold text-blue-600 hover:text-blue-800 flex items-center gap-1"
                  >
                    Live Demo <ArrowUpRight className="w-3.5 h-3.5" />
                  </a>
                </div>
              </motion.div>

            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
