import { GraduationCap, Cpu, Globe, ArrowRight } from 'lucide-react'
import portrait from '../assets/portrait.jpg'
import { useReveal } from '../hooks/useReveal'

const credentials = [
  {
    icon: GraduationCap,
    title: 'B.Sc. Wirtschaftsinformatik',
    description: 'Fundiertes Wissen an der Schnittstelle zwischen IT und Business – Prozesse, Systeme und wirtschaftliches Denken.',
  },
  {
    icon: Cpu,
    title: 'Fachinformatiker Systemintegration',
    description: 'Praktische Erfahrung in der IT-Infrastruktur, Systemadministration und technischen Umsetzung.',
  },
  {
    icon: Globe,
    title: 'Web & Digitalisierung',
    description: 'Fokus auf moderne Webpräsenzen und digitale Lösungen, die echten Mehrwert schaffen.',
  },
]

export default function About() {
  const { ref, visible } = useReveal()

  return (
    <section id="ueber-mich" className="py-28 bg-white" aria-labelledby="about-heading">
      <div className="max-w-6xl mx-auto px-5 sm:px-8">
        <div className="grid lg:grid-cols-2 gap-16 xl:gap-24 items-center">
          {/* Portrait side */}
          <div ref={ref} className={`reveal ${visible ? 'visible' : ''} relative`}>
            <div className="relative inline-block">
              {/* Background shape */}
              <div className="absolute -inset-6 rounded-3xl bg-gradient-to-br from-navy-900/5 to-sky-400/10" />
              
              <div className="relative w-72 h-88 sm:w-80 sm:h-96 rounded-2xl overflow-hidden shadow-xl shadow-navy-900/10">
                <img
                  src={portrait}
                  alt="Ihr Ansprechpartner bei RS Tech – kompetent und persönlich"
                  className="w-full h-full object-cover object-center"
                  width="320"
                  height="384"
                />
              </div>

              {/* Info card */}
              <div className="absolute bottom-6 -right-6 bg-white rounded-2xl shadow-xl shadow-navy-900/10 border border-slate-100 p-5 max-w-[180px]">
                <p className="font-display font-bold text-navy-900 text-xl leading-tight">RS Tech</p>
                <p className="text-slate-500 text-xs mt-1 leading-snug">IT & Web aus Rheinhessen</p>
                <div className="mt-3 h-px bg-gradient-to-r from-navy-900/20 to-transparent" />
                <p className="text-sky-500 font-mono text-xs mt-2.5">Alzey, RLP</p>
              </div>
            </div>
          </div>

          {/* Text side */}
          <div>
            <span className="section-label">
              <span className="w-5 h-px bg-sky-500" />
              Über mich
            </span>
            <h2
              id="about-heading"
              className="font-display font-bold text-3xl sm:text-4xl xl:text-5xl text-navy-900 leading-tight tracking-tight mb-6"
            >
              IT-Verständnis trifft{' '}
              <span className="text-gradient">Praxisnähe</span>
            </h2>

            <div className="space-y-4 text-slate-600 leading-relaxed">
              <p>
  Ich bin <strong className="font-medium text-navy-900">Robin Schwizow</strong>, <strong className="font-medium text-navy-900">Wirtschaftsinformatiker (B.Sc.)</strong> und ausgebildeter{' '}
  <strong className="font-medium text-navy-900">Fachinformatiker für Systemintegration</strong>.
</p>
<p>
  Durch meine technische Ausbildung und mein Studium verbinde ich IT-Verständnis mit wirtschaftlichem und prozessbezogenem Denken.
  Mein Fokus liegt auf modernen Webseiten, digitalen Lösungen und einer verständlichen Zusammenarbeit auf Augenhöhe.
</p>
<p>
  Mit <strong className="font-medium text-navy-900">RS Tech</strong> unterstütze ich kleine Unternehmen, Selbstständige und lokale Betriebe dabei,
  professionell im Internet aufzutreten – modern, zuverlässig und technisch sauber umgesetzt.
</p>
            
            </div>

            {/* Credentials */}
            <div className="mt-10 space-y-4">
              {credentials.map((item, i) => {
                const Icon = item.icon
                return (
                  <div key={i} className="flex gap-4 items-start group">
                    <div className="w-9 h-9 bg-slate-50 border border-slate-100 rounded-xl flex items-center justify-center flex-shrink-0 transition-colors group-hover:bg-navy-900 group-hover:border-navy-900">
                      <Icon size={16} className="text-navy-900 transition-colors group-hover:text-white" strokeWidth={1.5} />
                    </div>
                    <div>
                      <p className="font-display font-semibold text-navy-900 text-sm">{item.title}</p>
                      <p className="text-slate-500 text-sm mt-0.5">{item.description}</p>
                    </div>
                  </div>
                )
              })}
            </div>

            <button
              onClick={() => document.querySelector('#kontakt')?.scrollIntoView({ behavior: 'smooth' })}
              className="btn-primary mt-10 group"
            >
              Kennenlernen
              <ArrowRight size={16} className="transition-transform group-hover:translate-x-1" />
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}
