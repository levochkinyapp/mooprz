import Header from "@/components/Header";
import Footer from "@/components/Footer";
import InteractiveMap from "@/components/InteractiveMap";

export default function ProfsoyuznyeOrganizatsii() {
  return (
    <div className="flex flex-col min-h-screen pt-20">
      <Header />

      <main className="flex-1 container mx-auto px-4 py-12 md:py-20">
        <h1 className="text-xl sm:text-2xl md:text-3xl font-bold text-[#002e4d] mb-8 text-center">
          Организации Профсоюза Московской области
        </h1>

        <InteractiveMap />

        <p className="mt-8 text-gray-500 text-sm text-center max-w-xl mx-auto">
          Наведите на район для просмотра названия. Нажмите для подробной информации.
        </p>
      </main>

      <Footer />
    </div>
  );
}
