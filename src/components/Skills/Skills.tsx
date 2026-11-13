import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { skillCategories, type SkillCategory } from '../../data/skills'
import { Code, Brain, Sparkles, Server, BarChart3, Smartphone, Cpu, CheckCircle2 } from 'lucide-react'

const iconMap: Record<string, React.ElementType> = {
  code: Code,
  brain: Brain,
  sparkles: Sparkles,
  server: Server,
  'bar-chart-3': BarChart3,
  smartphone: Smartphone,
  cpu: Cpu,
}

const categoryStyles: Record<string, {
  borderHover: string
  shadow: string
  accentBg: string
  iconColor: string
  badgeColor: string
}> = {
  programming: {
    borderHover: 'hover:border-emerald-400/80',
    shadow: 'hover:shadow-[0_0_30px_rgba(16,185,129,0.35)]',
    accentBg: 'bg-emerald-950/40 border-emerald-500/30',
    iconColor: 'text-[#10B981]',
    badgeColor: 'text-[#34D399]',
  },
  'ai-ml': {
    borderHover: 'hover:border-cyan-400/80',
    shadow: 'hover:shadow-[0_0_30px_rgba(6,182,212,0.35)]',
    accentBg: 'bg-cyan-950/40 border-cyan-500/30',
    iconColor: 'text-[#06B6D4]',
    badgeColor: 'text-[#67E8F9]',
  },
  'gen-ai': {
    borderHover: 'hover:border-fuchsia-400/80',
    shadow: 'hover:shadow-[0_0_30px_rgba(217,70,239,0.35)]',
    accentBg: 'bg-fuchsia-950/40 border-fuchsia-500/30',
    iconColor: 'text-[#D946EF]',
    badgeColor: 'text-[#F43F5E]',
  },
  backend: {
    borderHover: 'hover:border-indigo-400/80',
    shadow: 'hover:shadow-[0_0_30px_rgba(99,102,241,0.35)]',
    accentBg: 'bg-indigo-950/40 border-indigo-500/30',
    iconColor: 'text-[#818CF8]',
    badgeColor: 'text-[#A5B4FC]',
  },
  'data-science': {
    borderHover: 'hover:border-amber-400/80',
    shadow: 'hover:shadow-[0_0_30px_rgba(245,158,11,0.35)]',
    accentBg: 'bg-amber-950/40 border-amber-500/30',
    iconColor: 'text-[#F59E0B]',
    badgeColor: 'text-[#FBBF24]',
  },
  'web-mobile': {
    borderHover: 'hover:border-rose-400/80',
    shadow: 'hover:shadow-[0_0_30px_rgba(244,63,94,0.35)]',
    accentBg: 'bg-rose-950/40 border-rose-500/30',
    iconColor: 'text-[#F43F5E]',
    badgeColor: 'text-[#FDA4AF]',
  },
  'dev-tools': {
    borderHover: 'hover:border-teal-400/80',
    shadow: 'hover:shadow-[0_0_30px_rgba(20,184,166,0.35)]',
    accentBg: 'bg-teal-950/40 border-teal-500/30',
    iconColor: 'text-[#14B8A6]',
    badgeColor: 'text-[#5EEAD4]',
  },
}

