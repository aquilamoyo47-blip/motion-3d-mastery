import { useState } from 'react'
import { motion } from 'framer-motion'

const SNIPPETS: Record<string, { code: string; desc: string }> = {
  'CSS': {
    desc: 'GPU-composited micro-interaction — transform + opacity only, 60fps guaranteed.',
    code: `.btn {
  transition: transform .35s cubic-bezier(.22,1,.36,1),
              box-shadow .35s ease;
  will-change: transform;
}
.btn:hover {
  transform: translateY(-4px) scale(1.03);
  box-shadow: 0 12px 40px rgba(124,108,255,.45);
}
.btn:active { transform: scale(.97); }`,
  },
  'GSAP': {
    desc: 'Timeline choreography with stagger — the scroll-driven entrance pattern.',
    code: `gsap.registerPlugin(ScrollTrigger)

gsap.timeline({
  scrollTrigger: { trigger: '.panel', start: 'top 75%' }
})
.from('.panel h3',  { y: 60, opacity: 0, duration: .8, ease: 'power3.out' })
.from('.panel p',   { y: 40, opacity: 0, duration: .6 }, '-=.4')
.from('.panel img', { scale: 1.15, opacity: 0, duration: 1 }, '-=.3')`,
  },
  'Framer Motion': {
    desc: 'Spring-physics layout animation — the modern React idiom.',
    code: `<motion.div
  layout
  initial={{ opacity: 0, y: 40 }}
  whileInView={{ opacity: 1, y: 0 }}
  viewport={{ once: true }}
  whileHover={{ scale: 1.04 }}
  transition={{
    type: 'spring',
    stiffness: 260,
    damping: 22,
  }}
/>`,
  },
  'Three.js': {
    desc: 'Minimal interactive particle field — the hero-section starter kit.',
    code: `const geo = new THREE.BufferGeometry()
geo.setAttribute('position',
  new THREE.BufferAttribute(positions, 3))

const points = new THREE.Points(geo,
  new THREE.PointsMaterial({ size: .035, vertexColors: true }))

function animate() {
  points.rotation.y += .0008
  camera.position.x += (mouseX * .6 - camera.position.x) * .04
  renderer.render(scene, camera)
  requestAnimationFrame(animate)
}`,
  },
}

export default function CodeLibrary() {
  const [tab, setTab] = useState<keyof typeof SNIPPETS>('GSAP')
  const [copied, setCopied] = useState(false)
  const s = SNIPPETS[tab]

  const copy = () => {
    navigator.clipboard.writeText(s.code)
    setCopied(true)
    setTimeout(() => setCopied(false), 1500)
  }

  return (
    <div className="mx-auto max-w-4xl px-6">
      <motion.div initial={{ opacity: 0, y: 40 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.7 }} className="overflow-hidden rounded-2xl border border-white/10 bg-[#0b0b14]">
        <div className="flex items-center justify-between border-b border-white/10 px-4 py-2">
          <div className="flex gap-1">
            {(Object.keys(SNIPPETS) as (keyof typeof SNIPPETS)[]).map((k) => (
              <button key={k} onClick={() => setTab(k)} className={`rounded-lg px-4 py-2 text-sm font-medium transition-colors ${tab === k ? 'bg-violet-500/20 text-violet-300' : 'text-white/40 hover:text-white/70'}`}>{k}</button>
            ))}
          </div>
          <button onClick={copy} className="rounded-lg bg-white/5 px-3 py-1.5 text-xs text-white/60 transition-colors hover:bg-white/10">{copied ? '✓ Copied' : 'Copy'}</button>
        </div>
        <p className="border-b border-white/5 px-5 py-3 text-sm text-white/45">{s.desc}</p>
        <pre className="overflow-x-auto p-5 text-[13px] leading-relaxed"><code className="text-cyan-100/85">{s.code}</code></pre>
      </motion.div>
    </div>
  )
}
