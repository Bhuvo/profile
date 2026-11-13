import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { learningUniverseData, type LearningArea } from '../../data/learning'
import { Sparkles, Compass, Radio } from 'lucide-react'

const categoryBadges: Record<string, {
  color: string
  border: string
  bg: string
}> = {
  'Autonomous Systems': { color: 'text-[#06B6D4]', border: 'border-cyan-500/40', bg: 'bg-cyan-950/30' },
  'Deep Generative Architectures': { color: 'text-[#D946EF]', border: 'border-fuchsia-500/40', bg: 'bg-fuchsia-950/30' },
  'Neural Reasoning': { color: 'text-[#8B5CF6]', border: 'border-purple-500/40', bg: 'bg-purple-950/30' },
  'Context Grounding': { color: 'text-[#10B981]', border: 'border-emerald-500/40', bg: 'bg-emerald-950/30' },
  'Data Structures for AI': { color: 'text-[#F59E0B]', border: 'border-amber-500/40', bg: 'bg-amber-950/30' },
  'Statistical AI': { color: 'text-[#6366F1]', border: 'border-indigo-500/40', bg: 'bg-indigo-950/30' },
  'Linguistic Intelligence': { color: 'text-[#EC4899]', border: 'border-pink-500/40', bg: 'bg-pink-950/30' },
  'Visual AI': { color: 'text-[#14B8A6]', border: 'border-teal-500/40', bg: 'bg-teal-950/30' },
  'System Architecture': { color: 'text-[#38BDF8]', border: 'border-sky-500/40', bg: 'bg-sky-950/30' },
}

export function LearningUniverse() {
  const [activeArea, setActiveArea] = useState<LearningArea>(learningUniverseData[0])

  return (
    <section className="relative py-24 sm:py-32 bg-[#0D081D]/70 overflow-hidden border-t border-purple-500/20">
      {/* Background colorful radial glows */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] rounded-full bg-gradient-to-r from-[#D946EF]/15 via-[#8B5CF6]/15 to-[#06B6D4]/15 blur-[180px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#140E26] border border-cyan-500/30 text-xs font-mono text-[#06B6D4] uppercase tracking-wider mb-4 shadow-[0_0_15px_rgba(6,182,212,0.2)]">
            <Compass className="w-3.5 h-3.5 text-[#D946EF]" />
            <span>FRONTIER HORIZONS</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-display font-bold text-[#F8FAFC]">
            EXPLORING{' '}
            <span className="text-gradient-aurora">
              WHAT'S NEXT
            </span>
          </h2>
          <p className="mt-3 text-base text-[#C4B5FD]">
            Active areas of exploration, research literature, and emerging AI paradigms.
          </p>
        </div>

        {/* Interactive Neural Constellation Grid & Deep Inspector */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Left: Constellation Nodes */}
          <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-3.5">
            {learningUniverseData.map((node) => {
              const isActive = activeArea.id === node.id
              const catBadge = categoryBadges[node.category] || categoryBadges['Autonomous Systems']

              return (
                <div
                  key={node.id}
                  onClick={() => setActiveArea(node)}
                  className={`cursor-pointer p-4 rounded-2xl border transition-all text-left group ${
                    isActive
                      ? 'bg-[#140E26] border-cyan-400 shadow-[0_0_25px_rgba(6,182,212,0.4)] scale-[1.02]'
                      : 'bg-[#140E26]/60 border-purple-500/20 hover:border-purple-400/60 hover:bg-[#140E26]'
                  }`}
                >
                  <div className="flex items-center justify-between mb-2">
                    <span className={`text-[10px] font-mono uppercase px-2 py-0.5 rounded-md border ${catBadge.bg} ${catBadge.border} ${catBadge.color} font-semibold`}>
                      {node.category}
                    </span>
                    <span
                      className={`w-2 h-2 rounded-full ${
                        isActive ? 'bg-[#06B6D4] shadow-[0_0_10px_#06B6D4]' : 'bg-purple-500/40'
                      }`}
                    />
                  </div>

                  <h3 className="text-sm font-display font-bold text-[#F8FAFC] group-hover:text-[#67E8F9] transition-colors">
                    {node.name}
                  </h3>

                  <p className="mt-1.5 text-xs text-[#A5A0B5] line-clamp-2 leading-relaxed">
                    {node.shortDescription}
                  </p>
                </div>
              )
            })}
          </div>

          {/* Right: Active Deep Focus Inspector Panel with Glowing Aura */}
          <div className="lg:col-span-5 sticky top-28">
            <AnimatePresence mode="wait">
              <motion.div
                key={activeArea.id}
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -15 }}
                transition={{ duration: 0.3 }}
                className="rounded-3xl glass-card p-6 sm:p-8 border border-purple-400/50 bg-[#140E26]/95 shadow-[0_0_40px_rgba(139,92,246,0.3)] relative overflow-hidden"
              >
                {/* Radiant top backdrop */}
                <div className="absolute top-0 right-0 w-48 h-48 bg-gradient-to-bl from-[#D946EF]/25 via-[#06B6D4]/20 to-transparent rounded-bl-full pointer-events-none" />

                <div className="flex items-center gap-2 mb-4">
                  <Radio className="w-4 h-4 text-[#06B6D4] animate-pulse" />
                  <span className="text-xs font-mono text-[#D946EF] uppercase tracking-wider font-bold">
                    DEEP CONSTELLATION INSPECTOR
                  </span>
                </div>

                <span className="inline-block px-3 py-1 rounded-full bg-[#070510] text-xs font-mono text-[#06B6D4] border border-cyan-500/40 mb-2 font-semibold">
                  {activeArea.category}
                </span>

                <h3 className="text-2xl font-display font-bold text-[#F8FAFC] mt-1">
                  {activeArea.name}
                </h3>

                <p className="mt-4 text-sm text-[#F8FAFC] leading-relaxed">
                  {activeArea.shortDescription}
                </p>

                <div className="mt-6 pt-5 border-t border-purple-500/25">
                  <h4 className="text-xs font-mono uppercase text-[#A5A0B5] tracking-wider mb-2 font-semibold">
                    Research Focus & Practical Experiments
                  </h4>
                  <p className="text-xs text-[#C4B5FD] leading-relaxed">
                    {activeArea.details}
                  </p>
                </div>

                {/* Academic Context Notice */}
                <div className="mt-6 pt-4 border-t border-purple-500/15 flex items-center gap-2 text-[11px] font-mono text-[#34D399]">
                  <Sparkles className="w-3.5 h-3.5 text-[#06B6D4]" />
                  <span>Aligned with M.Tech curriculum and independent AI labs</span>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>

        </div>
      </div>
    </section>
  )
}
