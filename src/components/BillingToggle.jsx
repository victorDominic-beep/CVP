export default function BillingToggle({ billingCycle, onChange }) {
  return (
    <div className="billing-toggle" role="group" aria-label="Billing cycle">
      <button className={billingCycle === 'monthly' ? 'active' : ''} type="button" onClick={() => onChange('monthly')}>Monthly</button>
      <button className={billingCycle === 'yearly' ? 'active' : ''} type="button" onClick={() => onChange('yearly')}>Yearly</button>
    </div>
  )
}
