import { User, Brain, Code2, MessageSquare, Building2 } from 'lucide-react'
import { useReveal } from '../hooks/useReveal'

const reasons = [
  {
    icon: User,
    title: 'Persönlicher Ansprechpartner',
    description: 'Direkte Kommunikation ohne große Agenturstrukturen.',
  },
  {
    icon: Brain,
    title: 'Technisches Verständnis',
    description: 'Fundierte IT-Kenntnisse durch Ausbildung und Studium.',
  },
  {
    icon: Code2,
    title: 'Moderne Umsetzung',
    description: 'Klare Designs, responsive Darstellung und aktuelle Webtechnologien.',
  },
  {
    icon: MessageSquare,
    title: 'Verständliche Kommunikation',
    description: 'Ich übersetze Technik in klare Worte. Keine Fachsprache, keine Verwirrung – nur das, was Sie wissen müssen.',
  },
  {
    icon: Building2,
    title: 'Fokus auf KMU & Selbstständige',
    description: 'Ich kenne die Bedürfnisse kleiner Betriebe. Kein Overkill, keine Überforderung – sondern das, was wirklich hilft.',
  },
]

export default function WhyUs() {
  const { ref, visible } = useReveal()

  return (
    <section className="py-28 bg-navy-900 text-white relative overflow-hidden" aria-labelledby="whyus-heading">
      {/* Background pattern */}
      <div className="absolute inset-0 pointer-events-none">
        <div
          className="absolute inset-0 opacity-[0.04]"
          style={{
            backgroundImage: `linear-gradient(rgba(255,255,255,0.8) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.8) 1px, transparent 1px)`,
            backgroundSize: '60px 60px',
          }}
        />
        <div className="absolute top-0 right-1/4 w-96 h-96 bg-sky-500/10 rounded-full blur-3xl" />
        <div className="absolute bottom-0 left-1/4 w-64 h-64 bg-blue-600/10 rounded-full blur-3xl" />
      </div>

      <div className="relative max-w-6xl mx-auto px-5 sm:px-8">
        {/* Header */}
        <div ref={ref} className={`reveal ${visible ? 'visible' : ''} mb-16 text-center`}>
          <span className="section-label text-sky-400">
            <span className="w-5 h-px bg-sky-400" />
            Warum RS Tech
          </span>
          <h2
            id="whyus-heading"
            className="font-display font-bold text-3xl sm:text-4xl xl:text-5xl text-white leading-tight tracking-tight max-w-2xl mx-auto"
          >

            Persönlich.{' '}
<span className="bg-gradient-to-r from-sky-400 to-cyan-400 bg-clip-text text-transparent">
  Modern. Verständlich.
</span>
          </h2>
          <p className="mt-4 text-slate-400 text-lg max-w-xl mx-auto">
            Warum RS Tech zu kleinen Unternehmen, Selbstständigen und lokalen Betrieben passt.
          </p>
        </div>

        {/* Reasons grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {reasons.map((reason, i) => (
            <ReasonCard key={i} reason={reason} delay={i * 80} />
          ))}
        </div>

        {/* Location callout */}
        <div className="mt-16 text-center">
          <div className="inline-flex items-center gap-3 bg-white/5 border border-white/10 rounded-2xl px-6 py-4">
            <div className="w-2 h-2 bg-sky-400 rounded-full animate-pulse" />
            <p className="text-slate-300 text-sm">
              <span className="text-white font-medium">Aus Alzey</span> – digital für Kunden in der Region und
              deutschlandweit.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}

function ReasonCard({ reason, delay }) {
  const { ref, visible } = useReveal()
  const Icon = reason.icon

  return (
    <div
      ref={ref}
      className={`reveal ${visible ? 'visible' : ''} group bg-white/5 border border-white/10 rounded-2xl p-7 transition-all duration-300 hover:bg-white/8 hover:border-sky-400/30`}
      style={{ transitionDelay: `${delay}ms` }}
    >
      <div className="w-10 h-10 rounded-xl border border-white/10 flex items-center justify-center mb-5 transition-all duration-300 group-hover:border-sky-400/50 group-hover:bg-sky-400/10">
        <Icon size={18} className="text-sky-400" strokeWidth={1.5} />
      </div>
      <h3 className="font-display font-semibold text-white text-base mb-2.5">{reason.title}</h3>
      <p className="text-slate-400 text-sm leading-relaxed">{reason.description}</p>
    </div>
  )
}
