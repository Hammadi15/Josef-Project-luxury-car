// Rounds to 1 decimal place so answers look like the project guide (40.5, 31.4, 113.0)
export function round1(value: number): number {
  return Math.round(value * 10) / 10
}

export function formatThousands(value: number): string {
  return `$${round1(value).toFixed(1)} thousand`
}

export function milesPerGallon(miles: number, gallons: number): number {
  return round1(miles / gallons)
}
