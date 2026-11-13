import { useState } from 'react'
import { motion } from 'framer-motion'
import { projects, type ProjectItem } from '../../data/projects'
import { ProjectModal } from './ProjectModal'
import { ExternalLink, Sparkles, Layers, ArrowUpRight, BarChart2, Eye, Bot, Brain } from 'lucide-react'

export function Projects() {
  const [selectedProject, setSelectedProject] = useState<ProjectItem | null>(null)

  return (
    <section id="projects" className="relative py-24 sm:py-32 overflow-hidden">
      {/* Background radial atmosphere */}
      <div className="absolute top-1/3 -right-20 w-[600px] h-[600px] rounded-full bg-gradient-to-l from-[#D946EF]/15 via-[#8B5CF6]/15 to-transparent blur-[160px] pointer-events-none" />
      <div className="absolute bottom-20 left-10 w-[550px] h-[550px] rounded-full bg-gradient-to-tr from-[#06B6D4]/15 via-[#10B981]/10 to-transparent blur-[160px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#140E26] border border-fuchsia-500/30 text-xs font-mono text-[#D946EF] uppercase tracking-wider mb-4 shadow-[0_0_15px_rgba(217,70,239,0.2)]">
            <Sparkles className="w-3.5 h-3.5 text-[#06B6D4]" />
            <span>FEATURED WORK</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-display font-bold text-[#F8FAFC]">
            INTELLIGENCE IN{' '}
            <span className="text-gradient-aurora">
              ACTION
            </span>
          </h2>
          <p className="mt-3 text-base text-[#C4B5FD]">
            Real projects. Practical engineering. Measurable outcomes.
          </p>
        </div>

        {/* Project Case Studies: Large Editorial Panels */}
        <div className="flex flex-col gap-16">
          {projects.map((project: ProjectItem, index: number) => {
            const isReversed = index % 2 === 1

            return (
              <motion.div
                key={project.id}
                initial={{ opacity: 0, y: 35 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-60px' }}
                transition={{ duration: 0.7 }}
                className="rounded-3xl glass-card p-6 sm:p-8 lg:p-10 border border-purple-500/30 hover:border-cyan-400/50 hover:shadow-[0_0_40px_rgba(6,182,212,0.25)] relative overflow-hidden group bg-[#140E26]/85"
              >
                {/* Background Ambient Lighting Gradient */}
                <div
                  className={`absolute inset-0 bg-gradient-to-br ${project.gradient} opacity-60 group-hover:opacity-90 transition-opacity duration-500 pointer-events-none`}
                />

                <div
                  className={`relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center ${
                    isReversed ? 'lg:flex-row-reverse' : ''
                  }`}
                >
                  {/* Content Column */}
                  <div
                    className={`lg:col-span-7 flex flex-col justify-between ${
                      isReversed ? 'lg:order-2' : 'lg:order-1'
                    }`}
                  >
                    <div>
                      {/* Category & Project Index */}
                      <div className="flex items-center justify-between gap-3 mb-3">
                        <span className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full bg-[#0D081D] text-xs font-mono font-semibold text-[#06B6D4] border border-cyan-500/40 shadow-[0_0_12px_rgba(6,182,212,0.2)]">
                          {project.category}
                        </span>
                        <span className="font-mono text-xs text-[#E879F9] font-bold">
                          0{index + 1} // CASE STUDY
                        </span>
                      </div>

                      {/* Title & Tagline */}
                      <h3 className="text-2xl sm:text-4xl font-display font-bold text-[#F8FAFC] group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-white group-hover:via-[#C4B5FD] group-hover:to-[#67E8F9] transition-all">
                        {project.title}
                      </h3>
                      <p className="mt-2 text-sm text-[#E879F9] font-mono font-medium">
                        {project.tagline}
                      </p>

                      {/* Description */}
                      <p className="mt-4 text-sm sm:text-base text-[#C4B5FD]/90 leading-relaxed">
                        {project.description}
                      </p>

                      {/* Metrics Showcase with Colorful Badges */}
                      {project.metrics && (
                        <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 mt-6 pt-5 border-t border-purple-500/20">
                          {project.metrics.map((m) => (
                            <div key={m.label} className="p-3 rounded-2xl bg-[#0D081D]/90 border border-purple-500/25 hover:border-cyan-400/40 transition-all">
                              <span className="text-[10px] font-mono text-[#A5A0B5] uppercase block font-semibold">
                                {m.label}
                              </span>
                              <span className="text-sm font-display font-bold text-[#F8FAFC] group-hover:text-[#67E8F9] transition-colors">
                                {m.value}
                              </span>
                            </div>
                          ))}
                        </div>
                      )}
                    </div>

                    {/* Bottom Tech Badges & CTAs */}
                    <div className="mt-8 pt-5 border-t border-purple-500/20 flex flex-wrap items-center justify-between gap-4">
                      <div className="flex flex-wrap gap-1.5">
                        {project.technologies.slice(0, 5).map((tech) => (
                          <span
                            key={tech}
                            className="px-2.5 py-1 rounded-xl bg-[#0D081D] text-xs font-mono text-[#C4B5FD] border border-purple-500/30 hover:border-purple-400 hover:text-white transition-colors"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>

                      <div className="flex items-center gap-3">
                        {project.liveUrl && (
                          <a
                            href={project.liveUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center gap-1.5 px-4 py-2 rounded-xl bg-[#0D081D] hover:bg-cyan-950/50 text-xs font-mono font-semibold text-[#06B6D4] border border-cyan-500/40 hover:border-cyan-400 hover:shadow-[0_0_20px_rgba(6,182,212,0.4)] transition-all cursor-pointer"
                          >
                            <span>Live Demo</span>
                            <ExternalLink className="w-3.5 h-3.5" />
                          </a>
                        )}

                        <button
                          onClick={() => setSelectedProject(project)}
                          className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-gradient-to-r from-[#7C3AED] via-[#D946EF] to-[#06B6D4] text-xs font-mono text-[#F8FAFC] font-bold hover:shadow-[0_0_25px_rgba(217,70,239,0.5)] border border-white/20 transition-all hover:scale-105 cursor-pointer"
                        >
                          <span>Explore Case Study</span>
                          <ArrowUpRight className="w-4 h-4" />
                        </button>
                      </div>
                    </div>
                  </div>

                  {/* Visual Interactive Graphic Column */}
                  <div
                    className={`lg:col-span-5 ${
                      isReversed ? 'lg:order-1' : 'lg:order-2'
                    }`}
                  >
                    <div className="relative w-full aspect-[4/3] rounded-3xl bg-[#070510]/90 border border-purple-500/40 p-6 flex flex-col justify-between overflow-hidden shadow-2xl group-hover:border-cyan-400/60 transition-all">
                      {/* Subtle Grid */}
                      <div className="absolute inset-0 cosmic-grid opacity-40" />

                      {/* Top Bar Simulation */}
                      <div className="relative z-10 flex items-center justify-between border-b border-purple-500/25 pb-3">
                        <div className="flex items-center gap-2">
                          <span className="w-3 h-3 rounded-full bg-red-500/80 shadow-[0_0_8px_rgba(239,68,68,0.5)]" />
                          <span className="w-3 h-3 rounded-full bg-amber-500/80 shadow-[0_0_8px_rgba(245,158,11,0.5)]" />
                          <span className="w-3 h-3 rounded-full bg-emerald-500/80 shadow-[0_0_8px_rgba(16,185,129,0.5)]" />
                        </div>
                        <span className="text-[11px] font-mono text-[#C4B5FD] font-semibold">
                          ENGINEERING VIEW // {project.id}
                        </span>
                      </div>

                      {/* Domain Visual Graphic Representation */}
                      <div className="relative z-10 flex-1 flex flex-col items-center justify-center my-4">
                        {project.id === 'ilu-jobs' && (
                          <div className="flex flex-col items-center gap-3">
                            <div className="w-20 h-20 rounded-3xl bg-gradient-to-tr from-purple-900/60 via-fuchsia-900/40 to-cyan-900/60 border border-purple-400/60 flex items-center justify-center shadow-[0_0_35px_rgba(217,70,239,0.5)]">
                              <Brain className="w-10 h-10 text-[#06B6D4] animate-pulse" />
                            </div>
                            <div className="text-center">
                              <span className="text-sm font-mono text-[#F8FAFC] font-bold block">
                                Vector Embeddings & LLM
                              </span>
                              <span className="text-xs font-mono text-[#E879F9]">
                                Cosine Similarity ATS Match
                              </span>
                            </div>
                          </div>
                        )}

                        {project.id === 'currency-detection' && (
                          <div className="flex flex-col items-center gap-3">
                            <div className="relative w-44 h-24 rounded-2xl border-2 border-cyan-400/60 bg-[#0D081D] p-3 flex items-center justify-center shadow-[0_0_30px_rgba(6,182,212,0.4)]">
                              <div className="absolute inset-1.5 border border-dashed border-cyan-500/40 rounded-xl" />
                              <Eye className="w-8 h-8 text-[#06B6D4] mb-1" />
                              <div className="absolute -bottom-3 px-3 py-0.5 rounded-full bg-gradient-to-r from-[#7C3AED] to-[#D946EF] text-[10px] font-mono text-white font-bold shadow-lg">
                                91.4% ACCURACY
                              </div>
                            </div>
                            <span className="text-xs font-mono text-[#34D399] mt-2 font-medium">
                              Scikit-learn Feature Classifier
                            </span>
                          </div>
                        )}

                        {project.id === 'healthcare-chatbot' && (
                          <div className="flex flex-col items-center gap-3">
                            <div className="w-20 h-20 rounded-3xl bg-gradient-to-tr from-violet-900/60 via-purple-900/40 to-pink-900/60 border border-violet-400/60 flex items-center justify-center shadow-[0_0_30px_rgba(139,92,246,0.5)]">
                              <Bot className="w-10 h-10 text-[#F43F5E]" />
                            </div>
                            <div className="text-center">
                              <span className="text-sm font-mono text-[#67E8F9] font-bold block">
                                88% Intent Recognition
                              </span>
                              <span className="text-xs font-mono text-[#C4B5FD]">
                                Flask RESTful Microservice
                              </span>
                            </div>
                          </div>
                        )}

                        {project.id === 'sales-analytics' && (
                          <div className="flex flex-col items-center gap-3">
                            <div className="w-20 h-20 rounded-3xl bg-gradient-to-tr from-indigo-900/60 via-cyan-900/40 to-emerald-900/60 border border-emerald-400/60 flex items-center justify-center shadow-[0_0_30px_rgba(16,185,129,0.4)]">
                              <BarChart2 className="w-10 h-10 text-[#34D399]" />
                            </div>
                            <div className="text-center">
                              <span className="text-sm font-mono text-[#FBBF24] font-bold block">
                                10,000+ Records Analyzed
                              </span>
                              <span className="text-xs font-mono text-[#67E8F9]">
                                35% Vectorized Optimization
                              </span>
                            </div>
                          </div>
                        )}
                      </div>

                      {/* Bottom Quick Architecture Step */}
                      <div className="relative z-10 flex items-center justify-between text-xs font-mono text-[#A5A0B5] border-t border-purple-500/25 pt-2.5">
                        <span className="flex items-center gap-1.5 text-[#34D399]">
                          <Layers className="w-3.5 h-3.5" />
                          <span>OOP Modular</span>
                        </span>
                        <span className="text-[#E879F9] font-semibold">Production Tested</span>
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            )
          })}
        </div>
      </div>

      {/* Case Study Full Detail Modal */}
      <ProjectModal
        project={selectedProject}
        onClose={() => setSelectedProject(null)}
      />
    </section>
  )
}
