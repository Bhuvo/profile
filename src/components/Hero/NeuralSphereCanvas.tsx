import { useEffect, useRef, useState } from 'react'
import * as THREE from 'three'

export function NeuralSphereCanvas() {
  const mountRef = useRef<HTMLDivElement>(null)
  const [hasWebGl, setHasWebGl] = useState(true)

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

    // Three.js Scene Setup
    const scene = new THREE.Scene()
    const camera = new THREE.PerspectiveCamera(
      45,
      container.clientWidth / container.clientHeight,
      0.1,
      1000
    )
    camera.position.z = 24

    const renderer = new THREE.WebGLRenderer({
      alpha: true,
      antialias: true,
      powerPreference: 'high-performance',
    })
    renderer.setSize(container.clientWidth, container.clientHeight)
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2))
    container.appendChild(renderer.domElement)

    // Master Group for Mouse Parallax, Continuous Rotation & User Drag
    const brainGroup = new THREE.Group()
    scene.add(brainGroup)

    // Palette of vibrant colors
    const palette = [
      new THREE.Color(0x06B6D4), // Neon Cyan
      new THREE.Color(0xD946EF), // Vivid Fuchsia
      new THREE.Color(0x8B5CF6), // Electric Purple
      new THREE.Color(0xEC4899), // Hot Pink
      new THREE.Color(0x10B981), // Neon Emerald
      new THREE.Color(0xF59E0B), // Sunburst Gold
      new THREE.Color(0xC4B5FD), // Lavender
    ]

    // 1. Central Core Sphere (Translucent Glowing Wireframe Mesh)
    const coreGeo = new THREE.SphereGeometry(3.6, 24, 24)
    const coreMat = new THREE.MeshBasicMaterial({
      color: 0x8B5CF6,
      transparent: true,
      opacity: 0.22,
      wireframe: true,
      blending: THREE.AdditiveBlending,
    })
    const coreMesh = new THREE.Mesh(coreGeo, coreMat)
    brainGroup.add(coreMesh)

    // 2. Inner Glowing Core (Multi-colored Icosahedron)
    const innerGeo = new THREE.IcosahedronGeometry(2.4, 2)
    const innerMat = new THREE.MeshBasicMaterial({
      color: 0xD946EF,
      transparent: true,
      opacity: 0.38,
      wireframe: false,
      blending: THREE.AdditiveBlending,
    })
    const innerMesh = new THREE.Mesh(innerGeo, innerMat)
    brainGroup.add(innerMesh)

    // 3. Neural Nodes (Points) Distributed on a Sphere Shell
    const nodeCount = 200
    const nodePositions = new Float32Array(nodeCount * 3)
    const nodeColors = new Float32Array(nodeCount * 3)
    const nodePoints: THREE.Vector3[] = []

    const sphereRadius = 5.2

    for (let i = 0; i < nodeCount; i++) {
      const phi = Math.acos(-1 + (2 * i) / nodeCount)
      const theta = Math.sqrt(nodeCount * Math.PI) * phi

      const x = sphereRadius * Math.cos(theta) * Math.sin(phi) + (Math.random() - 0.5) * 0.7
      const y = sphereRadius * Math.sin(theta) * Math.sin(phi) + (Math.random() - 0.5) * 0.7
      const z = sphereRadius * Math.cos(phi) + (Math.random() - 0.5) * 0.7

      nodePositions[i * 3] = x
      nodePositions[i * 3 + 1] = y
      nodePositions[i * 3 + 2] = z
      nodePoints.push(new THREE.Vector3(x, y, z))

      // Distribute vibrant colors across nodes
      const chosenColor = palette[i % palette.length]
      nodeColors[i * 3] = chosenColor.r
      nodeColors[i * 3 + 1] = chosenColor.g
      nodeColors[i * 3 + 2] = chosenColor.b
    }

    const nodeGeo = new THREE.BufferGeometry()
    nodeGeo.setAttribute('position', new THREE.BufferAttribute(nodePositions, 3))
    nodeGeo.setAttribute('color', new THREE.BufferAttribute(nodeColors, 3))

    // High-resolution particle texture generator with bright glowing aura
    const createCircleTexture = () => {
      const c = document.createElement('canvas')
      c.width = 128
      c.height = 128
      const ctx = c.getContext('2d')
      if (ctx) {
        const grad = ctx.createRadialGradient(64, 64, 0, 64, 64, 64)
        grad.addColorStop(0, 'rgba(255, 255, 255, 1)')
        grad.addColorStop(0.2, 'rgba(103, 232, 249, 1)')
        grad.addColorStop(0.5, 'rgba(217, 70, 239, 0.7)')
        grad.addColorStop(0.8, 'rgba(139, 92, 246, 0.3)')
        grad.addColorStop(1, 'rgba(0, 0, 0, 0)')
        ctx.fillStyle = grad
        ctx.fillRect(0, 0, 128, 128)
      }
      return new THREE.CanvasTexture(c)
    }

    const nodeMat = new THREE.PointsMaterial({
      size: 0.65,
      vertexColors: true,
      transparent: true,
      opacity: 0.95,
      map: createCircleTexture(),
      blending: THREE.AdditiveBlending,
      depthWrite: false,
    })
    const nodeParticles = new THREE.Points(nodeGeo, nodeMat)
    brainGroup.add(nodeParticles)

    // 4. Neural Synapse Connection Lines (Connect close nodes with multi-color gradients)
    const linePositions: number[] = []
    const lineColors: number[] = []
    const maxDistance = 2.3

    for (let i = 0; i < nodeCount; i++) {
      for (let j = i + 1; j < nodeCount; j++) {
        const dist = nodePoints[i].distanceTo(nodePoints[j])
        if (dist < maxDistance) {
          linePositions.push(nodePoints[i].x, nodePoints[i].y, nodePoints[i].z)
          linePositions.push(nodePoints[j].x, nodePoints[j].y, nodePoints[j].z)

          const c1 = palette[i % palette.length]
          const c2 = palette[j % palette.length]

          const alpha = 1.0 - dist / maxDistance
          lineColors.push(c1.r * alpha, c1.g * alpha, c1.b * alpha)
          lineColors.push(c2.r * alpha, c2.g * alpha, c2.b * alpha)
        }
      }
    }

    const lineGeo = new THREE.BufferGeometry()
    lineGeo.setAttribute('position', new THREE.Float32BufferAttribute(linePositions, 3))
    lineGeo.setAttribute('color', new THREE.Float32BufferAttribute(lineColors, 3))

    const lineMat = new THREE.LineBasicMaterial({
      vertexColors: true,
      transparent: true,
      opacity: 0.55,
      blending: THREE.AdditiveBlending,
    })
    const synapseLines = new THREE.LineSegments(lineGeo, lineMat)
    brainGroup.add(synapseLines)

    // 5. Outer Orbital Data Rings with Multi-Color Glow
    // Ring 1: Neon Cyan Orbital
    const ring1Geo = new THREE.TorusGeometry(6.6, 0.025, 16, 100)
    const ring1Mat = new THREE.MeshBasicMaterial({
      color: 0x06B6D4,
      transparent: true,
      opacity: 0.6,
      blending: THREE.AdditiveBlending,
    })
    const ring1 = new THREE.Mesh(ring1Geo, ring1Mat)
    ring1.rotation.x = Math.PI / 3
    ring1.rotation.y = Math.PI / 6
    brainGroup.add(ring1)

    // Ring 2: Vivid Fuchsia / Magenta Orbital
    const ring2Geo = new THREE.TorusGeometry(7.6, 0.02, 16, 100)
    const ring2Mat = new THREE.MeshBasicMaterial({
      color: 0xD946EF,
      transparent: true,
      opacity: 0.55,
      blending: THREE.AdditiveBlending,
    })
    const ring2 = new THREE.Mesh(ring2Geo, ring2Mat)
    ring2.rotation.x = -Math.PI / 4
    ring2.rotation.y = Math.PI / 3
    brainGroup.add(ring2)

    // Ring 3: Electric Purple Equatorial Ring
    const ring3Geo = new THREE.TorusGeometry(8.2, 0.015, 16, 100)
    const ring3Mat = new THREE.MeshBasicMaterial({
      color: 0x8B5CF6,
      transparent: true,
      opacity: 0.45,
      blending: THREE.AdditiveBlending,
    })
    const ring3 = new THREE.Mesh(ring3Geo, ring3Mat)
    ring3.rotation.x = Math.PI / 2
    brainGroup.add(ring3)

    // 6. Rotating Satellite Beacons on the Rings
    const satGeo = new THREE.SphereGeometry(0.18, 16, 16)
    const satCyanMat = new THREE.MeshBasicMaterial({ color: 0x06B6D4, blending: THREE.AdditiveBlending })
    const satFuchsiaMat = new THREE.MeshBasicMaterial({ color: 0xD946EF, blending: THREE.AdditiveBlending })
    
    const sat1 = new THREE.Mesh(satGeo, satCyanMat)
    const sat2 = new THREE.Mesh(satGeo, satFuchsiaMat)
    ring1.add(sat1)
    ring2.add(sat2)

    // 7. Floating Cosmic Dust Particles in Multi-Color
    const dustCount = 120
    const dustPositions = new Float32Array(dustCount * 3)
    const dustColors = new Float32Array(dustCount * 3)

    for (let i = 0; i < dustCount * 3; i += 3) {
      dustPositions[i] = (Math.random() - 0.5) * 24
      dustPositions[i + 1] = (Math.random() - 0.5) * 24
      dustPositions[i + 2] = (Math.random() - 0.5) * 18

      const c = palette[Math.floor(Math.random() * palette.length)]
      dustColors[i] = c.r
      dustColors[i + 1] = c.g
      dustColors[i + 2] = c.b
    }

    const dustGeo = new THREE.BufferGeometry()
    dustGeo.setAttribute('position', new THREE.BufferAttribute(dustPositions, 3))
    dustGeo.setAttribute('color', new THREE.BufferAttribute(dustColors, 3))

    const dustMat = new THREE.PointsMaterial({
      size: 0.32,
      vertexColors: true,
      transparent: true,
      opacity: 0.8,
      blending: THREE.AdditiveBlending,
    })
    const dustParticles = new THREE.Points(dustGeo, dustMat)
    scene.add(dustParticles)

    // Interactive Drag to Rotate + Parallax
    let isDragging = false
    let previousMousePosition = { x: 0, y: 0 }
    let targetRotationX = 0
    let targetRotationY = 0

    const handleMouseDown = (e: MouseEvent) => {
      isDragging = true
      previousMousePosition = { x: e.clientX, y: e.clientY }
    }

    const handleMouseMove = (e: MouseEvent) => {
      if (isDragging) {
        const deltaX = e.clientX - previousMousePosition.x
        const deltaY = e.clientY - previousMousePosition.y
        brainGroup.rotation.y += deltaX * 0.008
        brainGroup.rotation.x += deltaY * 0.008
        previousMousePosition = { x: e.clientX, y: e.clientY }
      } else {
        const rect = container.getBoundingClientRect()
        const mouseX = ((e.clientX - rect.left) / rect.width) * 2 - 1
        const mouseY = -(((e.clientY - rect.top) / rect.height) * 2 - 1)
        targetRotationY = mouseX * 0.4
        targetRotationX = mouseY * 0.25
      }
    }

    const handleMouseUp = () => {
      isDragging = false
    }

    // Touch support for mobile
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

    const animate = () => {
      animationFrameId = requestAnimationFrame(animate)
      const elapsedTime = clock.getElapsedTime()

      // Continuous ambient rotation
      if (!isDragging) {
        brainGroup.rotation.y += 0.0035
        brainGroup.rotation.x += 0.0012

        // Gentle mouse parallax lerp
        brainGroup.rotation.y += (targetRotationY - brainGroup.rotation.y) * 0.02
        brainGroup.rotation.x += (targetRotationX - brainGroup.rotation.x) * 0.02
      }

      // Dynamic color shifting for inner icosahedron
      const hue = (elapsedTime * 0.08) % 1
      innerMat.color.setHSL(hue, 0.85, 0.6)
      coreMat.color.setHSL((hue + 0.5) % 1, 0.75, 0.5)

      // Pulsing central core
      const pulseScale = 1 + Math.sin(elapsedTime * 2.5) * 0.06
      innerMesh.scale.set(pulseScale, pulseScale, pulseScale)

      // Ring rotations & Satellite movement
      ring1.rotation.z += 0.008
      ring2.rotation.z -= 0.007
      ring3.rotation.z += 0.004

      sat1.position.x = 6.6 * Math.cos(elapsedTime * 1.5)
      sat1.position.y = 6.6 * Math.sin(elapsedTime * 1.5)

      sat2.position.x = 7.6 * Math.cos(-elapsedTime * 1.2)
      sat2.position.y = 7.6 * Math.sin(-elapsedTime * 1.2)

      // Synapse line pulsing opacity
      lineMat.opacity = 0.45 + Math.sin(elapsedTime * 3) * 0.2

      // Gentle floating dust drift
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

      // Clean up WebGL resources
      coreGeo.dispose()
      coreMat.dispose()
      innerGeo.dispose()
      innerMat.dispose()
      nodeGeo.dispose()
      nodeMat.dispose()
      lineGeo.dispose()
      lineMat.dispose()
      ring1Geo.dispose()
      ring1Mat.dispose()
      ring2Geo.dispose()
      ring2Mat.dispose()
      ring3Geo.dispose()
      ring3Mat.dispose()
      satGeo.dispose()
      satCyanMat.dispose()
      satFuchsiaMat.dispose()
      dustGeo.dispose()
      dustMat.dispose()
      renderer.dispose()

      if (container.contains(renderer.domElement)) {
        container.removeChild(renderer.domElement)
      }
    }
  }, [])

  if (!hasWebGl) {
    // Colorful CSS fallback
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
    <div
      ref={mountRef}
      className="relative w-full h-[380px] sm:h-[460px] lg:h-[540px] flex items-center justify-center cursor-grab active:cursor-grabbing select-none"
      aria-label="Interactive 3D Neural Sphere Visualization - Click and drag to rotate"
      title="Interactive 3D Neural Sphere — Drag to rotate"
    />
  )
}
