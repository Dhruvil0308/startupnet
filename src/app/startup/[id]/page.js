import StartupDetails from "@/app/components/StartupDetails"

// This would typically come from an API or database
const startups = [
  {
    id: 1,
    name: 'TechGenix',
    location: 'San Francisco, CA, USA',
    description: 'TechGenix started with a clear vision to revolutionize AI in healthcare. With our cutting-edge solutions, we aim to transform patient care and streamline diagnoses.',
    mission: 'To leverage AI technology to improve healthcare outcomes worldwide.',
    products: [
      { name: 'HealthAI', description: 'An AI-powered diagnostic assistant for healthcare professionals.' },
      { name: 'PatientLink', description: 'A secure platform for patient data management and sharing.' }
    ],
    teamMembers: [
      { name: 'Dr. Emily Chen', role: 'CEO', description: 'Former neurosurgeon with 15 years of experience in healthcare technology.' },
      { name: 'Mike Ross', role: 'CTO', description: 'AI researcher with multiple patents in machine learning.' }
    ],
    testimonials: [
      { quote: 'TechGenixs HealthAI has significantly improved our diagnostic accuracy.', author: 'Dr. James Wilson, Chief of Medicine at SF General Hospital' },
      { quote: 'PatientLink has revolutionized how we manage and share patient data securely.', author: 'Sarah Thompson, Healthcare IT Director' }
    ],
    mediaUrls: ['/techgenix-1.jpg', '/techgenix-2.jpg', '/techgenix-3.jpg'],
    categories: ['HealthTech', 'AI', 'Innovation'],
    logo: 'T',
  },
  // ... other startup data ...
]

export default function StartupPage({ params }) {
  const startup = startups.find(s => s.id === parseInt(params.id))
  
  return <StartupDetails startup={startup} />
}