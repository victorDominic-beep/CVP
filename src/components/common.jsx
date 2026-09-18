import { ArrowRight } from 'lucide-react'

export function ImagePlaceholder({ src, alt, className = '' }) {
  return <img className={className} src={src} alt={alt} />
}

export function Button({ children, secondary = false, href = '#contact' }) {
  return (
    <a className={`button ${secondary ? 'button-secondary' : ''}`} href={href}>
      {children}
      {!secondary && <ArrowRight size={14} strokeWidth={2.4} />}
    </a>
  )
}

export function SectionHeading({ eyebrow, title, children }) {
  return (
    <div className="center-heading">
      <p className="eyebrow">{eyebrow}</p>
      <h2>{title}</h2>
      {children && <p>{children}</p>}
    </div>
  )
}
