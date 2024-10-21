'use client'

import { useState, useEffect } from 'react'
import { FaLinkedin } from 'react-icons/fa'

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

export default function AngelInvestorDetails({ investor }) {
  if (!investor) {
    return <div>Investor not found</div>
  }

  return (
    <div className="max-w-4xl mx-auto p-8 m-6 bg-white shadow-lg rounded-lg">
      <h1 className="text-4xl font-bold text-center text-blue-600 mb-4">{investor.name}</h1>
      <p className="text-center text-gray-600 mb-8">{investor.location}</p>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold text-blue-600 mb-4">Investment Focus</h2>
        <p className="text-gray-700">{investor.investmentFocus}</p>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold text-blue-600 mb-4">Biography</h2>
        <p className="text-gray-700">{investor.biography}</p>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold text-blue-600 mb-4">Portfolio Statistics</h2>
        <div className="grid grid-cols-3 gap-4">
          <div className="text-center">
            <p className="text-2xl font-bold text-gray-800">
              <CountingNumber end={investor.portfolioStats.totalInvestments} duration={2000} />
            </p>
            <p className="text-gray-600">Total Investments</p>
          </div>
          <div className="text-center">
            <p className="text-2xl font-bold text-gray-800">
              $<CountingNumber end={parseFloat(investor.portfolioStats.averageInvestment)} duration={2000} />M
            </p>
            <p className="text-gray-600">Average Investment</p>
          </div>
          <div className="text-center">
            <p className="text-2xl font-bold text-gray-800">
              <CountingNumber end={investor.portfolioStats.successfulExits} duration={2000} />
            </p>
            <p className="text-gray-600">Successful Exits</p>
          </div>
        </div>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold text-blue-600 mb-4">Notable Investments</h2>
        <div className="space-y-4">
          {investor.notableInvestments.map((investment, index) => (
            <div key={index} className="bg-gray-100 p-4 rounded-lg">
              <h3 className="text-xl font-semibold text-gray-800 mb-2">{investment.name}</h3>
              <p className="text-gray-600 mb-2">{investment.description}</p>
              <p className="text-blue-600 font-semibold">Investment: ${investment.investment}</p>
            </div>
          ))}
        </div>
      </section>

      <section>
        <h2 className="text-2xl font-semibold text-blue-600 mb-4">Contact</h2>
        <div className="space-y-2">
          <p><strong>Email:</strong> {investor.contact.email}</p>
          <p><strong>Phone:</strong> {investor.contact.phone}</p>
          <a
            href={investor.contact.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center text-blue-600 hover:underline"
          >
            <FaLinkedin className="mr-2" />
            LinkedIn Profile
          </a>
        </div>
      </section>
    </div>
  )
}