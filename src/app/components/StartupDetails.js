'use client'

import Image from 'next/image'

export default function StartupDetails({ startup }) {
  if (!startup) {
    return <div>Startup not found</div>
  }

  const getInitials = (name) => {
    return name.split(' ').map(n => n[0]).join('').toUpperCase();
  };

  return (
    <div className="max-w-3xl mx-auto m-6 p-8 bg-white shadow-lg rounded-xl">
      <div className="flex items-center mb-8">
        <div className="w-20 h-20 bg-blue-500 rounded-full flex items-center justify-center text-white text-3xl font-bold mr-6">
          {startup.logo || getInitials(startup.name)}
        </div>
        <div>
          <h1 className="text-3xl font-bold text-gray-800">{startup.name}</h1>
          <p className="text-gray-600">{startup.location}</p>
          <p className="text-sm text-gray-500">
            Email: info@{startup.name.toLowerCase().replace(' ', '')}.com | Phone: (555) 123-4567
          </p>
        </div>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
        <div className="bg-gray-100 rounded-lg p-4">
          <h2 className="text-xl font-semibold text-blue-600 mb-2">Expertise</h2>
          <p className="text-gray-700">{startup.description}</p>
        </div>
        <div className="bg-gray-100 rounded-lg p-4">
          <h2 className="text-xl font-semibold text-blue-600 mb-2">Areas of Focus</h2>
          <div className="flex flex-wrap gap-2">
            {startup.categories.map((category, index) => (
              <span key={index} className="bg-blue-100 text-blue-800 text-sm px-3 py-1 rounded-full">
                {category}
              </span>
            ))}
          </div>
        </div>
      </div>

      <div className="bg-gray-100 rounded-lg p-4 mb-8">
        <h2 className="text-xl font-semibold text-blue-600 mb-2">Mission</h2>
        <p className="text-gray-700">{startup.mission}</p>
      </div>

      <div>
        <h2 className="text-xl font-semibold text-blue-600 mb-4">Products</h2>
        {startup.products.map((product, index) => (
          <div key={index} className="bg-gray-100 rounded-lg p-4 mb-4 last:mb-0">
            <h3 className="text-lg font-semibold text-gray-800">{product.name}</h3>
            <p className="text-gray-600">{product.description}</p>
          </div>
        ))}
      </div>

      <div className="mt-8">
        <h2 className="text-xl font-semibold text-blue-600 mb-4">Key Team Members</h2>
        {startup.teamMembers.map((member, index) => (
          <div key={index} className="bg-gray-100 rounded-lg p-4 mb-4 last:mb-0">
            <h3 className="text-lg font-semibold text-gray-800">{member.name} - {member.role}</h3>
            <p className="text-gray-600">{member.description}</p>
          </div>
        ))}
      </div>

      <div className="mt-8">
        <h2 className="text-xl font-semibold text-blue-600 mb-4">Customer Testimonials</h2>
        {startup.testimonials.map((testimonial, index) => (
          <div key={index} className="bg-gray-100 rounded-lg p-4 mb-4 last:mb-0">
            <p className="text-gray-700 italic mb-2">"{testimonial.quote}"</p>
            <p className="text-right text-gray-600">— {testimonial.author}</p>
          </div>
        ))}
      </div>

      <div className="mt-8 text-center">
        <button className="bg-blue-600 text-white px-8 py-3 rounded-full font-semibold hover:bg-blue-700 transition duration-300">
          Contact {startup.name}
        </button>
      </div>
    </div>
  )
}