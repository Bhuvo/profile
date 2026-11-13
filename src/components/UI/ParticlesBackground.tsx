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

    // Palette of luminous cyberpunk / cosmic particle colors
    const colors = [
      '6, 182, 212',   // Neon Cyan
      '217, 70, 239',  // Vivid Fuchsia
      '139, 92, 246',  // Electric Purple
      '244, 63, 94',   // Rose Pink
      '16, 185, 129',  // Neon Emerald
      '245, 158, 11',  // Sunburst Amber
    ]

    const count = Math.min(Math.floor((width * height) / 18000), 85)
    const particles: Particle[] = Array.from({ length: count }, () => ({
      x: Math.random() * width,
      y: Math.random() * height,
      vx: (Math.random() - 0.5) * 0.45,
      vy: (Math.random() - 0.5) * 0.45,
      radius: Math.random() * 2.2 + 0.8,
      alpha: Math.random() * 0.6 + 0.25,
      color: colors[Math.floor(Math.random() * colors.length)],
    }))

    // Mouse proximity tracking for gentle interactive repulsion
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
      const maxConnectDist = 110
      for (let i = 0; i < particles.length; i++) {
        for (let j = i + 1; j < particles.length; j++) {
          const dx = particles[i].x - particles[j].x
          const dy = particles[i].y - particles[j].y
          const dist = Math.sqrt(dx * dx + dy * dy)

          if (dist < maxConnectDist) {
            const lineAlpha = (1 - dist / maxConnectDist) * 0.18
            ctx.beginPath()
            ctx.moveTo(particles[i].x, particles[i].y)
            ctx.lineTo(particles[j].x, particles[j].y)
            ctx.strokeStyle = `rgba(${particles[i].color}, ${lineAlpha})`
            ctx.lineWidth = 0.8
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
        if (mDist < 120 && mDist > 0) {
          const force = (120 - mDist) / 120 * 0.8
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
        ctx.shadowBlur = 10
        ctx.shadowColor = `rgba(${p.color}, 0.8)`
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
      
      {/* Vibrant Cosmic Nebula Clouds with animated breathing glows */}
      {/* Top Left: Deep Violet / Electric Purple */}
      <div className="absolute -top-32 -left-32 w-[600px] h-[600px] rounded-full bg-gradient-to-tr from-[#5B21B6]/30 via-[#8B5CF6]/25 to-transparent blur-[140px] animate-pulse-glow" />

      {/* Top Right: Electric Cyan & Aqua */}
      <div className="absolute -top-20 -right-20 w-[650px] h-[650px] rounded-full bg-gradient-to-bl from-[#06B6D4]/25 via-[#22D3EE]/20 to-transparent blur-[150px] animate-pulse-glow" style={{ animationDelay: '2s' }} />

      {/* Center Left: Vivid Fuchsia / Magenta */}
      <div className="absolute top-1/3 -left-40 w-[550px] h-[550px] rounded-full bg-gradient-to-r from-[#D946EF]/25 via-[#EC4899]/20 to-transparent blur-[160px] animate-pulse-glow" style={{ animationDelay: '4s' }} />

      {/* Center Right: Deep Violet Core */}
      <div className="absolute top-1/2 right-10 w-[500px] h-[500px] rounded-full bg-gradient-to-l from-[#7C3AED]/25 via-[#8B5CF6]/15 to-transparent blur-[150px]" />

      {/* Bottom Left: Electric Emerald & Teal */}
      <div className="absolute -bottom-24 left-1/4 w-[600px] h-[600px] rounded-full bg-gradient-to-tr from-[#10B981]/20 via-[#06B6D4]/15 to-transparent blur-[160px] animate-pulse-glow" style={{ animationDelay: '1s' }} />

      {/* Bottom Right: Sunburst Rose & Amber shimmer */}
      <div className="absolute -bottom-20 -right-20 w-[550px] h-[550px] rounded-full bg-gradient-to-tl from-[#F43F5E]/20 via-[#F59E0B]/12 to-transparent blur-[150px]" />

      {/* Subtle cosmic grid lines */}
      <div className="absolute inset-0 cosmic-grid opacity-60" />

      {/* Floating Canvas Particles */}
      <canvas ref={canvasRef} className="absolute inset-0 opacity-90" />
    </div>
  )
}
