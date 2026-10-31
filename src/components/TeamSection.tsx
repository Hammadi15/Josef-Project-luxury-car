import { round1 } from '../math'

interface Role {
  title: string
  task: string
  problem: string
  answer: string
}

// The 4 roles and math problems from the project guide
const roles: Role[] = [
  {
    title: 'Sales Representative',
    task: 'Car price × cars sold',
    problem: '45.2 × 2.5',
    answer: `$${round1(45.2 * 2.5).toFixed(1)} thousand total sales`,
  },
  {
    title: 'Financial Banker',
    task: 'Price ÷ years',
    problem: '48.6 ÷ 1.2',
    answer: `$${round1(48.6 / 1.2).toFixed(1)} thousand per year`,
  },
  {
    title: 'Automotive Engineer',
    task: 'Miles ÷ gallons',
    problem: '78.5 ÷ 2.5',
    answer: `${round1(78.5 / 2.5).toFixed(1)} miles per gallon`,
  },
  {
    title: 'General Manager',
    task: 'Earnings × profit rate',
    problem: '200.0 × 0.15',
    answer: `$${round1(200 * 0.15).toFixed(1)} thousand profit`,
  },
]

export default function TeamSection() {
  return (
    <section id="team" className="section">
      <h2>Our team</h2>
      <div className="team-grid">
        {roles.map((role) => (
          <div key={role.title} className="team-card">
            <span className="tag">{role.title}</span>
            <p className="muted">{role.task}</p>
            <p className="problem">{role.problem}</p>
            <p className="answer">= {role.answer}</p>
          </div>
        ))}
      </div>
    </section>
  )
}
