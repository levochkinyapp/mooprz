import { useState, useMemo, useRef, useEffect } from "react";
import { PageLayout } from "@/components/PageLayout";
import InteractiveMap from "@/components/InteractiveMap";
import { Search } from "lucide-react";
import { cn } from "@/lib/utils";

export default function ProfsoyuznyeOrganizatsii() {
  const [searchQuery, setSearchQuery] = useState("");
  const [districtNames, setDistrictNames] = useState<string[]>([]);
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const searchWrapRef = useRef<HTMLDivElement>(null);

  const query = searchQuery.trim().toLowerCase();
  const suggestions = useMemo(() => {
    if (!query) return [];
    const filtered = districtNames.filter((name) =>
      name.toLowerCase().includes(query)
    );
    return filtered.sort((a, b) => {
      const aStart = a.toLowerCase().startsWith(query) ? 0 : 1;
      const bStart = b.toLowerCase().startsWith(query) ? 0 : 1;
      if (aStart !== bStart) return aStart - bStart;
      return a.localeCompare(b);
    });
  }, [districtNames, query]);

  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (searchWrapRef.current && !searchWrapRef.current.contains(e.target as Node)) {
        setDropdownOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const showDropdown = dropdownOpen && query.length > 0;

  return (
    <PageLayout mainClassName="py-12 md:py-20">
      <h1 className="text-xl sm:text-2xl md:text-3xl font-bold text-[#002e4d] mb-8 text-center">
        Организации Профсоюза Московской области
      </h1>

      <div className="max-w-3xl mx-auto mb-6" ref={searchWrapRef}>
        <label htmlFor="map-search" className="sr-only">
          Поиск по названиям районов на карте
        </label>
        <div className="relative">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" aria-hidden />
          <input
            id="map-search"
            type="search"
            value={searchQuery}
            onChange={(e) => {
              setSearchQuery(e.target.value);
              setDropdownOpen(true);
            }}
            onFocus={() => query.length > 0 && setDropdownOpen(true)}
            placeholder="Поиск по названию района..."
            className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg text-base placeholder:text-gray-500 focus:outline-none focus:ring-2 focus:ring-[#002e4d] focus:border-transparent"
            autoComplete="off"
            aria-expanded={showDropdown}
            aria-haspopup="listbox"
            aria-controls="map-search-listbox"
          />
          {/* Выпадающее окно подсказок (в стиле мобильного меню) */}
          <div
            id="map-search-listbox"
            role="listbox"
            aria-label="Варианты названий районов"
            className={cn(
              "absolute left-0 right-0 top-full mt-1 py-2 px-1 bg-white border border-gray-200 rounded-lg shadow-lg overflow-hidden transition-[transform,opacity] duration-200 ease-out origin-top z-50 max-h-64 overflow-y-auto",
              showDropdown
                ? "scale-y-100 opacity-100"
                : "scale-y-0 opacity-0 pointer-events-none"
            )}
          >
            {districtNames.length === 0 ? (
              <p className="px-4 py-2.5 text-gray-500 text-sm">Загрузка…</p>
            ) : suggestions.length > 0 ? (
              suggestions.map((name) => (
                <button
                  key={name}
                  type="button"
                  role="option"
                  aria-selected={searchQuery === name}
                  onClick={() => {
                    setSearchQuery(name);
                    setDropdownOpen(false);
                  }}
                  className="w-full px-4 py-2.5 text-left text-gray-600 hover:text-primary hover:bg-gray-50 rounded-md transition-colors duration-200 whitespace-nowrap"
                >
                  {name}
                </button>
              ))
            ) : (
              <p className="px-4 py-2.5 text-gray-500 text-sm">Ничего не найдено</p>
            )}
          </div>
        </div>
      </div>

      <InteractiveMap
        searchQuery={searchQuery.trim()}
        onDistrictNamesLoaded={setDistrictNames}
      />
      <p className="mt-8 text-gray-500 text-sm text-center max-w-xl mx-auto">
        Наведите на район для просмотра названия. Нажмите для подробной информации.
      </p>
    </PageLayout>
  );
}
