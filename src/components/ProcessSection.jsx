import { Button, SectionHeading } from './common'
import { images } from '../assets/images'

const steps = [
  ['iconStepSubmit', 'Submit', 'Enter or upload certificate details, single or in bulk.'],
  ['iconStepRoute', 'We Route It', 'CVP sends request directly to issuing institution.'],
  ['iconStepTrack', 'Track in Real Time', 'Get live status updates as check moves through validation.'],
  ['iconStepAnswer', 'Get Your Answer', 'Most results return same-day; manual checks in 3 days.'],
]

export default function ProcessSection() {
  return (
    <section className="process-section" id="process">
      <SectionHeading eyebrow="Our Process" title="How it works">
        <>From request to result, a simple, transparent visual walkthrough<br />of how CVP authenticates credentials.</>
      </SectionHeading>
      <div className="process-row">
        {steps.map(([imageKey, title, text], index) => (
          <div className="process-step" key={title}>
            <span className="step-number">0{index + 1}</span>
            <div className="step-icon"><img src={images[imageKey]} alt={`${title} icon`} /></div>
            <h4>{title}</h4>
            <p>{text}</p>
          </div>
        ))}
      </div>
      <Button>Start verifying now</Button>
    </section>
  )
}
