import { Monitor, Server, Search, Zap } from 'lucide-react'
import { useReveal } from '../hooks/useReveal'

const services = [
  {
    icon: Monitor,
    title: 'Moderne Webseiten',
    description:
  'Responsive Webseiten und Landingpages mit modernem Design – optimiert für Desktop, Tablet und Smartphone.',
    tags: ['Responsive', 'Landingpage', 'Portfolio'],
    accent: 'from-blue-500 to-sky-400',
  },
  {
    icon: Server,
    title: 'Hosting & Wartung',
    description:
      'Unterstützung bei Domain, Hosting, technischer Einrichtung sowie laufender Pflege Ihrer Website.',
    tags: ['Domain', 'Hosting', 'Pflege'],
    accent: 'from-navy-700 to-blue-600',
  },
  {
    icon: Search,
    title: 'SEO & Sichtbarkeit',
    description:
      'Technische Grundlagen, schnelle Ladezeiten, mobile Optimierung und lokale Auffindbarkeit in Suchmaschinen. Damit Kunden Sie finden.',
    tags: ['Technisches SEO', 'Local SEO', 'Performance'],
    accent: 'from-sky-400 to-cyan-400',
  },
  {
    icon: Zap,
    title: 'Digitale Lösungen',
    description:
      'Perspektivisch auch Unterstützung bei Formularen, Automatisierungen und einfachen digitalen Prozessen.',
    tags: ['Automatisierung', 'KI-Lösungen', 'Business-Tools'],
    accent: 'from-indigo-500 to-navy-700',
  },
]

export default function Services() {
  const { ref, visible } = useReveal()

  return (
    <section id="leistungen" className="py-28 bg-[#F8FAFC]" aria-labelledby="services-heading">
      <div className="max-w-6xl mx-auto px-5 sm:px-8">
        {/* Header */}
        <div ref={ref} className={`reveal ${visible ? 'visible' : ''} mb-16`}>
          <span className="section-label">
            <span className="w-5 h-px bg-sky-500" />
            Leistungen
          </span>
          <h2
            id="services-heading"
            className="font-display font-bold text-3xl sm:text-4xl xl:text-5xl text-navy-900 leading-tight tracking-tight max-w-xl"
          >
            Was ich für Sie{' '}
            <span className="text-gradient">umsetzen</span> kann
          </h2>
          <p className="mt-4 text-slate-500 text-lg max-w-xl">
            Von der ersten Idee bis zur technischen Umsetzung – verständlich, modern und ohne unnötige Komplexität.
          </p>
        </div>

        {/* Cards grid */}
        <div className="grid sm:grid-cols-2 xl:grid-cols-4 gap-5">
          {services.map((service, i) => (
            <ServiceCard key={service.title} service={service} delay={i * 100} />
          ))}
        </div>
      </div>
    </section>
  )
}

function ServiceCard({ service, delay }) {
  const { ref, visible } = useReveal()
  const Icon = service.icon

  return (
    <div
      ref={ref}
      className={`reveal ${visible ? 'visible' : ''} card group`}
      style={{ transitionDelay: `${delay}ms` }}
    >
      {/* Icon */}
      <div className={`w-11 h-11 rounded-xl bg-gradient-to-br ${service.accent} flex items-center justify-center mb-5 shadow-sm transition-transform duration-300 group-hover:scale-110`}>
        <Icon size={20} className="text-white" strokeWidth={1.5} />
      </div>

      <h3 className="font-display font-semibold text-navy-900 text-lg mb-3">
        {service.title}
      </h3>
      <p className="text-slate-500 text-sm leading-relaxed mb-5">
        {service.description}
      </p>

      {/* Tags */}
      <div className="flex flex-wrap gap-2 mt-auto">
        {service.tags.map((tag) => (
          <span
            key={tag}
            className="text-xs font-mono font-medium text-slate-400 bg-slate-50 border border-slate-100 px-2.5 py-1 rounded-lg"
          >
            {tag}
          </span>
        ))}
      </div>
    </div>
  )
}
