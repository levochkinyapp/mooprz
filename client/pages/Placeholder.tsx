import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { InternalLink } from "@/components/InternalLink";
import { FileText } from "lucide-react";

interface PlaceholderProps {
  title: string;
}

export default function Placeholder({ title }: PlaceholderProps) {
  return (
    <div className="flex flex-col min-h-screen pt-20">
      <Header />

      <main className="flex-1 container mx-auto px-4 py-20">
        <div className="max-w-2xl mx-auto text-center">
          <div className="flex justify-center mb-6">
            <div className="w-20 h-20 rounded-full bg-gray-200/80 border border-gray-200 flex items-center justify-center">
              <FileText size={40} className="text-gray-400" />
            </div>
          </div>

          <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-4">
            {title}
          </h1>

          <p className="text-base sm:text-lg md:text-xl text-gray-600 mb-8">
            Эта страница находится в разработке. Контент будет добавлен в
            ближайшее время.
          </p>

          <div className="bg-secondary/20 border-l-4 border-primary rounded-lg p-6 text-left">
            <p className="text-gray-600 mb-3">
              💡 <span className="font-semibold">Хотите наполнить эту страницу?</span>
            </p>
            <p className="text-gray-600 text-sm">
              Продолжите общение в чате слева и попросите разработать содержимое для этого раздела.
              Укажите, какую информацию и функциональность вы хотели бы видеть на этой странице.
            </p>
          </div>

          <div className="mt-8">
            <InternalLink
              to="/"
              className="inline-block px-8 py-3 bg-primary text-white font-bold rounded-lg hover:bg-blue-900 transition-colors duration-200"
            >
              Вернуться на главную
            </InternalLink>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
