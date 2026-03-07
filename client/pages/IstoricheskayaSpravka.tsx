import { PageLayout } from "@/components/PageLayout";
import { SectionLinkCard } from "@/components/SectionLinkCard";
import { Network } from "lucide-react";

const sections = [
  { href: "/about/istoricheskaya-spravka/ustav", label: "Устав" },
  { href: "/about/istoricheskaya-spravka/polozheniya", label: "Положения" },
  { href: "/about/istoricheskaya-spravka/postanovleniya", label: "Постановления" },
];

const cardClassName = "w-full sm:w-[283px] min-h-0 sm:min-h-[122px]";

export default function IstoricheskayaSpravka() {
  return (
    <PageLayout>
      <div className="text-center mb-12">
        <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-4">
          Историческая справка
        </h1>
        <p className="text-gray-600 max-w-2xl mx-auto">
          Выберите раздел для получения информации
        </p>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-4xl mx-auto sm:justify-items-center">
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
