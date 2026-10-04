import FadeIn from './FadeIn';

export default function About() {
  const experience = [
    { year: '2022–', role: 'AI Engineer (Contract)', org: 'Form Consulting Services' },
    { year: '2015–22', role: 'Senior Business Analyst', org: 'E.ON Energy Trading, Düsseldorf' },
    { year: '2010–15', role: 'Lead BA, Enterprise Risk Platform', org: 'E.ON Energy Trading' },
    { year: '2003–09', role: 'Sourcing Analyst', org: 'E.ON Energy Trading & HBOS' },
  ];

  const stack = ['Python', 'FastAPI', 'LangChain', 'LangGraph', 'Langfuse', 'Qdrant',
    'RAGAS', 'Next.js', 'TypeScript', 'Postgres', 'Redis', 'Kubernetes', 'S3',
    'GitHub Actions', 'Claude', 'GPT-4'];

  return (
    <section id="about" className="section">
      <span className="section-number">11</span>
      <p className="section-label">About</p>

      <div className="two-col">
        <FadeIn>
          <h2 style={{ marginBottom: 24 }}>
            Built for production.<br />
            <span style={{ color: 'var(--muted)', fontWeight: 300 }}>Not a notebook.</span>
          </h2>
          <div className="divider" />
          <p style={{ marginBottom: 20 }}>
            Aria is Miles Waite — independent AI engineer.
          </p>
          <p style={{ marginBottom: 20 }}>
            Twenty years across European energy trading, commodities, enterprise risk,
            and real-time data infrastructure — before moving into AI engineering.
          </p>
          <p style={{ marginBottom: 20 }}>
            The systems on this site aren't prototypes. They serve 200+ active users,
            process hundreds of queries a day, and write to live ERPs under governance
            frameworks audited across 103 production sessions.
          </p>
          <p>
            That background is why every Aria system is governed, observable,
            and evaluated. It is how you build when a wrong answer costs real money.
          </p>
        </FadeIn>

        <FadeIn delay={120}>
          <div style={{ marginBottom: 48 }}>
            <p className="section-label" style={{ marginBottom: 20 }}>Background</p>
            <div className="steps">
              {experience.map(e => (
                <div key={e.year} className="step" style={{ paddingTop: 20, paddingBottom: 20 }}>
                  <span className="mono" style={{ fontSize: 10, color: 'var(--dim)', paddingTop: 3 }}>{e.year}</span>
                  <div>
                    <div style={{ fontSize: 13, fontWeight: 500, color: 'var(--text)', marginBottom: 3 }}>{e.role}</div>
                    <div style={{ fontSize: 12, color: 'var(--muted)' }}>{e.org}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div>
            <p className="section-label" style={{ marginBottom: 16 }}>Stack</p>
            <div className="cap-tags">
              {stack.map(t => <span key={t} className="tag">{t}</span>)}
            </div>
          </div>
        </FadeIn>
      </div>
    </section>
  );
}
