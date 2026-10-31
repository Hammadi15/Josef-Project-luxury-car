import { useState } from 'react'
import { Link, useParams } from 'react-router-dom'
import { ArrowLeft, Fuel, Gauge, Palette, Timer, Zap } from 'lucide-react'
import { findCar } from '../data/cars'
import { findAgent } from '../data/agents'
import { formatMillions, milesPerGallon } from '../math'
import CarStage from '../components/CarStage'
import PaymentCalculator from '../components/PaymentCalculator'
import ContactForm from '../components/ContactForm'

type View = 'studio' | 'photo'

export default function CarDetails() {
  const { id = '' } = useParams()
  const car = findCar(id)
  const [view, setView] = useState<View>('studio')

  if (!car) {
    return (
      <main className="section">
        <h1>Car not found</h1>
        <Link to="/" className="button">
          Back to cars
        </Link>
      </main>
    )
  }

  const agent = findAgent(car.agentId)!
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
    <main className="section">
      <Link to="/#cars" className="back">
        <ArrowLeft size={16} /> Back to cars
      </Link>
      <div className="details">
        <div className="gallery">
          {view === 'studio' ? (
            <CarStage car={car} className="large" />
          ) : (
            <img
              className="photo large"
              src={`${import.meta.env.BASE_URL}${car.photo}`}
              alt={`${car.brand} ${car.name}`}
            />
          )}
          <div className="view-toggle">
            <button className={view === 'studio' ? 'chip active' : 'chip'} onClick={() => setView('studio')}>
              Studio
            </button>
            <button className={view === 'photo' ? 'chip active' : 'chip'} onClick={() => setView('photo')}>
              Real photo
            </button>
          </div>
        </div>

        <div className="details-info">
          <p className="eyebrow">{car.brand}</p>
          <h1>{car.name}</h1>
          <p className="price">{formatMillions(car.price)}</p>
          <p className="muted">{car.description}</p>

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

          <PaymentCalculator price={car.price} />
          <ContactForm agent={agent} car={car} />
        </div>
      </div>
    </main>
  )
}
