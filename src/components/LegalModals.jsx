import { X } from 'lucide-react'
import { useEffect } from 'react'

function Modal({ id, title, onClose, children }) {
  useEffect(() => {
    const handler = (e) => {
      if (e.key === 'Escape') onClose()
    }
    document.addEventListener('keydown', handler)
    return () => document.removeEventListener('keydown', handler)
  }, [onClose])

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-labelledby={`${id}-title`}
      className="fixed inset-0 z-[60] flex items-center justify-center p-4 bg-navy-900/60 backdrop-blur-sm"
      onClick={(e) => e.target === e.currentTarget && onClose()}
    >
      <div className="bg-white rounded-3xl shadow-2xl w-full max-w-2xl max-h-[85vh] flex flex-col">
        <div className="flex items-center justify-between px-8 py-5 border-b border-slate-100">
          <h2 id={`${id}-title`} className="font-display font-bold text-navy-900 text-xl">
            {title}
          </h2>
          <button
            onClick={onClose}
            className="p-2 rounded-xl text-slate-400 hover:text-slate-600 hover:bg-slate-100 transition-all"
            aria-label="Schließen"
          >
            <X size={18} />
          </button>
        </div>
        <div className="overflow-y-auto px-8 py-6 text-sm text-slate-600 leading-relaxed space-y-4">
          {children}
        </div>
      </div>
    </div>
  )
}

export function ImpressumModal({ onClose }) {
  return (
    <Modal id="impressum" title="Impressum" onClose={onClose}>
      {/* TODO: Fill in with real legal data before going live.
          Refer to §5 TMG (Telemediengesetz) for required fields.
          Consider using a lawyer or legal template service. */}

      <div className="bg-amber-50 border border-amber-200 rounded-xl px-4 py-3 text-amber-800 text-xs font-medium mb-6">
        ⚠️ Platzhalter – vor Veröffentlichung durch echte Angaben ersetzen (§5 TMG)
      </div>

      <h3 className="font-display font-semibold text-navy-900">Angaben gemäß §5 TMG</h3>
      <p>
        <strong>[Ihr vollständiger Name]</strong><br />
        [Straße und Hausnummer]<br />
        [PLZ] [Ort]
      </p>

      <h3 className="font-display font-semibold text-navy-900 mt-4">Kontakt</h3>
      <p>
        E-Mail: [ihre-email@domain.de]<br />
        {/* TODO: Telefon bei Bedarf ergänzen */}
      </p>

      <h3 className="font-display font-semibold text-navy-900 mt-4">Umsatzsteuer-ID</h3>
      <p>
        {/* TODO: Umsatzsteuer-ID oder Hinweis auf Kleinunternehmerregelung §19 UStG */}
        [Umsatzsteuer-ID oder Kleinunternehmerhinweis]
      </p>

      <h3 className="font-display font-semibold text-navy-900 mt-4">Verantwortlich für den Inhalt (§55 Abs. 2 RStV)</h3>
      <p>[Ihr vollständiger Name, Adresse wie oben]</p>

      <h3 className="font-display font-semibold text-navy-900 mt-4">Haftungsausschluss</h3>
      <p>
        Die Inhalte dieser Website wurden mit größtmöglicher Sorgfalt erstellt. Für die Richtigkeit, Vollständigkeit
        und Aktualität der Inhalte kann jedoch keine Gewähr übernommen werden.
      </p>
    </Modal>
  )
}

export function DatenschutzModal({ onClose }) {
  return (
    <Modal id="datenschutz" title="Datenschutzerklärung" onClose={onClose}>
      {/* TODO: Datenschutzerklärung vor Veröffentlichung durch einen Datenschutz-Generator
          oder Anwalt erstellen lassen (z.B. datenschutz.org, e-recht24.de). */}

      <div className="bg-amber-50 border border-amber-200 rounded-xl px-4 py-3 text-amber-800 text-xs font-medium mb-6">
        ⚠️ Platzhalter – vor Veröffentlichung durch vollständige DSGVO-konforme Datenschutzerklärung ersetzen
      </div>

      <h3 className="font-display font-semibold text-navy-900">1. Verantwortlicher</h3>
      <p>
        Verantwortlicher für die Verarbeitung personenbezogener Daten auf dieser Website ist:<br />
        [Ihr Name], [Adresse]
      </p>

      <h3 className="font-display font-semibold text-navy-900 mt-4">2. Erhebung und Verarbeitung von Daten</h3>
      <p>
        Beim Aufruf dieser Website werden durch den Webhoster automatisch sogenannte Server-Log-Daten gespeichert.
        Diese umfassen u.a. IP-Adresse, aufgerufene Seite, Datum und Uhrzeit, Browser und Betriebssystem.
      </p>

      <h3 className="font-display font-semibold text-navy-900 mt-4">3. Kontaktformular</h3>
      <p>
        Wenn Sie das Kontaktformular nutzen, werden Ihre Angaben (Name, E-Mail, ggf. Telefon, Nachricht)
        zur Bearbeitung Ihrer Anfrage verarbeitet (Rechtsgrundlage: Art. 6 Abs. 1 lit. b DSGVO).
        Die Daten werden nicht an Dritte weitergegeben und nach Abschluss der Kommunikation gelöscht,
        sofern keine gesetzlichen Aufbewahrungsfristen entgegenstehen.
      </p>

      <h3 className="font-display font-semibold text-navy-900 mt-4">4. Cookies</h3>
      <p>
        Diese Website verwendet ausschließlich technisch notwendige Cookies sowie bei Ihrer Zustimmung
        optionale Analyse-Cookies. Ihre Cookie-Präferenz wird lokal in Ihrem Browser gespeichert.
      </p>

      <h3 className="font-display font-semibold text-navy-900 mt-4">5. Ihre Rechte</h3>
      <p>
        Sie haben das Recht auf Auskunft, Berichtigung, Löschung und Einschränkung der Verarbeitung
        Ihrer personenbezogenen Daten sowie ein Widerspruchsrecht. Wenden Sie sich hierfür bitte an
        die oben genannte Kontaktadresse.
      </p>

      <h3 className="font-display font-semibold text-navy-900 mt-4">6. Hosting</h3>
      <p>
        {/* TODO: Hosting-Anbieter und dessen Datenschutzhinweise ergänzen */}
        Diese Website wird gehostet bei [Hosting-Anbieter, z. B. GitHub Pages / Netlify / eigener Server].
        Es gelten die Datenschutzbestimmungen des jeweiligen Anbieters.
      </p>
    </Modal>
  )
}
