// lib/fetchCategories.ts
import { client } from './contentful';

export const fetchCategories = async () => {
  try {
    const res = await client.getEntries({
      content_type: 'category',
    });

    const rawCategories = res.items.map((cat: any) => {
      return cat.fields.kategori || cat.fields.name || cat.fields.title || 'Lainnya';
    });

    const uniqueCategories = [...new Set(rawCategories)];

    console.log('📦 Kategori:', uniqueCategories);
    console.log('📦 Kategori:', res.items.map(i => i.fields));


    return uniqueCategories;
  } catch (error) {
    console.error('❌ Error fetching categories:', error);
    return [];
  }
};
