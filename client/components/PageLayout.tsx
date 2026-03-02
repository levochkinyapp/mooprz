import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { cn } from "@/lib/utils";

type PageLayoutProps = {
  children: React.ReactNode;
  className?: string;
  mainClassName?: string;
};

export function PageLayout({ children, className, mainClassName }: PageLayoutProps) {
  return (
    <div className={cn("flex flex-col min-h-screen min-w-0 w-full pt-20", className)}>
      <Header />
      <main className={cn("flex-1 container mx-auto px-4 py-16 md:py-24", mainClassName)}>
        {children}
      </main>
      <Footer />
    </div>
  );
}
