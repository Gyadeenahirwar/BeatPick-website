import { client } from "./client";
import { 
  productsQuery, 
  productBySlugQuery, 
  blogPostsQuery, 
  blogPostBySlugQuery, 
  categoriesQuery 
} from "./queries";

export async function getProducts() {
  return await client.fetch(productsQuery);
}

export async function getProductBySlug(slug: string) {
  return await client.fetch(productBySlugQuery, { slug });
}

export async function getBlogPosts() {
  return await client.fetch(blogPostsQuery);
}

export async function getBlogPostBySlug(slug: string) {
  return await client.fetch(blogPostBySlugQuery, { slug });
}

export async function getCategories() {
  return await client.fetch(categoriesQuery);
}
