import { useRef } from 'react'
import { motion, useScroll, useTransform, type MotionValue } from 'motion/react'
import Contours from './Contours'

// Words in *stars* get the gold serif style
const text =
  "We don't just sell *cars.* We hand you the keys to the *fastest machines* on earth, with an agent by your side from the first call to the *finish line.*"

const words = text.split(' ').map((raw) => ({ word: raw.replace(/\*/g, ''), accent: raw.startsWith('*') || raw.endsWith('*') }))

function Word({ word, accent, progress, index }: { word: string; accent: boolean; progress: MotionValue<number>; index: number }) {
  const start = index / words.length
  const opacity = useTransform(progress, [start, start + 1 / words.length], [0.15, 1])
  return (
    <motion.span className={accent ? 'statement-word serif' : 'statement-word'} style={{ opacity }}>
      {word}{' '}
    </motion.span>
  )
}

// Big statement where each word lights up as you scroll past it
export default function Statement() {
  const ref = useRef<HTMLParagraphElement>(null)
  const { scrollYProgress } = useScroll({ target: ref, offset: ['start 0.85', 'end 0.45'] })

  return (
    <section className="statement light">
      <Contours className="dark-lines" />
      <p className="eyebrow">Our promise</p>
      <p ref={ref} className="statement-text">
        {words.map((w, i) => (
          <Word key={i} index={i} word={w.word} accent={w.accent} progress={scrollYProgress} />
        ))}
      </p>
    </section>
  )
}
