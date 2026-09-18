import { Check, Info } from 'lucide-react'
import { Button } from './common'

const plans = [
  {
    name: 'Starter',
    price: 'Free',
    cta: "Sign up, it's free",
    limits: ['Standard email support', 'Standard email support', 'Standard email support'],
    featuresTitle: 'Key Features',
    featured: false,
  },
  {
    name: 'Business',
    price: '₦12,500',
    cta: 'Start your free trial',
    limits: ['Standard email support', 'Standard email support', 'Standard email support', 'Standard email support'],
    featuresTitle: 'Everything in Starter, plus',
    featured: true,
  },
  {
    name: 'Enterprise',
    price: "Let's Talk",
    cta: 'Contact Us',
    limits: ['Standard email support', 'Standard email support', 'Standard email support'],
    featuresTitle: 'Everything in Business, plus',
    featured: false,
  },
]

function PlanList({ items, infoIndexes = [], withChecks = false }) {
  return <ul className="plan-list">{items.map((item, index) => <li key={`${item}-${index}`}>{withChecks && <Check size={12} aria-hidden="true" />}{item}{infoIndexes.includes(index) && <Info size={12} aria-label="More information" />}</li>)}</ul>
}

function PricingCard({ plan }) {
  return (
    <article className={`pricing-card ${plan.featured ? 'pricing-card-featured' : 'pricing-card-side'}`}>
      <h2>{plan.name}</h2>
      <p className="plan-subtitle">Transparent pricing</p>
      <strong className="plan-price">{plan.price}</strong>
      <Button secondary={!plan.featured}>{plan.cta}</Button>
      <PlanList items={plan.limits} infoIndexes={plan.featured ? [1, 3] : []} />
      <hr />
      <h3>{plan.featuresTitle}</h3>
      <PlanList items={Array(5).fill('Real-time status tracking')} withChecks />
    </article>
  )
}

export default function PricingCards() {
  return <div className="pricing-cards">{plans.map((plan) => <PricingCard key={plan.name} plan={plan} />)}</div>
}
