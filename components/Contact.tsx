'use client';
import { useForm, ValidationError } from '@formspree/react';
import FadeIn from './FadeIn';

/** Placeholder scheduling URL — confirm or replace. */
const BOOKING_URL = 'https://calendly.com/mileswaite-intro';

export default function Contact() {
  const [state, handleSubmit] = useForm('mvkgerwz');

  return (
    <section id="contact" className="section" style={{ minHeight: 'auto', paddingTop: 120, paddingBottom: 120 }}>
      <span className="section-number">13</span>

      <div className="two-col" style={{ gap: 80, alignItems: 'start' }}>
        <FadeIn>
          <p className="section-label" style={{ marginBottom: 24 }}>Get in touch</p>
          <h2 style={{ marginBottom: 24, lineHeight: 1.15 }}>
            For AI systems that work<br />
            <span style={{ color: 'var(--muted)', fontWeight: 300 }}>and you can trust —</span><br />
            contact:
          </h2>
          <div className="divider" />
          <p style={{ marginBottom: 16, fontSize: 15 }}>
            Aria works with operations, finance, and trading teams at mid-market enterprises — any domain where AI decisions need to be right.
          </p>
          <p style={{ marginBottom: 28, fontSize: 15 }}>
            Engagements start with a scoped 4–8 week pilot, evaluated against a golden dataset before production.
          </p>

          <a
            href={BOOKING_URL}
            className="btn-primary"
            style={{ width: 'fit-content', marginBottom: 28 }}
            target="_blank"
            rel="noopener noreferrer"
          >
            Book a 30-minute call
          </a>

          <div style={{ display: 'flex', flexDirection: 'column', gap: 22 }}>
            <div>
              <div style={{ fontSize: 11, color: 'var(--muted)', fontFamily: 'var(--font-mono)', letterSpacing: '0.08em', marginBottom: 6 }}>NAME</div>
              <div style={{ fontSize: 16, color: 'var(--text)', fontWeight: 400 }}>Miles Waite</div>
            </div>
            <div>
              <div style={{ fontSize: 11, color: 'var(--muted)', fontFamily: 'var(--font-mono)', letterSpacing: '0.08em', marginBottom: 8 }}>EMAIL</div>
              <a
                href="mailto:miles@aria.mileswaite.net"
                style={{
                  fontSize: 'clamp(18px, 2vw, 26px)',
                  color: 'var(--text)',
                  textDecoration: 'none',
                  letterSpacing: '-0.03em',
                  fontWeight: 400,
                  borderBottom: '1px solid var(--border2)',
                  paddingBottom: 2,
                  lineHeight: 1.3,
                }}
              >
                miles@aria.mileswaite.net
              </a>
            </div>
            <div style={{ display: 'flex', gap: 20, alignItems: 'center' }}>
              <a
                href="https://linkedin.com/in/miles-waite-46628a3b2"
                target="_blank"
                rel="noopener noreferrer"
                className="link-muted"
              >
                LinkedIn
              </a>
              <a
                href="https://github.com/Milesy1"
                target="_blank"
                rel="noopener noreferrer"
                className="link-muted"
              >
                GitHub
              </a>
            </div>
          </div>
        </FadeIn>

        <FadeIn delay={120}>
          {state.succeeded ? (
            <div style={{ padding: '40px 0' }}>
              <p className="section-label" style={{ marginBottom: 12 }}>Message sent</p>
              <p style={{ fontSize: 14 }}>Thanks — we&apos;ll be in touch shortly.</p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: 16 }}>
              <div style={{ display: 'flex', flexDirection: 'column', gap: 6 }}>
                <label htmlFor="name" style={{ fontSize: 11, color: 'var(--muted)', fontFamily: 'var(--font-mono)', letterSpacing: '0.08em' }}>NAME</label>
                <input id="name" type="text" name="name" required placeholder="Your name" className="form-input" />
              </div>
              <div style={{ display: 'flex', flexDirection: 'column', gap: 6 }}>
                <label htmlFor="email" style={{ fontSize: 11, color: 'var(--muted)', fontFamily: 'var(--font-mono)', letterSpacing: '0.08em' }}>EMAIL</label>
                <input id="email" type="email" name="email" required placeholder="you@company.com" className="form-input" />
                <ValidationError field="email" prefix="Email" errors={state.errors} style={{ fontSize: 11, color: 'var(--text)' }} />
              </div>
              <div style={{ display: 'flex', flexDirection: 'column', gap: 6 }}>
                <label htmlFor="message" style={{ fontSize: 11, color: 'var(--muted)', fontFamily: 'var(--font-mono)', letterSpacing: '0.08em' }}>MESSAGE</label>
                <textarea id="message" name="message" required placeholder="Tell us what you're building..." rows={5} className="form-input" style={{ resize: 'vertical' }} />
                <ValidationError field="message" prefix="Message" errors={state.errors} style={{ fontSize: 11, color: 'var(--text)' }} />
              </div>
              <button type="submit" className="btn-primary" disabled={state.submitting}
                style={{ width: 'fit-content', opacity: state.submitting ? 0.6 : 1 }}>
                {state.submitting ? 'Sending...' : 'Send message'}
              </button>
            </form>
          )}
        </FadeIn>
      </div>
    </section>
  );
}
