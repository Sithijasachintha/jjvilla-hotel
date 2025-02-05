import { useEffect } from "react";
import { useLocation } from "react-router-dom";

/**
 * Scrolls to the top of the page whenever the route changes.
 * Improves user experience by preventing pages from loading at a scrolled position.
 */
const ScrollToTop = () => {
  const location = useLocation();

  useEffect(() => {
    if (typeof window !== "undefined") {
      window.scrollTo({ top: 0, behavior: "smooth" }); // Smooth scrolling
    }
  }, [location.pathname]);

  return null; // No UI component needed
};

export default ScrollToTop;
