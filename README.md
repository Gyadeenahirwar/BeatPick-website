# BestPick - Amazon Affiliate Marketing Website

A modern, high-performance affiliate marketing website built with Next.js 14, Tailwind CSS, and TypeScript. Designed for product reviews, buying guides, and Amazon affiliate deals.

## Features

- **Next.js 14 App Router**: Utilizing the latest features like Server Components and Dynamic Metadata.
- **Tailwind CSS 4**: Modern styling with CSS-first configuration and OKLCH color palettes.
- **SEO Optimized**: Dynamic metadata, sitemap.xml, robots.txt, and semantic HTML.
- **Mobile Responsive**: Fully optimized for all screen sizes with sticky navigation.
- **Dark/Light Mode**: Built-in theme support using `next-themes`.
- **Fast Loading**: Optimized images with Next.js Image and static data for maximum speed.
- **Admin Dashboard**: Managed via **Sanity CMS** for easy content updates without coding.

## Getting Started

### Prerequisites

- Node.js 18.x or later
- npm or yarn

### Installation

1. Clone the repository:
   ```bash
   git clone <your-repo-url>
   cd bestpick-affiliate-site
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Run the development server:
   ```bash
   npm run dev
   ```

4. Open [http://localhost:3000](http://localhost:3000) in your browser.

## Project Structure

- `src/app`: Page routes and layouts.
- `src/components`: Reusable UI and layout components.
- `src/data`: Static content for products, blog posts, and categories.
- `src/types`: TypeScript interfaces for data models.
- `public`: Static assets (icons, images).

## Configuration

### Sanity CMS (Admin Dashboard)
1.  Create a free account at [Sanity.io](https://www.sanity.io).
2.  Update your `projectId` in `src/sanity/env.ts`.
3.  Access the admin dashboard at `/studio`.

### Affiliate Links
Manage your affiliate links in the Sanity Dashboard or fallback file `src/data/products.ts`.

## Deployment on Vercel

1. Push your code to a GitHub repository.
2. Connect your repository to [Vercel](https://vercel.com).
3. Vercel will automatically detect Next.js and deploy your site.
4. Set up custom domain and SSL in the Vercel dashboard.

## License
MIT
