'use client';

import { categories } from '@/lib/menuData';
import { useEffect, useRef, useState } from 'react';

interface CategoryNavBarProps {
  activeCategory: string;
  onCategoryChange: (categoryId: string) => void;
}

export default function CategoryNavBar({ activeCategory, onCategoryChange }: CategoryNavBarProps) {
  const navRef = useRef<HTMLDivElement>(null);
  const scrollContainerRef = useRef<HTMLDivElement>(null);
  const heroSectionRef = useRef<HTMLDivElement | null>(null);
  const [isSticky, setIsSticky] = useState(false);
  const [showRightArrow, setShowRightArrow] = useState(true);

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

    const checkScrollPosition = () => {
      if (scrollContainerRef.current) {
        const { scrollLeft, scrollWidth, clientWidth } = scrollContainerRef.current;
        // Show arrow if we can scroll right
        setShowRightArrow(scrollLeft < scrollWidth - clientWidth - 10);
      }
    };

    window.addEventListener('scroll', handleScroll);
    if (scrollContainerRef.current) {
      scrollContainerRef.current.addEventListener('scroll', checkScrollPosition);
      checkScrollPosition();
    }
    
    handleScroll(); // Check initial state
    
    // Check on resize
    window.addEventListener('resize', checkScrollPosition);
    
    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('resize', checkScrollPosition);
      if (scrollContainerRef.current) {
        scrollContainerRef.current.removeEventListener('scroll', checkScrollPosition);
      }
    };
  }, []);

  const scrollRight = () => {
    if (scrollContainerRef.current) {
      scrollContainerRef.current.scrollBy({
        left: 200,
        behavior: 'smooth'
      });
    }
  };

  return (
    <>
      {/* Category Navigation - Will become sticky on scroll */}
      <div
        ref={navRef}
        className={`bg-white shadow-md transition-all duration-300 z-40 border-b border-gray-200 relative ${
          isSticky ? 'fixed top-0 left-0 right-0' : 'relative'
        }`}
      >
        <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8 relative">
          <div 
            ref={scrollContainerRef}
            className="flex items-center gap-2 md:gap-4 overflow-x-auto py-4 scrollbar-hide"
          >
            {categories.map((category) => (
              <button
                key={category.id}
                onClick={() => onCategoryChange(category.id)}
                className={`whitespace-nowrap px-4 md:px-6 py-2 rounded-lg font-medium text-sm md:text-base transition-all flex-shrink-0 ${
                  activeCategory === category.id
                    ? 'bg-black text-white'
                    : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                }`}
              >
                {category.name}
              </button>
            ))}
          </div>
          
          {/* Right Arrow Button */}
          {showRightArrow && (
            <button
              onClick={scrollRight}
              className="absolute right-2 md:right-4 top-1/2 transform -translate-y-1/2 bg-white border border-gray-300 rounded-full w-8 h-8 md:w-10 md:h-10 flex items-center justify-center shadow-lg hover:bg-gray-50 transition-colors z-10"
            >
              <i className="fas fa-chevron-right text-gray-700 text-sm md:text-base"></i>
            </button>
          )}
        </div>
      </div>
    </>
  );
}
