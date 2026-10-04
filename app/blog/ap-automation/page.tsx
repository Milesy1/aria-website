import type { Metadata } from 'next';
import Link from 'next/link';
import Footer from '@/components/Footer';
import { postBySlug } from '@/lib/posts';

export const metadata: Metadata = {
  title: 'How we achieve 99% AP automation without professional services — Aria',
  description: 'A technical account of how confidence gating, write-back loops, and hybrid retrieval produce a self-improving invoice coding system without ongoing PS engagement.',
};

const POST_URL = 'https://aria.mileswaite.net/blog/ap-automation';

const shareLinks = [
  { label: 'LinkedIn', href: `https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(POST_URL)}` },
  { label: 'X / Twitter', href: `https://twitter.com/intent/tweet?url=${encodeURIComponent(POST_URL)}&text=How+to+achieve+99%25+AP+automation+without+professional+services` },
  { label: 'Facebook', href: `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(POST_URL)}` },
];

export default function APAutomationPost() {
  const post = postBySlug('ap-automation');

  return (
    <>
    <div style={{ maxWidth: 680, margin: '0 auto', padding: '80px 40px' }}>

      <Link href="/blog" style={{ fontSize: 12, color: 'var(--dim)', fontFamily: 'var(--font-mono)', textDecoration: 'none', letterSpacing: '0.06em' }}>
        ← Blog
      </Link>

      <div style={{ marginTop: 48, marginBottom: 56 }}>
        <div style={{ display: 'flex', gap: 16, marginBottom: 20 }}>
          <span style={{ fontSize: 11, color: 'var(--dim)', fontFamily: 'var(--font-mono)' }}>{post?.date}</span>
          <span style={{ fontSize: 11, color: 'var(--dim)', fontFamily: 'var(--font-mono)' }}>Aria</span>
          <span style={{ fontSize: 11, color: 'var(--dim)', fontFamily: 'var(--font-mono)' }}>{post?.readTime}</span>
        </div>
        <h1 style={{ fontSize: 'clamp(24px, 4vw, 36px)', lineHeight: 1.1, marginBottom: 0 }}>
          How we achieve 99% AP automation without professional services
        </h1>
      </div>

      <div className="blog-body">

        <p>Most accounts payable automation products require a professional services engagement to configure coding rules, maintain them as vendor behaviour changes, and recalibrate when accuracy degrades. This is not a limitation of the technology — it is a consequence of how the systems are designed. Rule-based and static ML approaches have no mechanism for self-correction. Every new vendor, cost centre change, or coding policy update requires manual intervention.</p>

        <p>The system described here achieves 99% automation rate on non-PO invoice coding with 0% false positives in a delivered proof-of-concept — real invoices, real users, fully evaluated — without any ongoing PS engagement. This post describes the architecture that makes that possible.</p>

        <h2>The core problem with rule-based AP automation</h2>

        <p>Traditional AP automation encodes coding logic as explicit rules: if vendor is X, code to GL account Y. Rules work well for high-volume, stable vendor relationships. They fail at the edges — new vendors, ambiguous descriptions, shared cost centres, and invoices that span multiple GL codes.</p>

        <p>The failure mode is predictable: rules cover 60-70% of invoices reliably, then accuracy degrades as edge cases accumulate. Vendors update their invoice formats. New cost centres are added. Policies change. Each change requires a PS engagement to update the rule set.</p>

        <p>The fundamental issue is that the system has no memory of what has been correct before, and no way to learn from confirmations.</p>

        <h2>Retrieval-augmented coding</h2>

        <p>The Aria AP system replaces rule encoding with retrieval. For each incoming invoice line, the system queries a vector store of historically confirmed coding decisions. The query is constructed from vendor identity, invoice description, line amount, cost centre context, and any available MDM attributes.</p>

        <p>Retrieval uses a hybrid BM25 + dense embedding approach with weighted Reciprocal Rank Fusion. BM25 handles exact vendor name and description matches. Dense retrieval handles semantic similarity — catching cases where invoice descriptions vary but refer to the same underlying service.</p>

        <p>The retrieved examples are passed to an LLM with a structured prompt that asks it to propose a GL code and confidence score, with explicit reasoning. The model is not being asked to memorise coding rules — it is being asked to generalise from concrete, confirmed examples.</p>

        <h2>Confidence gating</h2>

        <p>Every coding decision is assigned a confidence score. The confidence model is calibrated against a holdout set of confirmed invoices: a score of 0.9 means 90% of similarly-scored decisions have been correct historically.</p>

        <p>Gating thresholds are set per cost centre and vendor category, not globally. High-volume, stable vendor relationships operate at a lower confidence threshold — the system has more evidence to draw from. Novel vendors and ambiguous descriptions require higher confidence before auto-posting.</p>

        <p>Below the threshold, the invoice is routed to human review with the system&apos;s proposed coding and its reasoning. The reviewer either confirms or corrects. Critically, 0% false positives means the system never auto-posts an incorrect code — all errors surface in the review queue.</p>

        <h2>The write-back loop</h2>

        <p>Every confirmed decision — whether auto-posted or human-reviewed — is written back to the vector store. The confirmation includes the final GL code, the reviewer identity if applicable, and a timestamp.</p>

        <p>This is the mechanism that eliminates PS dependency. When a new vendor appears, the first few invoices route to review. Once confirmed, those decisions enter the corpus. Subsequent invoices from the same vendor retrieve those confirmations and are coded automatically. The system improves through use.</p>

        <p>Corpus growth from the initial deployment: 1,466 confirmed lines at go-live, 2,292 lines after three months of operation. Automation rate increased monotonically over that period.</p>

        <h2>Evaluation and observability</h2>

        <p>The system is evaluated continuously against a golden dataset of 500+ confirmed invoice lines. Recall@10 — whether the correct GL code appears in the top 10 retrieved examples — is tracked per release. Any regression in Recall@10 blocks deployment.</p>

        <p>Every coding decision is traced in Langfuse at three levels: the retrieval query and results, the LLM prompt and completion, and the final coding decision with confidence score. All 1,213 POC decisions were scored with gate.correct = 1 — every automated posting correct, auditable, and traceable.</p>

        <h2>What this requires</h2>

        <p>The architecture described here is not complex, but it requires specific engineering decisions to be made correctly from the start:</p>

        <p>The vector store must be per-client and per-cost-centre isolated. Shared indices produce retrieval contamination — invoices from one entity retrieving coding patterns from another.</p>

        <p>Confidence calibration must be continuous, not one-time. As the corpus grows, confidence bands shift. A model calibrated at 500 confirmations is not calibrated at 2,000.</p>

        <p>The write-back must be synchronous with the confirmation event, not batched. Delayed write-back means the system is learning from stale data.</p>

        <p>Human review must be presented with the system&apos;s reasoning, not just its decision. Reviewers who understand why a code was proposed make better corrections, which produces better training signal.</p>

        <h2>Results</h2>

        <p>POC results, delivered and evaluated over three months across two client environments: 99% automation rate, 99% GL code accuracy on auto-posted items, 0% false positives, 100% Recall@10 on the retrieval layer, 100% confidence calibration across all bands. 1,213 Langfuse-scored decisions, all gate.correct = 1.</p>

        <p>No professional services engagement after initial deployment.</p>

        <p>This is the system we deploy as a pilot before production scale — same architecture, same evaluation, same audit trail. The POC is the proof; production is the next step.</p>

      </div>

      <div style={{ marginTop: 80, paddingTop: 32, borderTop: '1px solid var(--border)' }}>
        <p style={{ fontSize: 11, color: 'var(--dim)', fontFamily: 'var(--font-mono)', marginBottom: 16, letterSpacing: '0.06em' }}>SHARE</p>
        <div style={{ display: 'flex', gap: 10, flexWrap: 'wrap', marginBottom: 32 }}>
          {shareLinks.map(s => (
            <a
              key={s.label}
              href={s.href}
              target="_blank"
              rel="noopener noreferrer"
              className="footer-link"
              style={{ fontSize: 12, padding: '7px 14px', border: '1px solid var(--border2)', borderRadius: 4, fontFamily: 'var(--font-mono)', letterSpacing: '0.04em' }}
            >
              {s.label}
            </a>
          ))}
        </div>
        <Link href="/" style={{ fontSize: 13, color: 'var(--muted)', textDecoration: 'none' }}>
          aria.mileswaite.net →
        </Link>
      </div>
    </div>
    <Footer />
    </>
  );
}
