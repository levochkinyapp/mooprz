import { PageLayout } from "@/components/PageLayout";
import { SectionLinkCard } from "@/components/SectionLinkCard";
import { Briefcase, Globe, Scale } from "lucide-react";

const serviceSections = [
  {
    href: "/services/yuridicheskaya-pomoshch-inspector",
    label: "Юридическая помощь / Инспектор профсоюза",
    icon: Scale,
  },
  {
    href: "/services/sotsialnoe-partnyorstvo",
    label: "Социальное партнёрство",
    icon: Briefcase,
  },
  {
    href: "/services/mezhdunarodnoe-sotrudnichestvo",
    label: "Международное сотрудничество",
    icon: Globe,
  },
];

export default function Services() {
  return (
    <PageLayout backgroundImage="/news-bg.png">
      <div className="text-center mb-12">
        <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-4">Услуги</h1>
        <p className="text-gray-600 max-w-2xl mx-auto">
          Выберите раздел для получения информации об услугах профсоюза
        </p>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-4xl mx-auto">
        {serviceSections.map((section) => (
          <SectionLinkCard
            key={section.href}
            to={section.href}
            label={section.label}
            icon={section.icon}
          />
        ))}
      </div>
    </PageLayout>
  );
}
