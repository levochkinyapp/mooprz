import { PageLayout } from "@/components/PageLayout";
import { SectionLinkCard } from "@/components/SectionLinkCard";
import { Newspaper } from "lucide-react";

const newsSections = [
  { href: "/news/molodezh", label: "Молодёжь" },
  { href: "/news/ohrana-truda", label: "Охрана труда" },
  { href: "/news/pravovaya-zashchita", label: "Правовая защита" },
  { href: "/news/ozdorovlenie", label: "Оздоровление" },
  { href: "/news/sotspartnyorstvo", label: "Соцпартнёрство" },
  { href: "/news/mezhdunarodnaya-rabota", label: "Международная работа" },
];

export default function News() {
  return (
    <PageLayout backgroundImage="/news-bg.png">
      <div className="text-center mb-12">
        <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-4">Новости</h1>
        <p className="text-gray-600 max-w-2xl mx-auto">
          Выберите раздел для просмотра актуальных материалов
        </p>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-4xl mx-auto">
        {newsSections.map((section) => (
          <SectionLinkCard
            key={section.href}
            to={section.href}
            label={section.label}
            icon={Newspaper}
          />
        ))}
      </div>
    </PageLayout>
  );
}
