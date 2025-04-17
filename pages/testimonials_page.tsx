import CompanyLogosBanner from '@/components/companies_banner';
import React from 'react';
import Image from 'next/image';

// Define the type for each testimonial
interface Testimonial {
  name: string;
  position: string;
  testimonial: string;
  image: string;
}

// Testimonial data array with the appropriate type
const testimonialsData: Testimonial[] = [

    {
      name: 'John Smith',
      position: 'CTO at InnovateTech',
      testimonial: 'Nexus AI solutions helped us increase efficiency by 40%. Their team expertise is unmatched!',
      image: '/testimonials/john.webp',
    },
    {
      name: 'Emily Zhang',
      position: 'CEO at DataNet Solutions',
      testimonial: 'The integration of Nexus AI into our existing platforms was seamless, and the ROI has been incredible.',
      image: '/testimonials/emily.webp',
    },
    {
      name: 'Carlos Rivera',
      position: 'Lead Engineer at AlphaTech',
      testimonial: 'Working with Nexus AI transformed the way we analyze data. Their AI solutions are cutting-edge and easy to implement.',
      image: '/testimonials/carlos.webp',
    },
    {
      name: 'Sarah Williams',
      position: 'Head of Operations at FinSmart',
      testimonial: 'Nexus AI empowered us with predictive analytics that have significantly optimized our decision-making process.',
      image: '/testimonials/sarah.webp',
    },
    {
      name: 'Michael Thompson',
      position: 'Product Manager at BlueWave',
      testimonial: 'The AI models developed by Nexus AI improved our customer engagement strategies by 50%. Their team is highly professional and adaptive.',
      image: '/testimonials/michael.webp',
    },
    {
      name: 'Aisha Khan',
      position: 'Founder & CEO at BrightTech',
      testimonial: 'Nexus AI has been a game-changer for our business. Their AI-driven tools have saved us countless hours and provided unmatched insights.',
      image: '/testimonials/aisha.webp',
    },
    {
      name: 'David Parker',
      position: 'Chief Data Officer at GreenLeaf Corp.',
      testimonial: 'The machine learning models from Nexus AI are incredibly robust and accurate. They have given us a competitive edge in our market.',
      image: '/testimonials/david.webp',
    },
    {
      name: 'Olivia Martin',
      position: 'Director of Innovation at CloudSynergy',
      testimonial: 'Nexus AI team provided outstanding support during the entire implementation process. Their solutions are both innovative and scalable.',
      image: '/testimonials/olivia.webp',
    },
    {
      name: 'James Bennett',
      position: 'VP of Engineering at DeltaWare',
      testimonial: 'Thanks to Nexus AI, we were able to automate several complex processes, drastically reducing time-to-market for our latest product.',
      image: '/testimonials/james.webp',
    }
  
];

const Testimonials: React.FC = () => {
  return (
    
    <div className="min-h-screen bg-gray-100 py-40">
      <div className="container mx-auto px-4 md:px-8">
        <h1 className="text-4xl font-bold text-center mb-8 text-gray-800">What Our Clients Say</h1>
        
        <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonialsData.map((testimonial, index) => (
            <div key={index} className="bg-white p-6 rounded-lg shadow-lg">
              <div className="flex items-center mb-4">
                <Image
                  src={testimonial.image}
                  alt={testimonial.name}
                  height={150}
                  width={150}
                  className="rounded-full object-cover"
                />
                <div className="ml-4">
                  <h2 className="text-xl font-semibold">{testimonial.name}</h2>
                  <p className="text-gray-600">{testimonial.position}</p>
                </div>
              </div>
              <p className="text-gray-700 italic">&quot;{testimonial.testimonial}&quot; </p>
            </div>
          ))}
        </div>
      </div>

      <CompanyLogosBanner />
      
    </div>
  );
};

export default Testimonials;
