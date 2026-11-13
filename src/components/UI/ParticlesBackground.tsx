import { useEffect, useRef } from 'react'

interface Particle {
  x: number
  y: number
  vx: number
  vy: number
  radius: number
  alpha: number
  color: string
}

export function ParticlesBackground() {
  const canvasRef = useRef<HTMLCanvasElement>(null)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return
    const ctx = canvas.getContext('2d')
    if (!ctx) return

    let animationFrameId: number
    let width = (canvas.width = window.innerWidth)
    let height = (canvas.height = window.innerHeight)

    const handleResize = () => {
      if (!canvas) return
      width = canvas.width = window.innerWidth
      height = canvas.height = window.innerHeight
    }

    window.addEventListener('resize', handleResize)

    // Vibrant Cyberpunk & Cosmic Nebula Palette
    const colors = [
      '0, 240, 255',   // Electric Cyan
      '217, 70, 239',  // Vivid Fuchsia
      '139, 92, 246',  // Neon Purple
      '251, 113, 133', // Rose Pink
      '16, 185, 129',  // Neon Emerald
      '245, 158, 11',  // Sunburst Amber
    ]

    const count = Math.min(Math.floor((width * height) / 16000), 95)
    const particles: Particle[] = Array.from({ length: count }, () => ({
      x: Math.random() * width,
      y: Math.random() * height,
      vx: (Math.random() - 0.5) * 0.5,
      vy: (Math.random() - 0.5) * 0.5,
      radius: Math.random() * 2.4 + 1.0,
      alpha: Math.random() * 0.65 + 0.3,
      color: colors[Math.floor(Math.random() * colors.length)],
    }))

    // Mouse proximity tracking for interactive repulsion
    let mouseX = -1000
    let mouseY = -1000

    const handleMouseMove = (e: MouseEvent) => {
      mouseX = e.clientX
      mouseY = e.clientY
    }

    window.addEventListener('mousemove', handleMouseMove, { passive: true })

    const render = () => {
      ctx.clearRect(0, 0, width, height)

      // 1. Draw glowing connecting lines between close particles
      const maxConnectDist = 120
      for (let i = 0; i < particles.length; i++) {
        for (let j = i + 1; j < particles.length; j++) {
          const dx = particles[i].x - particles[j].x
          const dy = particles[i].y - particles[j].y
          const dist = Math.sqrt(dx * dx + dy * dy)

          if (dist < maxConnectDist) {
            const lineAlpha = (1 - dist / maxConnectDist) * 0.22
            ctx.beginPath()
            ctx.moveTo(particles[i].x, particles[i].y)
            ctx.lineTo(particles[j].x, particles[j].y)
            ctx.strokeStyle = `rgba(${particles[i].color}, ${lineAlpha})`
            ctx.lineWidth = 1.0
            ctx.stroke()
          }
        }
      }

      // 2. Draw each particle
      for (let i = 0; i < particles.length; i++) {
        const p = particles[i]

        // Mouse gentle interaction
        const mdx = p.x - mouseX
        const mdy = p.y - mouseY
        const mDist = Math.sqrt(mdx * mdx + mdy * mdy)
        if (mDist < 140 && mDist > 0) {
          const force = ((140 - mDist) / 140) * 1.0
          p.x += (mdx / mDist) * force
          p.y += (mdy / mDist) * force
        }

        p.x += p.vx
        p.y += p.vy

        // Wrap around borders
        if (p.x < 0) p.x = width
        if (p.x > width) p.x = 0
        if (p.y < 0) p.y = height
        if (p.y > height) p.y = 0

        ctx.beginPath()
        ctx.arc(p.x, p.y, p.radius, 0, Math.PI * 2)
        ctx.fillStyle = `rgba(${p.color}, ${p.alpha})`
        ctx.shadowBlur = 14
        ctx.shadowColor = `rgba(${p.color}, 0.9)`
        ctx.fill()
      }

      animationFrameId = requestAnimationFrame(render)
    }

    render()

    return () => {
      window.removeEventListener('resize', handleResize)
      window.removeEventListener('mousemove', handleMouseMove)
      cancelAnimationFrame(animationFrameId)
    }
  }, [])

  return (
    <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden">
      {/* Deep cosmic foundation */}
      <div className="absolute inset-0 bg-[#070510]" />
      
      {/* High-Vibrancy Cosmic Nebula Clouds with smooth breathing animation */}
      {/* Top Left: Electric Purple & Deep Violet */}
      <div className="absolute -top-32 -left-32 w-[650px] h-[650px] rounded-full bg-gradient-to-tr from-[#5B21B6]/35 via-[#8B5CF6]/30 to-transparent blur-[140px] animate-pulse-glow" />

      {/* Top Right: Electric Cyan & Aqua */}
      <div className="absolute -top-20 -right-20 w-[700px] h-[700px] rounded-full bg-gradient-to-bl from-[#00F0FF]/30 via-[#38BDF8]/25 to-transparent blur-[150px] animate-pulse-glow" style={{ animationDelay: '2s' }} />

      {/* Center Left: Vivid Fuchsia / Magenta */}
      <div className="absolute top-1/3 -left-40 w-[600px] h-[600px] rounded-full bg-gradient-to-r from-[#D946EF]/30 via-[#EC4899]/25 to-transparent blur-[160px] animate-pulse-glow" style={{ animationDelay: '4s' }} />

      {/* Center Right: Deep Indigo & Cyan Core */}
      <div className="absolute top-1/2 right-5 w-[550px] h-[550px] rounded-full bg-gradient-to-l from-[#7C3AED]/30 via-[#00F0FF]/20 to-transparent blur-[150px]" />

      {/* Bottom Left: Neon Emerald & Teal */}
      <div className="absolute -bottom-24 left-1/4 w-[650px] h-[650px] rounded-full bg-gradient-to-tr from-[#10B981]/25 via-[#06B6D4]/20 to-transparent blur-[160px] animate-pulse-glow" style={{ animationDelay: '1s' }} />

      {/* Bottom Right: Sunburst Rose & Amber shimmer */}
      <div className="absolute -bottom-20 -right-20 w-[600px] h-[600px] rounded-full bg-gradient-to-tl from-[#F43F5E]/25 via-[#F59E0B]/18 to-transparent blur-[150px]" />

      {/* Subtle cosmic grid lines */}
      <div className="absolute inset-0 cosmic-grid opacity-60" />

      {/* Floating Canvas Particles */}
      <canvas ref={canvasRef} className="absolute inset-0 opacity-95" />
    </div>
  )
}
