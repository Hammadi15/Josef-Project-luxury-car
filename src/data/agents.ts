import type { Agent } from '../types'

// Made-up agents. Phone numbers use 555-01xx, which is kept for examples.
export const agents: Agent[] = [
  {
    id: 'sofia',
    name: 'Sofia Lind',
    title: 'Senior sales agent',
    phone: '+1 555 0101',
    email: 'sofia@supercarcompany.example',
    languages: ['English', 'Swedish'],
    bio: 'Has sold over 120 hypercars and knows every Koenigsegg by heart.',
  },
  {
    id: 'marcus',
    name: 'Marcus Berg',
    title: 'Track car specialist',
    phone: '+1 555 0102',
    email: 'marcus@supercarcompany.example',
    languages: ['English', 'German'],
    bio: 'Former race engineer. Helps you pick the right car for the track.',
  },
  {
    id: 'layla',
    name: 'Layla Haddad',
    title: 'Finance agent',
    phone: '+1 555 0103',
    email: 'layla@supercarcompany.example',
    languages: ['English', 'Arabic', 'French'],
    bio: 'Builds payment plans that fit your budget, down to the decimal.',
  },
  {
    id: 'noah',
    name: 'Noah Karlsson',
    title: 'Delivery and service',
    phone: '+1 555 0104',
    email: 'noah@supercarcompany.example',
    languages: ['English', 'Swedish'],
    bio: 'Makes sure your car arrives safely, anywhere in the world.',
  },
]

export function findAgent(id: string): Agent | undefined {
  return agents.find((agent) => agent.id === id)
}
