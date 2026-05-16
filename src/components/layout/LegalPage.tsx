import Breadcrumbs from "@/components/seo/Breadcrumbs";

interface LegalPageProps {
  title: string;
  children: React.ReactNode;
}

const LegalPage = ({ title, children }: LegalPageProps) => {
  return (
    <div className="container mx-auto px-4 pb-20">
      <Breadcrumbs items={[{ name: title, href: "#" }]} />
      <div className="max-w-4xl mx-auto mt-12">
        <h1 className="text-4xl md:text-5xl font-extrabold tracking-tight mb-12">{title}</h1>
        <div className="prose prose-lg dark:prose-invert max-w-none prose-headings:font-bold prose-p:text-muted-foreground">
          {children}
        </div>
      </div>
    </div>
  );
};

export default LegalPage;
