import { Link } from 'react-router-dom'
import type { Car } from '../types'
import { formatThousands, milesPerGallon } from '../math'
import CarImage from './CarImage'

export default function CarCard({ car }: { car: Car }) {
  return (
    <article className="car-card">
      <CarImage src={car.images[0]} alt={car.name} />
      <div className="car-card-body">
        <p className="brand">{car.brand}</p>
        <h3>{car.name}</h3>
        <p className="muted">
          {formatThousands(car.price)} · {milesPerGallon(car.testMiles, car.testGallons)} mpg
        </p>
        <Link to={`/cars/${car.id}`} className="button">
          View details
        </Link>
      </div>
    </article>
  )
}
