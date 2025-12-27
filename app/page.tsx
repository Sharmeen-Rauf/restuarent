'use client';

import { useState, useEffect } from 'react';
import Header from '@/components/Header';
import LocationModal from '@/components/LocationModal';
import MenuSection from '@/components/MenuSection';

export default function Home() {
  const [isLocationModalOpen, setIsLocationModalOpen] = useState(false);

  return (
    <div className="min-h-screen bg-gray-50">
      <Header onLocationClick={() => setIsLocationModalOpen(true)} />
      
      {/* Banner Section */}
      <section className="mb-10 relative">
        <div className="relative w-full">
          <img
            src="https://via.placeholder.com/1200x400/FF6B00/FFFFFF?text=Delicious+Fried+Chicken"
            alt="Banner"
            className="w-full h-64 md:h-96 object-cover"
          />
          <div className="absolute top-5 right-5">
            <img
              src="https://via.placeholder.com/200x50/4CAF50/FFFFFF?text=Card+Payment+Available"
              alt="Payment Available"
              className="h-12 w-auto"
            />
          </div>
        </div>
      </section>

      <MenuSection />

      <LocationModal
        isOpen={isLocationModalOpen}
        onClose={() => setIsLocationModalOpen(false)}
      />
    </div>
  );
}

