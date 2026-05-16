import { products } from "@/data/products";
import ProductCard from "@/components/product/ProductCard";
import Breadcrumbs from "@/components/seo/Breadcrumbs";

export default function DealsPage() {
  const deals = products.filter((p) => p.deal);

  return (
    <div className="container mx-auto px-4 pb-20">
      <Breadcrumbs items={[{ name: "Deals", href: "/deals" }]} />

      <div className="mt-8 mb-16 space-y-4 text-center">
        <h1 className="text-4xl md:text-6xl font-extrabold tracking-tight">
          Today's <span className="text-[#FF9900]">Hot Deals</span>
        </h1>
        <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
          We've scoured Amazon to find the best discounts on top-rated tech and lifestyle products.
        </p>
      </div>

      {deals.length > 0 ? (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
          {deals.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      ) : (
        <div className="py-20 text-center space-y-4 rounded-3xl border-2 border-dashed">
          <h3 className="text-2xl font-bold">No deals found right now</h3>
          <p className="text-muted-foreground">Check back soon for the latest Amazon discounts.</p>
        </div>
      )}
    </div>
  );
}
