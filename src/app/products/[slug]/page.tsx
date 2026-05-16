import { products } from "@/data/products";
import { notFound } from "next/navigation";
import Image from "next/image";
import { Star, Check, X, ShoppingCart, Share2, MessageCircle, Send, Link2, HelpCircle } from "lucide-react";
import { Button, buttonVariants } from "@/components/ui/button";
import Breadcrumbs from "@/components/seo/Breadcrumbs";
import ProductCard from "@/components/product/ProductCard";
import { Metadata } from "next";

interface Props {
  params: { slug: string };
}

import { getProductBySlug, getProducts } from "@/sanity/lib/service";
import { projectId } from "@/sanity/env";

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  let product: any;

  if (projectId && projectId !== 'placeholder') {
    product = await getProductBySlug(slug);
  }
  
  if (!product) {
    product = products.find((p) => p.slug === slug);
  }

  if (!product) return { title: "Product Not Found" };

  return {
    title: `${product.title} Review - BestPick`,
    description: product.shortDescription,
    openGraph: {
      images: [typeof product.images[0] === 'string' ? product.images[0] : ''],
    },
  };
}

export default async function ProductReviewPage({ params }: Props) {
  const { slug } = await params;
  let product: any;
  let allProducts: any[] = [];

  if (projectId && projectId !== 'placeholder') {
    product = await getProductBySlug(slug);
    allProducts = await getProducts();
  }
  
  if (!product) {
    product = products.find((p) => p.slug === slug);
    allProducts = products;
  }

  if (!product) notFound();

  const relatedProducts = allProducts
    .filter((p: any) => p.category === product.category && p.slug !== product.slug)
    .slice(0, 4);

  return (
    <div className="container mx-auto px-4 pb-20">
      <Breadcrumbs
        items={[
          { name: product.category.charAt(0).toUpperCase() + product.category.slice(1), href: `/category/${product.category}` },
          { name: product.title, href: `/products/${product.slug}` },
        ]}
      />

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 mt-8">
        {/* Left: Images & Info */}
        <div className="lg:col-span-7 space-y-12">
          {/* Hero Section */}
          <div className="space-y-6">
            <h1 className="text-3xl md:text-5xl font-extrabold tracking-tight leading-tight">
              {product.title}
            </h1>
            <div className="flex flex-wrap items-center gap-6">
              <div className="flex items-center bg-[#FF9900]/10 text-[#FF9900] px-3 py-1 rounded-full font-bold">
                <Star className="h-4 w-4 fill-[#FF9900] mr-1" />
                {product.rating} / 5
              </div>
              <div className="text-sm text-muted-foreground font-medium">
                Updated on {product.updatedAt}
              </div>
              <div className="flex items-center gap-2">
                <Share2 className="h-4 w-4 text-muted-foreground" />
                <div className="flex gap-2">
                  <Button variant="ghost" size="icon" className="h-8 w-8 rounded-full"><MessageCircle className="h-4 w-4" /></Button>
                  <Button variant="ghost" size="icon" className="h-8 w-8 rounded-full"><Send className="h-4 w-4" /></Button>
                  <Button variant="ghost" size="icon" className="h-8 w-8 rounded-full"><Link2 className="h-4 w-4" /></Button>
                </div>
              </div>
            </div>

            <div className="relative aspect-video w-full rounded-3xl overflow-hidden border">
              <Image
                src={product.images[0]}
                alt={product.title}
                fill
                className="object-cover"
                priority
              />
            </div>
          </div>

          {/* Features */}
          <div className="space-y-6">
            <h2 className="text-2xl font-bold">Top Features</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {product.features.map((feature, i) => (
                <div key={i} className="flex items-start p-4 rounded-2xl bg-muted/30 border">
                  <div className="h-6 w-6 rounded-full bg-green-500/10 flex items-center justify-center mr-3 shrink-0">
                    <Check className="h-4 w-4 text-green-600" />
                  </div>
                  <span className="text-sm font-medium">{feature}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Detailed Review */}
          <div className="prose prose-lg dark:prose-invert max-w-none">
            <h2 className="text-2xl font-bold mb-4">In-Depth Review</h2>
            <p className="text-muted-foreground leading-relaxed">
              {product.description}
            </p>
          </div>

          {/* Pros and Cons */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-green-500/5 rounded-3xl p-8 border border-green-500/20">
              <h3 className="text-xl font-bold text-green-700 dark:text-green-400 mb-6 flex items-center">
                <Check className="h-5 w-5 mr-2" /> Pros
              </h3>
              <ul className="space-y-4">
                {product.pros.map((pro, i) => (
                  <li key={i} className="flex items-start text-sm font-medium">
                    <span className="h-1.5 w-1.5 rounded-full bg-green-500 mt-1.5 mr-3 shrink-0" />
                    {pro}
                  </li>
                ))}
              </ul>
            </div>
            <div className="bg-red-500/5 rounded-3xl p-8 border border-red-500/20">
              <h3 className="text-xl font-bold text-red-700 dark:text-red-400 mb-6 flex items-center">
                <X className="h-5 w-5 mr-2" /> Cons
              </h3>
              <ul className="space-y-4">
                {product.cons.map((con, i) => (
                  <li key={i} className="flex items-start text-sm font-medium">
                    <span className="h-1.5 w-1.5 rounded-full bg-red-500 mt-1.5 mr-3 shrink-0" />
                    {con}
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* FAQ Section */}
          <div className="space-y-6">
            <h2 className="text-2xl font-bold flex items-center">
              <HelpCircle className="h-6 w-6 mr-2 text-[#FF9900]" /> Frequently Asked Questions
            </h2>
            <div className="space-y-4">
              {product.faq.map((item, i) => (
                <div key={i} className="p-6 rounded-2xl border bg-card">
                  <h4 className="font-bold mb-2">{item.question}</h4>
                  <p className="text-sm text-muted-foreground leading-relaxed">{item.answer}</p>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Right: Sticky Sidebar */}
        <div className="lg:col-span-5">
          <div className="sticky top-24 space-y-8">
            {/* CTA Card */}
            <div className="rounded-3xl border bg-card p-8 shadow-xl">
              <div className="flex items-center justify-between mb-6">
                <span className="text-sm font-bold uppercase tracking-widest text-[#FF9900]">Current Price</span>
                <span className="text-3xl font-extrabold">{product.price}</span>
              </div>
              <p className="text-xs text-muted-foreground mb-8">
                *Prices and availability are subject to change. Amazon prices are updated regularly.
              </p>
              <a 
                href={product.affiliateLink} 
                target="_blank" 
                rel="noopener noreferrer"
                className={buttonVariants({ variant: "amazon", size: "lg" }) + " w-full h-16 rounded-2xl text-lg group"}
              >
                <ShoppingCart className="mr-2 h-5 w-5 group-hover:scale-110 transition-transform" />
                Buy on Amazon
              </a>
              <p className="text-[10px] text-center text-muted-foreground mt-4">
                By clicking "Buy on Amazon" you will be redirected to the Amazon store.
              </p>
            </div>

            {/* Trending Tags */}
            <div className="rounded-3xl border bg-muted/20 p-8">
              <h4 className="font-bold mb-4">Related Tags</h4>
              <div className="flex flex-wrap gap-2">
                {product.tags.map((tag) => (
                  <span key={tag} className="px-3 py-1 rounded-full bg-background border text-xs font-medium text-muted-foreground hover:text-[#FF9900] transition-colors cursor-pointer">
                    #{tag}
                  </span>
                ))}
              </div>
            </div>

            {/* Adsense Placeholder */}
            <div className="aspect-[4/5] rounded-3xl border-2 border-dashed flex items-center justify-center text-muted-foreground/30 font-bold bg-muted/10">
              Advertisement
            </div>
          </div>
        </div>
      </div>

      {/* Related Products Section */}
      {relatedProducts.length > 0 && (
        <section className="mt-20 pt-20 border-t">
          <h2 className="text-3xl font-bold mb-12">You might also like</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {relatedProducts.map((p) => (
              <ProductCard key={p.id} product={p} />
            ))}
          </div>
        </section>
      )}

      {/* Sticky Bottom Bar for Mobile */}
      <div className="fixed bottom-0 left-0 right-0 z-40 lg:hidden p-4 bg-background/80 backdrop-blur-md border-t">
        <a 
          href={product.affiliateLink} 
          target="_blank" 
          rel="noopener noreferrer"
          className={buttonVariants({ variant: "amazon" }) + " w-full h-12 rounded-xl font-bold shadow-lg"}
        >
          Check Price on Amazon
        </a>
      </div>
    </div>
  );
}
