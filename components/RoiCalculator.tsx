'use client';

import { useId, useState } from 'react';
import { ROUTINE_AUTOMATION_RATE, WEEKS_PER_YEAR, formatAmount, formatHours, routineRoi } from '@/lib/roi';

type Draft = { invoices: string; minutes: string; rate: string };

const empty: Draft = { invoices: '', minutes: '', rate: '' };

function parse(value: string) {
  if (value.trim() === '') return null;
  const number = Number(value);
  if (!Number.isFinite(number) || number < 0) return null;
  return number;
}

export default function RoiCalculator() {
  const [draft, setDraft] = useState<Draft>(empty);
  const baseId = useId();
  const invoices = parse(draft.invoices);
  const minutes = parse(draft.minutes);
  const rate = parse(draft.rate);
  const ready = invoices !== null && minutes !== null && rate !== null;
  const result = ready ? routineRoi(invoices, minutes, rate) : null;
  const invalid = [draft.invoices, draft.minutes, draft.rate].some(value => value.trim() !== '' && parse(value) === null);

  function setField(key: keyof Draft, value: string) {
    setDraft(current => ({ ...current, [key]: value }));
  }

  return (
    <div className="roi" style={{ marginBottom: 56 }}>
      <p className="section-label">Routine-invoice arithmetic</p>
      <h3 style={{ fontSize: 22, fontWeight: 400, letterSpacing: '-0.03em', marginBottom: 12 }}>
        Hours the gate would hand back.
      </h3>
      <p style={{ maxWidth: 560, marginBottom: 20 }}>
        Enter your own volume. The only rate applied is the published 99% automation of routine invoices. No uplift, no multiplier.
      </p>

      <form className="roi-form" onSubmit={event => event.preventDefault()}>
        <div>
          <label htmlFor={`${baseId}-invoices`}>Invoices per week</label>
          <input
            id={`${baseId}-invoices`}
            className="form-input nums"
            type="number"
            inputMode="decimal"
            min={0}
            step="any"
            value={draft.invoices}
            onChange={event => setField('invoices', event.target.value)}
          />
        </div>
        <div>
          <label htmlFor={`${baseId}-minutes`}>Minutes per invoice, manually</label>
          <input
            id={`${baseId}-minutes`}
            className="form-input nums"
            type="number"
            inputMode="decimal"
            min={0}
            step="any"
            value={draft.minutes}
            onChange={event => setField('minutes', event.target.value)}
          />
        </div>
        <div>
          <label htmlFor={`${baseId}-rate`}>Loaded hourly rate</label>
          <input
            id={`${baseId}-rate`}
            className="form-input nums"
            type="number"
            inputMode="decimal"
            min={0}
            step="any"
            value={draft.rate}
            onChange={event => setField('rate', event.target.value)}
          />
        </div>
      </form>

      <p className="mono" style={{ fontSize: 12, color: 'var(--muted)', margin: '16px 0' }}>
        Hours/week = invoices/week × {ROUTINE_AUTOMATION_RATE} × minutes ÷ 60. Annual hours = that figure × {WEEKS_PER_YEAR}. Annual cost = annual hours × the hourly rate, in the same units.
      </p>

      <dl className="roi-out" aria-live="polite">
        <div>
          <dt>Hours/week freed</dt>
          <dd className="nums">{result ? formatHours(result.hoursWeek) : '—'}</dd>
        </div>
        <div>
          <dt>Annual hours</dt>
          <dd className="nums">{result ? formatHours(result.annualHours) : '—'}</dd>
        </div>
        <div>
          <dt>Annual cost equivalent</dt>
          <dd className="nums">{result ? formatAmount(result.annualCost) : '—'}</dd>
        </div>
      </dl>

      {invalid && (
        <p role="alert" style={{ fontSize: 13 }}>Enter a number that is zero or greater in each field you have started.</p>
      )}

      <p className="mono" style={{ fontSize: 11, color: 'var(--dim)', marginTop: 12 }}>
        Conservative estimate. Assumes routine invoices only; edge cases still route to review.
      </p>

      <noscript>
        <p className="placeholder-note">
          The totals need JavaScript. The formula above is the arithmetic: 99% of the weekly volume, converted to hours, times 52, times the hourly rate.
        </p>
      </noscript>
    </div>
  );
}
