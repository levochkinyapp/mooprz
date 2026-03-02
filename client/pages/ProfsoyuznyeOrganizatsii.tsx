import { PageLayout } from "@/components/PageLayout";
import InteractiveMap from "@/components/InteractiveMap";

export default function ProfsoyuznyeOrganizatsii() {
  return (
    <PageLayout mainClassName="py-12 md:py-20">
      <h1 className="text-xl sm:text-2xl md:text-3xl font-bold text-[#002e4d] mb-8 text-center">
        Организации Профсоюза Московской области
      </h1>
      <InteractiveMap />
      <p className="mt-8 text-gray-500 text-sm text-center max-w-xl mx-auto">
        Наведите на район для просмотра названия. Нажмите для подробной информации.
      </p>
    </PageLayout>
  );
}
