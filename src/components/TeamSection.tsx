import { round1 } from '../math'

interface Role {
  title: string
  person: string
  task: string
  problem: string
  answer: string
}

// The 4 roles and math problems from the project guide
const roles: Role[] = [
  {
    title: 'Sales Representative',
    person: 'Josef',
    task: 'Car price × cars sold',
    problem: '45.2 × 2.5',
    answer: `$${round1(45.2 * 2.5).toFixed(1)} thousand total sales`,
  },
  {
    title: 'Financial Banker',
    person: 'Shawqi',
    task: 'Price ÷ years',
    problem: '48.6 ÷ 1.2',
    answer: `$${round1(48.6 / 1.2).toFixed(1)} thousand per year`,
  },
  {
    title: 'Automotive Engineer',
    person: 'Mohammed',
    task: 'Miles ÷ gallons',
    problem: '78.5 ÷ 2.5',
    answer: `${round1(78.5 / 2.5).toFixed(1)} miles per gallon`,
  },
  {
    title: 'General Manager',
    person: 'Josef',
    task: 'Earnings × profit rate',
    problem: '200.0 × 0.15',
    answer: `$${round1(200 * 0.15).toFixed(1)} thousand profit`,
  },
]

export default function TeamSection() {
  return (
    <section id="team" className="section">
      <div className="section-head">
        <p className="eyebrow">Multiplying and dividing decimals</p>
        <h2>The math behind the deals</h2>
        <p className="muted">The 4 roles from our project, shared by our team of 3, and the numbers they work with every day.</p>
      </div>
      <div className="team-grid">
        {roles.map((role, index) => (
          <div key={role.title} className="team-card">
            <span className="team-number">0{index + 1}</span>
            <span className="tag">{role.title}</span>
            <p className="team-person">{role.person}</p>
            <p className="muted small">{role.task}</p>
            <p className="problem">{role.problem}</p>
            <p className="answer">= {role.answer}</p>
          </div>
        ))}
      </div>
    </section>
  )
}
