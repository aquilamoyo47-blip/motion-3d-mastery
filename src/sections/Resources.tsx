import { motion } from 'framer-motion'
import Magnetic from './Magnetic'

const LINKS = [
  { name: 'Awwwards — Animation', url: 'https://www.awwwards.com/websites/animation/', note: 'Daily SOTD winners, filtered by animation craft' },
  { name: 'Webby Winners — Motion', url: 'https://winners.webbyawards.com/', note: 'Best Use of Animation or Motion Graphics archive' },
  { name: 'Motion Design Awards', url: 'https://www.motiondesignawards.com/', note: 'Dedicated motion-only award showcase' },
  { name: 'Refs.Gallery — Motion', url: 'https://refs.gallery/category/motion', note: 'Curated reference gallery for motion interfaces' },
  { name: 'Muzli — Motion Design', url: 'https://muz.li/inspiration/motion-design/', note: 'UI/UX animation clips, updated constantly' },
  { name: 'School of Motion', url: 'https://www.schoolofmotion.com/blog', note: 'Deep tutorials on principles and execution' },
]

export default function Resources() {
  return (
    <div className="mx-auto grid max-w-6xl gap-4 px-6 md:grid-cols-2 lg:grid-cols-3">
      {LINKS.map((l, i) => (
        <Magnetic key={l.name} strength={0.15}>
          <motion.a href={l.url} target="_blank" rel="noreferrer"
            initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.06 }}
            whileHover={{ borderColor: 'rgba(124,108,255,0.6)' }}
            className="group block w-full rounded-2xl border border-white/10 bg-white/[0.03] p-6"
          >
            <div className="flex items-start justify-between">
              <h4 className="font-bold text-white/90 group-hover:text-violet-300">{l.name}</h4>
              <span className="text-white/30 transition-transform group-hover:translate-x-1 group-hover:-translate-y-1">↗</span>
            </div>
            <p className="mt-2 text-sm text-white/45">{l.note}</p>
          </motion.a>
        </Magnetic>
      ))}
    </div>
  )
}
