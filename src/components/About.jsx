import historyImg from '../assets/Geschichte0.jpg'
import buildingImg from '../assets/Firmengebäude1.jpg'
import './About.css'

const MEILENSTEINE = [
  {
    year: '1967',
    text: 'Josef und Anna Mayer gründen das Fuhrunternehmen – mit gerade einmal zwei gebrauchten LKW.',
  },
  {
    year: '1970er',
    text: 'Die erste eigene Kehrmaschine wird zum zweiten Standbein – der richtige Riecher zahlt sich aus.',
  },
  {
    year: '1998',
    text: 'Der Betrieb übersiedelt von Niederschleinz nach Limberg.',
  },
  {
    year: 'Heute',
    text: 'Andreas und Michaela Mayer führen den Betrieb – und die dritte Generation wächst am Firmengelände schon mit.',
  },
]

function About() {
  return (
    <section id="ueber-uns" className="about">
      <div className="container about__grid">
        <div className="about__images" data-reveal="left">
          <img
            src={historyImg}
            alt="Historische LKW von Mayer-Trans"
            className="about__img about__img--main"
            loading="lazy"
          />
          <img
            src={buildingImg}
            alt="Firmengebäude von Mayer-Trans in Limberg"
            className="about__img about__img--sub"
            loading="lazy"
          />
        </div>

        <div className="about__text" data-reveal="right">
          <span className="eyebrow">Unsere Geschichte</span>
          <h2>Aus zwei alten LKW wurde ein Betrieb mit Tradition</h2>
          <p>
            Was 1967 mit zwei gebrauchten Transportern begann, ist heute ein
            Familienunternehmen in dritter Generation – gewachsen mit Handschlagqualität,
            Hausverstand und dem Mut, zur richtigen Zeit zu investieren.
          </p>

          <ol className="about__timeline">
            {MEILENSTEINE.map((m) => (
              <li key={m.year}>
                <strong>{m.year}</strong>
                <span>{m.text}</span>
              </li>
            ))}
          </ol>

          <p className="about__quote">
            &bdquo;Bei uns funktioniert das so gut, weil wir alle zusammenhalten.&ldquo;
            <span>&mdash; Michaela Mayer</span>
          </p>
        </div>
      </div>
    </section>
  )
}

export default About
