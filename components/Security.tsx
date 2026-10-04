import FadeIn from './FadeIn';

const points = [
  {
    title: 'Inference routing',
    body: 'Requests are routed to OpenAI or Anthropic APIs. Data leaves the client tenancy during inference. Prompts are not used for model training under current enterprise API terms.',
  },
  {
    title: 'Per-tenant isolation',
    body: 'Each client has a dedicated Qdrant collection. Vector indices are never shared across tenants.',
  },
  {
    title: 'Trace data',
    body: 'All LLM calls are traced in Langfuse. Traces are hosted on Langfuse Cloud (EU region where available). Clients can self-host Langfuse for full data residency.',
  },
  {
    title: 'Data retention',
    body: 'No client data is stored beyond what is required for the RAG corpus and trace logs. Retention periods are agreed per engagement.',
  },
  {
    title: 'GDPR',
    body: 'Aria operates under UK GDPR as a sole trader data processor. A Data Processing Agreement is available on request.',
  },
  {
    title: 'Human-in-the-loop as a safety control',
    body: 'No write to a live system is made without a human approval step. Every approved action is logged with a full audit trail.',
  },
];

export default function Security() {
  return (
    <section id="security" className="section">
      <span className="section-number">05</span>

      <FadeIn style={{ maxWidth: 560, marginBottom: 48 }}>
        <p className="section-label">Security & data handling</p>
        <h2 style={{ marginBottom: 16 }}>
          How client data moves.
        </h2>
        <p>
          What leaves the tenancy, what stays isolated, and what is written down.
        </p>
      </FadeIn>

      <FadeIn delay={80}>
        <div className="steps">
          {points.map(point => (
            <div key={point.title} className="step">
              <span className="step-num mono">·</span>
              <div className="step-content">
                <h3>{point.title}</h3>
                <p>{point.body}</p>
              </div>
            </div>
          ))}
        </div>
      </FadeIn>
    </section>
  );
}
