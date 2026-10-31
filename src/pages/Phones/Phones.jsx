import { useMemo, useState } from 'react';
import { Link, useSearchParams } from 'react-router-dom';
import { Offcanvas } from 'react-bootstrap';
import Icon from '../../components/Icon.jsx';
import PhoneCard from '../../components/PhoneCard.jsx';
import ItemCard from '../../components/ItemCard.jsx';
import { Button, cx } from '../../components/ui';
import { BRANDS, phones } from '../../data/phones.js';
import { CATEGORIES, catalog } from '../../data/catalog.js';
import { whatsappLink } from '../../config/siteConfig.js';
import './Phones.css';

const SORTS = [
  ['featured', 'Featured'],
  ['name-asc', 'Name: A to Z'],
  ['name-desc', 'Name: Z to A'],
  ['brand', 'Brand'],
];

/** Everything in the shop: phones + accessories + TVs, with a `category` on each. */
const ALL = [...phones.map((p) => ({ ...p, category: 'phone' })), ...catalog];
const TITLES = { all: 'All products', phone: 'Phones', accessory: 'Accessories', tv: 'TVs' };
const NOUN = { all: ['item', 'items'], phone: ['phone', 'phones'], accessory: ['accessory', 'accessories'], tv: ['TV', 'TVs'] };

/** Filter panel (brand for phones + type checkboxes). Used in the sidebar and in the mobile drawer. */
function Filters({ cat, brands, tags, onToggle, onClear }) {
  const pool = cat === 'all' ? ALL : ALL.filter((p) => p.category === cat);
  const tagList = [...new Set(pool.map((p) => p.tag).filter(Boolean))];
  const count = (key, val) => pool.filter((p) => p[key] === val).length;
  const group = (title, key, items, selected) => (
    <fieldset className="pm-phones__group">
      <legend>{title}</legend>
      {items.map((v) => (
        <label key={v} className="pm-phones__check">
          <input type="checkbox" checked={selected.includes(v)} onChange={() => onToggle(key === 'brand' ? 'brand' : 'tag', v)} />
          <span className="pm-phones__label">{v}</span>
          <span className="pm-phones__count">{count(key, v)}</span>
        </label>
      ))}
    </fieldset>
  );
  return (
    <>
      {cat === 'phone' && group('Brand', 'brand', BRANDS, brands)}
      {tagList.length > 0 && group('Type', 'tag', tagList, tags)}
      {(brands.length > 0 || tags.length > 0) && <button type="button" className="pm-phones__clear" onClick={onClear}>Clear all filters</button>}
    </>
  );
}

