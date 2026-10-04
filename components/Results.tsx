import FadeIn from './FadeIn';

const metrics = [
  { value: 99, suffix: '%', label: 'Automation rate', sub: 'AP Automation POC', decimals: 0 },
  { value: 99, suffix: '%', label: 'Accuracy', sub: 'GL code correctness', decimals: 0 },
  { value: 0, suffix: '%', label: 'False positives', sub: 'by architecture', decimals: 0 },
  { value: 9.1, suffix: '/10', label: 'RAGAS score', sub: '9.1/10 average', decimals: 1 },
  { value: 200, suffix: '+', label: 'Active users', sub: 'across 2 tenants', decimals: 0 },
  { value: 90, suffix: '+', label: 'ERP tools', sub: 'in production', decimals: 0 },
  { value: 1213, suffix: '', label: 'Langfuse-scored confirmations', sub: 'gate.correct = 1, every one', decimals: 0 },
  { value: 103, suffix: '', label: 'Audited ERP sessions', sub: 'trajectory eval', decimals: 0 },
];

function formatMetric(value: number, decimals: number) {
  return decimals > 0 ? value.toFixed(decimals) : String(Math.round(value));
}

function MetricValue({ target, suffix = '', decimals = 0 }: { target: number; suffix?: string; decimals?: number }) {
  return (
    <div className="metric-value">
      <span>{formatMetric(target, decimals)}</span>{suffix}
    </div>
  );
}

const noscriptFallback = `<style>.metric-live{display:none!important}noscript{display:block!important;grid-column:1/-1}</style><div class="metrics-grid">${metrics
  .map(m => `<div class="metric-card"><div class="metric-value">${m.value}${m.suffix}</div><div class="metric-label">${m.label}</div><div class="mono" style="font-size:10px;color:var(--dim);margin-top:2px">${m.sub}</div></div>`)
  .join('')}</div>`;

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
            <div key={m.label} className="metric-card metric-live">
              <MetricValue target={m.value} suffix={m.suffix} decimals={m.decimals} />
              <div className="metric-label">{m.label}</div>
              <div className="mono" style={{ fontSize: 10, color: 'var(--dim)', marginTop: 2 }}>{m.sub}</div>
            </div>
          ))}
          <noscript dangerouslySetInnerHTML={{ __html: noscriptFallback }} />
        </div>

        <p style={{ fontSize: 11, color: 'var(--dim)', fontFamily: 'var(--font-mono)', marginTop: 16 }}>
          Source: Langfuse export · langfuse_scores_export.csv · 1,213 rows · all gate.correct = 1
        </p>
      </FadeIn>
    </section>
  );
}
