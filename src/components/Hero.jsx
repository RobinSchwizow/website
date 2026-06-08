import { ArrowRight, ChevronDown } from 'lucide-react'
import portrait from '../assets/portrait.jpg'

export default function Hero() {
  const scrollTo = (id) => {
    document.querySelector(id)?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <section
      id="start"
      className="relative min-h-screen flex items-center overflow-hidden bg-mesh pt-16"
      aria-labelledby="hero-heading"
    >
      {/* Subtle background elements */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/4 right-1/4 w-96 h-96 bg-sky-400/5 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 left-1/6 w-64 h-64 bg-navy-700/5 rounded-full blur-3xl" />
        {/* Grid pattern */}
        <div
          className="absolute inset-0 opacity-[0.02]"
          style={{
            backgroundImage: `linear-gradient(#0F172A 1px, transparent 1px), linear-gradient(90deg, #0F172A 1px, transparent 1px)`,
            backgroundSize: '60px 60px',
          }}
        />
      </div>

      <div className="relative max-w-6xl mx-auto px-5 sm:px-8 py-20 w-full">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Text content */}
          <div className="order-2 lg:order-1">
            <div className="section-label animate-fade-up" style={{ animationFillMode: 'both' }}>
              <span className="w-5 h-px bg-sky-500" />
              IT & Web aus Alzey
            </div>

            <h1
              id="hero-heading"
              className="font-display font-bold text-4xl sm:text-5xl xl:text-6xl text-navy-900 leading-[1.1] tracking-tight mb-6 animate-fade-up animate-delay-100"
              style={{ animationFillMode: 'both' }}
            >
              Moderne{' '}
              <span className="text-gradient">IT- &<br />Weblösungen</span>
            </h1>

            <p
              className="text-slate-500 text-lg sm:text-xl leading-relaxed mb-10 max-w-lg animate-fade-up animate-delay-200"
              style={{ animationFillMode: 'both' }}
            >
              Ich unterstütze Selbstständige, lokale Unternehmen und kleine Betriebe bei modernen Webseiten, Hosting und digitalen Lösungen.{' '}
              <span className="text-navy-900 font-medium">Persönlich. Verständlich. Technisch sauber.</span>
            </p>

            <div
              className="flex flex-col sm:flex-row gap-3 animate-fade-up animate-delay-300"
              style={{ animationFillMode: 'both' }}
            >
              <button
                onClick={() => scrollTo('#kontakt')}
                className="btn-primary group"
              >
                Kontakt aufnehmen
                <ArrowRight size={16} className="transition-transform group-hover:translate-x-1" />
              </button>
              <button
                onClick={() => scrollTo('#leistungen')}
                className="btn-outline"
              >
                Leistungen ansehen
              </button>
            </div>

            {/* Trust indicators */}
            <div
              className="mt-12 flex flex-wrap gap-6 animate-fade-up animate-delay-400"
              style={{ animationFillMode: 'both' }}
            >
              {[
                ['B.Sc.', 'Wirtschaftsinformatik'],
                ['Ausb.', 'Fachinformatiker'],
                ['100%', 'Persönlicher Kontakt'],
              ].map(([val, label]) => (
                <div key={label} className="flex items-center gap-3">
                  <span className="font-mono font-medium text-sky-500 text-sm">{val}</span>
                  <span className="text-slate-400 text-sm">{label}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Portrait */}
          <div
            className="order-1 lg:order-2 flex justify-center lg:justify-end animate-fade-in animate-delay-200"
            style={{ animationFillMode: 'both' }}
          >
            <div className="relative">
              {/* Decorative rings */}
              <div className="absolute -inset-4 rounded-3xl bg-gradient-to-br from-navy-700/10 to-sky-400/10 blur-xl" />
              <div className="absolute -inset-1 rounded-3xl bg-gradient-to-br from-navy-700/30 to-sky-400/30" />

              {/* Portrait frame */}
              <div className="relative w-64 h-80 sm:w-80 sm:h-96 rounded-2xl overflow-hidden shadow-2xl shadow-navy-900/20">
                <img
                  src={portrait}
                  alt="Portrait von RS Tech – Ihr Ansprechpartner für Web- und IT-Lösungen"
                  className="w-full h-full object-cover object-center"
                  width="320"
                  height="384"
                />
                {/* Subtle gradient overlay at bottom */}
                <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-navy-900/20 to-transparent" />
              </div>

              {/* Floating badge */}
              <div className="absolute -bottom-4 -left-4 bg-white rounded-xl shadow-lg shadow-navy-900/10 border border-slate-100 px-4 py-3 flex items-center gap-3">
                <div className="w-8 h-8 bg-sky-50 rounded-lg flex items-center justify-center">
                  <div className="w-2 h-2 bg-sky-500 rounded-full animate-pulse" />
                </div>
                <div>
                  <p className="text-navy-900 font-display font-semibold text-xs leading-tight">Verfügbar für</p>
                  <p className="text-slate-500 text-xs">neue Projekte</p>
                </div>
              </div>

              {/* Second badge */}
              <div className="absolute -top-4 -right-4 bg-navy-900 rounded-xl shadow-lg px-4 py-3">
                <p className="text-sky-400 font-mono font-medium text-xs">Alzey × DE</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <button
        onClick={() => scrollTo('#leistungen')}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 text-slate-300 hover:text-navy-900 transition-colors animate-bounce"
        aria-label="Nach unten scrollen"
      >
        <ChevronDown size={24} />
      </button>
    </section>
  )
}
