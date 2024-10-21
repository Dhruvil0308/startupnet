'use client'

import { useState, useEffect } from 'react'
import { Link, Element, animateScroll as scroll, scrollSpy } from 'react-scroll'

const CountingNumber = ({ end, duration }) => {
  const [count, setCount] = useState(0)

  useEffect(() => {
    let start = 0;
    const increment = end / (duration / 16)
    const timer = setInterval(() => {
      start += increment
      setCount(Math.floor(start))
      if (start >= end) {
        clearInterval(timer)
        setCount(end)
      }
    }, 16)

    return () => clearInterval(timer)
  }, [end, duration])

  return <span>{count.toLocaleString()}</span>
}

const sections = ['Overview', 'Investments', 'Team', 'Approach']

export default function VCDetails({ vc }) {
  const [activeSection, setActiveSection] = useState(sections[0])

  useEffect(() => {
    scrollSpy.update()
  }, [])

  if (!vc) {
    return <div>VC not found</div>
  }

  return (
    <div className="max-w-6xl mx-auto m-6 bg-white">
      <div className="p-6 flex items-center border-b">
        <div className="w-16 h-16 bg-blue-500 rounded-lg flex items-center justify-center text-white text-2xl font-bold mr-4">
          {vc.name.slice(0, 2)}
        </div>
        <div>
          <h1 className="text-3xl font-bold text-gray-800">{vc.name}</h1>
          <p className="text-gray-600">{vc.location} • Founded in {vc.foundedYear}</p>
        </div>
      </div>
      
      <nav className="border-b">
        <div className="max-w-6xl mx-auto px-6 flex">
          {sections.map((section) => (
            <Link
              key={section}
              to={section}
              spy={true}
              smooth={true}
              duration={500}
              onSetActive={() => setActiveSection(section)}
              className={`px-4 py-4 text-lg font-medium cursor-pointer transition-colors duration-300 ${
                activeSection === section ? 'text-blue-500 border-b-2 border-blue-500' : 'text-gray-600 hover:text-blue-500'
              }`}
            >
              {section}
            </Link>
          ))}
        </div>
      </nav>

      <div className="px-6">
        <Element name="Overview" className="py-12">
          <h2 className="text-3xl font-semibold text-gray-800 mb-8">Overview</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <div className="text-center bg-white p-6 rounded-lg shadow-md">
              <p className="text-gray-600">Total Investment</p>
              <p className="text-3xl font-bold text-blue-600">
                $<CountingNumber end={parseFloat(vc.overview.totalInvestment)} duration={2000} />B
              </p>
            </div>
            <div className="text-center bg-white p-6 rounded-lg shadow-md">
              <p className="text-gray-600">Companies Invested</p>
              <p className="text-3xl font-bold text-blue-600">
                <CountingNumber end={vc.overview.companiesInvested} duration={2000} />
              </p>
            </div>
            <div className="text-center bg-white p-6 rounded-lg shadow-md">
              <p className="text-gray-600">Successful Exits</p>
              <p className="text-3xl font-bold text-blue-600">
                <CountingNumber end={vc.overview.successfulExits} duration={2000} />
              </p>
            </div>
            <div className="text-center bg-white p-6 rounded-lg shadow-md">
              <p className="text-gray-600">Average Investment</p>
              <p className="text-3xl font-bold text-blue-600">
                $<CountingNumber end={parseFloat(vc.overview.averageInvestment)} duration={2000} />M
              </p>
            </div>
          </div>
        </Element>

        <Element name="Investments" className="py-12">
          <h2 className="text-3xl font-semibold text-gray-800 mb-8">Investments</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {vc.notableInvestments.map((investment, index) => (
              <div key={index} className="bg-white rounded-lg p-6 shadow-md">
                <h3 className="text-xl font-semibold text-blue-600 mb-2">{investment.name}</h3>
                <p className="text-gray-600">{investment.description}</p>
              </div>
            ))}
          </div>
        </Element>

        <Element name="Team" className="py-12">
          <h2 className="text-3xl font-semibold text-gray-800 mb-8">Team</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {vc.teamMembers.map((member, index) => (
              <div key={index} className="bg-white rounded-lg p-6 shadow-md">
                <h3 className="text-xl font-semibold text-blue-600">{member.name}</h3>
                <p className="text-gray-600">{member.role}</p>
                <p className="text-gray-700 mt-2">{member.description}</p>
              </div>
            ))}
          </div>
        </Element>

        <Element name="Approach" className="py-12">
          <h2 className="text-3xl font-semibold text-gray-800 mb-8">Investment Approach</h2>
          <div className="bg-white rounded-lg p-6 shadow-md">
            <h3 className="text-xl font-semibold text-blue-600 mb-4">Focus Areas</h3>
            <ul className="list-disc list-inside mb-6">
              {vc.focusAreas.map((area, index) => (
                <li key={index} className="text-gray-700 mb-2">{area}</li>
              ))}
            </ul>
            <h3 className="text-xl font-semibold text-blue-600 mb-4">Investment Process</h3>
            <ol className="list-decimal list-inside">
              {vc.investmentProcess.map((step, index) => (
                <li key={index} className="text-gray-700 mb-2">{step}</li>
              ))}
            </ol>
          </div>
        </Element>
      </div>

      <div className="text-center py-12">
        <button className="bg-blue-600 text-white px-8 py-3 rounded-full font-semibold transform transition duration-500 hover:scale-110 hover:bg-blue-700">
          Contact {vc.name}
        </button>
      </div>
    </div>
  )
}