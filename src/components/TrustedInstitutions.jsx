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
      <div className="logo-row">
        {institutions.map(([name, src]) => (
          <div className="institution-logo" key={name}>
            <img src={src} alt={`${name} logo`} />{name}
          </div>
        ))}
      </div>
    </section>
  )
}
