import React from 'react'
import { motion } from 'framer-motion'
import { ArrowRight, CheckCircle2, Sparkles, Terminal, Activity, Layers } from 'lucide-react'
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
          <div className="flex items-center gap-2 mb-2">
            <span className="text-xs font-mono font-medium text-cyan-400">
              {project.category}
            </span>
          </div>

          <h3 className="text-xl font-bold text-white font-display group-hover:text-cyan-300 transition-colors">
            {project.title}
          </h3>

          <p className="text-xs sm:text-sm text-[#A1A1B5] mt-2.5 leading-relaxed line-clamp-3">
            {project.description}
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
            {project.technologies.map((tech, tIdx) => (
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
      <div className="p-6 pt-0 flex items-center justify-between gap-3">
        <button
          onClick={() => onSelect(project)}
          className="inline-flex items-center gap-1.5 text-xs font-semibold text-cyan-300 hover:text-white transition-colors group/btn"
        >
          <span>View Architecture &amp; Details</span>
          <ArrowRight className="w-3.5 h-3.5 transition-transform group-hover/btn:translate-x-1" />
        </button>

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
    </motion.div>
  )
}
