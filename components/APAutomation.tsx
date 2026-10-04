import FadeIn from './FadeIn';
import ConfidenceGate from './ConfidenceGate';
import ExplodedDiagram from './ExplodedDiagram';

export default function APAutomation() {
  const metrics = [
    { label: 'Automation rate', value: '99%', sub: 'optimised corpus' },
    { label: 'Accuracy', value: '99%', sub: 'GL code correctness' },
    { label: 'False positive rate', value: '0%', sub: 'by architecture' },
    { label: 'Recall@10', value: '100%', sub: 'retrieval precision' },
    { label: 'Calibration', value: '100%', sub: 'all confidence bands' },
    { label: 'Corpus growth', value: '1,466→2,292', sub: 'confirmed lines' },
  ];

  return (
    <section id="ap-automation" className="section">
      <span className="section-number">03</span>
      <p className="section-label">Enterprise Workflow Automation</p>

      <div className="two-col">
        <FadeIn>
          <h2 style={{ marginBottom: 24 }}>Self-learning<br />invoice coding</h2>
          <div className="divider" />
          <p style={{ marginBottom: 20 }}>
            AP invoice coding is the flagship example. Most AP automation requires
            professional services to configure and maintain coding rules. Ours learns
            from every confirmed invoice, compounding accuracy over time without
            manual intervention.
          </p>
          <p style={{ marginBottom: 20 }}>
            The system retrieves historically coded lines for the same vendor and cost
            centre, scores confidence, auto-posts high-confidence items, and routes edge
            cases to human review. Every confirmation writes back into the vector store.
          </p>
          <p>
            Governance is proportional: high-confidence routine invoices are fully
            automated, novel or ambiguous items escalate with full audit trail.
            Zero false positives by design.
          </p>
          <div className="cap-tags" style={{ marginTop: 32 }}>
            {['RAG retrieval', 'Confidence gating', 'Write-back loop', 'Fine-tuning', 'Qdrant',
              'OpenAI embeddings', 'FastAPI', 'Langfuse tracing'].map(t => (
              <span key={t} className="tag">{t}</span>
            ))}
          </div>
        </FadeIn>

        <FadeIn delay={120}>
          <div className="metric-stack">
            {metrics.map(m => (
              <div key={m.label} className="metric-row">
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'baseline', marginBottom: 4 }}>
                  <span className="metric-label">{m.label}</span>
                  <span className="mono" style={{ fontSize: 10, color: 'var(--dim)' }}>{m.sub}</span>
                </div>
                <div className="metric-value" style={{ fontSize: 26 }}>{m.value}</div>
              </div>
            ))}
          </div>
        </FadeIn>
      </div>

      <div style={{ marginTop: 64 }}>
        <h3 style={{ fontSize: 22, fontWeight: 400, letterSpacing: '-0.03em', marginBottom: 12 }}>
          The system, exploded
        </h3>
        <p style={{ maxWidth: 560, marginBottom: 20 }}>
          Governance sits off the request path. The diagram pulls each part away along its own axis.
        </p>
        <ExplodedDiagram />
      </div>

      <ConfidenceGate />
    </section>
  );
}
