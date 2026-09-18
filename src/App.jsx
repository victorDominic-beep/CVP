import { useState } from 'react'
import AcademicSection from './components/AcademicSection'
import FaqSection from './components/FaqSection'
import FinalCta from './components/FinalCta'
import Footer from './components/Footer'
import Hero from './components/Hero'
import { Navigation } from './components/Header'
import InstitutionCta from './components/InstitutionCta'
import PortalSection from './components/PortalSection'
import ProcessSection from './components/ProcessSection'
import ServicesSection from './components/ServicesSection'
import StatsSection from './components/StatsSection'
import TestimonialsSection from './components/TestimonialsSection'
import TrustedInstitutions from './components/TrustedInstitutions'
import './App.css'

function App() {
  const [menuOpen, setMenuOpen] = useState(false)
  const [openFaq, setOpenFaq] = useState(1)

  return (
    <div className="site-shell">
      <Navigation menuOpen={menuOpen} onToggle={() => setMenuOpen(!menuOpen)} onNavigate={() => setMenuOpen(false)} />
      <main id="top">
        <Hero />
        <TrustedInstitutions />
        <PortalSection />
        <ServicesSection />
        <ProcessSection />
        <AcademicSection />
        <InstitutionCta />
        <StatsSection />
        <TestimonialsSection />
        <FaqSection openFaq={openFaq} onToggle={setOpenFaq} />
        <FinalCta />
      </main>
      <Footer />
    </div>
  )
}

export default App
