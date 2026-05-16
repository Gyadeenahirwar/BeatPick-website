import { products } from "@/data/products";
import { blogPosts } from "@/data/blog";
import ProductCard from "@/components/product/ProductCard";
import Link from "next/link";
import Image from "next/image";
import { Search as SearchIcon } from "lucide-react";

export default async function SearchPage({
  searchParams,
}: {
  searchParams: Promise<{ q?: string }>;
}) {
  const { q } = await searchParams;
  const query = q?.toLowerCase() || "";

  const filteredProducts = products.filter(
    (p) =>
      p.title.toLowerCase().includes(query) ||
      p.description.toLowerCase().includes(query) ||
      p.tags.some((t) => t.toLowerCase().includes(query))
  );

  const filteredPosts = blogPosts.filter(
    (p) =>
      p.title.toLowerCase().includes(query) ||
      p.excerpt.toLowerCase().includes(query) ||
      p.tags.some((t) => t.toLowerCase().includes(query))
  );

  const totalResults = filteredProducts.length + filteredPosts.length;

  return (
    <div className="container mx-auto px-4 pb-20">
      <div className="py-12 border-b mb-12">
        <h1 className="text-3xl font-bold mb-4">
          Search Results for "{query}"
        </h1>
        <p className="text-muted-foreground">Found {totalResults} results</p>
      </div>

      {totalResults > 0 ? (
        <div className="space-y-16">
          {filteredProducts.length > 0 && (
            <section>
              <h2 className="text-2xl font-bold mb-8">Products ({filteredProducts.length})</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                {filteredProducts.map((product) => (
                  <ProductCard key={product.id} product={product} />
                ))}
              </div>
            </section>
          )}

          {filteredPosts.length > 0 && (
            <section>
              <h2 className="text-2xl font-bold mb-8">Blog Posts ({filteredPosts.length})</h2>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                {filteredPosts.map((post) => (
                  <Link key={post.id} href={`/blog/${post.slug}`} className="group space-y-4">
                    <div className="relative h-48 rounded-2xl overflow-hidden border">
                      <Image src={post.image} alt={post.title} fill className="object-cover group-hover:scale-110 transition-transform" />
                    </div>
                    <h3 className="font-bold group-hover:text-[#FF9900] transition-colors">{post.title}</h3>
                  </Link>
                ))}
              </div>
            </section>
          )}
        </div>
      ) : (
        <div className="py-20 text-center space-y-6">
          <div className="h-20 w-20 rounded-full bg-muted mx-auto flex items-center justify-center">
            <SearchIcon className="h-10 w-10 text-muted-foreground" />
          </div>
          <h2 className="text-2xl font-bold">No results found</h2>
          <p className="text-muted-foreground">Try searching with different keywords.</p>
        </div>
      )}
    </div>
  );
}
