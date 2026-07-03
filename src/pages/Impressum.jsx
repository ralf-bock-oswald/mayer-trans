import '../pages/LegalPage.css'

function Impressum() {
  return (
    <section className="legal">
      <div className="container">
        <span className="eyebrow">Rechtliches</span>
        <h1>Impressum</h1>
        <p className="legal__intro">Angaben gemäß § 5 ECG, § 25 Mediengesetz und § 63 GewO.</p>

        <h2>Unternehmen</h2>
        <p>
          Josef Mayer KG<br />
          Transporte &middot; Erdarbeiten &middot; Straßenreinigung<br />
          Schlossstraße 10<br />
          3712 Maissau<br />
          Österreich
        </p>

        <h2>Kontakt</h2>
        <p>
          Telefon: <a href="tel:+43295884160">02958 / 84160</a><br />
          Fax: 02958 / 84160-4
        </p>

        <h2>Geschäftsführung</h2>
        <p>Andreas Mayer</p>

        <h2>Unternehmensgegenstand</h2>
        <p>Güterbeförderung, Erd- und Kanalarbeiten, Straßenreinigung</p>

        <h2>Firmenbuch &amp; Gewerbebehörde</h2>
        <p className="legal__placeholder">
          Firmenbuchnummer, Firmenbuchgericht, UID-Nummer sowie die zuständige
          Gewerbebehörde/Bezirkshauptmannschaft bitte hier ergänzen.
        </p>

        <h2>Streitschlichtung</h2>
        <p>
          Die Europäische Kommission stellt eine Plattform zur
          Online-Streitbeilegung (OS) bereit:{' '}
          <a href="https://ec.europa.eu/consumers/odr" target="_blank" rel="noreferrer">
            ec.europa.eu/consumers/odr
          </a>
          . Wir sind zur Teilnahme an einem Streitbeilegungsverfahren vor einer
          Verbraucherschlichtungsstelle nicht verpflichtet und nehmen daran nicht
          teil.
        </p>

        <h2>Haftung für Inhalte</h2>
        <p>
          Die Inhalte dieser Website wurden mit größtmöglicher Sorgfalt erstellt.
          Für die Richtigkeit, Vollständigkeit und Aktualität der Inhalte können
          wir dennoch keine Gewähr übernehmen.
        </p>

        <h2>Haftung für Links</h2>
        <p>
          Unsere Website enthält Links zu externen Websites Dritter, auf deren
          Inhalte wir keinen Einfluss haben. Für die Inhalte der verlinkten
          Seiten ist stets der jeweilige Anbieter verantwortlich.
        </p>
      </div>
    </section>
  )
}

export default Impressum
