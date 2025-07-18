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
  category: string; // tambahkan ini kalau mau pakai filter kategori
}

interface ItemsCardProps {
  items: MarketplaceItem[];
  heading: string;
  highlighted?: boolean;
}

const ItemsCard: React.FC<ItemsCardProps> = ({ items, heading, highlighted = false }) => {
  return (
    <section className={`py-8 md:py-8 container mx-auto px-1 sm:px-1 ${highlighted ? 'bg-yellow-50' : ''}`}>
      <h2 className={`text-2xl md:text-4xl font-bold text-center mb-6 md:mb-12 ${highlighted ? 'text-yellow-700' : 'text-white'}`}>
        {heading}
      </h2>
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-1 md:gap-2">
        {items.map((item, index) => (
          <div
            key={index}
            className={`relative flex flex-col p-0 shadow-xl rounded-lg hover:shadow-2xl transition duration-500 ${highlighted ? 'bg-gray-300 border-black' : 'bg-gray-300'}`}
            >
              <div className="relative p-0 h-48 sm:h-64 md:h-80 lg:h-96 overflow-hidden rounded-lg bg-clip-border">
                  <Image
                  src={item.imageSrc}
                  alt={item.title}
                  fill
                  className="object-cover mb-4 shadow-md"
                />
              </div >
              <div className='p-1'>
                <h1 className="mt-1 text-sm sm:text-base md:text-xl font-bold text-gray-800">
                  {item.title}
                </h1>
                <p className="mt-0 text-xs sm:text-sm md:text-base mb-2 text-gray-600 leading-relaxed">
                {item.description}
                </p>
                <h2 className="text-sm sm:text-base text-md:text-xl font-bold text-sky-500">
                  {item.price}
                </h2>
              {item.link && (
                <Link 
                href={item.link} className="mt-3 sm:mt-3 md:mt-3 inline-block text-white bg-blue-500 hover:bg-blue-700 transition px-3 py-1 sm:px-4 sm:py-2 rounded-lg text-xs sm:text-sm">                  
                link terkait
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
