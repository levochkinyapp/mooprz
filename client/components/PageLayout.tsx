import Header from "@/components/Header";
import Footer from "@/components/Footer";

type PageLayoutProps = {
  children: React.ReactNode;
  className?: string;
};

export function PageLayout({ children, className }: PageLayoutProps) {
  return (
    <div className={`flex flex-col min-h-screen min-w-0 w-full pt-20 ${className ?? ""}`.trim()}>
      <Header />
      <main className="flex-1 container mx-auto px-4 py-16 md:py-24">{children}</main>
      <Footer />
    </div>
  );
}
