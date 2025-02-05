import { useLocation } from "react-router-dom";
import Header from "./Header";
import Footer from "./Footer";

export default function Layout({ children }) {
  const location = useLocation();

  return (
    <div className="flex flex-col min-h-screen">
      {/* Header Component */}
      <Header />
      
      {/* Main Content */}
      <main className="flex-grow pt-16">
        {/* SEO Improvement: Wrapping children with a section element for better semantics */}
        <section aria-labelledby="main-content">{children}</section>
      </main>
      
      {/* Footer Component */}
      <Footer />
    </div>
  );
}
