import { images } from '../assets/images'

const institutions = [
  ['University of Lagos', images.logoUniLagos],
  ['University of Ilorin', images.logoUniIlorin],
  ['Lead City University', images.logoLeadCity],
  ['WAEC', images.logoWaec],
]

export default function TrustedInstitutions() {
  return (
    <section className="trusted-section">
      <p className="eyebrow">Trusted by leading institutions</p>
      <div className="logo-row" aria-label="Trusted institutions">
        <div className="logo-track">
          {institutions.map(([name, src]) => (
            <div className="institution-logo" key={name}>
              <img src={src} alt={`${name} logo`} />{name}
            </div>
          ))}
          {institutions.map(([name, src]) => (
            <div className="institution-logo" key={`duplicate-${name}`} aria-hidden="true">
              <img src={src} alt="" />{name}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
