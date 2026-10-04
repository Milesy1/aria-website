import FadeIn from './FadeIn';

const metrics = [
  { display: '99%', label: 'Automation rate', sub: 'AP Automation POC' },
  { display: '99%', label: 'Accuracy', sub: 'GL code correctness' },
  { display: '0%', label: 'False positives', sub: 'by architecture' },
  { display: '9.1/10', label: 'RAGAS score', sub: '9.1/10 average' },
  { display: '200+', label: 'Active users', sub: 'across 2 tenants' },
  { display: '90+', label: 'ERP tools', sub: 'in production' },
  { display: '1,213', label: 'Langfuse-scored confirmations', sub: 'gate.correct = 1, every one' },
  { display: '103', label: 'Audited ERP sessions', sub: 'trajectory eval' },
];

export default function Results() {
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
              <div className="metric-value">{m.display}</div>
              <div className="metric-label">{m.label}</div>
              <div className="mono" style={{ fontSize: 10, color: 'var(--dim)', marginTop: 2 }}>{m.sub}</div>
            </div>
          ))}
        </div>

        <p style={{ fontSize: 11, color: 'var(--dim)', fontFamily: 'var(--font-mono)', marginTop: 16 }}>
          Source: Langfuse export · langfuse_scores_export.csv · 1,213 rows · all gate.correct = 1
        </p>
      </FadeIn>
    </section>
  );
}
