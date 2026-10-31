import { useState } from 'react'
import { formatThousands } from '../math'

// The Financial Banker's math: price ÷ years = payment per year
export default function PaymentCalculator({ price }: { price: number }) {
  const [years, setYears] = useState(1.2)
  const perYear = years > 0 ? price / years : 0

  return (
    <div className="calculator">
      <h3>Payment calculator</h3>
      <label>
        Years to pay
        <input
          type="number"
          min="0.1"
          step="0.1"
          value={years}
          onChange={(e) => setYears(Number(e.target.value))}
        />
      </label>
      {years > 0 ? (
        <p>
          {price.toFixed(1)} ÷ {years} = <strong>{formatThousands(perYear)}</strong> per year
        </p>
      ) : (
        <p className="error">Enter a number bigger than 0.</p>
      )}
    </div>
  )
}
