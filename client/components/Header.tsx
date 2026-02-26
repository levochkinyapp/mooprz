import { useState, useEffect, useRef } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu } from "lucide-react";
import { cn } from "@/lib/utils";

const NAV_BREAKPOINT_PX = 1164;
const COLLAPSE_DURATION_MS = 500;

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();
  const mobileMenuRef = useRef<HTMLDivElement>(null);
  const [isWideViewport, setIsWideViewport] = useState(() =>
    typeof window !== "undefined" ? window.matchMedia(`(min-width: ${NAV_BREAKPOINT_PX}px)`).matches : true
  );
  const [isCollapsing, setIsCollapsing] = useState(false);
  const [isExpanding, setIsExpanding] = useState(false);
  const [expandingTrigger, setExpandingTrigger] = useState(false);
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
        }, COLLAPSE_DURATION_MS);
      } else if (!wasWideRef.current && wide) {
        wasWideRef.current = true;
        setIsWideViewport(true);
        setIsExpanding(true);
        setExpandingTrigger(false);
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
    const id = requestAnimationFrame(() => {
      requestAnimationFrame(() => setExpandingTrigger(true));
    });
    const t = setTimeout(() => {
      setIsExpanding(false);
      setExpandingTrigger(false);
    }, COLLAPSE_DURATION_MS);
    return () => {
      cancelAnimationFrame(id);
      clearTimeout(t);
    };
  }, [isExpanding]);

  const showDesktopNav = isWideViewport || isCollapsing || isExpanding;
  const showMobileButton = !isWideViewport && !isCollapsing;

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

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

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
    <header className="fixed top-0 left-0 right-0 z-50 bg-white border-b border-gray-200 shadow-sm">
      <div className="container mx-auto px-4">
        <nav className="flex items-center justify-between h-20">
          {/* Logo */}
          <Link
            to="/"
            className="flex items-center gap-2 group"
            onClick={() => {
              setIsOpen(false);
              if (location.pathname === "/") scrollToTop();
            }}
          >
            <img
              src="/logo-emblem.png"
              alt=""
              className="h-[75px] w-[75px] object-contain shrink-0 self-center"
              width={75}
              height={75}
            />
            <div
              className="hidden sm:block text-[11px] font-bold uppercase leading-[1.35] tracking-tight self-center mt-[10px]"
              style={{ color: "var(--logo-name)" }}
            >
              <div className="whitespace-nowrap">Московская областная организация</div>
              <div className="whitespace-nowrap">профсоюза работников</div>
              <div className="whitespace-nowrap">здравоохранения</div>
            </div>
          </Link>

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
                <Link
                  key={link.href}
                  to={link.href}
                  className="px-4 py-2.5 text-sm sm:text-base font-medium text-black-75 hover:text-primary rounded-lg transition-colors duration-200 whitespace-nowrap focus:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2"
                  onClick={location.pathname === link.href ? scrollToTop : undefined}
                >
                  {link.label}
                </Link>
              ))}
            </div>
          </div>

          {/* Кнопка мобильного меню — показывается после ухода десктопного меню вправо */}
          {showMobileButton && (
          <div ref={mobileMenuRef} className="relative flex flex-col items-end shrink-0">
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
                    className="text-black-75 group-hover:text-primary"
                    aria-hidden
                  />
                </span>
                <span
                  className={cn(
                    "overflow-hidden transition-[max-width,opacity] duration-200 ease-out inline-block",
                    isOpen ? "max-w-0 opacity-0" : "max-w-[5rem] opacity-100"
                  )}
                >
                  <span className="text-sm sm:text-base font-medium text-black-75 group-hover:text-primary whitespace-nowrap">
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
                    <Link
                      key={link.href}
                      to={link.href}
                      onClick={() => {
                        setIsOpen(false);
                        if (location.pathname === link.href) scrollToTop();
                      }}
                      className="px-4 py-2.5 text-black-75 hover:text-primary rounded-md transition-colors duration-200 whitespace-nowrap text-left"
                    >
                      {link.label}
                    </Link>
                  ))}
                </nav>
              </div>
          </div>
          )}
        </nav>
      </div>
    </header>
  );
}
