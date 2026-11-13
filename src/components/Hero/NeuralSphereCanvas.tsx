import { useEffect, useRef, useState } from 'react'
import * as THREE from 'three'
import { Sparkles, Zap, Globe, Flame } from 'lucide-react'

// Color theme definitions with high-saturation neon values
export type NeuralThemeKey = 'aurora' | 'cyberpunk' | 'matrix' | 'solar'

interface ThemeConfig {
  name: string
  icon: typeof Sparkles
  palette: number[]
  coreColor: number
  innerColor: number
  ring1Color: number
  ring2Color: number
  ring3Color: number
  ring4Color: number
  lightColor1: number
  lightColor2: number
}

const THEMES: Record<NeuralThemeKey, ThemeConfig> = {
  aurora: {
    name: 'Cosmic Aurora',
    icon: Sparkles,
    palette: [0x00F0FF, 0xD946EF, 0x8B5CF6, 0x38BDF8, 0xEC4899, 0xC084FC, 0x10B981],
    coreColor: 0x8B5CF6,
    innerColor: 0xD946EF,
    ring1Color: 0x00F0FF,
    ring2Color: 0xEC4899,
    ring3Color: 0x8B5CF6,
    ring4Color: 0x34D399,
    lightColor1: 0x00F0FF,
    lightColor2: 0xD946EF,
  },
  cyberpunk: {
    name: 'Cyber Neon',
    icon: Zap,
    palette: [0xFF007F, 0x00F0FF, 0xFFE600, 0x7928CA, 0xFF3366, 0x00FFFF],
    coreColor: 0xFF007F,
    innerColor: 0x00F0FF,
    ring1Color: 0xFFE600,
    ring2Color: 0xFF007F,
    ring3Color: 0x00F0FF,
    ring4Color: 0x7928CA,
    lightColor1: 0xFF007F,
    lightColor2: 0x00F0FF,
  },
  matrix: {
    name: 'Bio Quantum',
    icon: Globe,
    palette: [0x10B981, 0x06B6D4, 0x34D399, 0x6EE7B7, 0x22D3EE, 0x84CC16],
    coreColor: 0x10B981,
    innerColor: 0x06B6D4,
    ring1Color: 0x34D399,
    ring2Color: 0x06B6D4,
    ring3Color: 0x10B981,
    ring4Color: 0x84CC16,
    lightColor1: 0x10B981,
    lightColor2: 0x06B6D4,
  },
  solar: {
    name: 'Solar Flare',
    icon: Flame,
    palette: [0xF59E0B, 0xEF4444, 0xF97316, 0xFBBF24, 0xEC4899, 0x8B5CF6],
    coreColor: 0xF97316,
    innerColor: 0xFBBF24,
    ring1Color: 0xF59E0B,
    ring2Color: 0xEF4444,
    ring3Color: 0xEC4899,
    ring4Color: 0x8B5CF6,
    lightColor1: 0xF59E0B,
    lightColor2: 0xEF4444,
  },
}

