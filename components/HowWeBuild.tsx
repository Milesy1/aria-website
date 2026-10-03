import FadeIn from './FadeIn';

export default function HowWeBuild() {
  const principles = [
    { num: '01', title: 'Governed by architecture', body: 'Approval queues, idempotency, and audit logging enforced at the infrastructure layer. Governance that holds under adversarial prompting.' },
    { num: '02', title: 'Evaluated before it ships', body: 'Every release gates on a golden dataset in CI. RAGAS, custom LLM-as-judge evaluators, trajectory evaluation. If it regresses, it doesn\'t deploy.' },
    { num: '03', title: 'Observable end-to-end', body: 'Three-tier Langfuse tracing at message, tool execution, and downstream API call level. Defects found, diagnosed, and fixed in a single session.' },
    { num: '04', title: 'Self-learning by design', body: 'Write-back loops, corpus growth, and confidence recalibration. Every confirmed outcome improves the next prediction. Systems compound in value over time.' },
    { num: '05', title: 'Context-engineered, not prompt-hacked', body: 'Retrieval, tool schemas, and multi-tenant grounding designed from first principles. The right context at inference — not a longer system prompt.' },
    { num: '06', title: 'Built for production, not POC', body: 'Kubernetes, Postgres, Redis, S3, incremental ingestion, per-tenant isolation. The same engineering standards as the systems it integrates with.' },
  ];

  return (
    <section id="how-we-build" className="section">
      <span className="section-number">07</span>

      <FadeIn style={{ maxWidth: 480, marginBottom: 64 }}>
        <p className="section-label">How we build</p>
        <h2 style={{ marginBottom: 16 }}>
          Six principles.<br />Applied to every system.
        </h2>
        <p>
          The stack changes. The methodology doesn't. Every system Aria builds
          is held to the same standard — regardless of which capability it delivers.
        </p>
      </FadeIn>

      <FadeIn delay={80}>
        <div className="steps">
          {principles.map(p => (
            <div key={p.num} className="step">
              <span className="step-num mono">{p.num}</span>
              <div className="step-content">
                <h3>{p.title}</h3>
                <p>{p.body}</p>
              </div>
            </div>
          ))}
        </div>
      </FadeIn>
    </section>
  );
}
