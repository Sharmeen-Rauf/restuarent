'use client';

import { useState, useEffect } from 'react';

const placeholderTexts = [
  'Search for mutton peshawa',
  'Search for chicken biryani',
  'Search for beef steak',
  'Search for salads',
  'Search for burgers',
  'Search for chicken shashlik with fried rice'
];

export default function SearchSection() {
  const [searchQuery, setSearchQuery] = useState('');
  const [currentPlaceholder, setCurrentPlaceholder] = useState(placeholderTexts[0]);
  const [currentPlaceholderIndex, setCurrentPlaceholderIndex] = useState(0);

  // Dynamic placeholder text
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentPlaceholderIndex((prev) => {
        const nextIndex = (prev + 1) % placeholderTexts.length;
        setCurrentPlaceholder(placeholderTexts[nextIndex]);
        return nextIndex;
      });
    }, 3000); // Change every 3 seconds

    return () => clearInterval(interval);
  }, []);

  return (
    <section className="bg-white py-8">
      <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8">
        {/* Search Bar */}
        <div className="max-w-2xl mx-auto relative">
          <input
            type="text"
            placeholder={currentPlaceholder}
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full py-4 px-6 pr-16 rounded-full bg-gray-50 border-2 border-gray-200 text-gray-900 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-red-600 focus:border-red-600 text-base md:text-lg transition-all"
          />
          <button className="absolute right-2 top-1/2 transform -translate-y-1/2 bg-black hover:bg-gray-800 text-white rounded-full w-12 h-12 flex items-center justify-center transition-colors">
            <i className="fas fa-arrow-right"></i>
          </button>
        </div>
      </div>
    </section>
  );
}
