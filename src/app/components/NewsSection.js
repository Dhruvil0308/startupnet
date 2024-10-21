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
  // Add more news items here...
];

const NewsSection = () => {
  return (
    <section className="py-8 px-4 sm:px-6 lg:px-8 ">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-5xl font-bold text-gray-800 mb-8">Latest News</h2>
        {newsItems.slice(0, 5).map((item, index) => (
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
                <h3 className="text-3xl font-bold mb-2 text-gray-800">{item.title}</h3>
                <p className="text-gray-600 mb-4 line-clamp-2">{item.content}</p>
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
        <div className="text-center mt-8">
          <Link href="/news" className="bg-blue-600 text-white px-8 py-3 rounded-full font-semibold hover:bg-blue-700 transition duration-300">
            Read More Posts
          </Link>
        </div>
      </div>
    </section>
  );
};

export default NewsSection;