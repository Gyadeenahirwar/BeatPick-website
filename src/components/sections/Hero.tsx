"use client";

import { Button, buttonVariants } from "@/components/ui/button";
import { Search, ArrowRight } from "lucide-react";
import Link from "next/link";
import { useState } from "react";
import { useRouter } from "next/navigation";

const Hero = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const router = useRouter();

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    if (searchQuery.trim()) {
      router.push(`/search?q=${encodeURIComponent(searchQuery)}`);
    }
  };

  return (
    <section className="relative overflow-hidden bg-background py-20 lg:py-32">
      {/* Background Orbs */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full -z-10 overflow-hidden pointer-events-none">
        <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] rounded-full bg-[#FF9900]/10 blur-[100px]" />
        <div className="absolute bottom-[-10%] right-[-10%] w-[40%] h-[40%] rounded-full bg-blue-500/10 blur-[100px]" />
      </div>

      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center space-y-8">
          <div className="inline-flex items-center px-3 py-1 rounded-full border bg-muted/50 text-xs font-medium text-muted-foreground animate-in fade-in slide-in-from-bottom-4 duration-1000">
            <span className="flex h-2 w-2 rounded-full bg-[#FF9900] mr-2" />
            New Reviews Added Daily
          </div>
          
          <h1 className="text-4xl md:text-6xl font-extrabold tracking-tight lg:text-7xl">
            Find the <span className="text-[#FF9900]">Perfect</span> Product for Your Needs
          </h1>
          
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            Expert reviews, honest comparisons, and the best deals on the latest tech, gadgets, and lifestyle products. We do the research so you don't have to.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4">
            <form onSubmit={handleSearch} className="relative w-full sm:w-96 group">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-muted-foreground group-focus-within:text-[#FF9900] transition-colors" />
              <input
                type="text"
                placeholder="Search products, reviews, guides..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-10 pr-4 h-12 rounded-full border bg-muted/30 focus:outline-none focus:ring-2 focus:ring-[#FF9900]/50 transition-all"
              />
            </form>
            <Link href="/blog" className={buttonVariants({ variant: "default", size: "lg" }) + " rounded-full w-full sm:w-auto group"}>
              Latest Reviews
              <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>

          <div className="flex items-center justify-center gap-8 pt-12 grayscale opacity-50 overflow-hidden select-none">
            <span className="text-2xl font-bold italic">Amazon</span>
            <span className="text-2xl font-bold italic">Apple</span>
            <span className="text-2xl font-bold italic">Samsung</span>
            <span className="text-2xl font-bold italic">Sony</span>
            <span className="text-2xl font-bold italic">Dell</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
