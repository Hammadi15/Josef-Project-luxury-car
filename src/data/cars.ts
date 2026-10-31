import type { Car } from '../types'

// Placeholder cars. Swap in the real cars and put their pictures in public/cars/.
export const cars: Car[] = [
  {
    id: 'car-1',
    name: 'Supercar One',
    brand: 'Brand',
    price: 45.2,
    topSpeed: 205,
    horsepower: 710,
    testMiles: 78.5,
    testGallons: 2.5,
    zeroToSixty: 2.9,
    color: 'Red',
    description: 'A fast and light supercar built for the track and the city.',
    images: [],
  },
  {
    id: 'car-2',
    name: 'Supercar Two',
    brand: 'Brand',
    price: 48.6,
    topSpeed: 211,
    horsepower: 760,
    testMiles: 84,
    testGallons: 3,
    zeroToSixty: 2.8,
    color: 'Black',
    description: 'Big power, a smooth ride, and a luxury cabin.',
    images: [],
  },
  {
    id: 'car-3',
    name: 'Supercar Three',
    brand: 'Brand',
    price: 52.5,
    topSpeed: 217,
    horsepower: 800,
    testMiles: 60.5,
    testGallons: 2.2,
    zeroToSixty: 2.6,
    color: 'Blue',
    description: 'Our fastest car, with a top speed over 215 mph.',
    images: [],
  },
]

export function findCar(id: string): Car | undefined {
  return cars.find((car) => car.id === id)
}
