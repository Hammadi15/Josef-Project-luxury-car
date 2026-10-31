import { Calculator, Crown, Mail, Phone } from 'lucide-react'
import type { Agent } from '../types'

export function initials(name: string): string {
  return name
    .split(' ')
    .map((part) => part[0])
    .join('')
}

export default function AgentCard({ agent }: { agent: Agent }) {
  return (
    <article className={agent.lead ? 'agent-card lead' : 'agent-card'}>
      {agent.lead && (
        <span className="lead-badge">
          <Crown size={14} /> Leader
        </span>
      )}
      <div className="agent-head">
        <div className="avatar">{initials(agent.name)}</div>
        <div>
          <h3>{agent.name}</h3>
          <p className="eyebrow">{agent.title}</p>
        </div>
      </div>
      <p className="muted">{agent.bio}</p>
      <p className="agent-task">
        <Calculator size={15} /> {agent.task}
      </p>
      <div className="agent-contact">
        <a href={`tel:${agent.phone.replace(/\s/g, '')}`}>
          <Phone size={15} /> {agent.phone}
        </a>
        <a href={`mailto:${agent.email}`}>
          <Mail size={15} /> Email
        </a>
      </div>
    </article>
  )
}
