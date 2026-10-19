import { useEffect } from 'react'
import { motion, useMotionValue, useSpring } from 'framer-motion'

export default function Cursor() {
  const x = useMotionValue(-100)
  const y = useMotionValue(-100)
  const rx = useSpring(x, { stiffness: 350, damping: 30 })
  const ry = useSpring(y, { stiffness: 350, damping: 30 })

  useEffect(() => {
    const move = (e: MouseEvent) => { x.set(e.clientX); y.set(e.clientY) }
    window.addEventListener('mousemove', move)
    return () => window.removeEventListener('mousemove', move)
  }, [x, y])

  return (
    <div className="pointer-events-none fixed inset-0 z-[100] hidden md:block">
      <motion.div className="absolute h-2 w-2 -translate-x-1/2 -translate-y-1/2 rounded-full bg-white" style={{ left: x, top: y }} />
      <motion.div className="absolute h-10 w-10 -translate-x-1/2 -translate-y-1/2 rounded-full border border-white/40 mix-blend-difference" style={{ left: rx, top: ry }} />
    </div>
  )
}
