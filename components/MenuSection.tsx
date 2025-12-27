'use client';

import { useState } from 'react';
import { menuData, MenuItem } from '@/lib/menuData';
import { useCart } from '@/lib/context/CartContext';

interface MenuSectionProps {
  activeCategory: string;
  onCategoryChange: (category: string) => void;
}

export default function MenuSection({ activeCategory, onCategoryChange }: MenuSectionProps) {
  const { addToCart } = useCart();
  const [showNotification, setShowNotification] = useState<string | null>(null);

  const filteredMenu = menuData.filter((item) => item.category === activeCategory);

  const handleAddToCart = (item: MenuItem) => {
    addToCart(item);
    setShowNotification(`${item.name} added to cart!`);
    setTimeout(() => setShowNotification(null), 2000);
  };

  return (
    <section className="py-10 bg-gray-50">
      <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8">
        {/* Menu Grid - Cards like screenshot (8 items per category) */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 md:gap-8">
          {filteredMenu.map((item) => (
            <div
              key={item.id}
              className="bg-white rounded-xl overflow-hidden shadow-md hover:shadow-xl transition-all"
            >
              {/* Item Image */}
              <div className="relative w-full h-48 md:h-56 overflow-hidden">
                <img
                  src={item.image}
                  alt={item.name}
                  className="w-full h-full object-cover"
                />
              </div>

              {/* Item Content */}
              <div className="p-4 md:p-5">
                <h3 className="text-lg md:text-xl font-semibold mb-2 text-gray-900 line-clamp-2">
                  {item.name}
                </h3>
                <p className="text-sm text-gray-600 mb-4 line-clamp-2 leading-relaxed">
                  {item.description}
                </p>
                <div className="flex justify-between items-center">
                  <span className="text-xl md:text-2xl font-bold text-[#FF6B00]">
                    {item.price}
                  </span>
                  <button
                    onClick={(e) => {
                      e.stopPropagation();
                      handleAddToCart(item);
                    }}
                    className="bg-[#FF6B00] text-white px-6 md:px-8 py-2 md:py-2.5 rounded-lg font-semibold hover:bg-[#FF8C42] transition-colors text-sm md:text-base"
                  >
                    ADD
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Empty State */}
        {filteredMenu.length === 0 && (
          <div className="text-center py-20">
            <p className="text-gray-500 text-lg">No items found in this category.</p>
          </div>
        )}
      </div>

      {/* Notification */}
      {showNotification && (
        <div className="fixed top-24 right-5 bg-[#FF6B00] text-white px-6 py-4 rounded-lg shadow-xl z-50 animate-slide-in">
          {showNotification}
        </div>
      )}
    </section>
  );
}
