import { Link } from 'react-router-dom'
import logo from '../assets/logo.png'
import MayerTransWordmark from './MayerTransWordmark.jsx'
import './Footer.css'

function Footer() {
  const year = new Date().getFullYear()

  return (
    <footer className="site-footer">
      <div className="container site-footer__inner">
        <div className="site-footer__brand">
          <img src={logo} alt="" className="site-footer__logo" />
          <div>
            <MayerTransWordmark className="site-footer__wordmark" variant="white" />
            <p>Josef Mayer KG &middot; Transporte &middot; Erdarbeiten &middot; Straßenreinigung</p>
          </div>
        </div>

        <div className="site-footer__col">
          <h4>Kontakt</h4>
          <p>Schlossstraße 10<br />Limberg<br />3712 Maissau</p>
          <p>
            <a href="tel:+43295884160">Tel. 02958 / 84160</a>
            <br />
            <a href="tel:+432958841604">Fax 02958 / 84160-4</a>
          </p>
        </div>

        <div className="site-footer__col">
          <h4>Navigation</h4>
          <ul>
            <li><Link to="/#leistungen">Leistungen</Link></li>
            <li><Link to="/#fuhrpark">Fuhrpark</Link></li>
            <li><Link to="/#ueber-uns">Über uns</Link></li>
            <li><Link to="/#kontakt">Kontakt</Link></li>
          </ul>
        </div>

        <div className="site-footer__col">
          <h4>Rechtliches</h4>
          <ul>
            <li><Link to="/impressum">Impressum</Link></li>
            <li><Link to="/datenschutz">Datenschutz</Link></li>
          </ul>
        </div>
      </div>

      <div className="site-footer__bottom">
        <div className="container">
          &copy; {year} Josef Mayer KG &mdash; Alle Rechte vorbehalten.
        </div>
      </div>
    </footer>
  )
}

export default Footer
