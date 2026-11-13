import { motion } from 'framer-motion'
import { certifications } from '../../data/certifications'
import { Award, CheckCircle, ExternalLink } from 'lucide-react'

const certThemes = [
  {
    iconColor: 'text-[#06B6D4]',
    borderHover: 'hover:border-cyan-400/80',
    shadowHover: 'hover:shadow-[0_0_30px_rgba(6,182,212,0.35)]',
    badgeBg: 'bg-cyan-950/40 text-[#67E8F9] border-cyan-500/30',
  },
  {
    iconColor: 'text-[#D946EF]',
    borderHover: 'hover:border-fuchsia-400/80',
    shadowHover: 'hover:shadow-[0_0_30px_rgba(217,70,239,0.35)]',
    badgeBg: 'bg-fuchsia-950/40 text-[#F43F5E] border-fuchsia-500/30',
  },
  {
    iconColor: 'text-[#818CF8]',
    borderHover: 'hover:border-indigo-400/80',
    shadowHover: 'hover:shadow-[0_0_30px_rgba(99,102,241,0.35)]',
    badgeBg: 'bg-indigo-950/40 text-[#A5B4FC] border-indigo-500/30',
  },
]

export function Certifications() {
  return (
    <section className="relative py-20 bg-[#070510] overflow-hidden">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-14">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#140E26] border border-fuchsia-500/30 text-xs font-mono text-[#D946EF] uppercase tracking-wider mb-4 shadow-[0_0_15px_rgba(217,70,239,0.2)]">
            <Award className="w-3.5 h-3.5 text-[#06B6D4]" />
            <span>CREDENTIALS</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-display font-bold text-[#F8FAFC]">
            CONTINUOUS{' '}
            <span className="text-gradient-aurora">
              LEARNING
            </span>
          </h2>
          <p className="mt-2 text-sm text-[#C4B5FD]">
            Technical certifications and specialized development training.
          </p>
        </div>

        {/* Certifications Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {certifications.map((cert, idx) => {
            const theme = certThemes[idx % certThemes.length]

            return (
              <motion.div
                key={cert.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                className={`rounded-3xl glass-card p-7 flex flex-col justify-between border border-purple-500/25 ${theme.borderHover} ${theme.shadowHover} bg-[#140E26]/85 group transition-all duration-300`}
              >
                <div>
                  <div className={`w-12 h-12 rounded-2xl ${theme.badgeBg} flex items-center justify-center ${theme.iconColor} mb-5 group-hover:scale-110 transition-transform shadow-md`}>
                    <Award className="w-6 h-6" />
                  </div>
                  <h3 className="text-lg font-display font-bold text-[#F8FAFC] leading-snug group-hover:text-[#67E8F9] transition-colors">
                    {cert.title}
                  </h3>
                  <p className="mt-1.5 text-xs font-mono text-[#E879F9] font-medium">
                    {cert.domain}
                  </p>

                  {/* Covered Skills */}
                  <div className="mt-5 pt-4 border-t border-purple-500/15 flex flex-wrap gap-1.5">
                    {cert.skillsCovered.map((s) => (
                      <span
                        key={s}
                        className="px-2.5 py-1 rounded-lg bg-[#0D081D] text-[11px] font-mono text-[#C4B5FD] border border-purple-500/20"
                      >
                        {s}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Bottom State */}
                <div className="mt-6 pt-3.5 border-t border-purple-500/15 flex items-center justify-between text-xs font-mono text-[#A5A0B5]">
                  <span className="flex items-center gap-1.5 text-[#34D399] font-semibold">
                    <CheckCircle className="w-3.5 h-3.5" />
                    <span>Completed</span>
                  </span>
                  {cert.verificationUrl ? (
                    <a
                      href={cert.verificationUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1 text-[#06B6D4] hover:text-[#F8FAFC]"
                    >
                      <span>Verify</span>
                      <ExternalLink className="w-3 h-3" />
                    </a>
                  ) : (
                    <span className="text-[11px] text-[#A5A0B5]">Verified Credential</span>
                  )}
                </div>
              </motion.div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
