import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Briefcase, Calendar, MapPin, Zap, ChevronRight, ChevronDown, CheckCircle2, Award } from "lucide-react";
import { experiences } from "../../data/experience";
import type { ExperienceItem } from "../../types";
import { SectionHeading } from "../UI/SectionHeading";
import { SpotlightCard } from "../UI/SpotlightCard";

export const Experience: React.FC = () => {
  const [expandedIds, setExpandedIds] = useState<Record<string, boolean>>({});

  const toggleExpand = (id: string) => {
    setExpandedIds((prev) => ({
      ...prev,
      [id]: !prev[id],
    }));
  };

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
          {/* Vertical Glowing Line with Traveling Beam */}
          <div className="absolute left-4 md:left-1/2 top-4 bottom-4 w-0.5 -translate-x-1/2 bg-gradient-to-b from-cyan-400 via-violet-500 to-indigo-600/20 overflow-hidden">
            <motion.div
              className="w-full h-32 bg-gradient-to-b from-transparent via-cyan-300 to-transparent shadow-[0_0_12px_#22D3EE]"
              animate={{ y: ["-100%", "500%"] }}
              transition={{ duration: 4, repeat: Infinity, ease: "linear" }}
            />
          </div>

          <div className="flex flex-col gap-12 md:gap-16">
            {experiences.map((exp: ExperienceItem, index: number) => {
              const isEven = index % 2 === 0;
              const isExpanded = !!expandedIds[exp.id];

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
                    <SpotlightCard
                      spotlightColor="rgba(139, 92, 246, 0.2)"
                      className="group relative p-6 sm:p-7 rounded-2xl border border-white/10 bg-[#151528]/80 hover:border-violet-500/50 backdrop-blur-xl transition-all duration-300 shadow-xl hover:shadow-[0_0_30px_rgba(139,92,246,0.2)]"
                    >
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

                      {/* Contributions List (Shows top 2 when collapsed, all when expanded) */}
                      <ul className="flex flex-col gap-2.5 mb-4">
                        {(isExpanded ? exp.contributions : exp.contributions.slice(0, 2)).map(
                          (desc: string, dIdx: number) => (
                            <li
                              key={dIdx}
                              className="flex items-start gap-2.5 text-xs sm:text-sm text-[#C8C8DC] leading-relaxed"
                            >
                              <ChevronRight className="w-4 h-4 text-cyan-400 shrink-0 mt-0.5" />
                              <span>{desc}</span>
                            </li>
                          )
                        )}
                      </ul>

                      {/* Expandable "View Experience Details" Trigger */}
                      <div className="mb-4">
                        <button
                          onClick={() => toggleExpand(exp.id)}
                          className="inline-flex items-center gap-1.5 text-xs font-semibold text-cyan-300 hover:text-white transition-colors cursor-pointer group/btn py-1"
                          aria-expanded={isExpanded}
                        >
                          <span>{isExpanded ? "Collapse Experience Details" : "View Experience Details"}</span>
                          <ChevronDown
                            className={`w-3.5 h-3.5 transition-transform duration-300 ${
                              isExpanded ? "rotate-180" : "group-hover/btn:translate-y-0.5"
                            }`}
                          />
                        </button>
                      </div>

                      {/* Expanded Drawer */}
                      <AnimatePresence>
                        {isExpanded && (
                          <motion.div
                            initial={{ opacity: 0, height: 0 }}
                            animate={{ opacity: 1, height: "auto" }}
                            exit={{ opacity: 0, height: 0 }}
                            transition={{ duration: 0.3, ease: "easeInOut" }}
                            className="overflow-hidden space-y-4 mb-4 border-t border-white/10 pt-4"
                          >
                            {/* Key Responsibilities */}
                            {exp.keyResponsibilities && exp.keyResponsibilities.length > 0 && (
                              <div className="space-y-2">
                                <h4 className="text-[11px] font-mono uppercase tracking-wider text-purple-300 font-bold flex items-center gap-1.5">
                                  <CheckCircle2 className="w-3.5 h-3.5 text-cyan-400" />
                                  <span>Core Responsibilities</span>
                                </h4>
                                <div className="grid grid-cols-1 gap-1.5">
                                  {exp.keyResponsibilities.map((resp, rIdx) => (
                                    <div
                                      key={rIdx}
                                      className="flex items-start gap-2 text-xs text-[#C8C8DC] p-2 rounded-lg bg-white/5 border border-white/5"
                                    >
                                      <span className="text-cyan-400 text-[10px] mt-0.5">•</span>
                                      <span>{resp}</span>
                                    </div>
                                  ))}
                                </div>
                              </div>
                            )}

                            {/* Key Achievements */}
                            {exp.achievements && exp.achievements.length > 0 && (
                              <div className="space-y-2">
                                <h4 className="text-[11px] font-mono uppercase tracking-wider text-cyan-300 font-bold flex items-center gap-1.5">
                                  <Award className="w-3.5 h-3.5 text-cyan-400" />
                                  <span>Key Achievements</span>
                                </h4>
                                <div className="space-y-1.5">
                                  {exp.achievements.map((ach, aIdx) => (
                                    <div
                                      key={aIdx}
                                      className="p-2.5 rounded-xl border border-cyan-400/30 bg-cyan-500/10 text-cyan-200 text-xs flex items-start gap-2 shadow-[0_0_12px_rgba(34,211,238,0.1)]"
                                    >
                                      <Zap className="w-3.5 h-3.5 text-cyan-300 shrink-0 mt-0.5" />
                                      <span>{ach}</span>
                                    </div>
                                  ))}
                                </div>
                              </div>
                            )}
                          </motion.div>
                        )}
                      </AnimatePresence>

                      {/* Main Achievement Highlight (When Collapsed) */}
                      {exp.achievement && !isExpanded && (
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
                    </SpotlightCard>
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