export function NeuralSphereCanvas() {
  const mountRef = useRef<HTMLDivElement>(null)
  const [activeTheme, setActiveTheme] = useState<NeuralThemeKey>('aurora')
  const [hasWebGl, setHasWebGl] = useState(true)
  const themeRef = useRef<NeuralThemeKey>('aurora')

  useEffect(() => {
    themeRef.current = activeTheme
  }, [activeTheme])

  useEffect(() => {
    const container = mountRef.current
    if (!container) return

    // Check WebGL availability
    try {
      const testCanvas = document.createElement('canvas')
      const gl = testCanvas.getContext('webgl') || testCanvas.getContext('experimental-webgl')
      if (!gl) {
        setHasWebGl(false)
        return
      }
    } catch {
      setHasWebGl(false)
      return
    }

    // 1. Scene & Camera Setup
    const scene = new THREE.Scene()
    const camera = new THREE.PerspectiveCamera(
      42,
      container.clientWidth / container.clientHeight,
      0.1,
      1000
    )
    camera.position.z = 22

    const renderer = new THREE.WebGLRenderer({
      alpha: true,
      antialias: true,
      powerPreference: 'high-performance',
    })
    renderer.setSize(container.clientWidth, container.clientHeight)
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2))
    container.appendChild(renderer.domElement)

    // Master Group for Parallax, Drag & Orbit
    const brainGroup = new THREE.Group()
    scene.add(brainGroup)

    // Current theme accessor
    const getTheme = () => THEMES[themeRef.current]

    // 2. High-Luminance Radial Glow Texture
    const createGlowTexture = () => {
      const c = document.createElement('canvas')
      c.width = 128
      c.height = 128
      const ctx = c.getContext('2d')
      if (ctx) {
        const grad = ctx.createRadialGradient(64, 64, 0, 64, 64, 64)
        grad.addColorStop(0, 'rgba(255, 255, 255, 1)')
        grad.addColorStop(0.2, 'rgba(255, 255, 255, 0.9)')
        grad.addColorStop(0.45, 'rgba(0, 240, 255, 0.75)')
        grad.addColorStop(0.75, 'rgba(217, 70, 239, 0.35)')
        grad.addColorStop(1, 'rgba(0, 0, 0, 0)')
        ctx.fillStyle = grad
        ctx.fillRect(0, 0, 128, 128)
      }
      return new THREE.CanvasTexture(c)
    }

    const glowTexture = createGlowTexture()

    // 3. Central Holographic Crystal Core (Inner Icosahedron + Outer Wireframe)
    const coreGeo = new THREE.IcosahedronGeometry(3.0, 2)
    const coreMat = new THREE.MeshBasicMaterial({
      color: getTheme().coreColor,
      transparent: true,
      opacity: 0.35,
      wireframe: true,
      blending: THREE.AdditiveBlending,
    })
    const coreMesh = new THREE.Mesh(coreGeo, coreMat)
    brainGroup.add(coreMesh)

    // Inner Glowing Solid Diamond Core
    const innerGeo = new THREE.OctahedronGeometry(1.8, 1)
    const innerMat = new THREE.MeshBasicMaterial({
      color: getTheme().innerColor,
      transparent: true,
      opacity: 0.75,
      wireframe: false,
      blending: THREE.AdditiveBlending,
    })
    const innerMesh = new THREE.Mesh(innerGeo, innerMat)
    brainGroup.add(innerMesh)

    // Volumetric Inner Halo Sprite
    const haloMat = new THREE.SpriteMaterial({
      map: glowTexture,
      color: 0x8B5CF6,
      transparent: true,
      opacity: 0.85,
      blending: THREE.AdditiveBlending,
    })
    const haloSprite = new THREE.Sprite(haloMat)
    haloSprite.scale.set(10, 10, 1)
    brainGroup.add(haloSprite)

    // 4. Neural Nodes Distributed over Sphere Shell (Fibonacci Sphere)
    const nodeCount = 220
    const nodePositions = new Float32Array(nodeCount * 3)
    const nodeColors = new Float32Array(nodeCount * 3)
    const nodePoints: THREE.Vector3[] = []
    const sphereRadius = 5.2

    for (let i = 0; i < nodeCount; i++) {
      const phi = Math.acos(-1 + (2 * i) / nodeCount)
      const theta = Math.sqrt(nodeCount * Math.PI) * phi

      const x = sphereRadius * Math.cos(theta) * Math.sin(phi) + (Math.random() - 0.5) * 0.4
      const y = sphereRadius * Math.sin(theta) * Math.sin(phi) + (Math.random() - 0.5) * 0.4
      const z = sphereRadius * Math.cos(phi) + (Math.random() - 0.5) * 0.4

      nodePositions[i * 3] = x
      nodePositions[i * 3 + 1] = y
      nodePositions[i * 3 + 2] = z
      nodePoints.push(new THREE.Vector3(x, y, z))

      const pal = getTheme().palette
      const chosenColor = new THREE.Color(pal[i % pal.length])
      nodeColors[i * 3] = chosenColor.r
      nodeColors[i * 3 + 1] = chosenColor.g
      nodeColors[i * 3 + 2] = chosenColor.b
    }

    const nodeGeo = new THREE.BufferGeometry()
    nodeGeo.setAttribute('position', new THREE.BufferAttribute(nodePositions, 3))
    nodeGeo.setAttribute('color', new THREE.BufferAttribute(nodeColors, 3))

    const nodeMat = new THREE.PointsMaterial({
      size: 0.75,
      vertexColors: true,
      transparent: true,
      opacity: 0.95,
      map: glowTexture,
      blending: THREE.AdditiveBlending,
      depthWrite: false,
    })
    const nodeParticles = new THREE.Points(nodeGeo, nodeMat)
    brainGroup.add(nodeParticles)

    // 5. Neural Synapse Connection Lines
    const linePositions: number[] = []
    const lineColors: number[] = []
    const maxDistance = 2.4
    const connectedPairs: { from: THREE.Vector3; to: THREE.Vector3; color: THREE.Color }[] = []

    for (let i = 0; i < nodeCount; i++) {
      for (let j = i + 1; j < nodeCount; j++) {
        const dist = nodePoints[i].distanceTo(nodePoints[j])
        if (dist < maxDistance) {
          linePositions.push(nodePoints[i].x, nodePoints[i].y, nodePoints[i].z)
          linePositions.push(nodePoints[j].x, nodePoints[j].y, nodePoints[j].z)

          const pal = getTheme().palette
          const c1 = new THREE.Color(pal[i % pal.length])
          const c2 = new THREE.Color(pal[j % pal.length])

          const alpha = 1.0 - dist / maxDistance
          lineColors.push(c1.r * alpha, c1.g * alpha, c1.b * alpha)
          lineColors.push(c2.r * alpha, c2.g * alpha, c2.b * alpha)

          connectedPairs.push({
            from: nodePoints[i],
            to: nodePoints[j],
            color: c1,
          })
        }
      }
    }

    const lineGeo = new THREE.BufferGeometry()
    lineGeo.setAttribute('position', new THREE.Float32BufferAttribute(linePositions, 3))
    lineGeo.setAttribute('color', new THREE.Float32BufferAttribute(lineColors, 3))

    const lineMat = new THREE.LineBasicMaterial({
      vertexColors: true,
      transparent: true,
      opacity: 0.65,
      blending: THREE.AdditiveBlending,
    })
    const synapseLines = new THREE.LineSegments(lineGeo, lineMat)
    brainGroup.add(synapseLines)

    // 6. Traveling Neural Synapse Pulses (Photons moving between nodes)
    const pulseCount = 35
    const pulsePositions = new Float32Array(pulseCount * 3)
    const pulseColors = new Float32Array(pulseCount * 3)
    const pulses = Array.from({ length: pulseCount }, () => {
      const pair = connectedPairs[Math.floor(Math.random() * connectedPairs.length)] || {
        from: new THREE.Vector3(0, 0, 0),
        to: new THREE.Vector3(1, 1, 1),
        color: new THREE.Color(0x00F0FF),
      }
      return {
        pair,
        progress: Math.random(),
        speed: 0.008 + Math.random() * 0.012,
      }
    })

    const pulseGeo = new THREE.BufferGeometry()
    pulseGeo.setAttribute('position', new THREE.BufferAttribute(pulsePositions, 3))
    pulseGeo.setAttribute('color', new THREE.BufferAttribute(pulseColors, 3))

    const pulseMat = new THREE.PointsMaterial({
      size: 0.9,
      vertexColors: true,
      transparent: true,
      opacity: 1.0,
      map: glowTexture,
      blending: THREE.AdditiveBlending,
      depthWrite: false,
    })
    const pulseParticles = new THREE.Points(pulseGeo, pulseMat)
    brainGroup.add(pulseParticles)

    // 7. Multi-Layer Glowing Neon Orbital Rings
    // Ring 1: Neon Cyan Orbital
    const ring1Geo = new THREE.TorusGeometry(6.6, 0.035, 16, 120)
    const ring1Mat = new THREE.MeshBasicMaterial({
      color: getTheme().ring1Color,
      transparent: true,
      opacity: 0.75,
      blending: THREE.AdditiveBlending,
    })
    const ring1 = new THREE.Mesh(ring1Geo, ring1Mat)
    ring1.rotation.x = Math.PI / 3.2
    ring1.rotation.y = Math.PI / 6
    brainGroup.add(ring1)

    // Ring 2: Vivid Fuchsia / Hot Pink Orbital
    const ring2Geo = new THREE.TorusGeometry(7.4, 0.03, 16, 120)
    const ring2Mat = new THREE.MeshBasicMaterial({
      color: getTheme().ring2Color,
      transparent: true,
      opacity: 0.7,
      blending: THREE.AdditiveBlending,
    })
    const ring2 = new THREE.Mesh(ring2Geo, ring2Mat)
    ring2.rotation.x = -Math.PI / 3.8
    ring2.rotation.y = Math.PI / 2.8
    brainGroup.add(ring2)

    // Ring 3: Electric Purple Equatorial Ring
    const ring3Geo = new THREE.TorusGeometry(8.1, 0.025, 16, 120)
    const ring3Mat = new THREE.MeshBasicMaterial({
      color: getTheme().ring3Color,
      transparent: true,
      opacity: 0.6,
      blending: THREE.AdditiveBlending,
    })
    const ring3 = new THREE.Mesh(ring3Geo, ring3Mat)
    ring3.rotation.x = Math.PI / 2
    brainGroup.add(ring3)

    // Ring 4: Golden/Emerald High-Inclination Data Belt
    const ring4Geo = new THREE.TorusGeometry(8.8, 0.02, 16, 120)
    const ring4Mat = new THREE.MeshBasicMaterial({
      color: getTheme().ring4Color,
      transparent: true,
      opacity: 0.5,
      blending: THREE.AdditiveBlending,
    })
    const ring4 = new THREE.Mesh(ring4Geo, ring4Mat)
    ring4.rotation.x = -Math.PI / 6
    ring4.rotation.z = Math.PI / 4
    brainGroup.add(ring4)

    // 8. Glowing Satellites Traveling on the Rings
    const satGeo = new THREE.SphereGeometry(0.24, 16, 16)
    const sat1Mat = new THREE.MeshBasicMaterial({ color: 0x00F0FF, blending: THREE.AdditiveBlending })
    const sat2Mat = new THREE.MeshBasicMaterial({ color: 0xFF007F, blending: THREE.AdditiveBlending })
    const sat3Mat = new THREE.MeshBasicMaterial({ color: 0xFFE600, blending: THREE.AdditiveBlending })

    const sat1 = new THREE.Mesh(satGeo, sat1Mat)
    const sat2 = new THREE.Mesh(satGeo, sat2Mat)
    const sat3 = new THREE.Mesh(satGeo, sat3Mat)
    ring1.add(sat1)
    ring2.add(sat2)
    ring4.add(sat3)

    // 9. Floating Cosmic Star Dust Particles
    const dustCount = 180
    const dustPositions = new Float32Array(dustCount * 3)
    const dustColors = new Float32Array(dustCount * 3)

    for (let i = 0; i < dustCount * 3; i += 3) {
      dustPositions[i] = (Math.random() - 0.5) * 26
      dustPositions[i + 1] = (Math.random() - 0.5) * 26
      dustPositions[i + 2] = (Math.random() - 0.5) * 20

      const pal = getTheme().palette
      const c = new THREE.Color(pal[Math.floor(Math.random() * pal.length)])
      dustColors[i] = c.r
      dustColors[i + 1] = c.g
      dustColors[i + 2] = c.b
    }

    const dustGeo = new THREE.BufferGeometry()
    dustGeo.setAttribute('position', new THREE.BufferAttribute(dustPositions, 3))
    dustGeo.setAttribute('color', new THREE.BufferAttribute(dustColors, 3))

    const dustMat = new THREE.PointsMaterial({
      size: 0.45,
      vertexColors: true,
      transparent: true,
      opacity: 0.85,
      map: glowTexture,
      blending: THREE.AdditiveBlending,
    })
    const dustParticles = new THREE.Points(dustGeo, dustMat)
    scene.add(dustParticles)

    // Interactive Drag / Parallax / Click Ripple
    let isDragging = false
    let previousMousePosition = { x: 0, y: 0 }
    let targetRotationX = 0
    let targetRotationY = 0
    let dragVelocityX = 0
    let dragVelocityY = 0

    const handleMouseDown = (e: MouseEvent) => {
      isDragging = true
      previousMousePosition = { x: e.clientX, y: e.clientY }
      dragVelocityX = 0
      dragVelocityY = 0
    }

    const handleMouseMove = (e: MouseEvent) => {
      if (isDragging) {
        const deltaX = e.clientX - previousMousePosition.x
        const deltaY = e.clientY - previousMousePosition.y
        dragVelocityY = deltaX * 0.007
        dragVelocityX = deltaY * 0.007
        brainGroup.rotation.y += dragVelocityY
        brainGroup.rotation.x += dragVelocityX
        previousMousePosition = { x: e.clientX, y: e.clientY }
      } else {
        const rect = container.getBoundingClientRect()
        const mouseX = ((e.clientX - rect.left) / rect.width) * 2 - 1
        const mouseY = -(((e.clientY - rect.top) / rect.height) * 2 - 1)
        targetRotationY = mouseX * 0.45
        targetRotationX = mouseY * 0.3
      }
    }

    const handleMouseUp = () => {
      isDragging = false
    }

    // Touch Support
    const handleTouchStart = (e: TouchEvent) => {
      if (e.touches.length === 1) {
        isDragging = true
        previousMousePosition = { x: e.touches[0].clientX, y: e.touches[0].clientY }
      }
    }

    const handleTouchMove = (e: TouchEvent) => {
      if (isDragging && e.touches.length === 1) {
        const deltaX = e.touches[0].clientX - previousMousePosition.x
        const deltaY = e.touches[0].clientY - previousMousePosition.y
        brainGroup.rotation.y += deltaX * 0.008
        brainGroup.rotation.x += deltaY * 0.008
        previousMousePosition = { x: e.touches[0].clientX, y: e.touches[0].clientY }
      }
    }

    const handleTouchEnd = () => {
      isDragging = false
    }

    container.addEventListener('mousedown', handleMouseDown)
    window.addEventListener('mousemove', handleMouseMove)
    window.addEventListener('mouseup', handleMouseUp)
    container.addEventListener('touchstart', handleTouchStart, { passive: true })
    container.addEventListener('touchmove', handleTouchMove, { passive: true })
    container.addEventListener('touchend', handleTouchEnd)

    // Resize Handler
    const handleResize = () => {
      if (!container) return
      camera.aspect = container.clientWidth / container.clientHeight
      camera.updateProjectionMatrix()
      renderer.setSize(container.clientWidth, container.clientHeight)
    }

    window.addEventListener('resize', handleResize)

    // Animation Loop
    let animationFrameId: number
    const clock = new THREE.Clock()
    let lastThemeKey = themeRef.current

    const animate = () => {
      animationFrameId = requestAnimationFrame(animate)
      const elapsedTime = clock.getElapsedTime()

      // Handle live theme transitions
      if (lastThemeKey !== themeRef.current) {
        lastThemeKey = themeRef.current
        const th = getTheme()

        coreMat.color.setHex(th.coreColor)
        innerMat.color.setHex(th.innerColor)
        ring1Mat.color.setHex(th.ring1Color)
        ring2Mat.color.setHex(th.ring2Color)
        ring3Mat.color.setHex(th.ring3Color)
        ring4Mat.color.setHex(th.ring4Color)
        haloMat.color.setHex(th.coreColor)

        // Update node colors
        const colors = nodeGeo.attributes.color.array as Float32Array
        for (let i = 0; i < nodeCount; i++) {
          const col = new THREE.Color(th.palette[i % th.palette.length])
          colors[i * 3] = col.r
          colors[i * 3 + 1] = col.g
          colors[i * 3 + 2] = col.b
        }
        nodeGeo.attributes.color.needsUpdate = true
      }

      // Continuous ambient rotation + inertia
      if (!isDragging) {
        dragVelocityX *= 0.94
        dragVelocityY *= 0.94
        brainGroup.rotation.y += dragVelocityY + 0.004
        brainGroup.rotation.x += dragVelocityX + 0.0015

        // Mouse Parallax Lerp
        brainGroup.rotation.y += (targetRotationY - brainGroup.rotation.y) * 0.025
        brainGroup.rotation.x += (targetRotationX - brainGroup.rotation.x) * 0.025
      }

      // Dynamic color shifting for holographic core
      const hue = (elapsedTime * 0.08) % 1
      innerMat.color.setHSL(hue, 0.95, 0.6)
      innerMesh.rotation.x += 0.012
      innerMesh.rotation.y += 0.015

      // Pulsing central crystal scale
      const pulseScale = 1 + Math.sin(elapsedTime * 2.8) * 0.08
      innerMesh.scale.set(pulseScale, pulseScale, pulseScale)
      coreMesh.rotation.y -= 0.004

      // Halo breathing
      const haloScale = 9 + Math.sin(elapsedTime * 2) * 1.5
      haloSprite.scale.set(haloScale, haloScale, 1)

      // Ring rotations & Satellite movement
      ring1.rotation.z += 0.009
      ring2.rotation.z -= 0.007
      ring3.rotation.z += 0.004
      ring4.rotation.z -= 0.006

      sat1.position.x = 6.6 * Math.cos(elapsedTime * 1.6)
      sat1.position.y = 6.6 * Math.sin(elapsedTime * 1.6)

      sat2.position.x = 7.4 * Math.cos(-elapsedTime * 1.3)
      sat2.position.y = 7.4 * Math.sin(-elapsedTime * 1.3)

      sat3.position.x = 8.8 * Math.cos(elapsedTime * 1.1)
      sat3.position.y = 8.8 * Math.sin(elapsedTime * 1.1)

      // Animate Traveling Synapse Pulses
      const pulsePosArr = pulseGeo.attributes.position.array as Float32Array
      const pulseColArr = pulseGeo.attributes.color.array as Float32Array

      for (let pIdx = 0; pIdx < pulseCount; pIdx++) {
        const p = pulses[pIdx]
        p.progress += p.speed
        if (p.progress >= 1) {
          p.progress = 0
          p.pair = connectedPairs[Math.floor(Math.random() * connectedPairs.length)] || p.pair
        }

        const curX = p.pair.from.x + (p.pair.to.x - p.pair.from.x) * p.progress
        const curY = p.pair.from.y + (p.pair.to.y - p.pair.from.y) * p.progress
        const curZ = p.pair.from.z + (p.pair.to.z - p.pair.from.z) * p.progress

        pulsePosArr[pIdx * 3] = curX
        pulsePosArr[pIdx * 3 + 1] = curY
        pulsePosArr[pIdx * 3 + 2] = curZ

        pulseColArr[pIdx * 3] = p.pair.color.r
        pulseColArr[pIdx * 3 + 1] = p.pair.color.g
        pulseColArr[pIdx * 3 + 2] = p.pair.color.b
      }
      pulseGeo.attributes.position.needsUpdate = true
      pulseGeo.attributes.color.needsUpdate = true

      // Synapse line pulsing opacity
      lineMat.opacity = 0.55 + Math.sin(elapsedTime * 3) * 0.2

      // Star dust particle drift
      dustParticles.rotation.y = elapsedTime * 0.02
      dustParticles.rotation.x = elapsedTime * 0.01

      renderer.render(scene, camera)
    }

    animate()

    return () => {
      container.removeEventListener('mousedown', handleMouseDown)
      window.removeEventListener('mousemove', handleMouseMove)
      window.removeEventListener('mouseup', handleMouseUp)
      container.removeEventListener('touchstart', handleTouchStart)
      container.removeEventListener('touchmove', handleTouchMove)
      container.removeEventListener('touchend', handleTouchEnd)
      window.removeEventListener('resize', handleResize)
      cancelAnimationFrame(animationFrameId)

      // Clean up resources
      coreGeo.dispose()
      coreMat.dispose()
      innerGeo.dispose()
      innerMat.dispose()
      haloMat.dispose()
      glowTexture.dispose()
      nodeGeo.dispose()
      nodeMat.dispose()
      lineGeo.dispose()
      lineMat.dispose()
      pulseGeo.dispose()
      pulseMat.dispose()
      ring1Geo.dispose()
      ring1Mat.dispose()
      ring2Geo.dispose()
      ring2Mat.dispose()
      ring3Geo.dispose()
      ring3Mat.dispose()
      ring4Geo.dispose()
      ring4Mat.dispose()
      satGeo.dispose()
      sat1Mat.dispose()
      sat2Mat.dispose()
      sat3Mat.dispose()
      dustGeo.dispose()
      dustMat.dispose()
      renderer.dispose()

      if (container.contains(renderer.domElement)) {
        container.removeChild(renderer.domElement)
      }
    }
  }, [])

  if (!hasWebGl) {
    return (
      <div className="relative w-full h-full flex items-center justify-center">
        <div className="relative w-72 h-72 rounded-full border border-purple-500/40 flex items-center justify-center animate-spin [animation-duration:25s]">
          <div className="absolute w-56 h-56 rounded-full border border-cyan-400/50 animate-spin [animation-duration:18s] [animation-direction:reverse]" />
          <div className="w-40 h-40 rounded-full bg-gradient-to-tr from-fuchsia-600/40 via-purple-600/30 to-cyan-400/40 backdrop-blur-md border border-fuchsia-400/60 flex items-center justify-center shadow-[0_0_50px_rgba(217,70,239,0.4)]">
            <div className="w-16 h-16 rounded-full bg-cyan-400/50 animate-ping [animation-duration:3s]" />
          </div>
        </div>
      </div>
    )
  }

  return (
    <div className="relative w-full flex flex-col items-center">
      {/* 3D WebGL Canvas */}
      <div
        ref={mountRef}
        className="relative w-full h-[400px] sm:h-[480px] lg:h-[560px] flex items-center justify-center cursor-grab active:cursor-grabbing select-none"
        aria-label="Interactive 3D Neural Sphere Visualization - Click and drag to rotate"
        title="Interactive 3D Neural Sphere — Drag to rotate"
      />

      {/* Floating Interactive Spectrum / Color Mode Selector */}
      <div className="mt-1 flex flex-wrap items-center justify-center gap-1.5 sm:gap-2 p-1.5 rounded-2xl bg-[#140E26]/85 backdrop-blur-md border border-purple-500/30 shadow-[0_0_25px_rgba(139,92,246,0.3)] z-20">
        {(Object.keys(THEMES) as NeuralThemeKey[]).map((themeKey) => {
          const theme = THEMES[themeKey]
          const Icon = theme.icon
          const isActive = activeTheme === themeKey
          return (
            <button
              key={themeKey}
              onClick={() => setActiveTheme(themeKey)}
              className={`inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl text-xs font-mono font-medium transition-all duration-300 cursor-pointer ${
                isActive
                  ? 'bg-gradient-to-r from-[#8B5CF6] via-[#D946EF] to-[#06B6D4] text-white shadow-[0_0_15px_rgba(217,70,239,0.5)] scale-105'
                  : 'text-[#C4B5FD] hover:text-white hover:bg-purple-900/40'
              }`}
            >
              <Icon className="w-3.5 h-3.5" />
              <span>{theme.name}</span>
            </button>
          )
        })}
      </div>
    </div>
  )
}
