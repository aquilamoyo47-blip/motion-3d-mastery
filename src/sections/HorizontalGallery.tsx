import { useEffect, useRef } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

const CARDS = [
  { t: 'Scroll-Jacking is Dead', d: '2026 is about scroll-*driven*, not scroll-*hijacked*. Lenis + ScrollTrigger keep native feel with buttery physics.', c: '#7c6cff' },
  { t: 'Performance Budget', d: 'Animate only transform & opacity. One full-screen WebGL context max. 60fps on a mid-range phone or it doesn\u2019t ship.', c: '#2de2ff' },
  { t: 'Reduced Motion', d: 'prefers-reduced-motion is non-negotiable. Great motion designers design the static fallback first.', c: '#ff7ad9' },
  { t: 'The 200–500ms Rule', d: 'UI feedback: 200ms. Scene transitions: 400–500ms. Anything longer must earn its duration with narrative.', c: '#8fff6c' },
  { t: 'Exit Before Enter', d: 'The old state must leave before the new arrives. Overlapping transitions are the #1 amateur tell.', c: '#ffc24b' },
]

export default function HorizontalGallery() {
  const wrap = useRef<HTMLDivElement>(null)
  const track = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const ctx = gsap.context(() => {
      const total = track.current!.scrollWidth - window.innerWidth
      gsap.to(track.current, {
        x: -total,
        ease: 'none',
        scrollTrigger: {
          trigger: wrap.current,
          start: 'top top',
          end: () => `+=${total}`,
          scrub: 1,
          pin: true,
          invalidateOnRefresh: true,
        },
      })
    }, wrap)
    return () => ctx.revert()
  }, [])

  return (
    <div ref={wrap} className="relative overflow-hidden">
      <div ref={track} className="flex h-screen w-max items-center gap-8 px-[8vw]">
        <div className="w-[38vw] shrink-0">
          <span className="text-sm font-semibold tracking-[0.3em] text-rose-300/70">FIELD NOTES</span>
          <h3 className="mt-4 text-4xl font-black leading-tight md:text-6xl">Rules the pros<br />never break<span className="text-violet-400">.</span></h3>
          <p className="mt-6 text-white/45">Keep scrolling — the room moves sideways.</p>
        </div>
        {CARDS.map((c, i) => (
          <div key={c.t} className="w-[70vw] shrink-0 rounded-3xl border border-white/10 bg-white/[0.03] p-10 md:w-[34vw]">
            <span className="font-mono text-sm" style={{ color: c.c }}>{String(i + 1).padStart(2, '0')}</span>
            <h4 className="mt-4 text-3xl font-bold">{c.t}</h4>
            <p className="mt-4 leading-relaxed text-white/55">{c.d}</p>
            <div className="mt-8 h-1 w-16 rounded-full" style={{ background: c.c }} />
          </div>
        ))}
      </div>
    </div>
  )
}
