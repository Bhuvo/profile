import React, { useState, useEffect, useRef } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import {
  X,
  Send,
  Bot,
  User,
  RefreshCw,
} from 'lucide-react'
import type { ChatMessage } from '../../types'
import {
  aiKnowledgeBase,
  defaultAssistantGreeting,
  defaultSuggestions,
} from '../../data/knowledgeBase'

interface AIChatModalProps {
  isOpen: boolean
  onClose: () => void
}

export const AIChatModal: React.FC<AIChatModalProps> = ({ isOpen, onClose }) => {
  const [messages, setMessages] = useState<ChatMessage[]>([
    {
      id: 'greeting',
      sender: 'assistant',
      text: defaultAssistantGreeting,
      timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
      suggestions: defaultSuggestions.slice(0, 4),
    },
  ])
  const [inputText, setInputText] = useState('')
  const [isTyping, setIsTyping] = useState(false)
  const messagesEndRef = useRef<HTMLDivElement>(null)

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' })
  }

  useEffect(() => {
    if (isOpen) {
      scrollToBottom()
    }
  }, [isOpen, messages, isTyping])

  // Semantic keyword matcher for local knowledge base (FastAPI/OpenAI extensible architecture)
  const findAnswer = (query: string): { answer: string; suggestions?: string[] } => {
    const clean = query.toLowerCase()

    let bestMatch: { score: number; entry: (typeof aiKnowledgeBase)[0] | null } = {
      score: 0,
      entry: null,
    }

    for (const entry of aiKnowledgeBase) {
      let score = 0
      for (const kw of entry.keywords) {
        if (clean.includes(kw)) {
          score += 3
        }
      }
      if (score > bestMatch.score) {
        bestMatch = { score, entry }
      }
    }

    if (bestMatch.entry && bestMatch.score > 0) {
      return {
        answer: bestMatch.entry.answer,
        suggestions: bestMatch.entry.suggestions,
      }
    }

    // Default polite response with suggested topics
    return {
      answer:
        "I'm specialized in Bhuvaneswaran's engineering background! You can ask about his:\n• **Technical Skills** (Python, Flutter, LLMs, RAG, FastAPI)\n• **DataTerrain Experience** & the 98ms Superbill optimization\n• **Projects** like Jobify, Auto Code Reviewer, and Foode\n• **Target Roles** and contact information.",
      suggestions: [
        'What are his core technical skills?',
        'Tell me about his work experience',
        'How did he optimize Superbill to 98ms?',
      ],
    }
  }

  const handleSend = (textToSend?: string) => {
    const text = (textToSend || inputText).trim()
    if (!text) return

    const userMsg: ChatMessage = {
      id: Date.now().toString(),
      sender: 'user',
      text,
      timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
    }

    setMessages((prev) => [...prev, userMsg])
    setInputText('')
    setIsTyping(true)

    // Simulate neural reasoning delay
    setTimeout(() => {
      const result = findAnswer(text)
      const assistantMsg: ChatMessage = {
        id: (Date.now() + 1).toString(),
        sender: 'assistant',
        text: result.answer,
        timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
        suggestions: result.suggestions,
      }
      setMessages((prev) => [...prev, assistantMsg])
      setIsTyping(false)
    }, 600)
  }

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault()
      handleSend()
    }
  }

  const resetChat = () => {
    setMessages([
      {
        id: 'greeting',
        sender: 'assistant',
        text: defaultAssistantGreeting,
        timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
        suggestions: defaultSuggestions.slice(0, 4),
      },
    ])
  }

  // Format simple markdown text (bold, lists)
  const formatText = (text: string) => {
    const parts = text.split('\n')
    return parts.map((line, idx) => {
      // Bold replacer
      const formattedLine = line.replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>')
      return (
        <span
          key={idx}
          className="block mb-1"
          dangerouslySetInnerHTML={{ __html: formattedLine }}
        />
      )
    })
  }

  if (!isOpen) return null

  return (
    <AnimatePresence>
      <div className="fixed inset-0 sm:inset-auto sm:bottom-24 sm:right-6 z-50 flex items-end justify-center pointer-events-auto">
        {/* Mobile Backdrop */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
          className="sm:hidden fixed inset-0 bg-black/60 backdrop-blur-sm -z-10"
        />

        {/* Chat Card Container */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.9, y: 20 }}
          transition={{ duration: 0.25, ease: [0.16, 1, 0.3, 1] }}
          className="w-full sm:w-[440px] h-[90vh] sm:h-[600px] bg-[#0c0c1a] border border-purple-500/30 rounded-t-3xl sm:rounded-3xl shadow-2xl shadow-purple-950/80 flex flex-col overflow-hidden backdrop-blur-2xl"
        >
          {/* Header */}
          <div className="p-4 bg-gradient-to-r from-purple-950/80 via-[#121226] to-[#0c0c1a] border-b border-white/10 flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="relative w-9 h-9 rounded-xl bg-gradient-to-tr from-purple-600 to-cyan-400 p-[1px] shadow-sm shadow-purple-500/40">
                <div className="w-full h-full bg-[#080812] rounded-[11px] flex items-center justify-center">
                  <Bot className="w-4 h-4 text-cyan-300" />
                </div>
                <span className="absolute bottom-0 right-0 w-2.5 h-2.5 rounded-full bg-emerald-400 border-2 border-[#080812]" />
              </div>
              <div>
                <div className="flex items-center gap-1.5">
                  <h3 className="text-sm font-bold text-white font-display">
                    Bhuvaney AI
                  </h3>
                  <span className="px-1.5 py-0.2 rounded text-[9px] font-mono font-semibold bg-purple-500/20 text-purple-300 border border-purple-500/30">
                    V1.0
                  </span>
                </div>
                <p className="text-[10px] font-mono text-[#A1A1B5]">
                  Portfolio Knowledge Engine
                </p>
              </div>
            </div>

            <div className="flex items-center gap-1">
              <button
                onClick={resetChat}
                className="p-1.5 rounded-lg text-[#A1A1B5] hover:text-white hover:bg-white/5 transition-colors"
                title="Reset conversation"
              >
                <RefreshCw className="w-4 h-4" />
              </button>
              <button
                onClick={onClose}
                className="p-1.5 rounded-lg text-[#A1A1B5] hover:text-white hover:bg-white/5 transition-colors"
                aria-label="Close chat"
              >
                <X className="w-4 h-4" />
              </button>
            </div>
          </div>

          {/* Messages Feed */}
          <div className="flex-1 p-4 overflow-y-auto space-y-4">
            {messages.map((msg) => {
              const isAssistant = msg.sender === 'assistant'
              return (
                <div
                  key={msg.id}
                  className={`flex gap-2.5 ${isAssistant ? 'justify-start' : 'justify-end'}`}
                >
                  {isAssistant && (
                    <div className="w-7 h-7 rounded-lg bg-purple-600/20 border border-purple-500/30 flex items-center justify-center shrink-0 mt-0.5">
                      <Bot className="w-3.5 h-3.5 text-cyan-300" />
                    </div>
                  )}

                  <div className={`max-w-[85%] space-y-2`}>
                    <div
                      className={`p-3.5 rounded-2xl text-xs sm:text-sm leading-relaxed ${
                        isAssistant
                          ? 'bg-[#151528] border border-white/10 text-white rounded-tl-sm'
                          : 'bg-gradient-to-r from-purple-600 to-indigo-600 text-white rounded-tr-sm shadow-md'
                      }`}
                    >
                      {formatText(msg.text)}
                    </div>

                    <div className="flex items-center justify-between text-[10px] font-mono text-[#A1A1B5]/60 px-1">
                      <span>{isAssistant ? 'Bhuvaney AI' : 'You'}</span>
                      <span>{msg.timestamp}</span>
                    </div>

                    {/* Follow-up Suggestion Chips */}
                    {isAssistant && msg.suggestions && msg.suggestions.length > 0 && (
                      <div className="flex flex-wrap gap-1.5 pt-1">
                        {msg.suggestions.map((sug, sIdx) => (
                          <button
                            key={sIdx}
                            onClick={() => handleSend(sug)}
                            className="px-2.5 py-1 rounded-full text-[11px] font-mono text-purple-200 bg-purple-950/40 border border-purple-500/30 hover:border-cyan-400 hover:text-cyan-300 transition-colors text-left"
                          >
                            {sug}
                          </button>
                        ))}
                      </div>
                    )}
                  </div>

                  {!isAssistant && (
                    <div className="w-7 h-7 rounded-lg bg-cyan-600/20 border border-cyan-400/30 flex items-center justify-center shrink-0 mt-0.5">
                      <User className="w-3.5 h-3.5 text-cyan-300" />
                    </div>
                  )}
                </div>
              )
            })}

            {/* Neural Thinking Indicator */}
            {isTyping && (
              <div className="flex gap-2.5 items-center text-xs font-mono text-purple-300">
                <div className="w-7 h-7 rounded-lg bg-purple-600/20 border border-purple-500/30 flex items-center justify-center">
                  <Bot className="w-3.5 h-3.5 text-cyan-300 animate-pulse" />
                </div>
                <div className="flex items-center gap-1.5 px-3 py-2 rounded-xl bg-[#151528] border border-white/10">
                  <span className="w-1.5 h-1.5 rounded-full bg-cyan-400 animate-bounce" />
                  <span className="w-1.5 h-1.5 rounded-full bg-purple-400 animate-bounce [animation-delay:0.2s]" />
                  <span className="w-1.5 h-1.5 rounded-full bg-indigo-400 animate-bounce [animation-delay:0.4s]" />
                  <span className="text-[11px] text-[#A1A1B5] ml-1">Analyzing knowledge graph...</span>
                </div>
              </div>
            )}

            <div ref={messagesEndRef} />
          </div>

          {/* Input Bar */}
          <div className="p-3 bg-[#080812]/90 border-t border-white/10">
            <div className="flex items-center gap-2">
              <input
                type="text"
                value={inputText}
                onChange={(e) => setInputText(e.target.value)}
                onKeyDown={handleKeyDown}
                placeholder="Ask about skills, projects, experience..."
                className="flex-1 px-4 py-2.5 rounded-xl bg-[#151528] border border-white/10 text-xs sm:text-sm text-white placeholder-white/20 focus:outline-none focus:border-cyan-400 transition-colors"
              />
              <button
                onClick={() => handleSend()}
                disabled={!inputText.trim() || isTyping}
                className="p-2.5 rounded-xl bg-gradient-to-r from-purple-600 to-cyan-500 text-white disabled:opacity-40 hover:opacity-90 shadow-md shadow-purple-600/30 transition-all"
                aria-label="Send message"
              >
                <Send className="w-4 h-4" />
              </button>
            </div>
            <div className="text-[9px] font-mono text-center text-[#A1A1B5]/50 mt-2">
              Powered by local structured knowledge · Future FastAPI endpoint ready
            </div>
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  )
}
