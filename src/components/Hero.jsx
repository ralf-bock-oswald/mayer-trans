import { Link } from 'react-router-dom'
import heroImg from '../assets/LKW0.jpg'
import CountUp from './CountUp.jsx'
import './Hero.css'

const GRUENDUNGSJAHR = 1967

function Hero() {
  const jahre = new Date().getFullYear() - GRUENDUNGSJAHR

  return (
    <section className="hero">
      <div className="hero__bg" style={{ backgroundImage: `url(${heroImg})` }} />
      <div className="hero__overlay" />

      <div className="container hero__content">
        <span className="eyebrow eyebrow--light hero__fade" style={{ '--d': '0.15s' }}>
          Familienunternehmen seit 1967
        </span>

        <h1>
          <span className="hero__line" style={{ '--d': '0.3s' }}>
            <span>Transporte, Erdarbeiten &amp;</span>
          </span>
          <span className="hero__line" style={{ '--d': '0.45s' }}>
            <span>
              Straßenreinigung <em>aus Limberg</em>
            </span>
          </span>
        </h1>

        <p className="hero__fade" style={{ '--d': '0.65s' }}>
          Die Josef Mayer KG ist verlässlicher Partner für Gemeinden, Bauunternehmen
          und Private – im gesamten nördlichen Niederösterreich und in Wien.
        </p>

        <div className="hero__actions hero__fade" style={{ '--d': '0.8s' }}>
          <Link to="/#leistungen" className="btn btn-primary">Unsere Leistungen</Link>
          <Link to="/#kontakt" className="btn btn-outline">Kontakt aufnehmen</Link>
        </div>

        <dl className="hero__stats hero__fade" style={{ '--d': '0.95s' }}>
          <div>
            <dt><CountUp end={jahre} /></dt>
            <dd>Jahre Erfahrung</dd>
          </div>
          <div>
            <dt>3</dt>
            <dd>Generationen</dd>
          </div>
          <div>
            <dt><CountUp end={19} suffix="+" /></dt>
            <dd>Fahrzeuge im Einsatz</dd>
          </div>
        </dl>
      </div>

      <Link
        to="/#leistungen"
        className="hero__scroll hero__fade"
        style={{ '--d': '1.3s' }}
        aria-label="Zu den Leistungen scrollen"
      >
        <span />
      </Link>
    </section>
  )
}

export default Hero
