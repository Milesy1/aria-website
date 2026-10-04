import FadeIn from './FadeIn';

export default function AgenticERP() {
  const steps = [
    {
      num: '—',
      title: 'Human-in-the-loop by architecture',
      body: 'Every write action routes through a mandatory approval queue with <2 minute average latency. Reads are instant. The distinction is enforced at the middleware layer, not in the prompt.',
    },
    {
      num: '—',
      title: 'Semantic duplicate detection',
      body: 'Before any contact or account creation, a semantic MDM layer screens against existing records. Fuzzy name matching, address normalisation, cross-field similarity — catches duplicates that exact-match misses.',
    },
    {
      num: '—',
      title: 'Three-tier distributed tracing',
      body: 'Every tool invocation is traced in Langfuse at message, tool execution, and downstream API call level. 50–100 daily tool invocations, fully observable. Defects found, fixed, and verified in a single session.',
    },
    {
      num: '—',
      title: 'Trajectory evaluation in CI',
      body: 'Three judges — authorisation, action correctness, reversibility — over 103 audited production sessions. 0 gate bypasses, 0.0% hallucination, 100% judge-human agreement.',
    },
  ];

  return (
    <section id="erp" className="section">
      <span className="section-number">06</span>
      <p className="section-label">Agentic Systems</p>

      <FadeIn style={{ maxWidth: 600, marginBottom: 64 }}>
        <h2 style={{ marginBottom: 24 }}>
          Your ERP, in plain English.<br />
          <span style={{ color: 'var(--muted)', fontWeight: 300 }}>Under governed, auditable control.</span>
        </h2>
        <div className="divider" />
        <p style={{ marginBottom: 20 }}>
          Live ERP is the primary example — one class of system this layer operates.
          The ARIA middleware enforces approval queues, idempotency, and audit logging
          at the infrastructure layer — so governance is architectural, not prompt-based.
          No amount of prompt injection bypasses a mandatory approval queue.
        </p>
        <p>
          90+ tools across the full AP/AR cycle. Invoices, receipts, payments, journals,
          credit notes — all accessible via Slack in natural language. New client
          onboarding reduced from multi-day to same-day.
        </p>
      </FadeIn>

      <FadeIn delay={100}>
        <div className="steps">
          {steps.map((s, i) => (
            <div key={s.title} className="step" style={{ animationDelay: `${i * 60}ms` }}>
              <span className="step-num mono">{s.num}</span>
              <div className="step-content">
                <h3>{s.title}</h3>
                <p>{s.body}</p>
              </div>
            </div>
          ))}
        </div>
        <div className="cap-tags" style={{ marginTop: 40 }}>
          {['LangGraph', 'FastAPI', 'Slack Bolt', 'Postgres', 'Redis',
            'Fine-tuning', 'Kubernetes', 'Semantic MDM', 'Langfuse', 'HITL'].map(t => (
            <span key={t} className="tag">{t}</span>
          ))}
        </div>
      </FadeIn>
    </section>
  );
}
