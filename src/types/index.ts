export interface Product {
  id: string;
  slug: string;
  title: string;
  shortDescription: string;
  description: string;
  price: string;
  rating: number;
  reviewsCount: number;
  category: string;
  images: string[];
  features: string[];
  pros: string[];
  cons: string[];
  affiliateLink: string;
  trending?: boolean;
  featured?: boolean;
  deal?: boolean;
  faq: { question: string; answer: string }[];
  tags: string[];
  updatedAt: string;
}

export interface BlogPost {
  id: string;
  slug: string;
  title: string;
  excerpt: string;
  content: string;
  author: {
    name: string;
    avatar: string;
    bio: string;
  };
  category: string;
  image: string;
  tags: string[];
  publishedAt: string;
  readTime: string;
}

export interface Category {
  id: string;
  name: string;
  slug: string;
  description: string;
  image: string;
  icon: string;
}
