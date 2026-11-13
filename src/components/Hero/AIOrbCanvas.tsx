import React, { useEffect, useRef } from 'react'
import * as THREE from 'three'

interface AIOrbCanvasProps {
  className?: string
}

export const AIOrbCanvas: React.FC<AIOrbCanvasProps> = ({ className = '' }) => {
  const containerRef = useRef<HTMLDivElement>(null)
  const mouseRef = useRef({ x: 0, y: 0, targetX: 0, targetY: 0 })

  useEffect(() => {
    const container = containerRef.current
    if (!container) return

    // Scene setup
    const scene = new THREE.Scene()
    const width = container.clientWidth || 500
    const height = container.clientHeight || 500

    const camera = new THREE.PerspectiveCamera(45, width / height, 0.1, 1000)
    camera.position.z = 7

    const renderer = new THREE.WebGLRenderer({
      alpha: true,
      antialias: true,
      powerPreference: 'high-performance',
    })
    renderer.setSize(width, height)
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2))
    container.appendChild(renderer.domElement)

    // Main Group that rotates
    const orbGroup = new THREE.Group()
    scene.add(orbGroup)

    // 1. Central Luminous Core (Icosahedron with glowing wireframe)
    const coreGeo = new THREE.IcosahedronGeometry(1.6, 2)
    const coreMat = new THREE.MeshBasicMaterial({
      color: 0x8b5cf6,
      wireframe: true,
      transparent: true,
      opacity: 0.35,
    })
    const coreMesh = new THREE.Mesh(coreGeo, coreMat)
    orbGroup.add(coreMesh)

    // 2. Inner Pulsing Core Sphere
    const innerGeo = new THREE.SphereGeometry(1.0, 32, 32)
    const innerMat = new THREE.MeshBasicMaterial({
      color: 0x6366f1,
      transparent: true,
      opacity: 0.2,
      wireframe: true,
    })
    const innerMesh = new THREE.Mesh(innerGeo, innerMat)
    orbGroup.add(innerMesh)

    // 3. Surrounding Neural Network Nodes (Points)
    const particleCount = window.innerWidth < 768 ? 90 : 180
    const particleGeo = new THREE.BufferGeometry()
    const particlePositions = new Float32Array(particleCount * 3)
    const originalPositions: number[] = []

    for (let i = 0; i < particleCount; i++) {
      const radius = 2.0 + Math.random() * 1.5
      const theta = Math.random() * Math.PI * 2
      const phi = Math.acos(Math.random() * 2 - 1)

      const x = radius * Math.sin(phi) * Math.cos(theta)
      const y = radius * Math.sin(phi) * Math.sin(theta)
      const z = radius * Math.cos(phi)

      particlePositions[i * 3] = x
      particlePositions[i * 3 + 1] = y
      particlePositions[i * 3 + 2] = z

      originalPositions.push(x, y, z)
    }

    particleGeo.setAttribute('position', new THREE.BufferAttribute(particlePositions, 3))

    // Glowing cyan/purple particles
    const particleMat = new THREE.PointsMaterial({
      color: 0x22d3ee,
      size: 0.08,
      transparent: true,
      opacity: 0.85,
      blending: THREE.AdditiveBlending,
    })
    const particles = new THREE.Points(particleGeo, particleMat)
    orbGroup.add(particles)

    // 4. Dynamic Synaptic Connection Lines
    const maxConnections = 80
    const linePositions = new Float32Array(maxConnections * 2 * 3)
    const lineGeo = new THREE.BufferGeometry()
    lineGeo.setAttribute('position', new THREE.BufferAttribute(linePositions, 3))
    const lineMat = new THREE.LineBasicMaterial({
      color: 0x818cf8,
      transparent: true,
      opacity: 0.25,
      blending: THREE.AdditiveBlending,
    })
    const connectionLines = new THREE.LineSegments(lineGeo, lineMat)
    orbGroup.add(connectionLines)

    // 5. Outer Geometric Gyro Rings
    const ringGeo1 = new THREE.TorusGeometry(2.4, 0.015, 16, 100)
    const ringMat1 = new THREE.MeshBasicMaterial({
      color: 0x22d3ee,
      transparent: true,
      opacity: 0.45,
    })
    const ring1 = new THREE.Mesh(ringGeo1, ringMat1)
    ring1.rotation.x = Math.PI / 3
    orbGroup.add(ring1)

    const ringGeo2 = new THREE.TorusGeometry(2.7, 0.012, 16, 100)
    const ringMat2 = new THREE.MeshBasicMaterial({
      color: 0xa855f7,
      transparent: true,
      opacity: 0.35,
    })
    const ring2 = new THREE.Mesh(ringGeo2, ringMat2)
    ring2.rotation.y = Math.PI / 4
    ring2.rotation.x = -Math.PI / 6
    orbGroup.add(ring2)

    // 6. Ambient & Point Lighting
    const lightPurple = new THREE.PointLight(0x8b5cf6, 4, 20)
    lightPurple.position.set(3, 3, 3)
    scene.add(lightPurple)

    const lightCyan = new THREE.PointLight(0x22d3ee, 3, 20)
    lightCyan.position.set(-3, -2, 2)
    scene.add(lightCyan)

    // Mouse Move Interaction Listener
    const handleMouseMove = (e: MouseEvent) => {
      const rect = container.getBoundingClientRect()
      const clientX = e.clientX - rect.left
      const clientY = e.clientY - rect.top

      mouseRef.current.targetX = (clientX / rect.width) * 2 - 1
      mouseRef.current.targetY = -(clientY / rect.height) * 2 + 1
    }

    window.addEventListener('mousemove', handleMouseMove)

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

      // Smooth mouse follow (lerp)
      mouseRef.current.x += (mouseRef.current.targetX - mouseRef.current.x) * 0.05
      mouseRef.current.y += (mouseRef.current.targetY - mouseRef.current.y) * 0.05

      // Idle Rotation + Mouse Tilt
      orbGroup.rotation.y = elapsedTime * 0.25 + mouseRef.current.x * 0.4
      orbGroup.rotation.x = Math.sin(elapsedTime * 0.15) * 0.15 - mouseRef.current.y * 0.4

      // Counter-rotating rings
      ring1.rotation.z = elapsedTime * 0.3
      ring2.rotation.z = -elapsedTime * 0.25

      // Pulsing core
      const pulse = 1 + Math.sin(elapsedTime * 2) * 0.05
      coreMesh.scale.set(pulse, pulse, pulse)
      innerMesh.scale.set(1 / pulse, 1 / pulse, 1 / pulse)

      // Slight floating motion
      orbGroup.position.y = Math.sin(elapsedTime * 0.8) * 0.12

      // Update neural connection lines dynamically
      const positions = particleGeo.attributes.position.array as Float32Array
      let lineIndex = 0
      const posArray = lineGeo.attributes.position.array as Float32Array

      // Connect nearby particles
      for (let i = 0; i < particleCount && lineIndex < maxConnections * 6; i += 2) {
        for (let j = i + 1; j < particleCount && lineIndex < maxConnections * 6; j += 3) {
          const dx = positions[i * 3] - positions[j * 3]
          const dy = positions[i * 3 + 1] - positions[j * 3 + 1]
          const dz = positions[i * 3 + 2] - positions[j * 3 + 2]
          const dist = Math.sqrt(dx * dx + dy * dy + dz * dz)

          if (dist < 1.3) {
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
      cancelAnimationFrame(animationFrameId)
      renderer.dispose()
      if (container.contains(renderer.domElement)) {
        container.removeChild(renderer.domElement)
      }
    }
  }, [])

  return (
    <div
      ref={containerRef}
      className={`relative w-full h-[380px] sm:h-[460px] lg:h-[540px] flex items-center justify-center pointer-events-auto ${className}`}
      aria-label="3D AI Neural Orb Interactive Visualization"
    >
      {/* Decorative cyber backdrop circles */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
        <div className="w-[300px] h-[300px] sm:w-[420px] sm:h-[420px] rounded-full bg-purple-600/10 blur-[80px] -z-10 animate-pulse" />
        <div className="w-[200px] h-[200px] sm:w-[300px] sm:h-[300px] rounded-full bg-cyan-400/10 blur-[60px] -z-10" />
      </div>

      {/* Floating HUD Badges around the Orb */}
      <div className="absolute top-6 left-2 sm:left-4 px-3 py-1.5 rounded-lg bg-[#151528]/80 backdrop-blur-md border border-purple-500/30 text-[11px] sm:text-xs font-mono text-purple-300 flex items-center gap-2 pointer-events-none shadow-lg shadow-purple-950/40">
        <span className="w-2 h-2 rounded-full bg-purple-400 animate-ping" />
        <span>NEURAL_NODE_ACTIVE</span>
      </div>

      <div className="absolute bottom-8 right-2 sm:right-6 px-3 py-1.5 rounded-lg bg-[#151528]/80 backdrop-blur-md border border-cyan-400/30 text-[11px] sm:text-xs font-mono text-cyan-300 flex items-center gap-2 pointer-events-none shadow-lg shadow-cyan-950/40">
        <span className="w-2 h-2 rounded-full bg-cyan-400 animate-pulse" />
        <span>LATENCY: 98ms</span>
      </div>
    </div>
  )
}
