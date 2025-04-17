// components/ItemsCard.tsx
import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { BiFullscreen } from 'react-icons/bi';

interface MarketplaceItem {
  title: string;
  description: string;
  price: string;
  imageSrc: string;
  link?: string;
}

interface ItemsCardProps {
  items: MarketplaceItem[];
  heading: string;
  highlighted?: boolean;
}

const ItemsCard: React.FC<ItemsCardProps> = ({ items, heading, highlighted = false }) => {
  return (
    <section className={`py-12 md:py-16 container mx-auto px-4 sm:px-6 ${highlighted ? 'bg-yellow-50' : ''}`}>
      <h2 className={`text-2xl md:text-4xl font-bold text-center mb-6 md:mb-12 ${highlighted ? 'text-yellow-700' : 'text-white'}`}>
        {heading}
      </h2>
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4 md:gap-6">
        {items.map((item, index) => (
          <div
            key={index}
            className={`relative flex flex-col p-3 shadow-xl rounded-lg hover:shadow-2xl transition duration-500 ${highlighted ? 'bg-gray-300 border-black' : 'bg-gray-300'}`}
            >
              <div className="relative p-2 h-48 sm:h-64 md:h-80 lg:h-96 overflow-hidden rounded-xl bg-clip-border">
                  <Image
                  src={item.imageSrc}
                  alt={item.title}
                  fill
                  className="rounded-lg object-cover mb-4 shadow-md"
                />
              </div>
              <div>
                <h1 className="text-sm sm:text-base md:text-xl font-bold text-gray-800">
                  {item.title}
                </h1>
                <p className="mt-1 text-xs sm:text-sm md:text-base mb-2 text-gray-600 leading-relaxed">
                {item.description}
                </p>
                <h2 className="text-sm sm:text-base md:text-xl font-bold text-sky-500">
                  {item.price}
                </h2>
              {item.link && (
                <Link 
                href={item.link} className="mt-2 sm:mt-3 md:mt-4 inline-block text-white bg-blue-600 hover:bg-blue-700 transition px-3 py-1 sm:px-4 sm:py-2 rounded-lg text-sm sm:text-base">                  
                View
                </Link>
              )}
              </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default ItemsCard;
export type { MarketplaceItem };
