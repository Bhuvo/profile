import { useEffect, useState } from 'react'

interface TrailDot {
  x: number
  y: number
  id: number
  color: string
}

const trailColors = [
  '#06B6D4', // Neon Cyan
  '#D946EF', // Vivid Fuchsia
  '#8B5CF6', // Electric Purple
  '#10B981', // Neon Emerald
  '#F59E0B', // Sunburst Gold
]

export function CustomCursor() {
  const [position, setPosition] = useState({ x: -100, y: -100 })
  const [trail, setTrail] = useState<TrailDot[]>([])
  const [isPointer, setIsPointer] = useState(false)
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    // Only enable on desktop devices with fine pointer and no reduced-motion preference
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    const isTouch = window.matchMedia('(pointer: coarse)').matches

    if (prefersReducedMotion || isTouch) return

    setIsVisible(true)

    let counter = 0
    const onMouseMove = (e: MouseEvent) => {
      const { clientX: x, clientY: y } = e
      setPosition({ x, y })

      counter++
      if (counter % 2 === 0) {
        const color = trailColors[counter % trailColors.length]
        setTrail((prev) => [
          ...prev.slice(-7),
          { x, y, id: Date.now() + Math.random(), color },
        ])
      }

      // Check if hovering over clickable element
      const target = e.target as HTMLElement | null
      if (target) {
        const clickable = target.closest('a, button, [role="button"], input, textarea, select, label')
        setIsPointer(!!clickable)
      }
    }

    const onMouseLeave = () => setIsVisible(false)
    const onMouseEnter = () => setIsVisible(true)

    window.addEventListener('mousemove', onMouseMove)
    document.addEventListener('mouseleave', onMouseLeave)
    document.addEventListener('mouseenter', onMouseEnter)

    return () => {
      window.removeEventListener('mousemove', onMouseMove)
      document.removeEventListener('mouseleave', onMouseLeave)
      document.removeEventListener('mouseenter', onMouseEnter)
    }
  }, [])

  if (!isVisible) return null

  return (
    <div className="pointer-events-none fixed inset-0 z-[9999] overflow-hidden transition-opacity duration-300">
      {/* Rainbow spark trail particles */}
      {trail.map((dot, index) => {
        const opacity = ((index + 1) / trail.length) * 0.55
        const size = (index + 1) * 1.6 + 2.5
        return (
          <div
            key={dot.id}
            className="absolute rounded-full -translate-x-1/2 -translate-y-1/2 transition-opacity duration-300 pointer-events-none"
            style={{
              left: `${dot.x}px`,
              top: `${dot.y}px`,
              width: `${size}px`,
              height: `${size}px`,
              backgroundColor: dot.color,
              opacity,
              boxShadow: `0 0 12px ${dot.color}`,
            }}
          />
        )
      })}

      {/* Main Cursor Orb */}
      <div
        className={`absolute rounded-full -translate-x-1/2 -translate-y-1/2 transition-transform duration-100 ease-out pointer-events-none ${
          isPointer
            ? 'w-8 h-8 bg-cyan-400/20 border-2 border-[#06B6D4] scale-125 shadow-[0_0_20px_#06B6D4]'
            : 'w-3.5 h-3.5 bg-gradient-to-tr from-[#D946EF] to-[#06B6D4] shadow-[0_0_15px_#D946EF]'
        }`}
        style={{
          left: `${position.x}px`,
          top: `${position.y}px`,
        }}
      />
    </div>
  )
}
