import { PageLayout } from "@/components/PageLayout";
import { SectionLinkCard } from "@/components/SectionLinkCard";
import { Scale } from "lucide-react";

const inspectorSections = [
  { href: "/services/yuridicheskaya-pomoshch-inspector/pravovaya-zashchita", label: "Правовая защита" },
  { href: "/services/yuridicheskaya-pomoshch-inspector/oplata-truda", label: "Оплата труда" },
  { href: "/services/yuridicheskaya-pomoshch-inspector/ohrana-truda", label: "Охрана труда" },
];

export default function YuridicheskayaPomoshchInspector() {
  return (
    <PageLayout>
      <div className="text-center mb-12">
        <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-4 text-[#002e4d]">
          Юридическая помощь / Инспектор профсоюза
        </h1>
        <p className="text-gray-600 max-w-2xl mx-auto">
          Выберите раздел для получения информации
        </p>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-4xl mx-auto">
        {inspectorSections.map((section) => (
          <SectionLinkCard
            key={section.href}
            to={section.href}
            label={section.label}
            icon={Scale}
          />
        ))}
      </div>
    </PageLayout>
  );
}
