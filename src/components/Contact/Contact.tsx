import React, { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import {
  Send,
  CheckCircle2,
  Copy,
  Check,
  AlertCircle,
} from 'lucide-react'
import { GithubIcon, LinkedinIcon } from '../UI/Icons'
import { socialLinks } from '../../data/social'
import { SectionHeading } from '../UI/SectionHeading'

export const Contact: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
    honeypot: '', // Anti-spam trap
  })

  const [errors, setErrors] = useState<Record<string, string>>({})
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle')
  const [copiedEmail, setCopiedEmail] = useState(false)

  const validate = () => {
    const errs: Record<string, string> = {}
    if (!formData.name.trim()) errs.name = 'Please provide your name.'
    if (!formData.email.trim()) {
      errs.email = 'Please provide your email address.'
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      errs.email = 'Please enter a valid email address.'
    }
    if (!formData.subject.trim()) errs.subject = 'Please enter a subject.'
    if (!formData.message.trim() || formData.message.trim().length < 10) {
      errs.message = 'Please provide a message with at least 10 characters.'
    }
    return errs
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }))
    if (errors[e.target.name]) {
      setErrors((prev) => {
        const updated = { ...prev }
        delete updated[e.target.name]
        return updated
      })
    }
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()

    // Bot trap check
    if (formData.honeypot) {
      return
    }

    const validationErrors = validate()
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors)
      return
    }

    setIsSubmitting(true)
    setSubmitStatus('idle')

    try {
      // Simulate production submission latency or EmailJS integration
      await new Promise((resolve) => setTimeout(resolve, 1200))
      setSubmitStatus('success')
      setFormData({
        name: '',
        email: '',
        subject: '',
        message: '',
        honeypot: '',
      })
    } catch {
      setSubmitStatus('error')
    } finally {
      setIsSubmitting(false)
    }
  }

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(socialLinks.email)
    setCopiedEmail(true)
    setTimeout(() => setCopiedEmail(false), 2000)
  }

  return (
    <section id="contact" className="py-24 relative overflow-hidden bg-[#080812]/70">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <SectionHeading
          badge="GET IN TOUCH"
          title="Have an Interesting Idea?"
          highlight="Let's Build It."
          subtitle="I'm always interested in connecting with people who are building meaningful products, exploring AI, and solving challenging engineering problems."
        />

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 max-w-5xl mx-auto items-start">
          {/* LEFT: Direct Contact Channels */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-40px' }}
            transition={{ duration: 0.5 }}
            className="lg:col-span-5 space-y-6"
          >
            <div className="glass-panel p-6 sm:p-7 rounded-2xl border-white/10 space-y-5">
              <h3 className="text-lg font-bold text-white font-display">
                Direct Channels
              </h3>
              <p className="text-xs sm:text-sm text-[#A1A1B5] leading-relaxed">
                Whether you have an open AI/Software engineering opportunity, an interesting collaboration, or just want to discuss LLM architectures, feel free to reach out.
              </p>

              {/* Email Card with 1-click Copy */}
              <div className="p-4 rounded-xl bg-[#101020] border border-white/5 space-y-2">
                <div className="text-[11px] font-mono text-[#A1A1B5] uppercase">
                  EMAIL ADDRESS
                </div>
                <div className="flex items-center justify-between gap-2">
                  <a
                    href={`mailto:${socialLinks.email}`}
                    className="text-xs sm:text-sm font-mono text-cyan-300 hover:underline truncate"
                  >
                    {socialLinks.email}
                  </a>
                  <button
                    onClick={handleCopyEmail}
                    className="p-1.5 rounded-lg glass-panel hover:text-white transition-colors text-[#A1A1B5] shrink-0"
                    title="Copy Email"
                  >
                    {copiedEmail ? (
                      <Check className="w-4 h-4 text-emerald-400" />
                    ) : (
                      <Copy className="w-4 h-4" />
                    )}
                  </button>
                </div>
                {copiedEmail && (
                  <span className="text-[10px] font-mono text-emerald-400 block">
                    Copied to clipboard!
                  </span>
                )}
              </div>

              {/* Social Channels */}
              <div className="space-y-3 pt-2">
                <a
                  href={socialLinks.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-between p-3.5 rounded-xl bg-[#101020] border border-white/5 hover:border-purple-500/40 text-xs sm:text-sm text-white transition-all group"
                >
                  <div className="flex items-center gap-3">
                    <LinkedinIcon className="w-4 h-4 text-purple-400" />
                    <span>LinkedIn Profile</span>
                  </div>
                  <span className="text-xs font-mono text-[#A1A1B5] group-hover:text-cyan-300 transition-colors">
                    Connect &rarr;
                  </span>
                </a>

                <a
                  href={socialLinks.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-between p-3.5 rounded-xl bg-[#101020] border border-white/5 hover:border-cyan-400/40 text-xs sm:text-sm text-white transition-all group"
                >
                  <div className="flex items-center gap-3">
                    <GithubIcon className="w-4 h-4 text-cyan-400" />
                    <span>GitHub Profile</span>
                  </div>
                  <span className="text-xs font-mono text-[#A1A1B5] group-hover:text-cyan-300 transition-colors">
                    Follow &rarr;
                  </span>
                </a>
              </div>
            </div>

            {/* Availability Pill */}
            <div className="p-4 rounded-xl bg-purple-950/30 border border-purple-500/20 text-xs text-purple-300 flex items-center gap-3">
              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-ping" />
              <span>Actively interviewing for AI &amp; Software Engineer roles</span>
            </div>
          </motion.div>

          {/* RIGHT: Interactive Message Form */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-40px' }}
            transition={{ duration: 0.5 }}
            className="lg:col-span-7"
          >
            <form
              onSubmit={handleSubmit}
              className="glass-panel p-6 sm:p-8 rounded-2xl border-white/10 space-y-5 relative"
            >
              {/* Honeypot field (hidden from real users, traps bots) */}
              <input
                type="text"
                name="honeypot"
                value={formData.honeypot}
                onChange={handleChange}
                className="hidden"
                tabIndex={-1}
                autoComplete="off"
              />

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {/* Name */}
                <div className="space-y-1.5">
                  <label className="text-xs font-mono uppercase tracking-wider text-[#A1A1B5]">
                    Your Name <span className="text-red-400">*</span>
                  </label>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="e.g. Alex Rivera"
                    className={`w-full px-4 py-3 rounded-xl bg-[#101020] border text-sm text-white placeholder-white/20 focus:outline-none focus:ring-1 transition-colors ${
                      errors.name
                        ? 'border-red-500 focus:ring-red-500'
                        : 'border-white/10 focus:border-cyan-400 focus:ring-cyan-400'
                    }`}
                  />
                  {errors.name && (
                    <span className="text-[11px] text-red-400 flex items-center gap-1">
                      <AlertCircle className="w-3 h-3" /> {errors.name}
                    </span>
                  )}
                </div>

                {/* Email */}
                <div className="space-y-1.5">
                  <label className="text-xs font-mono uppercase tracking-wider text-[#A1A1B5]">
                    Your Email <span className="text-red-400">*</span>
                  </label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="e.g. alex@company.com"
                    className={`w-full px-4 py-3 rounded-xl bg-[#101020] border text-sm text-white placeholder-white/20 focus:outline-none focus:ring-1 transition-colors ${
                      errors.email
                        ? 'border-red-500 focus:ring-red-500'
                        : 'border-white/10 focus:border-cyan-400 focus:ring-cyan-400'
                    }`}
                  />
                  {errors.email && (
                    <span className="text-[11px] text-red-400 flex items-center gap-1">
                      <AlertCircle className="w-3 h-3" /> {errors.email}
                    </span>
                  )}
                </div>
              </div>

              {/* Subject */}
              <div className="space-y-1.5">
                <div className="flex items-center justify-between">
                  <label className="text-xs font-mono uppercase tracking-wider text-[#A1A1B5]">
                    Subject <span className="text-red-400">*</span>
                  </label>
                  <span className="text-[10px] font-mono text-cyan-400">Quick Select:</span>
                </div>
                
                {/* Quick Subject Chips */}
                <div className="flex flex-wrap gap-1.5 pb-1">
                  {[
                    '💼 Full-Time Role Opportunity',
                    '🤖 AI Project Collaboration',
                    '📱 Flutter App Engineering',
                    '⚡ Performance Audit'
                  ].map((topic) => (
                    <button
                      key={topic}
                      type="button"
                      onClick={() => setFormData((prev) => ({ ...prev, subject: topic }))}
                      className="px-2.5 py-1 rounded-lg text-[11px] font-mono text-[#A1A1B5] bg-white/5 border border-white/10 hover:border-cyan-400/50 hover:text-cyan-300 hover:bg-white/10 transition-all cursor-pointer"
                    >
                      {topic}
                    </button>
                  ))}
                </div>

                <input
                  type="text"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  placeholder="e.g. AI Engineering Opportunity / Project Discussion"
                  className={`w-full px-4 py-3 rounded-xl bg-[#101020] border text-sm text-white placeholder-white/20 focus:outline-none focus:ring-1 transition-colors ${
                    errors.subject
                      ? 'border-red-500 focus:ring-red-500'
                      : 'border-white/10 focus:border-cyan-400 focus:ring-cyan-400'
                  }`}
                />
                {errors.subject && (
                  <span className="text-[11px] text-red-400 flex items-center gap-1">
                    <AlertCircle className="w-3 h-3" /> {errors.subject}
                  </span>
                )}
              </div>

              {/* Message */}
              <div className="space-y-1.5">
                <label className="text-xs font-mono uppercase tracking-wider text-[#A1A1B5]">
                  Message <span className="text-red-400">*</span>
                </label>
                <textarea
                  name="message"
                  rows={5}
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Describe your inquiry, project scope, or opportunity..."
                  className={`w-full px-4 py-3 rounded-xl bg-[#101020] border text-sm text-white placeholder-white/20 focus:outline-none focus:ring-1 transition-colors resize-none ${
                    errors.message
                      ? 'border-red-500 focus:ring-red-500'
                      : 'border-white/10 focus:border-cyan-400 focus:ring-cyan-400'
                  }`}
                />
                {errors.message && (
                  <span className="text-[11px] text-red-400 flex items-center gap-1">
                    <AlertCircle className="w-3 h-3" /> {errors.message}
                  </span>
                )}
              </div>

              {/* Submit Status Alerts */}
              <AnimatePresence>
                {submitStatus === 'success' && (
                  <motion.div
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0 }}
                    className="p-4 rounded-xl bg-emerald-950/40 border border-emerald-500/40 text-emerald-300 text-xs flex items-center gap-2"
                  >
                    <CheckCircle2 className="w-4 h-4 shrink-0 text-emerald-400" />
                    <span>
                      Thank you! Your message has been sent successfully. I will get back to you shortly.
                    </span>
                  </motion.div>
                )}

                {submitStatus === 'error' && (
                  <motion.div
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0 }}
                    className="p-4 rounded-xl bg-red-950/40 border border-red-500/40 text-red-300 text-xs flex items-center gap-2"
                  >
                    <AlertCircle className="w-4 h-4 shrink-0 text-red-400" />
                    <span>
                      Something went wrong. Please reach out directly at {socialLinks.email}.
                    </span>
                  </motion.div>
                )}
              </AnimatePresence>

              {/* Send Button */}
              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full inline-flex items-center justify-center gap-2.5 px-6 py-4 rounded-xl font-semibold text-sm text-white bg-gradient-to-r from-purple-600 via-indigo-600 to-cyan-500 hover:opacity-95 shadow-lg shadow-purple-600/30 hover:shadow-cyan-500/30 disabled:opacity-50 transition-all duration-300 transform active:scale-98"
              >
                {isSubmitting ? (
                  <>
                    <span className="w-4 h-4 border-2 border-white/20 border-t-white rounded-full animate-spin" />
                    <span>Transmitting Message...</span>
                  </>
                ) : (
                  <>
                    <Send className="w-4 h-4" />
                    <span>Send Message</span>
                  </>
                )}
              </button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
