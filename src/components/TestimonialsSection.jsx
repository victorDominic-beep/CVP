import { ChevronLeft, ChevronRight } from 'lucide-react'
import { ImagePlaceholder, SectionHeading } from './common'
import { images } from '../assets/images'

export default function TestimonialsSection() {
  return (
    <section className="testimonial-section">
      <SectionHeading eyebrow="Testimonials" title={<>Trusted by verification<br />teams at every stage</>}>
        See why leading institutions and organizations choose CVP
      </SectionHeading>
      <div className="testimonial-card">
        <ImagePlaceholder className="person-image" src={images.testimonialAvatar} alt="Prof. Shola Olukoya portrait placeholder" />
        <div>
          <p className="quote">“CVP has completely transformed how we handle verification requests. What used to take our admin team weeks is now fully automated and secure. The automated evidence collection alone saved us hundreds of administrative hours.”</p>
          <strong>Prof. Shola Olukoya</strong>
          <span>Registrar, Global Tech University</span>
        </div>
      </div>
      <div className="testimonial-nav">
        <button type="button" aria-label="Previous testimonial"><ChevronLeft size={16} /></button>
        <span className="active-dot" /><span /><span />
        <button type="button" aria-label="Next testimonial"><ChevronRight size={16} /></button>
      </div>
    </section>
  )
}
