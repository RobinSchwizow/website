import { Mail } from 'lucide-react'

const navLinks = [
  { label: 'Start', href: '#start' },
  { label: 'Leistungen', href: '#leistungen' },
  { label: 'Über mich', href: '#ueber-mich' },
  { label: 'Projekte', href: '#projekte' },
  { label: 'Kontakt', href: '#kontakt' },
]

export default function Footer({ onImpressum, onDatenschutz }) {
  const scrollTo = (href) => {
    document.querySelector(href)?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <footer className="bg-navy-900 text-white" role="contentinfo">
      <div className="max-w-6xl mx-auto px-5 sm:px-8">
        {/* Main footer */}
        <div className="py-14 grid sm:grid-cols-2 lg:grid-cols-3 gap-10">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-2 mb-4">
              <div className="w-8 h-8 bg-sky-400/10 border border-sky-400/20 rounded-lg flex items-center justify-center">
                <span className="text-sky-400 font-display font-bold text-xs">RS</span>
              </div>
              <span className="font-display font-bold text-white text-lg tracking-tight">RS Tech</span>
            </div>
            <p className="text-slate-400 text-sm leading-relaxed max-w-xs">
              Moderne IT- und Weblösungen für Selbstständige und kleine Unternehmen. Persönlich. Klar. Zuverlässig.
            </p>
            <p className="mt-4 text-slate-500 text-xs">
              Aus Alzey – digital für die Region und ganz Deutschland.
            </p>
          </div>

          {/* Navigation */}
          <div>
            <h3 className="font-display font-semibold text-sm text-white mb-4">Navigation</h3>
            <ul className="space-y-2.5" role="list">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <button
                    onClick={() => scrollTo(link.href)}
                    className="text-slate-400 text-sm hover:text-white transition-colors focus:outline-none focus:text-white"
                  >
                    {link.label}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="font-display font-semibold text-sm text-white mb-4">Kontakt</h3>
            <ul className="space-y-3" role="list">
              <li className="flex items-center gap-3">
                <Mail size={14} className="text-sky-400 flex-shrink-0" strokeWidth={1.5} />
                {/* TODO: Replace with your actual business email */}
                <a
                  href="mailto:robin.schwizow.business@gmail.com"
                  className="text-slate-400 text-sm hover:text-white transition-colors"
                >
                  robin.schwizow.business@gmail.com
                </a>
              </li>
            </ul>
            <div className="mt-6">
              <button
                onClick={() => scrollTo('#kontakt')}
                className="text-xs font-medium text-sky-400 border border-sky-400/30 px-4 py-2 rounded-xl hover:bg-sky-400/10 transition-all"
              >
                Nachricht schreiben →
              </button>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="border-t border-white/8 py-5 flex flex-col sm:flex-row items-center justify-between gap-3">
          <p className="text-slate-500 text-xs">
            © {new Date().getFullYear()} RS Tech. Alle Rechte vorbehalten.
          </p>
          <div className="flex items-center gap-5">
            <button
              onClick={onImpressum}
              className="text-slate-500 text-xs hover:text-slate-300 transition-colors focus:outline-none"
            >
              Impressum
            </button>
            <button
              onClick={onDatenschutz}
              className="text-slate-500 text-xs hover:text-slate-300 transition-colors focus:outline-none"
            >
              Datenschutz
            </button>
          </div>
        </div>
      </div>
    </footer>
  )
}
