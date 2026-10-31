import { useMemo, useState } from 'react';
import Icon from '../../components/Icon.jsx';
import { Button } from '../../components/ui/index.js';
import siteConfig, { whatsappLink } from '../../config/siteConfig.js';
import './Emi.css';

const inr = new Intl.NumberFormat('en-IN', { style: 'currency', currency: 'INR', maximumFractionDigits: 0 });

/** EMI page: how it works, documents, and a simple estimate calculator. Texts: siteConfig.js → emi. */
export default function Emi() {
  const emi = siteConfig.emi;
  const [price, setPrice] = useState(40000);
  const [down, setDown] = useState(5000);
  const [months, setMonths] = useState(6);
  const [rate, setRate] = useState(0);

  const r = useMemo(() => {
    const principal = Math.max(0, Number(price) - Number(down));
    const n = Number(months);
    const i = Number(rate) / 12 / 100; // yearly % → monthly
    const monthly = principal <= 0 ? 0 : i === 0 ? principal / n : (principal * i * (1 + i) ** n) / ((1 + i) ** n - 1);
    return { principal, monthly, total: monthly * n + Number(down) };
  }, [price, down, months, rate]);

  if (!emi?.enabled) {
    return <div className="container py-5 text-center"><h1 className="page-title">EMI</h1><p className="text-muted">Please ask in the shop.</p></div>;
  }
  const msg = `Hi! I want an EMI on a phone priced about ${inr.format(price)}. Down payment ${inr.format(down)}, ${months} months. Please tell me the available plans.`;

  return (
    <div className="container py-4 py-lg-5">
      <h1 className="page-title">{emi.headline}</h1>
      <p className="text-muted col-lg-8">{emi.intro}</p>

      <div className="row g-4 mt-1">
        <div className="col-lg-7">
          <section className="pm-emi__calc" aria-labelledby="emi-calc">
            <h2 id="emi-calc" className="h5 fw-semibold">EMI estimate</h2>
            <div className="row g-3 mt-1">
              <div className="col-sm-6"><label className="form-label small fw-medium" htmlFor="e-price">Phone price (₹)</label><input id="e-price" type="number" min="0" step="500" className="form-control" value={price} onChange={(e) => setPrice(e.target.value)} /></div>
              <div className="col-sm-6"><label className="form-label small fw-medium" htmlFor="e-down">Down payment (₹)</label><input id="e-down" type="number" min="0" step="500" className="form-control" value={down} onChange={(e) => setDown(e.target.value)} /></div>
              <div className="col-sm-6"><label className="form-label small fw-medium" htmlFor="e-months">Months</label>
                <select id="e-months" className="form-select" value={months} onChange={(e) => setMonths(e.target.value)}>{[3, 6, 9, 12, 18, 24].map((m) => <option key={m} value={m}>{m} months</option>)}</select></div>
              <div className="col-sm-6"><label className="form-label small fw-medium" htmlFor="e-rate">Interest (% per year)</label><input id="e-rate" type="number" min="0" step="0.5" className="form-control" value={rate} onChange={(e) => setRate(e.target.value)} /></div>
            </div>
            <div className="pm-emi__result" aria-live="polite">
              <div><span>Monthly instalment</span><strong>{inr.format(Math.round(r.monthly))}</strong></div>
              <div><span>Amount financed</span><strong>{inr.format(Math.round(r.principal))}</strong></div>
              <div><span>Total you pay</span><strong>{inr.format(Math.round(r.total))}</strong></div>
            </div>
            <p className="small text-muted mt-3 mb-0">This is only an estimate. The real interest, fees and approval depend on the finance partner. The shop will confirm the final plan.</p>
            <Button href={whatsappLink(msg)} target="_blank" rel="noopener noreferrer" variant="whatsapp" size="lg" className="w-100 mt-3"><Icon name="whatsapp" size={18} /> Ask the shop about this EMI</Button>
          </section>
        </div>

        <div className="col-lg-5 d-grid gap-3 align-content-start">
          <section className="pm-emi__box">
            <h2 className="h6 fw-semibold">How it works</h2>
            <ol className="pm-emi__list">{emi.points.map((t) => <li key={t}>{t}</li>)}</ol>
          </section>
          {emi.documents?.length > 0 && (
            <section className="pm-emi__box">
              <h2 className="h6 fw-semibold">Documents usually needed</h2>
              <ul className="pm-emi__list">{emi.documents.map((t) => <li key={t}>{t}</li>)}</ul>
              <p className="small text-muted mb-0">Exact documents can vary. Please confirm in the shop.</p>
            </section>
          )}
          {emi.partners?.length > 0 && (
            <section className="pm-emi__box">
              <h2 className="h6 fw-semibold">Finance partners</h2>
              <p className="mb-0">{emi.partners.join(', ')}</p>
            </section>
          )}
        </div>
      </div>
    </div>
  );
}