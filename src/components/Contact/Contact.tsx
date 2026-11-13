import { useState } from 'react'
import { Mail, MapPin, Send, CheckCircle2, AlertCircle, Sparkles } from 'lucide-react'
import confetti from 'canvas-confetti'
import { personalData } from '../../data/personal'
import { socialLinks } from '../../data/social'
import { GithubIcon, LinkedinIcon } from '../UI/SocialIcons'

export function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
    honeyPot: '', // Spam bot protection field
  })

  const [status, setStatus] = useState<'idle' | 'submitting' | 'success' | 'error'>('idle')
  const [errorMessage, setErrorMessage] = useState('')

  const githubLink = socialLinks.find((l) => l.name === 'GitHub')?.url || 'https://github.com/hema-official'
  const linkedinLink = socialLinks.find((l) => l.name === 'LinkedIn')?.url || 'https://www.linkedin.com/in/hemalatha-p-837462424/'

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()

    // 1. Bot spam protection
    if (formData.honeyPot) {
      setStatus('success')
      return
    }

    // 2. Validation
    if (!formData.name.trim() || !formData.email.trim() || !formData.message.trim()) {
      setStatus('error')
      setErrorMessage('Please complete all required fields.')
      return
    }

    // Email regex validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    if (!emailRegex.test(formData.email.trim())) {
      setStatus('error')
      setErrorMessage('Please provide a valid email address.')
      return
    }

    setStatus('submitting')
    setErrorMessage('')

    // Client-side secure dispatch simulation
    setTimeout(() => {
      setStatus('success')
      setFormData({
        name: '',
        email: '',
        subject: '',
        message: '',
        honeyPot: '',
      })

      // Fire vibrant multi-color celebratory confetti
      confetti({
        particleCount: 75,
        spread: 70,
        origin: { y: 0.75 },
        colors: ['#06B6D4', '#D946EF', '#8B5CF6', '#10B981', '#F59E0B'],
      })
    }, 800)
  }

  return (
    <section id="contact" className="relative py-24 sm:py-32 overflow-hidden bg-[#070510]">
      {/* Background radial glow */}
      <div className="absolute bottom-0 right-1/4 w-[600px] h-[600px] rounded-full bg-gradient-to-tr from-[#D946EF]/15 via-[#8B5CF6]/15 to-[#06B6D4]/15 blur-[180px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#140E26] border border-cyan-500/30 text-xs font-mono text-[#06B6D4] uppercase tracking-wider mb-4 shadow-[0_0_15px_rgba(6,182,212,0.2)]">
            <Sparkles className="w-3.5 h-3.5 text-[#D946EF]" />
            <span>LET'S CONNECT</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-display font-bold text-[#F8FAFC]">
            LET'S TURN IDEAS INTO{' '}
            <span className="text-gradient-aurora">
              INTELLIGENCE.
            </span>
          </h2>
          <p className="mt-3 text-base text-[#C4B5FD]">
            Interested in Python development, AI applications, or building something meaningful? I'd love to connect.
          </p>
        </div>

        {/* Two-Column Grid: Direct Info + Contact Form */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          
          {/* Left Column: Direct Communication Channels */}
          <div className="lg:col-span-5 flex flex-col gap-6">
            <div className="rounded-3xl glass-card p-6 sm:p-8 border border-purple-500/30 bg-[#140E26]/85">
              <h3 className="text-xl font-display font-bold text-[#F8FAFC] mb-2">
                Direct Channels
              </h3>
              <p className="text-xs sm:text-sm text-[#C4B5FD]/90 leading-relaxed mb-6">
                Feel free to email me directly or explore my code and professional background on GitHub and LinkedIn.
              </p>

              <div className="flex flex-col gap-4">
                {/* Email */}
                <a
                  href={`mailto:${personalData.email}`}
                  className="flex items-center gap-4 p-4 rounded-2xl bg-[#0D081D] hover:bg-[#140E26] border border-purple-500/20 hover:border-cyan-400/50 hover:shadow-[0_0_20px_rgba(6,182,212,0.3)] text-xs sm:text-sm text-[#F8FAFC] transition-all group"
                >
                  <div className="w-10 h-10 rounded-xl bg-cyan-950/40 border border-cyan-500/30 flex items-center justify-center text-[#06B6D4] group-hover:scale-110 transition-transform">
                    <Mail className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="text-[10px] font-mono text-[#A5A0B5] uppercase block font-semibold">
                      Email Address
                    </span>
                    <span className="font-mono text-xs text-[#67E8F9] group-hover:text-white transition-colors">
                      {personalData.email}
                    </span>
                  </div>
                </a>

                {/* Location */}
                <div className="flex items-center gap-4 p-4 rounded-2xl bg-[#0D081D] border border-purple-500/20 text-xs sm:text-sm text-[#F8FAFC]">
                  <div className="w-10 h-10 rounded-xl bg-purple-950/40 border border-purple-500/30 flex items-center justify-center text-[#E879F9]">
                    <MapPin className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="text-[10px] font-mono text-[#A5A0B5] uppercase block font-semibold">
                      Location
                    </span>
                    <span className="font-mono text-xs text-[#F8FAFC]">
                      {personalData.location}
                    </span>
                  </div>
                </div>

                {/* LinkedIn */}
                <a
                  href={linkedinLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-4 p-4 rounded-2xl bg-[#0D081D] hover:bg-[#140E26] border border-purple-500/20 hover:border-fuchsia-400/50 hover:shadow-[0_0_20px_rgba(217,70,239,0.3)] text-xs sm:text-sm text-[#F8FAFC] transition-all group"
                >
                  <div className="w-10 h-10 rounded-xl bg-fuchsia-950/40 border border-fuchsia-500/30 flex items-center justify-center text-[#D946EF] group-hover:scale-110 transition-transform">
                    <LinkedinIcon className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="text-[10px] font-mono text-[#A5A0B5] uppercase block font-semibold">
                      LinkedIn Network
                    </span>
                    <span className="font-mono text-xs text-[#E879F9] group-hover:text-white transition-colors">
                      linkedin.com/in/hemalatha-p
                    </span>
                  </div>
                </a>

                {/* GitHub */}
                <a
                  href={githubLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-4 p-4 rounded-2xl bg-[#0D081D] hover:bg-[#140E26] border border-purple-500/20 hover:border-emerald-400/50 hover:shadow-[0_0_20px_rgba(16,185,129,0.3)] text-xs sm:text-sm text-[#F8FAFC] transition-all group"
                >
                  <div className="w-10 h-10 rounded-xl bg-emerald-950/40 border border-emerald-500/30 flex items-center justify-center text-[#10B981] group-hover:scale-110 transition-transform">
                    <GithubIcon className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="text-[10px] font-mono text-[#A5A0B5] uppercase block font-semibold">
                      GitHub Repositories
                    </span>
                    <span className="font-mono text-xs text-[#34D399] group-hover:text-white transition-colors">
                      github.com/hema-official
                    </span>
                  </div>
                </a>
              </div>
            </div>
          </div>

          {/* Right Column: Interactive Contact Form */}
          <div className="lg:col-span-7">
            <div className="rounded-3xl glass-card p-6 sm:p-8 lg:p-10 border border-purple-500/30 bg-[#140E26]/85">
              <h3 className="text-xl font-display font-bold text-[#F8FAFC] mb-2">
                Send a Direct Message
              </h3>
              <p className="text-xs sm:text-sm text-[#C4B5FD]/90 mb-6">
                Looking for a Python Developer, AI Engineer, or collaborator? Leave a message below.
              </p>

              <form onSubmit={handleSubmit} className="flex flex-col gap-4">
                {/* Honeypot Spam Field (Hidden from humans) */}
                <input
                  type="text"
                  name="honeyPot"
                  value={formData.honeyPot}
                  onChange={(e) => setFormData({ ...formData, honeyPot: e.target.value })}
                  className="hidden"
                  tabIndex={-1}
                  autoComplete="off"
                />

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {/* Name Input */}
                  <div>
                    <label className="block text-xs font-mono uppercase text-[#A5A0B5] mb-1.5 font-semibold">
                      Your Name *
                    </label>
                    <input
                      type="text"
                      required
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      placeholder="e.g. Alex Morgan"
                      className="w-full px-4 py-3 rounded-2xl bg-[#0D081D] border border-purple-500/30 text-[#F8FAFC] placeholder-[#A5A0B5]/50 text-xs sm:text-sm focus:outline-none focus:border-[#06B6D4] focus:shadow-[0_0_20px_rgba(6,182,212,0.3)] transition-all"
                    />
                  </div>

                  {/* Email Input */}
                  <div>
                    <label className="block text-xs font-mono uppercase text-[#A5A0B5] mb-1.5 font-semibold">
                      Your Email *
                    </label>
                    <input
                      type="email"
                      required
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      placeholder="alex@company.com"
                      className="w-full px-4 py-3 rounded-2xl bg-[#0D081D] border border-purple-500/30 text-[#F8FAFC] placeholder-[#A5A0B5]/50 text-xs sm:text-sm focus:outline-none focus:border-[#06B6D4] focus:shadow-[0_0_20px_rgba(6,182,212,0.3)] transition-all"
                    />
                  </div>
                </div>

                {/* Subject Input */}
                <div>
                  <label className="block text-xs font-mono uppercase text-[#A5A0B5] mb-1.5 font-semibold">
                    Subject
                  </label>
                  <input
                    type="text"
                    value={formData.subject}
                    onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                    placeholder="Python / AI Collaboration, Opportunity..."
                    className="w-full px-4 py-3 rounded-2xl bg-[#0D081D] border border-purple-500/30 text-[#F8FAFC] placeholder-[#A5A0B5]/50 text-xs sm:text-sm focus:outline-none focus:border-[#06B6D4] focus:shadow-[0_0_20px_rgba(6,182,212,0.3)] transition-all"
                  />
                </div>

                {/* Message Input */}
                <div>
                  <label className="block text-xs font-mono uppercase text-[#A5A0B5] mb-1.5 font-semibold">
                    Message *
                  </label>
                  <textarea
                    required
                    rows={5}
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    placeholder="Describe your project, team opportunity, or inquiry..."
                    className="w-full px-4 py-3 rounded-2xl bg-[#0D081D] border border-purple-500/30 text-[#F8FAFC] placeholder-[#A5A0B5]/50 text-xs sm:text-sm focus:outline-none focus:border-[#06B6D4] focus:shadow-[0_0_20px_rgba(6,182,212,0.3)] transition-all resize-none"
                  />
                </div>

                {/* Status Messages */}
                {status === 'error' && (
                  <div className="p-3.5 rounded-2xl bg-red-950/50 border border-red-500/50 flex items-center gap-2 text-xs text-red-200 shadow-md">
                    <AlertCircle className="w-4 h-4 text-red-400 shrink-0" />
                    <span>{errorMessage}</span>
                  </div>
                )}

                {status === 'success' && (
                  <div className="p-4 rounded-2xl bg-emerald-950/50 border border-emerald-500/50 flex items-center gap-2.5 text-xs text-emerald-200 shadow-lg">
                    <CheckCircle2 className="w-5 h-5 text-emerald-400 shrink-0" />
                    <span className="font-medium">
                      Thank you! Your message has been prepared successfully. I will get back to you shortly.
                    </span>
                  </div>
                )}

                {/* Submit Button with High-Energy Rainbow Shimmer */}
                <button
                  type="submit"
                  disabled={status === 'submitting'}
                  className="group relative mt-2 inline-flex items-center justify-center gap-2.5 px-8 py-4 rounded-2xl bg-gradient-to-r from-[#7C3AED] via-[#D946EF] to-[#06B6D4] text-[#F8FAFC] font-display font-bold text-xs sm:text-sm tracking-wider border border-white/20 shadow-[0_0_30px_rgba(217,70,239,0.5)] hover:shadow-[0_0_45px_rgba(6,182,212,0.6)] disabled:opacity-50 transition-all hover:scale-[1.02] active:scale-[0.98] cursor-pointer overflow-hidden"
                >
                  <Send className="w-4 h-4 text-[#F8FAFC] group-hover:translate-x-1 transition-transform" />
                  <span>
                    {status === 'submitting' ? 'DISPATCHING...' : 'SEND MESSAGE'}
                  </span>
                  <div className="absolute inset-0 -translate-x-full group-hover:translate-x-full transition-transform duration-1000 bg-gradient-to-r from-transparent via-white/30 to-transparent" />
                </button>
              </form>
            </div>
          </div>

        </div>
      </div>
    </section>
  )
}
