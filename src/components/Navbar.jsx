import { useState, useEffect } from 'react'
import { Menu, X } from 'lucide-react'

const navLinks = [
  { label: 'Start', href: '#start' },
  { label: 'Leistungen', href: '#leistungen' },
  { label: 'Über mich', href: '#ueber-mich' },
  { label: 'Projekte', href: '#projekte' },
  { label: 'Kontakt', href: '#kontakt' },
]

export default function Navbar() {
  const [open, setOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20)
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const handleNav = (href) => {
    setOpen(false)
    const el = document.querySelector(href)
    if (el) el.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-white/95 backdrop-blur-md border-b border-slate-100 shadow-sm'
          : 'bg-transparent'
      }`}
    >
      <nav className="max-w-6xl mx-auto px-5 sm:px-8 h-16 flex items-center justify-between" aria-label="Hauptnavigation">
        {/* Logo */}
        <button
          onClick={() => handleNav('#start')}
          className="flex items-center gap-2 focus:outline-none focus:ring-2 focus:ring-sky-400 rounded-lg"
          aria-label="RS Tech – zurück zur Startseite"
        >
          <div className="w-8 h-8 bg-navy-900 rounded-lg flex items-center justify-center">
            <span className="text-sky-400 font-display font-bold text-xs tracking-tight">RS</span>
          </div>
          <span className="font-display font-bold text-navy-900 text-lg tracking-tight">RS Tech</span>
        </button>

        {/* Desktop nav */}
        <ul className="hidden md:flex items-center gap-1" role="list">
          {navLinks.map((link) => (
            <li key={link.href}>
              <button
                onClick={() => handleNav(link.href)}
                className="px-4 py-2 text-sm font-body font-medium text-slate-600 hover:text-navy-900 hover:bg-slate-50 rounded-lg transition-all duration-150 focus:outline-none focus:ring-2 focus:ring-sky-400"
              >
                {link.label}
              </button>
            </li>
          ))}
          <li className="ml-3">
            <button
              onClick={() => handleNav('#kontakt')}
              className="btn-primary text-xs py-2 px-5"
            >
              Gespräch anfragen
            </button>
          </li>
        </ul>

        {/* Mobile burger */}
        <button
          className="md:hidden p-2 rounded-lg text-navy-900 hover:bg-slate-100 transition-colors focus:outline-none focus:ring-2 focus:ring-sky-400"
          onClick={() => setOpen(!open)}
          aria-label={open ? 'Menü schließen' : 'Menü öffnen'}
          aria-expanded={open}
        >
          {open ? <X size={20} /> : <Menu size={20} />}
        </button>
      </nav>

      {/* Mobile menu */}
      {open && (
        <div className="md:hidden bg-white border-t border-slate-100 shadow-lg" role="dialog" aria-label="Mobile Navigation">
          <ul className="px-5 py-4 flex flex-col gap-1" role="list">
            {navLinks.map((link) => (
              <li key={link.href}>
                <button
                  onClick={() => handleNav(link.href)}
                  className="w-full text-left px-4 py-3 text-sm font-body font-medium text-navy-900 hover:bg-slate-50 rounded-xl transition-colors"
                >
                  {link.label}
                </button>
              </li>
            ))}
            <li className="mt-2 pt-2 border-t border-slate-100">
              <button
                onClick={() => handleNav('#kontakt')}
                className="btn-primary w-full justify-center"
              >
                Gespräch anfragen
              </button>
            </li>
          </ul>
        </div>
      )}
    </header>
  )
}
