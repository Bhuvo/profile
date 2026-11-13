import React from 'react'
import { motion } from 'framer-motion'
import { Sparkles, Database, Bot, Cpu, Server, Zap } from 'lucide-react'
import { currentFocusTopics } from '../../data/currentFocus'
import { SectionHeading } from '../UI/SectionHeading'

const iconMap: Record<string, React.ReactNode> = {
  Sparkles: <Sparkles className="w-5 h-5 text-purple-400" />,
  Database: <Database className="w-5 h-5 text-cyan-400" />,
  Bot: <Bot className="w-5 h-5 text-indigo-400" />,
  Cpu: <Cpu className="w-5 h-5 text-pink-400" />,
  Server: <Server className="w-5 h-5 text-emerald-400" />,
  Zap: <Zap className="w-5 h-5 text-yellow-400" />,
}

export const CurrentFocus: React.FC = () => {
  return (
    <section className="py-24 relative overflow-hidden bg-[#080812]/70">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <SectionHeading
          badge="RESEARCH & EXPLORATION"
          title="What I'm"
          highlight="Exploring Now"
          subtitle="Active investigations at the intersection of Generative AI, cognitive agent workflows, and resilient asynchronous backend architectures."
        />

        {/* Interconnected Neural Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 relative">
          {currentFocusTopics.map((topic, idx) => (
            <motion.div
              key={topic.title}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-40px' }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              className="glass-panel glass-panel-hover p-6 sm:p-7 rounded-2xl border-white/10 hover:border-purple-500/40 relative overflow-hidden group flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between mb-4">
                  <div className="p-3 rounded-xl bg-white/5 border border-white/10 group-hover:border-cyan-400/30 transition-colors">
                    {iconMap[topic.iconName] || <Sparkles className="w-5 h-5 text-purple-400" />}
                  </div>
                  <span className="text-[10px] font-mono text-cyan-300 bg-cyan-950/40 px-2.5 py-1 rounded border border-cyan-400/20">
                    {topic.category}
                  </span>
                </div>

                <h3 className="text-lg font-bold text-white font-display group-hover:text-cyan-300 transition-colors">
                  {topic.title}
                </h3>

                <p className="text-xs sm:text-sm text-[#A1A1B5] mt-2.5 leading-relaxed">
                  {topic.description}
                </p>
              </div>

              {/* Tags */}
              <div className="mt-5 pt-4 border-t border-white/5 flex flex-wrap gap-1.5">
                {topic.tags.map((tag, tIdx) => (
                  <span
                    key={tIdx}
                    className="px-2 py-0.5 rounded text-[10px] font-mono text-purple-200 bg-purple-950/40 border border-purple-500/20"
                  >
                    #{tag}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        <p className="text-xs font-mono text-center text-[#A1A1B5]/60 mt-10">
          * Continuous learning roadmap &amp; experimental prototypes
        </p>
      </div>
    </section>
  )
}
