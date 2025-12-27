'use client';

import { useState } from 'react';
import Header from '@/components/Header';
import LocationModal from '@/components/LocationModal';
import HeroSection from '@/components/HeroSection';
import MenuSection from '@/components/MenuSection';

export default function Home() {
  const [isLocationModalOpen, setIsLocationModalOpen] = useState(false);

  return (
    <div className="min-h-screen bg-gray-50">
      <Header onLocationClick={() => setIsLocationModalOpen(true)} />
      
      {/* Hero Section with Slider and Search */}
      <HeroSection />

      {/* Menu Section with Category Nav and Cards */}
      <MenuSection />

      {/* Location Modal */}
      <LocationModal
        isOpen={isLocationModalOpen}
        onClose={() => setIsLocationModalOpen(false)}
      />
    </div>
  );
}
