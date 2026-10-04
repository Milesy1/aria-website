import FadeIn from './FadeIn';

const items = [
  {
    q: 'Will this work with our ERP or systems?',
    a: 'The agentic layer connects via REST APIs and tool schemas — it is not tied to a specific ERP vendor. Any system with an API can be integrated.',
  },
  {
    q: 'What happens when the model is wrong?',
    a: 'Confidence gating routes uncertain decisions to human review before any write is made. The system is designed so that 0% of auto-posted items are incorrect — errors surface in the review queue, never in the ledger.',
  },
  {
    q: 'Do we need clean data first?',
    a: 'No — but corpus quality affects the automation rate you reach and how quickly. A data audit is part of every engagement. We build the retrieval layer around what exists, then improve it over time.',
  },
  {
    q: 'Who owns the models, evaluations, and datasets built during an engagement?',
    a: 'The client owns everything — models, golden datasets, evals, and all artefacts produced during the engagement.',
  },
  {
    q: 'How long does a pilot take?',
    a: '4–8 weeks, fixed scope. The pilot is evaluated against a golden dataset before any production commitment is made.',
  },
  {
    q: 'What does the first conversation look like?',
    a: 'A 30-minute call. You describe your problem and systems; we give an honest assessment of whether AI can help and what a pilot would involve. No sales process.',
  },
];

export default function FAQ() {
  return (
    <section id="faq" className="section">
      <span className="section-number">10</span>

      <FadeIn style={{ maxWidth: 520, marginBottom: 48 }}>
        <p className="section-label">FAQ</p>
        <h2 style={{ marginBottom: 16 }}>
          Questions worth answering first.
        </h2>
      </FadeIn>

      <FadeIn delay={80}>
        <div className="steps">
          {items.map(item => (
            <div key={item.q} className="step">
              <span className="step-num mono">Q</span>
              <div className="step-content">
                <h3>{item.q}</h3>
                <p>{item.a}</p>
              </div>
            </div>
          ))}
        </div>
      </FadeIn>
    </section>
  );
}
