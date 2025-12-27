'use client';

import { useState, useEffect } from 'react';
import { useLocation } from '@/lib/context/LocationContext';
import { cityMap } from '@/lib/menuData';

interface LocationModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function LocationModal({ isOpen, onClose }: LocationModalProps) {
  const { currentLocation, orderType, setLocation, setOrderType } = useLocation();
  const [selectedCity, setSelectedCity] = useState<string | null>(null);
  const [searchTerm, setSearchTerm] = useState('');

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isOpen]);

  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && isOpen) {
        onClose();
      }
    };
    document.addEventListener('keydown', handleEscape);
    return () => document.removeEventListener('keydown', handleEscape);
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  const handleUseCurrentLocation = () => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        () => {
          alert('Location detected! Please select your city from the list.');
        },
        () => {
          alert('Unable to detect location. Please select manually.');
        }
      );
    } else {
      alert('Geolocation is not supported by your browser.');
    }
  };

  const handleSelectLocation = () => {
    if (selectedCity && cityMap[selectedCity]) {
      setLocation(cityMap[selectedCity]);
      onClose();
      setSelectedCity(null);
      setSearchTerm('');
    }
  };

  const filteredCities = Object.keys(cityMap).filter((city) =>
    cityMap[city].toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div
      className="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center p-5"
      onClick={onClose}
    >
      <div
        className="bg-white rounded-2xl p-10 max-w-4xl w-full max-h-[90vh] overflow-y-auto relative"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div className="mb-6">
          <h2 className="text-3xl font-bold text-gray-900 mb-5">Select your order type</h2>
        </div>

        {/* Order Type Selection */}
        <div className="flex gap-4 mb-8">
          <button
            onClick={() => setOrderType('delivery')}
            className={`flex-1 py-4 rounded-lg border-2 font-semibold transition-all ${
              orderType === 'delivery'
                ? 'bg-primary text-white border-primary'
                : 'bg-white text-gray-900 border-gray-300 hover:border-primary hover:text-primary'
            }`}
          >
            Delivery
          </button>
          <button
            onClick={() => setOrderType('pickup')}
            className={`flex-1 py-4 rounded-lg border-2 font-semibold transition-all ${
              orderType === 'pickup'
                ? 'bg-primary text-white border-primary'
                : 'bg-white text-gray-900 border-gray-300 hover:border-primary hover:text-primary'
            }`}
          >
            Pick-Up
          </button>
        </div>

        <div className="mb-6">
          <h2 className="text-3xl font-bold text-gray-900 mb-5">Please select your location</h2>
        </div>

        {/* Use Current Location Button */}
        <button
          onClick={handleUseCurrentLocation}
          className="w-full py-4 border-2 border-dashed border-gray-300 bg-gray-50 rounded-lg flex items-center justify-center gap-3 font-medium text-gray-900 hover:border-primary hover:bg-primary hover:bg-opacity-10 hover:text-primary transition-all mb-8"
        >
          <i className="fas fa-crosshairs text-lg"></i>
          <span>Use Current Location</span>
        </button>

        {/* Cities Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 mb-8">
          {filteredCities.map((cityKey) => (
            <button
              key={cityKey}
              onClick={() => setSelectedCity(cityKey)}
              className={`flex flex-col items-center gap-3 p-4 border-2 rounded-lg transition-all ${
                selectedCity === cityKey
                  ? 'border-primary bg-primary bg-opacity-10'
                  : 'border-gray-300 bg-white hover:border-primary hover:shadow-md hover:-translate-y-1'
              }`}
            >
              <img
                src={`https://via.placeholder.com/80x80/FF6B00/FFFFFF?text=${cityMap[cityKey].substring(0, 3).toUpperCase()}`}
                alt={cityMap[cityKey]}
                className="w-20 h-20 rounded-full object-cover"
              />
              <span className="font-semibold text-gray-900">{cityMap[cityKey]}</span>
            </button>
          ))}
        </div>

        {/* Location Search */}
        <div className="relative mb-8">
          <input
            type="text"
            placeholder="Please select your location"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="w-full py-4 px-5 pr-12 border-2 border-gray-300 rounded-lg text-base outline-none focus:border-primary transition-colors"
          />
          <i className="fas fa-search absolute right-5 top-1/2 transform -translate-y-1/2 text-gray-500"></i>
        </div>

        {/* Modal Footer */}
        <div className="flex justify-end">
          <button
            onClick={handleSelectLocation}
            disabled={!selectedCity}
            className={`px-10 py-4 rounded-full font-semibold transition-colors ${
              selectedCity
                ? 'bg-primary text-white hover:bg-secondary'
                : 'bg-gray-300 text-gray-500 cursor-not-allowed opacity-60'
            }`}
          >
            Select
          </button>
        </div>
      </div>
    </div>
  );
}