export function Skills() {
  const [selectedCategory, setSelectedCategory] = useState<string>('all')

  const filteredCategories =
    selectedCategory === 'all'
      ? skillCategories
      : skillCategories.filter((c) => c.id === selectedCategory)

  return (
    <section id="skills" className="relative py-24 sm:py-32 overflow-hidden">
      {/* Background radial atmosphere */}
      <div className="absolute top-1/4 right-0 w-[500px] h-[500px] rounded-full bg-gradient-to-b from-[#06B6D4]/15 via-[#10B981]/10 to-transparent blur-[160px] pointer-events-none" />
      <div className="absolute bottom-10 left-10 w-[500px] h-[500px] rounded-full bg-gradient-to-tr from-[#D946EF]/15 via-[#8B5CF6]/15 to-transparent blur-[160px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#140E26] border border-cyan-500/30 text-xs font-mono text-[#06B6D4] uppercase tracking-wider mb-4 shadow-[0_0_15px_rgba(6,182,212,0.2)]">
            <Cpu className="w-3.5 h-3.5 text-[#D946EF]" />
            <span>THE INTELLIGENCE STACK</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-display font-bold text-[#F8FAFC]">
            THE TECHNOLOGIES{' '}
            <span className="text-gradient-aurora">
              I WORK WITH
            </span>
          </h2>
          <p className="mt-3 text-base text-[#C4B5FD]">
            Building the foundation for intelligent, scalable, and responsive software.
          </p>
        </div>

        {/* Interactive Category Filter Pills with Rainbow Glow on Active */}
        <div className="flex flex-wrap items-center justify-center gap-2.5 mb-14 max-w-4xl mx-auto">
          <button
            onClick={() => setSelectedCategory('all')}
            className={`px-4 py-2 rounded-xl text-xs font-mono tracking-wide transition-all cursor-pointer ${
              selectedCategory === 'all'
                ? 'bg-gradient-to-r from-[#7C3AED] via-[#D946EF] to-[#06B6D4] text-[#F8FAFC] shadow-[0_0_20px_rgba(217,70,239,0.5)] border border-white/25 font-bold scale-105'
                : 'bg-[#140E26]/80 text-[#A5A0B5] hover:text-[#F8FAFC] border border-purple-500/20 hover:border-purple-400/50'
            }`}
          >
            All Disciplines
          </button>
          {skillCategories.map((cat) => {
            const Icon = iconMap[cat.iconName] || Code
            const isActive = selectedCategory === cat.id
            const style = categoryStyles[cat.id] || categoryStyles.programming
            return (
              <button
                key={cat.id}
                onClick={() => setSelectedCategory(cat.id)}
                className={`inline-flex items-center gap-2 px-3.5 py-2 rounded-xl text-xs font-mono tracking-wide transition-all cursor-pointer ${
                  isActive
                    ? 'bg-gradient-to-r from-[#7C3AED] via-[#D946EF] to-[#06B6D4] text-[#F8FAFC] shadow-[0_0_20px_rgba(217,70,239,0.5)] border border-white/25 font-bold scale-105'
                    : 'bg-[#140E26]/80 text-[#C4B5FD] hover:text-white border border-purple-500/20 hover:border-purple-400/50'
                }`}
              >
                <Icon className={`w-3.5 h-3.5 ${isActive ? 'text-white' : style.iconColor}`} />
                <span>{cat.title}</span>
              </button>
            )
          })}
        </div>

        {/* Constellation Grid of Skills with Distinct Neon Color Identities */}
        <motion.div layout className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <AnimatePresence>
            {filteredCategories.map((category: SkillCategory) => {
              const Icon = iconMap[category.iconName] || Code
              const style = categoryStyles[category.id] || categoryStyles.programming

              return (
                <motion.div
                  key={category.id}
                  layout
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.95 }}
                  transition={{ duration: 0.35 }}
                  className={`rounded-3xl glass-card p-6 flex flex-col justify-between group border border-purple-500/25 ${style.borderHover} ${style.shadow} bg-[#140E26]/85 transition-all duration-300`}
                >
                  <div>
                    {/* Header with Themed Icon */}
                    <div className="flex items-center gap-3.5 mb-5">
                      <div
                        className={`p-3 rounded-2xl border flex items-center justify-center transition-transform group-hover:scale-110 ${style.accentBg} ${style.iconColor}`}
                      >
                        <Icon className="w-5 h-5" />
                      </div>
                      <div>
                        <h3 className="font-display font-bold text-lg text-[#F8FAFC]">
                          {category.title}
                        </h3>
                        <p className="text-xs text-[#A5A0B5] leading-snug line-clamp-1">
                          {category.subtitle}
                        </p>
                      </div>
                    </div>

                    {/* Skill Items Constellation */}
                    <div className="flex flex-col gap-2.5 mt-4">
                      {category.items.map((skill) => (
                        <div
                          key={skill.name}
                          className="group/item p-3 rounded-2xl bg-[#0D081D]/80 hover:bg-[#140E26] border border-purple-500/15 hover:border-purple-400/40 transition-all hover:translate-x-1"
                        >
                          <div className="flex items-center justify-between">
                            <span
                              className={`text-xs font-mono font-semibold ${
                                skill.highlight ? style.badgeColor : 'text-[#F8FAFC]'
                              }`}
                            >
                              {skill.name}
                            </span>
                            {skill.highlight && (
                              <span className="text-[10px] font-mono px-2 py-0.5 rounded-md bg-purple-900/50 text-[#F8FAFC] border border-purple-400/30">
                                Core
                              </span>
                            )}
                          </div>
                          {skill.description && (
                            <p className="mt-1 text-[11px] text-[#A5A0B5] leading-relaxed">
                              {skill.description}
                            </p>
                          )}
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Bottom Verification Note */}
                  <div className="mt-6 pt-3.5 border-t border-purple-500/15 flex items-center gap-2 text-[11px] font-mono text-[#C4B5FD]/80">
                    <CheckCircle2 className={`w-3.5 h-3.5 ${style.iconColor}`} />
                    <span>Applied in practical projects & research</span>
                  </div>
                </motion.div>
              )
            })}
          </AnimatePresence>
        </motion.div>
      </div>
    </section>
  )
}
