'use client';

import React from 'react';
import Link from 'next/link';
import Image from 'next/image';

const newsItems = [
    {
        id: 1,
        title: 'MLH Partners with DigitalOcean\'s 10th Hacktoberfest for Global Hack Week: Open Source',
        image: '/News1.jpg',
        content: 'From October 16th-23rd, DigitalOcean will be partnering with MLH for Global Hack Week: Open Source in honor of Hacktoberfest taking place the entire month of October.',
        author: 'Fiona Whittington',
        date: 'September 1st, 2023'
      },
    {
        id: 2,
        title: 'MLH Partners with DigitalOcean\'s 10th Hacktoberfest for Global Hack Week: Open Source',
        image: '/News2.jpg',
        content: 'From October 16th-23rd, DigitalOcean will be partnering with MLH for Global Hack Week: Open Source in honor of Hacktoberfest taking place the entire month of October.',
        author: 'Fiona Whittington',
        date: 'September 1st, 2023'
      },
  // Use the same newsItems array as in the NewsSection component
  // Make sure to include all news items here
];

const AllNews = () => {
  return (
    <section className="py-8 px-4 sm:px-6 lg:px-8 ">
      <div className="max-w-7xl mx-auto">
        <h1 className="text-4xl font-bold text-gray-800 mb-8">All News</h1>
        {newsItems.map((item) => (
          <div key={item.id} className="bg-white rounded-lg shadow-md overflow-hidden mb-8 transition-all duration-500 ease-in-out">
            <div className="flex flex-col md:flex-row">
              <div className="md:w-1/3 relative">
                <Image
                  src={item.image}
                  alt={item.title}
                  width={300}
                  height={200}
                  layout="responsive"
                  objectFit="cover"
                  className="w-full h-full"
                />
              </div>
              <div className="md:w-2/3 p-6">
                <h2 className="text-4xl font-bold mb-2 text-gray-800">{item.title}</h2>
                <p className="text-gray-600 text-lg mb-4 line-clamp-3">{item.content}</p>
                <div className="flex justify-between items-center text-sm text-gray-500">
                  <span>{item.author}</span>
                  <span>{item.date}</span>
                </div>
                <Link href={`/news/${item.id}`} className="mt-4 inline-block text-blue-600 hover:underline">
                  Read More
                </Link>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default AllNews;