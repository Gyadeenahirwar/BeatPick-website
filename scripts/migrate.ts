import { products } from '../src/data/products';
import { blogPosts } from '../src/data/blog';
import { categories } from '../src/data/categories';
import { createClient } from '@sanity/client';

const client = createClient({
  projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID,
  dataset: process.env.NEXT_PUBLIC_SANITY_DATASET || 'production',
  token: process.env.SANITY_API_TOKEN, // Needs a token with write access
  useCdn: false,
  apiVersion: '2024-05-16',
});

async function migrate() {
  console.log('Starting migration...');

  // 1. Migrate Categories
  const categoryMap: any = {};
  for (const cat of categories) {
    const doc = {
      _type: 'category',
      name: cat.name,
      slug: { _type: 'slug', current: cat.slug },
      description: cat.description,
    };
    const created = await client.create(doc);
    categoryMap[cat.slug] = created._id;
    console.log(`Migrated category: ${cat.name}`);
  }

  // 2. Migrate Products
  for (const p of products) {
    const doc = {
      _type: 'product',
      title: p.title,
      slug: { _type: 'slug', current: p.slug },
      shortDescription: p.shortDescription,
      description: p.description,
      price: p.price,
      rating: p.rating,
      reviewsCount: p.reviewsCount,
      category: {
        _type: 'reference',
        _ref: categoryMap[p.category] || '',
      },
      features: p.features,
      pros: p.pros,
      cons: p.cons,
      affiliateLink: p.affiliateLink,
      trending: p.trending,
      featured: p.featured,
      deal: p.deal,
      faq: p.faq,
      tags: p.tags,
    };
    await client.create(doc);
    console.log(`Migrated product: ${p.title}`);
  }

  // 3. Migrate Blog Posts
  for (const b of blogPosts) {
    const doc = {
      _type: 'blog',
      title: b.title,
      slug: { _type: 'slug', current: b.slug },
      excerpt: b.excerpt,
      category: b.category,
      author: b.author,
      readTime: b.readTime,
      publishedAt: new Date(b.publishedAt).toISOString(),
    };
    await client.create(doc);
    console.log(`Migrated blog post: ${b.title}`);
  }

  console.log('Migration complete! Note: Images must be uploaded manually via the Studio.');
}

migrate().catch(console.error);
