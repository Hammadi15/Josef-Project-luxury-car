import { useRef, useState } from 'react'
import { Link } from 'react-router-dom'
import { AnimatePresence, motion, useMotionValueEvent, useScroll } from 'motion/react'
import { ArrowRight, ChevronUp } from 'lucide-react'
import { featuredCars as cars } from '../data/cars'
import { formatPrice } from '../math'
import { scrollToTarget } from '../smoothScroll'

const ease = [0.22, 1, 0.36, 1] as const

// Full-screen showroom: the section is pinned while you scroll, and each screen of scrolling shows the next car
export default function Showroom() {
  const sectionRef = useRef<HTMLElement>(null)
  const [active, setActive] = useState(0)
  const [listOpen, setListOpen] = useState(false)
  const { scrollYProgress } = useScroll({ target: sectionRef, offset: ['start start', 'end end'] })

  useMotionValueEvent(scrollYProgress, 'change', (progress) => {
    setActive(Math.min(cars.length - 1, Math.floor(progress * cars.length)))
  })

  function goTo(index: number) {
    const section = sectionRef.current
    if (!section) return
    const top = section.getBoundingClientRect().top + window.scrollY
    scrollToTarget(top + index * window.innerHeight + window.innerHeight * 0.3)
    setListOpen(false)
  }

  const car = cars[active]

  return (
    <section id="showroom" ref={sectionRef} className="showroom" style={{ height: `${(cars.length + 1) * 100}vh` }}>
      <div className="showroom-sticky">
        <AnimatePresence>
          <motion.div
            key={car.id}
            className="showroom-bg"
            style={{ background: `radial-gradient(ellipse 80% 70% at 50% 45%, ${car.accent} 0%, #0b0b0c 75%)` }}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.9 }}
          />
        </AnimatePresence>

        <AnimatePresence mode="popLayout">
          <motion.p
            key={`word-${car.id}`}
            className="showroom-word"
            initial={{ opacity: 0, x: 120 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -120 }}
            transition={{ duration: 0.9, ease }}
            aria-hidden="true"
          >
            {car.brand}
          </motion.p>
        </AnimatePresence>

        <AnimatePresence mode="popLayout">
          <motion.div
            key={`car-${car.id}`}
            className="showroom-car"
            initial={{ opacity: 0, y: 60, scale: 0.92 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -40, scale: 1.04 }}
            transition={{ duration: 0.8, ease }}
          >
            <img src={`${import.meta.env.BASE_URL}${car.cutout}`} alt={`${car.brand} ${car.name}`} />
          </motion.div>
        </AnimatePresence>

        <AnimatePresence mode="wait">
          <motion.div
            key={`info-${car.id}`}
            className="showroom-info"
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -12, transition: { duration: 0.15 } }}
            transition={{ duration: 0.5, ease }}
          >
            <p className="eyebrow">
              {String(active + 1).padStart(2, '0')} / {String(cars.length).padStart(2, '0')} · {car.brand}
            </p>
            <h2>{car.name}</h2>
            <p className="showroom-tagline">{car.tagline}</p>
            <div className="showroom-meta">
              <span>{formatPrice(car.price)}</span>
              <span>{car.topSpeed} mph</span>
              <span>{car.horsepower.toLocaleString('en-US')} hp</span>
            </div>
            <Link to={`/cars/${car.id}`} className="text-link">
              Discover more <ArrowRight size={16} />
            </Link>
          </motion.div>
        </AnimatePresence>

        <div className="showroom-ticks" role="tablist" aria-label="Choose a car">
          {cars.map((c, i) => (
            <button
              key={c.id}
              role="tab"
              aria-selected={i === active}
              aria-label={`${c.brand} ${c.name}`}
              className={i === active ? 'tick active' : 'tick'}
              onClick={() => goTo(i)}
            />
          ))}
        </div>

        <div className={listOpen ? 'showroom-pill open' : 'showroom-pill'}>
          <AnimatePresence>
            {listOpen && (
              <motion.ul
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: 'auto' }}
                exit={{ opacity: 0, height: 0 }}
                transition={{ duration: 0.35 }}
              >
                {cars.map((c, i) => (
                  <li key={c.id}>
                    <button className={i === active ? 'active' : ''} onClick={() => goTo(i)}>
                      <img src={`${import.meta.env.BASE_URL}${c.cutout}`} alt="" />
                      <span>
                        {c.brand} {c.name}
                      </span>
                    </button>
                  </li>
                ))}
              </motion.ul>
            )}
          </AnimatePresence>
          <button className="pill-toggle" onClick={() => setListOpen(!listOpen)} aria-expanded={listOpen}>
            Showroom 2026
            <ChevronUp size={18} className="pill-chevron" />
          </button>
        </div>
      </div>
    </section>
  )
}
