import { Link } from 'react-router-dom'
import { ArrowRight, Gauge, Timer, Zap } from 'lucide-react'
import type { Car } from '../types'
import { formatMillions } from '../math'
import CarStage from './CarStage'

export default function CarCard({ car }: { car: Car }) {
  return (
    <Link to={`/cars/${car.id}`} className="car-card">
      <CarStage car={car} />
      <div className="car-card-body">
        <p className="eyebrow">{car.brand}</p>
        <h3>{car.name}</h3>
        <p className="car-card-price">{formatMillions(car.price)}</p>
        <ul className="quick-specs">
          <li>
            <Zap size={15} /> {car.horsepower.toLocaleString('en-US')} hp
          </li>
          <li>
            <Gauge size={15} /> {car.topSpeed} mph
          </li>
          <li>
            <Timer size={15} /> {car.zeroToSixty} s
          </li>
        </ul>
        <span className="card-link">
          View details <ArrowRight size={16} />
        </span>
      </div>
    </Link>
  )
}
