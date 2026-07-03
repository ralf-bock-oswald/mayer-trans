# Mayer-Trans Website

Statische React-Homepage für die Josef Mayer KG (Transporte, Erdarbeiten,
Straßenreinigung), gebaut mit Vite + React Router. Der Produktions-Build
erzeugt reine statische Dateien in `dist/`.

Die App verwendet `HashRouter` (URLs wie `.../#/impressum`), damit
Unterseiten auch bei direktem Aufruf/Reload auf GitHub Pages funktionieren
(dort gibt es keine serverseitigen Rewrites wie bei Netlify).

## Entwicklung

```bash
npm install
npm run dev
```

## Build

```bash
npm run build
npm run preview   # lokale Vorschau des Builds
```

## Deployment auf GitHub Pages

Das Repo enthält bereits `.github/workflows/deploy.yml`. Bei jedem Push auf
`main` baut GitHub Actions das Projekt und veröffentlicht `dist/` auf GitHub
Pages.

Einmalig in den Repo-Einstellungen einzurichten:

1. GitHub-Repo → **Settings → Pages**
2. Unter **Build and deployment → Source** auf **GitHub Actions** stellen
3. Nach dem nächsten Push auf `main` läuft der Workflow automatisch durch;
   die URL erscheint danach unter **Settings → Pages** (i. d. R.
   `https://<username>.github.io/mayer-trans/`)

`vite.config.js` ist bereits auf `base: '/mayer-trans/'` gesetzt – das muss
angepasst werden, falls das Repository einmal umbenannt wird.

## Deployment auf Netlify (Alternative)

Das Repo enthält weiterhin eine `netlify.toml` (Build-Befehl `npm run build`,
Publish-Verzeichnis `dist`) falls später doch auf Netlify umgestiegen wird.
In dem Fall sollte in `vite.config.js` das `base: '/mayer-trans/'` wieder auf
`/` gesetzt und optional zurück auf `BrowserRouter` gewechselt werden, da
Netlify serverseitige Redirects unterstützt.

## Rechtliches noch zu ergänzen

In [src/pages/Impressum.jsx](src/pages/Impressum.jsx) fehlen noch
unternehmensspezifische Pflichtangaben (Firmenbuchnummer, Firmenbuchgericht,
UID-Nummer, zuständige Gewerbebehörde) – bitte vor dem Live-Schalten ergänzen.
