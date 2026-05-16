import { blogPosts } from "@/data/blog";
import { notFound } from "next/navigation";
import Image from "next/image";
import { Calendar, Clock, User, Share2, MessageCircle, Send, Briefcase, ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import Breadcrumbs from "@/components/seo/Breadcrumbs";
import TableOfContents from "@/components/blog/TableOfContents";
import Link from "next/link";
import { Metadata } from "next";

interface Props {
  params: { slug: string };
}

import { getBlogPostBySlug } from "@/sanity/lib/service";
import { projectId } from "@/sanity/env";

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  let post: any;

  if (projectId && projectId !== 'placeholder') {
    post = await getBlogPostBySlug(slug);
  }
  
  if (!post) {
    post = blogPosts.find((p) => p.slug === slug);
  }

  if (!post) return { title: "Post Not Found" };

  return {
    title: `${post.title} - BestPick Blog`,
    description: post.excerpt,
    openGraph: {
      images: [typeof post.image === 'string' ? post.image : ''],
    },
  };
}

export default async function BlogPostPage({ params }: Props) {
  const { slug } = await params;
  let post: any;

  if (projectId && projectId !== 'placeholder') {
    post = await getBlogPostBySlug(slug);
  }
  
  if (!post) {
    post = blogPosts.find((p) => p.slug === slug);
  }

  if (!post) notFound();

  const relatedPosts = blogPosts
    .filter((p) => p.category === post.category && p.id !== post.id)
    .slice(0, 3);

  return (
    <article className="pb-20">
      {/* Header Section */}
      <div className="bg-muted/30 border-b">
        <div className="container mx-auto px-4 py-12">
          <Breadcrumbs
            items={[
              { name: "Blog", href: "/blog" },
              { name: post.title, href: `/blog/${post.slug}` },
            ]}
          />

          <div className="max-w-4xl mt-8 space-y-6">
            <Link
              href={`/category/${post.category}`}
              className="inline-flex px-3 py-1 rounded-full bg-[#FF9900]/10 text-[#FF9900] text-xs font-bold uppercase tracking-widest"
            >
              {post.category}
            </Link>
            <h1 className="text-4xl md:text-6xl font-extrabold tracking-tight leading-tight">
              {post.title}
            </h1>
            <div className="flex flex-wrap items-center gap-6 text-sm text-muted-foreground">
              <div className="flex items-center">
                <User className="h-4 w-4 mr-2" />
                By <span className="font-bold text-foreground ml-1">{post.author.name}</span>
              </div>
              <div className="flex items-center">
                <Calendar className="h-4 w-4 mr-2" />
                {post.publishedAt}
              </div>
              <div className="flex items-center">
                <Clock className="h-4 w-4 mr-2" />
                {post.readTime} Read
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4 mt-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          {/* Main Content */}
          <div className="lg:col-span-8">
            <div className="relative aspect-video w-full rounded-3xl overflow-hidden mb-12 shadow-2xl">
              <Image
                src={post.image}
                alt={post.title}
                fill
                className="object-cover"
                priority
              />
            </div>

            <div
              className="prose prose-lg dark:prose-invert max-w-none prose-headings:font-bold prose-a:text-[#FF9900] prose-img:rounded-3xl"
              dangerouslySetInnerHTML={{ __html: post.content }}
            />

            {/* Author Section */}
            <div className="mt-16 p-8 rounded-3xl bg-muted/20 border flex items-center space-x-6">
              <div className="relative h-20 w-20 rounded-full overflow-hidden shrink-0">
                <Image src={post.author.avatar} alt={post.author.name} fill className="object-cover" />
              </div>
              <div>
                <h4 className="font-bold text-xl mb-1">Written by {post.author.name}</h4>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  {post.author.bio}
                </p>
              </div>
            </div>

            {/* Social Share */}
            <div className="mt-12 flex items-center justify-between py-6 border-y">
              <span className="font-bold">Share this article</span>
              <div className="flex gap-2">
                <Button variant="outline" size="icon" className="rounded-full"><MessageCircle className="h-4 w-4" /></Button>
                <Button variant="outline" size="icon" className="rounded-full"><Send className="h-4 w-4" /></Button>
                <Button variant="outline" size="icon" className="rounded-full"><Briefcase className="h-4 w-4" /></Button>
              </div>
            </div>
          </div>

          {/* Sidebar */}
          <div className="lg:col-span-4 space-y-12">
            <TableOfContents content={post.content} />

            {/* Newsletter Sidebar */}
            <div className="rounded-3xl bg-[#FF9900] p-8 text-black space-y-6">
              <h3 className="text-2xl font-extrabold leading-tight">Want more tech tips?</h3>
              <p className="font-medium opacity-90">Join 50k+ readers getting our weekly tech guides.</p>
              <input
                type="email"
                placeholder="Email address"
                className="w-full px-4 h-12 rounded-xl border-none text-black"
              />
              <Button className="w-full h-12 rounded-xl bg-black text-white hover:bg-black/90 font-bold">
                Subscribe
              </Button>
            </div>

            {/* Related Posts Sidebar */}
            {relatedPosts.length > 0 && (
              <div className="space-y-6">
                <h3 className="font-bold text-xl">Related Articles</h3>
                <div className="space-y-6">
                  {relatedPosts.map((p) => (
                    <Link key={p.id} href={`/blog/${p.slug}`} className="group flex gap-4">
                      <div className="relative h-20 w-24 rounded-xl overflow-hidden shrink-0 border">
                        <Image src={p.image} alt={p.title} fill className="object-cover group-hover:scale-110 transition-transform" />
                      </div>
                      <div className="space-y-1">
                        <h4 className="font-bold text-sm line-clamp-2 group-hover:text-[#FF9900] transition-colors">{p.title}</h4>
                        <span className="text-xs text-muted-foreground">{p.publishedAt}</span>
                      </div>
                    </Link>
                  ))}
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </article>
  );
}
