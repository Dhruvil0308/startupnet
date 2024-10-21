import VCDetails from '@/app/components/VCDetails'

const vcs = [
    {
      id: 1,
      name: 'TechVentures Capital',
      location: 'San Francisco, CA, USA',
      foundedYear: 2005,
      overview: {
        totalInvestment: 5.2,
        companiesInvested: 312,
        successfulExits: 47,
        averageInvestment: 10
      },
      notableInvestments: [
        { name: 'AI Solutions Inc.', description: 'Leading AI research and development company.' },
        { name: 'BlockChain Innovations', description: 'Pioneering blockchain solutions for finance.' },
        { name: 'CloudTech Solutions', description: 'Innovative cloud computing services.' }
      ],
      teamMembers: [
        { name: 'John Smith', role: 'Managing Partner', description: '20+ years in tech investment' },
        { name: 'Sarah Johnson', role: 'Partner', description: 'Former CTO of a Fortune 500 company' }
      ],
      focusAreas: ['Artificial Intelligence', 'Blockchain', 'Cloud Computing', 'Fintech'],
      investmentProcess: [
        'Initial Screening',
        'Due Diligence',
        'Investment Committee Review',
        'Term Sheet Negotiation',
        'Closing and Funding'
      ]
    },
    // Add more VCs here...
  ]

export default function VCPage({ params }) {
  const vc = vcs.find(v => v.id === parseInt(params.id))
  
  return <VCDetails vc={vc} />
}