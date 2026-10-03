import FadeIn from './FadeIn';

export default function FineTuning() {
  const steps = [
    { num: '01', title: 'Dataset design', body: 'Synthetic and real-world examples covering routine, near-edge, and hard-edge cases. Ground truth labelled before training begins.' },
    { num: '02', title: 'Evaluator suite', body: 'Custom LLM-as-judge evaluators for your domain — not generic metrics. Scores extractability, correctness, and refusal behaviour separately.' },
    { num: '03', title: 'Training runs', body: 'Domain-specific fine-tuning on Claude and GPT-family models. Iterative — each run measured against the same golden dataset.' },
    { num: '04', title: 'CI gating', body: 'Every release gates on the golden dataset score. Minimum threshold enforced in GitHub Actions. No regression ships.' },
  ];

  return (
    <section id="fine-tuning" className="section">
      <span className="section-number">06</span>
      <p className="section-label">Model Fine-tuning</p>

      <div className="two-col">
        <FadeIn>
          <h2 style={{ marginBottom: 24 }}>
            Models trained on your domain,<br />
            <span style={{ color: 'var(--muted)', fontWeight: 300 }}>evaluated before they ship.</span>
          </h2>
          <div className="divider" />
          <p style={{ marginBottom: 20 }}>
            General-purpose models underperform on domain-specific tasks — the vocabulary
            is wrong, the edge cases aren't represented, and there's no benchmark to
            measure improvement against. We fix that.
          </p>
          <p style={{ marginBottom: 20 }}>
            Domain-specific training on finance and enterprise workflows: GL coding,
            invoice classification, ERP entity extraction, document understanding.
            Every fine-tuned model is paired with a custom golden dataset and
            LLM-as-judge evaluators from day one.
          </p>
          <p>
            Eval-driven development means the benchmark exists before the first training
            run. Improvements are measurable. Regressions are caught in CI.
          </p>
          <div className="cap-tags" style={{ marginTop: 32 }}>
            {['Domain training', 'Eval-driven', 'LLM-as-judge', 'Golden datasets',
              'CI gating', 'Langfuse', 'RAGAS', 'Custom evaluators'].map(t => (
              <span key={t} className="tag">{t}</span>
            ))}
          </div>
        </FadeIn>

        <FadeIn delay={120}>
          <div className="steps" style={{ paddingTop: 0 }}>
            {steps.map(s => (
              <div key={s.num} className="step">
                <span className="step-num mono">{s.num}</span>
                <div className="step-content">
                  <h3>{s.title}</h3>
                  <p>{s.body}</p>
                </div>
              </div>
            ))}
          </div>
        </FadeIn>
      </div>
    </section>
  );
}
