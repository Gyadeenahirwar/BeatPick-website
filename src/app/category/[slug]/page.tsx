import { products } from "@/data/products";
import { categories } from "@/data/categories";
import { notFound } from "next/navigation";
import ProductCard from "@/components/product/ProductCard";
import Breadcrumbs from "@/components/seo/Breadcrumbs";
import { Metadata } from "next";

interface Props {
  params: { slug: string };
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const category = categories.find((c) => c.slug === slug);
  if (!category) return { title: "Category Not Found" };

  return {
    title: `Best ${category.name} in 2024 - Reviews & Guides`,
    description: category.description,
  };
}

export default async function CategoryPage({ params }: Props) {
  const { slug } = await params;
  const category = categories.find((c) => c.slug === slug);
  if (!category) notFound();

  const categoryProducts = products.filter((p) => p.category === category.slug);

  return (
    <div className="container mx-auto px-4 pb-20">
      <Breadcrumbs items={[{ name: category.name, href: `/category/${category.slug}` }]} />

      <div className="mt-8 mb-16 space-y-4">
        <h1 className="text-4xl md:text-6xl font-extrabold tracking-tight">
          Best <span className="text-[#FF9900]">{category.name}</span>
        </h1>
        <p className="text-xl text-muted-foreground max-w-3xl leading-relaxed">
          {category.description} Our experts have tested and reviewed the top-rated {category.name.toLowerCase()} to help you find the perfect one for your needs.
        </p>
      </div>

      {categoryProducts.length > 0 ? (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
          {categoryProducts.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      ) : (
        <div className="py-20 text-center space-y-4 rounded-3xl border-2 border-dashed">
          <h3 className="text-2xl font-bold">No products found</h3>
          <p className="text-muted-foreground">We are currently working on reviews for this category. Check back soon!</p>
        </div>
      )}
    </div>
  );
}
