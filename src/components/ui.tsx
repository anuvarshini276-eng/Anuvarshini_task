import type { Action, Product, Tile } from '../types';

/** Large art-led campaign area with optional dual calls to action. */
export function Hero({ eyebrow, title, body, actions, tone = 'sage', compact = false }: { eyebrow?: string; title: string; body?: string; actions: Action[]; tone?: string; compact?: boolean }) {
  return <section className={`hero ${compact ? 'hero--compact' : ''} tone-${tone}`}><div className="art" aria-hidden="true"><i/><i/><i/></div><div className="hero__copy">{eyebrow && <p className="eyebrow">{eyebrow}</p>}<h2>{title}</h2>{body && <p>{body}</p>}<div className="actions">{actions.map(a => <a className="button" href={a.href ?? '#'} key={a.label}>{a.label}</a>)}</div></div></section>;
}

/** Horizontal product collection with data-driven cards. */
export function ProductRail({ title, products, accent = 'dark', tabs }: { title: string; products: Product[]; accent?: 'dark' | 'red'; tabs?: string[] }) {
  return <section className={`section products accent-${accent}`}><div className="section__head"><h3>{title}</h3><a href="#">View all <span aria-hidden="true">→</span></a></div>{tabs && <div className="tabs">{tabs.map((tab, i) => <button className={i === 0 ? 'active' : ''} key={tab}>{tab}</button>)}</div>}<div className="product-grid">{products.map((p, i) => <article className="product" key={p.name}><div className={`product__art tone-${p.tone}`}><span>{String(i + 1).padStart(2, '0')}</span></div>{p.badge && <small>{p.badge}</small>}<h4>{p.name}</h4><p>{p.detail}</p><strong>{p.price}</strong>{p.compareAt && <del>{p.compareAt}</del>}<button aria-label={`Preview ${p.name}`}>Quick look</button></article>)}</div></section>;
}

/** Responsive image-card collection for categories or editorial campaigns. */
export function TileGrid({ title, tiles, columns = 3 }: { title?: string; tiles: Tile[]; columns?: 3 | 4 | 5 }) {
  return <section className="section">{title && <div className="section__head"><h3>{title}</h3><a href="#">Explore all →</a></div>}<div className={`tile-grid cols-${columns}`}>{tiles.map(t => <article className={`tile tone-${t.tone}`} key={t.title}><div><p>{t.eyebrow}</p><h4>{t.title}</h4>{t.action && <a href="#">{t.action}</a>}</div></article>)}</div></section>;
}

/** Icon-like assurances rendered without third-party artwork. */
export function Benefits({ items }: { items: { symbol: string; title: string; detail: string }[] }) {
  return <section className="benefits">{items.map(x => <div key={x.title}><b aria-hidden="true">{x.symbol}</b><span><strong>{x.title}</strong><small>{x.detail}</small></span></div>)}</section>;
}

/** Multi-column email and navigation footer. */
export function Footer({ title, description, groups }: { title: string; description: string; groups: { title: string; links: string[] }[] }) {
  return <footer><div className="footer__intro"><h3>{title}</h3><p>{description}</p><form onSubmit={e => e.preventDefault()}><label htmlFor={`${title}-email`}>Email address</label><div><input id={`${title}-email`} type="email" placeholder="you@example.com"/><button>Join</button></div></form></div>{groups.map(g => <nav aria-label={g.title} key={g.title}><h4>{g.title}</h4>{g.links.map(l => <a href="#" key={l}>{l}</a>)}</nav>)}<p className="legal">Reference study · Original copy and placeholder artwork · Display only</p></footer>;
}
