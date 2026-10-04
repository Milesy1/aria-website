import trace from '@/data/sample-trace.json';

export default function TraceViewer() {
  return (
    <section aria-labelledby="trace-heading">
      <p className="section-label" id="trace-heading">Sample trace</p>
      <h2 style={{ fontSize: 'clamp(22px, 3vw, 32px)', marginBottom: 12 }}>
        One invoice line, step by step.
      </h2>
      <p style={{ marginBottom: 8 }}>{trace.label}</p>
      {trace.placeholder && (
        <p className="placeholder-note">
          Placeholder. Vendor, amount, GL codes, and the threshold in this walkthrough are synthetic. Replace data/sample-trace.json with a redacted trace before treating any code as real.
        </p>
      )}

      <div className="trace-list">
        {trace.steps.map((step, index) => (
          <details key={step.id} name="sample-trace" open={index === 0} className="trace-step">
            <summary>
              <span className="mono">{String(index + 1).padStart(2, '0')}</span>
              <span>{step.title}</span>
            </summary>
            <div className="trace-body">
              <dl className="kv">
                {step.fields.map(field => (
                  <div key={field.label}>
                    <dt>{field.label}</dt>
                    <dd>{field.value}</dd>
                  </div>
                ))}
              </dl>
              <p className="notice">
                <span className="mono">What to notice. </span>
                {step.notice}
              </p>
            </div>
          </details>
        ))}
      </div>
    </section>
  );
}
