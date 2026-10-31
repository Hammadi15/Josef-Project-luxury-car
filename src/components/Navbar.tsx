import { useEffect, useState } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { AnimatePresence, motion } from 'motion/react'
import { Menu, X } from 'lucide-react'
import { pauseScroll } from '../smoothScroll'

const menuLinks = [
  { to: '/', label: 'Home', note: 'Start' },
  { to: '/#showroom', label: 'Showroom', note: '4 cars' },
  { to: '/#collection', label: 'Collection', note: 'All cars' },
  { to: '/#agents', label: 'Agents', note: 'Talk to us' },
  { to: '/#team', label: 'Our math', note: 'Decimals' },
]

export default function Navbar() {
  const [open, setOpen] = useState(false)
  const { pathname, hash } = useLocation()

  // Close the menu after a link takes us somewhere
  useEffect(() => setOpen(false), [pathname, hash])
  useEffect(() => pauseScroll(open), [open])

  return (
    <>
      <header className="navbar">
        <Link to="/" className="logo" aria-label="Supercar Company home">
          <span className="logo-top">Supercar</span>
          <span className="logo-bottom">Company</span>
        </Link>
        <div className="navbar-actions">
          <Link to="/#agents" className="pill-button">
            Contact
          </Link>
          <button className="icon-button" onClick={() => setOpen(!open)} aria-label={open ? 'Close menu' : 'Open menu'}>
            {open ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </header>

      <AnimatePresence>
        {open && (
          <motion.nav
            className="menu-overlay"
            initial={{ clipPath: 'inset(0 0 100% 0)' }}
            animate={{ clipPath: 'inset(0 0 0% 0)' }}
            exit={{ clipPath: 'inset(0 0 100% 0)' }}
            transition={{ duration: 0.6, ease: [0.76, 0, 0.24, 1] }}
          >
            <ul>
              {menuLinks.map((link, i) => (
                <motion.li
                  key={link.label}
                  initial={{ opacity: 0, y: 40 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.25 + i * 0.06, duration: 0.5 }}
                >
                  <Link to={link.to} onClick={() => setOpen(false)}>
                    <span className="menu-number">0{i + 1}</span>
                    <span className="menu-label">{link.label}</span>
                    <span className="menu-note">{link.note}</span>
                  </Link>
                </motion.li>
              ))}
            </ul>
            <p className="menu-footer">Hypercars · Easy payments · Personal agents</p>
          </motion.nav>
        )}
      </AnimatePresence>
    </>
  )
}
