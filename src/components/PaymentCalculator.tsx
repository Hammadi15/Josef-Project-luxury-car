import { useState } from 'react'
import { Calculator } from 'lucide-react'
import { priceParts } from '../math'

const quickYears = [1.2, 2.5, 5]

// The Financial Banker's math: price ÷ years = payment per year
export default function PaymentCalculator({ price }: { price: number }) {
  const [years, setYears] = useState(1.2)
  const { amount, unit } = priceParts(price)
  const perYear = years > 0 ? amount / years : 0

  return (
    <div className="panel">
      <h3 className="panel-title">
        <Calculator size={18} /> Payment calculator
      </h3>
      <div className="calc-row">
        <label htmlFor="years">Years to pay</label>
        <input
          id="years"
          type="number"
          min="0.1"
          step="0.1"
          value={years}
          onChange={(e) => setYears(Number(e.target.value))}
        />
      </div>
      <div className="chips">
        {quickYears.map((y) => (
          <button key={y} className={y === years ? 'chip active' : 'chip'} onClick={() => setYears(y)}>
            {y} years
          </button>
        ))}
      </div>
      {years > 0 ? (
        <div className="calc-result">
          <span className="muted">
            {amount.toFixed(1)} ÷ {years} =
          </span>
          <strong>
            ${perYear.toFixed(2)} {unit}
          </strong>
          <span className="muted">per year</span>
        </div>
      ) : (
        <p className="error">Enter a number bigger than 0.</p>
      )}
    </div>
  )
}
