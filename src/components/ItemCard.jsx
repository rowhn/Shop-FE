import { useState } from 'react';
import Icon from './Icon.jsx';
import { Badge, Button, cx } from './ui';
import { whatsappLink } from '../config/siteConfig.js';
import './PhoneCard.css';
import './ItemCard.css';

/** Card for accessories and TVs (data/catalog.js). Uses the same look as PhoneCard. */
export default function ItemCard({ item }) {
  const url = item.images?.[0];
  const [failed, setFailed] = useState(null);
  const showImg = url && failed !== url;
  const isTv = item.category === 'tv';
  return (
    <article className="pm-phonecard pm-itemcard">
      <div className="pm-phonecard__media">
        {showImg ? (
          <img src={url} alt={item.name} loading="lazy" onError={() => setFailed(url)} className="pm-phoneimg" />
        ) : (
          <div className={cx('pm-phoneimg pm-phoneimg--ph pm-itemcard__ph', isTv && 'is-tv')} role="img" aria-label={item.name}>
            <Icon name={item.icon || 'tag'} size={56} strokeWidth={1.1} />
            <span>{item.tag}</span>
          </div>
        )}
        {item.tag && <span className="pm-phonecard__tag"><Badge tone="blue">{item.tag}</Badge></span>}
      </div>
      <div className="pm-phonecard__body">
        {item.brand && <p className="pm-phonecard__brand">{item.brand}</p>}
        <h3 className="pm-phonecard__name">{item.name}</h3>
        <p className="pm-phonecard__sum">{item.summary}</p>
        <div className="pm-phonecard__actions">
          <Button
            href={whatsappLink(`Hi! I'd like the price and availability of: ${item.name}.`)}
            target="_blank" rel="noopener noreferrer" variant="whatsapp" size="sm" className="flex-grow-1"
            aria-label={`Ask price of ${item.name} on WhatsApp`}
          >
            <Icon name="whatsapp" size={16} /> {isTv ? 'Ask price & stock' : 'Ask price'}
          </Button>
        </div>
      </div>
    </article>
  );
}