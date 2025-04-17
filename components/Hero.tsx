import React from 'react';
import HeroContent from './HeroContent';

const Hero: React.FC = () => {
  return (
    <div
      className="relative h-screen bg-cover bg-center"
      style={{ backgroundImage: "url('/crew.jpg')" }}
    >
      {/* Optional: Overlay */}
      <div className="absolute inset-0 bg-black opacity-50"></div>
      <HeroContent />
    </div>
  );
};

export default Hero;
