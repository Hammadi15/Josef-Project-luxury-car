import { Fragment } from 'react'

interface MarqueeProps {
  items: string[]
  reverse?: boolean
}

// Endless band of big text. The list is drawn twice so the loop has no gap.
export default function Marquee({ items, reverse = false }: MarqueeProps) {
  const row = items.map((item, i) => (
    <Fragment key={i}>
      <span className={i % 2 ? 'marquee-item serif' : 'marquee-item'}>{item}</span>
      <span className="marquee-dot" aria-hidden="true">
        ✦
      </span>
    </Fragment>
  ))
  return (
    <div className={reverse ? 'marquee reverse' : 'marquee'} aria-hidden="true">
      <div className="marquee-track">
        {row}
        {row}
      </div>
    </div>
  )
}
