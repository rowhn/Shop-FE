import { useState } from 'react';
import { Button } from '../../components/ui';
import Icon from '../../components/Icon.jsx';
import ShopInfo from '../../layout/ShopInfo.jsx';
import { whatsappLink } from '../../config/siteConfig.js';
import './Contact.css';

/** Contact page. The form has no server: it opens WhatsApp with the typed message. */
export default function Contact() {
  const [f, setF] = useState({ name: '', message: '' });
  const set = (k) => (e) => setF({ ...f, [k]: e.target.value });
  const send = (e) => {
    e.preventDefault();
    const text = `Hi Pranay Mobiles! I'm ${f.name || 'a customer'}. ${f.message}`;
    window.open(whatsappLink(text), '_blank', 'noopener');
  };
  return (
    <div className="container py-4 py-lg-5">
      <h1 className="page-title">Contact us</h1>
      <p className="text-muted">Visit the shop, call, or message us on WhatsApp.</p>
      <div className="row g-4 g-lg-5">
        <div className="col-lg-6">
          <form onSubmit={send} className="pm-contact__form">
            <h2 className="h5 fw-semibold">Send us a message on WhatsApp</h2>
            <label className="form-label small fw-medium mt-3" htmlFor="c-name">Your name</label>
            <input id="c-name" className="form-control" value={f.name} onChange={set('name')} />
            <label className="form-label small fw-medium mt-3" htmlFor="c-msg">Message</label>
            <textarea id="c-msg" rows={4} required className="form-control" value={f.message} onChange={set('message')} placeholder="e.g. I want to know the price of iPhone 17" />
            <Button type="submit" variant="whatsapp" size="lg" className="w-100 mt-3"><Icon name="whatsapp" size={18} /> Open WhatsApp</Button>
          </form>
        </div>
        <div className="col-lg-6"><ShopInfo showMap /></div>
      </div>
    </div>
  );
}
