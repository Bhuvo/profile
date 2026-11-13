import { motion, AnimatePresence } from 'framer-motion'
import { X, ExternalLink, CheckCircle, ArrowRight, AlertTriangle, Cpu, Layers } from 'lucide-react'
import type { ProjectItem } from '../../data/projects'
import { GithubIcon } from '../UI/SocialIcons'

interface ProjectModalProps {
  project: ProjectItem | null
  onClose: () => void
}

export function ProjectModal({ project, onClose }: ProjectModalProps) {
  if (!project) return null

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 overflow-y-auto">
        {/* Backdrop overlay */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
          className="fixed inset-0 bg-[#080611]/80 backdrop-blur-md"
        />

        {/* Modal Window Container */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.95, y: 20 }}
          transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
          className="relative w-full max-w-4xl max-h-[90vh] overflow-y-auto rounded-3xl glass-panel border border-purple-500/30 p-6 sm:p-8 bg-[#100B20]/95 shadow-[0_20px_60px_rgba(8,6,17,0.9)] z-10"
        >
          {/* Close button */}
          <button
            onClick={onClose}
            className="absolute top-5 right-5 p-2 rounded-xl bg-[#17112B] text-[#A5A0B5] hover:text-[#F8FAFC] border border-purple-500/20 hover:border-purple-400/50 transition-colors cursor-pointer"
            aria-label="Close modal"
          >
            <X className="w-5 h-5" />
          </button>

          {/* Modal Header */}
          <div className="pr-12 mb-6">
            <span className="inline-block px-3 py-1 rounded-full bg-purple-900/40 border border-purple-500/30 text-xs font-mono text-[#67E8F9] uppercase tracking-wider mb-2">
              {project.category}
            </span>
            <h2 className="text-2xl sm:text-4xl font-display font-bold text-[#F8FAFC]">
              {project.title}
            </h2>
            <p className="mt-2 text-sm sm:text-base text-[#C4B5FD]">
              {project.tagline}
            </p>
          </div>

          {/* Collaborative Notice / Disclaimer Alerts */}
          {project.collaborativeNotice && (
            <div className="mb-6 p-3.5 rounded-xl bg-purple-950/40 border border-purple-500/30 flex items-start gap-3 text-xs text-[#C4B5FD] leading-relaxed">
              <Layers className="w-4 h-4 text-[#67E8F9] shrink-0 mt-0.5" />
              <span>{project.collaborativeNotice}</span>
            </div>
          )}

          {project.disclaimer && (
            <div className="mb-6 p-3.5 rounded-xl bg-amber-950/30 border border-amber-500/30 flex items-start gap-3 text-xs text-amber-200/90 leading-relaxed">
              <AlertTriangle className="w-4 h-4 text-amber-400 shrink-0 mt-0.5" />
              <span>{project.disclaimer}</span>
            </div>
          )}

          {/* Key Metrics Row */}
          {project.metrics && project.metrics.length > 0 && (
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 mb-8">
              {project.metrics.map((m) => (
                <div key={m.label} className="p-3.5 rounded-xl bg-[#17112B] border border-purple-500/20">
                  <span className="text-[11px] font-mono text-[#A5A0B5] uppercase block mb-1">
                    {m.label}
                  </span>
                  <span className="text-base sm:text-lg font-display font-bold text-[#67E8F9]">
                    {m.value}
                  </span>
                </div>
              ))}
            </div>
          )}

          {/* Problem & Solution Architecture */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
            <div className="p-5 rounded-2xl bg-[#17112B]/70 border border-purple-500/20">
              <h3 className="text-sm font-mono uppercase tracking-wider text-[#A5A0B5] mb-2 font-semibold">
                Problem Statement
              </h3>
              <p className="text-xs sm:text-sm text-[#F8FAFC] leading-relaxed">
                {project.problemStatement}
              </p>
            </div>
            <div className="p-5 rounded-2xl bg-[#17112B]/70 border border-purple-500/20">
              <h3 className="text-sm font-mono uppercase tracking-wider text-[#67E8F9] mb-2 font-semibold">
                Engineering Solution
              </h3>
              <p className="text-xs sm:text-sm text-[#F8FAFC] leading-relaxed">
                {project.solution}
              </p>
            </div>
          </div>

          {/* Key Features List */}
          <div className="mb-8">
            <h3 className="text-sm font-mono uppercase tracking-wider text-[#C4B5FD] mb-3 font-semibold">
              Key Features & Capabilities
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
              {project.features.map((feat, idx) => (
                <div
                  key={idx}
                  className="flex items-start gap-2.5 p-2.5 rounded-xl bg-[#17112B]/50 border border-purple-500/15 text-xs text-[#A5A0B5]"
                >
                  <CheckCircle className="w-3.5 h-3.5 text-[#67E8F9] shrink-0 mt-0.5" />
                  <span>{feat}</span>
                </div>
              ))}
            </div>
          </div>

          {/* System Architecture Flow */}
          <div className="mb-8 p-5 rounded-2xl bg-[#17112B] border border-purple-500/25">
            <div className="flex items-center gap-2 mb-3">
              <Cpu className="w-4 h-4 text-[#8B5CF6]" />
              <h3 className="text-sm font-mono uppercase tracking-wider text-[#F8FAFC] font-semibold">
                System Architecture Flow
              </h3>
            </div>
            <div className="flex flex-wrap items-center gap-2 mb-3">
              {project.architecture.steps.map((step, idx) => (
                <div key={idx} className="flex items-center gap-2">
                  <span className="px-3 py-1.5 rounded-lg bg-[#100B20] text-xs font-mono text-[#67E8F9] border border-purple-500/20">
                    {step}
                  </span>
                  {idx < project.architecture.steps.length - 1 && (
                    <ArrowRight className="w-3.5 h-3.5 text-[#A5A0B5]" />
                  )}
                </div>
              ))}
            </div>
            <p className="text-xs text-[#A5A0B5] leading-relaxed mt-2">
              {project.architecture.description}
            </p>
          </div>

          {/* Tech Stack Chips */}
          <div className="mb-8">
            <h3 className="text-xs font-mono uppercase tracking-wider text-[#A5A0B5] mb-2 font-semibold">
              Technology Stack
            </h3>
            <div className="flex flex-wrap gap-2">
              {project.technologies.map((t) => (
                <span
                  key={t}
                  className="px-3 py-1 rounded-lg bg-[#17112B] text-xs font-mono text-[#C4B5FD] border border-purple-500/30"
                >
                  {t}
                </span>
              ))}
            </div>
          </div>

          {/* Action Links */}
          <div className="flex flex-wrap items-center gap-3 pt-4 border-t border-purple-500/20">
            {project.liveUrl && (
              <a
                href={project.liveUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-gradient-to-r from-[#5B21B6] to-[#8B5CF6] hover:from-[#6D28D9] hover:to-[#9333EA] text-[#F8FAFC] text-xs font-semibold tracking-wide border border-purple-400/30 shadow-[0_0_20px_rgba(139,92,246,0.3)] transition-all cursor-pointer"
              >
                <span>OPEN LIVE PROJECT</span>
                <ExternalLink className="w-3.5 h-3.5 text-[#67E8F9]" />
              </a>
            )}
            {project.githubUrl && (
              <a
                href={project.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-[#17112B] hover:bg-purple-950/40 text-[#C4B5FD] hover:text-[#F8FAFC] text-xs font-semibold border border-purple-500/30 transition-all cursor-pointer"
              >
                <GithubIcon className="w-3.5 h-3.5" />
                <span>VIEW REPOSITORY</span>
              </a>
            )}
            <button
              onClick={onClose}
              className="ml-auto px-4 py-2.5 rounded-xl bg-transparent text-[#A5A0B5] hover:text-[#F8FAFC] text-xs font-mono cursor-pointer"
            >
              Close
            </button>
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  )
}
