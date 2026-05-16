import { products } from "@/data/products";
import ProductCard from "@/components/product/ProductCard";
import { Button, buttonVariants } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import Link from "next/link";
import type { Product } from "@/types";

import { getProducts } from "@/sanity/lib/service";
import { projectId } from "@/sanity/env";

const TrendingProducts = async () => {
  let trending: Product[] = [];
  
  if (projectId && projectId !== 'placeholder') {
    try {
      const allProducts = await getProducts();
      trending = allProducts.filter((p: any) => p.trending).slice(0, 3);
    } catch (error) {
      trending = products.filter((p) => p.trending).slice(0, 3);
    }
  } else {
    trending = products.filter((p) => p.trending).slice(0, 3);
  }

  return (
    <section className="py-20 bg-muted/20">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
          <div className="space-y-2">
            <h2 className="text-3xl font-bold tracking-tight">Trending Reviews</h2>
            <p className="text-muted-foreground">The most talked about products right now.</p>
          </div>
          <Link href="/trending" className={buttonVariants({ variant: "outline" })}>
            View All Trending <ArrowRight className="ml-2 h-4 w-4" />
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {trending.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default TrendingProducts;
