import { InternalLink } from "@/components/InternalLink";
import { PageLayout } from "@/components/PageLayout";
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
          <InternalLink
            to={predsedatelSection.href}
            className="col-span-full flex items-center gap-4 p-6 rounded-xl border border-gray-200 bg-white shadow-md hover:shadow-lg hover:border-primary transition-all duration-200 group min-h-0 sm:min-h-[122px]"
          >
            <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center shrink-0 group-hover:bg-primary/20 transition-colors">
              <Network className="w-6 h-6 text-primary" />
            </div>
            <span className="font-semibold text-gray-600 group-hover:text-primary transition-colors">
              {predsedatelSection.label}
            </span>
          </InternalLink>
          {strukturaSections.map((section) => (
            <InternalLink
              key={section.href}
              to={section.href}
              className="w-full sm:w-[283px] min-h-0 sm:min-h-[122px] flex items-center gap-4 p-6 rounded-xl border border-gray-200 bg-white shadow-md hover:shadow-lg hover:border-primary transition-all duration-200 group"
            >
              <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center shrink-0 group-hover:bg-primary/20 transition-colors">
                <Network className="w-6 h-6 text-primary" />
              </div>
              <span className="font-semibold text-gray-600 group-hover:text-primary transition-colors">
                {section.label}
              </span>
            </InternalLink>
          ))}
        </div>
    </PageLayout>
  );
}
