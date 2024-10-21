'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'

const menuItems = [
  { name: 'Explore Startups', path: '/explore-startups' },
  { name: 'Explore VCs', path: '/explore-vcs' },
  { name: 'Explore Angel Investors', path: '/explore-angel-investors' },
  { name: 'Explore Job Applicants', path: '/explore-job-applicants' },
  { name: 'Explore Mentors', path: '/explore-mentors' },
  { name: 'My Dashboard', path: '/my-dashboard' },
]

export default function Sidebar() {
  const pathname = usePathname()

  return (
    <aside className="w-64 bg-purple-600 text-white p-6">
      <nav>
        <ul>
          {menuItems.map((item) => (
            <li key={item.path} className="mb-4">
              <Link
                href={item.path}
                className={`block p-2 rounded hover:bg-purple-700 transition-colors ${
                  pathname === item.path ? 'bg-purple-800' : ''
                }`}
              >
                {item.name}
              </Link>
            </li>
          ))}
        </ul>
      </nav>
    </aside>
  )
}