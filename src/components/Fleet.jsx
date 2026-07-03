import fleetRow from '../assets/LKW2.jpg'
import garage from '../assets/LKW5.jpg'
import sweeper from '../assets/Kehrmaschine0.jpg'
import yard from '../assets/Firmengebäude0.jpg'
import './Fleet.css'

const IMAGES = [
  { src: fleetRow, caption: 'Unser LKW-Fuhrpark am Betriebsgelände', className: 'wide' },
  { src: sweeper, caption: 'Kehrmaschine im Einsatz für die Straßenreinigung' },
  { src: garage, caption: 'Immer einsatzbereit – direkt ab Hof in Limberg' },
  { src: yard, caption: 'Firmengelände der Josef Mayer KG', className: 'wide' },
]

function Fleet() {
  return (
    <section id="fuhrpark" className="fleet">
      <div className="container">
        <div className="section-head center">
          <span className="eyebrow">Fuhrpark</span>
          <h2>Moderne Fahrzeuge, gewachsener Betrieb</h2>
          <p>
            Über die Jahre ist unser Fuhrpark stetig mitgewachsen – von den ersten zwei
            LKW bis zu einer modernen Flotte aus LKW, Kehrmaschinen und Baggern.
          </p>
        </div>

        <div className="fleet__grid">
          {IMAGES.map((image) => (
            <figure className={`fleet__item ${image.className || ''}`} key={image.src}>
              <img src={image.src} alt={image.caption} loading="lazy" />
              <figcaption>{image.caption}</figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Fleet
