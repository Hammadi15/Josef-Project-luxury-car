import { useState } from 'react'
import { cars } from '../data/cars'
import CarCard from '../components/CarCard'
import TeamSection from '../components/TeamSection'

type SortOrder = 'low' | 'high'

export default function Home() {
  const [search, setSearch] = useState('')
  const [sort, setSort] = useState<SortOrder>('low')

  const shownCars = cars
    .filter((car) => `${car.brand} ${car.name}`.toLowerCase().includes(search.toLowerCase()))
    .sort((a, b) => (sort === 'low' ? a.price - b.price : b.price - a.price))

  return (
    <main>
      <section className="hero">
        <h1>Find your dream supercar</h1>
        <p>Luxury cars, fast deals, and easy payments.</p>
      </section>

      <section id="cars" className="section">
        <h2>Our cars</h2>
        <div className="toolbar">
          <input
            type="search"
            placeholder="Search cars"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />
          <select value={sort} onChange={(e) => setSort(e.target.value as SortOrder)}>
            <option value="low">Price: low to high</option>
            <option value="high">Price: high to low</option>
          </select>
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

      <TeamSection />

      <footer id="contact" className="footer">
        <p>Supercar Company · Grade 6 Math Project</p>
      </footer>
    </main>
  )
}
