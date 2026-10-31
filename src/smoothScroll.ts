import Lenis from 'lenis'

let lenis: Lenis | null = null

// Smooth, weighted scrolling like the reference sites. Skipped for people who turn off motion.
export function startSmoothScroll(): () => void {
  if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return () => {}
  lenis = new Lenis({ autoRaf: true, lerp: 0.1 })
  return () => {
    lenis?.destroy()
    lenis = null
  }
}

export function scrollToTarget(target: HTMLElement | number, immediate = false) {
  if (lenis) {
    lenis.scrollTo(target, { immediate })
  } else if (typeof target === 'number') {
    window.scrollTo({ top: target, behavior: immediate ? 'instant' : 'smooth' })
  } else {
    target.scrollIntoView({ behavior: immediate ? 'instant' : 'smooth' })
  }
}

export function pauseScroll(paused: boolean) {
  if (paused) lenis?.stop()
  else lenis?.start()
}
