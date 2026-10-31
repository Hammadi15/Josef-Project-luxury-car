import { Link } from 'react-router-dom'

export default function Navbar() {
  return (
    <header className="navbar">
      <Link to="/" className="logo">
        Supercar Company
      </Link>
      <nav>
        <Link to="/#cars">Cars</Link>
        <Link to="/#team">Our team</Link>
        <Link to="/#contact">Contact</Link>
      </nav>
    </header>
  )
}
