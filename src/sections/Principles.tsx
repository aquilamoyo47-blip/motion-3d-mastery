import { motion } from 'framer-motion'

const PRINCIPLES = [
  ['Squash & Stretch', 'Gives mass and elasticity to objects in motion'],
  ['Anticipation', 'A wind-up before the action — prepares the eye'],
  ['Staging', 'Direct attention: one idea on screen at a time'],
  ['Straight Ahead vs Pose-to-Pose', 'Procedural vs keyframed — pick per context'],
  ['Follow-Through', 'Appendages keep moving after the body stops'],
  ['Slow In & Slow Out', 'Easing — nothing in nature moves linearly'],
  ['Arc', 'Natural motion follows curved paths, never straight'],
  ['Secondary Action', 'Small supporting motions add richness'],
  ['Timing', 'Frame counts = weight, mood, and meaning'],
  ['Exaggeration', 'Push past realism to make it readable'],
  ['Solid Drawing', 'Volume & weight — in UI: depth, shadow, Z-axis'],
  ['Appeal', 'Charisma — design people want to touch'],
]

export default function Principles() {
  return (
    <div className="mx-auto grid max-w-7xl gap-4 px-6 sm:grid-cols-2 lg:grid-cols-4">
      {PRINCIPLES.map(([t, d], i) => (
        <motion.div key={t}
          initial={{ opacity: 0, y: 40, scale: 0.95 }}
          whileInView={{ opacity: 1, y: 0, scale: 1 }}
          viewport={{ once: true, margin: '-40px' }}
          transition={{ duration: 0.5, delay: (i % 4) * 0.08 }}
          whileHover={{ y: -6, borderColor: 'rgba(255,255,255,0.3)' }}
          className="rounded-2xl border border-white/10 bg-white/[0.03] p-6"
        >
          <span className="font-mono text-xs text-violet-300/70">{String(i + 1).padStart(2, '0')}</span>
          <h4 className="mt-2 font-bold leading-snug">{t}</h4>
          <p className="mt-2 text-xs leading-relaxed text-white/45">{d}</p>
        </motion.div>
      ))}
    </div>
  )
}
