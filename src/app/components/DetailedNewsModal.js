import React from 'react';
import { FaEye, FaThumbsUp, FaClock, FaArrowLeft } from 'react-icons/fa';
import Link from 'next/link';

const DetailedNewsPage = ({ news }) => {
  if (!news) return <div>Loading...</div>;

  return (
    <div className="max-w-4xl mx-auto m-6 py-8 px-4 sm:px-6 lg:px-8">
      <Link href="/" className="inline-flex items-center text-blue-600 hover:text-blue-800 mb-4">
        <FaArrowLeft className="mr-2" /> Back to News
      </Link>
      <h1 className="text-3xl font-bold mb-4 text-gray-800">{news.title}</h1>
      <img src={news.image} alt={news.title} className="w-full h-96 object-cover mb-6 rounded-lg" />
      <div className="flex justify-between text-sm text-gray-500 mb-6">
        <span className="flex items-center"><FaClock className="mr-1" /> {news.timeAgo}</span>
        <span className="flex items-center"><FaEye className="mr-1" /> {news.views} views</span>
        <span className="flex items-center"><FaThumbsUp className="mr-1" /> {news.likes} likes</span>
      </div>
      <div className="prose max-w-none">
        <p>{news.content}</p>
      </div>
    </div>
  );
};

export default DetailedNewsPage;