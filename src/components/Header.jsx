import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import logo from '../assets/logo.png'
import MayerTransWordmark from './MayerTransWordmark.jsx'
import './Header.css'

const NAV_LINKS = [
  { label: 'Leistungen', hash: '#leistungen' },
  { label: 'Fuhrpark', hash: '#fuhrpark' },
  { label: 'Über uns', hash: '#ueber-uns' },
  { label: 'Kontakt', hash: '#kontakt' },
]

function Header() {
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <header className={`site-header ${scrolled ? 'scrolled' : ''}`}>
      <div className="container site-header__inner">
        <Link to="/" className="brand" onClick={() => setOpen(false)}>
          <img src={logo} alt="" className="brand__logo" />
          <MayerTransWordmark className="brand__wordmark" variant="white" />
        </Link>

        <nav className={`nav ${open ? 'nav--open' : ''}`}>
          {NAV_LINKS.map((link) => (
            <Link key={link.hash} to={`/${link.hash}`} onClick={() => setOpen(false)}>
              {link.label}
            </Link>
          ))}
          <a href="tel:+43295884160" className="btn btn-primary nav__cta">
            02958 / 84160
          </a>
        </nav>

        <button
          type="button"
          className={`burger ${open ? 'burger--open' : ''}`}
          aria-label="Menü öffnen"
          onClick={() => setOpen((v) => !v)}
        >
          <span />
          <span />
          <span />
        </button>
      </div>
    </header>
  )
}

export default Header
