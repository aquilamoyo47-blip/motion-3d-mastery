import { motion } from 'framer-motion'

const TOOLS = [
  { name: 'CSS Keyframes', scope: 'Micro-interactions', best: 'Button hovers, loaders, simple loops', perf: '★★★★★', learn: '★☆☆☆☆', color: '#8f8fa3' },
  { name: 'Framer Motion', scope: 'React apps', best: 'Layout animations, page transitions, gestures', perf: '★★★★☆', learn: '★★☆☆☆', color: '#7c6cff' },
  { name: 'GSAP', scope: 'Complex choreography', best: 'Timeline sequences, ScrollTrigger narratives', perf: '★★★★★', learn: '★★★☆☆', color: '#8fff6c' },
  { name: 'Rive', scope: 'Real-time vectors', best: 'State-machine characters, input-reactive art', perf: '★★★★★', learn: '★★★☆☆', color: '#ff7ad9' },
  { name: 'Lottie', scope: 'Vector delivery', best: 'Cross-platform playback of AE exports', perf: '★★★★☆', learn: '★☆☆☆☆', color: '#2de2ff' },
  { name: 'Three.js', scope: '3D / WebGL', best: 'Particles, scenes, immersive 3D worlds', perf: '★★★☆☆', learn: '★★★★★', color: '#ffc24b' },
]

export default function Tooling() {
  return (
    <div className="mx-auto max-w-6xl overflow-x-auto px-6">
      <motion.table initial={{ opacity: 0, y: 40 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.7 }} className="w-full min-w-[720px] border-separate border-spacing-y-2 text-left">
        <thead>
          <tr className="text-xs uppercase tracking-widest text-white/35">
            <th className="px-4 py-2">Tool</th><th className="px-4 py-2">Domain</th><th className="px-4 py-2">Best for</th><th className="px-4 py-2">Perf</th><th className="px-4 py-2">Learning curve</th>
          </tr>
        </thead>
        <tbody>
          {TOOLS.map((t) => (
            <tr key={t.name} className="bg-white/[0.03] transition-colors hover:bg-white/[0.07]">
              <td className="rounded-l-xl px-4 py-4 font-bold" style={{ color: t.color }}>{t.name}</td>
              <td className="px-4 py-4 text-sm text-white/60">{t.scope}</td>
              <td className="px-4 py-4 text-sm text-white/60">{t.best}</td>
              <td className="px-4 py-4 text-xs tracking-wider text-amber-300/80">{t.perf}</td>
              <td className="rounded-r-xl px-4 py-4 text-xs tracking-wider text-white/40">{t.learn}</td>
            </tr>
          ))}
        </tbody>
      </motion.table>
    </div>
  )
}
