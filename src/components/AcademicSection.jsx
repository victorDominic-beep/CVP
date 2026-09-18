import { useEffect, useState } from 'react'
import { BriefcaseBusiness, Building2, ChevronDown, GraduationCap, UsersRound } from 'lucide-react'
import { ImagePlaceholder } from './common'
import { images } from '../assets/images'

const workflows = [
  ['Employers & HR Agencies', 'Verify university degrees and WAEC/NECO results directly from the source.', BriefcaseBusiness],
  ['Third-Party Agencies', 'Serve your clients faster and more accurately with a dedicated, structured verification workflow.', UsersRound],
  ['Academic Institutions', 'Process inbound validation and transcript requests digitally in a fraction of the time.', GraduationCap],
  ['Government Agencies', 'Securely validate applicant credentials for government roles and public service appointments.', Building2],
]

export default function AcademicSection() {
  const [openWorkflow, setOpenWorkflow] = useState(0)

  useEffect(() => {
    const carouselTimer = window.setInterval(() => {
      setOpenWorkflow((current) => (current + 1) % workflows.length)
    }, 1000)

    return () => window.clearInterval(carouselTimer)
  }, [])

  return (
    <section className="academic-section">
      <div className="academic-copy">
        <p className="eyebrow">Tailored Solutions</p>
        <h2>Secure academic verification.<br />built for every workflow.</h2>
        <p>CVP standardizes how academic transcripts and certificates are routed and verified.</p>
      </div>
      <div className="academic-content section-grid">
        <div className="workflow-tabs" aria-label="Tailored solution workflows">
          {workflows.map(([label, description, Icon], index) => {
            const isOpen = openWorkflow === index

            return (
              <div className={`workflow-item ${isOpen ? 'active' : ''}`} key={label}>
                <button type="button" aria-expanded={isOpen} onClick={() => setOpenWorkflow(index)}>
                  <span>{label}</span>
                  <span className="workflow-action"><Icon size={16} aria-hidden="true" /><ChevronDown size={15} aria-hidden="true" /></span>
                </button>
                {isOpen && <p>{description}</p>}
              </div>
            )
          })}
        </div>
        <div className="academic-aside"><ImagePlaceholder className="flags-image" src={images.flagsImage} alt="Academic verification flags image" /></div>
      </div>
    </section>
  )
}
