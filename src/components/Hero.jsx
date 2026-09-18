import { Button, ImagePlaceholder } from './common'
import { images } from '../assets/images'

export default function Hero() {
  return (
    <section className="hero-section section-grid">
      <div className="hero-copy">
        <h1>Verify <span>Credentials</span><br />Across Institutions<br />Nationwide.</h1>
        <p className="lead">Stop chasing registrars and waiting on letters. CVP connects you to institutions nationwide.</p>
        <div className="hero-actions">
          <Button>Get Started</Button>
          <Button secondary href="#services">See how it works</Button>
        </div>
      </div>
      <div className="hero-visual"><ImagePlaceholder src={images.heroIllustration} alt="Credential verification shield illustration placeholder" /></div>
    </section>
  )
}
