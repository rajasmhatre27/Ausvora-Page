import React, { useRef } from 'react';
import HeroSection from '../components/HeroSection';
import ServicesSection from '../components/ServicesSection';
import VisionValuesSection from '../components/VisionValuesSection';
import MarketplacesSection from '../components/MarketplacesSection'; // ✅ Add this

const Home = () => {
  const servicesRef = useRef(null);

  return (
    <div>
      <HeroSection scrollToRef={servicesRef} />

      <div ref={servicesRef}>
        <ServicesSection />
      </div>

      <MarketplacesSection /> {/* ✅ New section here */}

      <VisionValuesSection />
    </div>
  );
};

export default Home;
