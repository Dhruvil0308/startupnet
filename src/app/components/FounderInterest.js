import React from 'react';
import Image from 'next/image';

const FoundersInterests = () => {
  const interests = [
    "We don't take a board seat.",
    "We don't take weeks/months to decide to invest.",
    "We don't require decks, business plans, or MBAs.",
    "We don't demand 20% of your company.",
    "We don't charge fees.",
    "We don't tell you what to do. We only offer advice."
  ];

  return (
    <div className="bg-[#f5f3ef] py-16 px-4 m-6">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl font-bold text-center mb-8">
          We put <span className="text-blue-600">founders' interests</span> first.
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
          {interests.map((interest, index) => (
            <div key={index} className="flex items-start">
              <div className="text-blue-600 mr-2">•</div>
              <p className="text-gray-700">{interest}</p>
            </div>
          ))}
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {['/heroSec.jpg', '/heroSec.jpg', '/heroSec.jpg'].map((src, index) => (
            <div key={index} className="rounded-lg overflow-hidden shadow-lg">
              <Image 
                src={src} 
                alt={`Founder image ${index + 1}`} 
                width={400} 
                height={300} 
                layout="responsive"
                objectFit="cover"
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default FoundersInterests;