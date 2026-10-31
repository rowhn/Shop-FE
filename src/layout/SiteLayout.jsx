import { useEffect } from 'react';
import { Outlet, useLocation } from 'react-router-dom';
import MarqueeBanner from './MarqueeBanner.jsx';
import Navbar from './Navbar.jsx';
import Footer from './Footer.jsx';
import WhatsAppButton from './WhatsAppButton.jsx';
import './SiteLayout.css';

/** Frame around every page: Navbar → marquee → page → Footer (+ floating WhatsApp). */
export default function SiteLayout() {
  const { pathname } = useLocation();
  useEffect(() => window.scrollTo({ top: 0, behavior: 'instant' }), [pathname]);
  return (
    <div className="pm-site">
      <a href="#main" className="pm-skip">Skip to content</a>
      <Navbar />
      <MarqueeBanner />
      <main id="main" className="pm-site__main"><Outlet /></main>
      <Footer />
      <WhatsAppButton />
    </div>
  );
}
