// Topographic contour lines, drawn once from a few wobbly circles
function ring(cx: number, cy: number, r: number, seed: number): string {
  const steps = 64
  const points: [number, number][] = []
  for (let i = 0; i < steps; i++) {
    const a = (i / steps) * Math.PI * 2
    const wobble = 1 + 0.16 * Math.sin(3 * a + seed) + 0.09 * Math.sin(5 * a + seed * 1.7) + 0.05 * Math.sin(8 * a + seed * 2.3)
    points.push([cx + Math.cos(a) * r * wobble, cy + Math.sin(a) * r * wobble * 0.8])
  }
  // Smooth closed curve through the midpoints
  const mid = (p: [number, number], q: [number, number]) => [(p[0] + q[0]) / 2, (p[1] + q[1]) / 2]
  const start = mid(points[steps - 1], points[0])
  let d = `M${start[0].toFixed(1)},${start[1].toFixed(1)}`
  for (let i = 0; i < steps; i++) {
    const p = points[i]
    const m = mid(p, points[(i + 1) % steps])
    d += ` Q${p[0].toFixed(1)},${p[1].toFixed(1)} ${m[0].toFixed(1)},${m[1].toFixed(1)}`
  }
  return d + 'Z'
}

const centers = [
  { x: 180, y: 260, seed: 1, rings: 9 },
  { x: 980, y: 170, seed: 2.6, rings: 7 },
  { x: 700, y: 760, seed: 4.2, rings: 8 },
]

const paths = centers.flatMap(({ x, y, seed, rings }) =>
  Array.from({ length: rings }, (_, i) => ring(x, y, 50 + i * 46, seed + i * 0.35)),
)

export default function Contours({ className = '' }: { className?: string }) {
  return (
    <svg className={`contours ${className}`} viewBox="0 0 1200 900" preserveAspectRatio="xMidYMid slice" aria-hidden="true">
      {paths.map((d, i) => (
        <path key={i} d={d} />
      ))}
    </svg>
  )
}
