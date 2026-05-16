import Hero from "@/components/sections/Hero";
import TrendingProducts from "@/components/sections/TrendingProducts";
import Categories from "@/components/sections/Categories";
import Newsletter from "@/components/sections/Newsletter";
import { products } from "@/data/products";
import { blogPosts } from "@/data/blog";
import ProductCard from "@/components/product/ProductCard";
import Link from "next/link";
import { ArrowRight, BookOpen } from "lucide-react";
import Image from "next/image";

import { getProducts, getBlogPosts } from "@/sanity/lib/service";
import { projectId } from "@/sanity/env";

import { Product, BlogPost } from "@/types";

export default async function Home() {
  let featured: Product[] = [];
  let latestBlogs: BlogPost[] = [];

  if (projectId && projectId !== 'placeholder') {
    try {
      const allProducts = await getProducts();
      const allPosts = await getBlogPosts();
      featured = allProducts.filter((p: any) => p.featured).slice(0, 4);
      latestBlogs = allPosts.slice(0, 3);
    } catch (error) {
      console.error("Sanity fetch error:", error);
      featured = products.filter(p => p.featured).slice(0, 4);
      latestBlogs = blogPosts.slice(0, 3);
    }
  } else {
    featured = products.filter(p => p.featured).slice(0, 4);
    latestBlogs = blogPosts.slice(0, 3);
  }

  return (
    <div className="flex flex-col gap-0">
      <Hero />
      <TrendingProducts />
      <Categories />

      {/* Featured Reviews Section */}
      <section className="py-20 bg-muted/10">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between mb-12">
            <h2 className="text-3xl font-bold tracking-tight">Featured Reviews</h2>
            <Link href="/products" className="text-sm font-bold text-[#FF9900] flex items-center hover:underline">
              View All <ArrowRight className="ml-1 h-4 w-4" />
            </Link>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {featured.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        </div>
      </section>

      {/* Latest Blogs Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold tracking-tight mb-4">Buying Guides & Tech Tips</h2>
            <p className="text-muted-foreground">Expert advice to help you choose the best products.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {latestBlogs.map((post) => (
              <Link key={post.id} href={`/blog/${post.slug}`} className="group flex flex-col space-y-4">
                <div className="relative h-60 rounded-2xl overflow-hidden border">
                  <Image
                    src={post.image}
                    alt={post.title}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute top-4 left-4 bg-white/90 dark:bg-black/80 backdrop-blur-sm px-3 py-1 rounded-full text-[10px] font-bold uppercase tracking-widest text-[#FF9900]">
                    {post.category}
                  </div>
                </div>
                <div className="space-y-2">
                  <div className="flex items-center text-xs text-muted-foreground space-x-4">
                    <span className="flex items-center"><BookOpen className="h-3 w-3 mr-1" /> {post.readTime}</span>
                    <span>{post.publishedAt}</span>
                  </div>
                  <h3 className="text-xl font-bold group-hover:text-[#FF9900] transition-colors line-clamp-2">
                    {post.title}
                  </h3>
                  <p className="text-sm text-muted-foreground line-clamp-2">
                    {post.excerpt}
                  </p>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <Newsletter />
    </div>
  );
}
