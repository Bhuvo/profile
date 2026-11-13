import React, { useEffect, useState, useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import { Smartphone, Globe, Activity, Layers } from 'lucide-react'
import { SectionHeading } from '../UI/SectionHeading'
import { highlightsData } from '../../data/highlights'

// Verified Counter Component with trigger on scroll
const Counter: React.FC<{ target: number; suffix?: string; duration?: number }> = ({
  target,
  suffix = '',
  duration = 1500,
}) => {
  const [count, setCount] = useState(0)
  const ref = useRef<HTMLSpanElement>(null)
  const inView = useInView(ref, { once: true, margin: '-50px' })

  useEffect(() => {
    if (!inView) return

    let start = 0
    const stepTime = 20
    const totalSteps = duration / stepTime
    const increment = target / totalSteps

    const timer = setInterval(() => {
      start += increment
      if (start >= target) {
        setCount(target)
        clearInterval(timer)
      } else {
        setCount(Math.floor(start))
      }
    }, stepTime)

    return () => clearInterval(timer)
  }, [inView, target, duration])

  return (
    <span ref={ref}>
      {count}
      {suffix}
    </span>
  )
}

const iconMap: Record<string, React.ReactNode> = {
  Smartphone: <Smartphone className="w-6 h-6 text-purple-400" />,
  Globe: <Globe className="w-6 h-6 text-indigo-400" />,
  Gauge: <Activity className="w-6 h-6 text-cyan-400" />,
  Layers: <Layers className="w-6 h-6 text-pink-400" />,
}

export const Achievements: React.FC = () => {
  return (
    <section className="py-20 relative overflow-hidden bg-[#0a0a16]/40">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <SectionHeading
          badge="PROVEN METRICS"
          title="Engineering That"
          highlight="Makes a Difference"
          subtitle="Measurable production achievements across cross-platform engineering, performance optimization, and architectural breadth."
        />

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {highlightsData.map((item, idx) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-40px' }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              className="glass-panel glass-panel-hover p-6 sm:p-7 rounded-2xl border-white/10 relative overflow-hidden group flex flex-col justify-between"
            >
              {/* Glow Accent */}
              <div
                className={`absolute -top-10 -right-10 w-28 h-28 bg-gradient-to-br ${item.glowColor} opacity-15 rounded-full blur-xl group-hover:opacity-30 transition-opacity`}
              />

              <div>
                <div className="flex items-center justify-between mb-4">
                  <div className="p-3 rounded-xl bg-white/5 border border-white/10">
                    {iconMap[item.iconName]}
                  </div>
                  <span className="text-[10px] font-mono text-cyan-400 tracking-wider uppercase bg-cyan-950/40 px-2 py-0.5 rounded border border-cyan-400/20">
                    VERIFIED
                  </span>
                </div>

                {/* Counter Metric */}
                <div className="text-3xl sm:text-4xl font-extrabold font-display text-white group-hover:text-cyan-300 transition-colors">
                  {item.numericValue !== undefined ? (
                    <Counter target={item.numericValue} suffix={item.suffix} />
                  ) : (
                    <span>{item.value}</span>
                  )}
                </div>

                <h3 className="text-sm font-bold text-white mt-2 font-display">
                  {item.title}
                </h3>

                <p className="text-xs text-[#A1A1B5] mt-1 leading-relaxed">
                  {item.description}
                </p>
              </div>

              <div className="mt-5 pt-4 border-t border-white/5 text-[11px] text-purple-300/90 leading-normal">
                {item.impact}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
