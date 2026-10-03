'use client';
import { useEffect, useState, useRef } from 'react';
import { useTheme } from './ThemeProvider';

const links = [
  { href: '#hero', label: 'Home' },
  { href: '#capabilities', label: 'Capabilities' },
  { href: '#ap-automation', label: 'AP Automation' },
  { href: '#rag', label: 'RAG Intelligence' },
  { href: '#erp', label: 'Agentic ERP' },
  { href: '#fine-tuning', label: 'Fine-tuning' },
  { href: '#how-we-build', label: 'How we build' },
  { href: '#results', label: 'Results' },
  { href: '#case-study', label: 'Case study' },
  { href: '#about', label: 'About' },
];

export default function Sidebar() {
  const { theme, toggle } = useTheme();
  const [active, setActive] = useState('#hero');
  const [mobileOpen, setMobileOpen] = useState(false);
  const trackRef = useRef<HTMLDivElement>(null);
  const fillRef = useRef<HTMLDivElement>(null);
  const menuRef = useRef<HTMLDivElement>(null);
  const navRef = useRef<HTMLElement>(null);
  const rawProgress = useRef(0);
  const smoothProgress = useRef(0);
  const rafId = useRef<number>(0);

  useEffect(() => {
    const onScroll = () => {
      const doc = document.documentElement;
      const max = doc.scrollHeight - doc.clientHeight;
      rawProgress.current = max > 0 ? window.scrollY / max : 0;
    };
    const tick = () => {
      smoothProgress.current += (rawProgress.current - smoothProgress.current) * 0.08;
      if (fillRef.current) {
        fillRef.current.style.height = `${smoothProgress.current * 100}%`;
      }
      rafId.current = requestAnimationFrame(tick);
    };
    window.addEventListener('scroll', onScroll, { passive: true });
    onScroll();
    rafId.current = requestAnimationFrame(tick);
    return () => {
      window.removeEventListener('scroll', onScroll);
      cancelAnimationFrame(rafId.current);
    };
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      const ids = links.map(l => l.href.slice(1));
      let current = '#hero';
      for (const id of ids) {
        const el = document.getElementById(id);
        if (!el) continue;
        if (el.getBoundingClientRect().top <= window.innerHeight * 0.45) current = `#${id}`;
      }
      setActive(current);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    if (!mobileOpen) return;
    const handler = (e: MouseEvent) => {
      if (menuRef.current && !menuRef.current.contains(e.target as Node)) setMobileOpen(false);
    };
    document.addEventListener('mousedown', handler);
    return () => document.removeEventListener('mousedown', handler);
  }, [mobileOpen]);

  useEffect(() => {
    document.body.style.overflow = mobileOpen ? 'hidden' : '';
    return () => { document.body.style.overflow = ''; };
  }, [mobileOpen]);

  const NavLinks = ({ onClick }: { onClick?: () => void }) => (
    <>
      {links.map(l => (
        <a
          key={l.href}
          href={l.href}
          className={active === l.href ? 'active' : ''}
          onClick={() => { setActive(l.href); onClick?.(); }}
        >
          {l.label}
        </a>
      ))}
      <a href="/blog" style={{ marginTop: 8, opacity: 0.6, fontSize: 12 }}>
        Blog
      </a>
    </>
  );

  return (
    <>
      <aside className="sidebar">
        <a href="#hero" className="sidebar-logo">Aria<span>.</span></a>

        <div ref={trackRef} style={{
          position: 'absolute',
          left: 14,
          top: 80,
          width: 1,
          bottom: 64,
          background: 'var(--border)',
          pointerEvents: 'none',
          zIndex: 0,
        }}>
          <div ref={fillRef} style={{
            position: 'absolute',
            top: 0,
            left: 0,
            width: '100%',
            height: '0%',
            background: theme === 'light' ? '#1a1a18' : '#f0ede8',
            pointerEvents: 'none',
          }} />
        </div>

        <nav className="sidebar-nav" ref={navRef} style={{ flex: 1, position: 'relative', zIndex: 1 }}>
          <NavLinks />
        </nav>

        <div className="sidebar-cta" style={{ position: 'relative', zIndex: 1 }}>
          <a href="#contact" className="btn-primary">Get in touch</a>
          <button className="theme-toggle" onClick={toggle}>
            {theme === 'light' ? 'D — dark' : 'L — light'}
          </button>
        </div>
      </aside>

      <header className="mobile-header">
        <a href="#hero" className="sidebar-logo" style={{ marginBottom: 0 }}>Aria<span>.</span></a>
        <div style={{ display: 'flex', gap: 8, alignItems: 'center' }}>
          <button className="theme-toggle" onClick={toggle} style={{ width: 'auto', padding: '6px 12px' }}>
            {theme === 'light' ? 'D' : 'L'}
          </button>
          <button className="hamburger" onClick={() => setMobileOpen(o => !o)} aria-label="Toggle menu">
            <span className={mobileOpen ? 'open' : ''} />
            <span className={mobileOpen ? 'open' : ''} />
            <span className={mobileOpen ? 'open' : ''} />
          </button>
        </div>
      </header>

      {mobileOpen && (
        <div className="mobile-overlay" onClick={() => setMobileOpen(false)}>
          <div ref={menuRef} className="mobile-menu" onClick={e => e.stopPropagation()}>
            <nav className="mobile-nav">
              <NavLinks onClick={() => setMobileOpen(false)} />
            </nav>
            <div style={{ padding: '24px 28px', borderTop: '1px solid var(--border)' }}>
              <a href="#contact" className="btn-primary" onClick={() => setMobileOpen(false)}>Get in touch</a>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
