"use client";

import { useEffect, useState } from "react";
import { List } from "lucide-react";

interface TocItem {
  id: string;
  text: string;
  level: number;
}

const TableOfContents = ({ content }: { content: string }) => {
  const [toc, setToc] = useState<TocItem[]>([]);

  useEffect(() => {
    // Simple regex to find h2 and h3 in the HTML content
    const headingRegex = /<(h2|h3)[^>]*>(.*?)<\/\1>/gi;
    const items: TocItem[] = [];
    let match;

    while ((match = headingRegex.exec(content)) !== null) {
      const level = match[1].toLowerCase() === "h2" ? 2 : 3;
      const text = match[2].replace(/<[^>]*>/g, ""); // strip inner tags
      const id = text.toLowerCase().replace(/\s+/g, "-").replace(/[^\w-]/g, "");
      items.push({ id, text, level });
    }
    setToc(items);
  }, [content]);

  if (toc.length === 0) return null;

  return (
    <div className="rounded-3xl border bg-muted/20 p-8 space-y-6">
      <div className="flex items-center font-bold text-lg">
        <List className="h-5 w-5 mr-2 text-[#FF9900]" />
        Table of Contents
      </div>
      <nav className="space-y-3">
        {toc.map((item) => (
          <a
            key={item.id}
            href={`#${item.id}`}
            className={`block text-sm transition-colors hover:text-[#FF9900] ${
              item.level === 3 ? "pl-4 text-muted-foreground" : "font-medium"
            }`}
          >
            {item.text}
          </a>
        ))}
      </nav>
    </div>
  );
};

export default TableOfContents;
