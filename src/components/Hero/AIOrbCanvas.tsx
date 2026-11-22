import React, { useEffect, useRef, useState } from 'react'
import * as THREE from 'three'
import { Sparkles, Zap, Globe, Flame } from 'lucide-react'

type OrbTheme = 'violet' | 'cyan' | 'emerald' | 'solar'

interface ThemeDefinition {
  id: OrbTheme
  name: string
  icon: React.ReactNode
  core: number
  inner: number
  particles: number
  ring1: number
  ring2: number
  light1: number
  light2: number
  accentClass: string
}

const THEMES: Record<OrbTheme, ThemeDefinition> = {
  violet: {
    id: 'violet',
    name: 'Cosmic Violet',
    icon: <Sparkles className="w-3.5 h-3.5 text-violet-300" />,
    core: 0x8b5cf6,
    inner: 0x6366f1,
    particles: 0x22d3ee,
    ring1: 0x22d3ee,
    ring2: 0xa855f7,
    light1: 0x8b5cf6,
    light2: 0x22d3ee,
    accentClass: 'border-violet-500/40 text-violet-300 bg-violet-500/10'
  },
  cyan: {
    id: 'cyan',
    name: 'Cyber Cyan',
    icon: <Zap className="w-3.5 h-3.5 text-cyan-300" />,
    core: 0x00f0ff,
    inner: 0x3b82f6,
    particles: 0x38bdf8,
    ring1: 0x00f0ff,
    ring2: 0x818cf8,
    light1: 0x00f0ff,
    light2: 0x38bdf8,
    accentClass: 'border-cyan-400/40 text-cyan-300 bg-cyan-400/10'
  },
  emerald: {
    id: 'emerald',
    name: 'Neural Matrix',
    icon: <Globe className="w-3.5 h-3.5 text-emerald-300" />,
    core: 0x10b981,
    inner: 0x059669,
    particles: 0x34d399,
    ring1: 0x10b981,
    ring2: 0x06b6d4,
    light1: 0x10b981,
    light2: 0x34d399,
    accentClass: 'border-emerald-500/40 text-emerald-300 bg-emerald-500/10'
  },
  solar: {
    id: 'solar',
    name: 'Solar Flare',
    icon: <Flame className="w-3.5 h-3.5 text-amber-300" />,
    core: 0xf59e0b,
    inner: 0xef4444,
    particles: 0xfbbf24,
    ring1: 0xf59e0b,
    ring2: 0xec4899,
    light1: 0xf59e0b,
    light2: 0xf43f5e,
    accentClass: 'border-amber-500/40 text-amber-300 bg-amber-500/10'
  }
}

interface AIOrbCanvasProps {
  className?: string
}

