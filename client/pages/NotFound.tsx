import { useLocation } from "react-router-dom";
import { InternalLink } from "@/components/InternalLink";
import { useEffect } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { AlertCircle } from "lucide-react";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error(
      "404 Error: User attempted to access non-existent route:",
      location.pathname,
    );
  }, [location.pathname]);

  return (
    <div className="flex flex-col min-h-screen pt-20">
      <Header />

      <main className="flex-1 container mx-auto px-4 py-20">
        <div className="max-w-2xl mx-auto text-center">
          <div className="flex justify-center mb-6">
            <div className="w-20 h-20 rounded-full bg-red-100 flex items-center justify-center">
              <AlertCircle size={40} className="text-red-600" />
            </div>
          </div>

          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-4">
            404
          </h1>

          <p className="text-lg sm:text-xl md:text-2xl font-semibold text-gray-600 mb-2">
            Страница не найдена
          </p>

          <p className="text-base sm:text-lg text-gray-600 mb-8">
            К сожалению, запрашиваемая страница не существует на нашем сайте.
          </p>

          <p className="text-gray-600 mb-8">
            Путь: <code className="bg-muted/80 px-3 py-1 rounded font-mono border border-gray-200">{location.pathname}</code>
          </p>

          <InternalLink
            to="/"
            className="inline-block px-8 py-3 bg-primary text-white font-bold rounded-lg hover:bg-blue-900 transition-colors duration-200"
          >
            Вернуться на главную
          </InternalLink>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default NotFound;
