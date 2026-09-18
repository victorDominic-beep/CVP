import { CheckCircle } from 'lucide-react'
import { SectionHeading } from './common'
import { images } from '../assets/images'

const features = [
  ['iconDigitalPortal', 'Digital Verification Portal', 'A secure, centralized hub connecting institutions directly with verification agents.'],
  ['iconCertificateCheck', 'Certificate Check', 'Submit documents for instant, real-time validation and approval by issuers.'],
  ['iconInstantNotifications', 'Instant Notifications', 'Track progress effortlessly with automated email alerts and in-portal status updates.'],
]

function Feature({ imageKey, title, text }) {
  return <div className="feature-item"><img src={images[imageKey]} alt={`${title} icon placeholder`} /><div><h4>{title}</h4><p>{text}</p></div></div>
}

export default function ServicesSection() {
  return (
    <section className="services-section" id="services">
      <SectionHeading eyebrow="Our Services" title={<>Everything you need to<br />verify credentials at scale.</>}>
        CVP connects institutions that issue credentials with organizations that need to verify them, all in real time.
      </SectionHeading>
      <div className="service-tabs" role="tablist" aria-label="Service categories"><button type="button" className="active">Core Verification</button><button type="button">Scale and Automation</button><button type="button">Data and Insights</button></div>
      <div className="feature-card">
        <div className="feature-intro">
          <p className="eyebrow">Core Verification</p>
          <h3>Secure interactions in<br />real-time.</h3>
          <ul className="checklist"><li><CheckCircle size={18} />Submit single or multiple certificates instantly.</li><li><CheckCircle size={18} />Receive real-time alerts at every validation stage.</li><li><CheckCircle size={18} />Establish absolute credential trust securely.</li></ul>
          <a href="#contact">Explore Core Portal <span aria-hidden="true">→</span></a>
        </div>
        <div className="feature-list">
          {features.map(([imageKey, title, text]) => <Feature key={title} imageKey={imageKey} title={title} text={text} />)}
        </div>
      </div>
    </section>
  )
}
