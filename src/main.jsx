import { StrictMode, useEffect } from 'react';
import { createRoot } from 'react-dom/client';
import './index.css'; // Your global styles, minimize CSS bundle size
import App from './App.jsx';
import { Helmet } from 'react-helmet'; // For SEO and meta tags

// SEO: Set up meta tags for the app
const SEO = () => {
  useEffect(() => {
    const head = document.querySelector('head');
    head.insertAdjacentHTML(
      'beforeend',
      `
      <meta name="description" content="Welcome to JJ Villa in Aluthgama, Sri Lanka. Book a luxurious stay and explore the beauty of Sri Lanka!" />
      <meta name="keywords" content="JJ Villa, Aluthgama, Luxury stay, Sri Lanka, Vacation" />
      <meta property="og:title" content="JJ Villa - Aluthgama" />
      <meta property="og:description" content="Experience the beauty of Sri Lanka with JJ Villa, your perfect destination in Aluthgama." />
      <meta property="og:image" content="https://example.com/your-image.jpg" />
      <meta property="og:url" content="https://example.com" />
      <meta name="robots" content="index, follow" />
      <link rel="canonical" href="https://example.com" />
    `);
  }, []);

  return null;
};

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <SEO /> {/* Add SEO component to inject meta tags */}
    <App />
  </StrictMode>,
);
