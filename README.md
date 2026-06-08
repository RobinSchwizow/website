# RS Tech – Website

Moderne, professionelle Portfolio-/Business-Website für RS Tech.

## Tech Stack

- **React 18** + **Vite 5**
- **Tailwind CSS 3**
- **Lucide React** (Icons)
- Schriften: Syne (Display), DM Sans (Body), JetBrains Mono (Monospace)

---

## Installation & Start

```bash
# 1. Abhängigkeiten installieren
npm install

# 2. Entwicklungsserver starten
npm run dev

# 3. Produktionsbuild erstellen
npm run build

# 4. Build lokal vorschauen
npm run preview
```

---

## Deployment auf GitHub Pages

1. In `vite.config.js` den `base`-Wert anpassen:
   ```js
   base: '/REPOSITORY-NAME/'  // z.B. '/rs-tech/'
   ```

2. Paket `gh-pages` installieren:
   ```bash
   npm install --save-dev gh-pages
   ```

3. In `package.json` ergänzen:
   ```json
   "scripts": {
     "deploy": "npm run build && gh-pages -d dist"
   }
   ```

4. Deployen:
   ```bash
   npm run deploy
   ```

5. In den GitHub Repository-Einstellungen unter **Pages** → Source: `gh-pages` Branch auswählen.

---

## Kontaktformular einrichten

Das Formular sendet aktuell an keinen echten Endpoint (Demo-Modus). 
Wählen Sie eine der folgenden Optionen:

### Option 1: Formspree (empfohlen für Einstieg)
1. Kostenloses Konto bei [formspree.io](https://formspree.io) erstellen
2. Neues Formular anlegen → Endpoint kopieren (z.B. `https://formspree.io/f/xrgnXXXX`)
3. In `src/components/Contact.jsx` eintragen:
   ```js
   const FORM_ENDPOINT = 'https://formspree.io/f/IHRE_ID'
   ```

### Option 2: EmailJS
1. Konto bei [emailjs.com](https://emailjs.com) erstellen
2. SDK einbinden und im Formular verwenden

### Option 3: Netlify Forms
- Bei Deployment auf Netlify: `<form data-netlify="true">` einfügen
- Netlify verarbeitet das Formular automatisch

---

## ⚠️ Vor Veröffentlichung: Pflichtangaben

### Impressum (§5 TMG)
Datei: `src/components/LegalModals.jsx`

Ersetzen Sie alle `[Platzhalter]` im Impressum mit echten Angaben:
- Vollständiger Name
- Adresse (Straße, PLZ, Ort)
- E-Mail-Adresse
- Umsatzsteuer-ID oder Hinweis auf Kleinunternehmerregelung (§19 UStG)

### Datenschutzerklärung (DSGVO)
Die enthaltene Datenschutzerklärung ist ein **Platzhalter** und rechtlich **nicht vollständig**.

Empfehlungen:
- [e-recht24 Datenschutz-Generator](https://www.e-recht24.de/muster-datenschutzerklaerung.html)
- [datenschutz.org Generator](https://www.datenschutz.org/datenschutzerklaerung-generator/)
- Ergänzen Sie Ihren Hosting-Anbieter (GitHub Pages / Netlify / etc.)
- Ergänzen Sie Analyse-Tools, wenn Sie diese aktivieren

---

## Cookie Banner

Der Cookie Banner ist vollständig implementiert. Die Auswahl wird im `localStorage` gespeichert.

Analyse-/Marketing-Tools sind **auskommentiert** und werden erst aktiviert, wenn Sie den entsprechenden Code in `src/components/CookieBanner.jsx` einbinden.

---

## E-Mail-Adresse

In `src/components/Footer.jsx` die E-Mail-Adresse anpassen:
```jsx
<a href="mailto:info@rs-tech.de">info@rs-tech.de</a>
```

---

## Eigene Domain / URL

Folgende Stellen für Ihre echte Domain anpassen:
- `index.html`: alle `https://rs-tech.de/` URLs
- `public/sitemap.xml`: `<loc>` Einträge
- `public/robots.txt`: Sitemap-URL
- `vite.config.js`: `base`-Wert

---

## Projektstruktur

```
rs-tech/
├── public/
│   ├── favicon.svg
│   ├── robots.txt
│   └── sitemap.xml
├── src/
│   ├── assets/
│   │   └── portrait.jpg
│   ├── components/
│   │   ├── Navbar.jsx
│   │   ├── Hero.jsx
│   │   ├── Services.jsx
│   │   ├── About.jsx
│   │   ├── Projects.jsx
│   │   ├── WhyUs.jsx
│   │   ├── Contact.jsx
│   │   ├── CookieBanner.jsx
│   │   ├── Footer.jsx
│   │   └── LegalModals.jsx
│   ├── hooks/
│   │   └── useReveal.js
│   ├── App.jsx
│   ├── main.jsx
│   └── index.css
├── index.html
├── vite.config.js
├── tailwind.config.js
├── postcss.config.js
└── package.json
```
