import DetailedNewsPage from "@/app/components/DetailedNewsModal";

// This is a mock function to fetch news data. Replace it with your actual data fetching logic.
const getNewsById = (id) => {
  // Mock data - replace this with your actual data fetching logic
  return {
    id: id,
    title: `News Article ${id}`,
    image: `/News${id}.jpg`,
    views: 200,
    likes: 30,
    timeAgo: '4 hours ago',
    content: 'The stock market surged today as global markets experienced a widespread rally, buoyed by optimism around economic recovery and strong corporate earnings. Major indices, including the S&P 500 and NASDAQ, posted significant gains as investors remained confident in steady growth, despite lingering inflation concerns. Tech stocks led the charge, with several companies announcing better-than-expected quarterly results. Analysts predict that while volatility may persist in the coming months, the long-term outlook remains positive as economies stabilize and consumer demand continues to rise. Investors are advised to stay cautious but optimistic, keeping an eye on inflation data and interest rates.'
  };
};

export default function NewsPage({ params }) {
  const newsData = getNewsById(params.id);

  return <DetailedNewsPage news={newsData} />;
}