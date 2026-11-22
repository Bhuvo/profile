import React, { useState } from "react";
import {
  FileText,
  Smartphone,
  Globe,
  Zap,
  CheckCircle2,
  Bot,
  Layers,
  Terminal,
  Compass
} from "lucide-react";
import { personalInfo } from "../../data/personal";
import { socialLinks } from "../../data/social";
import { SectionHeading } from "../UI/SectionHeading";
import { SpotlightCard } from "../UI/SpotlightCard";

export const About: React.FC = () => {
  const [activeTab, setActiveTab] = useState<"narrative" | "terminal">("narrative");

  return (
    <section id="about" className="py-24 px-4 sm:px-6 lg:px-8 relative">
      {/* Background ambient glow */}
      <div className="absolute top-1/2 left-0 w-80 h-80 bg-violet-600/10 rounded-full blur-[140px] pointer-events-none -z-10" />
      <div className="absolute bottom-10 right-0 w-80 h-80 bg-cyan-500/10 rounded-full blur-[140px] pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto">
        <SectionHeading
          eyebrow="Profile Overview"
          title="Beyond Code. Building Intelligence."
          subtitle="Transforming ideas into resilient software architectures and intelligent AI systems."
        />

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-stretch">
          {/* LEFT COLUMN: INTERACTIVE STORY & TERMINAL */}
          <div className="lg:col-span-7 flex flex-col">
            <SpotlightCard className="h-full p-7 sm:p-8 flex flex-col justify-between">
              <div>
                {/* Mode Selector Tabs */}
                <div className="flex items-center justify-between mb-6 pb-4 border-b border-white/10">
                  <div className="flex items-center gap-2">
                    <button
                      onClick={() => setActiveTab("narrative")}
                      className={`flex items-center gap-2 px-3.5 py-1.5 rounded-xl text-xs sm:text-sm font-semibold transition-all cursor-pointer ${
                        activeTab === "narrative"
                          ? "bg-gradient-to-r from-violet-600 to-indigo-600 text-white shadow-md shadow-violet-600/30"
                          : "text-[#A1A1B5] hover:text-white bg-white/5"
                      }`}
                    >
                      <Compass className="w-3.5 h-3.5" />
                      <span>Engineering Story</span>
                    </button>

                    <button
                      onClick={() => setActiveTab("terminal")}
                      className={`flex items-center gap-2 px-3.5 py-1.5 rounded-xl text-xs sm:text-sm font-semibold transition-all cursor-pointer ${
                        activeTab === "terminal"
                          ? "bg-gradient-to-r from-violet-600 to-cyan-500 text-white shadow-md shadow-cyan-600/30"
                          : "text-[#A1A1B5] hover:text-white bg-white/5"
                      }`}
                    >
                      <Terminal className="w-3.5 h-3.5" />
                      <span>Architecture Terminal</span>
                    </button>
                  </div>

                  <span className="text-[11px] font-mono text-cyan-400 hidden sm:inline">
                    STATUS: READY
                  </span>
                </div>

                {activeTab === "narrative" ? (
                  <div className="space-y-4 animate-in fade-in duration-300">
                    <h3 className="text-xl sm:text-2xl font-bold text-white mb-2 flex items-center gap-2.5">
                      <span className="w-2.5 h-2.5 rounded-full bg-cyan-400 animate-pulse" />
                      Architecting Practical &amp; Intelligent Products
                    </h3>

                    {personalInfo.aboutIntro.map((paragraph: string, idx: number) => (
                      <p
                        key={idx}
                        className="text-sm sm:text-base text-[#C8C8DC] leading-relaxed font-light"
                      >
                        {paragraph}
                      </p>
                    ))}
                  </div>
                ) : (
                  <div className="p-4 rounded-xl bg-[#080814] border border-white/10 font-mono text-xs sm:text-sm text-cyan-300 space-y-2.5 animate-in fade-in duration-300">
                    <div className="flex items-center justify-between pb-2 border-b border-white/10 text-xs text-[#A1A1B5]">
                      <div className="flex items-center gap-1.5">
                        <span className="w-2.5 h-2.5 rounded-full bg-rose-500" />
                        <span className="w-2.5 h-2.5 rounded-full bg-amber-500" />
                        <span className="w-2.5 h-2.5 rounded-full bg-emerald-500" />
                      </div>
                      <span>bash // bhuvanesh-core</span>
                    </div>

                    <div className="text-violet-400">
                      $ curl -s https://api.bhuvanesh.dev/v1/stack-profile
                    </div>
                    <div className="text-[#A1A1B5]">
                      {`{`}
                      <br />
                      &nbsp;&nbsp;<span className="text-cyan-300">"engineer"</span>: "Bhuvaneswaran S",
                      <br />
                      &nbsp;&nbsp;<span className="text-cyan-300">"experience"</span>: "3+ years production",
                      <br />
                      &nbsp;&nbsp;<span className="text-cyan-300">"shipped_mobile_apps"</span>: "13+ Flutter clients",
                      <br />
                      &nbsp;&nbsp;<span className="text-cyan-300">"key_benchmark"</span>: "Superbill nav ~1000ms &rarr; 98ms",
                      <br />
                      &nbsp;&nbsp;<span className="text-cyan-300">"ai_systems"</span>: ["Autonomous Voice Caller (94%)", "RAG Pipeline (92%)", "Code Reviewer"]
                      <br />
                      {`}`}
                    </div>
                    <div className="text-emerald-400">
                      ✓ System diagnostics passed. All services online.
                    </div>
                  </div>
                )}

                {/* Target Engineering Roles */}
                <div className="border-t border-white/10 pt-6 mt-6">
                  <h4 className="text-xs font-mono font-bold tracking-wider text-cyan-300 uppercase mb-3.5 flex items-center gap-2">
                    <Bot className="w-4 h-4 text-cyan-400" />
                    Target Engineering Roles
                  </h4>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                    {personalInfo.careerInterests.map((interest: string, idx: number) => (
                      <div
                        key={idx}
                        className="flex items-center gap-2.5 text-xs sm:text-sm text-[#C8C8DC] p-2 rounded-xl bg-white/5 border border-white/5 hover:border-violet-500/30 transition-all"
                      >
                        <CheckCircle2 className="w-4 h-4 text-cyan-400 shrink-0" />
                        <span>{interest}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="mt-8 pt-6 border-t border-white/10 flex flex-wrap items-center justify-between gap-4">
                <a
                  href={socialLinks.resumeUrl}
                  download="bhuvanesh_resume.pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-6 py-3 rounded-xl font-semibold text-white bg-gradient-to-r from-violet-600 via-indigo-600 to-cyan-500 hover:from-violet-500 hover:to-cyan-400 shadow-[0_0_20px_rgba(139,92,246,0.4)] transition-all duration-300 hover:-translate-y-0.5"
                >
                  <FileText className="w-4 h-4" />
                  <span>Download Verified Resume</span>
                </a>

                <div className="text-xs text-[#A1A1B5] font-mono">
                  Verified Engineering Experience
                </div>
              </div>
            </SpotlightCard>
          </div>

          {/* RIGHT COLUMN: SPOTLIGHT STAT CARDS */}
          <div className="lg:col-span-5 flex flex-col gap-4">
            {/* STAT CARD 1: 13+ Flutter Mobile Applications */}
            <SpotlightCard
              spotlightColor="rgba(139, 92, 246, 0.25)"
              className="p-6"
            >
              <div className="flex items-center justify-between mb-3">
                <div className="p-3 rounded-xl bg-violet-500/10 border border-violet-500/30 text-violet-400">
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
                Shipped 13+ production-ready mobile apps across healthcare, social, and fintech domains with smooth 60fps animations.
              </p>
            </SpotlightCard>

            {/* STAT CARD 2: 3 Flutter Websites Built */}
            <SpotlightCard
              spotlightColor="rgba(99, 102, 241, 0.25)"
              className="p-6"
            >
              <div className="flex items-center justify-between mb-3">
                <div className="p-3 rounded-xl bg-indigo-500/10 border border-indigo-500/30 text-indigo-400">
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
            </SpotlightCard>

            {/* STAT CARD 3: Superbill Navigation Optimization */}
            <SpotlightCard
              spotlightColor="rgba(34, 211, 238, 0.25)"
              className="p-6 border-cyan-500/30"
            >
              <div className="flex items-center justify-between mb-3">
                <div className="p-3 rounded-xl bg-cyan-500/10 border border-cyan-500/30 text-cyan-400">
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
            </SpotlightCard>

            {/* STAT CARD 4: Cross-Stack Fluency */}
            <SpotlightCard
              spotlightColor="rgba(236, 72, 153, 0.25)"
              className="p-6"
            >
              <div className="flex items-center justify-between mb-3">
                <div className="p-3 rounded-xl bg-pink-500/10 border border-pink-500/30 text-pink-400">
                  <Layers className="w-6 h-6" />
                </div>
                <span className="text-xl sm:text-2xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-pink-400 to-violet-300 font-mono">
                  Full Stack + AI
                </span>
              </div>
              <h4 className="text-lg font-bold text-white mb-1">
                End-to-End System Engineering
              </h4>
              <p className="text-xs sm:text-sm text-[#A1A1B5] leading-relaxed">
                Seamlessly connecting Flutter clients with Python FastAPI backends, vector embeddings, and autonomous voice AI agents.
              </p>
            </SpotlightCard>
          </div>
        </div>
      </div>
    </section>
  );
};
