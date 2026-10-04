import FadeIn from './FadeIn';

export default function CaseStudy() {
  return (
    <section id="case-study" className="section">
      <span className="section-number">09</span>
      <p className="section-label">Case study</p>

      <div className="two-col" style={{ alignItems: 'start' }}>
        <FadeIn>
          <h2 style={{ marginBottom: 24 }}>
            Case study: Finance — from 48-hour batch to same-day automation
          </h2>
          <div className="divider" />
          <p style={{ marginBottom: 20 }}>
            A mid-market professional services firm was processing non-PO invoices
            manually — two finance analysts spending two days per week on GL coding,
            chasing approvals, and reconciling mispostings.
          </p>
          <p style={{ marginBottom: 20 }}>
            We deployed enterprise workflow automation against their existing invoice corpus.
            The RAG retrieval layer learned from 1,466 historically coded lines.
            Within the first week, 99% of routine invoices were coded and posted
            automatically — zero false positives, full audit trail.
          </p>
          <p>
            The write-back loop grew the corpus to 2,292 confirmed lines by week four.
            The two analysts now review only genuinely novel or ambiguous invoices —
            roughly 1% of volume. The rest runs unattended.
          </p>
        </FadeIn>

        <FadeIn delay={120}>
          <p style={{ marginBottom: 16, fontSize: 14 }}>
            The methodology below was proven in finance operations. The same approach applies to any domain with structured historical decisions.
          </p>
          <div style={{ display: 'flex', flexDirection: 'column', gap: 1, background: 'var(--border)', border: '1px solid var(--border)', borderRadius: 8, overflow: 'hidden' }}>
            {[
              { label: 'Manual processing time', before: '2 days / week', after: '< 2 hours / week', delta: '−94%' },
              { label: 'Automation rate', before: '0%', after: '99%', delta: '+99pp' },
              { label: 'False positive rate', before: 'Unknown', after: '0%', delta: 'Eliminated' },
              { label: 'Corpus size', before: '1,466 lines', after: '2,292 lines', delta: '+56%' },
              { label: 'Onboarding time', before: 'Multi-day setup', after: 'Same-day', delta: '−95%' },
            ].map(r => (
              <div key={r.label} style={{ background: 'var(--bg)', padding: '18px 24px' }}>
                <div style={{ fontSize: 11, color: 'var(--dim)', fontFamily: 'var(--font-mono)', letterSpacing: '0.06em', marginBottom: 8 }}>
                  {r.label}
                </div>
                <div style={{ display: 'flex', alignItems: 'baseline', gap: 12 }}>
                  <span style={{ fontSize: 13, color: 'var(--dim)', textDecoration: 'line-through' }}>{r.before}</span>
                  <span style={{ fontSize: 15, fontWeight: 500, color: 'var(--text)' }}>{r.after}</span>
                  <span style={{ fontSize: 11, color: 'var(--muted)', fontFamily: 'var(--font-mono)', marginLeft: 'auto' }}>{r.delta}</span>
                </div>
              </div>
            ))}
          </div>

          <p style={{ fontSize: 11, color: 'var(--dim)', marginTop: 16, fontFamily: 'var(--font-mono)' }}>
            * Client anonymised. Figures from production system, Langfuse-traced.
          </p>
        </FadeIn>
      </div>
    </section>
  );
}
