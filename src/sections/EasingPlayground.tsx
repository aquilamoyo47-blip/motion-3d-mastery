import { useEffect, useRef, useState } from 'react'
import { motion } from 'framer-motion'

const EASES: { name: string; bezier: number[]; note: string }[] = [
  { name: 'linear', bezier: [0.25, 0.1, 0.25, 1], note: 'Mechanical, lifeless — only for looping backgrounds' },
  { name: 'easeOut', bezier: [0.22, 1, 0.36, 1], note: 'The UI gold standard: fast response + soft landing' },
  { name: 'easeInOut', bezier: [0.65, 0, 0.35, 1], note: 'Symmetric acceleration — loops and state toggles' },
  { name: 'anticipate', bezier: [0.36, 0, 0.66, -0.56], note: 'Wind up backwards, then launch — dramatic reveals' },
  { name: 'bounce', bezier: [0.34, 1.56, 0.64, 1], note: 'Overshoot and settle — the signature of micro-interactions' },
]

function drawCurve(ctx: CanvasRenderingContext2D, b: number[], w: number, h: number, color: string) {
  ctx.clearRect(0, 0, w, h)
  ctx.strokeStyle = 'rgba(255,255,255,0.08)'
  ctx.lineWidth = 1
  ctx.strokeRect(20, 10, w - 40, h - 20)
  ctx.beginPath()
  ctx.moveTo(20, h - 10)
  ctx.bezierCurveTo(20 + b[0] * (w - 40), h - 10 - b[1] * (h - 20), 20 + b[2] * (w - 40), h - 10 - b[3] * (h - 20), w - 20, 10)
  ctx.strokeStyle = color
  ctx.lineWidth = 2.5
  ctx.stroke()
}

function Dot({ bezier, color }: { bezier: number[]; color: string }) {
  return (
    <motion.div
      key={bezier.join(',')}
      className="absolute bottom-0 left-0 h-4 w-4 rounded-full"
      style={{ background: color, boxShadow: `0 0 16px ${color}` }}
      animate={{ x: [0, 220], y: [0, 0] }}
      transition={{ duration: 1.4, repeat: Infinity, repeatType: 'mirror', ease: bezier as any, repeatDelay: 0.4 }}
    />
  )
}

export default function EasingPlayground() {
  const [active, setActive] = useState(1)
  const canvasRef = useRef<HTMLCanvasElement>(null)
  const colors = ['#8f8fa3', '#7c6cff', '#2de2ff', '#ff7ad9', '#8fff6c']

  useEffect(() => {
    const cv = canvasRef.current!
    const ctx = cv.getContext('2d')!
    drawCurve(ctx, EASES[active].bezier, cv.width, cv.height, colors[active])
  }, [active])

  return (
    <div className="rounded-2xl border border-white/10 bg-white/[0.03] p-8">
      <div className="flex flex-wrap gap-2">
        {EASES.map((e, i) => (
          <button key={e.name} onClick={() => setActive(i)}
            className={`rounded-full px-4 py-1.5 text-sm font-medium transition-all ${active === i ? 'bg-violet-500 text-white' : 'bg-white/5 text-white/50 hover:bg-white/10'}`}
          >{e.name}</button>
        ))}
      </div>
      <div className="mt-6 grid items-center gap-8 md:grid-cols-2">
        <canvas ref={canvasRef} width={360} height={220} className="w-full rounded-xl bg-black/30" />
        <div>
          <div className="relative h-6 w-[236px]"><Dot bezier={EASES[active].bezier} color={colors[active]} /></div>
          <p className="mt-4 text-white/60">{EASES[active].note}</p>
          <code className="mt-3 block rounded-lg bg-black/40 px-4 py-2 text-xs text-cyan-300/80">cubic-bezier({EASES[active].bezier.join(', ')})</code>
        </div>
      </div>
    </div>
  )
}
