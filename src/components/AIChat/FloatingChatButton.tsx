import React from 'react'
import { motion } from 'framer-motion'
import { Bot, Sparkles } from 'lucide-react'

interface FloatingChatButtonProps {
  isOpen: boolean
  onClick: () => void
}

export const FloatingChatButton: React.FC<FloatingChatButtonProps> = ({ isOpen, onClick }) => {
  return (
    <div className="fixed bottom-6 right-6 z-40 flex items-center gap-3">
      {/* Tooltip Pill */}
      {!isOpen && (
        <motion.div
          initial={{ opacity: 0, x: 10 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 1 }}
          className="hidden sm:flex items-center gap-2 px-3 py-1.5 rounded-full glass-panel border-purple-500/30 text-xs font-mono text-purple-200 shadow-lg shadow-purple-950/40 pointer-events-none"
        >
          <Sparkles className="w-3.5 h-3.5 text-cyan-400" />
          <span>Ask Bhuvaney AI</span>
        </motion.div>
      )}

      {/* Floating Button with pulsing aura */}
      <motion.button
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        onClick={onClick}
        className="relative group p-4 rounded-2xl bg-gradient-to-tr from-purple-600 via-indigo-600 to-cyan-500 text-white shadow-xl shadow-purple-600/40 hover:shadow-cyan-400/40 transition-shadow"
        aria-label="Open Bhuvaney AI Assistant"
      >
        {/* Pulsing ring */}
        <span className="absolute -inset-1 rounded-2xl bg-gradient-to-r from-purple-600 to-cyan-400 opacity-40 blur-sm group-hover:opacity-75 transition-opacity animate-pulse" />

        <div className="relative flex items-center justify-center">
          <Bot className="w-6 h-6 text-white" />
          <span className="absolute -top-1 -right-1 w-3 h-3 rounded-full bg-emerald-400 border-2 border-[#080812]" />
        </div>
      </motion.button>
    </div>
  )
}
