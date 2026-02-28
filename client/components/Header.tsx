import { useState, useEffect, useRef } from "react";
import { InternalLink } from "@/components/InternalLink";
import { Menu, Search } from "lucide-react";
import { cn } from "@/lib/utils";

/** Переключение на мобильное меню (гамбургер + поиск): при ширине меньше этого значения. Учтена ширина пунктов навигации + кнопка поиска. */
const NAV_BREAKPOINT_PX = 1200;
const COLLAPSE_DURATION_MS = 500;

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const [searchFieldWidth, setSearchFieldWidth] = useState(192);
  const [searchFieldHeight, setSearchFieldHeight] = useState(40);
  const mobileMenuRef = useRef<HTMLDivElement>(null);
  const searchDesktopRef = useRef<HTMLDivElement>(null);
  const searchMobileRef = useRef<HTMLDivElement>(null);
  const searchInputRef = useRef<HTMLTextAreaElement>(null);
  const searchMeasureRef = useRef<HTMLSpanElement>(null);

  const SEARCH_PADDING_X_PX = 12; // px-3
  const SEARCH_PADDING_RIGHT_EXTRA_PX = 16; // место под вертикальный скроллбар
  const SEARCH_BORDER_PX = 2;
  const SEARCH_DROPDOWN_INNER_CHROME_PX = 26; // px-3 по бокам + border контейнера
  const SEARCH_VIEWPORT_MARGIN = 24;

  const resizeSearchField = (el: HTMLTextAreaElement | null) => {
    if (!el) return;
    el.style.height = "auto";
    const maxH = 160;
    const h = Math.min(el.scrollHeight, maxH);
    el.style.height = `${h}px`;
    setSearchFieldHeight(h);
  };

  useEffect(() => {
    if (!isSearchOpen) return;
    const measure = searchMeasureRef.current;
    if (!measure) return;
    const text = searchQuery || "Введите запрос...";
    measure.textContent = text;
    const updateWidth = () => {
      const maxW =
        typeof window !== "undefined"
          ? window.innerWidth - SEARCH_VIEWPORT_MARGIN * 2 - SEARCH_DROPDOWN_INNER_CHROME_PX
          : 400;
      const minW = 192;
      const totalPaddingX = SEARCH_PADDING_X_PX * 2 + SEARCH_PADDING_RIGHT_EXTRA_PX;
      const w = Math.min(Math.max(measure.offsetWidth + totalPaddingX + SEARCH_BORDER_PX, minW), maxW);
      setSearchFieldWidth(w);
      const el = searchInputRef.current;
      if (el) resizeSearchField(el);
    };
    const id = requestAnimationFrame(updateWidth);
    window.addEventListener("resize", updateWidth);
    return () => {
      cancelAnimationFrame(id);
      window.removeEventListener("resize", updateWidth);
    };
  }, [searchQuery, isSearchOpen]);
  const [isWideViewport, setIsWideViewport] = useState(() =>
    typeof window !== "undefined" ? window.matchMedia(`(min-width: ${NAV_BREAKPOINT_PX}px)`).matches : true
  );
  const [isCollapsing, setIsCollapsing] = useState(false);
  const [isExpanding, setIsExpanding] = useState(false);
  const [expandingTrigger, setExpandingTrigger] = useState(false);
  const [mobileSlideIn, setMobileSlideIn] = useState(false);
  const [mobileSlideInTrigger, setMobileSlideInTrigger] = useState(false);
  const [mobileSlidingOut, setMobileSlidingOut] = useState(false);
  const [mobileSlideOutTrigger, setMobileSlideOutTrigger] = useState(false);
  const wasWideRef = useRef(isWideViewport);

  const toggleMenu = () => setIsOpen(!isOpen);

  useEffect(() => {
    const mql = window.matchMedia(`(min-width: ${NAV_BREAKPOINT_PX}px)`);
    wasWideRef.current = mql.matches;
    setIsWideViewport(mql.matches);

    const handleChange = () => {
      const wide = mql.matches;
      if (wasWideRef.current && !wide) {
        setIsCollapsing(true);
        setTimeout(() => {
          setIsCollapsing(false);
          setIsWideViewport(false);
          wasWideRef.current = false;
          setMobileSlideIn(true);
          setMobileSlideInTrigger(false);
        }, COLLAPSE_DURATION_MS);
      } else if (!wasWideRef.current && wide) {
        wasWideRef.current = true;
        setIsWideViewport(true);
        setIsExpanding(true);
        setExpandingTrigger(false);
        setMobileSlidingOut(true);
        setMobileSlideOutTrigger(false);
      } else {
        wasWideRef.current = wide;
        setIsWideViewport(wide);
      }
    };
    mql.addEventListener("change", handleChange);
    return () => mql.removeEventListener("change", handleChange);
  }, []);

  useEffect(() => {
    if (!isExpanding) return;
    const t = setTimeout(() => {
      setIsExpanding(false);
      setExpandingTrigger(false);
    }, COLLAPSE_DURATION_MS * 2);
    return () => clearTimeout(t);
  }, [isExpanding]);

  useEffect(() => {
    if (!mobileSlidingOut) return;
    const id = requestAnimationFrame(() => {
      requestAnimationFrame(() => setMobileSlideOutTrigger(true));
    });
    const t = setTimeout(() => {
      setMobileSlidingOut(false);
      setMobileSlideOutTrigger(false);
      setExpandingTrigger(true);
    }, COLLAPSE_DURATION_MS);
    return () => {
      cancelAnimationFrame(id);
      clearTimeout(t);
    };
  }, [mobileSlidingOut]);

  useEffect(() => {
    if (!mobileSlideIn) return;
    const id = requestAnimationFrame(() => {
      requestAnimationFrame(() => setMobileSlideInTrigger(true));
    });
    const t = setTimeout(() => {
      setMobileSlideIn(false);
      setMobileSlideInTrigger(false);
    }, COLLAPSE_DURATION_MS);
    return () => {
      cancelAnimationFrame(id);
      clearTimeout(t);
    };
  }, [mobileSlideIn]);

  const showDesktopNav = isWideViewport || isCollapsing || isExpanding;
  const showMobileButton = (!isWideViewport && !isCollapsing) || mobileSlidingOut;

  useEffect(() => {
    if (!isOpen) return;
    const handleClickOutside = (e: MouseEvent) => {
      if (mobileMenuRef.current && !mobileMenuRef.current.contains(e.target as Node)) {
        setIsOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, [isOpen]);

  useEffect(() => {
    if (!isSearchOpen) return;
    const handleClickOutside = (e: MouseEvent) => {
      const target = e.target as Node;
      if (
        searchDesktopRef.current?.contains(target) ||
        searchMobileRef.current?.contains(target)
      ) return;
      setIsSearchOpen(false);
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, [isSearchOpen]);

  useEffect(() => {
    if (isSearchOpen) {
      const id = requestAnimationFrame(() => {
        const el = searchInputRef.current;
        if (el) {
          el.focus();
          resizeSearchField(el);
        }
      });
      return () => cancelAnimationFrame(id);
    }
  }, [isSearchOpen]);

  const navLinks = [
    { href: "/", label: "Главная" },
    { href: "/news", label: "Новости" },
    { href: "/youth-council", label: "Молодёжный совет" },
    { href: "/events", label: "Мероприятия" },
    { href: "/services", label: "Услуги" },
    { href: "/about", label: "О нас" },
    { href: "/contacts", label: "Контакты" },
  ];

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white border-0 shadow-none">
      <span
        ref={searchMeasureRef}
        aria-hidden
        className="absolute left-[-9999px] text-sm whitespace-nowrap pointer-events-none"
      >
        {searchQuery || "Введите запрос..."}
      </span>
      <div className="container mx-auto px-4">
        <nav className="flex items-center justify-between h-20">
          {/* Logo */}
          <InternalLink
            to="/"
            className="flex items-center gap-2 group"
            onClick={() => setIsOpen(false)}
          >
            <img
              src="/logo-emblem.png"
              alt=""
              className="h-[75px] w-[75px] object-contain shrink-0 self-center"
              width={75}
              height={75}
            />
            <div
              className="hidden sm:block text-[0.6875rem] font-bold uppercase leading-[1.35] tracking-tight self-center mt-[0.625rem]"
              style={{ color: "var(--logo-name)" }}
            >
              <div className="whitespace-nowrap">Московская областная организация</div>
              <div className="whitespace-nowrap">профсоюза работников</div>
              <div className="whitespace-nowrap">здравоохранения</div>
            </div>
          </InternalLink>

          {/* Обёртка: десктопное меню уезжает вправо за 500ms, затем показывается кнопка мобильного меню */}
          <div
            className={cn(
              "flex justify-end transition-all duration-500",
              showDesktopNav ? "flex-1 ml-6" : "flex-none basis-0 overflow-visible",
              (showDesktopNav && (isCollapsing || isExpanding)) && "overflow-hidden min-w-0"
            )}
          >
            <div
              className={cn(
                "flex items-center gap-2 transition-all duration-500 ease-out",
                !showDesktopNav && "hidden",
                (isCollapsing || (isExpanding && !expandingTrigger)) && "translate-x-full opacity-0"
              )}
            >
              {navLinks.map((link) => (
                <InternalLink
                  key={link.href}
                  to={link.href}
                  className="px-4 py-2.5 text-sm sm:text-base font-medium text-gray-600 hover:text-primary rounded-lg transition-colors duration-200 whitespace-nowrap focus:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2"
                >
                  {link.label}
                </InternalLink>
              ))}
              <div ref={searchDesktopRef} className="relative flex flex-col items-end">
                <button
                  type="button"
                  onClick={() => setIsSearchOpen(!isSearchOpen)}
                  className="p-2.5 text-gray-600 hover:text-primary rounded-lg transition-colors duration-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2"
                  aria-expanded={isSearchOpen}
                  aria-label="Поиск"
                >
                  <Search size={20} className="shrink-0" aria-hidden />
                </button>
                <div
                  role="search"
                  aria-label="Строка поиска"
                  aria-hidden={!isSearchOpen}
                  className={cn(
                    "absolute right-0 top-full mt-1 min-w-72 max-w-[calc(100vw-3rem)] py-2 px-3 bg-white border border-gray-200 rounded-lg shadow-lg overflow-hidden transition-[transform,opacity] duration-200 ease-out origin-top",
                    isSearchOpen
                      ? "scale-y-100 opacity-100"
                      : "scale-y-0 opacity-0 pointer-events-none"
                  )}
                >
                  <div
                    className="border border-gray-100 rounded-md overflow-hidden box-border"
                    style={{ width: searchFieldWidth, height: searchFieldHeight }}
                  >
                    <textarea
                      ref={showDesktopNav ? searchInputRef : undefined}
                      rows={1}
                      value={searchQuery}
                      onChange={(e) => setSearchQuery(e.target.value)}
                      placeholder="Введите запрос..."
                      className="box-border w-full min-h-[2.5rem] max-h-40 px-3 pr-7 py-2 text-sm border-0 focus:outline-none focus:ring-0 resize-none overflow-y-auto overflow-x-hidden block bg-transparent"
                      onKeyDown={(e) => e.key === "Escape" && setIsSearchOpen(false)}
                      onInput={(e) => resizeSearchField(e.currentTarget)}
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Кнопка мобильного меню и значок поиска — показываются после ухода десктопного меню вправо */}
          {showMobileButton && (
          <div
            className={cn(
              "flex items-center gap-1 shrink-0 transition-all duration-500 ease-out",
              mobileSlideIn && !mobileSlideInTrigger && "translate-x-full opacity-0",
              mobileSlidingOut && mobileSlideOutTrigger && "translate-x-full opacity-0",
              (!mobileSlideIn || mobileSlideInTrigger) && !(mobileSlidingOut && mobileSlideOutTrigger) && "translate-x-0 opacity-100"
            )}
          >
            <div ref={mobileMenuRef} className="relative flex flex-col items-end">
            <button
                type="button"
                onClick={toggleMenu}
                className="group min-w-[7.5rem] min-h-[44px] p-3 -m-1 flex items-center gap-2 rounded-lg overflow-hidden focus:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2"
                aria-expanded={isOpen}
                aria-controls="mobile-nav"
                aria-label={isOpen ? "Закрыть меню" : "Открыть меню"}
              >
                <span
                  className={cn(
                    "shrink-0 transition-transform duration-200 ease-out",
                    isOpen && "translate-x-[5rem]"
                  )}
                >
                  <Menu
                    size={24}
                    className="text-gray-600 group-hover:text-primary"
                    aria-hidden
                  />
                </span>
                <span
                  className={cn(
                    "overflow-hidden transition-[max-width,opacity] duration-200 ease-out inline-block",
                    isOpen ? "max-w-0 opacity-0" : "max-w-[5rem] opacity-100"
                  )}
                >
                  <span className="text-sm sm:text-base font-medium text-gray-600 group-hover:text-primary whitespace-nowrap">
                    Меню
                  </span>
                </span>
              </button>

              {/* Выпадающее меню: из блока кнопки, справа, ширина по самой длинной строке */}
              <div
                id="mobile-nav"
                role="navigation"
                aria-label="Основное меню"
                aria-hidden={!isOpen}
                className={cn(
                  "absolute right-0 top-full mt-1 w-max min-w-0 py-2 px-1 bg-white border border-gray-200 rounded-lg shadow-lg overflow-hidden transition-[transform,opacity] duration-200 ease-out origin-top",
                  isOpen
                    ? "scale-y-100 opacity-100"
                    : "scale-y-0 opacity-0 pointer-events-none"
                )}
              >
                <nav className="flex flex-col">
                  {navLinks.map((link) => (
                    <InternalLink
                      key={link.href}
                      to={link.href}
                      onClick={() => setIsOpen(false)}
                      className="px-4 py-2.5 text-gray-600 hover:text-primary rounded-md transition-colors duration-200 whitespace-nowrap text-left"
                    >
                      {link.label}
                    </InternalLink>
                  ))}
                </nav>
              </div>
            </div>
            <div ref={searchMobileRef} className="relative flex flex-col items-end">
              <button
                type="button"
                onClick={() => setIsSearchOpen(!isSearchOpen)}
                className="p-2.5 text-gray-600 hover:text-primary rounded-lg transition-colors duration-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2"
                aria-expanded={isSearchOpen}
                aria-label="Поиск"
              >
                <Search size={20} className="shrink-0" aria-hidden />
              </button>
              <div
                role="search"
                aria-label="Строка поиска"
                aria-hidden={!isSearchOpen}
                className={cn(
                  "absolute right-0 top-full mt-1 min-w-72 max-w-[calc(100vw-3rem)] py-2 px-3 bg-white border border-gray-200 rounded-lg shadow-lg overflow-hidden transition-[transform,opacity] duration-200 ease-out origin-top",
                  isSearchOpen
                    ? "scale-y-100 opacity-100"
                    : "scale-y-0 opacity-0 pointer-events-none"
                )}
              >
                <div
                  className="border border-gray-100 rounded-md overflow-hidden box-border"
                  style={{ width: searchFieldWidth, height: searchFieldHeight }}
                >
                  <textarea
                    ref={showMobileButton ? searchInputRef : undefined}
                    rows={1}
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    placeholder="Введите запрос..."
                    className="box-border w-full min-h-[2.5rem] max-h-40 px-3 pr-7 py-2 text-sm border-0 focus:outline-none focus:ring-0 resize-none overflow-y-auto overflow-x-hidden block bg-transparent"
                    onKeyDown={(e) => e.key === "Escape" && setIsSearchOpen(false)}
                    onInput={(e) => resizeSearchField(e.currentTarget)}
                  />
                </div>
              </div>
            </div>
          </div>
          )}
        </nav>
      </div>
    </header>
  );
}
