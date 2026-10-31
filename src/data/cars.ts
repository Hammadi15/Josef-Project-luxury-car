import type { Car } from '../types'

// Specs are approximate. Pictures live in public/cars/.
export const cars: Car[] = [
  {
    id: 'koenigsegg-agera',
    name: 'Agera',
    brand: 'Koenigsegg',
    price: 1.6,
    topSpeed: 273,
    horsepower: 1140,
    testMiles: 31.5,
    testGallons: 2.5,
    zeroToSixty: 2.8,
    color: 'White and black',
    description: 'A Swedish hypercar with a twin-turbo V8. One of the fastest cars in the world.',
    images: ['cars/koenigsegg-agera.webp'],
  },
  {
    id: 'apollo-ie',
    name: 'Intensa Emozione (IE)',
    brand: 'Apollo',
    price: 2.7,
    topSpeed: 208,
    horsepower: 780,
    testMiles: 28.8,
    testGallons: 2.4,
    zeroToSixty: 2.7,
    color: 'Purple',
    description: 'A wild V12 hypercar from Germany. Only 10 were ever made.',
    images: ['cars/apollo-ie.webp'],
  },
  {
    id: 'pagani-zonda-r',
    name: 'Zonda R',
    brand: 'Pagani',
    price: 1.9,
    topSpeed: 217,
    horsepower: 750,
    testMiles: 22.5,
    testGallons: 2.5,
    zeroToSixty: 2.7,
    color: 'Carbon black',
    description: 'An Italian track car made of carbon fiber, with a loud Mercedes-AMG V12.',
    images: ['cars/pagani-zonda-r.webp'],
  },
  {
    id: 'lamborghini-urus-mansory',
    name: 'Urus Mansory',
    brand: 'Lamborghini',
    price: 0.6,
    topSpeed: 190,
    horsepower: 810,
    testMiles: 42.3,
    testGallons: 3,
    zeroToSixty: 3.3,
    color: 'Forged carbon and turquoise',
    description: 'A super SUV with a Mansory body kit. Room for 5 people and supercar speed.',
    images: ['cars/lamborghini-urus-mansory.webp'],
  },
]

export function findCar(id: string): Car | undefined {
  return cars.find((car) => car.id === id)
}
