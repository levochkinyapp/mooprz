import { PageLayout } from "@/components/PageLayout";
import { SectionLinkCard } from "@/components/SectionLinkCard";
import { Users } from "lucide-react";

const youthCouncilSections = [
  { href: "/youth-council/o-sovete", label: "О совете" },
  { href: "/youth-council/obuchenie-shkoly-aktiva", label: "Обучение / Школы актива" },
  { href: "/youth-council/konkursy", label: "Конкурсы" },
  { href: "/youth-council/aktsii", label: "Акции" },
  { href: "/youth-council/turizm", label: "Туризм" },
  { href: "/youth-council/drugie-molodezhnye-initsiativy", label: "Другие молодёжные инициативы" },
];

export default function YouthCouncil() {
  return (
    <PageLayout backgroundImage="/news-bg.png">
      <div className="text-center mb-12">
        <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-4">Молодёжный совет</h1>
        <p className="text-gray-600 max-w-2xl mx-auto">
          Выберите раздел для получения информации о молодёжных программах и инициативах профсоюза
        </p>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-4xl mx-auto">
        {youthCouncilSections.map((section) => (
          <SectionLinkCard
            key={section.href}
            to={section.href}
            label={section.label}
            icon={Users}
          />
        ))}
      </div>
    </PageLayout>
  );
}
