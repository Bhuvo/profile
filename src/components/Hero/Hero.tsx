import React, { useState, useEffect } from "react";
import {
  ArrowDown,
  FileText,
  Send,
  Sparkles,
  Mail,
  Phone,
  Code,
  Terminal,
  Bot,
  Check,
  Zap,
  Smartphone,
  Cpu
} from "lucide-react";
import { GithubIcon, LinkedinIcon } from "../UI/Icons";
import { personalInfo } from "../../data/personal";
import { socialLinks } from "../../data/social";
import { AIOrbCanvas } from "./AIOrbCanvas";
import { Toast } from "../UI/Toast";

const dynamicPhrases = [
  "Architecting Intelligent Applications & Autonomous AI Systems",
  "Fine-Tuning LLMs, Vector Embeddings & RAG Pipelines",
  "Engineering Production 60 FPS Flutter Mobile Applications",
  "Optimizing Enterprise Systems from ~1000ms to 98ms Latency"
];

const quickHighlights = [
  { value: "13+", label: "Flutter Mobile Apps", icon: <Smartphone className="w-4 h-4 text-violet-400" /> },
  { value: "98ms", label: "Superbill Latency", icon: <Zap className="w-4 h-4 text-cyan-400" />, sub: "from ~1000ms" },
  { value: "94%", label: "Voice AI Call Resolution", icon: <Bot className="w-4 h-4 text-emerald-400" /> },
  { value: "92%", label: "RAG Retrieval Accuracy", icon: <Cpu className="w-4 h-4 text-pink-400" /> },
  { value: "8.5", label: "CGPA B.Tech Distinction", icon: <Sparkles className="w-4 h-4 text-amber-400" /> }
];

