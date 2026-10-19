import { motion } from 'framer-motion'

export default function TextReveal({ text, className = '' }: { text: string; className?: string }) {
  const letters = text.split('')
  return (
    <span className={`inline-block ${className}`} aria-label={text}>
      {letters.map((ch, i) => (
        <motion.span
          key={i}
          className="inline-block will-change-transform"
          initial={{ opacity: 0, y: 50, rotateX: -90, filter: 'blur(6px)' }}
          whileInView={{ opacity: 1, y: 0, rotateX: 0, filter: 'blur(0px)' }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: i * 0.035, ease: [0.22, 1, 0.36, 1] }}
        >
          {ch === ' ' ? '\u00a0' : ch}
        </motion.span>
      ))}
    </span>
  )
}
