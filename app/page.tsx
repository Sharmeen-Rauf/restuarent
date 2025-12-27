'use client';

import { useState } from 'react';
import Header from '@/components/Header';
import LocationModal from '@/components/LocationModal';
import HeroSection from '@/components/HeroSection';
import CategoryNavBar from '@/components/CategoryNavBar';
import SearchSection from '@/components/SearchSection';
import MenuSection from '@/components/MenuSection';

export default function Home() {
  const [isLocationModalOpen, setIsLocationModalOpen] = useState(false);
  const [activeCategory, setActiveCategory] = useState('starters');

  return (
    <div className="min-h-screen bg-white">
      <Header onLocationClick={() => setIsLocationModalOpen(true)} />
      
      {/* Hero Section - Banner with Exquisite RANGE OF Flavours */}
      <HeroSection />

      {/* Category Navigation Bar - Appears after hero, becomes sticky on scroll */}
      <CategoryNavBar 
        activeCategory={activeCategory} 
        onCategoryChange={setActiveCategory} 
      />

      {/* Search Section - Just Search Bar (No Cards) */}
      <SearchSection />

      {/* Menu Section with Category Cards */}
      <MenuSection activeCategory={activeCategory} onCategoryChange={setActiveCategory} />

      {/* Location Modal */}
      <LocationModal
        isOpen={isLocationModalOpen}
        onClose={() => setIsLocationModalOpen(false)}
      />
    </div>
  );
}
