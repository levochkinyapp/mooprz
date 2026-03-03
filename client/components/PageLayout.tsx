import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { cn } from "@/lib/utils";

type PageLayoutProps = {
  children: React.ReactNode;
  className?: string;
  mainClassName?: string;
  /** URL фона для main (как на странице Новости) */
  backgroundImage?: string;
};

export function PageLayout({ children, className, mainClassName, backgroundImage }: PageLayoutProps) {
  const mainContent = backgroundImage ? (
    <div className="container mx-auto px-4 py-16 md:py-24 relative z-10">
      {children}
    </div>
  ) : (
    children
  );

  return (
    <div className={cn("flex flex-col min-h-screen min-w-0 w-full pt-20", className)}>
      <Header />
      <main
        className={cn(
          "flex-1",
          backgroundImage && "relative min-h-[60vh] bg-cover bg-center bg-no-repeat",
          !backgroundImage && "container mx-auto px-4 py-16 md:py-24",
          mainClassName
        )}
        style={backgroundImage ? { backgroundImage: `url('${backgroundImage}')` } : undefined}
      >
        {mainContent}
      </main>
      <Footer />
    </div>
  );
}
