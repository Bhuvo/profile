import React, { useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { X, ExternalLink, CheckCircle2, Cpu, ArrowRight, Layers } from 'lucide-react'
import { GithubIcon } from '../UI/Icons'
import type { ProjectItem } from '../../types'
import { SuperbillComparison } from './SuperbillComparison'

interface ProjectModalProps {
  project: ProjectItem | null
  onClose: () => void
}

export const ProjectModal: React.FC<ProjectModalProps> = ({ project, onClose }) => {
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose()
    }
    if (project) {
      document.body.style.overflow = 'hidden'
      window.addEventListener('keydown', handleKeyDown)
    }
    return () => {
      document.body.style.overflow = 'unset'
      window.removeEventListener('keydown', handleKeyDown)
    }
  }, [project, onClose])

  if (!project) return null

  const architecture = project.architecture

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 overflow-y-auto">
        {/* Backdrop */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
          className="fixed inset-0 bg-[#080812]/80 backdrop-blur-xl -z-10"
        />

        {/* Modal Window */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.95, y: 20 }}
          transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
          className="relative w-full max-w-3xl bg-[#101020] border border-purple-500/30 rounded-3xl p-6 sm:p-8 shadow-2xl shadow-purple-950/60 max-h-[90vh] overflow-y-auto"
        >
          {/* Close Button */}
          <button
            onClick={onClose}
            className="absolute top-6 right-6 p-2 rounded-xl glass-panel text-[#A1A1B5] hover:text-white hover:border-white/20 transition-colors"
            aria-label="Close modal"
          >
            <X className="w-5 h-5" />
          </button>

          {/* Header */}
          <div className="space-y-2 pr-10">
            <span className="px-3 py-1 rounded-full text-xs font-mono font-semibold text-cyan-300 bg-cyan-950/40 border border-cyan-400/30 inline-block">
              {project.category}
            </span>
            <h3 className="text-2xl sm:text-3xl font-extrabold text-white font-display">
              {project.title}
            </h3>
            <p className="text-sm font-mono text-purple-300">{project.subtitle}</p>
          </div>

          {/* Description */}
          <div className="mt-6 p-4 rounded-xl bg-white/5 border border-white/5 text-[#A1A1B5] text-sm leading-relaxed">
            {project.description}
          </div>

          {/* Special Benchmark Comparison if Superbill */}
          {project.id === 'superbill-optimization' && <SuperbillComparison />}

          {/* Problem & Solution */}
          {project.problemStatement && (
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-6">
              <div className="p-4 rounded-xl bg-[#151528] border border-white/10 space-y-1.5">
                <div className="text-xs font-mono font-bold text-red-400 uppercase flex items-center gap-1.5">
                  <span className="w-1.5 h-1.5 rounded-full bg-red-400" />
                  <span>The Engineering Challenge</span>
                </div>
                <p className="text-xs text-[#A1A1B5] leading-relaxed">
                  {project.problemStatement}
                </p>
              </div>

              <div className="p-4 rounded-xl bg-[#151528] border border-white/10 space-y-1.5">
                <div className="text-xs font-mono font-bold text-emerald-400 uppercase flex items-center gap-1.5">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-400" />
                  <span>The Architectural Solution</span>
                </div>
                <p className="text-xs text-[#A1A1B5] leading-relaxed">
                  {project.solution}
                </p>
              </div>
            </div>
          )}

          {/* Key Features */}
          <div className="mt-6">
            <h4 className="text-xs font-mono uppercase tracking-wider text-purple-300 mb-3 flex items-center gap-2">
              <Cpu className="w-4 h-4 text-purple-400" />
              <span>Core Features & Capabilities</span>
            </h4>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
              {project.features.map((feature, idx) => (
                <div
                  key={idx}
                  className="p-3 rounded-xl bg-[#151528]/60 border border-white/5 flex items-start gap-2.5 text-xs text-[#A1A1B5]"
                >
                  <CheckCircle2 className="w-4 h-4 text-cyan-400 shrink-0 mt-0.5" />
                  <span>{feature}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Architecture Overview */}
          {architecture && (
            <div className="mt-6 p-5 rounded-2xl bg-[#080812] border border-purple-500/20">
              <h4 className="text-xs font-mono uppercase tracking-wider text-cyan-300 mb-3 flex items-center gap-2">
                <Layers className="w-4 h-4 text-cyan-400" />
                <span>Architecture & Data Flow</span>
              </h4>

              {/* Flow Steps */}
              <div className="flex flex-wrap items-center gap-2 mb-3">
                {architecture.flow.map((step, idx) => (
                  <React.Fragment key={idx}>
                    <div className="px-3 py-1.5 rounded-lg text-xs font-mono text-purple-200 bg-purple-950/50 border border-purple-500/30">
                      {step}
                    </div>
                    {idx < architecture.flow.length - 1 && (
                      <ArrowRight className="w-3.5 h-3.5 text-[#A1A1B5] shrink-0" />
                    )}
                  </React.Fragment>
                ))}
              </div>

              <p className="text-xs text-[#A1A1B5] leading-relaxed font-mono">
                {architecture.summary}
              </p>
            </div>
          )}

          {/* Technologies */}
          <div className="mt-6">
            <h4 className="text-xs font-mono uppercase tracking-wider text-[#A1A1B5] mb-2">
              TECHNOLOGIES USED
            </h4>
            <div className="flex flex-wrap gap-2">
              {project.technologies.map((tech, idx) => (
                <span
                  key={idx}
                  className="px-3 py-1 rounded-lg text-xs font-mono text-cyan-300 bg-[#151528] border border-cyan-400/20"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>

          {/* Footer Action Links */}
          <div className="mt-8 pt-6 border-t border-white/10 flex flex-wrap items-center justify-between gap-4">
            <div className="text-xs font-mono text-[#A1A1B5]/60">
              ID: {project.id}
            </div>

            <div className="flex items-center gap-3">
              {project.githubUrl && (
                <a
                  href={project.githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-4 py-2 rounded-xl text-xs font-semibold text-white glass-panel border-white/10 hover:border-purple-500/40 transition-colors"
                >
                  <GithubIcon className="w-4 h-4" />
                  <span>GitHub Repository</span>
                </a>
              )}
              {project.liveDemoUrl && (
                <a
                  href={project.liveDemoUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-4 py-2 rounded-xl text-xs font-semibold text-white bg-gradient-to-r from-purple-600 to-cyan-500"
                >
                  <ExternalLink className="w-4 h-4" />
                  <span>Live Demo</span>
                </a>
              )}
              <button
                onClick={onClose}
                className="px-5 py-2 rounded-xl text-xs font-semibold text-[#A1A1B5] hover:text-white glass-panel transition-colors"
              >
                Close
              </button>
            </div>
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  )
}
