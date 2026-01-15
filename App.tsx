
import React, { useState } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import Features from './components/Features';
import Itinerary from './components/Itinerary';
import InclusionSection from './components/InclusionSection';
import Pricing from './components/Pricing';
import ContactForm from './components/ContactForm';
import TrustSection from './components/TrustSection';
import Footer from './components/Footer';

const App: React.FC = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main>
        <Hero />
        <Features />
        <Itinerary />
        <InclusionSection />
        <Pricing />
        <ContactForm />
        <TrustSection />
      </main>
      <Footer />
    </div>
  );
};

export default App;
