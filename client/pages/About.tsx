import { InternalLink } from "@/components/InternalLink";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Building2 } from "lucide-react";

const aboutSections = [
  { href: "/about/struktura", label: "Структура" },
  { href: "/about/vyshestoyashchie-organizatsii", label: "Вышестоящие организации" },
  { href: "/about/organizatsionno-ustavnye-dokumenty", label: "Организационно-уставные документы" },
  { href: "/about/profsoyuznye-organizatsii", label: "Профсоюзные организации" },
  { href: "/about/istoricheskaya-spravka", label: "Историческая справка" },
];

export default function About() {
  return (
    <div className="flex flex-col min-h-screen pt-20">
      <Header />

      <main className="flex-1 container mx-auto px-4 py-16 md:py-24">
        <div className="text-center mb-12">
          <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-4">О нас</h1>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Выберите раздел для получения информации об организации профсоюза
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-4xl mx-auto">
          {aboutSections.map((section) => (
            <InternalLink
              key={section.href}
              to={section.href}
              className="flex items-center gap-4 p-6 rounded-xl border border-gray-200 bg-white shadow-md hover:shadow-lg hover:border-primary transition-all duration-200 group"
            >
              <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center shrink-0 group-hover:bg-primary/20 transition-colors">
                <Building2 className="w-6 h-6 text-primary" />
              </div>
              <span className="font-semibold text-gray-600 group-hover:text-primary transition-colors">
                {section.label}
              </span>
            </InternalLink>
          ))}
        </div>
      </main>

      <Footer />
    </div>
  );
}
