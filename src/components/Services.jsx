import transportImg from '../assets/LKW1.jpg'
import erdarbeitenImg from '../assets/LKW4.jpg'
import reinigungImg from '../assets/Straßenreinigung0.jpg'
import maschinenImg from '../assets/LKW3.jpg'
import './Services.css'

const SERVICES = [
  {
    img: transportImg,
    title: 'Transporte',
    text: 'Zustellung von Sand, Schotter und Baustoffen mit unserem modernen LKW-Fuhrpark – zuverlässig im gesamten nördlichen Niederösterreich und in Wien.',
  },
  {
    img: erdarbeitenImg,
    title: 'Erd- & Kanalarbeiten',
    text: 'Von Aushub bis Kanalanschluss: Unsere Bagger- und Kipperflotte übernimmt Erdarbeiten und Kanalarbeiten für Gemeinden und Private.',
  },
  {
    img: reinigungImg,
    title: 'Straßenreinigung',
    text: 'Kehrmaschinen für Gemeinden und Bauunternehmen – inklusive Asphaltfräsen, Hochdruckreinigung mit 240 bar und Wasseraufsaugung.',
  },
  {
    img: maschinenImg,
    title: 'Baumaschinentransport',
    text: 'Tieflader-Transporte für Baumaschinen und Arbeitsbühnen – termingerecht zu und von Ihrer Baustelle.',
  },
]

function Services() {
  return (
    <section id="leistungen" className="services">
      <div className="container">
        <div className="section-head center">
          <span className="eyebrow">Leistungen</span>
          <h2>Alles aus einer Hand</h2>
          <p>
            Von der Baustoffzustellung bis zur professionellen Straßenreinigung &ndash;
            wir sind Ihr Partner für Transporte und Tiefbau in der Region.
          </p>
        </div>

        <div className="services__grid">
          {SERVICES.map((service) => (
            <article className="service-card" key={service.title}>
              <div className="service-card__img">
                <img src={service.img} alt={service.title} />
              </div>
              <h3>{service.title}</h3>
              <p>{service.text}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Services
