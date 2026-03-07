import { PageLayout } from "@/components/PageLayout";
import { SectionLinkCard } from "@/components/SectionLinkCard";
import { cn } from "@/lib/utils";
import { Network } from "lucide-react";

const predsedatelSection = {
  href: "/about/struktura/predsedatel",
  label: "Председатель Московской областной организации профсоюза работников здравоохранения РФ",
};

const strukturaSections = [
  { href: "/about/struktura/zamestiteli-predsedatelya", label: "Заместители председателя МООПРЗ РФ" },
  { href: "/about/struktura/otdel-ohrany-truda", label: "Отдел охраны труда" },
  { href: "/about/struktura/otdel-sotsialno-ekonomicheskoy-zashchity", label: "Отдел социально-экономической защиты" },
  { href: "/about/struktura/otdel-pravovoy-zashchity", label: "Отдел правовой защиты" },
  { href: "/about/struktura/informatsionnyy-otdel", label: "Информационный отдел" },
  { href: "/about/struktura/organizatsionno-analiticheskiy-otdel", label: "Организационно-аналитический отдел" },
  { href: "/about/struktura/finansovyy-otdel", label: "Финансовый отдел" },
];

const cardClassName = "w-full sm:w-[283px] min-h-0 sm:min-h-[122px]";

export default function Struktura() {
  return (
    <PageLayout>
      <div className="text-center mb-12">
        <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-4">Структура</h1>
        <p className="text-gray-600 max-w-2xl mx-auto">
          Выберите раздел для получения информации о подразделениях МООПРЗ
        </p>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-4xl mx-auto sm:justify-items-center">
        <SectionLinkCard
          to={predsedatelSection.href}
          label={predsedatelSection.label}
          icon={Network}
          className={cn("col-span-full", cardClassName)}
        />
        {strukturaSections.map((section) => (
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
