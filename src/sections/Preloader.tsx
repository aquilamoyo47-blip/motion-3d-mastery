import { useEffect, useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

export default function Preloader() {
  const [count, setCount] = useState(0)
  const [done, setDone] = useState(false)

  useEffect(() => {
    let v = 0
    const t = setInterval(() => {
      v += Math.floor(Math.random() * 12) + 4
      if (v >= 100) { v = 100; clearInterval(t); setTimeout(() => setDone(true), 350) }
      setCount(v)
    }, 90)
    return () => clearInterval(t)
  }, [])

  return (
    <AnimatePresence>
      {!done && (
        <motion.div
          className="fixed inset-0 z-[200] flex items-center justify-center bg-[#07070d]"
          exit={{ y: '-100%', transition: { duration: 0.8, ease: [0.76, 0, 0.24, 1] } }}
        >
          <div className="text-center">
            <motion.div animate={{ rotate: 360 }} transition={{ repeat: Infinity, duration: 2, ease: 'linear' }} className="mx-auto mb-8 h-14 w-14 rounded-full border-2 border-white/10 border-t-violet-400" />
            <div className="font-mono text-6xl font-black tracking-tight text-white">{count}<span className="text-violet-400">%</span></div>
            <p className="mt-3 text-xs tracking-[0.4em] text-white/35">LOADING MOTION</p>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}
