import { products } from "@/data/products";
import ProductCard from "@/components/product/ProductCard";
import Breadcrumbs from "@/components/seo/Breadcrumbs";

export default function TrendingPage() {
  const trending = products.filter((p) => p.trending);

  return (
    <div className="container mx-auto px-4 pb-20">
      <Breadcrumbs items={[{ name: "Trending", href: "/trending" }]} />

      <div className="mt-8 mb-16 space-y-4 text-center">
        <h1 className="text-4xl md:text-6xl font-extrabold tracking-tight">
          <span className="text-[#FF9900]">Trending</span> Now
        </h1>
        <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
          The products everyone is talking about. See what's currently popular in the tech and lifestyle world.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
        {trending.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </div>
  );
}
