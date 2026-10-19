import { useEffect, useRef, useState } from 'react'
import * as THREE from 'three'
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader.js'

export default function Model3DShowcase() {
  const mountRef = useRef<HTMLDivElement>(null)
  const [loaded, setLoaded] = useState(false)

  useEffect(() => {
    const mount = mountRef.current!
    const scene = new THREE.Scene()
    const camera = new THREE.PerspectiveCamera(45, mount.clientWidth / mount.clientHeight, 0.1, 100)
    camera.position.set(0, 0.4, 5)
    const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true })
    renderer.setSize(mount.clientWidth, mount.clientHeight)
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2))
    mount.appendChild(renderer.domElement)

    scene.add(new THREE.AmbientLight(0xffffff, 0.7))
    const key = new THREE.DirectionalLight(0x9c8cff, 2.2); key.position.set(3, 4, 5); scene.add(key)
    const rim = new THREE.DirectionalLight(0x2de2ff, 1.6); rim.position.set(-4, -2, -3); scene.add(rim)

    let model: THREE.Object3D | null = null
    let drag = false, px = 0, vel = 0
    new GLTFLoader().load('/models/motion-mascot.glb', (g) => {
      model = g.scene
      const box = new THREE.Box3().setFromObject(model)
      const size = box.getSize(new THREE.Vector3()).length()
      model.scale.setScalar(2.6 / size)
      const c = box.getCenter(new THREE.Vector3())
      model.position.sub(c.multiplyScalar(2.6 / size))
      scene.add(model)
      setLoaded(true)
    })

    const down = (e: PointerEvent) => { drag = true; px = e.clientX }
    const move = (e: PointerEvent) => { if (drag && model) { vel = (e.clientX - px) * 0.01; px = e.clientX } }
    const up = () => { drag = false }
    mount.addEventListener('pointerdown', down)
    window.addEventListener('pointermove', move)
    window.addEventListener('pointerup', up)

    const clock = new THREE.Clock()
    let raf = 0
    const animate = () => {
      const t = clock.getElapsedTime()
      if (model) {
        model.rotation.y += 0.008 + vel
        vel *= 0.94
        model.position.y = Math.sin(t * 1.4) * 0.12
        model.rotation.z = Math.sin(t * 0.8) * 0.06
      }
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
      window.removeEventListener('resize', onResize)
      window.removeEventListener('pointermove', move)
      window.removeEventListener('pointerup', up)
      mount.removeEventListener('pointerdown', down)
      renderer.dispose()
      if (renderer.domElement.parentNode === mount) mount.removeChild(renderer.domElement)
    }
  }, [])

  return (
    <div className="relative mx-auto h-[420px] max-w-3xl cursor-grab active:cursor-grabbing">
      {!loaded && <div className="absolute inset-0 flex items-center justify-center text-sm tracking-[0.3em] text-white/30">LOADING ASSET…</div>}
      <div ref={mountRef} className="h-full w-full" />
      <p className="pointer-events-none absolute bottom-2 left-1/2 -translate-x-1/2 text-xs tracking-[0.3em] text-white/30">DRAG TO SPIN</p>
    </div>
  )
}
