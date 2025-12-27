'use client';

import { categories } from '@/lib/menuData';
import { useEffect, useRef, useState } from 'react';

interface CategoryNavBarProps {
  activeCategory: string;
  onCategoryChange: (categoryId: string) => void;
}

export default function CategoryNavBar({ activeCategory, onCategoryChange }: CategoryNavBarProps) {
  const navRef = useRef<HTMLDivElement>(null);
  const heroSectionRef = useRef<HTMLDivElement | null>(null);
  const [isSticky, setIsSticky] = useState(false);

  useEffect(() => {
    // Find hero section element
    heroSectionRef.current = document.querySelector('section[class*="bg-gradient-to-br"]') as HTMLDivElement;

    const handleScroll = () => {
      if (heroSectionRef.current) {
        const heroBottom = heroSectionRef.current.getBoundingClientRect().bottom;
        // Sticky when hero section is scrolled past
        setIsSticky(heroBottom <= 0);
      }
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll(); // Check initial state
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <>
      {/* Category Navigation - Will become sticky on scroll */}
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
