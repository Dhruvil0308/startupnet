'use client'

import { useState } from 'react'
import Link from 'next/link'

const angelInvestors = [
  {
    id: 1,
    name: 'John Doe',
    location: 'San Francisco, CA, USA',
    description: 'Investing in disruptive technologies and innovative startups.',
    categories: ['AI', 'BLOCKCHAIN', 'SERIES A'],
    initials: 'JD',
  },
  {
    id: 2,
    name: 'Jane Smith',
    location: 'New York, NY, USA',
    description: 'Focused on sustainable and eco-friendly technology investments.',
    categories: ['CLEANTECH', 'B2B', 'SEED STAGE'],
    initials: 'JS',
  },
  {
    id: 3,
    name: 'Bob Johnson',
    location: 'Boston, MA, USA',
    description: 'Specializing in healthcare and biotech investment opportunities.',
    categories: ['HEALTHTECH', 'B2C', 'SERIES B'],
    initials: 'BJ',
  },
]

const categories = [
  { name: 'Early Stage', count: 81 },
  { name: 'Series A', count: 14 },
  { name: 'Growth Stage', count: 34 },
  { name: 'Tech Focus', count: 182 },
  { name: 'Impact Investing', count: 132 },
  { name: 'Healthcare', count: 94 },
]

const locations = ['All Locations', 'San Francisco, CA, USA', 'New York, NY, USA', 'Boston, MA, USA']

export default function ExploreAngelInvestors() {
  const [searchTerm, setSearchTerm] = useState('')
  const [selectedLocation, setSelectedLocation] = useState('All Locations')
  const [selectedCategories, setSelectedCategories] = useState([])

  const filteredInvestors = angelInvestors.filter(investor => {
    const matchesSearch = investor.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                          investor.description.toLowerCase().includes(searchTerm.toLowerCase())
    const matchesLocation = selectedLocation === 'All Locations' || investor.location === selectedLocation
    const matchesCategories = selectedCategories.length === 0 || 
                              selectedCategories.some(cat => investor.categories.includes(cat.toUpperCase()))
    return matchesSearch && matchesLocation && matchesCategories
  })

  const handleCategoryChange = (category) => {
    setSelectedCategories(prev => 
      prev.includes(category) ? prev.filter(c => c !== category) : [...prev, category]
    )
  }

  return (
    <div className="flex bg-slate-100 m-4">
      {/* Filters */}
      <div className="w-64 p-4 bg-slate-50 border-r border-gray-200 min-h-screen ">
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
      <div className="flex-1 p-4 bg-white">
        <h1 className="text-3xl font-bold mb-6 text-blue-600">Explore Angel Investors</h1>
        
        {/* Search and Location */}
        <div className="flex mb-4">
          <input
            type="text"
            placeholder="Search angel investors..."
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

        <p className="mb-4">Showing {filteredInvestors.length} of {angelInvestors.length}+ Angel Investors</p>

        {/* Angel Investors Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {filteredInvestors.map(investor => (
            <Link href={`/angel-investor/${investor.id}`} key={investor.id}>
              <div className="bg-white rounded-lg shadow-lg overflow-hidden transform transition duration-300 hover:scale-105 hover:shadow-xl">
                <div className="p-4">
                  <div className="w-12 h-12 bg-purple-100 rounded-full flex items-center justify-center text-purple-500 font-bold text-xl mb-3">
                    {investor.initials}
                  </div>
                  <h2 className="text-xl font-semibold mb-2 ">{investor.name}</h2>
                  <p className="text-gray-600 text-sm mb-2">{investor.location}</p>
                  <p className="text-gray-800 mb-4">{investor.description}</p>
                  <div className="flex flex-wrap">
                    {investor.categories.map(category => (
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