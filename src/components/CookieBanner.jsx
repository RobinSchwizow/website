import { useState, useEffect } from 'react'
import { Cookie, X, ChevronDown, ChevronUp } from 'lucide-react'

const STORAGE_KEY = 'rs-tech-cookie-consent'

export default function CookieBanner() {
  const [visible, setVisible] = useState(false)
  const [expanded, setExpanded] = useState(false)
  const [prefs, setPrefs] = useState({ necessary: true, analytics: false, marketing: false })

  useEffect(() => {
    const saved = localStorage.getItem(STORAGE_KEY)
    if (!saved) {
      // Show banner after short delay for better UX
      const timer = setTimeout(() => setVisible(true), 1500)
      return () => clearTimeout(timer)
    }
  }, [])

  const save = (consent) => {
    localStorage.setItem(STORAGE_KEY, JSON.stringify({ ...consent, timestamp: Date.now() }))
    setVisible(false)

    // TODO: Initialize tracking tools here if consent granted
    // if (consent.analytics) { /* initialize Google Analytics */ }
  }

  const acceptAll = () => save({ necessary: true, analytics: true, marketing: true })
  const rejectAll = () => save({ necessary: true, analytics: false, marketing: false })
  const saveSelection = () => save(prefs)

  if (!visible) return null

  return (
    <div
      role="dialog"
      aria-label="Cookie-Einstellungen"
      aria-live="polite"
      className="fixed bottom-4 left-4 right-4 sm:left-auto sm:right-6 sm:bottom-6 sm:max-w-sm z-50 bg-white border border-slate-200 rounded-2xl shadow-2xl shadow-navy-900/15 overflow-hidden"
    >
      <div className="p-5">
        {/* Header */}
        <div className="flex items-start justify-between gap-3 mb-3">
          <div className="flex items-center gap-2">
            <div className="w-7 h-7 bg-navy-50 rounded-lg flex items-center justify-center">
              <Cookie size={14} className="text-navy-900" strokeWidth={1.5} />
            </div>
            <span className="font-display font-semibold text-navy-900 text-sm">Cookie-Einstellungen</span>
          </div>
          <button
            onClick={rejectAll}
            className="text-slate-400 hover:text-slate-600 transition-colors p-1 rounded-lg hover:bg-slate-50"
            aria-label="Alle ablehnen und schließen"
          >
            <X size={16} />
          </button>
        </div>

        <p className="text-xs text-slate-500 leading-relaxed mb-4">
          Diese Website verwendet Cookies. Notwendige Cookies sind immer aktiv. Weitere
          Cookies benötigen Ihre Zustimmung.
        </p>

        {/* Expandable details */}
        <button
          onClick={() => setExpanded(!expanded)}
          className="flex items-center gap-1.5 text-xs text-navy-900 font-medium hover:text-sky-500 transition-colors mb-4"
          aria-expanded={expanded}
        >
          {expanded ? <ChevronUp size={13} /> : <ChevronDown size={13} />}
          {expanded ? 'Weniger anzeigen' : 'Einstellungen anpassen'}
        </button>

        {expanded && (
          <div className="space-y-3 mb-4">
            {[
              {
                key: 'necessary',
                label: 'Notwendig',
                description: 'Für den Betrieb der Website erforderlich.',
                locked: true,
              },
              {
                key: 'analytics',
                label: 'Analyse',
                description: 'Hilft, die Nutzung der Website zu verstehen (z. B. Google Analytics).',
                locked: false,
              },
              {
                key: 'marketing',
                label: 'Marketing',
                description: 'Für personalisierte Werbung und Kampagnen.',
                locked: false,
              },
            ].map((item) => (
              <label
                key={item.key}
                className={`flex items-start justify-between gap-3 p-3 rounded-xl border ${
                  item.locked ? 'bg-slate-50 border-slate-100' : 'border-slate-100 cursor-pointer hover:bg-slate-50'
                }`}
              >
                <div>
                  <p className="text-xs font-medium text-navy-900">{item.label}</p>
                  <p className="text-xs text-slate-400 mt-0.5">{item.description}</p>
                </div>
                <input
                  type="checkbox"
                  checked={item.locked ? true : prefs[item.key]}
                  disabled={item.locked}
                  onChange={() =>
                    !item.locked &&
                    setPrefs((p) => ({ ...p, [item.key]: !p[item.key] }))
                  }
                  className="mt-0.5 w-4 h-4 rounded border-slate-300 text-navy-900 focus:ring-sky-400 flex-shrink-0"
                  aria-label={item.label}
                />
              </label>
            ))}
          </div>
        )}

        {/* Actions */}
        <div className="flex flex-col gap-2">
          <button
            onClick={acceptAll}
            className="btn-primary w-full justify-center text-xs py-2.5"
          >
            Alle akzeptieren
          </button>
          <div className="grid grid-cols-2 gap-2">
            <button
              onClick={rejectAll}
              className="btn-outline text-xs py-2.5 justify-center"
            >
              Ablehnen
            </button>
            {expanded && (
              <button
                onClick={saveSelection}
                className="btn-outline text-xs py-2.5 justify-center"
              >
                Auswahl speichern
              </button>
            )}
            {!expanded && (
              <button
                onClick={() => setExpanded(true)}
                className="btn-outline text-xs py-2.5 justify-center"
              >
                Einstellungen
              </button>
            )}
          </div>
        </div>
      </div>
    </div>
  )
}
