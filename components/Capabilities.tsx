import FadeIn from './FadeIn';

export default function Capabilities() {
  const caps = [
    {
      num: '01',
      title: 'AP Automation',
      desc: 'Self-learning non-PO invoice coding. RAG retrieval over historical coded lines, confidence gating, auto-post or human review, write-back loop into vector store. 99% automation rate on 1,000-invoice corpus.',
      tags: ['RAG', 'Confidence gating', 'Write-back loop', 'Qdrant', 'FastAPI'],
      href: '#ap-automation',
    },
    {
      num: '02',
      title: 'RAG Intelligence',
      desc: 'Multi-tenant knowledge assistants serving 200+ active users at sub-3s median latency. Hybrid BM25 + dense retrieval, weighted RRF, RAGAS-scored golden dataset gated in CI.',
      tags: ['Hybrid retrieval', 'Multi-tenant', 'Langfuse', 'RAGAS', 'GitHub Actions'],
      href: '#rag',
    },
    {
      num: '03',
      title: 'Agentic ERP Automation',
      desc: 'Natural language over live ERP under mandatory human-in-the-loop governance. 90+ tools, semantic MDM duplicate detection, full AP/AR cycle. Governance enforced architecturally, not via prompts.',
      tags: ['LangGraph', 'Tool-calling', 'HITL', 'Semantic MDM', 'Kubernetes'],
      href: '#erp',
    },
    {
      num: '04',
      title: 'Model Fine-tuning',
      desc: 'Domain-specific model training and eval-driven fine-tuning for finance and enterprise workflows. Custom judge evaluators, CI-gated release on golden datasets, trajectory evaluation across production sessions.',
      tags: ['Fine-tuning', 'LLM-as-judge', 'Eval-driven', 'CI gating', 'Custom datasets'],
      href: '#fine-tuning',
    },
  ];

  return (
    <section id="capabilities" className="section">
      <span className="section-number">02</span>

      <FadeIn>
        <p className="section-label">Capabilities</p>
        <h2 style={{ marginBottom: 16, maxWidth: 480 }}>
          Four capabilities.<br />One engineering standard.
        </h2>
        <p style={{ marginBottom: 56, maxWidth: 480 }}>
          Every system Aria builds is evaluated against a golden dataset,
          traced end-to-end in Langfuse, and gated in CI before release.
        </p>
      </FadeIn>

      <FadeIn delay={100}>
        <div className="cap-grid">
          {caps.map(c => (
            <a key={c.num} href={c.href} className="cap-card" style={{ textDecoration: 'none' }}>
              <span className="cap-number mono">{c.num}</span>
              <div className="cap-title">{c.title}</div>
              <div className="cap-desc">{c.desc}</div>
              <div className="cap-tags">
                {c.tags.map(t => <span key={t} className="tag">{t}</span>)}
              </div>
            </a>
          ))}
        </div>
      </FadeIn>
    </section>
  );
}
