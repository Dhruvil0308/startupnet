'use client'

export default function JobSeekerDetails({ jobSeeker }) {
  if (!jobSeeker) {
    return <div>Job seeker not found</div>
  }

  return (
    <div className="max-w-4xl mx-auto p-8 m-6 bg-white shadow-lg rounded-lg">
      <div className="flex items-center mb-8">
        <div className="w-16 h-16 bg-blue-500 rounded-full flex items-center justify-center text-white text-2xl font-bold mr-4">
          {jobSeeker.name.split(' ').map(n => n[0]).join('')}
        </div>
        <div>
          <h1 className="text-3xl font-bold text-gray-800">{jobSeeker.name}</h1>
          <p className="text-gray-600">{jobSeeker.location}</p>
          <p className="text-sm text-gray-500">
            Email: {jobSeeker.email} | Phone: {jobSeeker.phone}
          </p>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
        <div className="bg-gray-100 p-4 rounded-lg">
          <h2 className="text-xl font-semibold text-blue-600 mb-2">Skills</h2>
          <p>{jobSeeker.skills.join(', ')}</p>
        </div>
        <div className="bg-gray-100 p-4 rounded-lg">
          <h2 className="text-xl font-semibold text-blue-600 mb-2">Focus</h2>
          <p>{jobSeeker.focus}</p>
        </div>
      </div>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold text-blue-600 mb-4">Experience</h2>
        <div className="space-y-4">
          {jobSeeker.experience.map((exp, index) => (
            <div key={index} className="bg-gray-100 p-4 rounded-lg">
              <h3 className="text-lg font-semibold">{exp.role}</h3>
              <p className="text-gray-600">{exp.company}</p>
              <p className="text-sm text-gray-500">{exp.period}</p>
              <p className="mt-2">{exp.description}</p>
            </div>
          ))}
        </div>
      </section>

      <section>
        <h2 className="text-2xl font-semibold text-blue-600 mb-4">Education</h2>
        <div className="space-y-4">
          {jobSeeker.education.map((edu, index) => (
            <div key={index} className="bg-gray-100 p-4 rounded-lg">
              <h3 className="text-lg font-semibold">{edu.degree}</h3>
              <p className="text-gray-600">{edu.institution}</p>
              <p className="text-sm text-gray-500">{edu.period}</p>
            </div>
          ))}
        </div>
      </section>
    </div>
  )
}