import React, { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import { Star, GitFork, ExternalLink, Code2 } from 'lucide-react'
import { GithubIcon } from '../UI/Icons'
import { socialLinks } from '../../data/social'
import type { GitHubRepo } from '../../types'
import { SectionHeading } from '../UI/SectionHeading'

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

  useEffect(() => {
    const fetchGitHubRepos = async () => {
      // Extract username from profile URL
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
      } catch (err) {
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
            <motion.a
              key={repo.id}
              href={repo.html_url}
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-40px' }}
              transition={{ duration: 0.4, delay: idx * 0.1 }}
              className="glass-panel glass-panel-hover p-6 rounded-2xl border-white/10 hover:border-cyan-400/40 flex flex-col justify-between group block"
            >
              <div>
                <div className="flex items-center justify-between mb-3">
                  <div className="flex items-center gap-2">
                    <GithubIcon className="w-4 h-4 text-purple-400 group-hover:text-cyan-300 transition-colors" />
                    <span className="text-xs font-mono text-[#A1A1B5]">Repository</span>
                  </div>
                  <ExternalLink className="w-3.5 h-3.5 text-[#A1A1B5] group-hover:text-white transition-colors" />
                </div>

                <h3 className="text-base font-bold text-white font-mono group-hover:text-cyan-300 transition-colors truncate">
                  {repo.name}
                </h3>

                <p className="text-xs text-[#A1A1B5] mt-2 line-clamp-3 leading-relaxed">
                  {repo.description}
                </p>
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
            </motion.a>
          ))}
        </div>

        {/* Profile Link Button */}
        <div className="mt-12 text-center">
          <a
            href={socialLinks.github}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2.5 px-6 py-3.5 rounded-xl text-xs sm:text-sm font-semibold text-white glass-panel border-white/10 hover:border-purple-500/40 hover:bg-white/5 transition-all shadow-md group"
          >
            <GithubIcon className="w-4 h-4" />
            <span>Visit @Bhuvo on GitHub</span>
            <ExternalLink className="w-3.5 h-3.5 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
           </a>
        </div>
      </div>
    </section>
  )
}
