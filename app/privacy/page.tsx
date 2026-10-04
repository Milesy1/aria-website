import type { Metadata } from 'next';
import Link from 'next/link';
import Footer from '@/components/Footer';

export const metadata: Metadata = {
  title: 'Privacy policy',
  description: 'How Aria handles analytics, contact form submissions, and email. UK GDPR and PECR.',
  alternates: { canonical: 'https://aria.mileswaite.net/privacy' },
};

export default function PrivacyPage() {
  return (
    <>
      <article style={{ maxWidth: 680, margin: '0 auto', padding: '80px 40px 40px' }}>
        <Link href="/" style={{ fontSize: 12, color: 'var(--dim)', fontFamily: 'var(--font-mono)', textDecoration: 'none', letterSpacing: '0.06em' }}>
          ← aria.mileswaite.net
        </Link>

        <div style={{ marginTop: 48, marginBottom: 40 }}>
          <p className="section-label">Privacy</p>
          <h1 style={{ fontSize: 'clamp(28px, 4vw, 40px)', marginBottom: 12 }}>Privacy policy</h1>
          <p style={{ fontSize: 13, color: 'var(--dim)', fontFamily: 'var(--font-mono)' }}>Last updated: October 2026</p>
        </div>

        <div className="blog-body">
          <p>
            This page explains what aria.mileswaite.net collects, who receives it, and what you can ask us to do with it. It is written for visitors to this site.
          </p>

          <h2>Who is responsible</h2>
          <p>
            The data controller is Miles Waite, trading as Aria, in the United Kingdom. For questions or data requests, email <a href="mailto:miles@aria.mileswaite.net">miles@aria.mileswaite.net</a>.
          </p>
          <p>
            On client engagements, Aria acts as a data processor under UK GDPR. A Data Processing Agreement is available on request. This policy covers the website, not the systems built for clients.
          </p>

          <h2>Analytics</h2>
          <p>
            This site uses Google Analytics 4, measurement ID G-QTEG0Y1HSC. It collects page views, session data, and device and browser information so we can see which pages are used. There is no advertising and no remarketing.
          </p>
          <p>
            Google receives that data as a processor of the analytics service. We do not use it to identify you by name. Google&apos;s own retention settings apply to the analytics property.
          </p>

          <h2>Cookies</h2>
          <p>
            This site does not set cookies of its own. Google Analytics 4 does. Those are analytics cookies under the Privacy and Electronic Communications Regulations (PECR). They are not strictly necessary to use the site, and they are not used for ads.
          </p>
          <p>
            You can block or delete them in your browser. You can also install the <a href="https://tools.google.com/dlpage/gaoptout" target="_blank" rel="noopener noreferrer">Google Analytics opt-out add-on</a>.
          </p>

          <h2>Contact form</h2>
          <p>
            The contact form is handled by Formspree at formspree.io/f/mvkgerwz. If you submit it, your name, email address, and message are stored on Formspree&apos;s servers and forwarded to the site owner&apos;s email. Formspree&apos;s own privacy policy applies to submissions they store.
          </p>
          <p>
            We use those details to reply to you. The legal basis is legitimate interests in responding to enquiries, and taking steps toward a contract if you ask about working together.
          </p>

          <h2>Email</h2>
          <p>
            Email sent to miles@aria.mileswaite.net is retained by the site owner for correspondence purposes only. It is kept while the conversation is active, and deleted if you ask.
          </p>

          <h2>Your rights</h2>
          <p>
            Under UK GDPR you can ask for access to your personal data, rectification, erasure, restriction of processing, and portability, and you can object to processing. Email miles@aria.mileswaite.net. We will respond within one month.
          </p>
          <p>
            You can also complain to the Information Commissioner&apos;s Office at ico.org.uk. We would like the chance to put things right first.
          </p>
        </div>
      </article>
      <Footer />
    </>
  );
}

