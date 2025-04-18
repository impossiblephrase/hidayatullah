// app/items/page.tsx
import { fetchMarketplaceItems } from '@/lib/fetchItems';
import { fetchCategories } from '@/lib/fetchCategories';
import ClientItemsPage from './ClientItemsPage';



export default async function Page() {
  const items = await fetchMarketplaceItems(); // ✅ fetch inside the component
  const categories = await fetchCategories();

    return <ClientItemsPage items={items} categories={categories} />;
}
