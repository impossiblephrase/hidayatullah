import { client } from './contentful';

export const fetchMarketplaceItems = async () => {
  try {
    const res = await client.getEntries({
      content_type: 'itemsKoperasi',
      include: 2,
    });

    console.log('🔍 Includes:', res.includes); // Log includes untuk melihat relasi yang diambil

    return res.items.map((item: any) => {
      console.log('📦 item.fields.category:', item.fields.category); // Debug category

      const firstImageId = item.fields.image?.[0]?.sys?.id;
      const asset = res.includes?.Asset?.find((a: any) => a.sys.id === firstImageId);

      const imageUrl = asset?.fields?.file?.url
        ? `https:${asset.fields.file.url}`
        : '/placeholder.png';

        const category = item.fields.category?.fields?.kategori || 'Lainnya';
        const categorySlug = item.fields.category?.fields?.slug || '';

      
        if (!item.fields.category?.fields) {
          console.log('⚠️ Category relation not resolved:', item.fields.category);
        }
        

      return {
        title: item.fields.title || '',
        description: item.fields.description || '',
        price: Array.isArray(item.fields.price)
          ? item.fields.price[0] || ''
          : item.fields.price || '',
        imageSrc: imageUrl,
        link: item.fields.link || '',
        category,
        categorySlug,
      };
    });
  } catch (error) {
    console.error('❌ Error fetching from Contentful:', error);
    return [];
  }
};
