import React from 'react'
import { motion } from 'framer-motion'
import { GraduationCap, Calendar, BookOpen, CheckCircle2, Award } from 'lucide-react'
import { educationData } from '../../data/education'
import { SectionHeading } from '../UI/SectionHeading'
import { SpotlightCard } from '../UI/SpotlightCard'

export const Education: React.FC = () => {
  return (
    <section id="education" className="py-24 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <SectionHeading
          badge="EDUCATION"
          title="Academic"
          highlight="Foundation"
          subtitle="Rigorous engineering coursework covering computer science fundamentals, algorithm design, and software systems."
        />

        <div className="max-w-3xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-50px' }}
            transition={{ duration: 0.6 }}
          >
            <SpotlightCard
              spotlightColor="rgba(34, 211, 238, 0.2)"
              className="p-8 sm:p-10 rounded-3xl border border-purple-500/20 bg-[#151528]/80 backdrop-blur-xl relative overflow-hidden group shadow-xl shadow-purple-950/20"
            >
              {/* Ambient Background Gradient */}
              <div className="absolute top-0 right-0 w-80 h-80 bg-gradient-to-bl from-purple-600/15 via-indigo-600/10 to-transparent rounded-full blur-3xl pointer-events-none" />

              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-6">
                <div className="flex items-center gap-4">
                  <div className="p-3.5 rounded-2xl bg-gradient-to-tr from-purple-600 to-cyan-500 text-white shadow-lg shadow-purple-600/30">
                    <GraduationCap className="w-8 h-8" />
                  </div>
                  <div>
                    <span className="text-xs font-mono text-cyan-400 uppercase tracking-wider font-semibold">
                      UNDERGRADUATE DEGREE
                    </span>
                    <h3 className="text-xl sm:text-2xl font-bold text-white font-display mt-0.5">
                      {educationData.degree}
                    </h3>
                  </div>
                </div>

                {/* CGPA Badge */}
                <div className="inline-flex items-center gap-2 px-4 py-2 rounded-2xl bg-purple-950/60 border border-purple-500/40 text-purple-200 self-start sm:self-auto shadow-[0_0_15px_rgba(139,92,246,0.2)]">
                  <Award className="w-4 h-4 text-cyan-400" />
                  <div>
                    <div className="text-[10px] font-mono text-[#A1A1B5]">CGPA</div>
                    <div className="text-sm font-bold text-white font-mono">{educationData.cgpa}</div>
                  </div>
                </div>
              </div>

              <div className="space-y-4 pt-2">
                <div className="text-base sm:text-lg font-semibold text-white">
                  {educationData.institution}
                </div>

                <div className="flex flex-wrap items-center gap-4 text-xs font-mono text-[#A1A1B5]">
                  <div className="flex items-center gap-1.5">
                    <Calendar className="w-4 h-4 text-cyan-400" />
                    <span>{educationData.duration}</span>
                  </div>
                  <span className="text-white/20">•</span>
                  <span>{educationData.location}</span>
                </div>

                <div className="pt-4 border-t border-white/5">
                  <div className="text-xs font-mono uppercase tracking-wider text-purple-300 mb-3 flex items-center gap-1.5">
                    <BookOpen className="w-3.5 h-3.5 text-purple-400" />
                    <span>Core Academic Disciplines</span>
                  </div>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                    {educationData.focusAreas.map((area, idx) => (
                      <div
                        key={idx}
                        className="flex items-center gap-2 text-xs text-[#C8C8DC] bg-white/5 p-2.5 rounded-xl border border-white/5 hover:border-violet-500/30 transition-all"
                      >
                        <CheckCircle2 className="w-3.5 h-3.5 text-cyan-400 shrink-0" />
                        <span>{area}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </SpotlightCard>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
