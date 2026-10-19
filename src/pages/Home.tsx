import { motion } from 'framer-motion'
import HeroWebGL from '@/sections/HeroWebGL'
import TextReveal from '@/sections/TextReveal'
import TiltCard from '@/sections/TiltCard'
import Techniques from '@/sections/Techniques'
import LearningPath from '@/sections/LearningPath'
import EasingPlayground from '@/sections/EasingPlayground'
import SpringPlayground from '@/sections/SpringPlayground'
import Tooling from '@/sections/Tooling'
import Cursor from '@/sections/Cursor'
import Preloader from '@/sections/Preloader'
import Magnetic from '@/sections/Magnetic'
import Principles from '@/sections/Principles'
import CodeLibrary from '@/sections/CodeLibrary'
import HorizontalGallery from '@/sections/HorizontalGallery'
import Glossary from '@/sections/Glossary'
import Resources from '@/sections/Resources'
import Model3DShowcase from '@/sections/Model3DShowcase'
import useLenis from '@/hooks/useLenis'

const SITES = [
  { title: 'Aether 1', tag: 'Webby 2026 Winner', accent: '#7c6cff', desc: 'OFF+BRAND\u2019s futuristic interface — fluid transitions and spatial motion, winner of Best Use of Animation or Motion Graphics.' },
  { title: 'The Spark', tag: 'People\u2019s Voice', accent: '#ff7ad9', desc: 'The Digital Panda\u2019s narrative-driven animations that respond dynamically to every scroll gesture.' },
  { title: 'Active Theory', tag: 'WebGL Powerhouse', accent: '#2de2ff', desc: 'Full-screen WebGL and immersive 3D particle simulations — browsing that feels like a high-end video game.' },
  { title: 'Lusion', tag: 'Three.js Frontier', accent: '#8fff6c', desc: 'Organic, abstract 3D environments that morph and shift seamlessly based on physics and user interaction.' },
  { title: 'Obys Agency', tag: 'Type Motion', accent: '#ffc24b', desc: 'Typography-driven motion — animated text columns and layout grids as impactful as 3D graphics.' },
  { title: 'Epic', tag: 'Theatrical Transitions', accent: '#ff5c5c', desc: 'Dynamic typography layouts that warp, stretch and animate beautifully between page loads.' },
]

const STACK = ['GSAP', 'Three.js / WebGL', 'Framer Motion', 'Rive', 'Lottie', 'CSS Keyframes']

function SectionHead({ kicker, title, accent = 'text-violet-300/70' }: { kicker: string; title: string; accent?: string }) {
  return (
    <div className="mb-14 text-center">
      <span className={`text-sm font-semibold tracking-[0.3em] ${accent}`}>{kicker}</span>
      <h2 className="mt-3 text-4xl font-bold md:text-5xl">
        <TextReveal text={title} />
      </h2>
    </div>
  )
}

