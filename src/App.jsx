import { useState } from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
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
import ContactSection from './components/ContactSection'
import BillingToggle from './components/BillingToggle'
import PricingCards from './components/PricingCards'
import PricingHero from './components/PricingHero'

function LandingPage({ menuOpen, setMenuOpen, openFaq, setOpenFaq }) {
  return (
    <>
      <Navigation activePage="top" menuOpen={menuOpen} onToggle={() => setMenuOpen(!menuOpen)} onNavigate={() => setMenuOpen(false)} />
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
    </>
  )
}

function ContactPage({ menuOpen, setMenuOpen, openFaq, setOpenFaq }) {
  return (
    <>
      <Navigation activePage="contact" menuOpen={menuOpen} onToggle={() => setMenuOpen(!menuOpen)} onNavigate={() => setMenuOpen(false)} />
      <main className="contact-page">
        <ContactSection />
        <TestimonialsSection />
        <FaqSection openFaq={openFaq} onToggle={setOpenFaq} />
        <FinalCta singleButton />
      </main>
      <Footer />
    </>
  )
}

function PricingPage({ menuOpen, setMenuOpen, openFaq, setOpenFaq }) {
  const [billingCycle, setBillingCycle] = useState('monthly')

  return (
    <>
      <Navigation activePage="process" menuOpen={menuOpen} onToggle={() => setMenuOpen(!menuOpen)} onNavigate={() => setMenuOpen(false)} />
      <main className="pricing-page">
        <PricingHero />
        <BillingToggle billingCycle={billingCycle} onChange={setBillingCycle} />
        <PricingCards />
        <a className="compare-plans" href="#faq">Compare Plans</a>
        <FaqSection openFaq={openFaq} onToggle={setOpenFaq} />
      </main>
      <Footer />
    </>
  )
}

function App() {
  const [menuOpen, setMenuOpen] = useState(false)
  const [openFaq, setOpenFaq] = useState(1)

  return <BrowserRouter><div className="site-shell"><Routes><Route path="/contact" element={<ContactPage menuOpen={menuOpen} setMenuOpen={setMenuOpen} openFaq={openFaq} setOpenFaq={setOpenFaq} />} /><Route path="/pricing" element={<PricingPage menuOpen={menuOpen} setMenuOpen={setMenuOpen} openFaq={openFaq} setOpenFaq={setOpenFaq} />} /><Route path="*" element={<LandingPage menuOpen={menuOpen} setMenuOpen={setMenuOpen} openFaq={openFaq} setOpenFaq={setOpenFaq} />} /></Routes></div></BrowserRouter>
}

export default App
