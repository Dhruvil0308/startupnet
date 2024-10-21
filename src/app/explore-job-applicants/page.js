'use client'

import { useState } from 'react'
import Link from 'next/link'

const jobSeekers = [
  {
    id: 1,
    name: 'John Carter',
    location: 'Seattle, WA, USA',
    description: 'Software Developer specializing in full-stack web development.',
    skills: ['Full-Stack', 'Web Dev', 'React'],
    initials: 'JC',
  },
  {
    id: 2,
    name: 'Emily Zhao',
    location: 'Boston, MA, USA',
    description: 'Data Scientist with expertise in machine learning and big data.',
    skills: ['Data Science', 'Machine Learning', 'Big Data'],
    initials: 'EZ',
  },
  {
    id: 3,
    name: 'Michael Brown',
    location: 'San Diego, CA, USA',
    description: 'Project Manager with a track record in software project delivery.',
    skills: ['Project Management', 'Agile', 'Scrum'],
    initials: 'MB',
  },
]

const categories = [
  { name: 'Software Development', count: 150 },
  { name: 'Data Science', count: 100 },
  { name: 'Product Management', count: 70 },
  { name: 'Design', count: 85 },
  { name: 'Project Management', count: 65 },
  { name: 'QA & Testing', count: 50 },
]

const locations = ['All Locations', 'Seattle, WA, USA', 'Boston, MA, USA', 'San Diego, CA, USA']

export default function ExploreJobSeekers() {
  const [searchTerm, setSearchTerm] = useState('')
  const [selectedLocation, setSelectedLocation] = useState('All Locations')
  const [selectedCategories, setSelectedCategories] = useState([])

  const filteredJobSeekers = jobSeekers.filter(seeker => {
    const matchesSearch = seeker.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                          seeker.description.toLowerCase().includes(searchTerm.toLowerCase())
    const matchesLocation = selectedLocation === 'All Locations' || seeker.location === selectedLocation
    const matchesCategories = selectedCategories.length === 0 || 
                              selectedCategories.some(cat => seeker.skills.includes(cat))
    return matchesSearch && matchesLocation && matchesCategories
  })

  const handleCategoryChange = (category) => {
    setSelectedCategories(prev => 
      prev.includes(category) ? prev.filter(c => c !== category) : [...prev, category]
    )
  }

  return (
    <div className="flex m-4">
      {/* Filters */}
      <div className="w-64 p-4 bg-slate-50 border-r border-gray-200 min-h-screen">
        <h2 className="text-xl font-bold mb-6 text-indigo-600">Filters</h2>
        <div className="mb-6">
          <h3 className="font-semibold mb-4 text-gray-700">Categories</h3>
          {categories.map(category => (
            <div key={category.name} className="flex items-center mb-3">
              <input
                type="checkbox"
                id={category.name}
                checked={selectedCategories.includes(category.name)}
                onChange={() => handleCategoryChange(category.name)}
                className="mr-2 form-checkbox h-4 w-4 text-indigo-600 transition duration-150 ease-in-out"
              />
              <label htmlFor={category.name} className="text-gray-700 hover:text-indigo-600 cursor-pointer">
                {category.name} <span className="text-gray-500">({category.count})</span>
              </label>
            </div>
          ))}
        </div>
      </div>

      {/* Main content */}
      <div className="flex-1 p-4">
        <h1 className="text-3xl font-bold mb-6 text-blue-600">Explore Job Seekers</h1>
        
        {/* Search and Location */}
        <div className="flex mb-4">
          <input
            type="text"
            placeholder="Search job seekers..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="flex-grow p-2 border rounded-l"
          />
          <select
            value={selectedLocation}
            onChange={(e) => setSelectedLocation(e.target.value)}
            className="p-2 border rounded-r"
          >
            {locations.map(location => (
              <option key={location} value={location}>{location}</option>
            ))}
          </select>
        </div>

        <p className="mb-4">Showing {filteredJobSeekers.length} of {jobSeekers.length}+ Job Seekers</p>

        {/* Job Seekers Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {filteredJobSeekers.map(seeker => (
            <Link href={`/job-seeker/${seeker.id}`} key={seeker.id}>
              <div className="bg-white rounded-lg shadow-lg overflow-hidden transform transition duration-300 hover:scale-105 hover:shadow-xl">
                <div className="p-4">
                  <div className="w-12 h-12 bg-purple-100 rounded-full flex items-center justify-center text-purple-500 font-bold text-xl mb-3">
                    {seeker.initials}
                  </div>
                  <h2 className="text-xl font-semibold mb-2 ">{seeker.name}</h2>
                  <p className="text-gray-600 text-sm mb-2">{seeker.location}</p>
                  <p className="text-gray-800 mb-4">{seeker.description}</p>
                  <div className="flex flex-wrap">
                    {seeker.skills.map(skill => (
                      <span key={skill} className="bg-purple-100 text-purple-800 text-xs px-2 py-1 rounded-full mr-2 mb-2">
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  )
}