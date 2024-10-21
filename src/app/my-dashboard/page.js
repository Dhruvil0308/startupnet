'use client';

import React, { useState } from 'react';
import { FiHome, FiUsers, FiBarChart2, FiDollarSign, FiBriefcase } from 'react-icons/fi';

const menuItems = [
  { name: 'Overview', icon: <FiHome /> },
  { name: 'Team', icon: <FiUsers /> },
  { name: 'Metrics', icon: <FiBarChart2 /> },
  { name: 'Investors', icon: <FiDollarSign /> },
  { name: 'Jobs', icon: <FiBriefcase /> },
];

const DashboardContent = ({ activeSection }) => {
  const contentMap = {
    Overview: (
      <div>
        <h2 className="text-xl md:text-2xl font-bold mb-4">Company Overview</h2>
        <input
          className="w-full p-2 mb-4 bg-white border border-gray-300 text-gray-800 rounded"
          defaultValue="TechNova"
        />
        <textarea
          className="w-full p-2 mb-4 bg-white border border-gray-300 text-gray-800 rounded"
          rows="2"
          defaultValue="Pioneering the future of AI and machine learning solutions"
        />
        <textarea
          className="w-full p-2 bg-white border border-gray-300 text-gray-800 rounded"
          rows="4"
          defaultValue="TechNova is at the forefront of AI innovation, developing cutting-edge solutions that transform industries."
        />
      </div>
    ),
    Investors: (
      <div>
        <h2 className="text-xl md:text-2xl font-bold mb-4">Investors</h2>
        <div className="space-y-2">
          {['TechVentures Capital - $2M (Seed Round)', 'Innovation Fund - $5M (Series A)', 'Growth Partners - $10M (Series B)'].map((investor, index) => (
            <div key={index} className="p-2 bg-white border border-gray-300 rounded">{investor}</div>
          ))}
        </div>
      </div>
    ),
    // Add other sections as needed
  };

  return contentMap[activeSection] || <div>Content for {activeSection}</div>;
};

export default function Dashboard() {
  const [activeSection, setActiveSection] = useState('Overview');
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  return (
    <div className="flex flex-col md:flex-row h-screen bg-gray-100 text-gray-800">
      {/* Sidebar toggle for mobile */}
      <button 
        className="md:hidden bg-indigo-600 text-white p-2 fixed top-4 left-4 z-20 rounded-md"
        onClick={() => setIsSidebarOpen(!isSidebarOpen)}
      >
        ☰
      </button>

      {/* Left sidebar */}
      <div className={`w-64 bg-white p-4 border-r border-gray-200 fixed md:static inset-y-0 left-0 transform ${isSidebarOpen ? 'translate-x-0' : '-translate-x-full'} md:translate-x-0 transition duration-200 ease-in-out z-10`}>
        <h1 className="text-xl md:text-2xl font-bold mb-8 text-center text-indigo-600">Startup Dashboard</h1>
        <nav>
          {menuItems.map((item) => (
            <button
              key={item.name}
              onClick={() => {
                setActiveSection(item.name);
                setIsSidebarOpen(false);
              }}
              className={`flex items-center space-x-2 w-full p-2 rounded transition-colors ${
                activeSection === item.name ? 'bg-indigo-100 text-indigo-600' : 'hover:bg-gray-100'
              }`}
            >
              {item.icon}
              <span>{item.name}</span>
            </button>
          ))}
        </nav>
      </div>

      {/* Main content */}
      <div className="flex-1 p-4 md:p-8 mt-16 md:mt-0">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-8">
          <h2 className="text-2xl md:text-3xl font-bold text-gray-800 mb-4 md:mb-0">{activeSection}</h2>
          <div className="space-y-2 md:space-y-0 md:space-x-2">
            <button className="w-full md:w-auto px-4 py-2 bg-gray-200 text-gray-800 rounded hover:bg-gray-300">Preview</button>
            <button className="w-full md:w-auto px-4 py-2 bg-indigo-600 text-white rounded hover:bg-indigo-700">Save Changes</button>
          </div>
        </div>
        <DashboardContent activeSection={activeSection} />
      </div>
    </div>
  );
}