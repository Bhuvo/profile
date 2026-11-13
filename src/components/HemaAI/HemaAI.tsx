import { useState, useRef, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Bot, X, Send, RefreshCcw } from 'lucide-react'
import { answerQuery, defaultSuggestedQuestions } from '../../data/hemaAI'

interface Message {
  id: string
  sender: 'user' | 'assistant'
  text: string
  timestamp: string
}

export function HemaAI() {
  const [isOpen, setIsOpen] = useState(false)
  const [inputValue, setInputValue] = useState('')
  const [isTyping, setIsTyping] = useState(false)
  const [messages, setMessages] = useState<Message[]>([
    {
      id: 'welcome',
      sender: 'assistant',
      text: "Hello! I am HEMA AI, your intelligent guide to Hemalatha's engineering portfolio. Ask me anything about her Python backend skills, AI/ML projects, M.Tech at SRM, or work experience!",
      timestamp: 'Just now',
    },
  ])

  const chatEndRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (isOpen) {
      chatEndRef.current?.scrollIntoView({ behavior: 'smooth' })
    }
  }, [messages, isOpen, isTyping])

  const handleSend = (textToSend?: string) => {
    const query = (textToSend || inputValue).trim()
    if (!query) return

    const userMsg: Message = {
      id: Date.now().toString(),
      sender: 'user',
      text: query,
      timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
    }

    setMessages((prev) => [...prev, userMsg])
    if (!textToSend) setInputValue('')
    setIsTyping(true)

    // Simulate realistic neural inference delay (500ms)
    setTimeout(() => {
      const responseText = answerQuery(query)
      const assistantMsg: Message = {
        id: (Date.now() + 1).toString(),
        sender: 'assistant',
        text: responseText,
        timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
      }
      setMessages((prev) => [...prev, assistantMsg])
      setIsTyping(false)
    }, 550)
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
        id: 'welcome-reset',
        sender: 'assistant',
        text: "Chat refreshed. How can I assist you with Hemalatha's portfolio today?",
        timestamp: 'Just now',
      },
    ])
  }

  return (
    <>
      {/* Floating Glowing Orb Button with Multi-Color Aurora Glow */}
      <div className="fixed bottom-6 right-6 z-40 flex items-center gap-3">
        {!isOpen && (
          <motion.button
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            whileHover={{ scale: 1.08 }}
            whileTap={{ scale: 0.94 }}
            onClick={() => setIsOpen(true)}
            className="group relative flex items-center gap-3 px-5 py-3.5 rounded-full bg-gradient-to-r from-[#7C3AED] via-[#D946EF] to-[#06B6D4] text-[#F8FAFC] font-display font-bold text-xs tracking-wider shadow-[0_0_35px_rgba(217,70,239,0.7)] hover:shadow-[0_0_50px_rgba(6,182,212,0.8)] border border-white/30 cursor-pointer overflow-hidden"
            aria-label="Open HEMA AI Assistant"
          >
            {/* Glowing sweep effect */}
            <div className="absolute inset-0 -translate-x-full group-hover:translate-x-full transition-transform duration-1000 bg-gradient-to-r from-transparent via-white/30 to-transparent" />
            
            <div className="w-6 h-6 rounded-full bg-[#070510] flex items-center justify-center shadow-inner">
              <Bot className="w-4 h-4 text-[#06B6D4] group-hover:rotate-12 transition-transform" />
            </div>
            <span>Ask Hema AI</span>
            <span className="w-2.5 h-2.5 rounded-full bg-cyan-300 animate-ping" />
          </motion.button>
        )}
      </div>

      {/* Floating AI Glassmorphism Chat Window */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 25, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 25, scale: 0.95 }}
            transition={{ duration: 0.25, ease: [0.16, 1, 0.3, 1] }}
            className="fixed bottom-6 right-4 sm:right-6 z-50 w-[92vw] sm:w-[430px] h-[600px] max-h-[85vh] rounded-3xl glass-panel border-2 border-purple-400/50 bg-[#0D081D]/95 shadow-[0_20px_70px_rgba(7,5,16,0.95)] flex flex-col overflow-hidden"
          >
            {/* Header with Multi-Color Gradient Bar */}
            <div className="p-4 border-b border-purple-500/25 bg-[#140E26] flex items-center justify-between relative">
              <div className="absolute top-0 left-0 right-0 h-[2.5px] bg-gradient-to-r from-[#7C3AED] via-[#D946EF] to-[#06B6D4]" />
              
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-2xl bg-gradient-to-tr from-[#7C3AED] via-[#D946EF] to-[#06B6D4] p-[1.5px] flex items-center justify-center shadow-[0_0_15px_#D946EF]">
                  <div className="w-full h-full bg-[#070510] rounded-[14px] flex items-center justify-center">
                    <Bot className="w-5 h-5 text-[#06B6D4]" />
                  </div>
                </div>
                <div>
                  <div className="flex items-center gap-2">
                    <h3 className="font-display font-bold text-sm text-[#F8FAFC]">
                      HEMA AI
                    </h3>
                    <span className="text-[10px] font-mono px-2 py-0.5 rounded-full bg-gradient-to-r from-purple-900/60 to-cyan-900/60 text-[#67E8F9] border border-cyan-400/40 font-semibold">
                      v1.0 Live
                    </span>
                  </div>
                  <span className="text-[11px] font-mono text-[#A5A0B5] flex items-center gap-1.5 mt-0.5">
                    <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                    Portfolio Intelligence Engine
                  </span>
                </div>
              </div>

              <div className="flex items-center gap-1.5">
                <button
                  onClick={resetChat}
                  className="p-2 rounded-xl text-[#A5A0B5] hover:text-[#F8FAFC] hover:bg-purple-900/40 transition-colors cursor-pointer"
                  title="Clear chat"
                  aria-label="Reset chat conversation"
                >
                  <RefreshCcw className="w-4 h-4" />
                </button>
                <button
                  onClick={() => setIsOpen(false)}
                  className="p-2 rounded-xl text-[#A5A0B5] hover:text-[#F8FAFC] hover:bg-purple-900/40 transition-colors cursor-pointer"
                  aria-label="Close chat window"
                >
                  <X className="w-4 h-4" />
                </button>
              </div>
            </div>

            {/* Chat Messages Body */}
            <div className="flex-1 overflow-y-auto p-4 flex flex-col gap-3.5 text-xs">
              {messages.map((m) => (
                <div
                  key={m.id}
                  className={`flex flex-col ${
                    m.sender === 'user' ? 'items-end' : 'items-start'
                  }`}
                >
                  <div
                    className={`max-w-[85%] p-4 rounded-2xl leading-relaxed whitespace-pre-wrap ${
                      m.sender === 'user'
                        ? 'bg-gradient-to-r from-[#7C3AED] to-[#D946EF] text-white rounded-br-none shadow-[0_4px_20px_rgba(217,70,239,0.35)] font-medium'
                        : 'bg-[#140E26] text-[#F8FAFC] border border-purple-500/30 rounded-bl-none shadow-md'
                    }`}
                  >
                    {m.text}
                  </div>
                  <span className="text-[9px] font-mono text-[#A5A0B5] mt-1 px-1">
                    {m.timestamp}
                  </span>
                </div>
              ))}

              {/* Typing indicator */}
              {isTyping && (
                <div className="flex items-center gap-1.5 p-3 rounded-2xl bg-[#140E26] border border-purple-500/30 text-[#C4B5FD] w-20 shadow-md">
                  <span className="w-2 h-2 rounded-full bg-[#06B6D4] animate-bounce" />
                  <span className="w-2 h-2 rounded-full bg-[#D946EF] animate-bounce [animation-delay:0.15s]" />
                  <span className="w-2 h-2 rounded-full bg-[#34D399] animate-bounce [animation-delay:0.3s]" />
                </div>
              )}

              <div ref={chatEndRef} />
            </div>

            {/* Suggested Quick Questions */}
            <div className="px-4 py-2.5 border-t border-purple-500/20 bg-[#070510]/90">
              <span className="text-[10px] font-mono uppercase text-[#A5A0B5] block mb-2 font-semibold">
                Suggested prompts:
              </span>
              <div className="flex gap-2 overflow-x-auto pb-1 scrollbar-none">
                {defaultSuggestedQuestions.map((q) => (
                  <button
                    key={q}
                    onClick={() => handleSend(q)}
                    className="whitespace-nowrap px-3 py-1.5 rounded-xl bg-[#140E26] text-[11px] font-mono text-[#C4B5FD] hover:text-[#06B6D4] border border-purple-500/30 hover:border-cyan-400 hover:shadow-[0_0_12px_rgba(6,182,212,0.3)] transition-all cursor-pointer font-medium"
                  >
                    {q}
                  </button>
                ))}
              </div>
            </div>

            {/* Input Footer */}
            <div className="p-3 border-t border-purple-500/25 bg-[#140E26]">
              <div className="flex items-center gap-2 bg-[#070510] border border-purple-500/40 rounded-2xl px-4 py-2 focus-within:border-[#06B6D4] focus-within:shadow-[0_0_15px_rgba(6,182,212,0.3)] transition-all">
                <input
                  type="text"
                  value={inputValue}
                  onChange={(e) => setInputValue(e.target.value)}
                  onKeyDown={handleKeyDown}
                  placeholder="Ask about Hema's skills, projects..."
                  className="flex-1 bg-transparent text-xs text-[#F8FAFC] placeholder-[#A5A0B5]/60 focus:outline-none"
                />
                <button
                  onClick={() => handleSend()}
                  disabled={!inputValue.trim()}
                  className="p-2 rounded-xl bg-gradient-to-r from-[#7C3AED] via-[#D946EF] to-[#06B6D4] text-white disabled:opacity-30 disabled:cursor-not-allowed hover:shadow-[0_0_15px_#D946EF] transition-all cursor-pointer"
                  aria-label="Send message"
                >
                  <Send className="w-4 h-4" />
                </button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}
