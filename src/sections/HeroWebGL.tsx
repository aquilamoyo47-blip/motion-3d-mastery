import { useEffect, useRef } from 'react'
import * as THREE from 'three'

export default function HeroWebGL() {
  const mountRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const mount = mountRef.current!
    const scene = new THREE.Scene()
    const camera = new THREE.PerspectiveCamera(60, mount.clientWidth / mount.clientHeight, 0.1, 100)
    camera.position.z = 8
    const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true })
    renderer.setSize(mount.clientWidth, mount.clientHeight)
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2))
    mount.appendChild(renderer.domElement)

    const COUNT = 3500
    const positions = new Float32Array(COUNT * 3)
    const colors = new Float32Array(COUNT * 3)
    const c1 = new THREE.Color('#7c6cff')
    const c2 = new THREE.Color('#2de2ff')
    for (let i = 0; i < COUNT; i++) {
      const r = 3 + Math.random() * 6
      const theta = Math.random() * Math.PI * 2
      const phi = Math.acos(2 * Math.random() - 1)
      positions[i * 3] = r * Math.sin(phi) * Math.cos(theta)
      positions[i * 3 + 1] = r * Math.sin(phi) * Math.sin(theta)
      positions[i * 3 + 2] = r * Math.cos(phi)
      const c = c1.clone().lerp(c2, Math.random())
      colors[i * 3] = c.r; colors[i * 3 + 1] = c.g; colors[i * 3 + 2] = c.b
    }
    const geo = new THREE.BufferGeometry()
    geo.setAttribute('position', new THREE.BufferAttribute(positions, 3))
    geo.setAttribute('color', new THREE.BufferAttribute(colors, 3))
    const mat = new THREE.PointsMaterial({ size: 0.035, vertexColors: true, transparent: true, opacity: 0.9 })
    const points = new THREE.Points(geo, mat)
    scene.add(points)

    const knot = new THREE.Mesh(
      new THREE.TorusKnotGeometry(1.4, 0.42, 160, 24),
      new THREE.MeshBasicMaterial({ color: '#8f7bff', wireframe: true, transparent: true, opacity: 0.35 })
    )
    scene.add(knot)

    let mx = 0, my = 0
    const onMove = (e: MouseEvent) => {
      mx = (e.clientX / window.innerWidth - 0.5) * 2
      my = (e.clientY / window.innerHeight - 0.5) * 2
    }
    window.addEventListener('mousemove', onMove)

    const clock = new THREE.Clock()
    let raf = 0
    const animate = () => {
      const t = clock.getElapsedTime()
      points.rotation.y = t * 0.06 + mx * 0.3
      points.rotation.x = t * 0.03 + my * 0.2
      knot.rotation.x = t * 0.25 + my * 0.5
      knot.rotation.y = t * 0.35 + mx * 0.5
      camera.position.x += (mx * 0.6 - camera.position.x) * 0.04
      camera.position.y += (-my * 0.6 - camera.position.y) * 0.04
      camera.lookAt(0, 0, 0)
      renderer.render(scene, camera)
      raf = requestAnimationFrame(animate)
    }
    animate()

    const onResize = () => {
      camera.aspect = mount.clientWidth / mount.clientHeight
      camera.updateProjectionMatrix()
      renderer.setSize(mount.clientWidth, mount.clientHeight)
    }
    window.addEventListener('resize', onResize)
    return () => {
      cancelAnimationFrame(raf)
      window.removeEventListener('mousemove', onMove)
      window.removeEventListener('resize', onResize)
      renderer.dispose()
      mount.removeChild(renderer.domElement)
    }
  }, [])

  return <div ref={mountRef} className="absolute inset-0 -z-10" />
}
