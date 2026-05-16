import { BlogPost } from "@/types";

export const blogPosts: BlogPost[] = [
  {
    id: "b1",
    slug: "top-5-smartphones-2024",
    title: "Top 5 Smartphones to Buy in 2024",
    excerpt: "Looking for a new phone? Here are the top 5 smartphones that offer the best value, camera, and performance in 2024.",
    content: `
      <h2>1. iPhone 15 Pro Max</h2>
      <p>The ultimate flagship from Apple...</p>
      <h2>2. Samsung Galaxy S24 Ultra</h2>
      <p>The best Android phone for power users...</p>
      <h2>3. Google Pixel 8 Pro</h2>
      <p>The smartest camera in a phone...</p>
      <h2>4. OnePlus 12</h2>
      <p>The performance beast at a great price...</p>
      <h2>5. Nothing Phone (2)</h2>
      <p>The most unique design in the market...</p>
    `,
    author: {
      name: "John Doe",
      avatar: "https://i.pravatar.cc/150?u=john",
      bio: "Tech enthusiast and professional reviewer.",
    },
    category: "mobiles",
    image: "https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?w=800&q=80",
    tags: ["Mobiles", "2024", "Guide"],
    publishedAt: "2024-05-01",
    readTime: "5 min",
  },
  {
    id: "b2",
    slug: "how-to-choose-the-right-laptop",
    title: "How to Choose the Right Laptop for Your Needs",
    excerpt: "Confused between a MacBook and a Windows laptop? This guide will help you decide based on your budget and usage.",
    content: `
      <p>Choosing a laptop can be overwhelming with so many options available...</p>
      <h3>Identify Your Primary Use</h3>
      <p>Are you a student, a creative professional, or a gamer?</p>
      <h3>Budget Considerations</h3>
      <p>Laptops range from $200 to $4000. Set a realistic budget...</p>
    `,
    author: {
      name: "Jane Smith",
      avatar: "https://i.pravatar.cc/150?u=jane",
      bio: "Software engineer and gadget geek.",
    },
    category: "laptops",
    image: "https://images.unsplash.com/photo-1496181133206-80ce9b88a853?w=800&q=80",
    tags: ["Laptops", "Guide", "Education"],
    publishedAt: "2024-05-05",
    readTime: "8 min",
  },
];
