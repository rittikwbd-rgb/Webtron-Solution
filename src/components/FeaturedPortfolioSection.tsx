import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { ExternalLink, Sparkles, CheckCircle2, Eye, X, MessageSquare, ArrowUpRight, Layers } from 'lucide-react';
import { FEATURED_PROJECTS, WHATSAPP_LINK } from '../data/agencyData';
import { Project, AppLanguage } from '../types';
import { translations } from '../data/translations';

interface FeaturedPortfolioSectionProps {
  currentLanguage?: AppLanguage;
}

export const FeaturedPortfolioSection: React.FC<FeaturedPortfolioSectionProps> = ({ currentLanguage = 'EN' }) => {
  const t = translations[currentLanguage]?.portfolio || translations.EN.portfolio;
  const [activePreviewProject, setActivePreviewProject] = useState<Project | null>(null);

  return (
    <section id="portfolio" className="py-24 bg-white text-slate-900 relative overflow-hidden border-t border-slate-200/80">
      
      {/* Background ambient light */}
      <div className="absolute top-1/2 left-0 w-[500px] h-[500px] bg-blue-50/60 rounded-full blur-[140px] pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-blue-50 border border-blue-200 text-xs font-bold text-blue-700 shadow-sm">
            <Layers className="w-3.5 h-3.5 text-blue-600" />
            <span>{t.badge}</span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-slate-900">
            {t.title}
          </h2>

          <p className="text-slate-600 text-base sm:text-lg leading-relaxed font-medium">
            {t.subtitle}
          </p>
        </div>

        {/* Portfolio Cards Grid */}
        <div className="space-y-12">
          {FEATURED_PROJECTS.map((project, idx) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: idx * 0.1 }}
              className="rounded-3xl bg-slate-50 border border-slate-200/80 hover:border-blue-500/40 p-6 md:p-8 transition-all duration-300 shadow-sm hover:shadow-xl group"
            >
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
                
                {/* Left: Project Image Preview Frame */}
                <div className="lg:col-span-6 relative overflow-hidden rounded-2xl border border-slate-200 bg-slate-900 group-hover:border-blue-500/40 transition-colors">
                  <img
                    src={project.image}
                    alt={`${project.title} Website Showcase`}
                    className="w-full h-72 sm:h-80 object-cover object-top group-hover:scale-105 transition-transform duration-700"
                    referrerPolicy="no-referrer"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 via-transparent to-transparent"></div>

                  {/* Top Bar Badges */}
                  <div className="absolute top-4 left-4 flex items-center gap-2">
                    <span className="px-3 py-1 rounded-full bg-blue-600 text-white text-[11px] font-extrabold shadow-sm">
                      {project.industry}
                    </span>
                    <span className="px-3 py-1 rounded-full bg-slate-900/80 text-white text-[11px] font-bold backdrop-blur-md">
                      📍 {project.location}
                    </span>
                  </div>

                  {/* Bottom Preview Overlay Trigger */}
                  <div className="absolute bottom-4 left-4 right-4 flex items-center justify-between">
                    <span className="text-xs font-mono text-slate-200 bg-slate-900/90 px-2.5 py-1 rounded-md border border-white/20 backdrop-blur-md font-bold">
                      {project.url.replace('https://', '')}
                    </span>

                    <button
                      type="button"
                      onClick={() => setActivePreviewProject(project)}
                      className="px-3.5 py-1.5 rounded-xl bg-blue-600 hover:bg-blue-700 text-white text-xs font-bold transition-all flex items-center gap-1.5 shadow-md backdrop-blur-md"
                    >
                      <Eye className="w-3.5 h-3.5" />
                      <span>Inspect Live</span>
                    </button>
                  </div>
                </div>

                {/* Right: Project Overview & Specs */}
                <div className="lg:col-span-6 space-y-6">
                  
                  <div>
                    <h3 className="text-2xl sm:text-3xl font-extrabold text-slate-900 group-hover:text-blue-600 transition-colors">
                      {project.title}
                    </h3>
                    <p className="text-xs text-slate-500 font-mono font-bold mt-1">
                      Target Market: {project.location}
                    </p>
                  </div>

                  <p className="text-sm text-slate-600 leading-relaxed font-medium">
                    {project.overview}
                  </p>

                  {/* Key Results Grid */}
                  <div className="grid grid-cols-3 gap-3 p-4 rounded-2xl bg-white border border-slate-200 shadow-sm">
                    {project.results.map((res, rIdx) => (
                      <div key={rIdx} className="space-y-0.5">
                        <div className="text-lg sm:text-xl font-black text-emerald-600 font-mono">
                          {res.value}
                        </div>
                        <div className="text-[11px] font-bold text-slate-900">{res.label}</div>
                        <div className="text-[10px] text-slate-500 font-medium">{res.change}</div>
                      </div>
                    ))}
                  </div>

                  {/* Services Provided Pills */}
                  <div>
                    <span className="text-[11px] text-slate-500 font-bold block mb-2">Services Provided:</span>
                    <div className="flex flex-wrap gap-1.5">
                      {project.servicesProvided.map((serv, sIdx) => (
                        <span key={sIdx} className="text-xs px-2.5 py-1 rounded-md bg-blue-50 border border-blue-200 text-blue-700 font-bold">
                          {serv}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Tech Stack Pills */}
                  <div>
                    <span className="text-[11px] text-slate-500 font-bold block mb-2">Technology Stack:</span>
                    <div className="flex flex-wrap gap-1.5">
                      {project.techStack.map((tech, tIdx) => (
                        <span key={tIdx} className="text-[11px] px-2 py-0.5 rounded bg-white border border-slate-200 text-slate-700 font-mono font-bold">
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Action Buttons */}
                  <div className="pt-2 flex flex-wrap items-center gap-4">
                    
                    {/* PRIMARY EXTERNAL LINK - OPENS IN NEW TAB */}
                    <a
                      href={project.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="px-6 py-3 rounded-xl bg-blue-600 hover:bg-blue-700 text-white font-bold text-xs transition-all flex items-center gap-2 shadow-md shadow-blue-500/20 hover:scale-105"
                    >
                      <span>Visit Live Website</span>
                      <ExternalLink className="w-3.5 h-3.5" />
                    </a>

                    <a
                      href={`${WHATSAPP_LINK}?text=Hi!%20I%20saw%20your%20portfolio%20project%20${encodeURIComponent(project.title)}.%20I%20want%20a%20similar%20website%20for%20my%20business.`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="px-5 py-3 rounded-xl bg-white hover:bg-slate-100 border border-slate-200 text-slate-800 font-bold text-xs transition-all flex items-center gap-1.5 shadow-sm"
                    >
                      <MessageSquare className="w-3.5 h-3.5 fill-current text-emerald-600" />
                      <span>Build This For My Business</span>
                    </a>

                  </div>

                </div>

              </div>
            </motion.div>
          ))}
        </div>

      </div>

      {/* Interactive Live Inspection Modal */}
      <AnimatePresence>
        {activePreviewProject && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/60 backdrop-blur-xl">
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              className="relative w-full max-w-5xl bg-white border border-slate-200 rounded-3xl p-6 md:p-8 shadow-2xl text-slate-900 overflow-hidden max-h-[90vh] flex flex-col"
            >
              <div className="flex items-center justify-between pb-4 border-b border-slate-200">
                <div className="flex items-center gap-3">
                  <span className="w-3 h-3 rounded-full bg-rose-500"></span>
                  <span className="w-3 h-3 rounded-full bg-amber-500"></span>
                  <span className="w-3 h-3 rounded-full bg-emerald-500"></span>
                  <h3 className="text-lg font-bold text-slate-900 ml-2">{activePreviewProject.title} — Live Inspect</h3>
                </div>

                <div className="flex items-center gap-3">
                  <a
                    href={activePreviewProject.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-3.5 py-1.5 rounded-xl bg-blue-600 hover:bg-blue-700 text-white text-xs font-bold flex items-center gap-1.5"
                  >
                    <span>Open Fullscreen Site</span>
                    <ExternalLink className="w-3.5 h-3.5" />
                  </a>
                  <button
                    onClick={() => setActivePreviewProject(null)}
                    className="p-2 rounded-full bg-slate-100 hover:bg-slate-200 text-slate-500 hover:text-slate-900"
                  >
                    <X className="w-5 h-5" />
                  </button>
                </div>
              </div>

              {/* Embedded Live Frame preview with fallback banner */}
              <div className="my-4 flex-1 min-h-[400px] relative rounded-2xl overflow-hidden border border-slate-200 bg-slate-950">
                <iframe
                  src={activePreviewProject.url}
                  title={`${activePreviewProject.title} Live Preview`}
                  className="w-full h-full min-h-[450px] border-0"
                  loading="lazy"
                />
              </div>

              <div className="pt-3 border-t border-slate-200 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs">
                <span className="text-slate-500">
                  Live URL: <a href={activePreviewProject.url} target="_blank" rel="noopener noreferrer" className="text-blue-600 underline font-mono font-bold">{activePreviewProject.url}</a>
                </span>

                <a
                  href={`${WHATSAPP_LINK}?text=Hi!%20I%20am%20interested%20in%20a%20website%20like%20${encodeURIComponent(activePreviewProject.title)}.`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-5 py-2.5 rounded-xl bg-blue-600 hover:bg-blue-700 text-white font-bold flex items-center gap-2 shadow-md"
                >
                  <MessageSquare className="w-4 h-4 fill-current" />
                  <span>Chat on WhatsApp</span>
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
