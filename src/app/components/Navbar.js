'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'

const menuItems = [
  { name: 'Explore Startups', path: '/explore-startups' },
  { name: 'Explore VCs', path: '/explore-vcs' },
  { name: 'Explore Angel Investors', path: '/explore-angel-investors' },
  { name: 'Explore Job Applicants', path: '/explore-job-applicants' },
  { name: 'Explore Mentors', path: '/explore-mentors' },
  // { name: 'My Dashboard', path: '/my-dashboard' },
]

export default function Navbar() {
  const pathname = usePathname()

  return (
    <nav className="bg-blue-700 text-white">
      <div className="container mx-auto">
        <div className="flex items-center justify-between py-4">
          <Link href="/" className="text-3xl font-bold">StartupNet</Link>
          <div className="hidden md:flex space-x-4">
            {menuItems.map((item) => (
              <Link
                key={item.path}
                href={item.path}
                className={`hover:bg-blue-600 px-3 py-2 rounded transition-colors ${
                  pathname === item.path ? 'bg-blue-800' : ''
                }`}
              >
                {item.name}
              </Link>
            ))}
          </div>
          <div className="md:hidden">
            {/* Mobile menu button */}
            <button className="text-white focus:outline-none">
              <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </button>
          </div>
        </div>
      </div>
      {/* Mobile menu (hidden by default) */}
      <div className="md:hidden hidden">
        {menuItems.map((item) => (
          <Link
            key={item.path}
            href={item.path}
            className={`block px-4 py-2 hover:bg-purple-700 ${
              pathname === item.path ? 'bg-purple-800' : ''
            }`}
          >
            {item.name}
          </Link>
        ))}
      </div>
    </nav>
  )
}