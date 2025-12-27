'use client';

import React, { createContext, useContext, useState, useEffect } from 'react';
import { cityMap } from '../menuData';

interface LocationContextType {
  currentLocation: string;
  orderType: 'delivery' | 'pickup';
  setLocation: (location: string) => void;
  setOrderType: (type: 'delivery' | 'pickup') => void;
}

const LocationContext = createContext<LocationContextType | undefined>(undefined);

export function LocationProvider({ children }: { children: React.ReactNode }) {
  const [currentLocation, setCurrentLocation] = useState<string>('Karachi');
  const [orderType, setOrderType] = useState<'delivery' | 'pickup'>('delivery');

  useEffect(() => {
    // Load location from localStorage if available
    const savedLocation = localStorage.getItem('location');
    const savedOrderType = localStorage.getItem('orderType');
    if (savedLocation) {
      setCurrentLocation(savedLocation);
    }
    if (savedOrderType === 'delivery' || savedOrderType === 'pickup') {
      setOrderType(savedOrderType);
    }
  }, []);

  useEffect(() => {
    // Save location to localStorage
    localStorage.setItem('location', currentLocation);
    localStorage.setItem('orderType', orderType);
  }, [currentLocation, orderType]);

  const setLocation = (location: string) => {
    setCurrentLocation(location);
  };

  return (
    <LocationContext.Provider
      value={{
        currentLocation,
        orderType,
        setLocation,
        setOrderType,
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

