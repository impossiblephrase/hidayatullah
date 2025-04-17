import React from 'react';
import Link from 'next/link';
import CompanyLogosBanner from '@/components/companies_banner';
import Hero from '@/components/Hero';

const HomePage = () => {
  return (
    <div className="min-h-screen bg-[#030014]">
      {/* Hero Section */}
      <section>
        <div>
          <Hero />
        </div>
      </section>
   
      <CompanyLogosBanner />

    </div>
  );
};

export default HomePage;
