const stats = [
  ['50M+', 'Credentials Verified'],
  ['15+', 'Partner Institutions'],
  ['100%', 'Accuracy Rate'],
]

export default function StatsSection() {
  return <section className="stats-section">{stats.map(([value, label]) => <div key={label}><strong>{value}</strong><span>{label}</span></div>)}</section>
}
