import React, { useState } from 'react'
import { motion } from 'framer-motion'
import {
  Code2,
  Cpu,
  Server,
  Layout,
  Wrench,
  Terminal,
} from 'lucide-react'
import { skillCategories } from '../../data/skills'
import { SectionHeading } from '../UI/SectionHeading'

const categoryIcons: Record<string, React.ReactNode> = {
  Code2: <Code2 className="w-5 h-5 text-purple-400" />,
  Cpu: <Cpu className="w-5 h-5 text-cyan-400" />,
  Server: <Server className="w-5 h-5 text-indigo-400" />,
  Layout: <Layout className="w-5 h-5 text-blue-400" />,
  Wrench: <Wrench className="w-5 h-5 text-violet-400" />,
}

export const Skills: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState<number | 'all'>('all')

  const displayedCategories =
    selectedCategory === 'all'
      ? skillCategories
      : [skillCategories[selectedCategory]]

  return (
    <section id="skills" className="py-24 relative overflow-hidden bg-[#080812]/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <SectionHeading
          badge="CAPABILITIES"
          title="My Technical"
          highlight="Arsenal"
          subtitle="A comprehensive toolkit spanning intelligent AI architectures, production mobile systems, and scalable backend infrastructure."
        />

        {/* Category Filters */}
        <div className="flex flex-wrap items-center justify-center gap-2 mb-12">
          <button
            onClick={() => setSelectedCategory('all')}
            className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-medium transition-all duration-200 ${
              selectedCategory === 'all'
                ? 'bg-gradient-to-r from-purple-600 to-indigo-600 text-white shadow-md shadow-purple-600/30'
                : 'glass-panel text-[#A1A1B5] hover:text-white border-white/5 hover:border-white/20'
            }`}
          >
            All Categories ({skillCategories.length})
          </button>
          {skillCategories.map((cat, idx) => (
            <button
              key={idx}
              onClick={() => setSelectedCategory(idx)}
              className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-medium transition-all duration-200 flex items-center gap-2 ${
                selectedCategory === idx
                  ? 'bg-purple-600/30 text-cyan-300 border border-purple-500/50 shadow-sm'
                  : 'glass-panel text-[#A1A1B5] hover:text-white border-white/5 hover:border-white/20'
              }`}
            >
              <span>{cat.title}</span>
            </button>
          ))}
        </div>

        {/* Categories Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {displayedCategories.map((category, catIdx) => (
            <motion.div
              key={category.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-40px' }}
              transition={{ duration: 0.5, delay: catIdx * 0.1 }}
              className={`glass-panel p-6 sm:p-7 rounded-2xl border-white/10 ${category.borderColor} transition-all duration-300 group flex flex-col justify-between`}
            >
              <div>
                {/* Header */}
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center gap-3">
                    <div className="p-2.5 rounded-xl bg-white/5 border border-white/10 group-hover:border-purple-500/30 transition-colors">
                      {categoryIcons[category.iconName] || <Terminal className="w-5 h-5 text-purple-400" />}
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
                  {category.skills.map((skill, sIdx) => (
                    <div
                      key={sIdx}
                      className={`px-3 py-1.5 rounded-lg text-xs font-mono transition-all duration-200 flex items-center gap-1.5 ${
                        skill.highlight
                          ? 'bg-purple-950/40 text-purple-200 border border-purple-500/30 hover:border-cyan-400/50 hover:text-cyan-300'
                          : 'bg-[#101020] text-[#A1A1B5] border border-white/5 hover:border-white/20 hover:text-white'
                      }`}
                    >
                      {skill.highlight && (
                        <span className="w-1 h-1 rounded-full bg-cyan-400 animate-pulse" />
                      )}
                      <span>{skill.name}</span>
                      {skill.level && (
                        <span className="text-[10px] text-cyan-400/80 font-normal">
                          · {skill.level}
                        </span>
                      )}
                    </div>
                  ))}
                </div>
              </div>

              {/* Category Footer Indicator */}
              <div className="pt-6 mt-4 border-t border-white/5 flex items-center justify-between text-[11px] font-mono text-[#A1A1B5]/60">
                <span>{category.skills.length} TECHNOLOGIES</span>
                <span className="text-purple-400 group-hover:text-cyan-300 transition-colors">
                  PROD READY
                </span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
