// Rounds to 1 decimal place so answers look like the project guide (40.5, 31.4, 113.0)
export function round1(value: number): number {
  return Math.round(value * 10) / 10
}

// Prices are stored in millions. Under 1 million we show thousands instead, like the guide ($45.2 thousand).
export function priceParts(millions: number): { amount: number; unit: 'million' | 'thousand' } {
  return millions >= 1 ? { amount: millions, unit: 'million' } : { amount: millions * 1000, unit: 'thousand' }
}

export function formatPrice(millions: number, decimals = 1): string {
  const { amount, unit } = priceParts(millions)
  return `$${amount.toFixed(decimals)} ${unit}`
}

export function milesPerGallon(miles: number, gallons: number): string {
  return round1(miles / gallons).toFixed(1)
}
