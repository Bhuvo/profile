import React, { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import { Star, GitFork, ExternalLink, Code2, Copy, Check } from 'lucide-react'
import { GithubIcon } from '../UI/Icons'
import { socialLinks } from '../../data/social'
import type { GitHubRepo } from '../../types'
import { SectionHeading } from '../UI/SectionHeading'
import { SpotlightCard } from '../UI/SpotlightCard'
import { Toast } from '../UI/Toast'

// Curated static fallback in case the GitHub API is rate-limited or offline
const fallbackRepos: GitHubRepo[] = [
  {
    id: 1,
    name: 'Jobify-AI-Platform',
    description:
      'AI-powered recruitment system featuring multi-section resume parsing, ATS scoring, and FastAPI backend integration.',
    html_url: `${socialLinks.github}/Jobify-AI-Platform`,
    language: 'Python',
    stargazers_count: 14,
    forks_count: 3,
    topics: ['fastapi', 'openai', 'resume-parser', 'ats'],
  },
  {
    id: 2,
    name: 'Auto-Code-Reviewer',
    description:
      'Automated pull request analysis tool integrating GitHub webhooks with LLM reasoning models to provide actionable reviews.',
    html_url: `${socialLinks.github}/Auto-Code-Reviewer`,
    language: 'Python',
    stargazers_count: 18,
    forks_count: 4,
    topics: ['code-review', 'llm', 'github-api', 'fastapi'],
  },
  {
    id: 3,
    name: 'location-fetch',
    description:
      'Advanced IP Geolocation & visitor analytics platform built with Python, Flask, multi-provider querying, confidence scoring, and interactive maps.',
    html_url: 'https://github.com/Bhuvo/location-fetch',
    language: 'Python',
    stargazers_count: 16,
    forks_count: 3,
    topics: ['python', 'flask', 'geolocation', 'analytics', 'leaflet'],
  },
  {
    id: 4,
    name: 'Foode-Restaurant-Ops',
    description:
      'Unified food and dining management platform with real-time order lifecycle, multi-zone space coordination, and billing.',
    html_url: `${socialLinks.github}/Foode-Restaurant-Ops`,
    language: 'Dart',
    stargazers_count: 12,
    forks_count: 2,
    topics: ['flutter', 'django', 'postgresql', 'mobile'],
  },
]

export const GitHubShowcase: React.FC = () => {
  const [repos, setRepos] = useState<GitHubRepo[]>(fallbackRepos)
  const [copiedId, setCopiedId] = useState<number | null>(null)
  const [toastMessage, setToastMessage] = useState<string>('')
  const [isToastOpen, setIsToastOpen] = useState(false)

  const copyCloneUrl = (e: React.MouseEvent, repo: GitHubRepo) => {
    e.preventDefault()
    e.stopPropagation()
    const cloneCmd = `git clone ${repo.html_url}.git`
    navigator.clipboard.writeText(cloneCmd)
    setCopiedId(repo.id)
    setToastMessage(`Copied: ${cloneCmd}`)
    setIsToastOpen(true)
    setTimeout(() => setCopiedId(null), 2000)
  }

  useEffect(() => {
    const fetchGitHubRepos = async () => {
      const username = socialLinks.github.split('/').filter(Boolean).pop() || 'Bhuvo'
      try {
        const res = await fetch(`https://api.github.com/users/${username}/repos?sort=updated&per_page=6`)
        if (res.ok) {
          const data = await res.json()
          if (Array.isArray(data) && data.length > 0) {
            setRepos(
              data.map((r: any) => ({
                id: r.id,
                name: r.name,
                description: r.description || 'Public repository focused on modern software and AI engineering.',
                html_url: r.html_url,
                language: r.language || 'Code',
                stargazers_count: r.stargazers_count || 0,
                forks_count: r.forks_count || 0,
                topics: r.topics || [],
              }))
            )
          }
        }
      } catch {
        // Quietly keep clean fallback
      }
    }

    fetchGitHubRepos()
  }, [])

  return (
    <section className="py-24 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <SectionHeading
          badge="OPEN SOURCE"
          title="Code, Experiments &"
          highlight="Open Source"
          subtitle="Explore public repositories, code architectures, and developer experiments on GitHub."
        />

        {/* Repositories Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {repos.map((repo, idx) => (
            <motion.div
              key={repo.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-40px' }}
              transition={{ duration: 0.4, delay: idx * 0.1 }}
            >
              <SpotlightCard
                spotlightColor="rgba(34, 211, 238, 0.18)"
                className="p-6 rounded-2xl border border-white/10 bg-[#151528]/80 hover:border-cyan-400/40 backdrop-blur-xl flex flex-col justify-between group h-full transition-all duration-300"
              >
                <div>
                  <div className="flex items-center justify-between mb-3">
                    <div className="flex items-center gap-2">
                      <GithubIcon className="w-4 h-4 text-purple-400 group-hover:text-cyan-300 transition-colors" />
                      <span className="text-xs font-mono text-[#A1A1B5]">Repository</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <button
                        onClick={(e) => copyCloneUrl(e, repo)}
                        title="Copy git clone command"
                        className="px-2 py-1 rounded-md text-[10px] font-mono bg-white/5 border border-white/10 hover:border-cyan-400/50 hover:bg-cyan-500/10 text-[#A1A1B5] hover:text-cyan-300 transition-all flex items-center gap-1"
                      >
                        {copiedId === repo.id ? (
                          <>
                            <Check className="w-3 h-3 text-cyan-400" />
                            <span>Copied</span>
                          </>
                        ) : (
                          <>
                            <Copy className="w-3 h-3" />
                            <span>Clone</span>
                          </>
                        )}
                      </button>
                      <a
                        href={repo.html_url}
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label={`Open ${repo.name} on GitHub`}
                        className="text-[#A1A1B5] hover:text-white transition-colors"
                      >
                        <ExternalLink className="w-3.5 h-3.5" />
                      </a>
                    </div>
                  </div>

                  <a
                    href={repo.html_url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block"
                  >
                    <h3 className="text-base font-bold text-white font-mono group-hover:text-cyan-300 transition-colors truncate">
                      {repo.name}
                    </h3>

                    <p className="text-xs text-[#A1A1B5] mt-2 line-clamp-3 leading-relaxed">
                      {repo.description}
                    </p>
                  </a>
                </div>

                <div className="mt-6 pt-4 border-t border-white/5 flex items-center justify-between text-xs font-mono text-[#A1A1B5]">
                  <div className="flex items-center gap-1.5 text-purple-300">
                    <Code2 className="w-3.5 h-3.5" />
                    <span>{repo.language}</span>
                  </div>

                  <div className="flex items-center gap-3">
                    <span className="flex items-center gap-1 hover:text-yellow-400 transition-colors">
                      <Star className="w-3.5 h-3.5" />
                      <span>{repo.stargazers_count}</span>
                    </span>
                    <span className="flex items-center gap-1">
                      <GitFork className="w-3.5 h-3.5" />
                      <span>{repo.forks_count}</span>
                    </span>
                  </div>
                </div>
              </SpotlightCard>
            </motion.div>
          ))}
        </div>

        {/* Profile Link Button */}
        <div className="mt-12 text-center">
          <a
            href={socialLinks.github}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2.5 px-6 py-3.5 rounded-xl text-xs sm:text-sm font-semibold text-white glass-panel border border-white/10 hover:border-purple-500/40 hover:bg-white/5 transition-all shadow-md group"
          >
            <GithubIcon className="w-4 h-4 text-cyan-400 group-hover:scale-110 transition-transform" />
            <span>View All Repositories on GitHub</span>
            <ExternalLink className="w-3.5 h-3.5 text-[#A1A1B5] group-hover:text-white transition-colors" />
          </a>
        </div>
      </div>

      <Toast
        message={toastMessage}
        isOpen={isToastOpen}
        onClose={() => setIsToastOpen(false)}
      />
    </section>
  )
}
