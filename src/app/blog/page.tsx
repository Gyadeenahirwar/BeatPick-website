import { blogPosts } from "@/data/blog";
import Link from "next/link";
import Image from "next/image";
import { BookOpen, Calendar, ArrowRight } from "lucide-react";
import Breadcrumbs from "@/components/seo/Breadcrumbs";

export default function BlogListPage() {
  return (
    <div className="container mx-auto px-4 pb-20">
      <Breadcrumbs items={[{ name: "Blog", href: "/blog" }]} />

      <div className="mt-8 mb-16 text-center space-y-4">
        <h1 className="text-4xl md:text-6xl font-extrabold tracking-tight">
          Buying Guides & <span className="text-[#FF9900]">Tech Tips</span>
        </h1>
        <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
          In-depth guides, expert advice, and the latest news to help you make the right choice.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
        {blogPosts.map((post) => (
          <Link key={post.id} href={`/blog/${post.slug}`} className="group flex flex-col space-y-4">
            <div className="relative h-72 rounded-3xl overflow-hidden border shadow-sm group-hover:shadow-xl transition-all duration-500">
              <Image
                src={post.image}
                alt={post.title}
                fill
                className="object-cover transition-transform duration-700 group-hover:scale-110"
              />
              <div className="absolute top-6 left-6 bg-white/90 dark:bg-black/80 backdrop-blur-sm px-4 py-1.5 rounded-full text-[10px] font-bold uppercase tracking-[0.2em] text-[#FF9900]">
                {post.category}
              </div>
            </div>
            <div className="space-y-4 px-2">
              <div className="flex items-center text-xs text-muted-foreground space-x-6 font-medium">
                <span className="flex items-center"><BookOpen className="h-4 w-4 mr-2 text-[#FF9900]" /> {post.readTime}</span>
                <span className="flex items-center"><Calendar className="h-4 w-4 mr-2" /> {post.publishedAt}</span>
              </div>
              <h3 className="text-2xl font-bold group-hover:text-[#FF9900] transition-colors leading-tight line-clamp-2">
                {post.title}
              </h3>
              <p className="text-muted-foreground line-clamp-3 leading-relaxed">
                {post.excerpt}
              </p>
              <div className="pt-2 flex items-center font-bold text-sm text-[#FF9900] group-hover:gap-2 transition-all">
                Read Full Article <ArrowRight className="ml-2 h-4 w-4" />
              </div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}
