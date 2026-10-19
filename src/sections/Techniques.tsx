import { useEffect, useRef } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

const ITEMS = [
  { n: '01', title: 'Immersive Storytelling', body: 'Cinematic pacing meets interactive web — fluid transitions, spatial motion, and scroll-responsive narrative animation that turns browsing into a film.', gradient: 'from-violet-500/20 to-transparent' },
  { n: '02', title: 'Real-Time Interactive Vectors', body: 'Lightweight state-machine driven vectors (Rive, Lottie) that track cursors and inputs with zero lag — crisp at any resolution, alive at every pixel.', gradient: 'from-cyan-400/20 to-transparent' },
  { n: '03', title: 'Abstract 3D Environments', body: 'Full-screen WebGL particle simulations and organic morphing worlds built with Three.js — physics-based scenes that react to your every move.', gradient: 'from-fuchsia-500/20 to-transparent' },
  { n: '04', title: 'Typography-Driven Motion', body: 'Letters that warp, stretch and drift into place. Layout grids and text columns animated with the same care as 3D graphics — nothing ever static.', gradient: 'from-amber-400/20 to-transparent' },
]

export default function Techniques() {
  const wrap = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.utils.toArray<HTMLElement>('.tech-panel').forEach((panel) => {
        gsap.fromTo(panel.querySelector('.tech-inner'), { opacity: 0, x: -80 }, {
          opacity: 1, x: 0, duration: 0.9, ease: 'power3.out',
          scrollTrigger: { trigger: panel, start: 'top 75%' },
        })
        gsap.fromTo(panel.querySelector('.tech-num'), { scale: 0.6, opacity: 0 }, {
          scale: 1, opacity: 0.14, duration: 1, ease: 'power2.out',
          scrollTrigger: { trigger: panel, start: 'top 75%' },
        })
      })
    }, wrap)
    return () => ctx.revert()
  }, [])

  return (
    <div ref={wrap}>
      {ITEMS.map((it) => (
        <section key={it.n} className={`tech-panel relative overflow-hidden border-t border-white/5 bg-gradient-to-r ${it.gradient} py-28 px-6 md:px-16`}>
          <span className="tech-num pointer-events-none absolute right-6 top-1/2 -translate-y-1/2 select-none text-[16rem] font-black leading-none text-white md:text-[22rem]">{it.n}</span>
          <div className="tech-inner relative max-w-2xl">
            <span className="text-sm font-semibold tracking-[0.3em] text-white/40">TECHNIQUE {it.n}</span>
            <h3 className="mt-4 text-4xl font-bold text-white md:text-5xl">{it.title}</h3>
            <p className="mt-6 text-lg leading-relaxed text-white/60">{it.body}</p>
          </div>
        </section>
      ))}
    </div>
  )
}
