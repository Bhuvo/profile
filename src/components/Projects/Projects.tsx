import React, { useState } from 'react'
import { projects } from '../../data/projects'
import type { ProjectItem } from '../../types'
import { SectionHeading } from '../UI/SectionHeading'
import { ProjectCard } from './ProjectCard'
import { ProjectModal } from './ProjectModal'
import { SuperbillComparison } from './SuperbillComparison'

export const Projects: React.FC = () => {
  const [selectedProject, setSelectedProject] = useState<ProjectItem | null>(null)
  const [filter, setFilter] = useState<string>('all')

  const categories = ['all', 'AI & GenAI', 'Full Stack & Mobile', 'Performance Engineering']

  const filteredProjects = projects.filter((project) => {
    if (filter === 'all') return true
    if (filter === 'AI & GenAI')
      return project.category.includes('AI') || project.category.includes('Recruitment')
    if (filter === 'Full Stack & Mobile')
      return project.category.includes('Restaurant') || project.category.includes('Platform')
    if (filter === 'Performance Engineering')
      return project.category.includes('Performance') || project.category.includes('Optimization')
    return true
  })

  return (
    <section id="projects" className="py-24 relative overflow-hidden">
      {/* Background ambient lighting */}
      <div className="absolute top-1/3 left-1/4 w-[500px] h-[500px] bg-violet-600/10 rounded-full blur-[140px] pointer-events-none -z-10" />
      <div className="absolute bottom-1/4 right-1/4 w-[500px] h-[500px] bg-cyan-500/10 rounded-full blur-[140px] pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <SectionHeading
          badge="PORTFOLIO INNOVATIONS"
          title="Things I've"
          highlight="Built"
          subtitle="Turning ideas into intelligent products. Real-world applications, AI agent tools, and low-latency system optimizations."
        />

        {/* Filter Pills */}
        <div className="flex flex-wrap items-center justify-center gap-2 mb-12">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setFilter(cat)}
              className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-semibold transition-all duration-200 capitalize cursor-pointer ${
                filter === cat
                  ? 'bg-gradient-to-r from-violet-600 via-indigo-600 to-cyan-500 text-white shadow-md shadow-violet-600/30'
                  : 'glass-panel text-[#A1A1B5] hover:text-white border-white/5 hover:border-violet-500/30'
              }`}
            >
              {cat === 'all' ? `All Projects (${projects.length})` : cat}
            </button>
          ))}
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {filteredProjects.map((project, idx) => (
            <ProjectCard
              key={project.id}
              project={project}
              onSelect={setSelectedProject}
              index={idx}
            />
          ))}
        </div>

        {/* Featured Live Benchmark Tool: Superbill Optimization Interactive Profiler */}
        <div className="mt-8">
          <SuperbillComparison />
        </div>

        {/* Modal for In-depth Architecture & Problem/Solution Breakdown */}
        <ProjectModal
          project={selectedProject}
          onClose={() => setSelectedProject(null)}
        />
      </div>
    </section>
  )
}
