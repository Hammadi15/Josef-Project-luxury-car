import { useState } from 'react'
import { Link } from 'react-router-dom'
import { ArrowRight, BadgeCheck, CreditCard, Search, Truck } from 'lucide-react'
import { cars, findCar } from '../data/cars'
import { agents } from '../data/agents'
import CarCard from '../components/CarCard'
import CarStage from '../components/CarStage'
import AgentCard from '../components/AgentCard'
import TeamSection from '../components/TeamSection'

type SortOrder = 'low' | 'high' | 'fast'

const heroCar = findCar('koenigsegg-agera')!

const features = [
  { icon: BadgeCheck, title: 'Checked by engineers', text: 'Every car gets a 150-point check before it is sold.' },
  { icon: CreditCard, title: 'Easy payments', text: 'Split the price over the years that fit you.' },
  { icon: Truck, title: 'Delivered worldwide', text: 'Covered transport to your door, in any country.' },
]

export default function Home() {
  const [search, setSearch] = useState('')
  const [sort, setSort] = useState<SortOrder>('low')

  const shownCars = cars
    .filter((car) => `${car.brand} ${car.name}`.toLowerCase().includes(search.toLowerCase()))
    .sort((a, b) => {
      if (sort === 'fast') return b.topSpeed - a.topSpeed
      return sort === 'low' ? a.price - b.price : b.price - a.price
    })

  const topSpeed = Math.max(...cars.map((car) => car.topSpeed))
  const topPower = Math.max(...cars.map((car) => car.horsepower))

  return (
    <main>
      <section className="hero">
        <div className="hero-inner">
          <div className="hero-text">
            <p className="eyebrow">Luxury hypercars</p>
            <h1>Find your dream supercar</h1>
            <p className="lead">
              Hand-picked hypercars from Koenigsegg, Pagani, Apollo, and Lamborghini. Easy payments and a personal agent
              for every car.
            </p>
            <div className="hero-actions">
              <Link to="/#cars" className="button">
                Browse cars <ArrowRight size={18} />
              </Link>
              <Link to="/#agents" className="button ghost">
                Talk to an agent
              </Link>
            </div>
            <dl className="stats">
              <div>
                <dt>Cars</dt>
                <dd>{cars.length}</dd>
              </div>
              <div>
                <dt>Top speed</dt>
                <dd>{topSpeed} mph</dd>
              </div>
              <div>
                <dt>Most power</dt>
                <dd>{topPower.toLocaleString('en-US')} hp</dd>
              </div>
            </dl>
          </div>
          <CarStage car={heroCar} className="hero-stage" />
        </div>
      </section>

      <section id="cars" className="section">
        <div className="section-head row">
          <div>
            <p className="eyebrow">Showroom</p>
            <h2>Our cars</h2>
          </div>
          <div className="toolbar">
            <label className="search">
              <Search size={16} />
              <input
                type="search"
                placeholder="Search cars"
                aria-label="Search cars"
                value={search}
                onChange={(e) => setSearch(e.target.value)}
              />
            </label>
            <select value={sort} onChange={(e) => setSort(e.target.value as SortOrder)} aria-label="Sort cars">
              <option value="low">Price: low to high</option>
              <option value="high">Price: high to low</option>
              <option value="fast">Fastest first</option>
            </select>
          </div>
        </div>
        {shownCars.length > 0 ? (
          <div className="car-grid">
            {shownCars.map((car) => (
              <CarCard key={car.id} car={car} />
            ))}
          </div>
        ) : (
          <p className="muted">No cars match "{search}".</p>
        )}
      </section>

      <section className="section features">
        {features.map(({ icon: Icon, title, text }) => (
          <div key={title} className="feature">
            <span className="feature-icon">
              <Icon size={22} />
            </span>
            <div>
              <h3>{title}</h3>
              <p className="muted small">{text}</p>
            </div>
          </div>
        ))}
      </section>

      <section id="agents" className="section">
        <div className="section-head">
          <p className="eyebrow">Personal service</p>
          <h2>Meet our agents</h2>
          <p className="muted">Every car comes with an agent who answers your questions and handles the deal.</p>
        </div>
        <div className="agent-grid">
          {agents.map((agent) => (
            <AgentCard key={agent.id} agent={agent} />
          ))}
        </div>
      </section>

      <TeamSection />
    </main>
  )
}
