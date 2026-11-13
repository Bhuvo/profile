import { useState } from 'react'
import { CinematicIntro } from './components/Intro/CinematicIntro'
import { CustomCursor } from './components/UI/CustomCursor'
import { ParticlesBackground } from './components/UI/ParticlesBackground'
import { Navbar } from './components/Navbar/Navbar'
import { Hero } from './components/Hero/Hero'
import { About } from './components/About/About'
import { Highlights } from './components/Highlights/Highlights'
import { Skills } from './components/Skills/Skills'
import { Experience } from './components/Experience/Experience'
import { Projects } from './components/Projects/Projects'
import { Education } from './components/Education/Education'
import { Certifications } from './components/Certifications/Certifications'
import { LearningUniverse } from './components/Learning/LearningUniverse'
import { GitHubShowcase } from './components/GitHub/GitHubShowcase'
import { Contact } from './components/Contact/Contact'
import { Footer } from './components/Footer/Footer'
import { HemaAI } from './components/HemaAI/HemaAI'

export function App() {
  const [introCompleted, setIntroCompleted] = useState(false)

  return (
    <div className="relative min-h-screen bg-[#080611] text-[#F8FAFC] selection:bg-[#8B5CF6]/30 selection:text-[#67E8F9] overflow-x-hidden font-body">
      {/* 1. Cinematic Neural Seed Introduction */}
      {!introCompleted && (
        <CinematicIntro onComplete={() => setIntroCompleted(true)} />
      )}

      {/* 2. Desktop Custom Cursor & Particle Trail */}
      <CustomCursor />

      {/* 3. Deep Cosmic Animated Atmosphere */}
      <ParticlesBackground />

      {/* 4. Floating Glass Navigation Bar */}
      <Navbar />

      {/* Main Page Flow */}
      <main className="relative z-10">
        {/* 5. Signature Hero Section with 3D Neural Sphere */}
        <Hero />

        {/* 6. About Section: Her Story & Technical Trajectory */}
        <About />

        {/* 7. Career Highlights: My Journey in Numbers */}
        <Highlights />

        {/* 8. Technical Skills: The Intelligence Stack */}
        <Skills />

        {/* 9. Professional Experience: The Career Journey */}
        <Experience />

        {/* 10. Project Showcase: Real Projects & Case Studies */}
        <Projects />

        {/* 11. Academic Foundation: Education */}
        <Education />

        {/* 12. Verified Technical Certifications */}
        <Certifications />

        {/* 13. Current Learning Universe: Exploring What's Next */}
        <LearningUniverse />

        {/* 14. GitHub Showcase & Code Repositories */}
        <GitHubShowcase />

        {/* 15. Contact Section: Direct Channels & Interactive Form */}
        <Contact />
      </main>

      {/* 16. Footer with Back-to-Top Button */}
      <Footer />

      {/* 17. Floating HEMA AI Assistant */}
      <HemaAI />
    </div>
  )
}

export default App
