import type { Agent } from '../types'

// Our team of 3. Phone numbers use 555-01xx and emails use .example, so they are pretend contact details.
export const agents: Agent[] = [
  {
    id: 'josef',
    name: 'Josef',
    title: 'General Manager and Head of Sales',
    phone: '+1 555 0101',
    email: 'josef@supercarcompany.example',
    task: 'Price × cars sold · Earnings × profit rate',
    bio: 'Leads the company and the sales team. Josef handles our rarest hypercars and makes sure every deal adds up.',
    lead: true,
  },
  {
    id: 'shawqi',
    name: 'Shawqi',
    title: 'Finance Advisor',
    phone: '+1 555 0102',
    email: 'shawqi@supercarcompany.example',
    task: 'Price ÷ years = payment per year',
    bio: 'Builds payment plans that fit your budget, down to the last decimal.',
  },
  {
    id: 'mohammed',
    name: 'Mohammed',
    title: 'Performance Engineer',
    phone: '+1 555 0103',
    email: 'mohammed@supercarcompany.example',
    task: 'Miles ÷ gallons = miles per gallon',
    bio: 'Tests every car on the track and knows its speed, power, and fuel use by heart.',
  },
]

export function findAgent(id: string): Agent | undefined {
  return agents.find((agent) => agent.id === id)
}
