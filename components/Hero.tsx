'use client';
import FadeIn from './FadeIn';

export default function Hero() {
  return (
    <section id="hero" className="section hero-section" style={{ position: 'relative', overflow: 'hidden' }}>

      <svg aria-hidden="true" style={{ position: 'absolute', inset: 0, width: '100%', height: '100%', pointerEvents: 'none', opacity: 0.35 }}>
        <defs>
          <pattern id="dot-grid" x="0" y="0" width="28" height="28" patternUnits="userSpaceOnUse">
            <circle cx="1" cy="1" r="1" fill="var(--dim)" />
          </pattern>
        </defs>
        <rect width="100%" height="100%" fill="url(#dot-grid)" />
      </svg>

      <span className="section-number">01</span>

      <FadeIn style={{ maxWidth: 720, position: 'relative' }}>
        <p className="section-label" style={{ marginBottom: 32 }}>AI Engineering · Enterprise Finance</p>

        <h1 style={{ marginBottom: 32, lineHeight: 1.1 }}>
          AI systems that work.<br />
          <span style={{ fontSize: 'clamp(24px, 3vw, 48px)', fontWeight: 300, color: 'var(--muted)', fontStyle: 'normal' }}>
            <em style={{ fontStyle: 'italic' }}>AI systems that you can trust:</em>{' '}
            deployed, governed, verified.
          </span>
        </h1>

        <div className="divider" />

        <div style={{ marginBottom: 28 }}>
          {[
            { label: 'AP Automation', stat: '99% automation rate · 0% false positives' },
            { label: 'RAG Intelligence', stat: '9.1/10 RAGAS · 200+ users · sub-3s latency' },
            { label: 'Agentic ERP', stat: '90+ tools · human-in-the-loop · full AP/AR cycle' },
            { label: 'Fine-tuning', stat: 'domain-specific · eval-driven · CI-gated' },
          ].map(item => (
            <div key={item.label} style={{ display: 'flex', alignItems: 'baseline', gap: 12, padding: '7px 0', borderBottom: '1px solid var(--border)' }}>
              <span style={{ fontSize: 13, fontWeight: 500, color: 'var(--text)', minWidth: 140 }}>{item.label}</span>
              <span style={{ fontSize: 11, color: 'var(--dim)', fontFamily: 'var(--font-mono)', letterSpacing: '0.04em' }}>{item.stat}</span>
            </div>
          ))}
        </div>

        <p style={{ fontSize: 15, maxWidth: 560, lineHeight: 1.8, marginBottom: 40, color: 'var(--muted)' }}>
          We build AI systems that write to live ERPs, code non-PO invoices automatically,
          and answer enterprise knowledge queries at 9.1/10 RAGAS accuracy —
          all governed by architecture, all evaluated in CI before they ship.
        </p>

        <div style={{ display: 'flex', gap: 16, alignItems: 'center', flexWrap: 'wrap' }}>
          <a href="#capabilities" className="btn-primary" style={{ fontSize: 13, padding: '10px 20px' }}>
            See what we build
          </a>
          <a href="#results" className="link-muted">
            View results →
          </a>
        </div>
      </FadeIn>

      <FadeIn delay={200} direction="none" className="hero-stats">
        <div>99% automation rate</div>
        <div>9.1 / 10 RAGAS accuracy</div>
        <div>0% false positives</div>
        <div>200+ active users</div>
      </FadeIn>
    </section>
  );
}
