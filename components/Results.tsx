'use client';
import { useEffect, useRef, useState } from 'react';
import FadeIn from './FadeIn';

function CountUp({ target, suffix = '' }: { target: number; suffix?: string }) {
  const [value, setValue] = useState(0);
  const ref = useRef<HTMLDivElement>(null);
  const started = useRef(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const obs = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting && !started.current) {
        started.current = true;
        const duration = 1400;
        const start = performance.now();
        const animate = (now: number) => {
          const progress = Math.min((now - start) / duration, 1);
          const eased = 1 - Math.pow(1 - progress, 3);
          setValue(Math.round(eased * target));
          if (progress < 1) requestAnimationFrame(animate);
        };
        requestAnimationFrame(animate);
      }
    }, { threshold: 0.3 });
    obs.observe(el);
    return () => obs.disconnect();
  }, [target]);

  return <div ref={ref} className="metric-value">{value}{suffix}</div>;
}

export default function Results() {
  const metrics = [
    { value: 99, suffix: '%', label: 'Automation rate', sub: 'AP Automation POC' },
    { value: 99, suffix: '%', label: 'Accuracy', sub: 'GL code correctness' },
    { value: 0, suffix: '%', label: 'False positives', sub: 'by architecture' },
    { value: 91, suffix: '/10', label: 'RAGAS score', sub: '9.1 avg ÷ 10' },
    { value: 200, suffix: '+', label: 'Active users', sub: 'across 2 tenants' },
    { value: 90, suffix: '+', label: 'ERP tools', sub: 'in production' },
    { value: 1213, suffix: '', label: 'Langfuse-scored confirmations', sub: 'gate.correct = 1, every one' },
    { value: 103, suffix: '', label: 'Audited ERP sessions', sub: 'trajectory eval' },
  ];

  return (
    <section id="results" className="section">
      <span className="section-number">08</span>

      <FadeIn style={{ maxWidth: 480, marginBottom: 56 }}>
        <p className="section-label">Results</p>
        <h2 style={{ marginBottom: 16 }}>
          Numbers from<br />production systems.
        </h2>
        <p>
          Not projections. Not benchmarks on toy datasets.
          These figures come from systems running in production,
          evaluated against golden datasets, traced in Langfuse.
        </p>
      </FadeIn>

      <FadeIn delay={100}>
        <div className="metrics-grid">
          {metrics.map(m => (
            <div key={m.label} className="metric-card">
              <CountUp target={m.value} suffix={m.suffix} />
              <div className="metric-label">{m.label}</div>
              <div className="mono" style={{ fontSize: 10, color: 'var(--dim)', marginTop: 2 }}>{m.sub}</div>
            </div>
          ))}
        </div>

        {/* Source footnote */}
        <p style={{ fontSize: 11, color: 'var(--dim)', fontFamily: 'var(--font-mono)', marginTop: 16 }}>
          Source: Langfuse export · langfuse_scores_export.csv · 1,213 rows · all gate.correct = 1
        </p>
      </FadeIn>
    </section>
  );
}
