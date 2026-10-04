'use client';

import { useId, useState } from 'react';
import corpus from '@/data/corpus-distribution.json';
import { DEFAULT_THRESHOLD, formatPct, formatThreshold, splitAtThreshold } from '@/lib/gate';

export default function ConfidenceGate() {
  const [threshold, setThreshold] = useState(DEFAULT_THRESHOLD);
  const inputId = useId();
  const noteId = useId();
  const split = splitAtThreshold(corpus.bins, threshold);
  const maxCount = Math.max(...corpus.bins.map(bin => bin.count), 1);

  return (
    <div className="gate" style={{ marginTop: 64 }}>
      <p className="section-label">Confidence gate</p>
      <h3 style={{ fontSize: 22, fontWeight: 400, letterSpacing: '-0.03em', marginBottom: 12 }}>
        What a threshold does to the corpus.
      </h3>
      {corpus.placeholder && (
        <p className="placeholder-note" id={noteId}>
          Placeholder distribution — equal counts, not a measured corpus. Replace data/corpus-distribution.json before quoting these percentages.
        </p>
      )}

      <label htmlFor={inputId} className="mono" style={{ display: 'block', marginBottom: 8 }}>
        Confidence threshold {formatThreshold(threshold)}
      </label>
      <input
        id={inputId}
        className="gate-slider"
        type="range"
        min={0.7}
        max={0.99}
        step={0.01}
        value={threshold}
        aria-valuemin={0.7}
        aria-valuemax={0.99}
        aria-valuenow={threshold}
        aria-valuetext={formatThreshold(threshold)}
        aria-describedby={noteId}
        onChange={event => setThreshold(Number(event.target.value))}
      />

      <div className="gate-readout" aria-live="polite">
        <div>
          <div className="metric-label">Auto-posted</div>
          <div className="metric-value nums" style={{ fontSize: 28 }}>{formatPct(split.autoPct)}</div>
          <div className="bar-track" aria-hidden="true">
            <div className="bar-fill" style={{ width: `${split.autoPct}%` }} />
          </div>
        </div>
        <div>
          <div className="metric-label">Routed to review</div>
          <div className="metric-value nums" style={{ fontSize: 28 }}>{formatPct(split.reviewPct)}</div>
          <div className="bar-track" aria-hidden="true">
            <div className="bar-fill" style={{ width: `${split.reviewPct}%` }} />
          </div>
        </div>
      </div>

      <p style={{ marginTop: 16, marginBottom: 8 }}>
        At {formatThreshold(threshold)}, lines in bins entirely at or above it would auto-post. The rest would wait for a person. Uncertain lines are not written.
      </p>
      <p className="mono" style={{ fontSize: 11, color: 'var(--dim)' }}>
        A bin counts as auto-posted only when its lower bound is at or above the threshold. A bin that straddles the threshold counts as review.
      </p>

      <ul className="bin-list" aria-label="Placeholder confidence bins">
        {corpus.bins.map(bin => (
          <li key={bin.min}>
            <span className="mono nums">{formatThreshold(bin.min)}–{formatThreshold(bin.max)}</span>
            <span className="bar-track" aria-hidden="true">
              <span className="bar-fill" style={{ width: `${(bin.count / maxCount) * 100}%` }} />
            </span>
            <span className="mono nums">{bin.count}</span>
          </li>
        ))}
      </ul>

      <noscript>
        <p className="placeholder-note">
          The slider needs JavaScript. The figures above are the default threshold of 0.90 on the placeholder distribution.
        </p>
      </noscript>
    </div>
  );
}
