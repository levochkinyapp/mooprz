import { useRef, useState, useEffect } from "react";

export default function InteractiveMap() {
  const containerRef = useRef<HTMLDivElement>(null);
  const [svgContent, setSvgContent] = useState("");
  const [tooltip, setTooltip] = useState<{
    x: number;
    y: number;
    name: string;
  } | null>(null);
  const [popup, setPopup] = useState<{ name: string } | null>(null);

  useEffect(() => {
    fetch("/moscow-oblast-map.svg")
      .then((r) => r.text())
      .then(setSvgContent);
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
          <div className="fixed z-50 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-white rounded-xl shadow-2xl border border-gray-200 px-6 py-5 min-w-[240px] max-w-[360px]">
            <h3 className="text-lg font-bold text-[#003366] mb-1">
              {popup.name}
            </h3>
            <p className="text-sm text-gray-600 mb-3">
              Организации профсоюза работников здравоохранения
            </p>
            <button
              type="button"
              onClick={closePopup}
              className="text-sm font-medium text-[#003366] hover:text-[#3a7bd5] transition-colors"
            >
              Закрыть
            </button>
          </div>
        </>
      )}
    </>
  );
}
