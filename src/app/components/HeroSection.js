'use client';
import React, { useEffect, useState } from 'react';
import Image from 'next/image';
import { SiTheboringcompany } from "react-icons/si";
import { BiLogoSlack } from "react-icons/bi";
import { BiLogoSquarespace } from "react-icons/bi";
import { BiLogoSpringBoot } from "react-icons/bi";
import { BiLogoSketch } from "react-icons/bi";



const HeroSection = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);


  const icons = [
    <SiTheboringcompany className='w-24 h-10 opacity-60' key="sass" />,
    <BiLogoSlack className='w-24 h-8 opacity-60' key="react" />,
    <BiLogoSquarespace className='w-24 h-8 opacity-60' key="javascript" />,
    <BiLogoSpringBoot className='w-24 h-8 opacity-60' key="python" />,
    <BiLogoSketch className='w-24 h-8 opacity-60' key="nodejs" />
  ];

  return (
    <div className="bg-white">
      <div className="container mx-auto px-4 py-8">
        <div className="flex flex-col md:flex-row items-center">
          <div className="md:w-1/2 mb-8 md:mb-0">
            <div className={`transition-all duration-800 ease-out ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'}`}>
              <h1 className="text-5xl font-bold mb-4">
                <span className="text-blue-600">Great Founders Start</span>
                <br />
                <span className="text-gray-800">Here</span>
              </h1>
              <p className="text-gray-600 mb-6">
                StartupNet is the world's most proven network to turn ideas into fundable startups, and startups into global businesses.
              </p>
              <button className="bg-blue-600 text-white px-6 py-3 rounded-full font-semibold hover:bg-blue-700 transition duration-300">
                Apply to StartupNet
              </button>
            </div>
          </div>
          <div className="md:w-1/2 relative">
            <div className="w-full h-96 bg-blue-200 rounded-lg overflow-hidden">
              <Image
                src="/heroSec1.webp"
                alt="Successful Founders"
                layout="fill"
                objectFit="cover"
              />
            </div>
            
          </div>
        </div>
      </div>
      <div className={`py-4 overflow-hidden transition-opacity duration-500 ${isVisible ? 'opacity-100' : 'opacity-0'}`}>
        <div className="flex whitespace-nowrap animate-marquee">
          {[...Array(20)].map((_, index) => (
            <div key={index} className="inline-block mx-8">
              <div className="w-32 h-8 bg-gray-300 rounded flex justify-center items-center">
                  {icons[index % icons.length]}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default HeroSection;