import { useState } from 'react'
import { BadgeCheck, CreditCard, Search, Truck } from 'lucide-react'
import { brands, cars, featuredCars } from '../data/cars'
import { agents } from '../data/agents'
import Hero from '../components/Hero'
import Marquee from '../components/Marquee'
import Showroom from '../components/Showroom'
import Statement from '../components/Statement'
import CarCard from '../components/CarCard'
import AgentCard from '../components/AgentCard'
import TeamSection from '../components/TeamSection'
import Reveal from '../components/Reveal'

type SortOrder = 'low' | 'high' | 'fast'

const features = [
  { icon: BadgeCheck, title: 'Checked by engineers', text: 'Every car gets a 150-point check before it is sold.' },
  { icon: CreditCard, title: 'Easy payments', text: 'Split the price over the years that fit you.' },
  { icon: Truck, title: 'Delivered worldwide', text: 'Covered transport to your door, in any country.' },
]

export default function Home() {
  const [search, setSearch] = useState('')
  const [sort, setSort] = useState<SortOrder>('low')
  const [brand, setBrand] = useState('All')

  const shownCars = cars
    .filter((car) => brand === 'All' || car.brand === brand)
    .filter((car) => `${car.brand} ${car.name}`.toLowerCase().includes(search.toLowerCase()))
    .sort((a, b) => {
      if (sort === 'fast') return b.topSpeed - a.topSpeed
      return sort === 'low' ? a.price - b.price : b.price - a.price
    })

  return (
    <main>
      <Hero />
      <Marquee items={[...brands, 'Hypercars 2026']} />

      <section className="intro">
        <Reveal>
          <p className="eyebrow">Showroom 2026</p>
          <h2 className="intro-title">
            A new era of <span className="serif">speed</span>
          </h2>
          <p className="intro-text">
            {cars.length} machines from {brands.length} legendary brands. Carbon fiber, V12 and W16 engines, and top speeds
            past 270 mph. Scroll through our top {featuredCars.length} in the showroom, then explore the full collection.
          </p>
        </Reveal>
      </section>

      <Showroom />
      <Statement />

      <section id="collection" className="section">
        <div className="section-head row">
          <Reveal>
            <h2 className="big-heading">
              The <span className="serif">collection</span>
            </h2>
          </Reveal>
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
        <div className="brand-chips" role="group" aria-label="Filter by brand">
          {['All', ...brands].map((b) => (
            <button key={b} className={b === brand ? 'chip active' : 'chip'} onClick={() => setBrand(b)}>
              {b}
              <span className="chip-count">{b === 'All' ? cars.length : cars.filter((car) => car.brand === b).length}</span>
            </button>
          ))}
        </div>
        {shownCars.length > 0 ? (
          <div className="car-grid">
            {shownCars.map((car, i) => (
              <Reveal key={car.id} delay={(i % 3) * 0.08}>
                <CarCard car={car} />
              </Reveal>
            ))}
          </div>
        ) : (
          <p className="muted">No cars match your search.</p>
        )}

        <div className="features">
          {features.map(({ icon: Icon, title, text }, i) => (
            <Reveal key={title} delay={i * 0.08} className="feature">
              <Icon size={22} />
              <h3>{title}</h3>
              <p className="muted small">{text}</p>
            </Reveal>
          ))}
        </div>
      </section>

      <Marquee items={['Talk to an agent', 'Easy payments', 'Delivered worldwide', 'Always faster']} reverse />

      <section id="agents" className="section">
        <div className="section-head">
          <Reveal>
            <h2 className="big-heading">
              Meet our <span className="serif">agents</span>
            </h2>
            <p className="muted">Every car comes with an agent who answers your questions and handles the deal.</p>
          </Reveal>
        </div>
        <div className="agent-grid">
          {agents.map((agent, i) => (
            <Reveal key={agent.id} delay={i * 0.08}>
              <AgentCard agent={agent} />
            </Reveal>
          ))}
        </div>
      </section>

      <TeamSection />
    </main>
  )
}
