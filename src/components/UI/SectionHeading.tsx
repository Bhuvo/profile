import React from "react";
import { Sparkles } from "lucide-react";

export interface SectionHeadingProps {
  badge?: string;
  eyebrow?: string;
  title: string;
  highlight?: string;
  subtitle?: string;
  centered?: boolean;
}

export const SectionHeading: React.FC<SectionHeadingProps> = ({
  badge,
  eyebrow,
  title,
  highlight,
  subtitle,
  centered = true
}) => {
  const displayEyebrow = badge || eyebrow;

  return (
    <div className={`mb-12 md:mb-16 ${centered ? "text-center max-w-3xl mx-auto" : "max-w-3xl"}`}>
      {displayEyebrow && (
        <div
          className={`inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-semibold tracking-wider uppercase mb-3.5 border border-violet-500/30 bg-violet-500/10 text-cyan-300 shadow-[0_0_15px_rgba(139,92,246,0.2)] ${
            centered ? "mx-auto" : ""
          }`}
        >
          <Sparkles className="w-3.5 h-3.5 text-cyan-400 animate-pulse" />
          <span>{displayEyebrow}</span>
        </div>
      )}
      <h2 className="text-3xl md:text-5xl font-extrabold tracking-tight text-white">
        <span className="text-gradient">{title}</span>
        {highlight && (
          <>
            {" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-violet-400 to-cyan-300">
              {highlight}
            </span>
          </>
        )}
      </h2>
      {subtitle && (
        <p className="mt-4 text-base md:text-lg text-[#A1A1B5] leading-relaxed">
          {subtitle}
        </p>
      )}
      <div className={`mt-4 h-1 w-20 rounded-full bg-gradient-to-r from-violet-500 via-indigo-500 to-cyan-400 ${centered ? "mx-auto" : ""}`} />
    </div>
  );
};
