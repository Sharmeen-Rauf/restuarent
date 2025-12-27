'use client';

import { useState, useEffect, useRef } from 'react';
import { menuData, MenuItem, categories } from '@/lib/menuData';
import { useCart } from '@/lib/context/CartContext';

interface MenuSectionProps {
  activeCategory: string;
  onCategoryChange: (category: string) => void;
}

export default function MenuSection({ activeCategory, onCategoryChange }: MenuSectionProps) {
  const { addToCart } = useCart();
  const [showNotification, setShowNotification] = useState<string | null>(null);
  const categoryRefs = useRef<{ [key: string]: HTMLDivElement | null }>({});

  const handleAddToCart = (item: MenuItem) => {
    addToCart(item);
    setShowNotification(`${item.name} added to cart!`);
    setTimeout(() => setShowNotification(null), 2000);
  };

  // Group menu items by category
  const menuByCategory = categories.map((category) => ({
    category,
    items: menuData.filter((item) => item.category === category.id),
  }));

  // Scroll to category when active category changes
  useEffect(() => {
    if (activeCategory && categoryRefs.current[activeCategory]) {
      const element = categoryRefs.current[activeCategory];
      if (element) {
        const header = document.querySelector('header');
        const headerHeight = header ? header.offsetHeight : 0;
        const categoryNav = document.querySelector('[class*="CategoryNavBar"]');
        const categoryNavHeight = categoryNav ? (categoryNav as HTMLElement).offsetHeight : 0;
        const offset = headerHeight + categoryNavHeight + 20;
        
        window.scrollTo({
          top: element.offsetTop - offset,
          behavior: 'smooth',
        });
      }
    }
  }, [activeCategory]);

  return (
    <section className="py-10 bg-white">
      <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8">
        {menuByCategory.map(({ category, items }, categoryIndex) => (
          <div key={category.id} ref={(el) => { categoryRefs.current[category.id] = el; }}>
            {/* Category Separator/Header - Only show if not first category */}
            {categoryIndex > 0 && (
              <div className="my-12 md:my-16 relative">
                {/* Decorative separator line */}
                <div className="flex items-center justify-center">
                  <div className="flex-1 h-px bg-gray-200"></div>
                  <div className="mx-4 md:mx-8">
                    {/* Decorative food icon */}
                    <div className="w-12 h-12 md:w-16 md:h-16 rounded-full bg-gray-100 flex items-center justify-center">
                      <i className="fas fa-utensils text-gray-400 text-lg md:text-xl"></i>
                    </div>
                  </div>
                  <div className="flex-1 h-px bg-gray-200"></div>
                </div>
              </div>
            )}

            {/* Category Title */}
            <h2 className="text-3xl md:text-4xl font-bold text-black mb-6 md:mb-8">
              {category.name}
            </h2>

            {/* Menu Grid - 8 items per category */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 md:gap-8 mb-12 md:mb-16">
              {items.map((item) => (
                <div
                  key={item.id}
                  className="bg-white rounded-xl overflow-hidden shadow-md hover:shadow-xl transition-all border border-gray-100"
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
                    <h3 className="text-lg md:text-xl font-semibold mb-2 text-black line-clamp-2">
                      {item.name}
                    </h3>
                    <p className="text-sm text-gray-600 mb-4 line-clamp-2 leading-relaxed">
                      {item.description}
                    </p>
                    <div className="flex justify-between items-center">
                      <span className="text-xl md:text-2xl font-bold text-red-600">
                        {item.price}
                      </span>
                      <button
                        onClick={(e) => {
                          e.stopPropagation();
                          handleAddToCart(item);
                        }}
                        className="bg-black text-white px-6 md:px-8 py-2 md:py-2.5 rounded-lg font-semibold hover:bg-gray-800 transition-colors text-sm md:text-base"
                      >
                        ADD
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>

      {/* Notification */}
      {showNotification && (
        <div className="fixed top-24 right-5 bg-black text-white px-6 py-4 rounded-lg shadow-xl z-50 animate-slide-in">
          {showNotification}
        </div>
      )}
    </section>
  );
}
