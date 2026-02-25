import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { FileText } from "lucide-react";

interface PlaceholderProps {
  title: string;
}

export default function Placeholder({ title }: PlaceholderProps) {
  return (
    <div className="flex flex-col min-h-screen bg-white">
      <Header />

      <main className="flex-1 container mx-auto px-4 py-20">
        <div className="max-w-2xl mx-auto text-center">
          <div className="flex justify-center mb-6">
            <div className="w-20 h-20 rounded-full bg-gray-100 flex items-center justify-center">
              <FileText size={40} className="text-gray-400" />
            </div>
          </div>

          <h1 className="text-4xl md:text-5xl font-bold text-primary mb-4">
            {title}
          </h1>

          <p className="text-xl text-gray-600 mb-8">
            Эта страница находится в разработке. Контент будет добавлен в
            ближайшее время.
          </p>

          <div className="bg-blue-50 border-l-4 border-primary rounded-lg p-6 text-left">
            <p className="text-gray-700 mb-3">
              💡 <span className="font-semibold">Хотите наполнить эту страницу?</span>
            </p>
            <p className="text-gray-600 text-sm">
              Продолжите общение в чате слева и попросите разработать содержимое для этого раздела.
              Укажите, какую информацию и функциональность вы хотели бы видеть на этой странице.
            </p>
          </div>

          <div className="mt-8">
            <a
              href="/"
              className="inline-block px-8 py-3 bg-primary text-white font-bold rounded-lg hover:bg-blue-900 transition-colors duration-200"
            >
              Вернуться на главную
            </a>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
