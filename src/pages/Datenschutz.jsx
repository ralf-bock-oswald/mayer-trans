import './LegalPage.css'

function Datenschutz() {
  return (
    <section className="legal">
      <div className="container">
        <span className="eyebrow">Rechtliches</span>
        <h1>Datenschutzerklärung</h1>
        <p className="legal__intro">
          Wir freuen uns über Ihr Interesse an unserem Unternehmen. Der Schutz
          Ihrer personenbezogenen Daten ist uns wichtig. Nachfolgend informieren
          wir Sie gemäß Art. 13 DSGVO über die Verarbeitung Ihrer Daten beim
          Besuch dieser Website.
        </p>

        <h2>Verantwortlicher</h2>
        <p>
          Josef Mayer KG<br />
          Schlossstraße 10, Limberg, 3712 Maissau<br />
          Telefon: 02958 / 84160
        </p>

        <h2>Hosting</h2>
        <p>
          Diese Website wird bei GitHub Pages (GitHub, Inc., 88 Colin P.
          Kelly Jr. Street, San Francisco, CA 94107, USA) gehostet. Beim
          Aufruf der Website werden automatisch technische Zugriffsdaten
          (sogenannte Server-Logfiles) an den Hosting-Anbieter übermittelt,
          etwa IP-Adresse, Datum und Uhrzeit des Zugriffs, aufgerufene Seite
          und verwendeter Browser. Diese Daten dienen ausschließlich dem
          sicheren und stabilen Betrieb der Website und werden nicht mit
          anderen Daten zusammengeführt. Weitere Informationen finden Sie in
          der{' '}
          <a
            href="https://docs.github.com/en/site-policy/privacy-policies/github-general-privacy-statement"
            target="_blank"
            rel="noreferrer"
          >
            Datenschutzerklärung von GitHub
          </a>
          .
        </p>

        <h2>Google Maps</h2>
        <p>
          Auf unserer Kontaktseite binden wir eine Karte des Dienstes Google
          Maps (Google Ireland Limited, Gordon House, Barrow Street, Dublin 4,
          Irland) ein, um Ihnen die Anfahrt zu unserem Standort zu erleichtern.
          Beim Aufruf der Kartenansicht werden Daten, unter anderem Ihre
          IP-Adresse, an Google übermittelt und dort verarbeitet. Die
          Rechtsgrundlage ist unser berechtigtes Interesse (Art. 6 Abs. 1 lit.
          f DSGVO) an einer übersichtlichen und nutzerfreundlichen Darstellung
          unseres Standorts. Weitere Informationen finden Sie in der{' '}
          <a
            href="https://policies.google.com/privacy"
            target="_blank"
            rel="noreferrer"
          >
            Datenschutzerklärung von Google
          </a>
          .
        </p>

        <h2>Kontaktaufnahme</h2>
        <p>
          Wenn Sie uns telefonisch oder per E-Mail kontaktieren, verarbeiten
          wir die von Ihnen mitgeteilten Daten (z. B. Name, Kontaktdaten,
          Anliegen) ausschließlich zur Bearbeitung Ihrer Anfrage. Rechtsgrundlage
          ist Art. 6 Abs. 1 lit. b DSGVO (vorvertragliche Maßnahmen) bzw. lit. f
          DSGVO (berechtigtes Interesse an der Beantwortung von Anfragen).
        </p>

        <h2>Cookies</h2>
        <p>
          Diese Website selbst setzt keine eigenen Tracking- oder
          Marketing-Cookies. Durch die Einbindung von Google Maps können jedoch
          Cookies des jeweiligen Anbieters gesetzt werden.
        </p>

        <h2>Ihre Rechte</h2>
        <p>
          Sie haben das Recht auf Auskunft, Berichtigung, Löschung und
          Einschränkung der Verarbeitung Ihrer personenbezogenen Daten sowie das
          Recht auf Datenübertragbarkeit und Widerspruch. Zudem können Sie sich
          jederzeit bei der österreichischen Datenschutzbehörde
          (dsb.gv.at) beschweren.
        </p>

        <h2>Kontakt für Datenschutzanliegen</h2>
        <p>
          Bei Fragen zum Datenschutz wenden Sie sich bitte an: Josef Mayer KG,
          Schlossstraße 10, Limberg, 3712 Maissau, Telefon 02958 / 84160.
        </p>
      </div>
    </section>
  )
}

export default Datenschutz
