import Link from "next/link";
import { ChevronRight, Home } from "lucide-react";

interface BreadcrumbItem {
  name: string;
  href: string;
}

interface BreadcrumbsProps {
  items: BreadcrumbItem[];
}

const Breadcrumbs = ({ items }: BreadcrumbsProps) => {
  return (
    <nav className="flex items-center space-x-2 text-sm text-muted-foreground py-4 overflow-x-auto whitespace-nowrap scrollbar-hide">
      <Link href="/" className="hover:text-[#FF9900] transition-colors flex items-center">
        <Home className="h-4 w-4 mr-1" />
        <span>Home</span>
      </Link>
      {items.map((item, index) => (
        <div key={item.href} className="flex items-center space-x-2">
          <ChevronRight className="h-4 w-4 text-muted-foreground/50 shrink-0" />
          {index === items.length - 1 ? (
            <span className="font-medium text-foreground truncate max-w-[200px]">{item.name}</span>
          ) : (
            <Link href={item.href} className="hover:text-[#FF9900] transition-colors">
              {item.name}
            </Link>
          )}
        </div>
      ))}
    </nav>
  );
};

export default Breadcrumbs;
