import { useEffect } from "react";
import { useLocation } from "react-router-dom";

export default function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: "instant" // or "smooth" if preferred, but "instant" is usually better for page transitions
    });
  }, [pathname]);

  return null;
}
