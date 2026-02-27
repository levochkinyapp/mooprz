import type { ComponentProps } from "react";
import { Link, useLocation } from "react-router-dom";

const scrollToTop = () => {
  window.scrollTo({ top: 0, behavior: "smooth" });
};

/**
 * Внутренняя ссылка: при первом нажатии открывает страницу,
 * при повторном (уже на этой странице) — скролл в начало.
 */
export function InternalLink({ to, onClick, ...props }: ComponentProps<typeof Link>) {
  const location = useLocation();
  const path = typeof to === "string" ? to : (to?.pathname ?? "");
  const isCurrent = location.pathname === path;

  return (
    <Link
      {...props}
      to={to}
      onClick={(e) => {
        if (isCurrent) {
          e.preventDefault();
          scrollToTop();
        }
        onClick?.(e);
      }}
    />
  );
}
