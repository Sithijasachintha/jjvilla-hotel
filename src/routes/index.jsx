import { lazy, Suspense } from "react";
import { Routes, Route } from "react-router-dom";
import LoadingSpinner from "../components/common/LoadingSpinner";
import ScrollToTop from "../components/common/ScrollToTop";

// Lazy Load Pages with dynamic imports for better performance
const Home = lazy(() => import("../pages/Home"));
const Rooms = lazy(() => import("../pages/Rooms"));
const Services = lazy(() => import("../pages/Services"));
const Gallery = lazy(() => import("../pages/Gallery"));
const Contact = lazy(() => import("../pages/Contact"));

function ErrorBoundary({ children }) {
  return <Suspense fallback={<LoadingSpinner />}>{children}</Suspense>;
}

export default function AppRoutes() {
  return (
    <ErrorBoundary>
      {/* ScrollToTop ensures that the page scrolls to the top on navigation */}
      <ScrollToTop />
      <Routes>
        {/* Using descriptive paths for SEO */}
        <Route path="/" element={<Home />} />
        <Route path="/rooms" element={<Rooms />} />
        <Route path="/services" element={<Services />} />
        <Route path="/gallery" element={<Gallery />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </ErrorBoundary>
  );
}
