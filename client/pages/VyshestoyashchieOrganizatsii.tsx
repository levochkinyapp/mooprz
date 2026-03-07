import { PageLayout } from "@/components/PageLayout";
import { SectionLinkCard } from "@/components/SectionLinkCard";
import { Network } from "lucide-react";

const sections = [
  { href: "/about/vyshestoyashchie-organizatsii/fnpr", label: "ФНПР" },
  {
    href: "/about/vyshestoyashchie-organizatsii/profsoyuz-zdravookhraneniya-rf",
    label: "Профсоюз работников здравоохранения РФ",
  },
];

const cardClassName = "w-full sm:w-[283px] min-h-0 sm:min-h-[122px]";

export default function VyshestoyashchieOrganizatsii() {
  return (
    <PageLayout>
      <div className="text-center mb-12">
        <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-4">
          Вышестоящие организации
        </h1>
        <p className="text-gray-600 max-w-2xl mx-auto">
          Выберите раздел для получения информации о вышестоящих организациях
        </p>
      </div>
      <div className="flex flex-wrap justify-center gap-6 max-w-4xl mx-auto">
        {sections.map((section) => (
          <SectionLinkCard
            key={section.href}
            to={section.href}
            label={section.label}
            icon={Network}
            className={cardClassName}
          />
        ))}
      </div>
    </PageLayout>
  );
}
