import Icon from '../../components/Icon.jsx';
import { Button, Reveal } from '../../components/ui';
import { whatsappLink } from '../../config/siteConfig.js';
import { useConfig } from '../../context/Config.jsx';
import './Repairs.css';

// ✏️ Repair services list. Add / remove rows: [icon, title, description]
const SERVICES = [
  ['screen', 'Screen replacement', 'Cracked or unresponsive display.'],
  ['battery', 'Battery replacement', 'Phone draining fast or shutting down.'],
  ['plug', 'Charging port', 'Not charging or loose cable connection.'],
  ['droplet', 'Water damage check', 'Inspection after a drop in water.'],
  ['speaker', 'Speaker & microphone', 'Low sound, no sound or call issues.'],
  ['camera', 'Camera repair', 'Blurry, black or cracked camera.'],
  ['code', 'Software issues', 'Hanging, slow, update or setup problems.'],
  ['help', 'Not sure what’s wrong?', 'Bring it in for a quick check.'],
];

export default function Repairs() {
  const { store } = useConfig();
  return (
    <div className="container py-4 py-lg-5">
      <h1 className="page-title">Mobile repairs</h1>
      <p className="text-muted col-lg-7">Tell us the problem, we inspect the phone and give you a clear quote before any work starts. Repair time and price depend on the model and the part, so message us for an estimate.</p>
      <div className="d-flex flex-wrap gap-2 my-4">
        <Button href={whatsappLink('Hi! I need a repair quote. My phone model is: ___ and the problem is: ___')} target="_blank" rel="noopener noreferrer" variant="whatsapp" size="lg"><Icon name="whatsapp" size={18} /> Get a quote on WhatsApp</Button>
        <Button href={store.directionsUrl} target="_blank" rel="noopener noreferrer" variant="outline" size="lg"><Icon name="navigate" size={18} /> Navigate me</Button>
      </div>
      <div className="row g-3 g-md-4">
        {SERVICES.map(([ic, t, d], i) => (
          <div key={t} className="col-6 col-lg-3">
            <Reveal delay={i * 0.04} y={14} className="pm-repairs__card">
              <Icon name={ic} size={28} strokeWidth={1.4} />
              <h2 className="h6 fw-semibold mt-3 mb-1">{t}</h2>
              <p className="small text-muted mb-0">{d}</p>
            </Reveal>
          </div>
        ))}
      </div>
      <h2 className="h4 fw-semibold mt-5 mb-3">How it works</h2>
      <ol className="pm-repairs__steps">
        <li><strong>Tell us</strong> the model and the problem on WhatsApp or in the shop.</li>
        <li><strong>We inspect</strong> and share a clear quote.</li>
        <li><strong>You approve</strong>, we repair, and you collect your phone.</li>
      </ol>
    </div>
  );
}
