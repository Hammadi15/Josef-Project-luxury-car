import { useState } from 'react'
import { Link, useParams } from 'react-router-dom'
import { AnimatePresence, motion } from 'motion/react'
import { ArrowLeft, Fuel, Gauge, Palette, Timer, Zap } from 'lucide-react'
import { findCar } from '../data/cars'
import { findAgent } from '../data/agents'
import { gallery } from '../data/gallery'
import { formatPrice, milesPerGallon } from '../math'
import PaymentCalculator from '../components/PaymentCalculator'
import ContactForm from '../components/ContactForm'
import Reveal from '../components/Reveal'
import Gallery from '../components/Gallery'

type View = 'studio' | 'photo'
const ease = [0.22, 1, 0.36, 1] as const

export default function CarDetails() {
  const { id = '' } = useParams()
  const car = findCar(id)
  const [view, setView] = useState<View>('studio')

  if (!car) {
    return (
      <main className="section not-found">
        <h1>Car not found</h1>
        <Link to="/" className="button">
          Back to cars
        </Link>
      </main>
    )
  }

  const agent = findAgent(car.agentId)!
  const base = import.meta.env.BASE_URL
  const specs = [
    { icon: Gauge, label: 'Top speed', value: `${car.topSpeed} mph` },
    { icon: Zap, label: 'Horsepower', value: `${car.horsepower.toLocaleString('en-US')} hp` },
    { icon: Timer, label: '0–60 mph', value: `${car.zeroToSixty} s` },
    {
      icon: Fuel,
      label: 'Miles per gallon',
      value: milesPerGallon(car.testMiles, car.testGallons),
      note: `${car.testMiles} ÷ ${car.testGallons}`,
    },
    { icon: Palette, label: 'Color', value: car.color },
  ]

  return (
    <main>
      <section
        className="car-hero"
        style={{ background: `radial-gradient(ellipse 80% 70% at 50% 45%, ${car.accent} 0%, #0b0b0c 75%)` }}
      >
        <Link to="/#collection" className="back">
          <ArrowLeft size={16} /> All cars
        </Link>
        <motion.p
          className="showroom-word"
          initial={{ opacity: 0, x: 120 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1, ease }}
          aria-hidden="true"
        >
          {car.brand}
        </motion.p>

        <AnimatePresence mode="wait">
          {view === 'studio' ? (
            <motion.div
              key="studio"
              className="showroom-car"
              initial={{ opacity: 0, y: 50, scale: 0.94 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.8, ease }}
            >
              <img src={`${base}${car.cutout}`} alt={`${car.brand} ${car.name}`} />
            </motion.div>
          ) : (
            <motion.img
              key="photo"
              className="car-hero-photo"
              src={`${base}${car.photo}`}
              alt={`${car.brand} ${car.name} photo`}
              initial={{ opacity: 0, scale: 0.96 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.6, ease }}
            />
          )}
        </AnimatePresence>

        <motion.div
          className="showroom-info"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3, ease }}
        >
          <p className="eyebrow">
            {car.brand} · {car.year}
          </p>
          <h1>{car.name}</h1>
          <p className="showroom-tagline">{car.tagline}</p>
          <p className="car-hero-price">{formatPrice(car.price)}</p>
        </motion.div>

        <div className="view-toggle">
          <button className={view === 'studio' ? 'chip active' : 'chip'} onClick={() => setView('studio')}>
            Studio
          </button>
          <button className={view === 'photo' ? 'chip active' : 'chip'} onClick={() => setView('photo')}>
            Real photo
          </button>
        </div>
      </section>

      <section className="section details">
        <Reveal className="details-about">
          <h2 className="big-heading">
            About the <span className="serif">{car.name}</span>
          </h2>
          <p className="intro-text left">{car.description}</p>
          <div className="spec-grid">
            {specs.map(({ icon: Icon, label, value, note }) => (
              <div key={label} className="spec">
                <Icon size={18} />
                <span className="spec-label">{label}</span>
                <span className="spec-value">
                  {value}
                  {note && <span className="muted small"> ({note})</span>}
                </span>
              </div>
            ))}
          </div>
        </Reveal>
        <Reveal delay={0.1} className="details-side">
          <PaymentCalculator price={car.price} />
          <ContactForm agent={agent} car={car} />
        </Reveal>
      </section>

      <Gallery photos={gallery[car.id] ?? []} carName={`${car.brand} ${car.name}`} />
    </main>
  )
}
