export interface Car {
  id: string
  name: string
  brand: string
  /** Price in millions of dollars, with a decimal ($1.6 million) */
  price: number
  topSpeed: number
  horsepower: number
  /** Miles driven and gallons used, so mpg is worked out with division */
  testMiles: number
  testGallons: number
  zeroToSixty: number
  color: string
  description: string
  /** Paths inside public/, for example "cars/my-car.jpg". Empty means a placeholder is shown. */
  images: string[]
}
