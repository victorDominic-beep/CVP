import { useState } from 'react'
import { ChevronDown, Mail, MapPin, Phone, Send } from 'lucide-react'

const contactDetails = [
  ['Company Email', 'cvp@email.com', Mail],
  ['Office Address', 'Lagos, Nigeria.', MapPin],
  ['Phone', '+234 2699 323', Phone],
]

const initialForm = {
  institutionType: '',
  institutionName: '',
  workEmail: '',
  message: '',
  privacy: false,
}

export default function ContactSection() {
  const [form, setForm] = useState(initialForm)

  function updateField(event) {
    const { name, value, type, checked } = event.target
    setForm((current) => ({ ...current, [name]: type === 'checkbox' ? checked : value }))
  }

  function handleSubmit(event) {
    event.preventDefault()
    console.log('CVP contact form submission', form)
  }

  return (
    <section className="contact-section">
      <div className="contact-intro">
        <h1>Get in touch</h1>
        <p>We're here to help you with any queries or support needs.</p>
        <div className="contact-details">
          {contactDetails.map(([label, value, Icon]) => (
            <div className="contact-detail" key={label}>
              <span className="contact-icon"><Icon size={22} aria-hidden="true" /></span>
              <div><strong>{label}</strong><span>{value}</span></div>
            </div>
          ))}
        </div>
      </div>

      <form className="contact-form" onSubmit={handleSubmit}>
        <h2>Send Us a Message</h2>
        <label htmlFor="institutionType">Institution Type</label>
        <div className="select-wrap">
          <select id="institutionType" name="institutionType" value={form.institutionType} onChange={updateField} required>
            <option value="" disabled>Select institution type</option>
            <option value="university">University</option>
            <option value="agency">Agency</option>
            <option value="government">Government</option>
          </select>
          <ChevronDown size={18} aria-hidden="true" />
        </div>
        <label htmlFor="institutionName">Institution name</label>
        <input id="institutionName" name="institutionName" value={form.institutionName} onChange={updateField} placeholder="name of your institution" required />
        <label htmlFor="workEmail">Work Email</label>
        <input id="workEmail" name="workEmail" type="email" value={form.workEmail} onChange={updateField} placeholder="you@company.com" required />
        <label htmlFor="message">Message</label>
        <textarea id="message" name="message" value={form.message} onChange={updateField} placeholder="Leave us a message..." required />
        <label className="privacy-check" htmlFor="privacy">
          <input id="privacy" name="privacy" type="checkbox" checked={form.privacy} onChange={updateField} required />
          <span>You agree to our friendly privacy policy.</span>
        </label>
        <button className="contact-submit" type="submit">Send Message <Send size={19} aria-hidden="true" /></button>
      </form>
    </section>
  )
}
