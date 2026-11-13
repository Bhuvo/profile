import { motion } from 'framer-motion'
import { educationList } from '../../data/education'
import { GraduationCap, BookOpen, Award, Sparkles, CheckCircle2 } from 'lucide-react'

const iconMap: Record<string, React.ElementType> = {
  'graduation-cap': GraduationCap,
  'book-open': BookOpen,
  award: Award,
}

export function Education() {
  return (
    <section id="education" className="relative py-24 sm:py-32 bg-[#0D081D]/60 overflow-hidden border-t border-purple-500/20">
      {/* Background ambient lighting */}
      <div className="absolute top-1/2 left-10 w-[500px] h-[500px] rounded-full bg-gradient-to-r from-[#D946EF]/15 via-[#8B5CF6]/15 to-transparent blur-[160px] pointer-events-none" />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#140E26] border border-cyan-500/30 text-xs font-mono text-[#06B6D4] uppercase tracking-wider mb-4 shadow-[0_0_15px_rgba(6,182,212,0.2)]">
            <GraduationCap className="w-3.5 h-3.5 text-[#D946EF]" />
            <span>ACADEMIC FOUNDATION</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-display font-bold text-[#F8FAFC]">
            LEARNING NEVER{' '}
            <span className="text-gradient-aurora">
              STOPS
            </span>
          </h2>
          <p className="mt-3 text-base text-[#C4B5FD]">
            A rigorous grounding in computer science, machine learning theory, and applied artificial intelligence.
          </p>
        </div>

        {/* Education Cards Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {educationList.map((item, idx) => {
            const Icon = iconMap[item.iconName] || GraduationCap

            return (
              <motion.div
                key={item.id}
                initial={{ opacity: 0, y: 25 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-40px' }}
                transition={{ duration: 0.6, delay: idx * 0.15 }}
                className={`rounded-3xl glass-card p-7 flex flex-col justify-between relative overflow-hidden group ${
                  item.isHighlighted
                    ? 'border-2 border-cyan-400/60 bg-[#140E26]/95 shadow-[0_0_40px_rgba(6,182,212,0.35)]'
                    : 'border border-purple-500/25 bg-[#140E26]/75 hover:border-purple-400/50'
                }`}
              >
                {/* Highlight Glow Accent */}
                {item.isHighlighted && (
                  <div className="absolute top-0 right-0 w-36 h-36 bg-gradient-to-bl from-[#06B6D4]/30 via-[#D946EF]/20 to-transparent rounded-bl-full pointer-events-none" />
                )}

                <div>
                  {/* Top Status & Duration */}
                  <div className="flex items-center justify-between gap-2 mb-4">
                    <span className="text-xs font-mono text-[#A5A0B5] font-semibold">
                      {item.duration}
                    </span>
                    {item.status && (
                      <span
                        className={`inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-[11px] font-mono font-bold ${
                          item.isHighlighted
                            ? 'bg-gradient-to-r from-cyan-900/60 to-purple-900/60 text-[#67E8F9] border border-cyan-400/50 shadow-[0_0_12px_rgba(6,182,212,0.3)]'
                            : 'bg-[#0D081D] text-[#C4B5FD] border border-purple-500/25'
                        }`}
                      >
                        {item.isHighlighted && <Sparkles className="w-3 h-3 text-[#67E8F9]" />}
                        <span>{item.status}</span>
                      </span>
                    )}
                  </div>

                  {/* Icon & Degree */}
                  <div className="flex items-center gap-3.5 mb-3">
                    <div
                      className={`p-3 rounded-2xl border flex items-center justify-center ${
                        item.isHighlighted
                          ? 'bg-cyan-950/50 border-cyan-400/60 text-[#06B6D4] shadow-[0_0_15px_rgba(6,182,212,0.4)]'
                          : 'bg-[#0D081D] border-purple-500/25 text-[#E879F9]'
                      }`}
                    >
                      <Icon className="w-5 h-5" />
                    </div>
                    <div>
                      <h3 className="font-display font-bold text-xl text-[#F8FAFC]">
                        {item.degree}
                      </h3>
                      <p className={`text-xs font-mono font-semibold ${item.isHighlighted ? 'text-[#06B6D4]' : 'text-[#C4B5FD]'}`}>
                        {item.field}
                      </p>
                    </div>
                  </div>

                  {/* Institution */}
                  <h4 className="text-sm font-semibold text-[#F8FAFC] mt-2 mb-1">
                    {item.institution}
                  </h4>

                  {/* Score / CGPA Badge */}
                  {item.score && (
                    <div className="inline-block mt-1 px-3 py-1 rounded-lg bg-[#0D081D] border border-cyan-500/30 text-xs font-mono text-[#34D399] font-bold">
                      {item.score}
                    </div>
                  )}

                  {/* Description */}
                  <p className="mt-4 text-xs sm:text-sm text-[#C4B5FD]/90 leading-relaxed">
                    {item.description}
                  </p>
                </div>

                {/* Footer Validation */}
                <div className="mt-6 pt-3.5 border-t border-purple-500/15 flex items-center gap-2 text-xs font-mono text-[#34D399]">
                  <CheckCircle2 className="w-4 h-4 text-[#06B6D4]" />
                  <span>Academic Record Verified</span>
                </div>
              </motion.div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
