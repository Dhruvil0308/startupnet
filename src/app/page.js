'use client';
import Link from 'next/link';
import HeroSection from '@/app/components/HeroSection';
import FoundersInterests from './components/FounderInterest';
import NewsSection from './components/NewsSection';
import Footer from './components/Footer';
import Image from 'next/image';

const posts = [
  {
    id: 1,
    author: 'Jane Doe',
    content: 'Excited to announce that we\'ve just closed our Series A funding round! Looking forward to scaling our operations and bringing innovative solutions to more customers.',
    likes: 120,
    comments: 18,
    shares: 5
  },
  {
    id: 2,
    author: 'John Smith',
    content: 'Looking for promising AI startups in the healthcare sector. If you know of any groundbreaking projects, please reach out!',
    likes: 89,
    comments: 32,
    shares: 12
  }
];

const trendingTopics = [
  '#AIStartups',
  '#VCFunding',
  '#TechInnovation',
  '#StartupHiring',
  '#EntrepreneurshipTips'
];

export default function Home() {
  return (
    <div className="bg-white min-h-screen">
      <HeroSection />
      <NewsSection/>

      {/* <hr class="border-t border-gray-200 my-4" /> */}

      {/* <FoundersInterests /> */}
      {/* <div className='flex justify-center items-center p-7 my-5'>
      <Image src="/smu.png" alt="Startup Details" width={800} height={900}/>
      </div> */}

      <hr class="border-t border-gray-300" />
      
      <Footer/>
    </div>
  );
}