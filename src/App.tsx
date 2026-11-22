import { useState } from 'react'
import { CustomCursor } from './components/UI/CustomCursor'
import { ParticlesBackground } from './components/UI/ParticlesBackground'
import { ScrollToTop } from './components/UI/ScrollToTop'
import { ScrollProgressBar } from './components/UI/ScrollProgressBar'
import { Navbar } from './components/Navbar/Navbar'
import { Hero } from './components/Hero/Hero'
import { About } from './components/About/About'
import { Experience } from './components/Experience/Experience'
import { Skills } from './components/Skills/Skills'
import { Projects } from './components/Projects/Projects'
import { Achievements } from './components/Achievements/Achievements'
import { Education } from './components/Education/Education'
import { CurrentFocus } from './components/CurrentFocus/CurrentFocus'
import { GitHubShowcase } from './components/GitHub/GitHubShowcase'
import { Contact } from './components/Contact/Contact'
import { Footer } from './components/Footer/Footer'
import { FloatingChatButton } from './components/AIChat/FloatingChatButton'
import { AIChatModal } from './components/AIChat/AIChatModal'

export function App() {
  const [isAIChatOpen, setIsAIChatOpen] = useState(false)

  return (
    <div className="relative min-h-screen bg-[#080812] text-white selection:bg-purple-500/30 selection:text-cyan-300">
      {/* Scroll Reading Progress Bar */}
      <ScrollProgressBar />

      {/* Interactive Custom Desktop Cursor */}
      <CustomCursor />

      {/* Cyber Ambient Background Grid & Floating Particles */}
      <ParticlesBackground />

      {/* Sticky Futuristic Navigation */}
      <Navbar />

      {/* Main Content Flow */}
      <main className="relative z-10 flex flex-col">
        {/* Section 2: Hero Section */}
        <Hero />

        {/* Section 3: About Me */}
        <About />

        {/* Section 5: Professional Experience Timeline */}
        <Experience />

        {/* Section 4: Technical Skills Arsenal */}
        <Skills />

        {/* Section 6: Featured Projects & Superbill Optimization */}
        <Projects />

        {/* Section 7: Engineering Highlights (Metrics & Impact) */}
        <Achievements />

        {/* Section 8: Education Foundation */}
        <Education />

        {/* Section 9: Current Focus (Exploration & Research) */}
        <CurrentFocus />

        {/* Section 10: GitHub Showcase */}
        <GitHubShowcase />

        {/* Section 11: Contact & Collaboration Form */}
        <Contact />
      </main>

      {/* Section 12: Footer */}
      <Footer />

      {/* Navigation Utilities */}
      <ScrollToTop />

      {/* Bonus Feature: Bhuvaney AI Assistant */}
      <FloatingChatButton
        isOpen={isAIChatOpen}
        onClick={() => setIsAIChatOpen((prev) => !prev)}
      />
      <AIChatModal
        isOpen={isAIChatOpen}
        onClose={() => setIsAIChatOpen(false)}
      />
    </div>
  )
}

export default App
