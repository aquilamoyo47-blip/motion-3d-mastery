import { useState } from 'react'
import { motion } from 'framer-motion'

export default function SpringPlayground() {
  const [stiffness, setStiffness] = useState(200)
  const [damping, setDamping] = useState(20)
  const [key, setKey] = useState(0)

  return (
    <div className="rounded-2xl border border-white/10 bg-white/[0.03] p-8">
      <p className="text-sm text-white/50">
        Spring physics is the heart of "alive" motion — drag the sliders and feel how stiffness and damping shape personality.
      </p>
      <div className="mt-8 flex h-28 items-center overflow-hidden rounded-xl bg-black/30 px-6">
        <motion.div
          key={key}
          className="h-12 w-12 rounded-2xl bg-gradient-to-br from-violet-400 to-cyan-300"
          style={{ boxShadow: '0 0 30px rgba(124,108,255,0.5)' }}
          initial={{ x: 0 }}
          animate={{ x: 240 }}
          transition={{ type: 'spring', stiffness, damping }}
        />
      </div>
      <div className="mt-6 grid gap-6 md:grid-cols-2">
        <label className="block">
          <span className="mb-2 flex justify-between text-sm text-white/60">Stiffness <span className="font-mono text-violet-300">{stiffness}</span></span>
          <input type="range" min={40} max={600} value={stiffness} onChange={(e) => { setStiffness(+e.target.value); setKey(k => k + 1) }} className="w-full accent-violet-500" />
        </label>
        <label className="block">
          <span className="mb-2 flex justify-between text-sm text-white/60">Damping <span className="font-mono text-cyan-300">{damping}</span></span>
          <input type="range" min={2} max={60} value={damping} onChange={(e) => { setDamping(+e.target.value); setKey(k => k + 1) }} className="w-full accent-cyan-400" />
        </label>
      </div>
      <code className="mt-5 block rounded-lg bg-black/40 px-4 py-2 text-xs text-white/50">
        {'<motion.div animate={{ x: 240 }} transition={{ type: "spring", stiffness: ' + stiffness + ', damping: ' + damping + ' }} />'}
      </code>
    </div>
  )
}
