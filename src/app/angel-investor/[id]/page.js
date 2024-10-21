import AngelInvestorDetails from '@/app/components/AngelInvestorDetails'


const angelInvestors = [
  {
    id: 1,
    name: 'John Doe',
    location: 'San Francisco, CA, USA',
    investmentFocus: 'Investing in disruptive technologies across various sectors.',
    biography: 'John Doe has been an active angel investor for over 15 years, focusing on technology startups in Silicon Valley. He has played a crucial role in the early stages of several high-profile startups.',
    notableInvestments: [
      { name: 'TechSolutions', description: 'A leading provider of cloud-based solutions.', investment: '2M' },
      { name: 'HealthInnovate', description: 'Revolutionary health-tech company improving diagnostics.', investment: '1.5M' },
      { name: 'AI Analytics', description: 'Cutting-edge AI-powered analytics platform.', investment: '3M' },
    ],
    contact: {
      email: 'john.doe@example.com',
      phone: '123-456-7890',
      linkedin: 'https://www.linkedin.com/in/johndoe'
    },
    portfolioStats: {
      totalInvestments: 25,
      averageInvestment: '1.8M',
      successfulExits: 8
    }
  },
  // Add more angel investors here...
]

export default function AngelInvestorPage({ params }) {
  const investor = angelInvestors.find(i => i.id === parseInt(params.id))
  
  return <AngelInvestorDetails investor={investor} />
}