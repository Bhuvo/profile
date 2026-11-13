import { motion } from 'framer-motion'
import { highlightsData } from '../../data/highlights'
import { TrendingUp, Award, Layers, Sparkles, Brain, Clock } from 'lucide-react'

export function Highlights() {
  const cardThemes = [
    {
      borderColor: 'hover:border-purple-400/80',
      shadowColor: 'hover:shadow-[0_0_30px_rgba(139,92,246,0.4)]',
      gradientBar: 'from-[#8B5CF6] via-[#D946EF] to-transparent',
      badgeBg: 'bg-purple-950/50 text-[#C4B5FD] border-purple-500/30',
      icon: Award,
      numColor: 'text-[#C4B5FD]',
    },
    {
      borderColor: 'hover:border-cyan-400/80',
      shadowColor: 'hover:shadow-[0_0_30px_rgba(6,182,212,0.4)]',
      gradientBar: 'from-[#06B6D4] via-[#38BDF8] to-transparent',
      badgeBg: 'bg-cyan-950/50 text-[#67E8F9] border-cyan-500/30',
      icon: Brain,
      numColor: 'text-[#67E8F9]',
    },
    {
      borderColor: 'hover:border-fuchsia-400/80',
      shadowColor: 'hover:shadow-[0_0_30px_rgba(217,70,239,0.4)]',
      gradientBar: 'from-[#D946EF] via-[#F43F5E] to-transparent',
      badgeBg: 'bg-fuchsia-950/50 text-[#F43F5E] border-fuchsia-500/30',
      icon: Sparkles,
      numColor: 'text-[#F43F5E]',
    },
    {
      borderColor: 'hover:border-emerald-400/80',
      shadowColor: 'hover:shadow-[0_0_30px_rgba(16,185,129,0.4)]',
      gradientBar: 'from-[#10B981] via-[#06B6D4] to-transparent',
      badgeBg: 'bg-emerald-950/50 text-[#34D399] border-emerald-500/30',
      icon: Layers,
      numColor: 'text-[#34D399]',
    },
    {
      borderColor: 'hover:border-indigo-400/80',
      shadowColor: 'hover:shadow-[0_0_30px_rgba(99,102,241,0.4)]',
      gradientBar: 'from-[#6366F1] via-[#8B5CF6] to-transparent',
      badgeBg: 'bg-indigo-950/50 text-[#A5B4FC] border-indigo-500/30',
      icon: Sparkles,
      numColor: 'text-[#A5B4FC]',
    },
    {
      borderColor: 'hover:border-amber-400/80',
      shadowColor: 'hover:shadow-[0_0_30px_rgba(245,158,11,0.4)]',
      gradientBar: 'from-[#F59E0B] via-[#EF4444] to-transparent',
      badgeBg: 'bg-amber-950/50 text-[#FBBF24] border-amber-500/30',
      icon: Clock,
      numColor: 'text-[#FBBF24]',
    },
  ]

  return (
    <section className="relative py-24 bg-[#0D081D]/60 border-y border-purple-500/20 overflow-hidden">
      {/* Background colorful ambient glow */}
      <div className="absolute top-1/2 left-1/4 -translate-y-1/2 w-[500px] h-[500px] rounded-full bg-gradient-to-r from-[#D946EF]/15 via-[#8B5CF6]/15 to-[#06B6D4]/15 blur-[160px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#140E26] border border-fuchsia-500/30 text-xs font-mono text-[#D946EF] uppercase tracking-wider mb-4 shadow-[0_0_15px_rgba(217,70,239,0.2)]">
            <TrendingUp className="w-3.5 h-3.5 text-[#06B6D4]" />
            <span>VERIFIED METRICS</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-display font-bold text-[#F8FAFC]">
            MY JOURNEY IN{' '}
            <span className="text-gradient-aurora">
              NUMBERS
            </span>
          </h2>
          <p className="mt-3 text-sm sm:text-base text-[#C4B5FD]">
            Measurable achievements across real-world projects, data pipelines, and technical roles.
          </p>
        </div>

        {/* Sophisticated Asymmetrical Grid with Vibrant Neon Themes */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {highlightsData.map((item, index) => {
            const theme = cardThemes[index % cardThemes.length]
            const Icon = theme.icon

            return (
              <motion.div
                key={item.id}
                initial={{ opacity: 0, y: 25 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-40px' }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className={`relative rounded-3xl glass-card p-7 flex flex-col justify-between overflow-hidden group border border-purple-500/25 ${theme.borderColor} ${theme.shadowColor} bg-[#140E26]/85 transition-all duration-300`}
              >
                {/* Decorative Radiant Top Bar */}
                <div
                  className={`absolute top-0 left-0 right-0 h-[3px] bg-gradient-to-r ${theme.gradientBar} opacity-70 group-hover:opacity-100 transition-opacity`}
                />

                {/* Top Label & Themed Icon */}
                <div className="flex items-center justify-between mb-4">
                  <span className="text-xs font-mono uppercase tracking-widest text-[#A5A0B5] font-semibold">
                    {item.label}
                  </span>
                  <div className={`p-2 rounded-xl border ${theme.badgeBg} group-hover:scale-110 transition-transform`}>
                    <Icon className="w-4 h-4" />
                  </div>
                </div>

                {/* Big Metric Number with Drop Shadow */}
                <div className="my-3 flex items-baseline gap-1">
                  <span className={`text-4xl sm:text-5xl font-display font-extrabold tracking-tight drop-shadow-[0_0_20px_rgba(255,255,255,0.2)] ${theme.numColor}`}>
                    {item.number}
                  </span>
                  {item.suffix && (
                    <span className={`text-2xl sm:text-3xl font-display font-bold ${theme.numColor}`}>
                      {item.suffix}
                    </span>
                  )}
                </div>

                {/* Specific Project / Career Context */}
                <p className="mt-3 text-xs sm:text-sm text-[#C4B5FD]/85 font-normal leading-relaxed border-t border-purple-500/15 pt-3">
                  {item.context}
                </p>
              </motion.div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
