import historyImg from '../assets/Geschichte0.jpg'
import buildingImg from '../assets/Firmengebäude1.jpg'
import './About.css'

function About() {
  return (
    <section id="ueber-uns" className="about">
      <div className="container about__grid">
        <div className="about__images">
          <img src={historyImg} alt="Historische LKW von Mayer-Trans" className="about__img about__img--main" />
          <img src={buildingImg} alt="Firmengebäude von Mayer-Trans in Limberg" className="about__img about__img--sub" />
        </div>

        <div className="about__text">
          <span className="eyebrow">Unsere Geschichte</span>
          <h2>Aus zwei alten LKW wurde ein Familienbetrieb mit Tradition</h2>
          <p>
            1967 haben Josef und Anna Mayer gemeinsam mit Bruder Ludwig Knell mit gerade
            einmal zwei gebrauchten LKW begonnen. Weil das Fuhrgeschäft allein zu wenig
            abwarf, brauchte es ein zweites Standbein &ndash; Josef Mayer erhob den Bedarf
            an Kehrmaschinen in den Gemeinden der Umgebung und investierte in die erste
            eigene Kehrmaschine.
          </p>
          <p>
            Seither hat sich einiges getan: 1998 übersiedelte der Betrieb von
            Niederschleinz nach Limberg. Seit über einem Jahrzehnt führt die nächste
            Generation, Andreas und Michaela Mayer, das Unternehmen &ndash; und auch der
            Nachwuchs, Magdalena, Andreas und Klaus, ist am Firmengelände schon zu Hause.
          </p>
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
