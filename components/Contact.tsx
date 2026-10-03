'use client';
import { useForm, ValidationError } from '@formspree/react';
import FadeIn from './FadeIn';

export default function Contact() {
  const [state, handleSubmit] = useForm('mvkgerwz');

  return (
    <section id="contact" className="section" style={{ minHeight: 'auto', paddingTop: 120, paddingBottom: 120 }}>
      <span className="section-number">10</span>

      <div className="two-col" style={{ gap: 80, alignItems: 'start' }}>
        <FadeIn>
          <p className="section-label" style={{ marginBottom: 24 }}>Get in touch</p>
          <h2 style={{ marginBottom: 24, lineHeight: 1.15 }}>
            For AI systems that work<br />
            <span style={{ color: 'var(--muted)', fontWeight: 300 }}>and you can trust —</span><br />
            contact:
          </h2>
          <div className="divider" />
          <p style={{ marginBottom: 32, fontSize: 15 }}>
            Aria works with finance ops leaders and engineering teams at
            mid-market enterprises running modern ERPs. Contract or permanent,
            remote or hybrid.
          </p>
          <div style={{ display: 'flex', flexDirection: 'column', gap: 10 }}>
            <a
              href="https://linkedin.com/in/miles-waite-46628a3b2"
              target="_blank" rel="noopener noreferrer"
              className="btn-outline"
              style={{ display: 'inline-block', width: 'fit-content' }}
            >
              LinkedIn →
            </a>
            <span style={{ fontSize: 12, color: 'var(--dim)', fontFamily: 'var(--font-mono)' }}>
              info@aria.ai
            </span>
          </div>
        </FadeIn>

        <FadeIn delay={120}>
          {state.succeeded ? (
            <div style={{ padding: '40px 0' }}>
              <p className="section-label" style={{ marginBottom: 12 }}>Message sent</p>
              <p style={{ fontSize: 14 }}>Thanks — we'll be in touch shortly.</p>
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