export const AIOrbCanvas: React.FC<AIOrbCanvasProps> = ({ className = '' }) => {
  const containerRef = useRef<HTMLDivElement>(null)
  const mouseRef = useRef({ x: 0, y: 0, targetX: 0, targetY: 0 })
  const [activeTheme, setActiveTheme] = useState<OrbTheme>('violet')
  const themeRef = useRef<OrbTheme>('violet')

  useEffect(() => {
    themeRef.current = activeTheme
  }, [activeTheme])

  useEffect(() => {
    const container = containerRef.current
    if (!container) return

    const scene = new THREE.Scene()
    const width = container.clientWidth || 500
    const height = container.clientHeight || 500

    const camera = new THREE.PerspectiveCamera(45, width / height, 0.1, 1000)
    camera.position.z = 7

    const renderer = new THREE.WebGLRenderer({
      alpha: true,
      antialias: true,
      powerPreference: 'high-performance'
    })
    renderer.setSize(width, height)
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2))
    container.appendChild(renderer.domElement)

    const orbGroup = new THREE.Group()
    scene.add(orbGroup)

    // 1. Central Luminous Core (Icosahedron)
    const currentT = THEMES[themeRef.current]
    const coreGeo = new THREE.IcosahedronGeometry(1.6, 2)
    const coreMat = new THREE.MeshBasicMaterial({
      color: currentT.core,
      wireframe: true,
      transparent: true,
      opacity: 0.38
    })
    const coreMesh = new THREE.Mesh(coreGeo, coreMat)
    orbGroup.add(coreMesh)

    // 2. Inner Pulsing Core Sphere
    const innerGeo = new THREE.SphereGeometry(1.05, 32, 32)
    const innerMat = new THREE.MeshBasicMaterial({
      color: currentT.inner,
      transparent: true,
      opacity: 0.22,
      wireframe: true
    })
    const innerMesh = new THREE.Mesh(innerGeo, innerMat)
    orbGroup.add(innerMesh)

    // 3. Surrounding Neural Network Nodes (Points)
    const particleCount = window.innerWidth < 768 ? 95 : 190
    const particleGeo = new THREE.BufferGeometry()
    const particlePositions = new Float32Array(particleCount * 3)

    for (let i = 0; i < particleCount; i++) {
      const radius = 2.0 + Math.random() * 1.5
      const theta = Math.random() * Math.PI * 2
      const phi = Math.acos(Math.random() * 2 - 1)

      particlePositions[i * 3] = radius * Math.sin(phi) * Math.cos(theta)
      particlePositions[i * 3 + 1] = radius * Math.sin(phi) * Math.sin(theta)
      particlePositions[i * 3 + 2] = radius * Math.cos(phi)
    }

    particleGeo.setAttribute('position', new THREE.BufferAttribute(particlePositions, 3))

    const particleMat = new THREE.PointsMaterial({
      color: currentT.particles,
      size: 0.085,
      transparent: true,
      opacity: 0.88,
      blending: THREE.AdditiveBlending
    })
    const particles = new THREE.Points(particleGeo, particleMat)
    orbGroup.add(particles)

    // 4. Dynamic Synaptic Connection Lines
    const maxConnections = 85
    const linePositions = new Float32Array(maxConnections * 2 * 3)
    const lineGeo = new THREE.BufferGeometry()
    lineGeo.setAttribute('position', new THREE.BufferAttribute(linePositions, 3))
    const lineMat = new THREE.LineBasicMaterial({
      color: currentT.inner,
      transparent: true,
      opacity: 0.28,
      blending: THREE.AdditiveBlending
    })
    const connectionLines = new THREE.LineSegments(lineGeo, lineMat)
    orbGroup.add(connectionLines)

    // 5. Outer Geometric Gyro Rings
    const ringGeo1 = new THREE.TorusGeometry(2.4, 0.015, 16, 100)
    const ringMat1 = new THREE.MeshBasicMaterial({
      color: currentT.ring1,
      transparent: true,
      opacity: 0.45
    })
    const ring1 = new THREE.Mesh(ringGeo1, ringMat1)
    ring1.rotation.x = Math.PI / 3
    orbGroup.add(ring1)

    const ringGeo2 = new THREE.TorusGeometry(2.7, 0.012, 16, 100)
    const ringMat2 = new THREE.MeshBasicMaterial({
      color: currentT.ring2,
      transparent: true,
      opacity: 0.38
    })
    const ring2 = new THREE.Mesh(ringGeo2, ringMat2)
    ring2.rotation.y = Math.PI / 4
    ring2.rotation.x = -Math.PI / 6
    orbGroup.add(ring2)

    // 6. Ambient & Point Lighting
    const light1 = new THREE.PointLight(currentT.light1, 4, 20)
    light1.position.set(3, 3, 3)
    scene.add(light1)

    const light2 = new THREE.PointLight(currentT.light2, 3, 20)
    light2.position.set(-3, -2, 2)
    scene.add(light2)

    // Mouse Move Interaction Listener
    const handleMouseMove = (e: MouseEvent) => {
      const rect = container.getBoundingClientRect()
      const clientX = e.clientX - rect.left
      const clientY = e.clientY - rect.top

      mouseRef.current.targetX = (clientX / rect.width) * 2 - 1
      mouseRef.current.targetY = -(clientY / rect.height) * 2 + 1
    }

    window.addEventListener('mousemove', handleMouseMove)

    // Click Surge Shockwave
    let surge = 1
    const handleClick = () => {
      surge = 1.35
    }
    container.addEventListener('click', handleClick)

    // Resize Handler
    const handleResize = () => {
      if (!container) return
      const w = container.clientWidth
      const h = container.clientHeight
      camera.aspect = w / h
      camera.updateProjectionMatrix()
      renderer.setSize(w, h)
    }

    window.addEventListener('resize', handleResize)

    // Animation Loop
    let animationFrameId: number
    let clock = new THREE.Clock()

    const animate = () => {
      animationFrameId = requestAnimationFrame(animate)
      const elapsedTime = clock.getElapsedTime()

      // Update theme colors dynamically if changed
      const currentTheme = THEMES[themeRef.current]
      coreMat.color.setHex(currentTheme.core)
      innerMat.color.setHex(currentTheme.inner)
      particleMat.color.setHex(currentTheme.particles)
      lineMat.color.setHex(currentTheme.inner)
      ringMat1.color.setHex(currentTheme.ring1)
      ringMat2.color.setHex(currentTheme.ring2)
      light1.color.setHex(currentTheme.light1)
      light2.color.setHex(currentTheme.light2)

      // Mouse smoothing
      mouseRef.current.x += (mouseRef.current.targetX - mouseRef.current.x) * 0.05
      mouseRef.current.y += (mouseRef.current.targetY - mouseRef.current.y) * 0.05

      // Rotation + Mouse Tilt
      orbGroup.rotation.y = elapsedTime * 0.25 + mouseRef.current.x * 0.4
      orbGroup.rotation.x = Math.sin(elapsedTime * 0.15) * 0.15 - mouseRef.current.y * 0.4

      // Gyro Rings
      ring1.rotation.z = elapsedTime * 0.3
      ring2.rotation.z = -elapsedTime * 0.25

      // Surge decay
      surge += (1 - surge) * 0.08

      // Pulsing core
      const pulse = (1 + Math.sin(elapsedTime * 2) * 0.05) * surge
      coreMesh.scale.set(pulse, pulse, pulse)
      innerMesh.scale.set(1 / pulse, 1 / pulse, 1 / pulse)

      orbGroup.position.y = Math.sin(elapsedTime * 0.8) * 0.12

      // Dynamic synapses
      const positions = particleGeo.attributes.position.array as Float32Array
      let lineIndex = 0
      const posArray = lineGeo.attributes.position.array as Float32Array

      for (let i = 0; i < particleCount && lineIndex < maxConnections * 6; i += 2) {
        for (let j = i + 1; j < particleCount && lineIndex < maxConnections * 6; j += 3) {
          const dx = positions[i * 3] - positions[j * 3]
          const dy = positions[i * 3 + 1] - positions[j * 3 + 1]
          const dz = positions[i * 3 + 2] - positions[j * 3 + 2]
          const dist = Math.sqrt(dx * dx + dy * dy + dz * dz)

          if (dist < 1.35) {
            posArray[lineIndex++] = positions[i * 3]
            posArray[lineIndex++] = positions[i * 3 + 1]
            posArray[lineIndex++] = positions[i * 3 + 2]

            posArray[lineIndex++] = positions[j * 3]
            posArray[lineIndex++] = positions[j * 3 + 1]
            posArray[lineIndex++] = positions[j * 3 + 2]
          }
        }
      }
      lineGeo.attributes.position.needsUpdate = true

      renderer.render(scene, camera)
    }

    animate()

    return () => {
      window.removeEventListener('mousemove', handleMouseMove)
      window.removeEventListener('resize', handleResize)
      container.removeEventListener('click', handleClick)
      cancelAnimationFrame(animationFrameId)
      renderer.dispose()
      if (container.contains(renderer.domElement)) {
        container.removeChild(renderer.domElement)
      }
    }
  }, [])

  return (
    <div className="relative w-full flex flex-col items-center">
      <div
        ref={containerRef}
        className={`relative w-full h-[380px] sm:h-[460px] lg:h-[520px] flex items-center justify-center cursor-pointer pointer-events-auto ${className}`}
        aria-label="Interactive 3D AI Neural Orb"
        title="Click to trigger a neural shockwave"
      >
        {/* Ambient atmospheric backdrop */}
        <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
          <div className="w-[300px] h-[300px] sm:w-[420px] sm:h-[420px] rounded-full bg-violet-600/15 blur-[90px] -z-10 animate-pulse" />
          <div className="w-[200px] h-[200px] sm:w-[320px] sm:h-[320px] rounded-full bg-cyan-400/15 blur-[70px] -z-10" />
        </div>

        {/* Telemetry HUD Badges */}
        <div className="absolute top-4 left-2 sm:left-4 px-3 py-1.5 rounded-xl bg-[#121226]/80 backdrop-blur-md border border-violet-500/40 text-[11px] sm:text-xs font-mono text-violet-300 flex items-center gap-2 pointer-events-none shadow-lg shadow-violet-950/40">
          <span className="w-2 h-2 rounded-full bg-violet-400 animate-ping" />
          <span>NEURAL_NODE_ACTIVE</span>
        </div>

        <div className="absolute top-4 right-2 sm:right-4 px-3 py-1.5 rounded-xl bg-[#121226]/80 backdrop-blur-md border border-emerald-500/30 text-[11px] sm:text-xs font-mono text-emerald-300 flex items-center gap-2 pointer-events-none shadow-lg shadow-emerald-950/30">
          <span className="w-2 h-2 rounded-full bg-emerald-400" />
          <span>60 FPS LOCKED</span>
        </div>

        <div className="absolute bottom-6 right-2 sm:right-6 px-3 py-1.5 rounded-xl bg-[#121226]/80 backdrop-blur-md border border-cyan-400/40 text-[11px] sm:text-xs font-mono text-cyan-300 flex items-center gap-2 pointer-events-none shadow-lg shadow-cyan-950/40">
          <span className="w-2 h-2 rounded-full bg-cyan-400 animate-pulse" />
          <span>LATENCY: 98ms</span>
        </div>

        <div className="absolute bottom-6 left-2 sm:left-4 px-2.5 py-1 rounded-lg bg-[#0C0C1C]/80 border border-white/10 text-[10px] font-mono text-[#A1A1B5] pointer-events-none">
          Click orb for pulse
        </div>
      </div>

      {/* Interactive 3D Spectrum Theme Selector */}
      <div className="mt-2 flex flex-wrap items-center justify-center gap-2 p-1.5 rounded-2xl bg-[#121224]/80 border border-white/10 backdrop-blur-md shadow-lg">
        {(Object.keys(THEMES) as OrbTheme[]).map((key) => {
          const t = THEMES[key]
          const isSelected = activeTheme === key
          return (
            <button
              key={key}
              onClick={() => setActiveTheme(key)}
              className={`flex items-center gap-1.5 px-3 py-1 rounded-xl text-xs font-mono transition-all duration-200 cursor-pointer ${
                isSelected
                  ? `${t.accentClass} border shadow-md font-semibold`
                  : 'text-[#A1A1B5] hover:text-white hover:bg-white/5 border border-transparent'
              }`}
            >
              {t.icon}
              <span>{t.name}</span>
            </button>
          )
        })}
      </div>
    </div>
  )
}
