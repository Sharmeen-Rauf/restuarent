'use client';

import { useLocation } from '@/lib/context/LocationContext';
import { useCart } from '@/lib/context/CartContext';

interface HeaderProps {
  onLocationClick?: () => void;
}

export default function Header({ onLocationClick }: HeaderProps) {
  const { getDisplayLocation } = useLocation();
  const { getCartCount } = useCart();
  const cartCount = getCartCount();
  const displayLocation = getDisplayLocation();

  return (
    <header className="bg-white shadow-md sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-5 py-4 flex justify-between items-center flex-wrap gap-4">
        {/* Logo */}
        <a href="/" className="flex items-center">
          <img
            src="https://via.placeholder.com/150x50/FF6B00/FFFFFF?text=Kababjees"
            alt="Kababjees Fried Chicken"
            className="h-12 w-auto"
          />
        </a>

        {/* Header Actions */}
        <div className="flex items-center gap-5 flex-wrap">
          {/* Location Selector */}
          <button
            onClick={onLocationClick}
            className="flex items-center gap-3 px-4 py-2 rounded-lg hover:bg-gray-100 transition-colors"
          >
            <i className="fas fa-map-marker-alt text-primary text-xl"></i>
            <div className="flex flex-col text-left">
              <span className="text-xs text-gray-500">Change Location</span>
              <span className="font-semibold text-gray-900">{displayLocation}</span>
            </div>
          </button>

          {/* Contact */}
          <a
            href="tel:021-111-666-111"
            className="flex items-center gap-3 px-4 py-2 rounded-lg hover:bg-gray-100 transition-colors"
          >
            <i className="fas fa-phone text-primary text-xl"></i>
            <div className="flex flex-col text-left">
              <span className="text-xs text-gray-500">Contact us</span>
              <span className="font-semibold text-gray-900">021-111-666-111</span>
            </div>
          </a>

          {/* Complaint Link */}
          <a
            href="https://feedback.kababjeesgroup.com/"
            target="_blank"
            rel="noopener noreferrer"
            className="hidden md:flex items-center gap-3 px-4 py-2 rounded-lg hover:bg-gray-100 transition-colors"
          >
            <i className="fas fa-comment-alt text-primary text-xl"></i>
            <div className="flex flex-col text-left">
              <span className="text-xs font-semibold">Submit Your Complaint</span>
              <span className="text-xs text-gray-500">From Complaint to Care – Share With Us</span>
            </div>
          </a>

          {/* Cart */}
          <button
            className="relative flex items-center gap-3 px-4 py-2 rounded-lg hover:bg-gray-100 transition-colors"
          >
            <i className="fas fa-shopping-cart text-primary text-xl"></i>
            {cartCount > 0 && (
              <span className="absolute top-1 right-1 bg-primary text-white rounded-full w-5 h-5 flex items-center justify-center text-xs font-bold">
                {cartCount}
              </span>
            )}
          </button>

          {/* Location Icon */}
          <button
            onClick={onLocationClick}
            className="flex items-center gap-3 px-4 py-2 rounded-lg hover:bg-gray-100 transition-colors"
          >
            <i className="fas fa-map-marker-alt text-primary text-xl"></i>
          </button>
        </div>
      </div>
    </header>
  );
}

