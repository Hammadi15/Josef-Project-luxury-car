import { Link } from 'react-router-dom'
import Contours from './Contours'

export default function Footer() {
  return (
    <footer className="footer">
      <Contours />
      <p className="footer-big">
        Always <span className="serif">faster.</span>
      </p>
      <div className="footer-inner">
        <div>
          <p className="footer-label">Pages</p>
          <nav>
            <Link to="/">Home</Link>
            <Link to="/#showroom">Showroom</Link>
            <Link to="/#collection">Collection</Link>
            <Link to="/#agents">Agents</Link>
            <Link to="/#team">Our math</Link>
          </nav>
        </div>
        <div>
          <p className="footer-label">Visit</p>
          <p className="muted">Supercar Company showroom, open every day 10–18</p>
        </div>
        <div>
          <p className="footer-label">Project</p>
          <p className="muted">Grade 6 ESL Math · Luxury Car Sales. Specs are approximate. Gallery photos from Wikimedia Commons (resized), credited under each photo.</p>
        </div>
      </div>
      <p className="footer-note">© 2026 Supercar Company. A school project.</p>
    </footer>
  )
}
