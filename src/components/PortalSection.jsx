import { Button, ImagePlaceholder } from './common'
import { images } from '../assets/images'

export default function PortalSection() {
  return (
    <section className="portal-section section-grid" id="about">
      <div className="portal-copy">
        <p className="eyebrow">About CVP</p>
        <h2>One portal.<br />Every institution.</h2>
        <p>Verifying a single certificate used to mean a trip to campus, a letter to a registrar, or weeks of silence. CVP replaces all of that with one platform that connects you directly to issuing institutions, universities, and examination bodies like WAEC and NECO, so you get a real, confirmed answer in days, not weeks.</p>
        <p>Whether you're confirming one certificate or checking results for an entire admission or hiring cycle, you do it from the same dashboard.</p>
        <Button secondary href="#contact">See what we verify</Button>
      </div>
      <ImagePlaceholder className="desk-image" src={images.aboutImage} alt="About CVP image placeholder" />
    </section>
  )
}
