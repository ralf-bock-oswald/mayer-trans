import './Contact.css'

const MAPS_EMBED_SRC =
  'https://www.google.com/maps?q=Mayer+-+Trans&ll=48.594599,15.8683085&z=16&output=embed'
const MAPS_LINK_SRC =
  'https://www.google.com/maps/place/Mayer+-+Trans/@48.5946025,15.8657336,17z/data=!4m6!3m5!1s0x476d5f7ddc6ec541:0xa2821dae1d5a477!8m2!3d48.594599!4d15.8683085!16s%2Fg%2F11r_bvrvn4'

function Contact() {
  return (
    <section id="kontakt" className="contact">
      <div className="container">
        <div className="section-head center">
          <span className="eyebrow">Kontakt</span>
          <h2>Sprechen wir über Ihr Projekt</h2>
          <p>Ob Transport, Erdarbeiten oder Straßenreinigung – rufen Sie uns an oder besuchen Sie uns in Limberg.</p>
        </div>

        <div className="contact__grid">
          <div className="contact__card">
            <h3>Josef Mayer KG</h3>
            <p className="contact__label">Adresse</p>
            <p>Schlossstraße 10<br />Limberg<br />3712 Maissau</p>

            <p className="contact__label">Telefon</p>
            <p><a href="tel:+43295884160">02958 / 84160</a></p>

            <p className="contact__label">Fax</p>
            <p><a href="tel:+432958841604">02958 / 84160-4</a></p>

            <p className="contact__label">Geschäftsführer</p>
            <p>Andreas Mayer</p>

            <a
              href={MAPS_LINK_SRC}
              target="_blank"
              rel="noreferrer"
              className="btn btn-primary contact__map-link"
            >
              Route in Google Maps öffnen
            </a>
          </div>

          <div className="contact__map">
            <iframe
              title="Standort Josef Mayer KG"
              src={MAPS_EMBED_SRC}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              allowFullScreen
            />
          </div>
        </div>
      </div>
    </section>
  )
}

export default Contact
