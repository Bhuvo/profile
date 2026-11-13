import React from "react";
import { ArrowDown, FileText, Send, Sparkles, Mail, Code, Terminal, Bot } from "lucide-react";
import { GithubIcon, LinkedinIcon } from "../UI/Icons";
import { personalInfo } from "../../data/personal";
import { socialLinks } from "../../data/social";
import { AIOrbCanvas } from "./AIOrbCanvas";

export const Hero: React.FC = () => {
  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center justify-center pt-24 pb-16 px-4 sm:px-6 lg:px-8 overflow-hidden"
    >
      {/* Background ambient lighting accents */}
      <div className="absolute top-1/4 left-1/10 w-96 h-96 bg-violet-600/15 rounded-full blur-[130px] pointer-events-none -z-10" />
      <div className="absolute top-1/3 right-1/10 w-96 h-96 bg-cyan-500/15 rounded-full blur-[130px] pointer-events-none -z-10" />
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 w-[600px] h-48 bg-indigo-600/10 rounded-full blur-[120px] pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto w-full grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
        {/* LEFT COLUMN: HERO CONTENT */}
        <div className="lg:col-span-7 flex flex-col items-start text-left z-10">
          {/* Status Indicator */}
          <div className="inline-flex items-center gap-2.5 px-3.5 py-1.5 rounded-full border border-emerald-500/30 bg-emerald-500/10 text-emerald-300 text-xs font-semibold tracking-wider uppercase mb-6 backdrop-blur-md shadow-[0_0_20px_rgba(16,185,129,0.15)]">
            <span className="relative flex h-2.5 w-2.5">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
              <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-emerald-500" />
            </span>
            <span>{personalInfo.status}</span>
          </div>

          {/* Main Headline */}
          <h1 className="text-4xl sm:text-5xl md:text-6xl xl:text-7xl font-extrabold tracking-tight leading-[1.1] mb-6">
            Engineering{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-violet-400 via-indigo-400 to-cyan-300 drop-shadow-[0_0_25px_rgba(139,92,246,0.35)]">
              Intelligence.
            </span>
            <br />
            Building the{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-300 via-teal-300 to-indigo-300 drop-shadow-[0_0_25px_rgba(34,211,238,0.35)]">
              Future.
            </span>
          </h1>

          {/* Supporting Description */}
          <p className="text-base sm:text-lg md:text-xl text-[#A1A1B5] leading-relaxed max-w-2xl mb-6">
            {personalInfo.heroDescription}
          </p>

          {/* Professional Labels */}
          <div className="flex flex-wrap items-center gap-2.5 mb-8">
            <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-lg text-xs font-semibold bg-violet-500/10 border border-violet-500/30 text-violet-300">
              <Code className="w-3.5 h-3.5 text-violet-400" />
              Software Developer
            </span>
            <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-lg text-xs font-semibold bg-cyan-500/10 border border-cyan-500/30 text-cyan-300">
              <Bot className="w-3.5 h-3.5 text-cyan-400" />
              AI Engineer
            </span>
            <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-lg text-xs font-semibold bg-indigo-500/10 border border-indigo-500/30 text-indigo-300">
              <Sparkles className="w-3.5 h-3.5 text-indigo-400" />
              GenAI Enthusiast
            </span>
            <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-lg text-xs font-semibold bg-pink-500/10 border border-pink-500/30 text-pink-300">
              <Terminal className="w-3.5 h-3.5 text-pink-400" />
              Flutter Specialist
            </span>
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-wrap items-center gap-4 mb-10 w-full sm:w-auto">
            {/* Button 1: Explore My Work */}
            <a
              href="#projects"
              className="w-full sm:w-auto text-center px-6 py-3.5 rounded-xl font-semibold text-white bg-gradient-to-r from-violet-600 to-indigo-600 hover:from-violet-500 hover:to-indigo-500 shadow-[0_0_25px_rgba(139,92,246,0.45)] hover:shadow-[0_0_35px_rgba(139,92,246,0.65)] hover:-translate-y-0.5 transition-all duration-300"
            >
              Explore My Work
            </a>

            {/* Button 2: Download Resume */}
            <a
              href={socialLinks.resumeUrl}
              download="bhuvanesh_resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto text-center inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl font-semibold text-white border border-white/15 bg-[#151528]/80 hover:bg-[#1C1C35] hover:border-cyan-400/50 shadow-md hover:-translate-y-0.5 transition-all duration-300"
            >
              <FileText className="w-4 h-4 text-cyan-400" />
              <span>Download Resume</span>
            </a>

            {/* Button 3: Let's Connect */}
            <a
              href="#contact"
              className="w-full sm:w-auto text-center inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl font-semibold text-cyan-300 border border-cyan-500/30 bg-cyan-500/10 hover:bg-cyan-500/20 hover:border-cyan-400/60 transition-all duration-300"
            >
              <Send className="w-4 h-4" />
              <span>Let's Connect</span>
            </a>
          </div>

          {/* Social Links */}
          <div className="flex items-center gap-4 pt-4 border-t border-white/10 w-full">
            <span className="text-xs uppercase tracking-wider text-[#A1A1B5] font-semibold">
              Find me on:
            </span>
            <div className="flex items-center gap-3">
              <a
                href={socialLinks.github}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="GitHub Profile"
                className="p-2.5 rounded-xl border border-white/10 bg-[#151528]/80 text-[#A1A1B5] hover:text-white hover:border-violet-500/50 hover:bg-[#1F1F3D] transition-all"
              >
                <GithubIcon className="w-4 h-4" />
              </a>
              <a
                href={socialLinks.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn Profile"
                className="p-2.5 rounded-xl border border-white/10 bg-[#151528]/80 text-[#A1A1B5] hover:text-white hover:border-cyan-500/50 hover:bg-[#1F1F3D] transition-all"
              >
                <LinkedinIcon className="w-4 h-4" />
              </a>
              <a
                href={`mailto:${socialLinks.email}`}
                aria-label="Email Bhuvaneswaran"
                className="p-2.5 rounded-xl border border-white/10 bg-[#151528]/80 text-[#A1A1B5] hover:text-white hover:border-indigo-500/50 hover:bg-[#1F1F3D] transition-all"
              >
                <Mail className="w-4 h-4" />
              </a>
            </div>
            <div className="hidden sm:block ml-auto text-xs text-[#A1A1B5] font-mono">
              <span className="text-cyan-400">loc:</span> Chennai, India
            </div>
          </div>
        </div>

        {/* RIGHT COLUMN: 3D AI INTERACTIVE ORB */}
        <div className="lg:col-span-5 flex items-center justify-center relative">
          <AIOrbCanvas />
        </div>
      </div>

      {/* Subtle Scroll Down Indicator */}
      <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex flex-col items-center gap-1.5 text-xs text-[#A1A1B5] pointer-events-none opacity-80">
        <span className="text-[11px] font-mono tracking-widest uppercase">Scroll</span>
        <ArrowDown className="w-4 h-4 text-cyan-400 animate-bounce" />
      </div>
    </section>
  );
};
