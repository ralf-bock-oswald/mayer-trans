import { Link } from 'react-router-dom'
import heroImg from '../assets/LKW0.jpg'
import './Hero.css'

function Hero() {
  return (
    <section className="hero" style={{ backgroundImage: `url(${heroImg})` }}>
      <div className="hero__overlay" />
      <div className="container hero__content">
        <span className="eyebrow eyebrow--light">Seit 1967 &middot; Familienunternehmen</span>
        <h1>
          Transporte, Erdarbeiten &amp;<br />
          Straßenreinigung aus Maissau
        </h1>
        <p>
          Die Josef Mayer KG ist seit über 55 Jahren verlässlicher Partner für Gemeinden,
          Bauunternehmen und Private in ganz Niederösterreich und Wien.
        </p>
        <div className="hero__actions">
          <Link to="/#leistungen" className="btn btn-primary">Unsere Leistungen</Link>
          <Link to="/#kontakt" className="btn btn-outline">Kontakt aufnehmen</Link>
        </div>
      </div>
    </section>
  )
}

export default Hero
