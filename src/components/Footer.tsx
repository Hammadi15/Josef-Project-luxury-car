import { Link } from 'react-router-dom'

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer-inner">
        <div>
          <p className="logo">Supercar Company</p>
          <p className="muted small">Hypercars, easy payments, and agents who know every detail.</p>
        </div>
        <nav>
          <Link to="/#cars">Cars</Link>
          <Link to="/#agents">Agents</Link>
          <Link to="/#team">Our math</Link>
        </nav>
      </div>
      <p className="footer-note">Grade 6 ESL Math Project · Luxury Car Sales · Specs are approximate</p>
    </footer>
  )
}
