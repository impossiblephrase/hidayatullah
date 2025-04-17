import { GetStaticProps } from 'next';
import ItemsCard, { MarketplaceItem } from '@/components/ItemsCard';
import { fetchMarketplaceItems } from '@/lib/fetchItems';

interface MarketplacePageProps {
  items: MarketplaceItem[];
}

const MarketplacePage = ({ items }: MarketplacePageProps) => {
  return (
    <main>
      <ItemsCard heading="Explore Our Marketplace" items={items} />
    </main>
  );
};

export const getStaticProps: GetStaticProps = async () => {
  const items = await fetchMarketplaceItems();

  return {
    props: { items },
    revalidate: 60, // Regenerate page every 60s (optional)
  };
};

export default MarketplacePage;