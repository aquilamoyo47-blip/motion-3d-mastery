import { motion } from 'framer-motion'

const LEVELS = [
  { lv: 'L1', name: 'Foundation', cn: 'Core Principles', color: '#7c6cff', topics: ['The 12 principles of animation (Disney → UI)', 'Reading cubic-bezier easing curves', 'CSS transitions & keyframes', 'transform / opacity compositor performance'], goal: 'Ship 60fps micro-interactions in pure CSS' },
  { lv: 'L2', name: 'Choreography', cn: 'Timelines & Sequencing', color: '#2de2ff', topics: ['Advanced GSAP timelines', 'Stagger rhythm design', 'Framer Motion layout animations', 'Page transitions (View Transitions / FLIP)'], goal: 'Make elements enter like an orchestra' },
  { lv: 'L3', name: 'Physics & Interaction', cn: 'Springs & Gestures', color: '#ff7ad9', topics: ['Spring physics: stiffness / damping / mass', 'Inertia scrolling & dragging', 'Cursor-follow & magnetic buttons', 'Scroll-driven animation with ScrollTrigger'], goal: 'Interfaces that sense every user move' },
  { lv: 'L4', name: 'Real-Time Vectors', cn: 'Rive & Lottie', color: '#8fff6c', topics: ['Rive state-machine interactive animation', 'Lottie + code-driven control', 'SVG path morphing', 'Vector animation pipelines (AE → Web)'], goal: 'Characters that respond to input with zero lag' },
  { lv: 'L5', name: '3D & WebGL', cn: 'Scenes & Shaders', color: '#ffc24b', topics: ['Three.js scenes / cameras / lighting', 'Particle systems & instancing', 'GLSL shader fundamentals', 'Post-processing & performance budgets'], goal: 'Build award-worthy immersive 3D websites' },
]

export default function LearningPath() {
  return (
    <div className="mx-auto max-w-5xl px-6">
      {LEVELS.map((l, i) => (
        <motion.div key={l.lv}
          initial={{ opacity: 0, x: i % 2 ? 60 : -60 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: '-60px' }}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          className="relative mb-8 rounded-2xl border border-white/10 bg-white/[0.03] p-8"
        >
          <div className="absolute -left-px top-8 h-16 w-1 rounded-full" style={{ background: l.color }} />
          <div className="flex flex-wrap items-baseline gap-4">
            <span className="font-mono text-sm" style={{ color: l.color }}>{l.lv}</span>
            <h3 className="text-2xl font-bold">{l.name}</h3>
            <span className="text-white/40">{l.cn}</span>
          </div>
          <ul className="mt-5 grid gap-2 md:grid-cols-2">
            {l.topics.map((t) => (
              <li key={t} className="flex items-start gap-2 text-sm text-white/60">
                <span style={{ color: l.color }}>▸</span>{t}
              </li>
            ))}
          </ul>
          <p className="mt-5 text-sm">
            <span className="text-white/35">Level complete when: </span>
            <span style={{ color: l.color }}>{l.goal}</span>
          </p>
        </motion.div>
      ))}
    </div>
  )
}
