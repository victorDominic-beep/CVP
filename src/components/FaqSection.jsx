import { Plus, X } from 'lucide-react'
import { SectionHeading } from './common'

const faqs = [
  ['How long does verification take?', false],
  ['Is the data secure?', true],
  ['Can we integrate CVP with our HR system?', false],
  ['How does batch verification work?', false],
]

export default function FaqSection({ openFaq, onToggle }) {
  return (
    <section className="faq-section" id="faq">
      <SectionHeading eyebrow="FAQs" title="Got questions? We have answers" />
      <div className="faq-list">
        {faqs.map(([question, hasAnswer], index) => (
          <div className={`faq-item ${openFaq === index ? 'faq-open' : ''}`} key={question}>
            <button type="button" onClick={() => onToggle(openFaq === index ? -1 : index)}>
              <span>{question}</span>{openFaq === index ? <X size={16} aria-hidden="true" /> : <Plus size={16} aria-hidden="true" />}
            </button>
            {hasAnswer && openFaq === index && <p>Yes. CVP uses bank-level encryption (AES-256) for data at rest and in transit. We maintain full GDPR and SOC2 compliance.</p>}
          </div>
        ))}
      </div>
    </section>
  )
}
