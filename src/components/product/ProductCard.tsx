import Link from "next/link";
import Image from "next/image";
import { Star, ArrowRight, TrendingUp } from "lucide-react";
import { Product } from "@/types";
import { Button, buttonVariants } from "@/components/ui/button";

interface ProductCardProps {
  product: Product;
}

const ProductCard = ({ product }: ProductCardProps) => {
  return (
    <div className="group relative flex flex-col rounded-2xl border bg-card text-card-foreground shadow-sm transition-all hover:shadow-md hover:border-[#FF9900]/50 overflow-hidden">
      {/* Badge */}
      {product.trending && (
        <div className="absolute top-3 left-3 z-10 flex items-center bg-[#FF9900] text-black text-[10px] font-bold px-2 py-1 rounded-full uppercase tracking-wider">
          <TrendingUp className="h-3 w-3 mr-1" />
          Trending
        </div>
      )}
      {product.deal && (
        <div className="absolute top-3 right-3 z-10 flex items-center bg-red-600 text-white text-[10px] font-bold px-2 py-1 rounded-full uppercase tracking-wider">
          Best Deal
        </div>
      )}

      {/* Image */}
      <Link href={`/products/${product.slug}`} className="relative h-64 w-full overflow-hidden">
        <Image
          src={product.images[0]}
          alt={product.title}
          fill
          className="object-cover transition-transform duration-500 group-hover:scale-110"
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
        />
      </Link>

      {/* Content */}
      <div className="flex flex-1 flex-col p-6">
        <div className="flex items-center justify-between mb-2">
          <span className="text-[10px] font-bold text-[#FF9900] uppercase tracking-widest">
            {product.category}
          </span>
          <div className="flex items-center text-sm font-bold">
            <Star className="h-4 w-4 fill-[#FF9900] text-[#FF9900] mr-1" />
            {product.rating}
          </div>
        </div>

        <Link href={`/products/${product.slug}`}>
          <h3 className="text-xl font-bold mb-3 line-clamp-2 group-hover:text-[#FF9900] transition-colors leading-tight">
            {product.title}
          </h3>
        </Link>
        
        <p className="text-sm text-muted-foreground line-clamp-2 mb-6 flex-1">
          {product.shortDescription}
        </p>

        <div className="flex items-center justify-between mt-auto pt-4 border-t">
          <div className="flex flex-col">
            <span className="text-[10px] text-muted-foreground uppercase font-bold">Price Around</span>
            <span className="text-lg font-bold">{product.price}</span>
          </div>
          <a 
            href={product.affiliateLink} 
            target="_blank" 
            rel="noopener noreferrer"
            className={buttonVariants({ variant: "amazon", size: "sm" })}
          >
            Buy Now
          </a>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