export const Hero: React.FC = () => {
  const [phraseIndex, setPhraseIndex] = useState(0);
  const [toastMessage, setToastMessage] = useState("");
  const [toastOpen, setToastOpen] = useState(false);
  const [copiedType, setCopiedType] = useState<"email" | "phone" | null>(null);

  useEffect(() => {
    const interval = setInterval(() => {
      setPhraseIndex((prev) => (prev + 1) % dynamicPhrases.length);
    }, 3800);
    return () => clearInterval(interval);
  }, []);

  const triggerToast = (msg: string) => {
    setToastMessage(msg);
    setToastOpen(true);
    setTimeout(() => setToastOpen(false), 3000);
  };

  const copyToClipboard = (text: string, type: "email" | "phone") => {
    navigator.clipboard.writeText(text);
    setCopiedType(type);
    triggerToast(`Copied ${type === "email" ? "Email" : "Phone"} to clipboard!`);
    setTimeout(() => setCopiedType(null), 2500);
  };

  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center justify-center pt-24 pb-16 px-4 sm:px-6 lg:px-8 overflow-hidden"
    >
      <Toast
        isOpen={toastOpen}
        message={toastMessage}
        onClose={() => setToastOpen(false)}
      />

      {/* Background ambient lighting accents */}
      <div className="absolute top-1/4 left-1/10 w-[500px] h-[500px] bg-violet-600/15 rounded-full blur-[140px] pointer-events-none -z-10" />
      <div className="absolute top-1/3 right-1/10 w-[500px] h-[500px] bg-cyan-500/15 rounded-full blur-[140px] pointer-events-none -z-10" />
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 w-[700px] h-56 bg-indigo-600/10 rounded-full blur-[130px] pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto w-full grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
        {/* LEFT COLUMN: HERO CONTENT */}
        <div className="lg:col-span-7 flex flex-col items-start text-left z-10">
          {/* Cyber Telemetry Header Pill */}
          <div className="flex flex-wrap items-center gap-2 mb-6">
            <div className="inline-flex items-center gap-2.5 px-3.5 py-1.5 rounded-full border border-emerald-500/30 bg-emerald-500/10 text-emerald-300 text-xs font-semibold tracking-wider uppercase backdrop-blur-md shadow-[0_0_20px_rgba(16,185,129,0.15)]">
              <span className="relative flex h-2.5 w-2.5">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
                <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-emerald-500" />
              </span>
              <span>{personalInfo.status}</span>
            </div>

            <div className="hidden sm:inline-flex items-center gap-1.5 px-3 py-1 rounded-full border border-white/10 bg-white/5 text-[11px] font-mono text-[#A1A1B5]">
              <span className="text-cyan-400">LATENCY:</span> 98ms
            </div>
          </div>

          {/* Main Headline */}
          <h1 className="text-4xl sm:text-5xl md:text-6xl xl:text-7xl font-extrabold tracking-tight leading-[1.08] mb-4">
            Engineering{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-violet-400 via-indigo-400 to-cyan-300 drop-shadow-[0_0_30px_rgba(139,92,246,0.45)]">
              Intelligence.
            </span>
            <br />
            Building the{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-300 via-teal-300 to-indigo-300 drop-shadow-[0_0_30px_rgba(34,211,238,0.45)]">
              Future.
            </span>
          </h1>

          {/* Dynamic Cycling Specialty Subtitle */}
          <div className="h-8 sm:h-7 mb-4 flex items-center overflow-hidden">
            <div
              key={phraseIndex}
              className="text-xs sm:text-sm md:text-base font-mono text-cyan-300 font-semibold flex items-center gap-2 animate-in fade-in slide-in-from-bottom-2 duration-300"
            >
              <Terminal className="w-4 h-4 text-violet-400 shrink-0" />
              <span>{dynamicPhrases[phraseIndex]}</span>
            </div>
          </div>

          {/* Supporting Description */}
          <p className="text-base sm:text-lg text-[#C8C8DC] leading-relaxed max-w-2xl mb-6 font-light">
            {personalInfo.heroDescription}
          </p>

          {/* Professional Labels */}
          <div className="flex flex-wrap items-center gap-2 mb-8">
            <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-xl text-xs font-semibold bg-violet-500/10 border border-violet-500/30 text-violet-300 hover:border-violet-400/60 transition-colors">
              <Code className="w-3.5 h-3.5 text-violet-400" />
              Software Developer
            </span>
            <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-xl text-xs font-semibold bg-cyan-500/10 border border-cyan-500/30 text-cyan-300 hover:border-cyan-400/60 transition-colors">
              <Bot className="w-3.5 h-3.5 text-cyan-400" />
              AI Engineer
            </span>
            <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-xl text-xs font-semibold bg-indigo-500/10 border border-indigo-500/30 text-indigo-300 hover:border-indigo-400/60 transition-colors">
              <Sparkles className="w-3.5 h-3.5 text-indigo-400" />
              GenAI Enthusiast
            </span>
            <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-xl text-xs font-semibold bg-pink-500/10 border border-pink-500/30 text-pink-300 hover:border-pink-400/60 transition-colors">
              <Terminal className="w-3.5 h-3.5 text-pink-400" />
              Flutter Specialist
            </span>
          </div>

          {/* CTA Buttons with Shimmer Light Reflection */}
          <div className="flex flex-wrap items-center gap-3.5 mb-8 w-full sm:w-auto">
            {/* Button 1: Explore My Work */}
            <a
              href="#projects"
              className="group relative w-full sm:w-auto text-center px-6 py-3.5 rounded-xl font-semibold text-white bg-gradient-to-r from-violet-600 via-indigo-600 to-cyan-500 hover:from-violet-500 hover:to-cyan-400 shadow-[0_0_30px_rgba(139,92,246,0.45)] hover:shadow-[0_0_40px_rgba(34,211,238,0.65)] hover:-translate-y-0.5 transition-all duration-300 overflow-hidden"
            >
              <span className="relative z-10 flex items-center justify-center gap-2">
                <span>Explore My Work</span>
                <span className="text-cyan-200">→</span>
              </span>
              <div className="absolute inset-0 -translate-x-full group-hover:translate-x-full transition-transform duration-1000 bg-gradient-to-r from-transparent via-white/20 to-transparent" />
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
              <span className="text-[10px] font-mono px-1.5 py-0.5 rounded bg-white/10 text-cyan-300">
                PDF
              </span>
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

          {/* Quick Floating Metrics Bar */}
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-2.5 w-full mb-8 pt-4 border-t border-white/10">
            {quickHighlights.map((stat, idx) => (
              <div
                key={idx}
                className="p-2.5 rounded-xl bg-[#121226]/80 border border-white/5 hover:border-violet-500/30 transition-all text-center flex flex-col items-center justify-center"
              >
                <div className="flex items-center gap-1.5 mb-1">
                  {stat.icon}
                  <span className="font-mono text-base font-bold text-white">
                    {stat.value}
                  </span>
                </div>
                <div className="text-[10px] text-[#A1A1B5] font-medium leading-tight">
                  {stat.label}
                </div>
                {stat.sub && (
                  <div className="text-[9px] font-mono text-cyan-400/80 mt-0.5">
                    {stat.sub}
                  </div>
                )}
              </div>
            ))}
          </div>

          {/* Social Links & One-Click Contact Copy */}
          <div className="flex flex-wrap items-center justify-between gap-4 pt-4 border-t border-white/10 w-full">
            <div className="flex items-center gap-3">
              <span className="text-xs uppercase tracking-wider text-[#A1A1B5] font-semibold">
                Profiles:
              </span>
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
            </div>

            {/* Quick Copy Direct Contacts */}
            <div className="flex items-center gap-2">
              <button
                onClick={() => copyToClipboard(socialLinks.email, "email")}
                className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl text-xs font-mono text-[#A1A1B5] bg-white/5 border border-white/10 hover:border-cyan-400/40 hover:text-cyan-300 transition-all cursor-pointer"
                title="Click to copy email address"
              >
                {copiedType === "email" ? (
                  <Check className="w-3.5 h-3.5 text-emerald-400" />
                ) : (
                  <Mail className="w-3.5 h-3.5 text-cyan-400" />
                )}
                <span>Email</span>
              </button>

              <button
                onClick={() => copyToClipboard(socialLinks.phone, "phone")}
                className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl text-xs font-mono text-[#A1A1B5] bg-white/5 border border-white/10 hover:border-violet-400/40 hover:text-violet-300 transition-all cursor-pointer"
                title="Click to copy phone number"
              >
                {copiedType === "phone" ? (
                  <Check className="w-3.5 h-3.5 text-emerald-400" />
                ) : (
                  <Phone className="w-3.5 h-3.5 text-violet-400" />
                )}
                <span>Phone</span>
              </button>
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
