import { Link } from 'react-router-dom'
import { ArrowUpRight } from 'lucide-react'
import type { Car } from '../types'
import { formatPrice } from '../math'
import CarStage from './CarStage'

// A tile in the collection grid: the car on the studio background, name and year underneath
export default function CarCard({ car }: { car: Car }) {
  return (
    <Link to={`/cars/${car.id}`} className="car-card">
      <CarStage car={car} />
      <div className="car-card-body">
        <div>
          <p className="car-card-name">
            {car.brand} <span className="serif">{car.name}</span>
          </p>
          <p className="car-card-meta">
            {formatPrice(car.price)} · {car.topSpeed} mph · {car.zeroToSixty} s
          </p>
        </div>
        <span className="car-card-year">{car.year}</span>
      </div>
      <span className="car-card-arrow" aria-hidden="true">
        <ArrowUpRight size={18} />
      </span>
    </Link>
  )
}
