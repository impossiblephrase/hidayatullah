import { client } from './contentful';

export const fetchMarketplaceItems = async () => {
    try {
      const res = await client.getEntries({ 
        content_type: 'itemsKoperasi',
        include: 2  // Pastikan include assets
      });
  
      return res.items.map((item: any) => {
        // Handle image array
        const firstImageId = item.fields.image?.[0]?.sys?.id;
        const asset = res.includes?.Asset?.find((a: any) => a.sys.id === firstImageId);
        
        const imageUrl = asset?.fields?.file?.url 
          ? `https:${asset.fields.file.url}` 
          : '/placeholder.png';
  
        return {
          title: item.fields.title || '',
          description: item.fields.description || '',
          price: Array.isArray(item.fields.price) 
                 ? item.fields.price[0] || '' 
                 : item.fields.price || '',
          imageSrc: imageUrl,
          link: item.fields.link || '',
        };
      });
    } catch (error) {
      console.error('❌ Error fetching from Contentful:', error);
      return [];
    }
  };