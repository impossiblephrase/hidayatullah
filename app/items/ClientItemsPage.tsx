'use client';

import { useEffect, useRef, useState } from 'react';
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
  const [filteredItems, setFilteredItems] = useState<MarketplaceItem[]>([]);

  const itemsRef = useRef<HTMLDivElement>(null);

  const uniqueCategories = ['Semua', ...categories];

  useEffect(() => {
    const filtered = items.filter((item) => {
      const matchCategory =
        selectedCategory === 'Semua' ||
        item.category.trim().toLowerCase() === selectedCategory.trim().toLowerCase();

      const matchSearch = item.title
        .toLowerCase()
        .includes(searchTerm.toLowerCase());

      return matchCategory && matchSearch;
    });

    setFilteredItems(filtered);

    // Scroll into view after filtering
    if (itemsRef.current) {
      itemsRef.current.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  }, [items, searchTerm, selectedCategory]);

  return (
    <div className="min-h-screen mt-20 bg-[#030014] px-1">
      <section className="sticky top-14 md:top-14 z-40 w-full py-3 px-10 flex flex-col items-center bg-[#030014]">
        <input
          type="text"
          placeholder="nyari apa? . . ."
          className="w-full p-1 mb-3 rounded bg-white text-black"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />

        <select
          value={selectedCategory}
          onChange={(e) => setSelectedCategory(e.target.value)}
          className="w-full p-1 rounded bg-gray-800 text-white"
        >
          {uniqueCategories.map((cat) => (
            <option key={cat} value={cat.trim()}>
              {cat}
            </option>
          ))}
        </select>
      </section>

      <div ref={itemsRef} className="scroll-mt-32">
        <ItemsCard heading="Koperasi Masjid Hidayatullah" items={filteredItems} />
      </div>

    </div>
  );
}
