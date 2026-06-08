import { useState } from 'react'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Services from './components/Services'
import About from './components/About'
import Projects from './components/Projects'
import WhyUs from './components/WhyUs'
import Contact from './components/Contact'
import CookieBanner from './components/CookieBanner'
import Footer from './components/Footer'
import { ImpressumModal, DatenschutzModal } from './components/LegalModals'

export default function App() {
  const [modal, setModal] = useState(null) // null | 'impressum' | 'datenschutz'

  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <Services />
        <About />
        <Projects />
        <WhyUs />
        <Contact />
      </main>
      <Footer
        onImpressum={() => setModal('impressum')}
        onDatenschutz={() => setModal('datenschutz')}
      />
      <CookieBanner />

      {modal === 'impressum' && <ImpressumModal onClose={() => setModal(null)} />}
      {modal === 'datenschutz' && <DatenschutzModal onClose={() => setModal(null)} />}
    </>
  )
}
