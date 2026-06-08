import { useState, useRef, useEffect } from 'react'
import { Send, CheckCircle, AlertCircle, MapPin } from 'lucide-react'
import { useReveal } from '../hooks/useReveal'

// ─── Form configuration ───────────────────────────────────────────────────────
// To connect a real backend, replace the FORM_ENDPOINT or use one of:
// - Formspree:     https://formspree.io  → set FORM_ENDPOINT = 'https://formspree.io/f/YOUR_ID'
// - EmailJS:       https://emailjs.com   → use their SDK instead of fetch
// - Netlify Forms: add data-netlify="true" to <form> tag when deploying on Netlify
const FORM_ENDPOINT = '' // TODO: Add your Formspree/EmailJS endpoint here

export default function Contact() {
  const { ref, visible } = useReveal()
  const [status, setStatus] = useState('idle') // idle | loading | success | error
  const [errors, setErrors] = useState({})
  const formStartTime = useRef(Date.now())

  const [form, setForm] = useState({
    name: '',
    email: '',
    phone: '',
    message: '',
    privacy: false,
    // Honeypot field – must remain empty
    website: '',
  })

  useEffect(() => {
    formStartTime.current = Date.now()
  }, [])

  const validate = () => {
    const e = {}
    if (!form.name.trim()) e.name = 'Bitte geben Sie Ihren Namen ein.'
    if (!form.email.trim() || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email))
      e.email = 'Bitte geben Sie eine gültige E-Mail-Adresse ein.'
    if (!form.message.trim() || form.message.trim().length < 10)
      e.message = 'Die Nachricht muss mindestens 10 Zeichen lang sein.'
    if (!form.privacy) e.privacy = 'Bitte stimmen Sie der Datenschutzerklärung zu.'
    return e
  }

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target
    setForm((prev) => ({ ...prev, [name]: type === 'checkbox' ? checked : value }))
    if (errors[name]) setErrors((prev) => ({ ...prev, [name]: undefined }))
  }

  const handleSubmit = async (e) => {
    e.preventDefault()

    // Honeypot check
    if (form.website) return

    // Time check: if submitted in under 2 seconds, likely a bot
    const elapsed = (Date.now() - formStartTime.current) / 1000
    if (elapsed < 2) return

    const validation = validate()
    if (Object.keys(validation).length > 0) {
      setErrors(validation)
      return
    }

    setStatus('loading')

    try {
      if (!FORM_ENDPOINT) {
        // Demo mode – no endpoint configured yet
        await new Promise((res) => setTimeout(res, 1200))
        setStatus('success')
        return
      }

      const res = await fetch(FORM_ENDPOINT, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
        body: JSON.stringify({
          name: form.name,
          email: form.email,
          phone: form.phone,
          message: form.message,
        }),
      })

      if (res.ok) {
        setStatus('success')
      } else {
        setStatus('error')
      }
    } catch {
      setStatus('error')
    }
  }

  return (
    <section id="kontakt" className="py-28 bg-[#F8FAFC]" aria-labelledby="contact-heading">
      <div className="max-w-6xl mx-auto px-5 sm:px-8">
        <div className="grid lg:grid-cols-2 gap-16 xl:gap-24 items-start">
          {/* Left side info */}
          <div ref={ref} className={`reveal ${visible ? 'visible' : ''}`}>
            <span className="section-label">
              <span className="w-5 h-px bg-sky-500" />
              Kontakt
            </span>
            <h2
              id="contact-heading"
              className="font-display font-bold text-3xl sm:text-4xl xl:text-5xl text-navy-900 leading-tight tracking-tight mb-6"
            >
              Lassen Sie uns{' '}
              <span className="text-gradient">sprechen</span>
            </h2>
            <p className="text-slate-500 text-lg leading-relaxed mb-10">
              Sie haben eine Frage, ein Projekt oder wollen einfach wissen, was für Ihren Betrieb sinnvoll ist?
              Schreiben Sie mir – ich antworte schnell und unkompliziert.
            </p>

            {/* Location */}
            <div className="flex items-start gap-3 bg-white border border-slate-100 rounded-2xl p-5 shadow-sm">
              <MapPin size={18} className="text-sky-500 mt-0.5 flex-shrink-0" strokeWidth={1.5} />
              <div>
                <p className="font-display font-semibold text-navy-900 text-sm">Standort</p>
                <p className="text-slate-500 text-sm mt-0.5">Alzey, Rheinland-Pfalz</p>
                <p className="text-slate-400 text-xs mt-1">Regional & deutschlandweit</p>
              </div>
            </div>

            {/* TODO: Optional Google Maps placeholder */}
            {/*
              <div className="mt-6 h-48 bg-slate-100 rounded-2xl border border-slate-200 flex items-center justify-center">
                <p className="text-slate-400 text-sm text-center px-4">
                  TODO: Google Maps hier einbinden –<br />
                  nach Einrichtung einer Geschäftsadresse
                </p>
              </div>
            */}
          </div>

          {/* Form */}
          <div className="bg-white rounded-3xl border border-slate-100 shadow-sm p-8">
            {status === 'success' ? (
              <div className="text-center py-12">
                <CheckCircle size={48} className="text-green-500 mx-auto mb-4" strokeWidth={1.5} />
                <h3 className="font-display font-bold text-navy-900 text-xl mb-2">Nachricht gesendet!</h3>
                <p className="text-slate-500 text-sm">
                  Vielen Dank für Ihre Nachricht. Ich melde mich so schnell wie möglich bei Ihnen.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} noValidate aria-label="Kontaktformular">
                {/* Honeypot – hidden from real users */}
                <div className="hidden" aria-hidden="true">
                  <label htmlFor="website">Website (nicht ausfüllen)</label>
                  <input
                    type="text"
                    id="website"
                    name="website"
                    value={form.website}
                    onChange={handleChange}
                    tabIndex={-1}
                    autoComplete="off"
                  />
                </div>

                <div className="space-y-5">
                  {/* Name */}
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-navy-900 mb-1.5">
                      Name <span className="text-sky-500">*</span>
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={form.name}
                      onChange={handleChange}
                      className={`input-field ${errors.name ? 'border-red-300 focus:border-red-400 focus:ring-red-200' : ''}`}
                      placeholder="Max Mustermann"
                      autoComplete="name"
                      aria-describedby={errors.name ? 'name-error' : undefined}
                      aria-invalid={!!errors.name}
                    />
                    {errors.name && (
                      <p id="name-error" className="mt-1.5 text-xs text-red-500 flex items-center gap-1">
                        <AlertCircle size={12} /> {errors.name}
                      </p>
                    )}
                  </div>

                  {/* Email */}
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-navy-900 mb-1.5">
                      E-Mail <span className="text-sky-500">*</span>
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={form.email}
                      onChange={handleChange}
                      className={`input-field ${errors.email ? 'border-red-300 focus:border-red-400 focus:ring-red-200' : ''}`}
                      placeholder="max@beispiel.de"
                      autoComplete="email"
                      aria-describedby={errors.email ? 'email-error' : undefined}
                      aria-invalid={!!errors.email}
                    />
                    {errors.email && (
                      <p id="email-error" className="mt-1.5 text-xs text-red-500 flex items-center gap-1">
                        <AlertCircle size={12} /> {errors.email}
                      </p>
                    )}
                  </div>

                  {/* Phone (optional) */}
                  <div>
                    <label htmlFor="phone" className="block text-sm font-medium text-navy-900 mb-1.5">
                      Telefon <span className="text-slate-400 font-normal">(optional)</span>
                    </label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      value={form.phone}
                      onChange={handleChange}
                      className="input-field"
                      placeholder="+49 6731 ..."
                      autoComplete="tel"
                    />
                  </div>

                  {/* Message */}
                  <div>
                    <label htmlFor="message" className="block text-sm font-medium text-navy-900 mb-1.5">
                      Ihr Anliegen <span className="text-sky-500">*</span>
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      rows={5}
                      value={form.message}
                      onChange={handleChange}
                      className={`input-field resize-none ${errors.message ? 'border-red-300 focus:border-red-400 focus:ring-red-200' : ''}`}
                      placeholder="Beschreiben Sie kurz, womit ich Ihnen helfen kann …"
                      aria-describedby={errors.message ? 'message-error' : undefined}
                      aria-invalid={!!errors.message}
                    />
                    {errors.message && (
                      <p id="message-error" className="mt-1.5 text-xs text-red-500 flex items-center gap-1">
                        <AlertCircle size={12} /> {errors.message}
                      </p>
                    )}
                  </div>

                  {/* Privacy */}
                  <div>
                    <label className="flex items-start gap-3 cursor-pointer group">
                      <input
                        type="checkbox"
                        name="privacy"
                        checked={form.privacy}
                        onChange={handleChange}
                        className="mt-0.5 w-4 h-4 rounded border-slate-300 text-navy-900 focus:ring-sky-400"
                        aria-describedby={errors.privacy ? 'privacy-error' : undefined}
                        aria-invalid={!!errors.privacy}
                      />
                      <span className="text-xs text-slate-500 leading-relaxed">
                        Ich habe die{' '}
                        <button
                          type="button"
                          className="underline text-navy-900 hover:text-sky-500 transition-colors"
                          onClick={() => document.getElementById('modal-datenschutz')?.showModal()}
                        >
                          Datenschutzerklärung
                        </button>{' '}
                        gelesen und stimme der Verarbeitung meiner Daten zur Kontaktaufnahme zu.{' '}
                        <span className="text-sky-500">*</span>
                      </span>
                    </label>
                    {errors.privacy && (
                      <p id="privacy-error" className="mt-1.5 text-xs text-red-500 flex items-center gap-1 ml-7">
                        <AlertCircle size={12} /> {errors.privacy}
                      </p>
                    )}
                  </div>

                  {/* Error state */}
                  {status === 'error' && (
                    <div className="bg-red-50 border border-red-100 rounded-xl px-4 py-3 text-xs text-red-600 flex items-center gap-2">
                      <AlertCircle size={14} />
                      Beim Senden ist ein Fehler aufgetreten. Bitte versuchen Sie es erneut oder schreiben Sie direkt per E-Mail.
                    </div>
                  )}

                  <button
                    type="submit"
                    disabled={status === 'loading'}
                    className="btn-primary w-full justify-center disabled:opacity-60 disabled:cursor-not-allowed"
                  >
                    {status === 'loading' ? (
                      <>
                        <span className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                        Wird gesendet…
                      </>
                    ) : (
                      <>
                        <Send size={15} />
                        Nachricht senden
                      </>
                    )}
                  </button>
                </div>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  )
}
