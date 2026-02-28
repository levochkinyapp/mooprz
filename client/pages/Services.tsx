import { InternalLink } from "@/components/InternalLink";
import { PageLayout } from "@/components/PageLayout";
import { Briefcase, Scale, Globe } from "lucide-react";

const serviceSections = [
  {
    href: "/services/yuridicheskaya-pomoshch-inspector",
    label: "Юридическая помощь / Инспектор профсоюза",
    Icon: Scale,
  },
  {
    href: "/services/sotsialnoe-partnyorstvo",
    label: "Социальное партнёрство",
    Icon: Briefcase,
  },
  {
    href: "/services/mezhdunarodnoe-sotrudnichestvo",
    label: "Международное сотрудничество",
    Icon: Globe,
  },
];

export default function Services() {
  return (
    <PageLayout>
      <div className="text-center mb-12">
          <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-4">Услуги</h1>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Выберите раздел для получения информации об услугах профсоюза
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-4xl mx-auto">
          {serviceSections.map((section) => {
            const Icon = section.Icon;
            return (
            <InternalLink
              key={section.href}
              to={section.href}
              className="flex items-center gap-4 p-6 rounded-xl border border-gray-200 bg-white shadow-md hover:shadow-lg hover:border-primary transition-all duration-200 group"
            >
              <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center shrink-0 group-hover:bg-primary/20 transition-colors">
                <Icon className="w-6 h-6 text-primary" />
              </div>
              <span className="font-semibold text-gray-600 group-hover:text-primary transition-colors">
                {section.label}
              </span>
            </InternalLink>
          );
          })}
        </div>
    </PageLayout>
  );
}
