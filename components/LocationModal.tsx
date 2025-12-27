'use client';

import { useState, useEffect } from 'react';
import { useLocation } from '@/lib/context/LocationContext';
import { getPakistaniCities, getCityAreas } from '@/lib/locationData';

interface LocationModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function LocationModal({ isOpen, onClose }: LocationModalProps) {
  const { city, area, orderType, setCity, setArea, setOrderType, getDisplayLocation } = useLocation();
  const [selectedCity, setSelectedCity] = useState<string>(city);
  const [selectedArea, setSelectedArea] = useState<string>(area);
  const [searchTerm, setSearchTerm] = useState('');

  const pakistaniCities = getPakistaniCities();
  const cityAreas = getCityAreas(selectedCity);

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
      setSelectedCity(city);
      setSelectedArea(area);
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isOpen, city, area]);

  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && isOpen) {
        onClose();
      }
    };
    document.addEventListener('keydown', handleEscape);
    return () => document.removeEventListener('keydown', handleEscape);
  }, [isOpen, onClose]);

  // Reset area when city changes
  useEffect(() => {
    if (selectedCity) {
      const areas = getCityAreas(selectedCity);
      if (areas.length > 0) {
        // If no area is selected or area is not in the new city, select first area
        if (!selectedArea || !areas.find(a => a.name === selectedArea)) {
          setSelectedArea(areas[0].name);
        }
      } else {
        setSelectedArea('');
      }
    }
  }, [selectedCity]);

  if (!isOpen) return null;

  const handleUseCurrentLocation = () => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        () => {
          alert('Location detected! Please select your city and area from the list.');
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
    if (selectedCity) {
      setCity(selectedCity);
      if (selectedArea) {
        setArea(selectedArea);
      }
      onClose();
      setSearchTerm('');
    }
  };

  const filteredCities = pakistaniCities.filter((city) =>
    city.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const filteredAreas = cityAreas.filter((area) =>
    area.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const canSelect = selectedCity && (!cityAreas.length || selectedArea);

  return (
    <div
      className="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center p-5"
      onClick={onClose}
    >
      <div
        className="bg-white rounded-2xl p-8 md:p-10 max-w-5xl w-full max-h-[90vh] overflow-y-auto relative"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div className="mb-6">
          <h2 className="text-2xl md:text-3xl font-bold text-black mb-5">Select your order type</h2>
        </div>

        {/* Order Type Selection */}
        <div className="flex gap-4 mb-8">
          <button
            onClick={() => setOrderType('delivery')}
            className={`flex-1 py-4 rounded-lg border-2 font-semibold text-base md:text-lg transition-all ${
              orderType === 'delivery'
                ? 'bg-black text-white border-black'
                : 'bg-white text-black border-gray-300 hover:border-black hover:text-black'
            }`}
          >
            DELIVERY
          </button>
          <button
            onClick={() => setOrderType('pickup')}
            className={`flex-1 py-4 rounded-lg border-2 font-semibold text-base md:text-lg transition-all ${
              orderType === 'pickup'
                ? 'bg-black text-white border-black'
                : 'bg-white text-black border-gray-300 hover:border-black hover:text-black'
            }`}
          >
            PICK-UP
          </button>
        </div>

        <div className="mb-6">
          <h2 className="text-2xl md:text-3xl font-bold text-black mb-5">Please select your location</h2>
        </div>

        {/* Use Current Location Button */}
        <button
          onClick={handleUseCurrentLocation}
          className="w-full py-4 border-2 border-dashed border-gray-300 bg-gray-50 rounded-lg flex items-center justify-center gap-3 font-medium text-black hover:border-black hover:bg-gray-100 transition-all mb-8"
        >
          <i className="fas fa-crosshairs text-lg"></i>
          <span>Use Current Location</span>
        </button>

        {/* Cities Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-3 md:gap-4 mb-8">
          {filteredCities.map((cityItem) => (
            <button
              key={cityItem.id}
              onClick={() => {
                setSelectedCity(cityItem.id);
                // Reset area when city changes
                const areas = getCityAreas(cityItem.id);
                if (areas.length > 0) {
                  setSelectedArea(areas[0].name);
                } else {
                  setSelectedArea('');
                }
              }}
              className={`flex flex-col items-center gap-2 md:gap-3 p-3 md:p-4 border-2 rounded-lg transition-all ${
                selectedCity === cityItem.id
                  ? 'border-black bg-black bg-opacity-5'
                  : 'border-gray-300 bg-white hover:border-black hover:shadow-md hover:-translate-y-1'
              }`}
            >
              <div className="w-16 h-16 md:w-20 md:h-20 rounded-full bg-gray-100 flex items-center justify-center">
                <span className="text-black font-bold text-lg md:text-xl">
                  {cityItem.name.substring(0, 2).toUpperCase()}
                </span>
              </div>
              <span className="font-semibold text-black text-sm md:text-base text-center">
                {cityItem.name}
              </span>
            </button>
          ))}
        </div>

        {/* Area Dropdown - Only show if city has areas */}
        {cityAreas.length > 0 && selectedCity && (
          <div className="mb-8">
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Select Area in {pakistaniCities.find(c => c.id === selectedCity)?.name}
            </label>
            <div className="relative">
              <select
                value={selectedArea}
                onChange={(e) => setSelectedArea(e.target.value)}
                className="w-full py-4 px-5 pr-12 border-2 border-gray-300 rounded-lg text-base outline-none focus:border-black transition-colors appearance-none bg-white cursor-pointer"
              >
                <option value="">Select an area</option>
                {cityAreas.map((areaItem) => (
                  <option key={areaItem.id} value={areaItem.name}>
                    {areaItem.name}
                  </option>
                ))}
              </select>
              <i className="fas fa-chevron-down absolute right-5 top-1/2 transform -translate-y-1/2 text-gray-500 pointer-events-none"></i>
            </div>
          </div>
        )}

        {/* Location Search */}
        <div className="relative mb-8">
          <input
            type="text"
            placeholder="Search city or area"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="w-full py-4 px-5 pr-12 border-2 border-gray-300 rounded-lg text-base outline-none focus:border-black transition-colors"
          />
          <i className="fas fa-search absolute right-5 top-1/2 transform -translate-y-1/2 text-gray-500"></i>
        </div>

        {/* Modal Footer */}
        <div className="flex justify-end">
          <button
            onClick={handleSelectLocation}
            disabled={!canSelect}
            className={`px-8 md:px-10 py-4 rounded-full font-semibold text-base md:text-lg transition-colors ${
              canSelect
                ? 'bg-black text-white hover:bg-gray-800'
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
