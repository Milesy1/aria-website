import type { Metadata } from 'next';
import Link from 'next/link';
import Footer from '@/components/Footer';
import TraceViewer from '@/components/TraceViewer';
import evals from '@/data/evals.json';

export const metadata: Metadata = {
  title: 'Evaluation results',
  description: 'Published RAGAS, Recall@10, and gate.correct figures. The file behind this page is what CI should overwrite on each gated release.',
  alternates: { canonical: 'https://aria.mileswaite.net/evals' },
};

export default function EvalsPage() {
  const gateLabel = evals.ciGate.status === 'pass' ? 'Pass' : 'Fail';

  return (
    <>
      <article style={{ maxWidth: 880, margin: '0 auto', padding: '80px 40px 48px' }}>
        <Link href="/" style={{ fontSize: 12, color: 'var(--dim)', fontFamily: 'var(--font-mono)', textDecoration: 'none', letterSpacing: '0.06em' }}>
          ← aria.mileswaite.net
        </Link>

        <div style={{ marginTop: 48, marginBottom: 36 }}>
          <p className="section-label">Evaluation results</p>
          <h1 style={{ fontSize: 'clamp(28px, 4vw, 40px)', marginBottom: 12 }}>Scores from the last published run.</h1>
          <p style={{ maxWidth: 640 }}>
            These are the figures already stated on the site. The date of the last CI run is not recorded yet.
          </p>
        </div>

        {evals.lastRun === null && (
          <p className="placeholder-note">
            Last run date is not recorded. Scores and release id are filled. Set lastRun in data/evals.json to the YYYY-MM-DD the golden dataset evaluation ran.
          </p>
        )}

        <dl className="eval-meta">
          <div>
            <dt>Last run</dt>
            <dd>{evals.lastRun ?? 'Not recorded'}</dd>
          </div>
          <div>
            <dt>Release</dt>
            <dd>{evals.releaseId ?? 'Not recorded'}</dd>
          </div>
          <div>
            <dt>CI gate</dt>
            <dd>{gateLabel}</dd>
          </div>
        </dl>
        <p style={{ fontSize: 14, maxWidth: 680 }}>{evals.ciGate.basis}</p>

        <div className="metric-stack" style={{ marginTop: 36 }}>
          {evals.scores.map(score => (
            <div key={score.id} className="metric-row">
              <div style={{ display: 'flex', justifyContent: 'space-between', gap: 16, alignItems: 'baseline' }}>
                <span className="metric-label">{score.label}</span>
                <span className="mono" style={{ fontSize: 10, color: 'var(--dim)' }}>{score.system}</span>
              </div>
              <div className="metric-value nums" style={{ fontSize: 28 }}>{score.value}</div>
              <div className="mono" style={{ fontSize: 11, color: 'var(--dim)', marginTop: 4 }}>{score.detail}</div>
            </div>
          ))}
        </div>

        <section aria-labelledby="how-to-read" style={{ marginTop: 56 }}>
          <h2 id="how-to-read" style={{ fontSize: 22, marginBottom: 8 }}>How to read these numbers</h2>
          <p style={{ marginBottom: 20 }}>Three terms. One line each.</p>
          <dl className="reading">
            {evals.reading.map(item => (
              <div key={item.term}>
                <dt>{item.term}</dt>
                <dd>{item.line}</dd>
              </div>
            ))}
          </dl>
        </section>

        <div style={{ marginTop: 72 }}>
          <TraceViewer />
        </div>
      </article>
      <Footer />
    </>
  );
}
