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
  year: number
  /** Short line under the name in the showroom */
  tagline: string
  /** Background tint for this car in the showroom */
  accent: string
  description: string
  /** Car cut out of its photo, shown on the studio background. Path inside public/. */
  cutout: string
  /** The original photo. Path inside public/. */
  photo: string
  /** The sales agent who handles this car */
  agentId: string
}

export interface Agent {
  id: string
  name: string
  title: string
  phone: string
  email: string
  /** The math this person does in the project */
  task: string
  bio: string
  /** The team leader gets a highlighted card */
  lead?: boolean
}

export interface Photo {
  /** Path inside public/ */
  src: string
  caption: string
  author: string
  license: string
  /** Page on Wikimedia Commons where the photo comes from */
  source: string
}
