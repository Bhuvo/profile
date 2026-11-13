import React, { useState, useEffect } from "react";
import { Menu, X, FileText } from "lucide-react";
import { GithubIcon, LinkedinIcon } from "../UI/Icons";
import { socialLinks } from "../../data/social";

const navItems = [
  { label: "Home", href: "#hero" },
  { label: "About", href: "#about" },
  { label: "Experience", href: "#experience" },
  { label: "Skills", href: "#skills" },
  { label: "Projects", href: "#projects" },
  { label: "Highlights", href: "#highlights" },
  { label: "Education", href: "#education" },
  { label: "Contact", href: "#contact" }
];

export const Navbar: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState("hero");
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 40);

      // Determine active section
      const sections = navItems.map((item) => item.href.substring(1));
      const scrollPos = window.scrollY + 200;

      for (let i = sections.length - 1; i >= 0; i--) {
        const section = document.getElementById(sections[i]);
        if (section && section.offsetTop <= scrollPos) {
          setActiveSection(sections[i]);
          break;
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
        isScrolled
          ? "bg-[#080812]/80 backdrop-blur-xl border-b border-white/10 shadow-[0_4px_30px_rgba(0,0,0,0.5)] py-3"
          : "bg-transparent py-5"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
        {/* Brand Logo */}
        <a
          href="#hero"
          className="group flex items-center gap-2.5 font-bold text-lg md:text-xl tracking-wider text-white transition-all duration-300"
        >
          <div className="w-9 h-9 rounded-xl bg-gradient-to-tr from-violet-600 via-indigo-600 to-cyan-400 p-[1.5px] shadow-[0_0_15px_rgba(139,92,246,0.4)] group-hover:shadow-[0_0_25px_rgba(34,211,238,0.6)] transition-all duration-300">
            <div className="w-full h-full bg-[#0D0D1E] rounded-[10px] flex items-center justify-center">
              <span className="font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-violet-400 to-cyan-300 text-sm">
                BS
              </span>
            </div>
          </div>
          <span className="font-mono font-semibold tracking-widest text-white group-hover:text-cyan-300 transition-colors">
            BHUVANESWARAN<span className="text-violet-400">.S</span>
          </span>
        </a>

        {/* Desktop Nav Links */}
        <nav className="hidden lg:flex items-center gap-1 xl:gap-2 px-3 py-1.5 rounded-full border border-white/5 bg-[#151528]/50 backdrop-blur-md">
          {navItems.map((item) => {
            const isActive = activeSection === item.href.substring(1);
            return (
              <a
                key={item.href}
                href={item.href}
                className={`relative px-3.5 py-1.5 rounded-full text-xs xl:text-sm font-medium transition-all duration-200 ${
                  isActive
                    ? "text-white font-semibold"
                    : "text-[#A1A1B5] hover:text-white hover:bg-white/5"
                }`}
              >
                {isActive && (
                  <span className="absolute inset-0 rounded-full bg-gradient-to-r from-violet-600/30 to-cyan-500/30 border border-violet-500/50 shadow-[0_0_12px_rgba(139,92,246,0.3)] -z-10" />
                )}
                {item.label}
              </a>
            );
          })}
        </nav>

        {/* Right Action Icons & Resume */}
        <div className="hidden md:flex items-center gap-3">
          <a
            href={socialLinks.github}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="GitHub Profile"
            className="p-2 rounded-lg border border-white/10 bg-[#151528]/60 text-[#A1A1B5] hover:text-white hover:border-violet-500/50 hover:bg-[#1A1A32] transition-all duration-200"
          >
            <GithubIcon className="w-4 h-4" />
          </a>
          <a
            href={socialLinks.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn Profile"
            className="p-2 rounded-lg border border-white/10 bg-[#151528]/60 text-[#A1A1B5] hover:text-white hover:border-cyan-500/50 hover:bg-[#1A1A32] transition-all duration-200"
          >
            <LinkedinIcon className="w-4 h-4" />
          </a>
          <a
            href={socialLinks.resumeUrl}
            download="bhuvanesh_resume.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="group relative inline-flex items-center gap-2 px-4 py-2 rounded-xl text-xs xl:text-sm font-semibold text-white bg-gradient-to-r from-violet-600 to-indigo-600 hover:from-violet-500 hover:to-cyan-500 shadow-[0_0_20px_rgba(139,92,246,0.4)] hover:shadow-[0_0_25px_rgba(34,211,238,0.5)] transition-all duration-300"
          >
            <FileText className="w-3.5 h-3.5" />
            <span>Resume</span>
            <span className="inline-block w-1.5 h-1.5 rounded-full bg-cyan-300 animate-ping" />
          </a>
        </div>

        {/* Mobile Hamburger Button */}
        <div className="flex md:hidden items-center gap-2">
          <a
            href={socialLinks.resumeUrl}
            download="bhuvanesh_resume.pdf"
            className="px-3 py-1.5 rounded-lg text-xs font-semibold text-white bg-violet-600/80 border border-violet-400/40"
          >
            Resume
          </a>
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle Navigation Menu"
            className="p-2 rounded-lg border border-white/10 bg-[#151528]/80 text-[#A1A1B5] hover:text-white focus:outline-none"
          >
            {mobileMenuOpen ? <X className="w-5 h-5 text-cyan-400" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden border-b border-white/10 bg-[#0A0A18]/95 backdrop-blur-2xl px-6 py-6 transition-all duration-300">
          <div className="flex flex-col gap-2">
            {navItems.map((item) => {
              const isActive = activeSection === item.href.substring(1);
              return (
                <a
                  key={item.href}
                  href={item.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className={`px-4 py-2.5 rounded-xl text-sm font-medium transition-all ${
                    isActive
                      ? "bg-violet-600/20 text-cyan-300 border border-violet-500/40 font-semibold"
                      : "text-[#A1A1B5] hover:text-white hover:bg-white/5"
                  }`}
                >
                  {item.label}
                </a>
              );
            })}
          </div>

          <div className="pt-6 mt-4 border-t border-white/10 flex items-center justify-between">
            <div className="flex items-center gap-3">
              <a
                href={socialLinks.github}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2.5 rounded-xl border border-white/10 bg-[#151528] text-white"
              >
                <GithubIcon className="w-4 h-4" />
              </a>
              <a
                href={socialLinks.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2.5 rounded-xl border border-white/10 bg-[#151528] text-white"
              >
                <LinkedinIcon className="w-4 h-4" />
              </a>
            </div>
            <a
              href={socialLinks.resumeUrl}
              download="bhuvanesh_resume.pdf"
              className="inline-flex items-center gap-2 px-4 py-2 rounded-xl text-xs font-semibold bg-gradient-to-r from-violet-600 to-cyan-500 text-white shadow-lg"
            >
              <FileText className="w-3.5 h-3.5" />
              <span>Download PDF</span>
            </a>
          </div>
        </div>
      )}
    </header>
  );
};
