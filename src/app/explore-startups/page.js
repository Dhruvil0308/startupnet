'use client'

import { useState } from 'react'
import Link from 'next/link'

// This would typically come from an API or database
const startups = [
  {
    id: 1,
    name: 'TechGenix',
    location: 'San Francisco, CA, USA',
    description: 'Revolutionizing AI in healthcare.',
    categories: ['HealthTech', 'AI', 'Innovation'],
    logo: 'T',
  },
  {
    id: 2,
    name: 'EcoDrive',
    location: 'Austin, TX, USA',
    description: 'Sustainable energy solutions for electric vehicles.',
    categories: ['CleanTech', 'Automotive', 'Sustainability'],
    logo: 'E',
  },
  {
    id: 3,
    name: 'DataSecure',
    location: 'New York, NY, USA',
    description: 'Advanced cybersecurity solutions.',
    categories: ['Cybersecurity', 'B2B', 'AI'],
    logo: 'D',
  },
]

const categories = [
  { name: 'Tech', count: 200 },
  { name: 'HealthTech', count: 80 },
  { name: 'CleanTech', count: 60 },
  { name: 'Cybersecurity', count: 90 },
  { name: 'Fintech', count: 75 },
  { name: 'AI', count: 150 },
]

const locations = ['All Locations', 'San Francisco, CA, USA', 'Austin, TX, USA', 'New York, NY, USA']

export default function ExploreStartups() {
  const [searchTerm, setSearchTerm] = useState('')
  const [selectedLocation, setSelectedLocation] = useState('All Locations')
  const [selectedCategories, setSelectedCategories] = useState([])

  const filteredStartups = startups.filter(startup => {
    const matchesSearch = startup.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                          startup.description.toLowerCase().includes(searchTerm.toLowerCase())
    const matchesLocation = selectedLocation === 'All Locations' || startup.location === selectedLocation
    const matchesCategories = selectedCategories.length === 0 || 
                              selectedCategories.some(cat => startup.categories.includes(cat))
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
        <div className='mb-6'>
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
            <label htmlFor={category.name}>{category.name} ({category.count})</label>
          </div>
        ))}
        </div>
      </div>

      {/* Main content */}
      <div className="flex-1 p-4">
        <h1 className="text-3xl font-bold mb-6 text-blue-600">Explore Startups</h1>
        
        {/* Search and Location */}
        <div className="flex mb-4">
          <input
            type="text"
            placeholder="Search startups..."
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

        <p className="mb-4">Showing {filteredStartups.length} of {startups.length}+ Startups</p>

        {/* Startups Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {filteredStartups.map(startup => (
            <Link href={`/startup/${startup.id}`} key={startup.id} className="block h-full">
              <div className="bg-white rounded-lg shadow-lg overflow-hidden transform transition duration-300 hover:scale-105 hover:shadow-xl h-full flex flex-col">
                <div className="p-4 flex flex-col flex-grow">
                  <div className="w-12 h-12 bg-purple-100 rounded-full flex items-center justify-center text-purple-500 font-bold text-xl mb-3">
                    {startup.logo}
                  </div>
                  <h2 className="text-xl font-semibold mb-2">{startup.name}</h2>
                  <p className="text-gray-600 text-sm mb-2">{startup.location}</p>
                  <p className="text-gray-800 mb-4 flex-grow">{startup.description}</p>
                  <div className="flex flex-wrap mt-auto">
                    {startup.categories.map(category => (
                      <span key={category} className="bg-purple-100 text-purple-800 text-xs px-2 py-1 rounded-full mr-2 mb-2">
                        {category}
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