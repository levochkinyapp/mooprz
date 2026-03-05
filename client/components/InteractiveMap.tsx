import { useRef, useState, useEffect } from "react";
import { X } from "lucide-react";

const SEARCH_MATCH_CLASS = "search-match";
const SEARCH_MISMATCH_CLASS = "search-mismatch";

type InteractiveMapProps = {
  /** Поиск по названиям участков на карте (data-name) */
  searchQuery?: string;
  /** Вызывается при загрузке карты с массивом названий участков (data-name) */
  onDistrictNamesLoaded?: (names: string[]) => void;
};

export default function InteractiveMap({ searchQuery = "", onDistrictNamesLoaded }: InteractiveMapProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const [svgContent, setSvgContent] = useState("");
  const [tooltip, setTooltip] = useState<{
    x: number;
    y: number;
    name: string;
  } | null>(null);
  const [popup, setPopup] = useState<{ name: string } | null>(null);

  const onDistrictNamesLoadedRef = useRef(onDistrictNamesLoaded);
  onDistrictNamesLoadedRef.current = onDistrictNamesLoaded;

  useEffect(() => {
    fetch("/moscow-oblast-map.svg")
      .then((r) => r.text())
      .then((html) => {
        setSvgContent(html);
        const cb = onDistrictNamesLoadedRef.current;
        if (cb) {
          const parser = new DOMParser();
          const doc = parser.parseFromString(html, "image/svg+xml");
          const paths = doc.querySelectorAll("path[data-name]");
          const names = Array.from(paths)
            .map((p) => p.getAttribute("data-name") || "")
            .filter(Boolean);
          cb(names);
        }
      });
  }, []);

  useEffect(() => {
    const el = containerRef.current;
    if (!el || !svgContent) return;

    const svg = el.querySelector("svg");
    if (!svg) return;

    svg.style.width = "100%";
    svg.style.height = "auto";
    svg.style.display = "block";

    const onMove = (e: MouseEvent) => {
      const target = (e.target as Element).closest("path[data-name]");
      if (target) {
        setTooltip({
          x: e.clientX,
          y: e.clientY,
          name: target.getAttribute("data-name") || "",
        });
      } else {
        setTooltip(null);
      }
    };

    const onLeave = () => setTooltip(null);

    const onClick = (e: MouseEvent) => {
      const target = (e.target as Element).closest("path[data-name]");
      if (target) {
        el.querySelectorAll("path.active").forEach((p) =>
          p.classList.remove("active")
        );
        target.classList.add("active");
        setPopup({ name: target.getAttribute("data-name") || "" });
      }
    };

    svg.addEventListener("mousemove", onMove);
    svg.addEventListener("mouseleave", onLeave);
    svg.addEventListener("click", onClick);

    return () => {
      svg.removeEventListener("mousemove", onMove);
      svg.removeEventListener("mouseleave", onLeave);
      svg.removeEventListener("click", onClick);
    };
  }, [svgContent]);

  // Подсветка/затемнение участков по поисковому запросу
  useEffect(() => {
    const el = containerRef.current;
    if (!el) return;

    const paths = el.querySelectorAll<SVGPathElement>("path[data-name]");
    const query = searchQuery.toLowerCase().trim();

    paths.forEach((path) => {
      path.classList.remove(SEARCH_MATCH_CLASS, SEARCH_MISMATCH_CLASS);
      if (!query) return;

      const name = (path.getAttribute("data-name") || "").toLowerCase();
      const matches = name.includes(query);
      path.classList.add(matches ? SEARCH_MATCH_CLASS : SEARCH_MISMATCH_CLASS);
    });
  }, [svgContent, searchQuery]);

  const closePopup = () => {
    setPopup(null);
    containerRef.current
      ?.querySelectorAll("path.active")
      .forEach((p) => p.classList.remove("active"));
  };

  return (
    <>
      <div
        ref={containerRef}
        className="relative w-full max-w-3xl mx-auto"
        dangerouslySetInnerHTML={{ __html: svgContent }}
      />

      {tooltip && (
        <div
          className="fixed z-50 px-3 py-1.5 rounded bg-[#003366] text-white text-sm font-medium shadow-lg pointer-events-none whitespace-nowrap"
          style={{ left: tooltip.x + 14, top: tooltip.y - 36 }}
        >
          {tooltip.name}
        </div>
      )}

      {popup && (
        <>
          <div
            className="fixed inset-0 z-40 bg-black/20"
            onClick={closePopup}
          />
          <div
            className="fixed z-50 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 flex flex-col min-w-[240px] max-w-[360px] bg-white rounded-xl shadow-2xl border border-gray-200 overflow-hidden"
            role="dialog"
            aria-modal="true"
            aria-label={popup.name}
          >
            <div className="shrink-0 flex justify-end p-2">
              <button
                type="button"
                onClick={closePopup}
                className="p-2 rounded-md text-gray-600 hover:text-primary hover:bg-gray-100 transition-colors"
                aria-label="Закрыть окно"
              >
                <X size={20} />
              </button>
            </div>
            <div className="px-6 pb-6 pt-0">
              <h3 className="text-lg font-bold text-[#003366] mb-1">
                {popup.name}
              </h3>
              <p className="text-sm text-gray-600">
                Организации профсоюза работников здравоохранения
              </p>
            </div>
          </div>
        </>
      )}
    </>
  );
}
