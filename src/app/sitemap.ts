import { MetadataRoute } from 'next'
import { products } from '@/data/products'
import { blogPosts } from '@/data/blog'
import { categories } from '@/data/categories'

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://bestpick.com'

  const productUrls = products.map((p) => ({
    url: `${baseUrl}/products/${p.slug}`,
    lastModified: new Date(p.updatedAt),
  }))

  const blogUrls = blogPosts.map((p) => ({
    url: `${baseUrl}/blog/${p.slug}`,
    lastModified: new Date(p.publishedAt),
  }))

  const categoryUrls = categories.map((c) => ({
    url: `${baseUrl}/category/${c.slug}`,
    lastModified: new Date(),
  }))

  return [
    {
      url: baseUrl,
      lastModified: new Date(),
    },
    ...productUrls,
    ...blogUrls,
    ...categoryUrls,
  ]
}
