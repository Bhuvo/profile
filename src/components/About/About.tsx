import React from "react";
import { FileText, Smartphone, Globe, Zap, CheckCircle2, Bot, Layers } from "lucide-react";
import { personalInfo } from "../../data/personal";
import { socialLinks } from "../../data/social";
import { SectionHeading } from "../UI/SectionHeading";

export const About: React.FC = () => {
  return (
    <section id="about" className="py-24 px-4 sm:px-6 lg:px-8 relative">
      {/* Background ambient glow */}
      <div className="absolute top-1/2 left-0 w-80 h-80 bg-violet-600/10 rounded-full blur-[120px] pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto">
        <SectionHeading
          eyebrow="Profile Overview"
          title="Beyond Code. Building Intelligence."
          subtitle="Transforming ideas into resilient software architectures and intelligent AI systems."
        />

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* LEFT COLUMN: INTRODUCTION & CAREER INTERESTS */}
          <div className="lg:col-span-7 flex flex-col gap-6">
            <div className="p-8 rounded-2xl border border-white/10 bg-[#151528]/70 backdrop-blur-xl shadow-[0_0_30px_rgba(0,0,0,0.3)]">
              <h3 className="text-xl sm:text-2xl font-bold text-white mb-4 flex items-center gap-2.5">
                <span className="w-2.5 h-2.5 rounded-full bg-cyan-400" />
                Architecting Intelligent Products
              </h3>
              <div className="space-y-3 mb-6">
                {personalInfo.aboutIntro.map((paragraph: string, idx: number) => (
                  <p key={idx} className="text-base sm:text-lg text-[#C8C8DC] leading-relaxed font-light">
                    {paragraph}
                  </p>
                ))}
              </div>

              <div className="border-t border-white/10 pt-6">
                <h4 className="text-sm font-semibold tracking-wider text-cyan-300 uppercase mb-4 flex items-center gap-2">
                  <Bot className="w-4 h-4 text-cyan-400" />
                  Target Engineering Roles
                </h4>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {personalInfo.careerInterests.map((interest: string, idx: number) => (
                    <div
                      key={idx}
                      className="flex items-start gap-2.5 text-sm text-[#A1A1B5]"
                    >
                      <CheckCircle2 className="w-4 h-4 text-violet-400 shrink-0 mt-0.5" />
                      <span>{interest}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="mt-8 pt-6 border-t border-white/10 flex flex-wrap items-center justify-between gap-4">
                <a
                  href={socialLinks.resumeUrl}
                  download="bhuvanesh_resume.pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-6 py-3 rounded-xl font-semibold text-white bg-gradient-to-r from-violet-600 to-indigo-600 hover:from-violet-500 hover:to-cyan-500 shadow-[0_0_20px_rgba(139,92,246,0.4)] transition-all duration-300 hover:-translate-y-0.5"
                >
                  <FileText className="w-4 h-4" />
                  <span>Download Complete Resume</span>
                </a>

                <div className="text-xs text-[#A1A1B5] font-mono">
                  Verified Engineering Portfolio
                </div>
              </div>
            </div>
          </div>

          {/* RIGHT COLUMN: VERIFIED STATISTICS CARDS */}
          <div className="lg:col-span-5 flex flex-col gap-5">
            {/* STAT CARD 1: 13+ Flutter Mobile Applications */}
            <div className="group relative p-6 rounded-2xl border border-white/10 bg-[#151528]/80 hover:border-violet-500/50 hover:bg-[#1A1A34] transition-all duration-300 shadow-lg hover:shadow-[0_0_25px_rgba(139,92,246,0.2)]">
              <div className="flex items-center justify-between mb-3">
                <div className="p-3 rounded-xl bg-violet-500/10 border border-violet-500/30 text-violet-400 group-hover:scale-110 transition-transform">
                  <Smartphone className="w-6 h-6" />
                </div>
                <span className="text-3xl sm:text-4xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-violet-400 to-cyan-300 font-mono">
                  13+
                </span>
              </div>
              <h4 className="text-lg font-bold text-white mb-1">
                Flutter Mobile Applications
              </h4>
              <p className="text-xs sm:text-sm text-[#A1A1B5] leading-relaxed">
                Shipped production-ready mobile apps across healthcare, social, and fintech domains with smooth 60fps animations.
              </p>
            </div>

            {/* STAT CARD 2: 3 Flutter Websites Built */}
            <div className="group relative p-6 rounded-2xl border border-white/10 bg-[#151528]/80 hover:border-indigo-500/50 hover:bg-[#1A1A34] transition-all duration-300 shadow-lg hover:shadow-[0_0_25px_rgba(99,102,241,0.2)]">
              <div className="flex items-center justify-between mb-3">
                <div className="p-3 rounded-xl bg-indigo-500/10 border border-indigo-500/30 text-indigo-400 group-hover:scale-110 transition-transform">
                  <Globe className="w-6 h-6" />
                </div>
                <span className="text-3xl sm:text-4xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 to-cyan-300 font-mono">
                  3
                </span>
              </div>
              <h4 className="text-lg font-bold text-white mb-1">
                Flutter Web Platforms
              </h4>
              <p className="text-xs sm:text-sm text-[#A1A1B5] leading-relaxed">
                Delivered full-scale responsive web applications featuring real-time data sync and interactive management portals.
              </p>
            </div>

            {/* STAT CARD 3: Superbill Navigation Optimization */}
            <div className="group relative p-6 rounded-2xl border border-white/10 bg-[#151528]/80 hover:border-cyan-400/50 hover:bg-[#1A1A34] transition-all duration-300 shadow-lg hover:shadow-[0_0_25px_rgba(34,211,238,0.2)]">
              <div className="flex items-center justify-between mb-3">
                <div className="p-3 rounded-xl bg-cyan-500/10 border border-cyan-500/30 text-cyan-400 group-hover:scale-110 transition-transform">
                  <Zap className="w-6 h-6" />
                </div>
                <div className="text-right">
                  <span className="text-2xl sm:text-3xl font-extrabold text-cyan-300 font-mono">
                    98 ms
                  </span>
                  <div className="text-[11px] text-[#A1A1B5] line-through">from ~1000ms</div>
                </div>
              </div>
              <h4 className="text-lg font-bold text-white mb-1">
                Superbill Navigation Optimization
              </h4>
              <p className="text-xs sm:text-sm text-[#A1A1B5] leading-relaxed">
                Overhauled template menu navigation through state memoization and isolate threading, achieving over 90% latency reduction.
              </p>
            </div>

            {/* STAT CARD 4: Cross-Stack Fluency */}
            <div className="group relative p-6 rounded-2xl border border-white/10 bg-[#151528]/80 hover:border-purple-500/50 hover:bg-[#1A1A34] transition-all duration-300 shadow-lg hover:shadow-[0_0_25px_rgba(168,85,247,0.2)]">
              <div className="flex items-center justify-between mb-3">
                <div className="p-3 rounded-xl bg-purple-500/10 border border-purple-500/30 text-purple-400 group-hover:scale-110 transition-transform">
                  <Layers className="w-6 h-6" />
                </div>
                <span className="text-xl sm:text-2xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-300 font-mono">
                  Full Stack + AI
                </span>
              </div>
              <h4 className="text-lg font-bold text-white mb-1">
                End-to-End System Engineering
              </h4>
              <p className="text-xs sm:text-sm text-[#A1A1B5] leading-relaxed">
                Seamlessly connecting Flutter clients with Python FastAPI backends, vector embeddings, and autonomous voice AI agents.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
