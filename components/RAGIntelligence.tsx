'use client';
import FadeIn from './FadeIn';

export default function RAGIntelligence() {
  const metrics = [
    { label: 'Active users', value: '200+', sub: 'across 2 tenants' },
    { label: 'Retrieval accuracy', value: '9.1/10', sub: 'RAGAS-scored' },
    { label: 'Extractability', value: '9.4/10', sub: 'clear factual queries' },
    { label: 'Median latency', value: '<3s', sub: 'p50 response time' },
    { label: 'Vector chunks', value: '50K+', sub: 'on Qdrant' },
    { label: 'First-contact resolution', value: '~60%', sub: 'consultant queries' },
  ];

  return (
    <section id="rag" className="section">
      <span className="section-number">04</span>
      <p className="section-label">RAG Intelligence</p>

      <div className="two-col two-col-reverse">
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

          <a href="https://github.com/Milesy1/miles-rag" target="_blank" rel="noopener noreferrer" className="github-link">
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" style={{ color: 'var(--muted)', flexShrink: 0 }}>
              <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"/>
            </svg>
            <div>
              <div style={{ fontSize: 12, fontFamily: 'var(--font-mono)', color: 'var(--text)', letterSpacing: '0.02em' }}>miles-rag</div>
              <div style={{ fontSize: 11, color: 'var(--muted)', marginTop: 2 }}>Production RAG pipeline — public reference implementation</div>
            </div>
            <span style={{ marginLeft: 'auto', fontSize: 12, color: 'var(--dim)' }}>↗</span>
          </a>
        </FadeIn>

        <FadeIn>
          <h2 style={{ marginBottom: 24 }}>Knowledge assistants<br />that don't hallucinate</h2>
          <div className="divider" />
          <p style={{ marginBottom: 20 }}>
            Generic RAG hallucinates on edge cases and retrieves the wrong chunk under
            load. Our assistants use hybrid BM25 + dense retrieval with weighted RRF —
            keyword precision where it matters, semantic understanding everywhere else.
          </p>
          <p style={{ marginBottom: 20 }}>
            Every release is gated in GitHub Actions against a 500+ question golden
            dataset. 9.0/10 minimum on RAGAS — any regression blocks the deploy.
            Custom LLM-as-judge evaluators score refusal behaviour and
            machine-consumable output separately.
          </p>
          <p>
            Per-tenant Qdrant collection isolation, incremental S3 ingestion,
            three-tier Langfuse tracing. 15–20 senior consultant hours freed per week.
          </p>
          <div className="cap-tags" style={{ marginTop: 32 }}>
            {['Hybrid retrieval', 'BM25 + dense', 'Weighted RRF', 'Qdrant',
              'RAGAS', 'LLM-as-judge', 'GitHub Actions', 'Langfuse', 'Multi-tenant'].map(t => (
              <span key={t} className="tag">{t}</span>
            ))}
          </div>
        </FadeIn>
      </div>
    </section>
  );
}
