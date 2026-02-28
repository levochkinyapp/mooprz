import { InternalLink } from "@/components/InternalLink";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Network } from "lucide-react";

const sections = [
  { href: "/about/vyshestoyashchie-organizatsii/fnpr", label: "ФНПР" },
  {
    href: "/about/vyshestoyashchie-organizatsii/profsoyuz-zdravookhraneniya-rf",
    label: "Профсоюз работников здравоохранения РФ",
  },
];

export default function VyshestoyashchieOrganizatsii() {
  return (
    <div className="flex flex-col min-h-screen pt-20">
      <Header />

      <main className="flex-1 container mx-auto px-4 py-16 md:py-24">
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
      </main>

      <Footer />
    </div>
  );
}
