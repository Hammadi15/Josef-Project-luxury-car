import type { Car } from '../types'

interface CarStageProps {
  car: Car
  className?: string
}

// Shows the cut-out car on the same studio background for every car
export default function CarStage({ car, className = '' }: CarStageProps) {
  return (
    <div className={`stage ${className}`}>
      <div className="stage-car">
        <img src={`${import.meta.env.BASE_URL}${car.cutout}`} alt={`${car.brand} ${car.name}`} />
      </div>
    </div>
  )
}
