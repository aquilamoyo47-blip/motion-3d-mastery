import { useRef } from 'react'
import { motion, useMotionValue, useSpring, useTransform } from 'framer-motion'

interface Props { title: string; tag: string; desc: string; accent: string; index: number }

export default function TiltCard({ title, tag, desc, accent, index }: Props) {
  const ref = useRef<HTMLDivElement>(null)
  const x = useMotionValue(0)
  const y = useMotionValue(0)
  const sx = useSpring(x, { stiffness: 200, damping: 20 })
  const sy = useSpring(y, { stiffness: 200, damping: 20 })
  const rotateX = useTransform(sy, [-0.5, 0.5], [12, -12])
  const rotateY = useTransform(sx, [-0.5, 0.5], [-12, 12])

  const onMouse = (e: React.MouseEvent) => {
    const r = ref.current!.getBoundingClientRect()
    x.set((e.clientX - r.left) / r.width - 0.5)
    y.set((e.clientY - r.top) / r.height - 0.5)
  }

  return (
    <motion.div
      ref={ref}
      onMouseMove={onMouse}
      onMouseLeave={() => { x.set(0); y.set(0) }}
      initial={{ opacity: 0, y: 60 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-80px' }}
      transition={{ duration: 0.7, delay: index * 0.1, ease: [0.22, 1, 0.36, 1] }}
      style={{ rotateX, rotateY, transformStyle: 'preserve-3d' }}
      className="group relative rounded-2xl border border-white/10 bg-white/[0.03] p-8 backdrop-blur-sm transition-colors hover:border-white/25"
    >
      <div className="pointer-events-none absolute -top-px left-8 right-8 h-px" style={{ background: `linear-gradient(90deg, transparent, ${accent}, transparent)` }} />
      <div style={{ transform: 'translateZ(40px)' }}>
        <span className="inline-block rounded-full px-3 py-1 text-[11px] font-semibold tracking-widest uppercase" style={{ color: accent, background: `${accent}1a` }}>{tag}</span>
        <h3 className="mt-5 text-2xl font-bold text-white">{title}</h3>
        <p className="mt-3 leading-relaxed text-white/55">{desc}</p>
      </div>
    </motion.div>
  )
}
