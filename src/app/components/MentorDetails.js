'use client'

import { FaLinkedin } from 'react-icons/fa'

export default function MentorDetails({ mentor }) {
  if (!mentor) {
    return <div>Mentor not found</div>
  }

  return (
    <div className="max-w-4xl mx-auto m-6 p-8 bg-white shadow-lg rounded-lg">
      <div className="flex items-center mb-8">
        <div className="w-16 h-16 bg-blue-500 rounded-full flex items-center justify-center text-white text-2xl font-bold mr-4">
          {mentor.name.split(' ').map(n => n[0]).join('')}
        </div>
        <div>
          <h1 className="text-3xl font-bold text-gray-800">{mentor.name}</h1>
          <p className="text-gray-600">{mentor.location}</p>
          <p className="text-sm text-gray-500">
            Email: {mentor.contact.email} | Phone: {mentor.contact.phone}
          </p>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
        <div className="bg-gray-100 p-4 rounded-lg">
          <h2 className="text-xl font-semibold text-blue-600 mb-2">Expertise</h2>
          <p>{mentor.expertise}</p>
        </div>
        <div className="bg-gray-100 p-4 rounded-lg">
          <h2 className="text-xl font-semibold text-blue-600 mb-2">Areas of Focus</h2>
          <div className="flex flex-wrap">
            {mentor.categories.map(category => (
              <span key={category} className="bg-blue-100 text-blue-800 text-sm px-3 py-1 rounded-full mr-2 mb-2">
                {category}
              </span>
            ))}
          </div>
        </div>
      </div>

      <div className="mb-8">
        <h2 className="text-2xl font-semibold text-blue-600 mb-4">Biography</h2>
        <div className="bg-gray-100 p-4 rounded-lg">
          <p>{mentor.biography}</p>
        </div>
      </div>

      <div className="mb-8">
        <h2 className="text-2xl font-semibold text-blue-600 mb-4">Achievements</h2>
        <div className="space-y-4">
          {mentor.achievements.map((achievement, index) => (
            <div key={index} className="bg-gray-100 p-4 rounded-lg">
              <p className="font-semibold">{achievement.title}</p>
              <p className="text-sm text-gray-600">{achievement.period}</p>
            </div>
          ))}
        </div>
      </div>

      <div className="mb-8">
        <h2 className="text-2xl font-semibold text-blue-600 mb-4">Experience</h2>
        <div className="space-y-4">
          {mentor.experience.map((exp, index) => (
            <div key={index} className="bg-gray-100 p-4 rounded-lg">
              <h3 className="text-lg font-semibold">{exp.role}</h3>
              <p className="text-gray-600">{exp.company}</p>
              <p className="text-sm text-gray-500">{exp.period}</p>
              <p className="mt-2">{exp.description}</p>
            </div>
          ))}
        </div>
      </div>

      <div className="mb-8">
        <h2 className="text-2xl font-semibold text-blue-600 mb-4">Education</h2>
        <div className="space-y-4">
          {mentor.education.map((edu, index) => (
            <div key={index} className="bg-gray-100 p-4 rounded-lg">
              <h3 className="text-lg font-semibold">{edu.degree}</h3>
              <p className="text-gray-600">{edu.institution}</p>
              <p className="text-sm text-gray-500">{edu.year}</p>
            </div>
          ))}
        </div>
      </div>

      <div className="mb-8">
        <h2 className="text-2xl font-semibold text-blue-600 mb-4">Contact</h2>
        <div className="bg-gray-100 p-4 rounded-lg">
          <p><strong>Email:</strong> {mentor.contact.email}</p>
          <p><strong>Phone:</strong> {mentor.contact.phone}</p>
          <a
            href={mentor.contact.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center text-blue-600 hover:underline"
          >
            <FaLinkedin className="mr-2" />
            LinkedIn Profile
          </a>
        </div>
      </div>

      <div className="text-center">
        <button className="bg-blue-600 text-white px-8 py-3 rounded-full font-semibold transform transition duration-500 hover:scale-110 hover:bg-blue-700">
          Request Mentorship
        </button>
      </div>
    </div>
  )
}