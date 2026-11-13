import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import { ExternalLink, GitBranch, FolderGit2 } from 'lucide-react'
import { GithubIcon } from '../UI/SocialIcons'

interface RepoDisplay {
  id: string
  name: string
  description: string
  language: string
  languageColor: string
  url: string
  isFeatured?: boolean
}

const fallbackRepos: RepoDisplay[] = [
  {
    id: 'ilu-jobs',
    name: 'ilu-jobs-platform',
    description: 'AI-powered recruitment system featuring FastAPI backend, LangChain, semantic embeddings & ATS resume matching.',
    language: 'Python',
    languageColor: '#3572A5',
    url: 'https://github.com/hema-official',
    isFeatured: true,
  },
  {
    id: 'currency-detection',
    name: 'indian-currency-detection',
    description: 'Computer vision & ML classification pipeline for Indian banknotes achieving 91.4% accuracy with Scikit-learn.',
    language: 'Python',
    languageColor: '#3572A5',
    url: 'https://github.com/hema-official',
    isFeatured: true,
  },
  {
    id: 'healthcare-chatbot',
    name: 'healthcare-ai-chatbot',
    description: 'NLP conversational assistant with Flask REST API delivering automated health responses with 88% intent accuracy.',
    language: 'Python',
    languageColor: '#3572A5',
    url: 'https://github.com/hema-official',
    isFeatured: true,
  },
  {
    id: 'sales-analytics',
    name: 'sales-data-analytics-dashboard',
    description: 'High-volume data analysis pipeline processing 10,000+ business records with vectorized Pandas and FastAPI charts.',
    language: 'Python',
    languageColor: '#3572A5',
    url: 'https://github.com/hema-official',
    isFeatured: true,
  },
]

export function GitHubShowcase() {
  const [repos] = useState<RepoDisplay[]>(fallbackRepos)
  const [profileData, setProfileData] = useState<{
    login: string
    avatar_url?: string
    html_url: string
  }>({
    login: 'hema-official',
    html_url: 'https://github.com/hema-official',
  })

  useEffect(() => {
    // Graceful fetch from public GitHub API
    fetch('https://api.github.com/users/hema-official')
      .then((res) => {
        if (!res.ok) throw new Error('API limit or not found')
        return res.json()
      })
      .then((data) => {
        if (data && data.login) {
          setProfileData({
            login: data.login,
            avatar_url: data.avatar_url,
            html_url: data.html_url,
          })
        }
      })
      .catch(() => {
        // Fallback remains active
      })
  }, [])

  return (
    <section className="relative py-24 sm:py-32 bg-[#080611] overflow-hidden border-t border-purple-500/15">
      {/* Background ambient lighting */}
      <div className="absolute top-1/2 right-10 w-96 h-96 rounded-full bg-[#67E8F9]/8 blur-[150px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#17112B] border border-purple-500/25 text-xs font-mono text-[#67E8F9] uppercase tracking-wider mb-3">
              <GithubIcon className="w-3.5 h-3.5 text-[#8B5CF6]" />
              <span>OPEN SOURCE & CODE</span>
            </div>
            <h2 className="text-3xl sm:text-5xl font-display font-bold text-[#F8FAFC]">
              CODE SPEAKS LOUDER
            </h2>
            <p className="mt-2 text-base text-[#A5A0B5]">
              Experiments, development, and continuous learning on GitHub.
            </p>
          </div>

          {/* GitHub Profile CTA */}
          <a
            href={profileData.html_url}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-3 px-5 py-3 rounded-2xl glass-card border border-purple-500/30 hover:border-purple-400 text-sm font-mono text-[#F8FAFC] group self-start md:self-auto"
          >
            <div className="w-8 h-8 rounded-full bg-purple-900/50 flex items-center justify-center overflow-hidden border border-purple-500/30">
              {profileData.avatar_url ? (
                <img
                  src={profileData.avatar_url}
                  alt={profileData.login}
                  className="w-full h-full object-cover"
                />
              ) : (
                <GithubIcon className="w-4 h-4 text-[#67E8F9]" />
              )}
            </div>
            <div>
              <span className="text-xs text-[#A5A0B5] block">Official Profile</span>
              <span className="font-semibold text-[#67E8F9] group-hover:text-white transition-colors">
                @{profileData.login}
              </span>
            </div>
            <ExternalLink className="w-4 h-4 text-[#A5A0B5] group-hover:text-white ml-2 transition-transform group-hover:translate-x-0.5" />
          </a>
        </div>

        {/* Repositories Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {repos.map((repo, idx) => (
            <motion.a
              key={repo.id}
              href={repo.url}
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              className="rounded-2xl glass-card p-6 flex flex-col justify-between border-purple-500/20 hover:border-purple-400/40 group relative overflow-hidden"
            >
              <div>
                <div className="flex items-center justify-between gap-3 mb-3">
                  <div className="flex items-center gap-2">
                    <FolderGit2 className="w-4 h-4 text-[#67E8F9]" />
                    <h3 className="font-mono font-bold text-base text-[#F8FAFC] group-hover:text-[#67E8F9] transition-colors">
                      {repo.name}
                    </h3>
                  </div>
                  {repo.isFeatured && (
                    <span className="px-2 py-0.5 rounded text-[10px] font-mono bg-purple-950/60 text-[#C4B5FD] border border-purple-500/30">
                      Featured
                    </span>
                  )}
                </div>

                <p className="text-xs sm:text-sm text-[#A5A0B5] leading-relaxed line-clamp-2">
                  {repo.description}
                </p>
              </div>

              {/* Repo Metadata Footer */}
              <div className="mt-6 pt-4 border-t border-purple-500/10 flex items-center justify-between text-xs font-mono text-[#A5A0B5]">
                <div className="flex items-center gap-2">
                  <span
                    className="w-2.5 h-2.5 rounded-full"
                    style={{ backgroundColor: repo.languageColor }}
                  />
                  <span>{repo.language}</span>
                </div>

                <div className="flex items-center gap-3">
                  <span className="flex items-center gap-1 text-[11px]">
                    <GitBranch className="w-3 h-3 text-[#A5A0B5]" />
                    <span>main</span>
                  </span>
                  <span className="inline-flex items-center gap-1 text-[#67E8F9] group-hover:translate-x-0.5 transition-transform">
                    <span>View</span>
                    <ExternalLink className="w-3 h-3" />
                  </span>
                </div>
              </div>
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  )
}
