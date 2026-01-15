// Fix: Added React import to define the React namespace for ReactNode
import React from 'react';

export interface ItineraryDay {
  day: string;
  date: string;
  location: string;
  title: string;
  description: string;
  image: string;
  region: 'Capadócia' | 'Istambul' | 'Bodrum' | 'Brasil';
}

export interface Feature {
  id: number;
  title: string;
  description: string;
  icon: React.ReactNode;
}
