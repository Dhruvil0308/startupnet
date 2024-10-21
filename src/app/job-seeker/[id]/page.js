import JobSeekerDetails from '../../components/JobSeekerDetails'

const jobSeekers = [
  {
    id: 1,
    name: 'John Carter',
    location: 'Seattle, WA, USA',
    email: 'john.carter@example.com',
    phone: '123-456-7890',
    skills: ['JavaScript', 'React', 'Node.js', 'Python', 'SQL'],
    focus: 'Full-stack web development',
    experience: [
      {
        company: 'Tech Solutions Inc.',
        role: 'Senior Full-Stack Developer',
        period: '2018 - Present',
        description: 'Leading the development team and managing web development projects.'
      },
      {
        company: 'Web Innovate LLC',
        role: 'Web Developer',
        period: '2015 - 2018',
        description: 'Worked on various client projects, primarily using JavaScript and React.'
      }
    ],
    education: [
      {
        institution: 'State University',
        degree: 'Bachelor of Science in Computer Science',
        period: '2011 - 2015'
      }
    ]
  },
  // Add more job seekers here...
]

export default function JobSeekerPage({ params }) {
  const jobSeeker = jobSeekers.find(s => s.id === parseInt(params.id))
  
  return <JobSeekerDetails jobSeeker={jobSeeker} />
}