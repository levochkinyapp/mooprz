import { PageLayout } from "@/components/PageLayout";
import { SectionLinkCard } from "@/components/SectionLinkCard";
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
    <PageLayout backgroundImage="/news-bg.png">
      <div className="text-center mb-12">
        <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-4">О нас</h1>
        <p className="text-gray-600 max-w-2xl mx-auto">
          Выберите раздел для получения информации об организации профсоюза
        </p>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-4xl mx-auto">
        {aboutSections.map((section) => (
          <SectionLinkCard
            key={section.href}
            to={section.href}
            label={section.label}
            icon={Building2}
          />
        ))}
      </div>
    </PageLayout>
  );
}
