import { Link } from 'react-router-dom'
import { Gauge } from 'lucide-react'

export default function Navbar() {
  return (
    <header className="navbar">
      <div className="navbar-inner">
        <Link to="/" className="logo">
          <span className="logo-mark">
            <Gauge size={18} />
          </span>
          Supercar Company
        </Link>
        <nav>
          <Link to="/#cars">Cars</Link>
          <Link to="/#agents" className="hide-mobile">
            Agents
          </Link>
          <Link to="/#team" className="hide-mobile">
            Our math
          </Link>
          <Link to="/#agents" className="nav-cta">
            Contact
          </Link>
        </nav>
      </div>
    </header>
  )
}
