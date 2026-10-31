import Icon from '../../components/Icon.jsx';
import { Button } from '../../components/ui';
import { useConfig } from '../../context/Config.jsx';
import './About.css';

// ✏️ Write your own shop story here. Replace the paragraph and points with your real details.
const POINTS = [
  ['phone', 'Latest phones', 'iPhone, Samsung, OnePlus, Vivo and Motorola in one place.'],
  ['wrench', 'Repairs in-house', 'Bring your phone in, get a clear quote first.'],
  ['help', 'Honest advice', 'We suggest what fits your budget and use.'],
  ['mapPin', 'Local & easy to reach', 'Right on Bank Of India Rd, Ghugus.'],
];

export default function About() {
  const { store } = useConfig();
  return (
    <div className="container py-4 py-lg-5">
      <h1 className="page-title">About {store.name}</h1>
      <p className="fs-5 text-muted col-lg-8">{store.name} is a mobile shop in Ghugus, Maharashtra. We help you choose the right phone, keep your phone working with quick repairs, and stock the everyday accessories you need.</p>
      <div className="row g-3 g-md-4 mt-2">
        {POINTS.map(([ic, t, d]) => (
          <div key={t} className="col-6 col-lg-3"><div className="pm-about__card"><Icon name={ic} size={28} strokeWidth={1.4} /><h2 className="h6 fw-semibold mt-3 mb-1">{t}</h2><p className="small text-muted mb-0">{d}</p></div></div>
        ))}
      </div>
      <div className="mt-5 d-flex flex-wrap gap-2">
        <Button to="/phones" size="lg">See phones</Button>
        <Button to="/contact" variant="outline" size="lg">Contact &amp; location</Button>
      </div>
    </div>
  );
}
