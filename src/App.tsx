import { useEffect } from 'react'
import { Route, Routes, useLocation } from 'react-router-dom'
import { AnimatePresence, motion } from 'motion/react'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import Home from './pages/Home'
import CarDetails from './pages/CarDetails'
import { scrollToTarget, startSmoothScroll } from './smoothScroll'

// Scrolls to #showroom / #agents / #team when a link points there, or to the top on a new page
function ScrollToHash() {
  const { pathname, hash } = useLocation()
  useEffect(() => {
    // The new page fades in after the old one fades out, so keep looking for the target for a moment
    let tries = 0
    let timer = 0
    const tick = () => {
      const target = hash ? document.getElementById(hash.slice(1)) : null
      if (target) return scrollToTarget(target)
      if (hash && tries++ < 30) {
        timer = window.setTimeout(tick, 50)
        return
      }
      scrollToTarget(0, true)
    }
    timer = window.setTimeout(tick, 60)
    return () => clearTimeout(timer)
  }, [pathname, hash])
  return null
}

export default function App() {
  const location = useLocation()
  useEffect(() => startSmoothScroll(), [])

  return (
    <>
      <ScrollToHash />
      <Navbar />
      <AnimatePresence mode="wait">
        <motion.div
          key={location.pathname}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.35 }}
        >
          <Routes location={location}>
            <Route path="/" element={<Home />} />
            <Route path="/cars/:id" element={<CarDetails />} />
          </Routes>
          <Footer />
        </motion.div>
      </AnimatePresence>
    </>
  )
}
