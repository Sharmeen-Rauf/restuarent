'use client';

import { useLocation } from '@/lib/context/LocationContext';
import { useCart } from '@/lib/context/CartContext';
import { useEffect, useState } from 'react';

interface HeaderProps {
  onLocationClick?: () => void;
}

export default function Header({ onLocationClick }: HeaderProps) {
  const { getDisplayLocation } = useLocation();
  const { getCartCount, setIsCartOpen } = useCart();
  const cartCount = getCartCount();
  const displayLocation = getDisplayLocation();
  const [isHidden, setIsHidden] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      // Find hero section
      const heroSection = document.querySelector('section[class*="bg-gradient-to-br"]') as HTMLElement;
      
      if (heroSection) {
        const heroBottom = heroSection.getBoundingClientRect().bottom;
        // Hide header when hero section is scrolled past
        setIsHidden(heroBottom <= 0);
      }
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll(); // Check initial state
    
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header 
      className={`bg-white shadow-md sticky top-0 z-50 border-b border-gray-200 transition-transform duration-300 ${
        isHidden ? '-translate-y-full' : ''
      }`}
    >
      <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8 py-3 md:py-4">
        <div className="flex justify-between items-center flex-wrap gap-3 md:gap-4">
          {/* Logo */}
          <a href="/" className="flex items-center">
            <div className="flex items-center gap-2">
              <span className="text-black text-2xl md:text-3xl font-bold">GoldenApple</span>
              <i className="fas fa-apple text-red-600 text-lg md:text-xl"></i>
            </div>
          </a>

          {/* Header Actions */}
          <div className="flex items-center gap-3 md:gap-4 lg:gap-5 flex-wrap">
            {/* Location Selector */}
            <button
              onClick={onLocationClick}
              className="flex items-center gap-2 md:gap-3 px-3 md:px-4 py-2 bg-black text-white rounded-lg hover:bg-gray-800 transition-colors"
            >
              <i className="fas fa-map-marker-alt text-sm md:text-base"></i>
              <div className="flex flex-col text-left">
                <span className="text-[10px] md:text-xs opacity-90">Change Location</span>
                <span className="font-semibold text-xs md:text-sm leading-tight">{displayLocation}</span>
              </div>
            </button>

            {/* Contact */}
            <a
              href="tel:021111666111"
              className="flex items-center gap-2 md:gap-3 px-3 md:px-4 py-2 bg-black text-white rounded-lg hover:bg-gray-800 transition-colors"
            >
              <i className="fas fa-phone text-sm md:text-base"></i>
              <div className="flex flex-col text-left">
                <span className="text-[10px] md:text-xs opacity-90">Contact us</span>
                <span className="font-semibold text-xs md:text-sm">021111666111</span>
              </div>
            </a>

            {/* Complaint Link */}
            <a
              href="#"
              className="hidden lg:flex items-center gap-2 px-3 md:px-4 py-2 bg-black text-white rounded-lg hover:bg-gray-800 transition-colors"
            >
              <i className="fas fa-comment-alt text-sm md:text-base"></i>
              <span className="font-semibold text-xs md:text-sm">Submit Your Complaint</span>
            </a>

            {/* Cart */}
            <button
              onClick={() => setIsCartOpen(true)}
              className="relative flex items-center justify-center w-10 h-10 md:w-12 md:h-12 bg-black text-white rounded-lg hover:bg-gray-800 transition-colors"
            >
              <i className="fas fa-shopping-cart text-base md:text-lg"></i>
              {cartCount > 0 && (
                <span className="absolute -top-1 -right-1 bg-red-600 text-white rounded-full w-5 h-5 flex items-center justify-center text-xs font-bold">
                  {cartCount}
                </span>
              )}
            </button>

            {/* Hamburger Menu */}
            <button
              className="flex items-center justify-center w-10 h-10 md:w-12 md:h-12 bg-black text-white rounded-lg hover:bg-gray-800 transition-colors lg:hidden"
            >
              <i className="fas fa-bars text-base md:text-lg"></i>
            </button>
          </div>
        </div>
      </div>
    </header>
  );
}
