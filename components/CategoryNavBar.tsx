'use client';

import { categories } from '@/lib/menuData';
import { useEffect, useRef, useState } from 'react';

interface CategoryNavBarProps {
  activeCategory: string;
  onCategoryChange: (categoryId: string) => void;
}

export default function CategoryNavBar({ activeCategory, onCategoryChange }: CategoryNavBarProps) {
  const navRef = useRef<HTMLDivElement>(null);
  const spacerRef = useRef<HTMLDivElement>(null);
  const [isSticky, setIsSticky] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (spacerRef.current && navRef.current) {
        const spacerTop = spacerRef.current.getBoundingClientRect().top;
        setIsSticky(spacerTop <= 0);
      }
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll(); // Check initial state
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <>
      {/* Spacer to prevent jump when sticky */}
      <div ref={spacerRef} className="h-16"></div>
      
      {/* Category Navigation */}
      <div
        ref={navRef}
        className={`bg-white shadow-md transition-all duration-300 z-40 ${
          isSticky ? 'fixed top-0 left-0 right-0' : 'relative'
        }`}
      >
        <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center gap-2 md:gap-4 overflow-x-auto py-4 scrollbar-hide">
            {categories.map((category) => (
              <button
                key={category.id}
                onClick={() => onCategoryChange(category.id)}
                className={`whitespace-nowrap px-4 md:px-6 py-2 rounded-lg font-medium text-sm md:text-base transition-all flex-shrink-0 ${
                  activeCategory === category.id
                    ? 'bg-[#FF6B00] text-white'
                    : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                }`}
              >
                {category.name}
              </button>
            ))}
            {/* Arrow indicator */}
            <div className="flex-shrink-0 ml-2">
              <i className="fas fa-chevron-right text-gray-400"></i>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
