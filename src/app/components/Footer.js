import React from 'react';
import Link from 'next/link';
import { FaFacebookF, FaTwitter, FaInstagram } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="bg-gray-100 pt-12 pb-6 px-4 ">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-8">
        <div>
          <h3 className="font-bold text-lg mb-4">ABOUT STARTUPNET</h3>
          <ul className="space-y-2">
            <li><Link href="/about" className="text-gray-600 hover:text-blue-600">About</Link></li>
            <li><Link href="/contact" className="text-gray-600 hover:text-blue-600">Contact Us</Link></li>
            <li><Link href="/brand" className="text-gray-600 hover:text-blue-600">Branding Guidelines</Link></li>
            <li><Link href="/values" className="text-gray-600 hover:text-blue-600">Community Values</Link></li>
          </ul>
        </div>
        <div>
          <h3 className="font-bold text-lg mb-4">DISCOVER EVENTS</h3>
          <ul className="space-y-2">
            <li><Link href="/events/pitch-competitions" className="text-gray-600 hover:text-blue-600">Pitch Competitions</Link></li>
            <li><Link href="/events/startup-weekends" className="text-gray-600 hover:text-blue-600">Startup Weekends</Link></li>
            <li><Link href="/events/networking" className="text-gray-600 hover:text-blue-600">Networking Events</Link></li>
            <li><Link href="/events/host" className="text-gray-600 hover:text-blue-600">Host an Event</Link></li>
          </ul>
        </div>
        <div>
          <h3 className="font-bold text-lg mb-4">STARTUP NETWORK</h3>
          <ul className="space-y-2">
            <li><Link href="/network/investors" className="text-gray-600 hover:text-blue-600">Connect with Investors</Link></li>
            <li><Link href="/network/mentors" className="text-gray-600 hover:text-blue-600">Find Mentors</Link></li>
            <li><Link href="/network/incubators" className="text-gray-600 hover:text-blue-600">Incubator Programs</Link></li>
          </ul>
          <h3 className="font-bold text-lg mt-6 mb-4">PARTNERS</h3>
          <ul className="space-y-2">
            <li><Link href="/partners" className="text-gray-600 hover:text-blue-600">Become a Partner</Link></li>
          </ul>
        </div>
        <div>
          <h3 className="font-bold text-lg mb-4">RESOURCES</h3>
          <ul className="space-y-2">
            <li><Link href="/resources/faq" className="text-gray-600 hover:text-blue-600">FAQ</Link></li>
            <li><Link href="/resources/startup-guide" className="text-gray-600 hover:text-blue-600">Startup Guide</Link></li>
            <li><Link href="/resources/mentorship" className="text-gray-600 hover:text-blue-600">Become a Mentor</Link></li>
            <li><Link href="/resources/investor-guide" className="text-gray-600 hover:text-blue-600">Investor Guide</Link></li>
            <li><Link href="/resources/accelerator-guide" className="text-gray-600 hover:text-blue-600">Accelerator Guide</Link></li>
            <li><Link href="/resources/founder-guide" className="text-gray-600 hover:text-blue-600">Founder Guide</Link></li>
          </ul>
        </div>
      </div>
      <div className="max-w-7xl mx-auto mt-8 pt-8 border-t border-gray-300">
        <div className="flex justify-between items-center">
          <p className="text-sm text-gray-600">
            StartupNet © 2024 - The Global Startup Community Network
          </p>
          <div className="flex space-x-4">
            <a href="https://facebook.com/startupnet" className="text-gray-600 hover:text-blue-600">
              <FaFacebookF size={20} />
            </a>
            <a href="https://twitter.com/startupnet" className="text-gray-600 hover:text-blue-600">
              <FaTwitter size={20} />
            </a>
            <a href="https://instagram.com/startupnet" className="text-gray-600 hover:text-blue-600">
              <FaInstagram size={20} />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;