/** Shop listing (phones, accessories, TVs), laid out like a big e-commerce store: filters left, sorting on top, grid right. */
export default function Phones() {
  const [params, setParams] = useSearchParams();
  const brands = (params.get('brand') || '').split(',').filter(Boolean);
  const tags = (params.get('type') || '').split(',').filter(Boolean);
  const sort = params.get('sort') || 'featured';
  const q = params.get('q') || params.get('search') || '';
  const rawCat = params.get('cat');
  // A brand link (e.g. ?brand=Apple) always means phones.
  const cat = TITLES[rawCat] && rawCat !== 'all' ? rawCat : brands.length ? 'phone' : 'all';
  const [drawer, setDrawer] = useState(false);

  const update = (next) => {
    const merged = { cat: cat === 'all' ? '' : cat, brand: brands.join(','), type: tags.join(','), sort, q, ...next };
    const out = {};
    Object.entries(merged).forEach(([k, v]) => { if (v && !(k === 'sort' && v === 'featured')) out[k] = v; });
    setParams(out, { replace: true });
  };
  const toggle = (kind, v) => {
    const list = kind === 'brand' ? brands : tags;
    const next = list.includes(v) ? list.filter((x) => x !== v) : [...list, v];
    update({ [kind === 'brand' ? 'brand' : 'type']: next.join(',') });
  };
  const clear = () => update({ brand: '', type: '', q: '' });
  // Switching category resets filters that belong to another category.
  const setCat = (id) => update({ cat: id === 'all' ? '' : id, brand: '', type: '' });

  const list = useMemo(() => {
    const needle = q.trim().toLowerCase();
    let out = ALL.filter((p) =>
      (cat === 'all' || p.category === cat) &&
      (!brands.length || brands.includes(p.brand)) &&
      (!tags.length || tags.includes(p.tag)) &&
      (!needle || `${p.brand} ${p.name} ${p.tag}`.toLowerCase().includes(needle)));
    if (sort === 'featured') out = [...out].sort((a, b) => Number(!!b.featured) - Number(!!a.featured));
    if (sort === 'name-asc') out = [...out].sort((a, b) => a.name.localeCompare(b.name));
    if (sort === 'name-desc') out = [...out].sort((a, b) => b.name.localeCompare(a.name));
    if (sort === 'brand') out = [...out].sort((a, b) => a.brand.localeCompare(b.brand) || a.name.localeCompare(b.name));
    return out;
  }, [cat, brands.join(','), tags.join(','), sort, q]); // eslint-disable-line react-hooks/exhaustive-deps

  const active = [...brands.map((v) => ['brand', v]), ...tags.map((v) => ['tag', v])];
  const filterCount = active.length;
  const [one, many] = NOUN[cat];
  const noun = (n) => (n === 1 ? one : many);
  const title = brands.length === 1 ? `${brands[0]} phones` : TITLES[cat];
  const tabs = [{ id: 'all', label: 'All', icon: 'tag', n: ALL.length }, ...CATEGORIES.map((c) => ({ ...c, n: ALL.filter((p) => p.category === c.id).length }))];

  return (
    <div className="container py-4 py-lg-5">
      <nav aria-label="Breadcrumb" className="pm-phones__crumbs">Home / {cat === 'all' && !brands.length ? <strong>Products</strong> : <><Link to="/phones">Products</Link> / <strong>{title}</strong></>}</nav>
      <div className="pm-phones__head">
        <div>
          <h1 className="page-title mb-1">{title}</h1>
          <p className="text-muted mb-0">Tap <strong>Price</strong> on any product to ask for today’s best price on WhatsApp.</p>
        </div>
      </div>

      {/* Category tabs */}
      <div className="pm-phones__tabs" role="tablist" aria-label="Product category">
        {tabs.map((t) => (
          <button key={t.id} type="button" role="tab" aria-selected={cat === t.id} className={cx('pm-phones__tab', cat === t.id && 'is-active')} onClick={() => setCat(t.id)}>
            <Icon name={t.icon} size={16} /> {t.label} <span className="pm-phones__tabcount">{t.n}</span>
          </button>
        ))}
      </div>


      {/* Quick type chips for the selected category */}
      {cat !== 'all' && (
        <div className="pm-phones__chips" aria-label="Quick filter by type">
          {[...new Set(ALL.filter((p) => p.category === cat).map((p) => p.tag).filter(Boolean))].map((t) => (
            <button key={t} type="button" className={cx('pm-phones__chip', tags.includes(t) && 'is-active')} onClick={() => toggle('tag', t)}>{t}</button>
          ))}
        </div>
      )}

      <div className="row g-4 mt-1">
        <aside className="col-lg-3 d-none d-lg-block" aria-label="Filters">
          <div className="pm-phones__side">
            <h2 className="pm-phones__sidetitle">Filters</h2>
            <Filters cat={cat} brands={brands} tags={tags} onToggle={toggle} onClear={clear} />
          </div>
        </aside>

        <div className="col-lg-9">
          <div className="pm-phones__toolbar">
            <div className="pm-phones__search">
              <Icon name="search" size={18} />
              <input type="search" placeholder="Search products" aria-label="Search products" value={q} onChange={(e) => update({ q: e.target.value })} />
            </div>
            <button type="button" className="pm-phones__filterbtn d-lg-none" onClick={() => setDrawer(true)}>
              <Icon name="filter" size={18} /> Filters{filterCount > 0 && <span className="pm-phones__badge">{filterCount}</span>}
            </button>
            <label className="pm-phones__sort">
              <span className="d-none d-sm-inline">Sort by</span>
              <select className="form-select" value={sort} onChange={(e) => update({ sort: e.target.value })} aria-label="Sort by">
                {SORTS.map(([v, l]) => <option key={v} value={v}>{l}</option>)}
              </select>
            </label>
          </div>

          <div className="pm-phones__meta" aria-live="polite">
            <span><strong>{list.length}</strong> {noun(list.length)}</span>
            <div className="pm-phones__active">
              {active.map(([k, v]) => (
                <button type="button" key={k + v} className="pm-phones__pill" onClick={() => toggle(k, v)} aria-label={`Remove filter ${v}`}>{v} <Icon name="close" size={12} /></button>
              ))}
              {(filterCount > 0 || q) && <button type="button" className="pm-phones__clearlink" onClick={clear}>Clear all</button>}
            </div>
          </div>

          {list.length === 0 ? (
            <div className="pm-phones__empty">
              <Icon name="search" size={40} strokeWidth={1.2} />
              <h2 className="h5 fw-semibold mt-3">No products match your filters</h2>
              <p className="text-muted">Try removing a filter, or ask us if we can get it for you.</p>
              <div className="d-flex flex-wrap justify-content-center gap-2">
                <Button variant="secondary" onClick={clear}>Clear filters</Button>
                <Button href={whatsappLink('Hi! Do you have this in stock or can you arrange it: ___')} target="_blank" rel="noopener noreferrer" variant="whatsapp"><Icon name="whatsapp" size={16} /> Ask on WhatsApp</Button>
              </div>
            </div>
          ) : (
            <div className="row g-3 g-md-4 row-cols-2 row-cols-md-3">
              {list.map((p) => (
                <div className="col" key={p.slug}>{p.category === 'phone' ? <PhoneCard phone={p} /> : <ItemCard item={p} />}</div>
              ))}
            </div>
          )}
        </div>
      </div>

      {/* Mobile / tablet filter drawer */}
      <Offcanvas show={drawer} onHide={() => setDrawer(false)} placement="bottom" className="pm-phones__drawer" aria-label="Filters">
        <Offcanvas.Header closeButton><Offcanvas.Title as="h2" className="h5 fw-semibold">Filters</Offcanvas.Title></Offcanvas.Header>
        <Offcanvas.Body>
          <Filters cat={cat} brands={brands} tags={tags} onToggle={toggle} onClear={clear} />
        </Offcanvas.Body>
        <div className="pm-phones__drawerfoot">
          <Button className="w-100" size="lg" onClick={() => setDrawer(false)}>Show {list.length} {noun(list.length)}</Button>
        </div>
      </Offcanvas>
    </div>
  );
}