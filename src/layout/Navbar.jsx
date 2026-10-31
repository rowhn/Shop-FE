import { useEffect, useState } from 'react';
import { Link, NavLink, useLocation } from 'react-router-dom';
import { Dropdown, Offcanvas } from 'react-bootstrap';
import { IconButton, Button, cx } from '../components/ui';
import Icon from '../components/Icon.jsx';
import { BRANDS } from '../data/phones.js';
import { useConfig } from '../context/Config.jsx';
import './Navbar.css';

// ✏️ Add, remove or rename navigation links here.
export const NAV_LINKS = [
  { to: '/phones', label: 'Products' },
  { to: '/emi', label: 'EMI' },
  { to: '/repairs', label: 'Repairs' },
  { to: '/about', label: 'About' },
  { to: '/contact', label: 'Contact' },
];

/** Floating glass navbar: brand · links · "Shop by brand" menu (where the search bar used to be). */
export default function Navbar() {
  const { store } = useConfig();
  const [menu, setMenu] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const { pathname, search } = useLocation();
  // Links with ?cat= share one page, so work out the active one ourselves.
  const isOn = (to, isActive) => {
    if (!to.includes('?')) return isActive;
    const [path, qs] = to.split('?');
    const want = new URLSearchParams(qs).get('cat');
    const cur = new URLSearchParams(search).get('cat');
    const brandOnly = new URLSearchParams(search).get('brand') && !cur;
    return pathname === path && (cur === want || (want === 'phone' && brandOnly));
  };

  useEffect(() => setMenu(false), [pathname]);
  useEffect(() => {
    const on = () => setScrolled(window.scrollY > 8);
    on();
    window.addEventListener('scroll', on, { passive: true });
    return () => window.removeEventListener('scroll', on);
  }, []);

  return (
    <header className={cx('pm-nav', scrolled && 'is-scrolled')}>
      <div className="pm-nav__bar">
        <IconButton icon="menu" label="Open menu" className="pm-nav__burger d-lg-none" onClick={() => setMenu(true)} />

        <Link to="/" className="pm-nav__brand" aria-label={`${store.name} home`}>{store.name}</Link>

        <nav className="pm-nav__links d-none d-lg-flex" aria-label="Main">
          {NAV_LINKS.map((n) => (
            <NavLink key={n.to} to={n.to} className={({ isActive }) => cx('pm-nav__link', isOn(n.to, isActive) && 'is-active')}>{n.label}</NavLink>
          ))}
        </nav>

        {/* Desktop: Shop by brand dropdown */}
        <Dropdown align="end" className="pm-nav__brands d-none d-lg-block">
          <Dropdown.Toggle as="button" type="button" className="pm-nav__brandsbtn">
            <Icon name="tag" size={16} /> Categories <Icon name="chevronDown" size={14} />
          </Dropdown.Toggle>
          <Dropdown.Menu className="pm-nav__menu">
            <Dropdown.Header>Phones</Dropdown.Header>
            {BRANDS.map((b) => (
              <Dropdown.Item key={b} as={Link} to={`/phones?brand=${b}`}>{b}</Dropdown.Item>
            ))}
            <Dropdown.Divider />
            <Dropdown.Item as={Link} to="/phones?cat=accessory">Accessories (cables, earphones…)</Dropdown.Item>
            <Dropdown.Item as={Link} to="/phones?cat=tv">TVs &amp; speakers</Dropdown.Item>
            <Dropdown.Divider />
            <Dropdown.Item as={Link} to="/phones">All products</Dropdown.Item>
          </Dropdown.Menu>
        </Dropdown>
      </div>

      <Offcanvas show={menu} onHide={() => setMenu(false)} placement="start" className="pm-nav__drawer" aria-label="Menu">
        <Offcanvas.Header closeButton>
          <Offcanvas.Title className="pm-nav__brand">{store.name}</Offcanvas.Title>
        </Offcanvas.Header>
        <Offcanvas.Body className="d-flex flex-column">
          <p className="pm-nav__label">Categories</p>
          <div className="pm-nav__chips">
            {BRANDS.map((b) => <Link key={b} to={`/phones?brand=${b}`} className="pm-nav__chip">{b}</Link>)}
            <Link to="/phones?cat=accessory" className="pm-nav__chip">Accessories</Link>
            <Link to="/phones?cat=tv" className="pm-nav__chip">TVs</Link>
          </div>

          <nav className="pm-nav__mobile" aria-label="Mobile">
            {[{ to: '/', label: 'Home' }, ...NAV_LINKS].map((n) => (
              <NavLink key={n.to} to={n.to} end={n.to === '/'} className={({ isActive }) => cx('pm-nav__mlink', isOn(n.to, isActive) && 'is-active')}>{n.label}</NavLink>
            ))}
          </nav>

          <div className="mt-auto d-grid gap-2 pt-4">
            <Button href={store.directionsUrl} target="_blank" rel="noopener noreferrer" variant="outline"><Icon name="navigate" size={16} /> Navigate me</Button>
            <Button href={`tel:${store.phoneDial}`} variant="secondary"><Icon name="phone" size={16} /> Call {store.supportPhone}</Button>
          </div>
        </Offcanvas.Body>
      </Offcanvas>
    </header>
  );
}