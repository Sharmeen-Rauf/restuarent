'use client';

import { menuData } from '@/lib/menuData';
import { useState } from 'react';

export default function HeroSection() {
  const [searchQuery, setSearchQuery] = useState('');

  // Get first 6 items for slider
  const sliderItems = menuData.slice(0, 6);

  return (
    <section className="relative w-full bg-gradient-to-br from-gray-900 via-gray-800 to-black overflow-hidden">
      {/* Background Pattern/Sparkles Effect */}
      <div className="absolute inset-0 opacity-40">
        <div 
          className="absolute inset-0" 
          style={{
            backgroundImage: `
              radial-gradient(circle at 15% 30%, rgba(255, 215, 0, 0.15) 0%, transparent 40%),
              radial-gradient(circle at 85% 70%, rgba(255, 215, 0, 0.1) 0%, transparent 50%),
              radial-gradient(circle at 50% 50%, rgba(255, 107, 0, 0.05) 0%, transparent 60%)
            `,
          }}
        ></div>
      </div>

      {/* Container with proper alignment matching header */}
      <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8 py-8 md:py-12 lg:py-16 relative z-10">
        {/* Search Bar */}
        <div className="mb-8">
          <div className="max-w-2xl mx-auto relative">
            <input
              type="text"
              placeholder="Search for mutton peshawa"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full py-4 px-6 pr-16 rounded-full bg-white/95 backdrop-blur-sm text-gray-900 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-[#FF6B00] text-base md:text-lg shadow-xl"
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
              className="bg-white/10 backdrop-blur-sm rounded-xl p-3 md:p-4 hover:bg-white/20 transition-all cursor-pointer border border-white/10"
            >
              <img
                src={item.image}
                alt={item.name}
                className="w-full h-32 md:h-40 object-cover rounded-lg mb-3"
              />
              <h3 className="text-white text-xs md:text-sm font-semibold line-clamp-2">
                {item.name}
              </h3>
              <p className="text-[#FF6B00] text-xs md:text-sm font-bold mt-2">
                {item.price}
              </p>
            </div>
          ))}
        </div>
      </div>

      {/* Payment Logos - Bottom Right */}
      <div className="absolute bottom-4 md:bottom-6 right-4 sm:right-6 lg:right-8 z-10">
        <div className="flex items-center gap-3 bg-white/95 backdrop-blur-md rounded-lg px-4 py-3 shadow-xl border border-gray-200/50">
          {/* VISA Logo */}
          <div className="flex items-center justify-center w-12 h-8 bg-blue-900 rounded px-2">
            <span className="text-white font-bold text-xs">VISA</span>
          </div>
          {/* MasterCard Logo */}
          <div className="flex items-center justify-center w-12 h-8 relative">
            <div className="absolute left-0 w-6 h-8 bg-red-600 rounded-l-full"></div>
            <div className="absolute right-0 w-6 h-8 bg-orange-500 rounded-r-full"></div>
          </div>
        </div>
      </div>
    </section>
  );
}
