import Icon from '../../components/Icon.jsx';
import { Button, Reveal, SectionHeading } from '../../components/ui';
import { whatsappLink } from '../../config/siteConfig.js';
import { useConfig } from '../../context/Config.jsx';
import "./Moreinshop.css";

// ✏️ "More in the shop" tiles. Add / remove rows: [icon, title, description]
const ITEMS = [
  ['phone', 'More phones', 'Many more models and budgets in the shop.'],
  ['plug', 'Accessories', 'Chargers, cables, earphones, covers, screen guards.'],
  ['screen', 'TVs', 'Smart TVs for your home. Ask us what is available.'],
  ['speaker', 'Speakers', 'Bluetooth speakers and sound systems.'],
];

/** Tells visitors the shop has more than what is listed online and invites them to visit / ask. */
export default function MoreInShop() {
  const { store } = useConfig();
  return (
    <section className="container pm-more">
      <SectionHeading eyebrow="Visit the shop" title="Much more in the shop" />
      <div className="row g-3 g-md-4">
        {ITEMS.map(([ic, t, d], i) => (
          <div key={t} className="col-6 col-lg-3">
            <Reveal delay={i * 0.05} y={14} className="pm-more__card">
              <span className="pm-more__icon"><Icon name={ic} size={26} strokeWidth={1.4} /></span>
              <h3 className="h6 fw-semibold ">{t}</h3>
              <p className="small text-muted mb-0">{d}</p>
            </Reveal>
          </div>
        ))}
      </div>
    </section>
  );
}