import React from "react";
import { Briefcase, Calendar, MapPin, Zap, ChevronRight } from "lucide-react";
import { experiences } from "../../data/experience";
import type { ExperienceItem } from "../../types";
import { SectionHeading } from "../UI/SectionHeading";

export const Experience: React.FC = () => {
  return (
    <section id="experience" className="py-24 px-4 sm:px-6 lg:px-8 relative">
      <div className="max-w-6xl mx-auto">
        <SectionHeading
          eyebrow="Career Trajectory"
          title="Where I've Made an Impact"
          subtitle="Real-world engineering contributions, startup leadership, and high-performance product deployments."
        />

        {/* Timeline Container */}
        <div className="relative mt-12">
          {/* Vertical Glowing Line */}
          <div className="absolute left-4 md:left-1/2 top-4 bottom-4 w-0.5 -translate-x-1/2 bg-gradient-to-b from-cyan-400 via-violet-500 to-indigo-600/20" />

          <div className="flex flex-col gap-12 md:gap-16">
            {experiences.map((exp: ExperienceItem, index: number) => {
              const isEven = index % 2 === 0;

              return (
                <div
                  key={exp.id}
                  className={`relative flex flex-col md:flex-row items-start ${
                    isEven ? "md:flex-row-reverse" : ""
                  }`}
                >
                  {/* Timeline Node Badge on Center Line */}
                  <div className="absolute left-4 md:left-1/2 top-0 -translate-x-1/2 z-20 flex items-center justify-center w-9 h-9 rounded-full bg-[#080812] border-2 border-cyan-400 shadow-[0_0_15px_rgba(34,211,238,0.5)]">
                    {exp.isCurrent ? (
                      <span className="relative flex h-3 w-3">
                        <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-cyan-400 opacity-75" />
                        <span className="relative inline-flex rounded-full h-3 w-3 bg-cyan-500" />
                      </span>
                    ) : (
                      <Briefcase className="w-4 h-4 text-violet-400" />
                    )}
                  </div>

                  {/* Empty Spacer Column for Desktop */}
                  <div className="hidden md:block w-1/2" />

                  {/* Card Content Column */}
                  <div
                    className={`ml-12 md:ml-0 w-full md:w-1/2 ${
                      isEven ? "md:pr-12" : "md:pl-12"
                    }`}
                  >
                    <div className="group relative p-6 sm:p-7 rounded-2xl border border-white/10 bg-[#151528]/80 hover:border-violet-500/50 hover:bg-[#1A1A32] backdrop-blur-xl transition-all duration-300 shadow-xl hover:shadow-[0_0_30px_rgba(139,92,246,0.2)]">
                      {/* Header with Role & Duration */}
                      <div className="flex flex-wrap items-center justify-between gap-2 mb-3">
                        <span className="px-3 py-1 rounded-full text-xs font-semibold bg-violet-500/10 border border-violet-500/30 text-violet-300">
                          {exp.role}
                        </span>
                        {exp.duration && (
                          <div className="flex items-center gap-1.5 text-xs text-[#A1A1B5] font-mono">
                            <Calendar className="w-3.5 h-3.5 text-cyan-400" />
                            <span>{exp.duration}</span>
                          </div>
                        )}
                      </div>

                      {/* Role & Company */}
                      <h3 className="text-xl sm:text-2xl font-bold text-white group-hover:text-cyan-300 transition-colors">
                        {exp.role}
                      </h3>
                      <div className="flex items-center gap-2 text-sm font-semibold text-violet-400 mb-4">
                        <span>{exp.company}</span>
                        {exp.location && (
                          <>
                            <span className="text-white/20">•</span>
                            <span className="text-xs text-[#A1A1B5] flex items-center gap-1 font-normal">
                              <MapPin className="w-3 h-3" /> {exp.location}
                            </span>
                          </>
                        )}
                      </div>

                      {/* Summary */}
                      {exp.summary && (
                        <p className="text-sm text-[#A1A1B5] leading-relaxed mb-4">
                          {exp.summary}
                        </p>
                      )}

                      {/* Bullet Descriptions */}
                      <ul className="flex flex-col gap-2.5 mb-5">
                        {exp.contributions.map((desc: string, dIdx: number) => (
                          <li
                            key={dIdx}
                            className="flex items-start gap-2.5 text-xs sm:text-sm text-[#C8C8DC] leading-relaxed"
                          >
                            <ChevronRight className="w-4 h-4 text-cyan-400 shrink-0 mt-0.5" />
                            <span>{desc}</span>
                          </li>
                        ))}
                      </ul>

                      {/* Key Highlight / Benchmark Achievement Callout */}
                      {exp.achievement && (
                        <div className="p-3.5 rounded-xl border border-cyan-400/30 bg-cyan-500/10 text-cyan-200 text-xs sm:text-sm font-medium flex items-start gap-2.5 mb-5 shadow-[0_0_15px_rgba(34,211,238,0.1)]">
                          <Zap className="w-4 h-4 text-cyan-300 shrink-0 mt-0.5" />
                          <div>
                            <span className="font-bold text-white">Highlight: </span>
                            {exp.achievement}
                          </div>
                        </div>
                      )}

                      {/* Technologies Used */}
                      <div className="flex flex-wrap items-center gap-1.5 pt-3 border-t border-white/5">
                        {exp.technologies.map((tech: string) => (
                          <span
                            key={tech}
                            className="px-2.5 py-0.5 rounded-md text-[11px] font-mono bg-white/5 text-[#A1A1B5] border border-white/5 hover:border-violet-500/40 hover:text-white transition-all"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};
