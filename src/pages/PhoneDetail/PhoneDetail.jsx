import { useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import Icon from '../../components/Icon.jsx';
import PhoneCard, { PhoneImage } from '../../components/PhoneCard.jsx';
import { Button, SectionHeading, cx } from '../../components/ui';
import { phones } from '../../data/phones.js';
import { whatsappLink } from '../../config/siteConfig.js';
import { useConfig } from '../../context/Config.jsx';
import './PhoneDetail.css';

export default function PhoneDetail() {
  const { slug } = useParams();
  const { store } = useConfig();
  const phone = phones.find((p) => p.slug === slug);
  const [i, setI] = useState(0);
  if (!phone) {
    return (
      <div className="container py-5 text-center">
        <h1 className="page-title">Phone not found</h1>
        <Button to="/phones" className="mt-3">See all phones</Button>
      </div>
    );
  }
  const count = Math.max(1, phone.images.length);
  const go = (d) => setI((v) => (v + d + count) % count);
  const related = phones.filter((p) => p.brand === phone.brand && p.slug !== phone.slug).concat(phones.filter((p) => p.brand !== phone.brand)).slice(0, 4);

  return (
    <div className="container py-4 py-lg-5">
      <nav aria-label="Breadcrumb" className="pm-pd__crumbs"><Link to="/">Home</Link> / <Link to="/phones">Phones</Link> / <Link to={`/phones?brand=${phone.brand}`}>{phone.brand}</Link></nav>
      <div className="row g-4 g-lg-5">
        <div className="col-12 col-lg-6">
          <div className="pm-pd__gallery">
            {count > 1 && (
              <div className="pm-pd__thumbs hide-scrollbar" role="tablist" aria-label="Photos">
                {phone.images.map((u, idx) => (
                  <button type="button" key={u} role="tab" aria-selected={idx === i} aria-label={`Show photo ${idx + 1}`} onClick={() => setI(idx)} className={cx('pm-pd__thumb', idx === i && 'is-active')}><img src={u} alt="" /></button>
                ))}
              </div>
            )}
            <div className="pm-pd__stage">
              <PhoneImage phone={phone} index={i} className="pm-pd__img" />
              {count > 1 && (
                <>
                  <button type="button" aria-label="Previous photo" onClick={() => go(-1)} className="pm-pd__nav pm-pd__nav--prev"><Icon name="chevronLeft" /></button>
                  <button type="button" aria-label="Next photo" onClick={() => go(1)} className="pm-pd__nav pm-pd__nav--next"><Icon name="chevronRight" /></button>
                </>
              )}
            </div>
          </div>
        </div>
        <div className="col-12 col-lg-6">
          <p className="pm-pd__brand">{phone.brand}</p>
          <h1 className="page-title mb-2">{phone.name}</h1>
          <p className="fs-5 text-muted">{phone.summary}</p>
          <p className="pm-pd__price">Price: <strong>ask on WhatsApp for today’s best price</strong></p>
          <div className="d-grid gap-2 d-sm-flex mt-3">
            <Button href={whatsappLink(`Hi! I'd like today's price and availability for ${phone.name}.`)} target="_blank" rel="noopener noreferrer" variant="whatsapp" size="lg"><Icon name="whatsapp" size={18} /> Ask price on WhatsApp</Button>
            <Button href={`tel:${store.phoneDial}`} variant="outline" size="lg"><Icon name="phone" size={18} /> Call the shop</Button>
          </div>
          <h2 className="h5 fw-semibold mt-5 mb-3">Key specifications</h2>
          <dl className="pm-pd__specs">
            {phone.specs.map(([k, v]) => <div key={k} className="pm-pd__spec"><dt>{k}</dt><dd>{v}</dd></div>)}
          </dl>
          <p className="small text-muted mt-3">Specifications follow manufacturer listings. Please confirm the exact variant and availability in the shop.</p>
        </div>
      </div>
      <section className="mt-5 pt-3">
        <SectionHeading title="You may also like" />
        <div className="row g-3 g-md-4 row-cols-2 row-cols-lg-4">
          {related.map((p) => <div className="col" key={p.slug}><PhoneCard phone={p} /></div>)}
        </div>
      </section>
    </div>
  );
}
