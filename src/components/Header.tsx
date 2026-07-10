import { Link, useLocation } from 'react-router-dom'
import './Header.css'

export default function Header() {
  const location = useLocation()

  return (
    <header className="header">
      <div className="header-inner">
        <Link to="/" className="header-logo">
          <span className="header-logo-dot" />
          <span className="header-logo-text">Bryan Nathaniel Chandra</span>
        </Link>
        <nav className="header-nav">
          <Link to="/" className={location.pathname === '/' ? 'nav-link active' : 'nav-link'}>
            Home
          </Link>
          <Link to="/problems" className={location.pathname.startsWith('/problems') ? 'nav-link active' : 'nav-link'}>
            Case Studies
          </Link>
        </nav>
      </div>
    </header>
  )
}
