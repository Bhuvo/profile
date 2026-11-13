import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Menu, X, FileDown } from 'lucide-react'
import { personalData } from '../../data/personal'
import { socialLinks } from '../../data/social'
import { GithubIcon, LinkedinIcon } from '../UI/SocialIcons'

const navLinks = [
  { name: 'Home', href: '#home' },
  { name: 'About', href: '#about' },
  { name: 'Experience', href: '#experience' },
  { name: 'Skills', href: '#skills' },
  { name: 'Projects', href: '#projects' },
  { name: 'Education', href: '#education' },
  { name: 'Contact', href: '#contact' },
]

export function Navbar() {
  const [activeSection, setActiveSection] = useState('home')
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  const githubLink = socialLinks.find((l) => l.name === 'GitHub')?.url || 'https://github.com/hema-official'
  const linkedinLink = socialLinks.find((l) => l.name === 'LinkedIn')?.url || 'https://www.linkedin.com/in/hemalatha-p-837462424/'

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 30)

      // Active section spy
      const sections = navLinks.map((link) => link.href.substring(1))
      const scrollPosition = window.scrollY + 160

      for (let i = sections.length - 1; i >= 0; i--) {
        const el = document.getElementById(sections[i])
        if (el && el.offsetTop <= scrollPosition) {
          setActiveSection(sections[i])
          break
        }
      }
    }

    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <header className="fixed top-0 left-0 right-0 z-40 px-4 sm:px-6 lg:px-8 pt-4 transition-all duration-300">
      <nav
        className={`max-w-7xl mx-auto flex items-center justify-between px-5 py-3 rounded-2xl transition-all duration-300 ${
          isScrolled
            ? 'glass-panel shadow-[0_8px_32px_rgba(7,5,16,0.85)] border-purple-500/40'
            : 'bg-[#0D081D]/80 backdrop-blur-md border border-purple-500/25 shadow-lg'
        }`}
        aria-label="Main Navigation"
      >
        {/* Brand Logo with Colorful Holographic Ring */}
        <a
          href="#home"
          className="group flex items-center gap-2.5 font-display font-bold text-lg tracking-wider text-[#F8FAFC]"
        >
          <div className="w-8 h-8 rounded-lg bg-gradient-to-tr from-[#8B5CF6] via-[#D946EF] to-[#06B6D4] p-[1.5px] flex items-center justify-center group-hover:shadow-[0_0_20px_#D946EF] transition-shadow">
            <div className="w-full h-full bg-[#070510] rounded-[6.5px] flex items-center justify-center font-mono text-sm text-[#F8FAFC] font-bold">
              H
            </div>
          </div>
          <span className="flex items-center">
            HEMALATHA<span className="text-[#06B6D4] animate-pulse">.</span>
          </span>
        </a>

        {/* Desktop Navigation Links */}
        <div className="hidden lg:flex items-center gap-1 px-3 py-1.5 rounded-xl bg-[#070510]/60 border border-purple-500/20 shadow-inner">
          {navLinks.map((link) => {
            const isActive = activeSection === link.href.substring(1)
            return (
              <a
                key={link.name}
                href={link.href}
                className={`relative px-3.5 py-1.5 text-xs font-medium tracking-wide transition-colors rounded-lg ${
                  isActive ? 'text-[#F8FAFC]' : 'text-[#A5A0B5] hover:text-[#C4B5FD]'
                }`}
              >
                {isActive && (
                  <motion.div
                    layoutId="activeNavIndicator"
                    className="absolute inset-0 bg-gradient-to-r from-[#7C3AED] via-[#D946EF]/60 to-[#06B6D4]/50 rounded-lg border border-purple-300/40 shadow-[0_0_15px_rgba(217,70,239,0.4)]"
                    transition={{ type: 'spring', stiffness: 380, damping: 30 }}
                  />
                )}
                <span className="relative z-10 font-semibold">{link.name}</span>
              </a>
            )
          })}
        </div>

        {/* Right CTA Actions: Socials & Resume */}
        <div className="hidden sm:flex items-center gap-2.5">
          <a
            href={githubLink}
            target="_blank"
            rel="noopener noreferrer"
            className="p-2.5 rounded-xl text-[#C4B5FD] hover:text-[#06B6D4] hover:bg-purple-950/50 border border-purple-500/20 hover:border-cyan-400/40 transition-all hover:scale-105"
            aria-label="GitHub Profile"
          >
            <GithubIcon className="w-4 h-4" />
          </a>
          <a
            href={linkedinLink}
            target="_blank"
            rel="noopener noreferrer"
            className="p-2.5 rounded-xl text-[#C4B5FD] hover:text-[#D946EF] hover:bg-purple-950/50 border border-purple-500/20 hover:border-fuchsia-400/40 transition-all hover:scale-105"
            aria-label="LinkedIn Profile"
          >
            <LinkedinIcon className="w-4 h-4" />
          </a>
          <a
            href={personalData.resumeUrl}
            download="Hemalatha_P_Resume.pdf"
            className="group relative flex items-center gap-2 px-4 py-2 rounded-xl bg-gradient-to-r from-[#7C3AED] via-[#D946EF] to-[#06B6D4] text-[#F8FAFC] text-xs font-bold tracking-wide border border-white/20 shadow-[0_0_20px_rgba(217,70,239,0.4)] hover:shadow-[0_0_30px_rgba(6,182,212,0.6)] transition-all hover:scale-105 cursor-pointer overflow-hidden"
          >
            <FileDown className="w-3.5 h-3.5 text-[#F8FAFC] group-hover:translate-y-0.5 transition-transform" />
            <span>RESUME</span>
          </a>
        </div>

        {/* Mobile Menu Toggle Button */}
        <button
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          className="lg:hidden p-2 rounded-xl text-[#A5A0B5] hover:text-[#F8FAFC] bg-[#140E26] border border-purple-500/30 cursor-pointer"
          aria-label="Toggle navigation menu"
        >
          {isMobileMenuOpen ? <X className="w-5 h-5 text-[#06B6D4]" /> : <Menu className="w-5 h-5" />}
        </button>
      </nav>

      {/* Mobile Drawer Navigation */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -15, scale: 0.98 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -15, scale: 0.98 }}
            transition={{ duration: 0.2 }}
            className="lg:hidden mt-2 max-w-7xl mx-auto rounded-2xl glass-panel border-purple-500/40 p-5 shadow-2xl"
          >
            <div className="flex flex-col gap-2">
              {navLinks.map((link) => {
                const isActive = activeSection === link.href.substring(1)
                return (
                  <a
                    key={link.name}
                    href={link.href}
                    onClick={() => setIsMobileMenuOpen(false)}
                    className={`px-4 py-2.5 rounded-xl text-sm font-semibold transition-colors ${
                      isActive
                        ? 'bg-gradient-to-r from-purple-600/40 to-cyan-500/40 text-[#67E8F9] border border-purple-400/50 shadow-md'
                        : 'text-[#A5A0B5] hover:bg-purple-900/30 hover:text-[#F8FAFC]'
                    }`}
                  >
                    {link.name}
                  </a>
                )
              })}

              <div className="pt-3 mt-2 border-t border-purple-500/20 flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <a
                    href={githubLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-2 rounded-lg bg-purple-900/40 text-[#C4B5FD] hover:text-[#06B6D4]"
                    aria-label="GitHub"
                  >
                    <GithubIcon className="w-4 h-4" />
                  </a>
                  <a
                    href={linkedinLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-2 rounded-lg bg-purple-900/40 text-[#C4B5FD] hover:text-[#D946EF]"
                    aria-label="LinkedIn"
                  >
                    <LinkedinIcon className="w-4 h-4" />
                  </a>
                </div>
                <a
                  href={personalData.resumeUrl}
                  download="Hemalatha_P_Resume.pdf"
                  className="flex items-center gap-2 px-4 py-2 rounded-xl bg-gradient-to-r from-[#7C3AED] via-[#D946EF] to-[#06B6D4] text-[#F8FAFC] text-xs font-bold"
                >
                  <FileDown className="w-3.5 h-3.5 text-[#F8FAFC]" />
                  <span>DOWNLOAD RESUME</span>
                </a>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  )
}
