import { motion } from 'framer-motion'
import { Sparkles, ArrowRight, FileDown, MessageSquare, Mail, ChevronDown, Move } from 'lucide-react'
import { personalData } from '../../data/personal'
import { socialLinks } from '../../data/social'
import { NeuralSphereCanvas } from './NeuralSphereCanvas'
import { GithubIcon, LinkedinIcon } from '../UI/SocialIcons'

export function Hero() {
  const githubLink = socialLinks.find((l) => l.name === 'GitHub')?.url || 'https://github.com/hema-official'
  const linkedinLink = socialLinks.find((l) => l.name === 'LinkedIn')?.url || 'https://www.linkedin.com/in/hemalatha-p-837462424/'
  const emailLink = socialLinks.find((l) => l.name === 'Email')?.url || `mailto:${personalData.email}`

  const roleTags = [
    { label: 'Python Developer', color: 'from-cyan-500/20 to-blue-500/20 text-[#67E8F9] border-cyan-500/30 shadow-[0_0_12px_rgba(6,182,212,0.2)]' },
    { label: 'AI / ML', color: 'from-purple-500/20 to-fuchsia-500/20 text-[#E879F9] border-purple-500/30 shadow-[0_0_12px_rgba(217,70,239,0.2)]' },
    { label: 'Generative AI', color: 'from-fuchsia-500/20 to-pink-500/20 text-[#F43F5E] border-fuchsia-500/30 shadow-[0_0_12px_rgba(244,63,94,0.2)]' },
    { label: 'Backend APIs', color: 'from-emerald-500/20 to-teal-500/20 text-[#34D399] border-emerald-500/30 shadow-[0_0_12px_rgba(16,185,129,0.2)]' },
  ]

  return (
    <section
      id="home"
      className="relative min-h-screen pt-28 pb-16 lg:pt-32 lg:pb-24 flex flex-col justify-center overflow-hidden"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Left Column: Brand Statement & CTA */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-7 flex flex-col items-start"
          >
            {/* Status Pill Badge with Rainbow Shimmer Border */}
            <div className="inline-flex items-center gap-2.5 px-4 py-1.5 rounded-full bg-[#140E26]/90 border border-transparent bg-clip-padding relative mb-6 shadow-[0_0_20px_rgba(139,92,246,0.35)] before:absolute before:inset-0 before:-z-10 before:rounded-full before:p-[1px] before:bg-gradient-to-r before:from-[#8B5CF6] before:via-[#D946EF] before:to-[#06B6D4]">
              <span className="w-2.5 h-2.5 rounded-full bg-[#06B6D4] animate-ping" />
              <span className="text-xs font-mono uppercase tracking-widest text-transparent bg-clip-text bg-gradient-to-r from-[#C4B5FD] via-[#F8FAFC] to-[#67E8F9] font-semibold">
                PYTHON DEVELOPER · AI ENTHUSIAST
              </span>
            </div>

            {/* Main Headline with Vivid Animated Aurora Gradient */}
            <h1 className="text-4xl sm:text-6xl md:text-7xl font-display font-extrabold tracking-tight leading-[1.08] text-[#F8FAFC]">
              Where{' '}
              <span className="relative inline-block">
                <span className="text-gradient-aurora drop-shadow-[0_0_40px_rgba(217,70,239,0.5)]">
                  Intelligence
                </span>
                {/* Luminous soft glow aura under the word */}
                <span className="absolute -inset-1 bg-gradient-to-r from-fuchsia-600/20 via-violet-600/20 to-cyan-400/20 blur-xl -z-10" />
              </span>
              <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#F8FAFC] via-[#E2E8F0] to-[#C4B5FD]">
                Meets Imagination.
              </span>
            </h1>

            {/* Description */}
            <p className="mt-6 text-base sm:text-lg text-[#C4B5FD]/90 max-w-xl font-normal leading-relaxed">
              I'm <span className="text-[#F8FAFC] font-semibold underline decoration-[#06B6D4]/50 decoration-2 underline-offset-4">{personalData.name}</span>, a Python Developer passionate about Artificial Intelligence, Machine Learning, and Generative AI. I enjoy building intelligent applications and turning complex ideas into practical software solutions.
            </p>

            {/* Colorful Professional Tags */}
            <div className="flex flex-wrap items-center gap-2.5 mt-6">
              {roleTags.map((badge) => (
                <span
                  key={badge.label}
                  className={`px-3.5 py-1 rounded-xl bg-gradient-to-r ${badge.color} text-xs font-mono font-medium border transition-transform hover:scale-105 cursor-default`}
                >
                  {badge.label}
                </span>
              ))}
            </div>

            {/* Action Buttons with High-Energy Neon Styling */}
            <div className="flex flex-wrap items-center gap-3.5 mt-8 w-full sm:w-auto">
              <a
                href="#projects"
                className="group relative inline-flex items-center justify-center gap-2.5 px-7 py-3.5 rounded-xl bg-gradient-to-r from-[#7C3AED] via-[#D946EF] to-[#06B6D4] text-[#F8FAFC] font-display font-semibold text-sm tracking-wide shadow-[0_0_30px_rgba(217,70,239,0.5)] hover:shadow-[0_0_45px_rgba(6,182,212,0.6)] border border-white/20 transition-all hover:scale-[1.03] active:scale-[0.98] cursor-pointer overflow-hidden"
              >
                <span className="relative z-10">EXPLORE MY WORK</span>
                <ArrowRight className="w-4 h-4 relative z-10 group-hover:translate-x-1.5 transition-transform text-[#F8FAFC]" />
                {/* Button shine sweep */}
                <div className="absolute inset-0 -translate-x-full group-hover:translate-x-full transition-transform duration-1000 bg-gradient-to-r from-transparent via-white/25 to-transparent" />
              </a>

              <a
                href={personalData.resumeUrl}
                download="Hemalatha_P_Resume.pdf"
                className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl bg-[#140E26]/90 hover:bg-[#1E1538] text-[#F8FAFC] font-display font-semibold text-sm tracking-wide border border-[#06B6D4]/40 hover:border-[#06B6D4] shadow-[0_0_20px_rgba(6,182,212,0.25)] hover:shadow-[0_0_30px_rgba(6,182,212,0.4)] transition-all hover:scale-[1.02] active:scale-[0.98] cursor-pointer"
              >
                <FileDown className="w-4 h-4 text-[#06B6D4]" />
                <span>DOWNLOAD RESUME</span>
              </a>

              <a
                href="#contact"
                className="inline-flex items-center justify-center gap-2 px-5 py-3.5 rounded-xl bg-purple-950/30 hover:bg-purple-900/40 text-[#C4B5FD] hover:text-[#F8FAFC] font-display font-medium text-sm border border-purple-500/30 hover:border-[#D946EF]/50 transition-all cursor-pointer"
              >
                <MessageSquare className="w-4 h-4 text-[#D946EF]" />
                <span>LET'S CONNECT</span>
              </a>
            </div>

            {/* Social Proof & Direct Channels */}
            <div className="flex items-center gap-4 mt-8 pt-6 border-t border-purple-500/20 w-full">
              <span className="text-xs font-mono text-[#A5A0B5] uppercase tracking-wider font-semibold">Connect:</span>
              <div className="flex items-center gap-2">
                <a
                  href={githubLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2.5 rounded-xl bg-[#140E26] text-[#C4B5FD] hover:text-[#67E8F9] hover:bg-purple-900/40 border border-purple-500/25 hover:border-cyan-400/50 hover:shadow-[0_0_15px_rgba(6,182,212,0.3)] transition-all"
                  aria-label="GitHub Profile"
                >
                  <GithubIcon className="w-4 h-4" />
                </a>
                <a
                  href={linkedinLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2.5 rounded-xl bg-[#140E26] text-[#C4B5FD] hover:text-[#D946EF] hover:bg-purple-900/40 border border-purple-500/25 hover:border-fuchsia-400/50 hover:shadow-[0_0_15px_rgba(217,70,239,0.3)] transition-all"
                  aria-label="LinkedIn Profile"
                >
                  <LinkedinIcon className="w-4 h-4" />
                </a>
                <a
                  href={emailLink}
                  className="p-2.5 rounded-xl bg-[#140E26] text-[#C4B5FD] hover:text-[#34D399] hover:bg-purple-900/40 border border-purple-500/25 hover:border-emerald-400/50 hover:shadow-[0_0_15px_rgba(16,185,129,0.3)] transition-all"
                  aria-label="Email Contact"
                >
                  <Mail className="w-4 h-4" />
                </a>
              </div>
              <div className="ml-auto hidden sm:flex items-center gap-2 text-xs font-mono text-[#C4B5FD]">
                <Sparkles className="w-3.5 h-3.5 text-[#06B6D4] animate-spin [animation-duration:10s]" />
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
            {/* Luminous Multi-colored Background Aura behind 3D Sphere */}
            <div className="absolute w-80 h-80 sm:w-[450px] sm:h-[450px] rounded-full bg-gradient-to-tr from-[#7C3AED]/40 via-[#D946EF]/30 to-[#06B6D4]/35 blur-[95px] pointer-events-none animate-pulse-glow" />

            {/* Three.js Neural Sphere Canvas */}
            <div className="relative w-full z-10">
              <NeuralSphereCanvas />
            </div>

            {/* Interactive hint pill */}
            <div className="mt-2 inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#140E26]/80 border border-purple-500/30 text-[11px] font-mono text-[#C4B5FD] shadow-lg">
              <Move className="w-3 h-3 text-[#06B6D4] animate-pulse" />
              <span>Click & drag to rotate neural universe</span>
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
          className="flex flex-col items-center gap-1.5 text-xs font-mono text-[#C4B5FD]/80 hover:text-[#67E8F9] transition-colors uppercase tracking-[0.25em]"
        >
          <span>SCROLL TO DISCOVER</span>
          <ChevronDown className="w-4 h-4 animate-bounce text-[#06B6D4]" />
        </a>
      </motion.div>
    </section>
  )
}
