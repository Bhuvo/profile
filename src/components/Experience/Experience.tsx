import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { experiences, type ExperienceItem } from '../../data/experience'
import { Briefcase, Calendar, MapPin, ChevronDown, Sparkles, CheckCircle2 } from 'lucide-react'

export function Experience() {
  const [expandedId, setExpandedId] = useState<string | null>('skipd')

  const toggleExpand = (id: string) => {
    setExpandedId(expandedId === id ? null : id)
  }

  const nodeColors = ['#8B5CF6', '#06B6D4', '#D946EF', '#10B981']

  return (
    <section id="experience" className="relative py-24 sm:py-32 overflow-hidden bg-[#070510]">
      {/* Ambient background lighting */}
      <div className="absolute top-1/3 left-10 w-[550px] h-[550px] rounded-full bg-gradient-to-r from-[#D946EF]/12 via-[#8B5CF6]/12 to-transparent blur-[160px] pointer-events-none" />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#140E26] border border-purple-500/30 text-xs font-mono text-[#C4B5FD] uppercase tracking-wider mb-4 shadow-[0_0_15px_rgba(139,92,246,0.2)]">
            <Briefcase className="w-3.5 h-3.5 text-[#06B6D4]" />
            <span>CAREER PATHWAY</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-display font-bold text-[#F8FAFC]">
            EVERY EXPERIENCE BUILDS{' '}
            <span className="text-gradient-aurora">
              SOMETHING
            </span>
          </h2>
          <p className="mt-3 text-base text-[#C4B5FD]">
            Learning, engineering, and growing through real-world challenges.
          </p>
        </div>

        {/* Cinematic Vertical Timeline */}
        <div className="relative">
          {/* Vertical Glowing Timeline Bar with Rainbow Gradient */}
          <div className="hidden md:block absolute left-1/2 top-4 bottom-4 -translate-x-1/2 w-[2.5px] bg-gradient-to-b from-[#8B5CF6] via-[#D946EF] via-[#06B6D4] to-[#10B981] shadow-[0_0_15px_rgba(217,70,239,0.5)]" />

          <div className="flex flex-col gap-10">
            {experiences.map((exp: ExperienceItem, idx: number) => {
              const isEven = idx % 2 === 0
              const isExpanded = expandedId === exp.id
              const nodeColor = nodeColors[idx % nodeColors.length]

              return (
                <div
                  key={exp.id}
                  className={`relative flex flex-col md:flex-row items-center ${
                    isEven ? 'md:flex-row-reverse' : ''
                  }`}
                >
                  {/* Timeline Center Node with Colorful Glow */}
                  <div
                    className="hidden md:flex absolute left-1/2 top-8 -translate-x-1/2 w-8 h-8 rounded-full bg-[#070510] border-2 items-center justify-center z-20 shadow-lg"
                    style={{
                      borderColor: nodeColor,
                      boxShadow: `0 0 15px ${nodeColor}`,
                    }}
                  >
                    <div
                      className="w-2.5 h-2.5 rounded-full animate-ping"
                      style={{ backgroundColor: nodeColor }}
                    />
                  </div>

                  {/* Spacer for the other column */}
                  <div className="hidden md:block w-1/2" />

                  {/* Experience Card */}
                  <motion.div
                    initial={{ opacity: 0, x: isEven ? 30 : -30 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true, margin: '-50px' }}
                    transition={{ duration: 0.6 }}
                    className={`w-full md:w-1/2 ${isEven ? 'md:pl-10' : 'md:pr-10'}`}
                  >
                    <div
                      onClick={() => toggleExpand(exp.id)}
                      className={`cursor-pointer rounded-3xl glass-card p-6 sm:p-7 border transition-all ${
                        exp.isHighlighted
                          ? 'border-purple-400/60 bg-[#140E26]/95 shadow-[0_0_35px_rgba(139,92,246,0.3)] hover:border-cyan-400/70'
                          : 'border-purple-500/25 bg-[#140E26]/75 hover:border-purple-400/50'
                      }`}
                    >
                      {/* Top Badges */}
                      <div className="flex flex-wrap items-center justify-between gap-2 mb-3">
                        <span className="inline-flex items-center gap-1.5 text-xs font-mono font-semibold text-[#06B6D4]">
                          <Calendar className="w-3.5 h-3.5" />
                          <span>{exp.duration}</span>
                        </span>
                        {exp.highlightBadge && (
                          <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-gradient-to-r from-purple-900/60 to-fuchsia-900/60 border border-fuchsia-400/50 text-[11px] font-mono font-bold text-white shadow-[0_0_12px_rgba(217,70,239,0.3)]">
                            <Sparkles className="w-3 h-3 text-[#67E8F9]" />
                            <span>{exp.highlightBadge}</span>
                          </span>
                        )}
                        {exp.transferableFocus && (
                          <span className="px-3 py-0.5 rounded-full bg-[#0D081D] border border-purple-500/30 text-[11px] font-mono text-[#C4B5FD]">
                            {exp.transferableFocus}
                          </span>
                        )}
                      </div>

                      {/* Role & Company */}
                      <h3 className="text-xl sm:text-2xl font-display font-bold text-[#F8FAFC]">
                        {exp.role}
                      </h3>
                      <div className="flex items-center gap-2 mt-1.5 text-sm text-[#E879F9] font-medium">
                        <span>{exp.company}</span>
                        <span>•</span>
                        <span className="flex items-center gap-1 text-xs text-[#A5A0B5]">
                          <MapPin className="w-3 h-3" />
                          {exp.location}
                        </span>
                      </div>

                      {/* Expandable Responsibility Bullets */}
                      <AnimatePresence>
                        {isExpanded && (
                          <motion.div
                            initial={{ opacity: 0, height: 0 }}
                            animate={{ opacity: 1, height: 'auto' }}
                            exit={{ opacity: 0, height: 0 }}
                            transition={{ duration: 0.3 }}
                            className="overflow-hidden"
                          >
                            <ul className="mt-5 pt-4 border-t border-purple-500/20 flex flex-col gap-3">
                              {exp.description.map((bullet, bIdx) => (
                                <li
                                  key={bIdx}
                                  className="flex items-start gap-2.5 text-xs sm:text-sm text-[#C4B5FD]/90 leading-relaxed"
                                >
                                  <CheckCircle2 className="w-4 h-4 text-[#06B6D4] shrink-0 mt-0.5" />
                                  <span>{bullet}</span>
                                </li>
                              ))}
                            </ul>
                          </motion.div>
                        )}
                      </AnimatePresence>

                      {/* Technologies Chips */}
                      <div className="mt-5 pt-3.5 border-t border-purple-500/15 flex flex-wrap items-center justify-between gap-2">
                        <div className="flex flex-wrap gap-1.5">
                          {exp.technologies.slice(0, 4).map((tech) => (
                            <span
                              key={tech}
                              className="px-2.5 py-0.5 rounded-lg bg-[#0D081D] text-[11px] font-mono text-[#C4B5FD] border border-purple-500/25"
                            >
                              {tech}
                            </span>
                          ))}
                          {exp.technologies.length > 4 && (
                            <span className="text-[10px] font-mono text-[#D946EF] self-center font-bold">
                              +{exp.technologies.length - 4} more
                            </span>
                          )}
                        </div>

                        {/* Interactive toggle prompt */}
                        <div className="flex items-center gap-1 text-xs font-mono text-[#06B6D4] select-none ml-auto font-semibold">
                          <span>{isExpanded ? 'Show less' : 'Details'}</span>
                          <ChevronDown
                            className={`w-3.5 h-3.5 transition-transform ${
                              isExpanded ? 'rotate-180' : ''
                            }`}
                          />
                        </div>
                      </div>
                    </div>
                  </motion.div>
                </div>
              )
            })}
          </div>
        </div>
      </div>
    </section>
  )
}
