import { Link } from 'react-router-dom'
import { motion, useScroll, useTransform } from 'motion/react'
import { ArrowDown, ArrowRight } from 'lucide-react'
import { cars, findCar } from '../data/cars'
import Contours from './Contours'

const heroCar = findCar('koenigsegg-agera')!
const ease = [0.22, 1, 0.36, 1] as const

export default function Hero() {
  const { scrollY } = useScroll()
  const carY = useTransform(scrollY, [0, 900], [0, 160])
  const carScale = useTransform(scrollY, [0, 900], [1, 1.12])
  const titleY = useTransform(scrollY, [0, 900], [0, -120])
  const topSpeed = Math.max(...cars.map((car) => car.topSpeed))

  return (
    <section className="hero">
      <Contours />
      <p className="hero-corner left">Est. 2026 — Hypercar dealer</p>
      <p className="hero-corner right">{cars.length} cars in the showroom</p>

      <motion.h1 className="hero-title" style={{ y: titleY }}>
        <span className="mask">
          <motion.span className="hero-line sans" initial={{ y: '110%' }} animate={{ y: 0 }} transition={{ duration: 1, ease }}>
            Find your
          </motion.span>
        </span>
        <span className="mask">
          <motion.span
            className="hero-line serif"
            initial={{ y: '110%' }}
            animate={{ y: 0 }}
            transition={{ duration: 1, delay: 0.12, ease }}
          >
            dream supercar
          </motion.span>
        </span>
      </motion.h1>

      <motion.div
        className="hero-car"
        style={{ y: carY, scale: carScale }}
        initial={{ opacity: 0, filter: 'blur(12px)' }}
        animate={{ opacity: 1, filter: 'blur(0px)' }}
        transition={{ duration: 1.4, delay: 0.35, ease }}
      >
        <img src={`${import.meta.env.BASE_URL}${heroCar.cutout}`} alt={`${heroCar.brand} ${heroCar.name}`} />
      </motion.div>

      <motion.div
        className="hero-bottom"
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.9, delay: 0.8, ease }}
      >
        <p className="hero-lead">
          Hand-picked hypercars up to {topSpeed} mph. Easy payments and a personal agent for every car.
        </p>
        <div className="hero-actions">
          <Link to="/#showroom" className="button">
            Enter the showroom <ArrowRight size={18} />
          </Link>
          <Link to="/#agents" className="button ghost">
            Talk to an agent
          </Link>
        </div>
        <span className="scroll-hint">
          <ArrowDown size={16} /> Scroll
        </span>
      </motion.div>
    </section>
  )
}
