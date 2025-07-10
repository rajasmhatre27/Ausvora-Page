import React, { useRef } from 'react';
import HeroSection from '../components/HeroSection';
import ServicesSection from '../components/ServicesSection';
import VisionValuesSection from '../components/VisionValuesSection';

const Home = () => {
  const servicesRef = useRef(null); // Step 1: Create a ref

  return (
    <div>
      {/* Step 2: Pass ref to HeroSection */}
      <HeroSection scrollToRef={servicesRef} />

      {/* Step 3: Attach ref to the ServicesSection */}
      <div ref={servicesRef}>
        <ServicesSection />
      </div>

      <VisionValuesSection />
    </div>
  );
};

export default Home;
