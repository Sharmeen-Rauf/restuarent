'use client';

import { useState } from 'react';
import { menuData } from '@/lib/menuData';

export default function SearchSection() {
  const [searchQuery, setSearchQuery] = useState('');

  // Get first 6 items for slider
  const sliderItems = menuData.slice(0, 6);

  return (
    <section className="bg-white py-8">
      <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8">
        {/* Search Bar */}
        <div className="mb-8">
          <div className="max-w-2xl mx-auto relative">
            <input
              type="text"
              placeholder="Search for mutton peshawa"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full py-4 px-6 pr-16 rounded-full bg-gray-50 border-2 border-gray-200 text-gray-900 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-[#FF6B00] focus:border-[#FF6B00] text-base md:text-lg"
            />
            <button className="absolute right-2 top-1/2 transform -translate-y-1/2 bg-[#FF6B00] hover:bg-[#FF8C42] text-white rounded-full w-12 h-12 flex items-center justify-center transition-colors">
              <i className="fas fa-arrow-right"></i>
            </button>
          </div>
        </div>

        {/* Static Slider - Menu Items Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4 md:gap-6">
          {sliderItems.map((item) => (
            <div
              key={item.id}
              className="bg-white rounded-xl p-3 md:p-4 hover:shadow-lg transition-all cursor-pointer border border-gray-100"
            >
              <img
                src={item.image}
                alt={item.name}
                className="w-full h-32 md:h-40 object-cover rounded-lg mb-3"
              />
              <h3 className="text-gray-900 text-xs md:text-sm font-semibold line-clamp-2 mb-2">
                {item.name}
              </h3>
              <p className="text-[#FF6B00] text-xs md:text-sm font-bold">
                {item.price}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