export default function Home() {
  useLenis()

  return (
    <div className="min-h-screen bg-[#07070d] text-white antialiased selection:bg-violet-500/40">
      <Preloader />
      <Cursor />

      {/* HERO */}
      <header className="relative flex h-screen flex-col items-center justify-center overflow-hidden px-6 text-center">
        <HeroWebGL />
        <motion.span initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.3, duration: 0.8 }} className="mb-6 rounded-full border border-white/15 px-4 py-1.5 text-xs font-medium tracking-[0.35em] text-white/60">
          WEB MOTION DESIGN MASTERY — 2026
        </motion.span>
        <h1 className="max-w-5xl text-5xl font-black leading-[1.05] tracking-tight md:text-8xl">
          <TextReveal text="Become a" />
          <br />
          <span className="bg-gradient-to-r from-violet-400 via-fuchsia-400 to-cyan-300 bg-clip-text text-transparent">
            <TextReveal text="Motion Expert" />
          </span>
        </h1>
        <motion.p initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 1.2, duration: 0.8 }} className="mt-8 max-w-xl text-lg text-white/50">
          From easing curves to GLSL shaders — a complete path to award-level web
          motion design. This page itself is your first lesson.
        </motion.p>
        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 1.8 }} className="absolute bottom-10 flex flex-col items-center gap-2 text-white/40">
          <span className="text-[10px] tracking-[0.4em]">SCROLL</span>
          <motion.span animate={{ y: [0, 8, 0] }} transition={{ repeat: Infinity, duration: 1.6, ease: 'easeInOut' }} className="block h-8 w-px bg-gradient-to-b from-white/60 to-transparent" />
        </motion.div>
      </header>

      {/* LEARNING PATH */}
      <section className="py-28">
        <SectionHead kicker="ROADMAP" title="The 5-Level Path" />
        <LearningPath />
      </section>

      {/* 12 PRINCIPLES */}
      <section className="border-t border-white/5 py-28">
        <SectionHead kicker="CANON" title="The 12 Principles" accent="text-rose-300/70" />
        <Principles />
      </section>

      {/* EASING LAB */}
      <section className="border-t border-white/5 py-28">
        <SectionHead kicker="LAB 01" title="Easing Curve Lab" accent="text-cyan-300/70" />
        <div className="mx-auto max-w-4xl px-6"><EasingPlayground /></div>
      </section>

      {/* SPRING LAB */}
      <section className="border-t border-white/5 py-28">
        <SectionHead kicker="LAB 02" title="Spring Physics Lab" accent="text-fuchsia-300/70" />
        <div className="mx-auto max-w-4xl px-6"><SpringPlayground /></div>
      </section>

      {/* HORIZONTAL FIELD NOTES */}
      <HorizontalGallery />

      {/* CODE LIBRARY */}
      <section className="border-t border-white/5 py-28">
        <SectionHead kicker="SNIPPETS" title="Copy-Paste Motion Code" accent="text-emerald-300/70" />
        <CodeLibrary />
      </section>

      {/* 3D ASSET */}
      <section className="border-t border-white/5 py-28">
        <SectionHead kicker="AI-GENERATED ASSET" title="Meet the Mascot" accent="text-sky-300/70" />
        <p className="mx-auto mb-8 max-w-lg text-center text-white/45">
          A chrome Y2K toy sculpture, generated with AI and rendered live in Three.js —
          proof that 3D assets can ship straight into the interface.
        </p>
        <Model3DShowcase />
      </section>

      {/* TECHNIQUES */}
      <div className="pt-28 text-center">
        <SectionHead kicker="THE CRAFT" title="Four Core Techniques" accent="text-amber-300/70" />
      </div>
      <Techniques />

      {/* TOOLING */}
      <section className="py-28">
        <SectionHead kicker="TOOLING" title="Choosing Your Stack" accent="text-emerald-300/70" />
        <Tooling />
      </section>

      {/* GLOSSARY */}
      <section className="border-t border-white/5 py-28">
        <SectionHead kicker="VOCAB" title="Speak Like a Pro" accent="text-indigo-300/70" />
        <Glossary />
      </section>

      {/* SHOWCASE */}
      <section className="mx-auto max-w-7xl px-6 py-28 md:px-12" style={{ perspective: 1200 }}>
        <SectionHead kicker="SHOWCASE" title="Learn from the Winners" />
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {SITES.map((s, i) => <TiltCard key={s.title} {...s} index={i} />)}
        </div>
      </section>

      {/* RESOURCES */}
      <section className="border-t border-white/5 py-28">
        <SectionHead kicker="DAILY FUEL" title="Where the Pros Look" accent="text-pink-300/70" />
        <Resources />
      </section>

      {/* MARQUEE */}
      <section className="overflow-hidden border-y border-white/10 py-10">
        <motion.div animate={{ x: ['0%', '-50%'] }} transition={{ repeat: Infinity, duration: 18, ease: 'linear' }} className="flex w-max gap-16 whitespace-nowrap px-8">
          {[...STACK, ...STACK].map((t, i) => (
            <span key={i} className="text-3xl font-black tracking-tight text-white/20 md:text-5xl">
              {t} <span className="text-violet-400/40">✦</span>
            </span>
          ))}
        </motion.div>
      </section>

      {/* FOOTER */}
      <footer className="px-6 py-24 text-center">
        <h2 className="text-4xl font-black md:text-6xl">
          <TextReveal text="Motion is a language." />
        </h2>
        <p className="mx-auto mt-6 max-w-md text-white/45">
          Every frame you just scrolled through is a lesson on the L1–L5 path:
          the particle field (L5), scroll narrative (L3), text reveals (L2), tilt cards (L3), the page itself (L1).
        </p>
        <Magnetic>
          <motion.div whileHover={{ scale: 1.06 }} whileTap={{ scale: 0.96 }} className="mx-auto mt-10 w-max cursor-pointer rounded-full bg-gradient-to-r from-violet-500 to-cyan-400 px-8 py-3 font-semibold text-black">
            Start at L1 →
          </motion.div>
        </Magnetic>
        <p className="mt-16 text-xs tracking-[0.3em] text-white/25">MOTION/3D — BUILT WITH THREE.JS · GSAP · FRAMER MOTION · LENIS</p>
      </footer>
    </div>
  )
}
