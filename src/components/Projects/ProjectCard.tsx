import React from 'react'
import { motion } from 'framer-motion'
import { ArrowRight, CheckCircle2, Sparkles, Terminal, Activity, Layers, Globe, ShieldCheck, ExternalLink } from 'lucide-react'
import { GithubIcon } from '../UI/Icons'
import type { ProjectItem } from '../../types'

interface ProjectCardProps {
  project: ProjectItem
  onSelect: (project: ProjectItem) => void
  index: number
}

export const ProjectCard: React.FC<ProjectCardProps> = ({ project, onSelect, index }) => {
  // Custom futuristic visual preview tailored to each project
  const renderProjectVisual = () => {
    switch (project.id) {
      case 'jobify':
        return (
          <div className="h-48 w-full bg-gradient-to-br from-[#101026] to-[#181832] p-5 flex flex-col justify-between border-b border-white/5 relative overflow-hidden group">
            {/* Background cyber accent */}
            <div className="absolute -top-10 -right-10 w-40 h-40 bg-purple-600/15 rounded-full blur-2xl group-hover:scale-125 transition-transform" />
            <div className="flex items-center justify-between z-10">
              <span className="text-[11px] font-mono text-purple-300 bg-purple-950/60 px-2.5 py-1 rounded border border-purple-500/30">
                JOBIFY // AI ATS ENGINE
              </span>
              <span className="text-xs font-mono text-emerald-400 font-bold bg-emerald-950/40 px-2 py-0.5 rounded border border-emerald-500/30">
                MATCH: 96%
              </span>
            </div>
            <div className="z-10 space-y-2">
              <div className="flex items-center gap-2">
                <div className="w-8 h-8 rounded-lg bg-purple-600/20 border border-purple-500/40 flex items-center justify-center text-xs font-bold text-cyan-300">
                  ATS
                </div>
                <div>
                  <div className="text-xs font-semibold text-white">Semantic Resume Parser</div>
                  <div className="text-[10px] font-mono text-[#A1A1B5]">13 Comprehensive Sections · OpenAI Embeddings</div>
                </div>
              </div>
              <div className="h-1.5 w-full bg-white/5 rounded-full overflow-hidden">
                <div className="h-full bg-gradient-to-r from-purple-500 to-cyan-400 w-[92%]" />
              </div>
            </div>
          </div>
        )

      case 'auto-code-reviewer':
        return (
          <div className="h-48 w-full bg-gradient-to-br from-[#0c1220] to-[#141b30] p-5 flex flex-col justify-between border-b border-white/5 relative overflow-hidden group">
            <div className="absolute -top-10 -right-10 w-40 h-40 bg-cyan-600/15 rounded-full blur-2xl group-hover:scale-125 transition-transform" />
            <div className="flex items-center justify-between z-10">
              <span className="text-[11px] font-mono text-cyan-300 bg-cyan-950/60 px-2.5 py-1 rounded border border-cyan-400/30 flex items-center gap-1.5">
                <Terminal className="w-3 h-3 text-cyan-400" />
                <span>GITHUB PR // EVALUATOR</span>
              </span>
              <span className="text-xs font-mono text-cyan-400 bg-cyan-950/40 px-2 py-0.5 rounded border border-cyan-500/30">
                BOT READY
              </span>
            </div>
            <div className="z-10 font-mono text-[11px] bg-[#080812]/90 p-3 rounded-lg border border-cyan-500/20 space-y-1">
              <div className="text-purple-300 flex items-center gap-1">
                <span className="text-emerald-400 font-bold">+</span>
                <span>Optimized AST parser loop for review feedback</span>
              </div>
              <div className="text-cyan-400 flex items-center gap-1 text-[10px]">
                <Sparkles className="w-3 h-3 shrink-0" />
                <span>AI Review: Zero regression detected. Safe to merge.</span>
              </div>
            </div>
          </div>
        )

      case 'iptrace':
        return (
          <div className="h-48 w-full bg-gradient-to-br from-[#070b1a] via-[#0b122c] to-[#12193b] p-4 sm:p-5 flex flex-col justify-between border-b border-white/5 relative overflow-hidden group">
            {/* Ambient Radial Lighting Glow */}
            <div className="absolute -top-10 -right-10 w-44 h-44 bg-cyan-500/15 rounded-full blur-2xl group-hover:scale-125 transition-transform" />
            <div className="absolute -bottom-10 -left-10 w-44 h-44 bg-violet-600/15 rounded-full blur-2xl group-hover:scale-125 transition-transform" />

            {/* Futuristic Geospatial SVG World Canvas & Radar Arcs */}
            <svg
              className="absolute inset-0 w-full h-full opacity-40 group-hover:opacity-60 transition-opacity pointer-events-none"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 400 190"
              fill="none"
            >
              <defs>
                <linearGradient id="geoArc" x1="0%" y1="0%" x2="100%" y2="100%">
                  <stop offset="0%" stopColor="#8B5CF6" stopOpacity="0.8" />
                  <stop offset="50%" stopColor="#22D3EE" stopOpacity="0.9" />
                  <stop offset="100%" stopColor="#6366F1" stopOpacity="0.8" />
                </linearGradient>
                <pattern id="gridDots" x="0" y="0" width="16" height="16" patternUnits="userSpaceOnUse">
                  <circle cx="2" cy="2" r="0.8" fill="#A1A1B5" fillOpacity="0.18" />
                </pattern>
              </defs>

              {/* Grid dots background */}
              <rect width="100%" height="100%" fill="url(#gridDots)" />

              {/* World Continent Vector Outlines */}
              {/* North America */}
              <path
                d="M 45 40 Q 75 35 95 55 T 80 85 Q 55 95 40 70 Z"
                fill="#8B5CF6"
                fillOpacity="0.14"
                stroke="#8B5CF6"
                strokeWidth="0.8"
                strokeOpacity="0.4"
              />
              {/* South America */}
              <path
                d="M 85 95 Q 110 100 105 130 T 90 155 Q 75 140 80 110 Z"
                fill="#8B5CF6"
                fillOpacity="0.12"
                stroke="#8B5CF6"
                strokeWidth="0.8"
                strokeOpacity="0.35"
              />
              {/* Europe & Africa */}
              <path
                d="M 180 35 Q 215 30 225 55 T 200 80 Q 170 70 175 45 Z"
                fill="#6366F1"
                fillOpacity="0.14"
                stroke="#6366F1"
                strokeWidth="0.8"
                strokeOpacity="0.4"
              />
              <path
                d="M 185 85 Q 225 80 230 115 T 210 160 Q 175 145 180 105 Z"
                fill="#6366F1"
                fillOpacity="0.12"
                stroke="#6366F1"
                strokeWidth="0.8"
                strokeOpacity="0.35"
              />
              {/* Asia & India */}
              <path
                d="M 230 40 Q 305 30 330 75 T 290 105 Q 240 100 235 60 Z"
                fill="#22D3EE"
                fillOpacity="0.14"
                stroke="#22D3EE"
                strokeWidth="0.8"
                strokeOpacity="0.4"
              />
              {/* Oceania */}
              <path
                d="M 310 120 Q 345 115 350 140 T 325 160 Q 295 150 305 130 Z"
                fill="#22D3EE"
                fillOpacity="0.12"
                stroke="#22D3EE"
                strokeWidth="0.8"
                strokeOpacity="0.35"
              />

              {/* Glowing Dynamic Connection Arcs */}
              <path
                d="M 70 65 Q 150 15 205 60"
                stroke="url(#geoArc)"
                strokeWidth="1.5"
                strokeDasharray="4 3"
                className="animate-pulse"
              />
              <path
                d="M 205 60 Q 255 35 285 85"
                stroke="url(#geoArc)"
                strokeWidth="1.5"
                strokeDasharray="5 3"
              />
              <path
                d="M 70 65 Q 180 130 285 85"
                stroke="#22D3EE"
                strokeWidth="1"
                strokeOpacity="0.6"
                strokeDasharray="3 3"
              />

              {/* Pulsing Radar Geolocation Nodes */}
              <circle cx="70" cy="65" r="3" fill="#22D3EE" />
              <circle cx="70" cy="65" r="8" stroke="#22D3EE" strokeWidth="0.8" strokeOpacity="0.6" />

              <circle cx="205" cy="60" r="3" fill="#8B5CF6" />
              <circle cx="205" cy="60" r="7" stroke="#8B5CF6" strokeWidth="0.8" strokeOpacity="0.6" />

              <circle cx="285" cy="85" r="3.5" fill="#22D3EE" />
              <circle cx="285" cy="85" r="9" stroke="#22D3EE" strokeWidth="1" strokeOpacity="0.8" />
            </svg>

            {/* Top Header Pill with Live Telemetry */}
            <div className="flex items-center justify-between z-10">
              <span className="text-[10px] sm:text-[11px] font-mono text-cyan-300 bg-cyan-950/70 px-2.5 py-1 rounded-full border border-cyan-400/30 flex items-center gap-1.5 shadow-[0_0_12px_rgba(34,211,238,0.2)]">
                <Globe className="w-3 h-3 text-cyan-400" />
                <span>IPTRACE // GEOSPATIAL INTELLIGENCE</span>
              </span>
              <span className="text-[10px] font-mono text-emerald-400 font-bold bg-emerald-950/50 px-2 py-0.5 rounded border border-emerald-500/30 flex items-center gap-1">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-ping" />
                CONFIDENCE: HIGH
              </span>
            </div>

            {/* Bottom Floating Telemetry Panel */}
            <div className="z-10 grid grid-cols-2 gap-2 font-mono text-[10px]">
              <div className="p-2 rounded-lg bg-[#080814]/85 border border-cyan-500/20 backdrop-blur-md flex flex-col justify-between">
                <div className="text-[#A1A1B5] flex items-center gap-1">
                  <Activity className="w-3 h-3 text-cyan-400" />
                  <span>MULTI-PROVIDER</span>
                </div>
                <div className="text-white font-bold text-[11px] mt-0.5">
                  Centroid Resolution
                </div>
              </div>

              <div className="p-2 rounded-lg bg-[#080814]/85 border border-purple-500/20 backdrop-blur-md flex flex-col justify-between">
                <div className="text-[#A1A1B5] flex items-center gap-1">
                  <ShieldCheck className="w-3 h-3 text-purple-400" />
                  <span>TEST COVERAGE</span>
                </div>
                <div className="text-purple-300 font-bold text-[11px] mt-0.5">
                  40 Pytest Suites
                </div>
              </div>
            </div>
          </div>
        )

      case 'foode':
        return (
          <div className="h-48 w-full bg-gradient-to-br from-[#0c1c1a] to-[#142825] p-5 flex flex-col justify-between border-b border-white/5 relative overflow-hidden group">
            <div className="absolute -top-10 -right-10 w-40 h-40 bg-emerald-600/15 rounded-full blur-2xl group-hover:scale-125 transition-transform" />
            <div className="flex items-center justify-between z-10">
              <span className="text-[11px] font-mono text-emerald-300 bg-emerald-950/60 px-2.5 py-1 rounded border border-emerald-500/30">
                FOODE // REAL-TIME OPS
              </span>
              <span className="text-xs font-mono text-emerald-400 font-bold">
                MULTI-ZONE
              </span>
            </div>
            <div className="z-10 grid grid-cols-3 gap-2 text-center text-[10px] font-mono">
              <div className="p-2 rounded bg-black/40 border border-emerald-500/20 text-emerald-300">
                HALL &amp; TERRACE
              </div>
              <div className="p-2 rounded bg-black/40 border border-emerald-500/20 text-emerald-300">
                DINE PREORDER
              </div>
              <div className="p-2 rounded bg-black/40 border border-emerald-500/20 text-emerald-300">
                TAKEAWAY
              </div>
            </div>
          </div>
        )

      case 'superbill-optimization':
        return (
          <div className="h-48 w-full bg-gradient-to-br from-[#180e28] to-[#25143a] p-5 flex flex-col justify-between border-b border-white/5 relative overflow-hidden group">
            <div className="absolute -top-10 -right-10 w-40 h-40 bg-purple-600/20 rounded-full blur-2xl group-hover:scale-125 transition-transform" />
            <div className="flex items-center justify-between z-10">
              <span className="text-[11px] font-mono text-purple-300 bg-purple-950/60 px-2.5 py-1 rounded border border-purple-500/30 flex items-center gap-1.5">
                <Activity className="w-3 h-3 text-cyan-400" />
                <span>SUPERBILL // BENCHMARK</span>
              </span>
              <span className="text-xs font-mono text-cyan-300 font-bold bg-cyan-950/50 px-2 py-0.5 rounded border border-cyan-400/30">
                98ms LATENCY
              </span>
            </div>
            <div className="z-10 space-y-1.5">
              <div className="flex justify-between text-[11px] font-mono">
                <span className="text-red-400 line-through">~1000ms</span>
                <span className="text-cyan-300 font-bold">98ms (&gt;90% reduction)</span>
              </div>
              <div className="h-2 w-full bg-black/50 rounded-full overflow-hidden">
                <div className="h-full bg-gradient-to-r from-purple-500 to-cyan-400 w-full" />
              </div>
            </div>
          </div>
        )

      default:
        return (
          <div className="h-48 w-full bg-gradient-to-br from-[#121226] to-[#181838] p-5 flex flex-col justify-between border-b border-white/5 relative overflow-hidden group">
            <div className="flex items-center justify-between z-10">
              <span className="text-[11px] font-mono text-purple-300 bg-purple-950/60 px-2.5 py-1 rounded border border-purple-500/30">
                {project.category}
              </span>
              <Layers className="w-4 h-4 text-cyan-400" />
            </div>
            <div className="z-10">
              <div className="text-sm font-bold text-white">{project.title}</div>
              <div className="text-xs text-[#A1A1B5] font-mono">{project.subtitle}</div>
            </div>
          </div>
        )
    }
  }

  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-40px' }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="glass-panel glass-panel-hover rounded-2xl border-white/10 overflow-hidden flex flex-col justify-between group"
    >
      <div>
        {/* Visual Top Preview */}
        {renderProjectVisual()}

        {/* Card Body */}
        <div className="p-6">
          <div className="flex items-center justify-between gap-2 mb-2">
            <span className="text-xs font-mono font-medium text-cyan-400 truncate">
              {project.category}
            </span>
            {project.demoCredentials && (
              <span className="text-[10px] font-mono text-cyan-300 bg-cyan-950/60 px-2 py-0.5 rounded-full border border-cyan-400/30 shrink-0 flex items-center gap-1 shadow-[0_0_8px_rgba(34,211,238,0.2)]">
                <span className="w-1.5 h-1.5 rounded-full bg-cyan-400 animate-pulse" />
                Live Demo
              </span>
            )}
          </div>

          <h3 className="text-xl font-bold text-white font-display group-hover:text-cyan-300 transition-colors">
            {project.title}
          </h3>

          <p className="text-xs sm:text-sm text-[#A1A1B5] mt-2.5 leading-relaxed line-clamp-3">
            {project.cardDescription || project.description}
          </p>

          {/* Key Features Preview (First 3) */}
          <div className="mt-4 space-y-1.5">
            {project.features.slice(0, 3).map((feature, fIdx) => (
              <div
                key={fIdx}
                className="flex items-center gap-2 text-xs text-[#A1A1B5]"
              >
                <CheckCircle2 className="w-3.5 h-3.5 text-cyan-400 shrink-0" />
                <span className="truncate">{feature}</span>
              </div>
            ))}
          </div>

          {/* Technology Badges */}
          <div className="mt-5 pt-4 border-t border-white/5 flex flex-wrap gap-1.5">
            {project.technologies.slice(0, 7).map((tech, tIdx) => (
              <span
                key={tIdx}
                className="px-2.5 py-1 rounded-md text-[11px] font-mono text-purple-200 bg-[#101020] border border-purple-500/20"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>
      </div>

      {/* Card Actions */}
      <div className="p-6 pt-0 flex flex-wrap items-center justify-between gap-3">
        <button
          onClick={() => onSelect(project)}
          className="inline-flex items-center gap-1.5 text-xs font-semibold text-cyan-300 hover:text-white transition-colors group/btn cursor-pointer"
        >
          <span>View Architecture &amp; Details</span>
          <ArrowRight className="w-3.5 h-3.5 transition-transform group-hover/btn:translate-x-1" />
        </button>

        <div className="flex items-center gap-2">
          {project.liveDemoUrl && (
            <a
              href={project.liveDemoUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="px-2.5 py-1.5 rounded-lg text-xs font-semibold text-white bg-gradient-to-r from-purple-600 to-cyan-500 hover:from-purple-500 hover:to-cyan-400 flex items-center gap-1.5 transition-all shadow-md shadow-purple-900/30"
              aria-label="View Live Project"
            >
              <ExternalLink className="w-3.5 h-3.5" />
              <span>Live Project</span>
            </a>
          )}
          {project.githubUrl && (
            <a
              href={project.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 rounded-lg glass-panel text-[#A1A1B5] hover:text-white hover:border-purple-500/40 transition-colors"
              aria-label="GitHub Repository"
            >
              <GithubIcon className="w-4 h-4" />
            </a>
          )}
        </div>
      </div>
    </motion.div>
  )
}
