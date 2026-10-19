import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

const TERMS = [
  ['Easing', 'The acceleration curve of a motion — cubic-bezier or spring. The single biggest lever on "feel".'],
  ['Stagger', 'Delaying sibling elements by a fixed interval so they enter as a wave, not a wall.'],
  ['Spring', 'Physics-based animation defined by stiffness, damping and mass — no duration, it settles naturally.'],
  ['FLIP', 'First-Last-Invert-Play: measure layout states, invert the delta, animate to zero. Powers layout animations.'],
  ['Compositor', 'The browser thread that can move transform/opacity without main-thread work — the 60fps fast lane.'],
  ['ScrollTrigger', 'GSAP plugin mapping animation progress to scroll position, with pinning and scrubbing.'],
  ['State Machine (Rive)', 'A graph of animation states + transitions driven by runtime inputs — logic inside the animation file.'],
  ['Instancing', 'Rendering thousands of meshes in one GPU draw call — the trick behind dense particle scenes.'],
]

export default function Glossary() {
  const [open, setOpen] = useState<number | null>(0)
  return (
    <div className="mx-auto max-w-3xl px-6">
      {TERMS.map(([t, d], i) => (
        <motion.div key={t} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.04 }} className="border-b border-white/10">
          <button onClick={() => setOpen(open === i ? null : i)} className="flex w-full items-center justify-between py-5 text-left">
            <span className="text-lg font-semibold text-white/85">{t}</span>
            <motion.span animate={{ rotate: open === i ? 45 : 0 }} className="text-xl text-violet-300">+</motion.span>
          </button>
          <AnimatePresence>
            {open === i && (
              <motion.p initial={{ height: 0, opacity: 0 }} animate={{ height: 'auto', opacity: 1 }} exit={{ height: 0, opacity: 0 }} className="overflow-hidden pb-5 pr-10 text-sm leading-relaxed text-white/50">{d}</motion.p>
            )}
          </AnimatePresence>
        </motion.div>
      ))}
    </div>
  )
}
