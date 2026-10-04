import FadeIn from './FadeIn';
import RoiCalculator from './RoiCalculator';

const steps = [
  { num: '01', title: 'Discovery call', body: 'Your problem, your systems, honest go/no-go assessment.' },
  { num: '02', title: 'Data & systems audit', body: 'Scoped review of corpus, APIs, and constraints.' },
  { num: '03', title: 'Pilot', body: 'Fixed scope, 4–8 weeks, evaluated against a golden dataset before any production commitment.' },
  { num: '04', title: 'Production & operation', body: 'Deployed, traced in Langfuse, CI-gated, with ongoing evaluation.' },
];

export default function EngagementProcess() {
  return (
    <section id="engagement" className="section">
      <span className="section-number">12</span>

      <FadeIn style={{ maxWidth: 520, marginBottom: 48 }}>
        <p className="section-label">Engagement</p>
        <h2 style={{ marginBottom: 16 }}>
          How an engagement runs.
        </h2>
        <p>
          Four steps. A pilot is evaluated before any production commitment.
        </p>
      </FadeIn>

      <RoiCalculator />

      <FadeIn delay={80}>
        <div className="steps">
          {steps.map(step => (
            <div key={step.num} className="step">
              <span className="step-num mono">{step.num}</span>
              <div className="step-content">
                <h3>{step.title}</h3>
                <p>{step.body}</p>
              </div>
            </div>
          ))}
        </div>
      </FadeIn>
    </section>
  );
}
