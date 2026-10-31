import { useState, type FormEvent } from 'react'
import { CheckCircle2, Send } from 'lucide-react'
import type { Agent, Car } from '../types'
import { initials } from './AgentCard'

interface ContactFormProps {
  agent: Agent
  car: Car
}

// School project form: it checks the fields and shows a thank-you, but doesn't send anything
export default function ContactForm({ agent, car }: ContactFormProps) {
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [message, setMessage] = useState(`Hi ${agent.name.split(' ')[0]}, I'm interested in the ${car.brand} ${car.name}.`)
  const [error, setError] = useState('')
  const [sent, setSent] = useState(false)

  function handleSubmit(e: FormEvent) {
    e.preventDefault()
    if (!name.trim()) return setError('Enter your name.')
    if (!/^\S+@\S+\.\S+$/.test(email)) return setError('Enter a valid email.')
    setError('')
    setSent(true)
  }

  return (
    <div className="panel">
      <div className="agent-head">
        <div className="avatar small">{initials(agent.name)}</div>
        <div>
          <h3>{agent.name}</h3>
          <p className="eyebrow">{agent.title}</p>
        </div>
      </div>
      {sent ? (
        <p className="success">
          <CheckCircle2 size={18} /> Thanks, {name}! {agent.name.split(' ')[0]} will contact you soon.
        </p>
      ) : (
        <form className="contact-form" onSubmit={handleSubmit} noValidate>
          <input placeholder="Your name" value={name} onChange={(e) => setName(e.target.value)} />
          <input placeholder="you@email.com" type="email" value={email} onChange={(e) => setEmail(e.target.value)} />
          <textarea rows={3} value={message} onChange={(e) => setMessage(e.target.value)} />
          {error && <p className="error">{error}</p>}
          <button type="submit" className="button">
            <Send size={16} /> Contact {agent.name.split(' ')[0]}
          </button>
        </form>
      )}
    </div>
  )
}
