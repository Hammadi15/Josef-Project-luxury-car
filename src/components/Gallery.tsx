import { useEffect, useState } from 'react'
import { AnimatePresence, motion } from 'motion/react'
import { ChevronLeft, ChevronRight, X } from 'lucide-react'
import type { Photo } from '../types'
import { pauseScroll } from '../smoothScroll'
import Reveal from './Reveal'

function Credit({ photo }: { photo: Photo }) {
  return (
    <a className="photo-credit" href={photo.source} target="_blank" rel="noreferrer">
      Photo: {photo.author} · {photo.license}
    </a>
  )
}

// Grid of real-world photos. Click one to see it big; arrow keys move between photos.
export default function Gallery({ photos, carName }: { photos: Photo[]; carName: string }) {
  const [open, setOpen] = useState<number | null>(null)

  useEffect(() => {
    pauseScroll(open !== null)
    if (open === null) return
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setOpen(null)
      if (e.key === 'ArrowRight') setOpen((i) => (i === null ? i : (i + 1) % photos.length))
      if (e.key === 'ArrowLeft') setOpen((i) => (i === null ? i : (i - 1 + photos.length) % photos.length))
    }
    window.addEventListener('keydown', onKey)
    return () => window.removeEventListener('keydown', onKey)
  }, [open, photos.length])

  if (photos.length === 0) return null
  const base = import.meta.env.BASE_URL
  const current = open === null ? null : photos[open]

  return (
    <section className="section gallery-section">
      <Reveal>
        <h2 className="big-heading">
          In the <span className="serif">wild</span>
        </h2>
        <p className="muted">Real photos of the {carName} from car shows and race tracks.</p>
      </Reveal>

      <div className="photo-grid">
        {photos.map((photo, i) => (
          <Reveal key={photo.src} delay={i * 0.06} className={i === 0 ? 'photo-tile wide' : 'photo-tile'}>
            <button className="photo-button" onClick={() => setOpen(i)} aria-label={`Open photo: ${photo.caption}`}>
              <img src={`${base}${photo.src}`} alt={photo.caption} loading="lazy" />
              <span className="photo-caption">
                <span className="photo-number">{String(i + 1).padStart(2, '0')}</span>
                {photo.caption}
              </span>
            </button>
            <Credit photo={photo} />
          </Reveal>
        ))}
      </div>

      <AnimatePresence>
        {current && open !== null && (
          <motion.div
            className="lightbox"
            role="dialog"
            aria-label={current.caption}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setOpen(null)}
          >
            <button className="icon-button lightbox-close" onClick={() => setOpen(null)} aria-label="Close photo">
              <X size={20} />
            </button>
            <button
              className="icon-button lightbox-prev"
              onClick={(e) => {
                e.stopPropagation()
                setOpen((open - 1 + photos.length) % photos.length)
              }}
              aria-label="Previous photo"
            >
              <ChevronLeft size={22} />
            </button>
            <motion.figure
              key={current.src}
              initial={{ opacity: 0, scale: 0.96 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.35 }}
              onClick={(e) => e.stopPropagation()}
            >
              <img src={`${base}${current.src}`} alt={current.caption} />
              <figcaption>
                <span>
                  {String(open + 1).padStart(2, '0')} / {String(photos.length).padStart(2, '0')} · {current.caption}
                </span>
                <Credit photo={current} />
              </figcaption>
            </motion.figure>
            <button
              className="icon-button lightbox-next"
              onClick={(e) => {
                e.stopPropagation()
                setOpen((open + 1) % photos.length)
              }}
              aria-label="Next photo"
            >
              <ChevronRight size={22} />
            </button>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  )
}
