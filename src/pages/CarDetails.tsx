import { useState } from 'react'
import { Link, useParams } from 'react-router-dom'
import { findCar } from '../data/cars'
import { formatMillions, milesPerGallon } from '../math'
import CarImage from '../components/CarImage'
import PaymentCalculator from '../components/PaymentCalculator'

export default function CarDetails() {
  const { id = '' } = useParams()
  const car = findCar(id)
  const [selected, setSelected] = useState(0)

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

  return (
    <main className="section">
      <Link to="/" className="back">
        ← Back to cars
      </Link>
      <div className="details">
        <div>
          <CarImage src={car.images[selected]} alt={car.name} className="large" />
          {car.images.length > 1 && (
            <div className="thumbnails">
              {car.images.map((src, index) => (
                <button
                  key={src}
                  className={index === selected ? 'thumb active' : 'thumb'}
                  onClick={() => setSelected(index)}
                  aria-label={`Show picture ${index + 1}`}
                >
                  <CarImage src={src} alt={`${car.name} picture ${index + 1}`} />
                </button>
              ))}
            </div>
          )}
        </div>

        <div>
          <p className="brand">{car.brand}</p>
          <h1>{car.name}</h1>
          <p className="price">{formatMillions(car.price)}</p>
          <p className="muted">{car.description}</p>

          <table className="specs">
            <tbody>
              <tr>
                <td>Top speed</td>
                <td>{car.topSpeed} mph</td>
              </tr>
              <tr>
                <td>Horsepower</td>
                <td>{car.horsepower} hp</td>
              </tr>
              <tr>
                <td>Miles per gallon</td>
                <td>
                  {milesPerGallon(car.testMiles, car.testGallons)}
                  <span className="muted small">
                    {' '}
                    ({car.testMiles} ÷ {car.testGallons})
                  </span>
                </td>
              </tr>
              <tr>
                <td>0–60 mph</td>
                <td>{car.zeroToSixty} s</td>
              </tr>
              <tr>
                <td>Color</td>
                <td>{car.color}</td>
              </tr>
            </tbody>
          </table>

          <PaymentCalculator price={car.price} />
        </div>
      </div>
    </main>
  )
}
