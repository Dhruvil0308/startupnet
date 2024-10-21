import MentorDetails from '../../components/MentorDetails'

const mentors = [
  {
    id: 1,
    name: 'Alice Johnson',
    location: 'San Francisco, CA, USA',
    expertise: 'Empowering women in technology',
    biography: 'Alice Johnson has over 20 years of experience in tech, focusing on fostering inclusive environments for women in tech industries. She has led multiple initiatives to support women entrepreneurs.',
    achievements: [
      { title: 'Founded Women in Tech Incubator', period: '2015 - Present' },
      { title: 'Speaker at 20+ national conferences', period: '2010 - Present' },
      { title: 'Published 5+ papers on technology diversity', period: '2012 - 2020' },
    ],
    contact: {
      email: 'alice.johnson@example.com',
      phone: '123-456-7890',
      linkedin: 'https://www.linkedin.com/in/alicejohnson'
    },
    categories: ['Tech', 'Leadership', 'Startups'],
    experience: [
      {
        role: 'Chief Diversity Officer',
        company: 'TechInnovate Inc.',
        period: '2018 - Present',
        description: 'Leading diversity and inclusion initiatives across the company.'
      },
      {
        role: 'Founder',
        company: 'Women in Tech Mentorship Program',
        period: '2015 - Present',
        description: 'Created and manage a mentorship program connecting experienced women in tech with aspiring professionals.'
      }
    ],
    education: [
      {
        degree: 'Master of Business Administration',
        institution: 'Stanford University',
        year: '2005'
      },
      {
        degree: 'Bachelor of Science in Computer Science',
        institution: 'MIT',
        year: '2000'
      }
    ]
  },
  // Add more mentors here...
]

export default function MentorPage({ params }) {
  const mentor = mentors.find(m => m.id === parseInt(params.id))
  
  return <MentorDetails mentor={mentor} />
}