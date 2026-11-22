import React, { useState } from 'react'
import {
  Code2,
  Cpu,
  Server,
  Layout,
  Wrench,
  Terminal,
  Search,
  Sparkles
} from 'lucide-react'
import { skillCategories } from '../../data/skills'
import { SectionHeading } from '../UI/SectionHeading'
import { SpotlightCard } from '../UI/SpotlightCard'

const categoryIcons: Record<string, React.ReactNode> = {
  Code2: <Code2 className="w-5 h-5 text-violet-400" />,
  Cpu: <Cpu className="w-5 h-5 text-cyan-400" />,
  Server: <Server className="w-5 h-5 text-indigo-400" />,
  Layout: <Layout className="w-5 h-5 text-pink-400" />,
  Wrench: <Wrench className="w-5 h-5 text-emerald-400" />,
}

const categorySpotlights: Record<string, string> = {
  'Programming Languages': 'rgba(139, 92, 246, 0.22)',
  'AI & Generative AI': 'rgba(34, 211, 238, 0.22)',
  'Backend Development': 'rgba(99, 102, 241, 0.22)',
  'Frontend & Mobile': 'rgba(236, 72, 153, 0.22)',
  'Tools & Platforms': 'rgba(16, 185, 129, 0.22)',
}

export const Skills: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState<number | 'all'>('all')
  const [searchQuery, setSearchQuery] = useState('')

  const displayedCategories = skillCategories.filter((cat, idx) => {
    const matchesCategory = selectedCategory === 'all' || selectedCategory === idx
    if (!matchesCategory) return false

    if (!searchQuery.trim()) return true
    const q = searchQuery.toLowerCase()
    const matchesTitle = cat.title.toLowerCase().includes(q)
    const matchesSkill = cat.skills.some((s) => s.name.toLowerCase().includes(q))
    return matchesTitle || matchesSkill
  })

  return (
    <section id="skills" className="py-24 relative overflow-hidden bg-[#080812]/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <SectionHeading
          badge="CAPABILITIES"
          title="My Technical"
          highlight="Arsenal"
          subtitle="A comprehensive toolkit spanning intelligent AI architectures, production mobile systems, and scalable backend infrastructure."
        />

        {/* Filter Controls & Search */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-4 mb-12">
          {/* Category Filters */}
          <div className="flex flex-wrap items-center justify-center gap-2">
            <button
              onClick={() => setSelectedCategory('all')}
              className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-semibold transition-all duration-200 cursor-pointer ${
                selectedCategory === 'all'
                  ? 'bg-gradient-to-r from-violet-600 to-indigo-600 text-white shadow-md shadow-violet-600/30'
                  : 'glass-panel text-[#A1A1B5] hover:text-white border-white/5 hover:border-violet-500/30'
              }`}
            >
              All Categories ({skillCategories.length})
            </button>
            {skillCategories.map((cat, idx) => (
              <button
                key={idx}
                onClick={() => setSelectedCategory(idx)}
                className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-semibold transition-all duration-200 flex items-center gap-2 cursor-pointer ${
                  selectedCategory === idx
                    ? 'bg-violet-600/30 text-cyan-300 border border-violet-500/50 shadow-sm'
                    : 'glass-panel text-[#A1A1B5] hover:text-white border-white/5 hover:border-violet-500/30'
                }`}
              >
                <span>{cat.title}</span>
              </button>
            ))}
          </div>

          {/* Quick Skill Search */}
          <div className="relative w-full md:w-64">
            <Search className="w-4 h-4 text-[#A1A1B5] absolute left-3.5 top-1/2 -translate-y-1/2 pointer-events-none" />
            <input
              type="text"
              placeholder="Search stack..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-10 pr-4 py-2 rounded-xl text-xs sm:text-sm bg-[#121226] border border-white/10 text-white placeholder-[#707088] focus:outline-none focus:border-cyan-400 focus:ring-1 focus:ring-cyan-400 transition-all"
            />
          </div>
        </div>

        {/* Categories Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {displayedCategories.map((category) => {
            const spotlightColor = categorySpotlights[category.title] || 'rgba(139, 92, 246, 0.2)'

            return (
              <SpotlightCard
                key={category.title}
                spotlightColor={spotlightColor}
                className="p-6 sm:p-7 flex flex-col justify-between"
              >
                <div>
                  {/* Header */}
                  <div className="flex items-center justify-between mb-4">
                    <div className="flex items-center gap-3">
                      <div className="p-2.5 rounded-xl bg-white/5 border border-white/10 group-hover:border-violet-500/30 transition-colors">
                        {categoryIcons[category.iconName] || <Terminal className="w-5 h-5 text-violet-400" />}
                      </div>
                      <div>
                        <h3 className="text-base font-bold text-white font-display">
                          {category.title}
                        </h3>
                        <p className="text-xs text-[#A1A1B5] mt-0.5">{category.subtitle}</p>
                      </div>
                    </div>
                  </div>

                  {/* Skills Badges */}
                  <div className="flex flex-wrap gap-2 pt-2">
                    {category.skills.map((skill, sIdx) => {
                      const matchesSearch =
                        searchQuery && skill.name.toLowerCase().includes(searchQuery.toLowerCase())

                      return (
                        <div
                          key={sIdx}
                          className={`px-3 py-1.5 rounded-lg text-xs font-mono transition-all duration-200 flex items-center gap-1.5 ${
                            matchesSearch
                              ? 'bg-cyan-500/30 text-white border border-cyan-400 shadow-[0_0_15px_rgba(34,211,238,0.4)] scale-105'
                              : skill.highlight
                              ? 'bg-violet-950/40 text-violet-200 border border-violet-500/30 hover:border-cyan-400/50 hover:text-cyan-300'
                              : 'bg-[#101020] text-[#A1A1B5] border border-white/5 hover:border-white/20 hover:text-white'
                          }`}
                        >
                          {skill.highlight && (
                            <span className="w-1.5 h-1.5 rounded-full bg-cyan-400 animate-pulse" />
                          )}
                          <span>{skill.name}</span>
                          {skill.level && (
                            <span className="text-[10px] text-cyan-400/80 font-normal">
                              · {skill.level}
                            </span>
                          )}
                        </div>
                      )
                    })}
                  </div>
                </div>

                {/* Category Footer Indicator */}
                <div className="pt-6 mt-4 border-t border-white/5 flex items-center justify-between text-[11px] font-mono text-[#A1A1B5]/60">
                  <span>{category.skills.length} TECHNOLOGIES</span>
                  <span className="text-violet-400 flex items-center gap-1 font-semibold">
                    <Sparkles className="w-3 h-3 text-cyan-400" /> PRODUCTION READY
                  </span>
                </div>
              </SpotlightCard>
            )
          })}
        </div>
      </div>
    </section>
  )
}
