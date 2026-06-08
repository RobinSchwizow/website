import { ExternalLink, Clock } from 'lucide-react'
import { useReveal } from '../hooks/useReveal'

const projects = [
  {
    label: 'Demo-Projekt',
    title: 'Moderne Website für lokales Unternehmen',
    description:
      'Konzept einer vollständigen Business-Website mit Leistungsseiten, Kontaktformular und Google Maps-Integration für einen regionalen Dienstleister.',
    tags: ['React', 'Tailwind', 'SEO'],
    color: 'from-navy-700 to-blue-600',
    status: 'Konzept',
  },
  {
    label: 'Demo-Projekt',
    title: 'Landingpage für Dienstleister',
    description:
      'Klare Struktur, moderne Optik und mobil optimierte Darstellung für eine professionelle Online-Präsenz.',
    tags: ['Landingpage', 'Conversion', 'Mobile First'],
    color: 'from-sky-500 to-cyan-400',
    status: 'Konzept',
  },
  {
    label: 'Demo-Projekt',
    title: 'Portfolio- & Business-Website',
    description:
      'Professionelle One-Page-Präsenz für Freiberufler und Selbstständige – mit Leistungsübersicht, persönlichem Profil und Kontaktbereich.',
    tags: ['Portfolio', 'One-Pager', 'Personal Brand'],
    color: 'from-indigo-500 to-navy-700',
    status: 'Konzept',
  },
]

export default function Projects() {
  const { ref, visible } = useReveal()

  return (
    <section id="projekte" className="py-28 bg-[#F8FAFC]" aria-labelledby="projects-heading">
      <div className="max-w-6xl mx-auto px-5 sm:px-8">
        {/* Header */}
        <div ref={ref} className={`reveal ${visible ? 'visible' : ''} mb-4`}>
          <span className="section-label">
            <span className="w-5 h-px bg-sky-500" />
            Projekte & Konzepte
          </span>
          <h2
            id="projects-heading"
            className="font-display font-bold text-3xl sm:text-4xl xl:text-5xl text-navy-900 leading-tight tracking-tight max-w-xl"
          >
            Erste Schritte,{' '}
            <span className="text-gradient">klare Vision</span>
          </h2>
        </div>

        {/* Notice */}
        <div className="mb-12 flex items-start gap-3 bg-sky-50 border border-sky-100 rounded-2xl px-5 py-4 max-w-2xl">
          <Clock size={16} className="text-sky-500 flex-shrink-0 mt-0.5" strokeWidth={1.5} />
          <p className="text-sm text-slate-600">
            Aktuell entstehen erste Demo-Projekte und Konzepte, um unterschiedliche Website-Typen und Designrichtungen zu präsentieren. Dieser Bereich wird künftig um reale Kundenprojekte erweitert.
          </p>
        </div>

        {/* Project cards */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {projects.map((project, i) => (
            <ProjectCard key={i} project={project} delay={i * 100} />
          ))}
        </div>

        {/* CTA */}
        <div className="mt-12 text-center">
          <p className="text-slate-500 text-sm mb-4">
            Möchten Sie Ihr Projekt hier sehen?
          </p>
          <button
            onClick={() => document.querySelector('#kontakt')?.scrollIntoView({ behavior: 'smooth' })}
            className="btn-primary"
          >
            Projekt anfragen
          </button>
        </div>
      </div>
    </section>
  )
}

function ProjectCard({ project, delay }) {
  const { ref, visible } = useReveal()

  return (
    <div
      ref={ref}
      className={`reveal ${visible ? 'visible' : ''} card group relative overflow-hidden`}
      style={{ transitionDelay: `${delay}ms` }}
    >
      {/* Color bar top */}
      <div className={`h-1 w-full bg-gradient-to-r ${project.color} rounded-full mb-6 transition-all duration-300 group-hover:h-1.5`} />

      {/* Label & Status */}
      <div className="flex items-center justify-between mb-3">
        <span className="text-xs font-mono text-slate-400">{project.label}</span>
        <span className="text-xs font-medium text-sky-500 bg-sky-50 border border-sky-100 px-2.5 py-0.5 rounded-full">
          {project.status}
        </span>
      </div>

      <h3 className="font-display font-semibold text-navy-900 text-lg leading-snug mb-3">
        {project.title}
      </h3>
      <p className="text-slate-500 text-sm leading-relaxed mb-6">
        {project.description}
      </p>

      {/* Tags */}
      <div className="flex flex-wrap gap-2">
        {project.tags.map((tag) => (
          <span
            key={tag}
            className="text-xs font-mono font-medium text-slate-400 bg-slate-50 border border-slate-100 px-2.5 py-1 rounded-lg"
          >
            {tag}
          </span>
        ))}
      </div>

      {/* Hover icon */}
      <div className="absolute top-5 right-5 opacity-0 group-hover:opacity-100 transition-opacity">
        <ExternalLink size={14} className="text-slate-300" />
      </div>
    </div>
  )
}
