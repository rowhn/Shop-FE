import { Link } from 'react-router-dom';
import Icon from '../../components/Icon.jsx';
import { Reveal } from '../../components/ui';
import { BRANDS, phones } from '../../data/phones.js';
import HeroCarousel from './HeroCarousel.jsx';
import PhoneRail from './PhoneRail.jsx';
import EmiBanner from "./Emibanner.jsx";
import MoreInShop from './Moreinshop.jsx';
import VisitShop from './VisitShop.jsx';
import './Home.css';

const SERVICES = [
  ['phone', 'New phones', 'iPhone, Samsung, OnePlus, Vivo, Motorola and more.'],
  ['wrench', 'Mobile repairs', 'Screen, battery, charging port and other common faults.'],
  ['plug', 'Accessories', 'Chargers, cables, covers and screen guards.'],
  ['help', 'Honest advice', 'Tell us your budget and needs; we help you choose.'],
];

/** Homepage. Reorder sections by moving lines inside return(). */
export default function Home() {
  const featured = phones.filter((p) => p.featured);
  return (
    <>
      <HeroCarousel />

      <section className="container pm-home__brands" aria-label="Brands">
        <div className="row g-2 g-md-3">
          {BRANDS.map((b) => (
            <div key={b} className="col-4 col-md">
              <Link to={`/phones?brand=${b}`} className="pm-home__brand">{b}</Link>
            </div>
          ))}
        </div>
      </section>

      <PhoneRail eyebrow="Latest arrivals" title="Featured phones" to="/phones" items={featured} />

      <EmiBanner />

      <MoreInShop />

      <section className="container pm-home__services">
        <div className="row g-3 g-md-4">
          {SERVICES.map(([ic, t, d], i) => (
            <div key={t} className="col-6 col-lg-3">
              <Reveal delay={i * 0.06} y={14} className="pm-home__service">
                <Icon name={ic} size={28} strokeWidth={1.4} />
                <h3 className="h6 fw-semibold mt-3 mb-1">{t}</h3>
                <p className="small text-muted mb-0">{d}</p>
              </Reveal>
            </div>
          ))}
        </div>
      </section>

      <VisitShop />
    </>
  );
}