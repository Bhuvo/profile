import { motion } from 'framer-motion'
import { Brain, Cpu, Database, Code2, Sparkles, Terminal, Compass, GraduationCap, MapPin } from 'lucide-react'
import { personalData } from '../../data/personal'

export function About() {
  const { aboutStory, location, roles } = personalData

  const floatingBadges = [
    { label: 'Python Systems', icon: Terminal, color: 'text-[#06B6D4] border-cyan-500/40 shadow-[0_0_15px_rgba(6,182,212,0.3)] bg-[#070510]/85', delay: 0 },
    { label: 'FastAPI & Flask', icon: Code2, color: 'text-[#10B981] border-emerald-500/40 shadow-[0_0_15px_rgba(16,185,129,0.3)] bg-[#070510]/85', delay: 0.15 },
    { label: 'Machine Learning', icon: Brain, color: 'text-[#8B5CF6] border-purple-500/40 shadow-[0_0_15px_rgba(139,92,246,0.3)] bg-[#070510]/85', delay: 0.3 },
    { label: 'Generative AI & LLMs', icon: Sparkles, color: 'text-[#D946EF] border-fuchsia-500/40 shadow-[0_0_15px_rgba(217,70,239,0.3)] bg-[#070510]/85', delay: 0.45 },
    { label: 'Data Visualisation', icon: Database, color: 'text-[#F59E0B] border-amber-500/40 shadow-[0_0_15px_rgba(245,158,11,0.3)] bg-[#070510]/85', delay: 0.6 },
  ]

  return (
    <section id="about" className="relative py-24 sm:py-32 overflow-hidden">
      {/* Background ambient lighting with rich colors */}
      <div className="absolute top-1/2 -left-20 -translate-y-1/2 w-[550px] h-[550px] rounded-full bg-gradient-to-r from-[#D946EF]/15 via-[#8B5CF6]/15 to-transparent blur-[160px] pointer-events-none" />
      <div className="absolute top-1/3 right-10 w-[450px] h-[450px] rounded-full bg-gradient-to-l from-[#06B6D4]/15 via-[#10B981]/10 to-transparent blur-[150px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header with Multi-Color Pill */}
        <div className="max-w-3xl mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#140E26] border border-cyan-500/30 text-xs font-mono text-[#06B6D4] uppercase tracking-wider mb-4 shadow-[0_0_15px_rgba(6,182,212,0.2)]">
            <Compass className="w-3.5 h-3.5 text-[#D946EF]" />
            <span>ABOUT HEMALATHA</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-display font-bold text-[#F8FAFC] tracking-tight">
            THE MIND BEHIND{' '}
            <span className="text-gradient-aurora">
              THE MACHINE
            </span>
          </h2>
          <p className="mt-3 text-base sm:text-lg font-mono text-[#C4B5FD]">
            "{aboutStory.subheading}"
          </p>
        </div>

        {/* Editorial Two-Column Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          {/* Left Column: Narrative Story & Engineering Trajectory */}
          <motion.div
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-60px' }}
            transition={{ duration: 0.7 }}
            className="lg:col-span-7 flex flex-col gap-5 text-[#C4B5FD]/90 text-base leading-relaxed"
          >
            <p className="text-lg text-[#F8FAFC] font-medium leading-relaxed">
              I'm <span className="text-[#67E8F9] font-semibold">Hemalatha</span>, a Python Developer with a strong interest in Artificial Intelligence, Machine Learning, and Generative AI.
            </p>
            <p>
              My journey in technology began with software development and application engineering. Through internships and professional development experience, I gained exposure to <span className="text-[#E879F9] font-medium">Python backend systems</span>, <span className="text-[#67E8F9] font-medium">Flutter applications</span>, <span className="text-[#34D399] font-medium">REST APIs</span>, data visualization, and software development workflows.
            </p>
            <p>
              Currently pursuing my <span className="text-[#F8FAFC] font-semibold underline decoration-[#8B5CF6] decoration-2 underline-offset-4">M.Tech in Artificial Intelligence at SRM Institute of Science and Technology</span>, I am expanding my understanding of intelligent systems, machine learning, and modern AI architectures.
            </p>
            <p>
              I enjoy exploring how technology can solve real-world challenges and building applications that combine practical software engineering with emerging AI capabilities.
            </p>

            {/* Quick Overview Highlights with Vivid Borders */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-6 mt-4 border-t border-purple-500/20">
              <div className="p-4 rounded-2xl bg-[#140E26]/85 border border-purple-500/30 hover:border-purple-400 hover:shadow-[0_0_20px_rgba(139,92,246,0.3)] transition-all">
                <div className="flex items-center gap-2 mb-1.5">
                  <Terminal className="w-4 h-4 text-[#8B5CF6]" />
                  <span className="text-xs font-mono text-[#A5A0B5] uppercase font-semibold">Focus</span>
                </div>
                <span className="text-sm font-display font-bold text-[#F8FAFC]">AI & Python Systems</span>
              </div>

              <div className="p-4 rounded-2xl bg-[#140E26]/85 border border-cyan-500/30 hover:border-cyan-400 hover:shadow-[0_0_20px_rgba(6,182,212,0.3)] transition-all">
                <div className="flex items-center gap-2 mb-1.5">
                  <GraduationCap className="w-4 h-4 text-[#06B6D4]" />
                  <span className="text-xs font-mono text-[#A5A0B5] uppercase font-semibold">Degree</span>
                </div>
                <span className="text-sm font-display font-bold text-[#67E8F9]">M.Tech AI @ SRM</span>
              </div>

              <div className="p-4 rounded-2xl bg-[#140E26]/85 border border-fuchsia-500/30 hover:border-fuchsia-400 hover:shadow-[0_0_20px_rgba(217,70,239,0.3)] transition-all">
                <div className="flex items-center gap-2 mb-1.5">
                  <MapPin className="w-4 h-4 text-[#D946EF]" />
                  <span className="text-xs font-mono text-[#A5A0B5] uppercase font-semibold">Location</span>
                </div>
                <span className="text-sm font-display font-bold text-[#E879F9]">{location}</span>
              </div>
            </div>

            {/* Roles Chips with Multi-Color Styling */}
            <div className="pt-2">
              <span className="text-xs font-mono text-[#A5A0B5] uppercase tracking-wider block mb-3 font-semibold">
                Technical Positioning:
              </span>
              <div className="flex flex-wrap gap-2">
                {roles.map((role, i) => {
                  const colors = [
                    'text-[#67E8F9] border-cyan-500/30 bg-cyan-950/20',
                    'text-[#E879F9] border-purple-500/30 bg-purple-950/20',
                    'text-[#F43F5E] border-fuchsia-500/30 bg-fuchsia-950/20',
                    'text-[#34D399] border-emerald-500/30 bg-emerald-950/20',
                    'text-[#FBBF24] border-amber-500/30 bg-amber-950/20',
                  ]
                  return (
                    <span
                      key={role}
                      className={`px-3.5 py-1.5 rounded-xl text-xs font-mono border ${colors[i % colors.length]} transition-transform hover:scale-105`}
                    >
                      {role}
                    </span>
                  )
                })}
              </div>
            </div>
          </motion.div>

          {/* Right Column: Abstract Portrait Visual with Multi-Colored Holographic Rings */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, margin: '-60px' }}
            transition={{ duration: 0.8 }}
            className="lg:col-span-5 relative flex items-center justify-center"
          >
            {/* Visual Glass Container with Rainbow Halo */}
            <div className="relative w-full max-w-md aspect-square rounded-3xl glass-card p-6 flex flex-col items-center justify-center overflow-hidden border border-purple-400/40 shadow-[0_0_50px_rgba(139,92,246,0.3)]">
              {/* Internal Neural Background Glow */}
              <div className="absolute inset-0 bg-gradient-to-tr from-[#7C3AED]/30 via-[#D946EF]/20 to-[#06B6D4]/30" />
              <div className="absolute inset-0 cosmic-grid opacity-50" />

              {/* Central Abstract AI Portrait Geometric Structure with Multi-Color Rings */}
              <div className="relative z-10 w-48 h-48 rounded-full border-2 border-dashed border-[#D946EF]/60 flex items-center justify-center p-3 animate-spin [animation-duration:35s]">
                <div className="w-full h-full rounded-full border-2 border-dashed border-[#06B6D4]/60 flex items-center justify-center animate-spin [animation-duration:20s] [animation-direction:reverse]">
                  <div className="w-32 h-32 rounded-full bg-gradient-to-tr from-[#7C3AED] via-[#D946EF] to-[#06B6D4] flex items-center justify-center p-[2.5px] shadow-[0_0_35px_rgba(217,70,239,0.6)]">
                    <div className="w-full h-full rounded-full bg-[#070510] flex flex-col items-center justify-center text-center p-2">
                      <Cpu className="w-9 h-9 text-[#06B6D4] mb-1 animate-pulse" />
                      <span className="font-mono text-[10px] text-transparent bg-clip-text bg-gradient-to-r from-[#D946EF] to-[#06B6D4] uppercase tracking-wider font-bold">
                        AI ENGINE
                      </span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Floating Skill Badges with Vivid Distinct Themes */}
              {floatingBadges.map((badge, i) => {
                const Icon = badge.icon
                return (
                  <motion.div
                    key={badge.label}
                    initial={{ opacity: 0, y: 15 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.2 + badge.delay, duration: 0.5 }}
                    className={`absolute z-20 flex items-center gap-2 px-3.5 py-1.5 rounded-xl border text-xs font-mono font-semibold ${badge.color} ${
                      i === 0
                        ? 'top-6 left-4'
                        : i === 1
                        ? 'top-10 right-4'
                        : i === 2
                        ? 'bottom-20 left-3'
                        : i === 3
                        ? 'bottom-16 right-3'
                        : 'bottom-4 left-1/2 -translate-x-1/2'
                    }`}
                  >
                    <Icon className="w-3.5 h-3.5" />
                    <span>{badge.label}</span>
                  </motion.div>
                )
              })}
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  )
}
