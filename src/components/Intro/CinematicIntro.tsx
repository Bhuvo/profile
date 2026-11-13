import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

interface CinematicIntroProps {
  onComplete: () => void
}

const nodeColors = ['#06B6D4', '#D946EF', '#8B5CF6', '#10B981', '#F59E0B', '#38BDF8']

export function CinematicIntro({ onComplete }: CinematicIntroProps) {
  const [phase, setPhase] = useState<'init' | 'expand' | 'reveal' | 'exit'>('init')

  useEffect(() => {
    // Check if user already saw the intro in this session or prefers reduced motion
    const alreadyVisited = sessionStorage.getItem('hema_intro_seen')
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches

    if (alreadyVisited || prefersReducedMotion) {
      onComplete()
      return
    }

    // Phase sequence: total 2.4 seconds
    const timer1 = setTimeout(() => setPhase('expand'), 400)
    const timer2 = setTimeout(() => setPhase('reveal'), 1100)
    const timer3 = setTimeout(() => {
      setPhase('exit')
      sessionStorage.setItem('hema_intro_seen', 'true')
    }, 2200)
    const timer4 = setTimeout(() => {
      onComplete()
    }, 2700)

    return () => {
      clearTimeout(timer1)
      clearTimeout(timer2)
      clearTimeout(timer3)
      clearTimeout(timer4)
    }
  }, [onComplete])

  return (
    <AnimatePresence>
      {phase !== 'exit' && (
        <motion.div
          initial={{ opacity: 1 }}
          exit={{ opacity: 0, scale: 1.05 }}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          className="fixed inset-0 z-50 flex flex-col items-center justify-center bg-[#070510] overflow-hidden"
        >
          {/* Ambient multi-colored nebula backdrop */}
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-[#140E26] via-[#0D081D] to-[#070510]" />
          <div className="absolute w-[500px] h-[500px] rounded-full bg-gradient-to-tr from-[#D946EF]/25 via-[#8B5CF6]/20 to-[#06B6D4]/25 blur-[120px] pointer-events-none" />

          {/* Interactive Neural Seed Particle & Constellation */}
          <div className="relative flex items-center justify-center mb-8">
            {/* Core glowing multi-color particle */}
            <motion.div
              initial={{ scale: 0, opacity: 0 }}
              animate={
                phase === 'init'
                  ? { scale: [0, 1.3, 1], opacity: 1 }
                  : { scale: [1, 1.5, 1], opacity: [0.9, 1, 0.9] }
              }
              transition={{ duration: 0.8, ease: 'easeOut', repeat: phase === 'init' ? 0 : Infinity }}
              className="w-6 h-6 rounded-full bg-gradient-to-r from-[#06B6D4] via-[#D946EF] to-[#8B5CF6] shadow-[0_0_40px_#D946EF]"
            />

            {/* Neural Expansion Rings */}
            {phase !== 'init' && (
              <>
                <motion.div
                  initial={{ scale: 0.2, opacity: 0 }}
                  animate={{ scale: 1.8, opacity: [0, 0.7, 0.25] }}
                  transition={{ duration: 1.2, ease: 'easeOut' }}
                  className="absolute w-32 h-32 rounded-full border border-[#D946EF]/60 shadow-[0_0_20px_rgba(217,70,239,0.3)]"
                />
                <motion.div
                  initial={{ scale: 0.4, opacity: 0 }}
                  animate={{ scale: 2.6, opacity: [0, 0.5, 0] }}
                  transition={{ duration: 1.4, ease: 'easeOut', delay: 0.15 }}
                  className="absolute w-32 h-32 rounded-full border border-[#06B6D4]/50 shadow-[0_0_20px_rgba(6,182,212,0.3)]"
                />

                {/* Floating interconnected multi-colored neural nodes */}
                {[0, 60, 120, 180, 240, 300].map((deg, i) => {
                  const rad = (deg * Math.PI) / 180
                  const dist = 65
                  const x = Math.cos(rad) * dist
                  const y = Math.sin(rad) * dist
                  const col = nodeColors[i % nodeColors.length]

                  return (
                    <motion.div
                      key={i}
                      initial={{ x: 0, y: 0, opacity: 0 }}
                      animate={{ x, y, opacity: 1 }}
                      transition={{ duration: 0.6, ease: 'easeOut', delay: i * 0.05 }}
                      className="absolute w-3 h-3 rounded-full"
                      style={{
                        backgroundColor: col,
                        boxShadow: `0 0 15px ${col}`,
                      }}
                    />
                  )
                })}
              </>
            )}
          </div>

          {/* Typography Reveal */}
          <div className="relative text-center z-10 px-4">
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={phase === 'reveal' ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
              className="text-3xl sm:text-5xl md:text-6xl font-display font-extrabold tracking-[0.25em] text-[#F8FAFC]"
            >
              HEMALATHA P<span className="text-[#06B6D4]">.</span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, letterSpacing: '0.15em' }}
              animate={phase === 'reveal' ? { opacity: 1, letterSpacing: '0.3em' } : {}}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="mt-3 text-xs sm:text-sm font-mono uppercase text-transparent bg-clip-text bg-gradient-to-r from-[#D946EF] via-[#8B5CF6] to-[#06B6D4] font-bold"
            >
              ENTERING THE NEURAL UNIVERSE
            </motion.p>
          </div>

          {/* Quick Skip button for immediate user control */}
          <button
            onClick={() => {
              sessionStorage.setItem('hema_intro_seen', 'true')
              onComplete()
            }}
            className="absolute bottom-8 text-xs font-mono text-[#C4B5FD]/70 hover:text-[#06B6D4] transition-colors uppercase tracking-widest px-4 py-1.5 rounded-full border border-purple-500/30 hover:border-cyan-400/50 bg-[#140E26]/60 cursor-pointer shadow-md"
          >
            Skip Intro →
          </button>
        </motion.div>
      )}
    </AnimatePresence>
  )
}
