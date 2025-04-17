// app/items/page.tsx
import { GetStaticProps } from 'next';
import ItemsCard from '@/components/ItemsCard';
import { fetchMarketplaceItems } from '@/lib/fetchItems';
import Hero from '@/components/Hero';




export default async function ItemsPage() {
  const items = await fetchMarketplaceItems(); // ✅ fetch inside the component

  return (

    <div className="min-h-screen mt-10 bg-[#030014]">
    <ItemsCard heading="Koperasi Masjid Hidayatullah" items={items} />
    </div>
  );
};

