import { motion } from 'framer-motion'
import { ArrowRight, FileDown, MessageSquare, Mail, ChevronDown, Move, Activity, Cpu } from 'lucide-react'
import { personalData } from '../../data/personal'
import { socialLinks } from '../../data/social'
import { NeuralSphereCanvas } from './NeuralSphereCanvas'
import { GithubIcon, LinkedinIcon } from '../UI/SocialIcons'

export function Hero() {
  const githubLink = socialLinks.find((l) => l.name === 'GitHub')?.url || 'https://github.com/hema-official'
  const linkedinLink = socialLinks.find((l) => l.name === 'LinkedIn')?.url || 'https://www.linkedin.com/in/hemalatha-p-837462424/'
  const emailLink = socialLinks.find((l) => l.name === 'Email')?.url || `mailto:${personalData.email}`

  const roleTags = [
    { label: 'Python Developer', color: 'from-cyan-500/25 to-blue-500/25 text-[#00F0FF] border-cyan-400/40 shadow-[0_0_15px_rgba(0,240,255,0.25)]' },
    { label: 'AI / Machine Learning', color: 'from-purple-500/25 to-fuchsia-500/25 text-[#F472B6] border-purple-400/40 shadow-[0_0_15px_rgba(217,70,239,0.25)]' },
    { label: 'Generative AI Enthusiast', color: 'from-fuchsia-500/25 to-rose-500/25 text-[#FB7185] border-fuchsia-400/40 shadow-[0_0_15px_rgba(251,113,133,0.25)]' },
    { label: 'Backend APIs & Systems', color: 'from-emerald-500/25 to-teal-500/25 text-[#34D399] border-emerald-400/40 shadow-[0_0_15px_rgba(52,211,153,0.25)]' },
  ]

  return (
    <section
      id="home"
      className="relative min-h-screen pt-28 pb-16 lg:pt-32 lg:pb-24 flex flex-col justify-center overflow-hidden"
    >
      {/* Background Aurora Orbs for Hero */}
      <div className="absolute top-1/4 left-1/4 -translate-x-1/2 w-[650px] h-[650px] rounded-full bg-gradient-to-tr from-[#7C3AED]/25 via-[#D946EF]/20 to-[#00F0FF]/25 blur-[160px] pointer-events-none animate-pulse-glow" />
      <div className="absolute top-1/3 right-10 w-[700px] h-[700px] rounded-full bg-gradient-to-bl from-[#00F0FF]/30 via-[#D946EF]/25 to-[#8B5CF6]/20 blur-[180px] pointer-events-none animate-pulse-glow" style={{ animationDelay: '2s' }} />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-8 items-center">
          
          {/* Left Column: Brand Statement & CTA */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-7 flex flex-col items-start"
          >
            {/* Status Pill Badge with Rainbow Shimmer Border */}
            <div className="inline-flex items-center gap-2.5 px-4 py-2 rounded-full bg-[#140E26]/90 border border-transparent bg-clip-padding relative mb-6 shadow-[0_0_25px_rgba(139,92,246,0.4)] before:absolute before:inset-0 before:-z-10 before:rounded-full before:p-[1.5px] before:bg-gradient-to-r before:from-[#8B5CF6] before:via-[#D946EF] before:via-[#00F0FF] before:to-[#10B981]">
              <span className="w-2.5 h-2.5 rounded-full bg-[#00F0FF] animate-ping" />
              <span className="text-xs font-mono uppercase tracking-widest text-transparent bg-clip-text bg-gradient-to-r from-[#C4B5FD] via-[#F8FAFC] to-[#00F0FF] font-bold">
                PYTHON DEVELOPER · AI ENTHUSIAST
              </span>
            </div>

            {/* Main Headline with Vivid Animated Aurora Gradient */}
            <h1 className="text-4xl sm:text-6xl md:text-7xl font-display font-black tracking-tight leading-[1.08] text-[#F8FAFC]">
              Where{' '}
              <span className="relative inline-block">
                <span className="text-gradient-aurora drop-shadow-[0_0_50px_rgba(217,70,239,0.6)]">
                  Intelligence
                </span>
                {/* Luminous soft glow aura under the word */}
                <span className="absolute -inset-2 bg-gradient-to-r from-fuchsia-600/30 via-violet-600/30 to-cyan-400/30 blur-2xl -z-10" />
              </span>
              <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#F8FAFC] via-[#E2E8F0] to-[#C4B5FD]">
                Meets Imagination.
              </span>
            </h1>

            {/* Description */}
            <p className="mt-6 text-base sm:text-lg text-[#C4B5FD] max-w-xl font-normal leading-relaxed">
              I'm <span className="text-[#F8FAFC] font-semibold underline decoration-[#00F0FF] decoration-2 underline-offset-4">{personalData.name}</span>, a Python Developer passionate about Artificial Intelligence, Machine Learning, and Generative AI. I enjoy building intelligent applications and turning complex ideas into practical software solutions.
            </p>

            {/* Colorful Professional Tags */}
            <div className="flex flex-wrap items-center gap-2.5 mt-6">
              {roleTags.map((badge) => (
                <span
                  key={badge.label}
                  className={`px-3.5 py-1.5 rounded-xl bg-gradient-to-r ${badge.color} text-xs font-mono font-medium border transition-transform hover:scale-105 cursor-default`}
                >
                  {badge.label}
                </span>
              ))}
            </div>

            {/* Action Buttons with High-Energy Neon Styling */}
            <div className="flex flex-wrap items-center gap-4 mt-8 w-full sm:w-auto">
              <a
                href="#projects"
                className="group relative inline-flex items-center justify-center gap-2.5 px-7 py-3.5 rounded-xl bg-gradient-to-r from-[#7C3AED] via-[#D946EF] to-[#00F0FF] text-[#F8FAFC] font-display font-semibold text-sm tracking-wide shadow-[0_0_35px_rgba(217,70,239,0.55)] hover:shadow-[0_0_55px_rgba(0,240,255,0.7)] border border-white/25 transition-all hover:scale-[1.03] active:scale-[0.98] cursor-pointer overflow-hidden"
              >
                <span className="relative z-10">EXPLORE MY WORK</span>
                <ArrowRight className="w-4 h-4 relative z-10 group-hover:translate-x-1.5 transition-transform text-[#F8FAFC]" />
                {/* Button shine sweep */}
                <div className="absolute inset-0 -translate-x-full group-hover:translate-x-full transition-transform duration-1000 bg-gradient-to-r from-transparent via-white/30 to-transparent" />
              </a>

              <a
                href={personalData.resumeUrl}
                download="Hemalatha_P_Resume.pdf"
                className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl bg-[#140E26]/90 hover:bg-[#1E1538] text-[#F8FAFC] font-display font-semibold text-sm tracking-wide border border-[#00F0FF]/40 hover:border-[#00F0FF] shadow-[0_0_20px_rgba(0,240,255,0.25)] hover:shadow-[0_0_35px_rgba(0,240,255,0.45)] transition-all hover:scale-[1.02] active:scale-[0.98] cursor-pointer"
              >
                <FileDown className="w-4 h-4 text-[#00F0FF]" />
                <span>DOWNLOAD RESUME</span>
              </a>

              <a
                href="#contact"
                className="inline-flex items-center justify-center gap-2 px-5 py-3.5 rounded-xl bg-purple-950/40 hover:bg-purple-900/50 text-[#C4B5FD] hover:text-[#F8FAFC] font-display font-medium text-sm border border-purple-500/35 hover:border-[#D946EF]/60 shadow-[0_0_20px_rgba(139,92,246,0.2)] transition-all cursor-pointer"
              >
                <MessageSquare className="w-4 h-4 text-[#D946EF]" />
                <span>LET'S CONNECT</span>
              </a>
            </div>

            {/* Social Proof & Direct Channels */}
            <div className="flex items-center gap-4 mt-8 pt-6 border-t border-purple-500/25 w-full">
              <span className="text-xs font-mono text-[#A5A0B5] uppercase tracking-wider font-semibold">Connect:</span>
              <div className="flex items-center gap-2.5">
                <a
                  href={githubLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2.5 rounded-xl bg-[#140E26] text-[#C4B5FD] hover:text-[#00F0FF] hover:bg-purple-900/40 border border-purple-500/30 hover:border-cyan-400/60 hover:shadow-[0_0_20px_rgba(0,240,255,0.4)] transition-all"
                  aria-label="GitHub Profile"
                >
                  <GithubIcon className="w-4 h-4" />
                </a>
                <a
                  href={linkedinLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2.5 rounded-xl bg-[#140E26] text-[#C4B5FD] hover:text-[#D946EF] hover:bg-purple-900/40 border border-purple-500/30 hover:border-fuchsia-400/60 hover:shadow-[0_0_20px_rgba(217,70,239,0.4)] transition-all"
                  aria-label="LinkedIn Profile"
                >
                  <LinkedinIcon className="w-4 h-4" />
                </a>
                <a
                  href={emailLink}
                  className="p-2.5 rounded-xl bg-[#140E26] text-[#C4B5FD] hover:text-[#34D399] hover:bg-purple-900/40 border border-purple-500/30 hover:border-emerald-400/60 hover:shadow-[0_0_20px_rgba(16,185,129,0.4)] transition-all"
                  aria-label="Email Contact"
                >
                  <Mail className="w-4 h-4" />
                </a>
              </div>
              <div className="ml-auto hidden sm:flex items-center gap-2 text-xs font-mono text-[#C4B5FD]">
                <span className="inline-block w-2 h-2 rounded-full bg-[#10B981] animate-ping" />
                <span>Chennai, India</span>
              </div>
            </div>
          </motion.div>

          {/* Right Column: 3D Neural Sphere Universe Visual */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-5 relative flex flex-col items-center justify-center"
          >
            {/* Multi-Layered Luminous Nebula behind 3D Sphere */}
            <div className="absolute w-[360px] h-[360px] sm:w-[500px] sm:h-[500px] rounded-full bg-gradient-to-tr from-[#7C3AED]/40 via-[#D946EF]/35 to-[#00F0FF]/40 blur-[100px] pointer-events-none animate-pulse-glow" />
            <div className="absolute w-[280px] h-[280px] sm:w-[380px] sm:h-[380px] rounded-full bg-gradient-to-bl from-[#00F0FF]/35 via-[#10B981]/25 to-transparent blur-[80px] pointer-events-none" />

            {/* Floating Micro-Telemetry HUD Badges around the 3D Sphere */}
            <motion.div
              animate={{ y: [0, -6, 0] }}
              transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
              className="absolute -top-4 -left-4 sm:left-2 z-20 hidden sm:flex items-center gap-2 px-3.5 py-1.5 rounded-xl bg-[#140E26]/90 backdrop-blur-md border border-cyan-400/40 shadow-[0_0_20px_rgba(0,240,255,0.3)] text-xs font-mono text-[#00F0FF]"
            >
              <Cpu className="w-3.5 h-3.5 text-[#00F0FF] animate-spin [animation-duration:8s]" />
              <span>AI CORE: ACTIVE</span>
            </motion.div>

            <motion.div
              animate={{ y: [0, 6, 0] }}
              transition={{ duration: 5, repeat: Infinity, ease: 'easeInOut', delay: 1 }}
              className="absolute top-1/2 -right-4 sm:-right-2 z-20 hidden sm:flex items-center gap-2 px-3.5 py-1.5 rounded-xl bg-[#140E26]/90 backdrop-blur-md border border-fuchsia-400/40 shadow-[0_0_20px_rgba(217,70,239,0.3)] text-xs font-mono text-[#E879F9]"
            >
              <Activity className="w-3.5 h-3.5 text-[#D946EF] animate-pulse" />
              <span>SYNAPSE FLOW: 1.2 GB/s</span>
            </motion.div>

            {/* Three.js Neural Sphere Canvas */}
            <div className="relative w-full z-10">
              <NeuralSphereCanvas />
            </div>

            {/* Interactive hint pill */}
            <div className="mt-2 inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#140E26]/90 border border-purple-500/35 text-[11px] font-mono text-[#C4B5FD] shadow-lg">
              <Move className="w-3 h-3 text-[#00F0FF] animate-pulse" />
              <span>Drag to rotate · Switch spectrum themes</span>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Scroll Down Indicator */}
      <motion.div
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1.2, duration: 0.8 }}
        className="mt-10 sm:mt-14 flex flex-col items-center justify-center gap-2 z-10"
      >
        <a
          href="#about"
          className="flex flex-col items-center gap-1.5 text-xs font-mono text-[#C4B5FD] hover:text-[#00F0FF] transition-colors uppercase tracking-[0.25em]"
        >
          <span>SCROLL TO DISCOVER</span>
          <ChevronDown className="w-4 h-4 animate-bounce text-[#00F0FF]" />
        </a>
      </motion.div>
    </section>
  )
}
