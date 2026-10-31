import Icon from '../../components/Icon.jsx';
import { Button, Reveal } from '../../components/ui';
import siteConfig, { whatsappLink } from '../../config/siteConfig.js';
import './EmiBanner.css';

/** Homepage EMI call-out. Text comes from siteConfig.js → emi. Hidden when emi.enabled is false. */
export default function EmiBanner() {
  const emi = siteConfig.emi;
  if (!emi?.enabled) return null;
  return (
    <Reveal className="container pm-emibanner">
      <div className="pm-emibanner__card">
        <div className="row g-4 align-items-center">
          <div className="col-lg-7">
            <p className="pm-emibanner__eyebrow"><Icon name="tag" size={16} /> EMI</p>
            <h2 className="pm-emibanner__title">{emi.headline}</h2>
            <p className="pm-emibanner__text">{emi.intro}</p>
            <div className="d-flex flex-wrap gap-2 mt-4">
              <Button to="/emi" variant="secondary" size="lg">EMI calculator &amp; details</Button>
              <Button href={whatsappLink('Hi! I want to know about EMI options for a phone.')} target="_blank" rel="noopener noreferrer" variant="whatsapp" size="lg"><Icon name="whatsapp" size={18} /> Ask about EMI</Button>
            </div>
          </div>
          <div className="col-lg-5">
            <ol className="pm-emibanner__steps">
              {emi.points.map((t, i) => <li key={t}><span>{i + 1}</span>{t}</li>)}
            </ol>
          </div>
        </div>
      </div>
    </Reveal>
  );
}