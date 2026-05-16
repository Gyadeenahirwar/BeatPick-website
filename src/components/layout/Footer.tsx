import Link from "next/link";
import { ShoppingBag, MessageCircle, Send, Camera, Video, Mail } from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const footerLinks = [
    {
      title: "Quick Links",
      links: [
        { name: "About Us", href: "/about" },
        { name: "Contact Us", href: "/contact" },
        { name: "Blog", href: "/blog" },
        { name: "Sitemap", href: "/sitemap.xml" },
      ],
    },
    {
      title: "Top Categories",
      links: [
        { name: "Mobiles", href: "/category/mobiles" },
        { name: "Laptops", href: "/category/laptops" },
        { name: "Smart Watches", href: "/category/smart-watches" },
        { name: "Earbuds", href: "/category/earbuds" },
      ],
    },
    {
      title: "Legal",
      links: [
        { name: "Privacy Policy", href: "/privacy-policy" },
        { name: "Terms & Conditions", href: "/terms" },
        { name: "Affiliate Disclosure", href: "/affiliate-disclosure" },
        { name: "Disclaimer", href: "/disclaimer" },
      ],
    },
  ];

  return (
    <footer className="bg-muted/30 border-t pt-16 pb-8">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          {/* Logo & Info */}
          <div className="space-y-4">
            <Link href="/" className="flex items-center space-x-2">
              <ShoppingBag className="h-6 w-6 text-[#FF9900]" />
              <span className="text-xl font-bold tracking-tight">BestPick</span>
            </Link>
            <p className="text-muted-foreground text-sm max-w-xs">
              Your one-stop destination for honest product reviews and the best deals on Amazon. We help you make informed buying decisions.
            </p>
            <div className="flex items-center space-x-4">
              <Link href="#" className="text-muted-foreground hover:text-[#FF9900] transition-colors">
                <MessageCircle className="h-5 w-5" />
              </Link>
              <Link href="#" className="text-muted-foreground hover:text-[#FF9900] transition-colors">
                <Send className="h-5 w-5" />
              </Link>
              <Link href="#" className="text-muted-foreground hover:text-[#FF9900] transition-colors">
                <Camera className="h-5 w-5" />
              </Link>
              <Link href="#" className="text-muted-foreground hover:text-[#FF9900] transition-colors">
                <Video className="h-5 w-5" />
              </Link>
            </div>
          </div>

          {/* Links Sections */}
          {footerLinks.map((section) => (
            <div key={section.title}>
              <h3 className="font-bold mb-4">{section.title}</h3>
              <ul className="space-y-2">
                {section.links.map((link) => (
                  <li key={link.name}>
                    <Link
                      href={link.href}
                      className="text-sm text-muted-foreground hover:text-[#FF9900] transition-colors"
                    >
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="border-t pt-8 text-center space-y-4">
          <p className="text-xs text-muted-foreground max-w-2xl mx-auto italic">
            Affiliate Disclosure: BestPick is a participant in the Amazon Services LLC Associates Program, an affiliate advertising program designed to provide a means for sites to earn advertising fees by advertising and linking to Amazon.com.
          </p>
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <p className="text-sm text-muted-foreground">
              © {currentYear} BestPick. All rights reserved.
            </p>
            <div className="flex items-center space-x-4">
              <Mail className="h-4 w-4 text-muted-foreground" />
              <span className="text-sm text-muted-foreground">hello@bestpick.com</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
