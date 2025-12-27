'use client';

import { useState } from 'react';
import { menuData, MenuItem } from '@/lib/menuData';
import { useCart } from '@/lib/context/CartContext';

const categories = [
  { id: 'all', name: 'All' },
  { id: 'chicken', name: 'Fried Chicken' },
  { id: 'burgers', name: 'Burgers' },
  { id: 'wraps', name: 'Wraps' },
  { id: 'rice', name: 'Rice' },
  { id: 'deals', name: 'Deals' },
];

export default function MenuSection() {
  const [activeCategory, setActiveCategory] = useState('all');
  const { addToCart } = useCart();
  const [showNotification, setShowNotification] = useState<string | null>(null);

  const filteredMenu = activeCategory === 'all'
    ? menuData
    : menuData.filter((item) => item.category === activeCategory);

  const handleAddToCart = (item: MenuItem) => {
    addToCart(item);
    setShowNotification(`${item.name} added to cart!`);
    setTimeout(() => setShowNotification(null), 2000);
  };

  return (
    <section className="py-10">
      <div className="max-w-7xl mx-auto px-5">
        <h2 className="text-4xl md:text-5xl mb-8 text-center text-gray-900">Menu</h2>

        {/* Category Tabs */}
        <div className="flex justify-center gap-4 mb-10 flex-wrap">
          {categories.map((category) => (
            <button
              key={category.id}
              onClick={() => setActiveCategory(category.id)}
              className={`px-8 py-3 border-2 rounded-full font-medium transition-all ${
                activeCategory === category.id
                  ? 'bg-primary text-white border-primary'
                  : 'bg-white text-gray-900 border-gray-300 hover:border-primary hover:text-primary'
              }`}
            >
              {category.name}
            </button>
          ))}
        </div>

        {/* Menu Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
          {filteredMenu.map((item) => (
            <div
              key={item.id}
              className="bg-white rounded-2xl overflow-hidden shadow-md hover:shadow-xl hover:-translate-y-1 transition-all cursor-pointer"
            >
              <img
                src={item.image}
                alt={item.name}
                className="w-full h-48 object-cover"
              />
              <div className="p-5">
                <h3 className="text-xl font-semibold mb-3 text-gray-900">{item.name}</h3>
                <p className="text-sm text-gray-600 mb-4 leading-relaxed">{item.description}</p>
                <div className="flex justify-between items-center">
                  <span className="text-2xl font-bold text-primary">{item.price}</span>
                  <button
                    onClick={(e) => {
                      e.stopPropagation();
                      handleAddToCart(item);
                    }}
                    className="bg-primary text-white px-5 py-2 rounded-full font-semibold hover:bg-secondary transition-colors"
                  >
                    Add to Cart
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Notification */}
      {showNotification && (
        <div className="fixed top-24 right-5 bg-primary text-white px-6 py-4 rounded-lg shadow-xl z-50 animate-slide-in">
          {showNotification}
        </div>
      )}
    </section>
  );
}

