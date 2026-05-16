import { categories } from "@/data/categories";
import { getCategories } from "@/sanity/lib/service";
import { projectId } from "@/sanity/env";
import Link from "next/link";
import Image from "next/image";
import { ArrowRight } from "lucide-react";

const Categories = async () => {
  let displayCategories = [];

  if (projectId && projectId !== 'placeholder') {
    try {
      displayCategories = await getCategories();
    } catch (error) {
      displayCategories = categories;
    }
  } else {
    displayCategories = categories;
  }
  return (
    <section className="py-20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 space-y-4">
          <h2 className="text-3xl font-bold tracking-tight">Browse by Category</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Explore our curated collections of product reviews and buying guides across different categories.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6">
          {displayCategories.map((cat: any) => (
            <Link
              key={cat.id || cat._id}
              href={`/category/${cat.slug}`}
              className="group relative h-72 rounded-2xl overflow-hidden border transition-all hover:border-[#FF9900]"
            >
              <Image
                src={cat.image || `https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=800&q=80`}
                alt={cat.name}
                fill
                className="object-cover transition-transform duration-500 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
              <div className="absolute bottom-0 left-0 p-6 w-full">
                <h3 className="text-xl font-bold text-white mb-2">{cat.name}</h3>
                <p className="text-xs text-white/70 line-clamp-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  {cat.description}
                </p>
                <div className="mt-4 flex items-center text-xs font-bold text-[#FF9900] uppercase tracking-wider">
                  Explore <ArrowRight className="ml-1 h-3 w-3" />
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Categories;
