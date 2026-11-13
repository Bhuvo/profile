import React from 'react'
import { Mail, ArrowUp } from 'lucide-react'
import { GithubIcon, LinkedinIcon } from '../UI/Icons'
import { socialLinks } from '../../data/social'

export const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear()

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault()
    document.querySelector(href)?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <footer className="relative bg-[#05050c] border-t border-white/10 pt-16 pb-12 overflow-hidden text-xs">
      {/* Decorative top ambient glow line */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-3/4 max-w-4xl h-[1px] bg-gradient-to-r from-transparent via-purple-500/50 to-transparent" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 pb-12 border-b border-white/5">
          {/* Brand & Mission */}
          <div className="md:col-span-5 space-y-3">
            <div className="flex items-center gap-2 text-base font-bold font-display text-white">
              <span className="w-2.5 h-2.5 rounded-full bg-gradient-to-r from-purple-500 to-cyan-400" />
              <span>BHUVANESWARAN S.</span>
            </div>
            <p className="text-[#A1A1B5] text-xs sm:text-sm max-w-sm leading-relaxed">
              "Building intelligent products, one line of code at a time."
            </p>
            <p className="text-[11px] font-mono text-[#A1A1B5]/60">
              Software Developer · AI Engineer · GenAI Developer
            </p>
          </div>

          {/* Quick Navigation Links */}
          <div className="md:col-span-4 space-y-3">
            <span className="text-[11px] font-mono uppercase tracking-wider text-purple-300">
              NAVIGATION
            </span>
            <div className="grid grid-cols-2 gap-2 text-[#A1A1B5]">
              {['home', 'about', 'experience', 'skills', 'projects', 'education', 'contact'].map(
                (sec) => (
                  <a
                    key={sec}
                    href={`#${sec}`}
                    onClick={(e) => handleNavClick(e, `#${sec}`)}
                    className="hover:text-cyan-300 transition-colors capitalize"
                  >
                    {sec}
                  </a>
                )
              )}
            </div>
          </div>

          {/* Social and Back to top */}
          <div className="md:col-span-3 space-y-3 flex flex-col justify-between">
            <div>
              <span className="text-[11px] font-mono uppercase tracking-wider text-purple-300">
                CONNECT
              </span>
              <div className="flex items-center gap-2 mt-2">
                <a
                  href={socialLinks.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2.5 rounded-xl glass-panel text-[#A1A1B5] hover:text-white hover:border-purple-500/40 transition-colors"
                  aria-label="GitHub"
                >
                  <GithubIcon className="w-4 h-4" />
                </a>
                <a
                  href={socialLinks.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2.5 rounded-xl glass-panel text-[#A1A1B5] hover:text-white hover:border-cyan-400/40 transition-colors"
                  aria-label="LinkedIn"
                >
                  <LinkedinIcon className="w-4 h-4" />
                </a>
                <a
                  href={`mailto:${socialLinks.email}`}
                  className="p-2.5 rounded-xl glass-panel text-[#A1A1B5] hover:text-white hover:border-purple-500/40 transition-colors"
                  aria-label="Email"
                >
                  <Mail className="w-4 h-4" />
                </a>
              </div>
            </div>

            <button
              onClick={scrollToTop}
              className="inline-flex items-center gap-2 text-xs font-mono text-[#A1A1B5] hover:text-cyan-300 transition-colors self-start mt-4"
            >
              <span>BACK TO TOP</span>
              <ArrowUp className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>

        {/* Bottom Credits & Copyright */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-[11px] font-mono text-[#A1A1B5]/60">
          <div>
            &copy; {currentYear} Bhuvaneswaran S. All rights reserved.
          </div>
          <div className="flex items-center gap-2">
            <span>ENGINEERED WITH REACT, TYPESCRIPT &amp; THREE.JS</span>
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-400" />
          </div>
        </div>
      </div>
    </footer>
  )
}
