import { ArrowUp, Mail } from 'lucide-react'
import { personalData } from '../../data/personal'
import { socialLinks } from '../../data/social'
import { GithubIcon, LinkedinIcon } from '../UI/SocialIcons'

export function Footer() {
  const currentYear = new Date().getFullYear()

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  const githubLink = socialLinks.find((l) => l.name === 'GitHub')?.url || 'https://github.com/hema-official'
  const linkedinLink = socialLinks.find((l) => l.name === 'LinkedIn')?.url || 'https://www.linkedin.com/in/hemalatha-p-837462424/'
  const emailLink = `mailto:${personalData.email}`

  return (
    <footer className="relative bg-[#070510] border-t border-purple-500/25 pt-16 pb-12 overflow-hidden">
      {/* Subtle animated neural network graphic lines */}
      <div className="absolute inset-0 pointer-events-none opacity-25 cosmic-grid" />
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-4/5 h-[2px] bg-gradient-to-r from-transparent via-[#D946EF] via-[#06B6D4] to-transparent shadow-[0_0_20px_#06B6D4]" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 items-center justify-between pb-12 border-b border-purple-500/20">
          
          {/* Brand Info */}
          <div className="md:col-span-6 flex flex-col items-start">
            <a href="#home" className="flex items-center gap-2.5 font-display font-bold text-xl text-[#F8FAFC]">
              <div className="w-8 h-8 rounded-lg bg-gradient-to-tr from-[#8B5CF6] via-[#D946EF] to-[#06B6D4] p-[1.5px] flex items-center justify-center shadow-[0_0_15px_#D946EF]">
                <div className="w-full h-full bg-[#070510] rounded-[6.5px] flex items-center justify-center font-mono text-sm text-[#F8FAFC] font-bold">
                  H
                </div>
              </div>
              <span className="flex items-center">
                HEMALATHA P<span className="text-[#06B6D4] animate-pulse">.</span>
              </span>
            </a>
            <p className="mt-3 text-xs sm:text-sm text-[#C4B5FD] font-mono max-w-md">
              "Curiosity creates possibilities. Intelligence builds the future."
            </p>
            <p className="mt-1 text-xs text-[#A5A0B5]">
              Python Developer | AI & ML Engineer | Generative AI Enthusiast · Chennai, India
            </p>
          </div>

          {/* Quick Nav Links */}
          <div className="md:col-span-6 flex flex-wrap items-center md:justify-end gap-x-6 gap-y-2.5 text-xs font-mono text-[#A5A0B5]">
            <a href="#home" className="hover:text-[#06B6D4] transition-colors font-medium">
              Home
            </a>
            <a href="#about" className="hover:text-[#06B6D4] transition-colors font-medium">
              About
            </a>
            <a href="#experience" className="hover:text-[#06B6D4] transition-colors font-medium">
              Experience
            </a>
            <a href="#skills" className="hover:text-[#06B6D4] transition-colors font-medium">
              Skills
            </a>
            <a href="#projects" className="hover:text-[#06B6D4] transition-colors font-medium">
              Projects
            </a>
            <a href="#education" className="hover:text-[#06B6D4] transition-colors font-medium">
              Education
            </a>
            <a href="#contact" className="hover:text-[#06B6D4] transition-colors font-medium">
              Contact
            </a>
          </div>

        </div>

        {/* Bottom Bar: Copyright & Socials & Back to Top */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs font-mono text-[#A5A0B5]">
          <div className="flex items-center gap-1.5">
            <span>© {currentYear} Hemalatha P. All rights reserved.</span>
          </div>

          {/* Social Icons */}
          <div className="flex items-center gap-3">
            <a
              href={githubLink}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2.5 rounded-xl bg-[#0D081D] text-[#C4B5FD] hover:text-[#06B6D4] hover:bg-cyan-950/40 border border-purple-500/25 hover:border-cyan-400/50 hover:shadow-[0_0_15px_rgba(6,182,212,0.3)] transition-all"
              aria-label="GitHub Profile"
            >
              <GithubIcon className="w-4 h-4" />
            </a>
            <a
              href={linkedinLink}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2.5 rounded-xl bg-[#0D081D] text-[#C4B5FD] hover:text-[#D946EF] hover:bg-fuchsia-950/40 border border-purple-500/25 hover:border-fuchsia-400/50 hover:shadow-[0_0_15px_rgba(217,70,239,0.3)] transition-all"
              aria-label="LinkedIn Profile"
            >
              <LinkedinIcon className="w-4 h-4" />
            </a>
            <a
              href={emailLink}
              className="p-2.5 rounded-xl bg-[#0D081D] text-[#C4B5FD] hover:text-[#10B981] hover:bg-emerald-950/40 border border-purple-500/25 hover:border-emerald-400/50 hover:shadow-[0_0_15px_rgba(16,185,129,0.3)] transition-all"
              aria-label="Email"
            >
              <Mail className="w-4 h-4" />
            </a>

            {/* Back to Top Button */}
            <button
              onClick={scrollToTop}
              className="p-2.5 rounded-xl bg-gradient-to-r from-[#7C3AED] via-[#D946EF] to-[#06B6D4] text-[#F8FAFC] hover:shadow-[0_0_20px_rgba(217,70,239,0.5)] transition-all ml-2 cursor-pointer hover:scale-105"
              aria-label="Scroll back to top"
            >
              <ArrowUp className="w-4 h-4" />
            </button>
          </div>
        </div>
      </div>
    </footer>
  )
}
