// app/items/ClientItemsPage.tsx
'use client';

import { useState } from 'react';
import { MarketplaceItem } from '@/components/ItemsCard';
import ItemsCard from '@/components/ItemsCard';

export default function ClientItemsPage({
  items,
  categories,
}: {
  items: MarketplaceItem[];
  categories: string[];
}) {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('Semua');

  const filteredItems = items.filter((item) => {
    console.log('selected:', selectedCategory, 'item:', item.category);
    console.log(items.map((item) => ({
      title: item.title,
      category: item.category,
    })));
    

    const matchCategory =
    selectedCategory === 'Semua' ||
    item.category.trim().toLowerCase() === selectedCategory.trim().toLowerCase();
    console.log('selectedCategory:', selectedCategory);
    console.log('item categories:', items.map(i => i.category));    

  
    const matchSearch = item.title.toLowerCase().includes(searchTerm.toLowerCase());

    return matchCategory && matchSearch;
  });

  const uniqueCategories = ['Semua', ...categories];

  return (
    <div className="min-h-screen mt-20 bg-[#030014] px-4">
      <section className="sticky top-16 md:top-16 z-50 w-full px-10 flex flex-col items-center bg-[#030014]">
        <input
          type="text"
          placeholder="nyari apa? . . ."
          className="w-full p-1 mb-4 rounded bg-white text-black"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />

        <select
          value={selectedCategory}
          onChange={(e) => setSelectedCategory(e.target.value)}
          className="w-full p-1 mb-4 rounded bg-gray-800 text-white"
        >
          {uniqueCategories.map((cat) => (
          <option key={cat} value={cat.trim()}>
            {cat}
          </option>
          ))}
        </select>
      </section>

      <ItemsCard heading="Koperasi Masjid Hidayatullah" items={filteredItems} />
    </div>
  );
}
