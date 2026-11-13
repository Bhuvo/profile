import React, { useState } from 'react'
import { Activity, Play } from 'lucide-react'

export const SuperbillComparison: React.FC = () => {
  const [isPlaying, setIsPlaying] = useState(false)
  const [progressBefore, setProgressBefore] = useState(100)
  const [progressAfter, setProgressAfter] = useState(100)

  const runSimulation = () => {
    setIsPlaying(true)
    setProgressBefore(0)
    setProgressAfter(0)

    // After simulation: 98ms completes almost instantly
    setTimeout(() => {
      setProgressAfter(100)
    }, 98)

    // Before simulation: takes 1000ms (~1s)
    setTimeout(() => {
      setProgressBefore(100)
      setIsPlaying(false)
    }, 1000)
  }

  return (
    <div className="glass-panel p-6 sm:p-7 rounded-2xl border-cyan-500/30 bg-[#121226]/80 my-6">
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-6">
        <div>
          <div className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full text-[11px] font-mono text-cyan-300 bg-cyan-950/40 border border-cyan-400/30 mb-1.5">
            <Activity className="w-3 h-3 text-cyan-400" />
            <span>BENCHMARK COMPARISON</span>
          </div>
          <h4 className="text-base sm:text-lg font-bold text-white font-display">
            Menu Navigation Latency: Before vs. After
          </h4>
          <p className="text-xs text-[#A1A1B5] mt-0.5">
            Real performance profiling on Superbill clinical template menus
          </p>
        </div>

        <button
          onClick={runSimulation}
          disabled={isPlaying}
          className="inline-flex items-center gap-2 px-4 py-2 rounded-xl text-xs font-semibold font-mono text-white bg-gradient-to-r from-purple-600 to-cyan-500 hover:opacity-90 shadow-md shadow-cyan-500/20 disabled:opacity-50 transition-all self-start sm:self-auto"
        >
          <Play className={`w-3.5 h-3.5 ${isPlaying ? 'animate-spin' : ''}`} />
          <span>{isPlaying ? 'PROFILING...' : 'TEST LATENCY SPEED'}</span>
        </button>
      </div>

      {/* Latency Comparison Bars */}
      <div className="space-y-4">
        {/* BEFORE Optimization */}
        <div className="space-y-1.5">
          <div className="flex items-center justify-between text-xs font-mono">
            <span className="text-red-400 font-semibold flex items-center gap-1.5">
              <span className="w-2 h-2 rounded-full bg-red-500" />
              BEFORE OPTIMIZATION: ~1,000ms (1.7s peak)
            </span>
            <span className="text-[#A1A1B5]">Noticeable Frame Stall</span>
          </div>
          <div className="h-4 w-full bg-[#080812] rounded-full overflow-hidden p-0.5 border border-red-500/20">
            <div
              className="h-full bg-gradient-to-r from-red-600 to-amber-500 rounded-full transition-all duration-1000 ease-linear"
              style={{ width: `${progressBefore}%` }}
            />
          </div>
        </div>

        {/* AFTER Optimization */}
        <div className="space-y-1.5">
          <div className="flex items-center justify-between text-xs font-mono">
            <span className="text-emerald-400 font-semibold flex items-center gap-1.5">
              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
              AFTER BHUVANESWARAN'S OPTIMIZATION: 98ms
            </span>
            <span className="text-cyan-300 font-bold">Over 90% Faster (Sub-100ms)</span>
          </div>
          <div className="h-4 w-full bg-[#080812] rounded-full overflow-hidden p-0.5 border border-cyan-400/40">
            <div
              className="h-full bg-gradient-to-r from-cyan-400 via-indigo-500 to-purple-500 rounded-full transition-all duration-100 ease-out shadow-sm shadow-cyan-400"
              style={{ width: `${progressAfter}%` }}
            />
          </div>
        </div>
      </div>

      {/* Metric Breakdown */}
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 mt-6 pt-5 border-t border-white/5 text-center">
        <div className="p-3 rounded-xl bg-white/5 border border-white/5">
          <div className="text-[11px] font-mono text-[#A1A1B5]">INITIAL TIME</div>
          <div className="text-lg font-bold text-red-400 font-mono mt-0.5">~1,000 ms</div>
        </div>
        <div className="p-3 rounded-xl bg-cyan-950/20 border border-cyan-500/30">
          <div className="text-[11px] font-mono text-cyan-300">OPTIMIZED TIME</div>
          <div className="text-lg font-bold text-cyan-300 font-mono mt-0.5">98 ms</div>
        </div>
        <div className="p-3 rounded-xl bg-purple-950/20 border border-purple-500/30">
          <div className="text-[11px] font-mono text-purple-300">TOTAL REDUCTION</div>
          <div className="text-lg font-bold text-emerald-400 font-mono mt-0.5">&gt; 90%</div>
        </div>
      </div>
    </div>
  )
}
