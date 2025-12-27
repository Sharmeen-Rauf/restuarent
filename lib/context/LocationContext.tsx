'use client';

import React, { createContext, useContext, useState, useEffect } from 'react';

interface LocationContextType {
  country: string;
  city: string;
  area: string;
  orderType: 'delivery' | 'pickup';
  setCountry: (country: string) => void;
  setCity: (city: string) => void;
  setArea: (area: string) => void;
  setOrderType: (type: 'delivery' | 'pickup') => void;
  getDisplayLocation: () => string;
}

const LocationContext = createContext<LocationContextType | undefined>(undefined);

export function LocationProvider({ children }: { children: React.ReactNode }) {
  const [country, setCountry] = useState<string>('Pakistan');
  const [city, setCity] = useState<string>('Karachi');
  const [area, setAreaState] = useState<string>('Shah Faisal Colony');
  const [orderType, setOrderType] = useState<'delivery' | 'pickup'>('delivery');

  useEffect(() => {
    // Load location from localStorage if available
    const savedCountry = localStorage.getItem('location_country');
    const savedCity = localStorage.getItem('location_city');
    const savedArea = localStorage.getItem('location_area');
    const savedOrderType = localStorage.getItem('orderType');
    
    if (savedCountry) setCountry(savedCountry);
    if (savedCity) setCity(savedCity);
    if (savedArea) setAreaState(savedArea);
    if (savedOrderType === 'delivery' || savedOrderType === 'pickup') {
      setOrderType(savedOrderType);
    }
  }, []);

  useEffect(() => {
    // Save location to localStorage
    localStorage.setItem('location_country', country);
    localStorage.setItem('location_city', city);
    localStorage.setItem('location_area', area);
    localStorage.setItem('orderType', orderType);
  }, [country, city, area, orderType]);

  const setArea = (newArea: string) => {
    setAreaState(newArea);
  };

  const getDisplayLocation = () => {
    if (area) {
      return `${area}, ${city}`;
    }
    return city;
  };

  return (
    <LocationContext.Provider
      value={{
        country,
        city,
        area,
        orderType,
        setCountry,
        setCity,
        setArea,
        setOrderType,
        getDisplayLocation,
      }}
    >
      {children}
    </LocationContext.Provider>
  );
}

export function useLocation() {
  const context = useContext(LocationContext);
  if (context === undefined) {
    throw new Error('useLocation must be used within a LocationProvider');
  }
  return context;
}
