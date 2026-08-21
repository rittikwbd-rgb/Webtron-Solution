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
                    loading="lazy"
                    decoding="async"
                    referrerPolicy="no-referrer"
                    onError={(e) => {
                      const target = e.currentTarget;
                      target.onerror = null;
                      if (project.id === 'terra-nova-medical') {
                        target.src = 'https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?auto=format&fit=crop&w=1200&q=80';
                      } else if (project.id === 'vvk-constructions' || project.id === 'vk-constructions') {
                        target.src = 'https://images.unsplash.com/photo-1541888946425-d0fbb186a5b3?auto=format&fit=crop&w=1200&q=80';
                      } else {
                        target.src = 'https://images.unsplash.com/photo-1583511655857-d19b40a7a54e?auto=format&fit=crop&w=1200&q=80';
                      }
                    }}
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
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/70 backdrop-blur-xl">
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              className="relative w-full max-w-5xl bg-white border border-slate-200 rounded-3xl p-5 sm:p-6 md:p-8 shadow-2xl text-slate-900 overflow-hidden max-h-[92vh] flex flex-col"
            >
              {/* Modal Header Bar */}
              <div className="flex flex-wrap items-center justify-between pb-4 border-b border-slate-200 gap-3">
                <div className="flex items-center gap-3">
                  <span className="w-3 h-3 rounded-full bg-rose-500"></span>
                  <span className="w-3 h-3 rounded-full bg-amber-500"></span>
                  <span className="w-3 h-3 rounded-full bg-emerald-500"></span>
                  <h3 className="text-base sm:text-lg font-bold text-slate-900 ml-1">
                    {activePreviewProject.title} — Showcase Preview
                  </h3>
                </div>

                <div className="flex items-center gap-3">
                  <a
                    href={activePreviewProject.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-4 py-2 rounded-xl bg-blue-600 hover:bg-blue-700 text-white text-xs font-bold flex items-center gap-1.5 shadow-sm transition-all"
                  >
                    <span>Visit Live Website</span>
                    <ExternalLink className="w-3.5 h-3.5" />
                  </a>
                  <button
                    onClick={() => setActivePreviewProject(null)}
                    className="p-2 rounded-full bg-slate-100 hover:bg-slate-200 text-slate-500 hover:text-slate-900 transition-colors"
                  >
                    <X className="w-5 h-5" />
                  </button>
                </div>
              </div>

              {/* Browser Mockup Chrome Frame */}
              <div className="my-4 flex-1 min-h-[380px] sm:min-h-[460px] relative rounded-2xl overflow-hidden border border-slate-200 bg-slate-900 flex flex-col shadow-inner">
                
                {/* Browser URL Bar */}
                <div className="bg-slate-800/90 px-4 py-2.5 border-b border-slate-700 flex items-center justify-between text-xs text-slate-300 gap-4">
                  <div className="flex items-center gap-2 bg-slate-950 px-3 py-1.5 rounded-lg border border-slate-700/80 w-full max-w-lg font-mono text-[11px]">
                    <span className="text-emerald-400 font-bold">🔒 https://</span>
                    <span className="text-slate-200 font-bold truncate">{activePreviewProject.url.replace('https://', '')}</span>
                  </div>
                  <div className="hidden sm:flex items-center gap-2 text-[11px] font-bold text-slate-400">
                    <span>Target Market: {activePreviewProject.location}</span>
                  </div>
                </div>

                {/* HD Visual Image Showcase */}
                <div className="relative flex-1 overflow-y-auto bg-slate-950 group">
                  <img
                    src={activePreviewProject.image}
                    alt={`${activePreviewProject.title} Full Showcase`}
                    className="w-full h-auto object-cover object-top"
                    loading="eager"
                    decoding="async"
                    referrerPolicy="no-referrer"
                    onError={(e) => {
                      const target = e.currentTarget;
                      target.onerror = null;
                      if (activePreviewProject.id === 'terra-nova-medical') {
                        target.src = 'https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?auto=format&fit=crop&w=1200&q=80';
                      } else if (activePreviewProject.id === 'vvk-constructions' || activePreviewProject.id === 'vk-constructions') {
                        target.src = 'https://images.unsplash.com/photo-1541888946425-d0fbb186a5b3?auto=format&fit=crop&w=1200&q=80';
                      } else {
                        target.src = 'https://images.unsplash.com/photo-1583511655857-d19b40a7a54e?auto=format&fit=crop&w=1200&q=80';
                      }
                    }}
                  />

                  {/* Floating Action Overlay Bar on Image */}
                  <div className="absolute bottom-4 left-4 right-4 p-4 rounded-2xl bg-slate-900/90 border border-slate-700/80 backdrop-blur-md text-white flex flex-col sm:flex-row items-center justify-between gap-3 shadow-2xl">
                    <div className="space-y-0.5 text-center sm:text-left">
                      <div className="text-sm font-bold flex items-center justify-center sm:justify-start gap-2 text-blue-400">
                        <img
                          src="/logo.png"
                          alt="Webtron Solution"
                          className="w-4 h-4 object-contain rounded bg-white p-0.5"
                          width={16}
                          height={16}
                        />
                        <span>Built by Webtron Solution</span>
                      </div>
                      <p className="text-xs text-slate-300">
                        Tech Stack: {activePreviewProject.techStack.join(' • ')}
                      </p>
                    </div>

                    <a
                      href={activePreviewProject.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-full sm:w-auto px-5 py-2.5 rounded-xl bg-blue-600 hover:bg-blue-500 text-white font-extrabold text-xs flex items-center justify-center gap-2 shadow-lg transition-all"
                    >
                      <span>Open Live Site in New Tab</span>
                      <ExternalLink className="w-3.5 h-3.5" />
                    </a>
                  </div>
                </div>

              </div>

              {/* Modal Footer */}
              <div className="pt-2 border-t border-slate-200 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs">
                <span className="text-slate-500 font-medium">
                  Verified Client URL: <a href={activePreviewProject.url} target="_blank" rel="noopener noreferrer" className="text-blue-600 underline font-mono font-bold">{activePreviewProject.url}</a>
                </span>

                <a
                  href={`${WHATSAPP_LINK}?text=Hi!%20I%20am%20interested%20in%20a%20website%20like%20${encodeURIComponent(activePreviewProject.title)}.`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full sm:w-auto px-5 py-2.5 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white font-bold flex items-center justify-center gap-2 shadow-md"
                >
                  <MessageSquare className="w-4 h-4 fill-current" />
                  <span>Request Similar Custom Site</span>
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
