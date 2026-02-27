import { useEffect } from "react";
import { useLocation } from "react-router-dom";

/**
 * При каждом переходе на другую страницу прокручивает окно в начало,
 * чтобы страница открывалась «с начала».
 */
export function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
}
