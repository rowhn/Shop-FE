import { useState } from 'react';
import { Link } from 'react-router-dom';
import Icon from './Icon.jsx';
import { Badge, Button, cx } from './ui';
import { whatsappLink } from '../config/siteConfig.js';
import { BRAND_STYLE } from '../data/phones.js';
import './PhoneCard.css';

/** Phone photo, or a clean brand-coloured placeholder when no photo exists (or the file is missing). */
export function PhoneImage({ phone, index = 0, className }) {
  const url = phone.images?.[index];
  const [failed, setFailed] = useState(null);
  if (url && failed !== url) return <img src={url} alt={phone.name} loading="lazy" onError={() => setFailed(url)} className={cx('pm-phoneimg', className)} />;
  const [a, b] = BRAND_STYLE[phone.brand] || ['#f2f2f4', '#c9ccd3'];
  return (
    <div className={cx('pm-phoneimg pm-phoneimg--ph', className)} style={{ background: `linear-gradient(145deg, ${a}, ${b})` }} role="img" aria-label={phone.name}>
      <Icon name="phone" size={56} strokeWidth={1.1} />
      <span>{phone.brand}</span>
    </div>
  );
}

export default function PhoneCard({ phone }) {
  return (
    <article className="pm-phonecard">
      <Link to={`/phones/${phone.slug}`} className="pm-phonecard__media" aria-hidden="true" tabIndex={-1}>
        <PhoneImage phone={phone} className="pm-phonecard__img" />
        {phone.images?.length > 1 && <PhoneImage phone={phone} index={1} className="pm-phonecard__img pm-phonecard__img--alt" />}
        {phone.tag && <span className="pm-phonecard__tag"><Badge tone="blue">{phone.tag}</Badge></span>}
      </Link>
      <div className="pm-phonecard__body">
        <p className="pm-phonecard__brand">{phone.brand}</p>
        <h3 className="pm-phonecard__name"><Link to={`/phones/${phone.slug}`}>{phone.name}</Link></h3>
        <p className="pm-phonecard__sum">{phone.summary}</p>
        <div className="pm-phonecard__actions">
          <Button to={`/phones/${phone.slug}`} variant="secondary" size="sm" className="flex-grow-1">View details</Button>
          <Button href={whatsappLink(`Hi! I'd like today's price for ${phone.name}.`)} target="_blank" rel="noopener noreferrer" variant="whatsapp" size="sm" aria-label={`Ask price of ${phone.name} on WhatsApp`}>
            <Icon name="whatsapp" size={16} /> Price
          </Button>
        </div>
      </div>
    </article>
  );
}