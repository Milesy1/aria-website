"use client";
import { useRef } from "react";
import { motion, useInView } from "framer-motion";

const steps = [
  { n: "01", t: "Invoice arrives", b: "Description embedded via OpenAI text-embedding-3-small. Vendor resolved to canonical ID via MDM lookup." },
  { n: "02", t: "Evidence retrieved", b: "Hybrid dense + sparse search returns the 10 most similar historical lines. RRF fusion re-ranks by relevance." },
  { n: "03", t: "Confidence scored", b: "If 10/10 retrieved lines agree on GL 6300, confidence is high. Agreement weighted 70%, similarity 30%." },
  { n: "04", t: "Gate decides", b: "Above threshold → auto-posted to ERP in under 100ms. Below → human review with plain-English explanation." },
  { n: "05", t: "Corpus compounds", b: "Every confirmed outcome vectorised and indexed. The corpus grows. Future invoices auto-post with higher confidence." },
];

export default function HowItWorks() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <div style={{ maxWidth: 1120, margin: "0 auto", padding: "140px 48px" }} id="how-it-works" ref={ref}>
      <motion.div initial={{ opacity: 0, y: 20 }} animate={inView ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.6 }}>
        <div style={{ fontFamily: "var(--font-mono)", fontSize: 11, color: "var(--blue)", letterSpacing: "0.15em", textTransform: "uppercase", marginBottom: 20 }}>How it works</div>
        <h2 style={{ fontSize: "clamp(28px,4vw,52px)", fontWeight: 300, letterSpacing: -2, lineHeight: 1.1, marginBottom: 18 }}>Self-learning <strong style={{ fontWeight: 600 }}>by design</strong></h2>
        <p style={{ fontSize: "clamp(15px,1.5vw,17px)", color: "var(--muted)", maxWidth: 540, lineHeight: 1.75, marginBottom: 72, fontWeight: 300 }}>
          The write-back loop is the core differentiator. Every confirmed invoice compounds the corpus and raises the automation rate — automatically.
        </p>
      </motion.div>

      <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 80, alignItems: "start" }}>
        {/* Steps */}
        <div style={{ display: "flex", flexDirection: "column" }}>
          {steps.map((s, i) => (
            <motion.div key={i}
              initial={{ opacity: 0, x: -20 }}
              animate={inView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.1 + i * 0.1 }}
              style={{ display: "flex", gap: 20, padding: "24px 0", borderBottom: i < steps.length - 1 ? "1px solid var(--border)" : "none" }}>
              <div style={{ fontFamily: "var(--font-mono)", fontSize: 11, color: "var(--dim)", fontWeight: 500, width: 24, flexShrink: 0, paddingTop: 3 }}>{s.n}</div>
              <div>
                <div style={{ fontSize: 15, fontWeight: 500, marginBottom: 6 }}>{s.t}</div>
                <div style={{ fontSize: 13, color: "var(--muted)", lineHeight: 1.65 }}>{s.b}</div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Terminal */}
        <motion.div initial={{ opacity: 0, x: 20 }} animate={inView ? { opacity: 1, x: 0 } : {}} transition={{ duration: 0.6, delay: 0.3 }}
          style={{ background: "var(--s1)", border: "1px solid var(--border)", borderRadius: 12, overflow: "hidden", position: "sticky", top: 90 }}>
          <div style={{ display: "flex", alignItems: "center", gap: 6, padding: "12px 16px", borderBottom: "1px solid var(--border)" }}>
            {["#ff5f57","#febc2e","#28c840"].map((c,i) => <div key={i} style={{ width: 10, height: 10, borderRadius: "50%", background: c }} />)}
            <div style={{ fontFamily: "var(--font-mono)", fontSize: 10, color: "var(--dim)", marginLeft: "auto", letterSpacing: "0.1em" }}>invoice_prediction · Langfuse</div>
          </div>
          <div style={{ padding: 24, fontFamily: "var(--font-mono)", fontSize: 12.5, lineHeight: 2 }}>
            <div style={{ color: "var(--dim)", opacity: 0.6, fontSize: 11, marginBottom: 4 }}>// trace · 2026-10-02T10:14:32Z</div>
            {[
              ["invoice_id  ", '"4ae44541-d17f..."', "#93c5fd"],
              ["vendor      ", '"Meridian Facilities Ltd"', "#93c5fd"],
              ["description ", '"Office cleaning monthly"', "#93c5fd"],
              ["amount      ", "450.00 GBP", "var(--green)"],
            ].map(([k,v,c],i) => <div key={i}><span style={{ color: "var(--dim)" }}>{k}</span><span style={{ color: c as string }}>{v}</span></div>)}
            <br />
            <div style={{ color: "var(--dim)", opacity: 0.6, fontSize: 11, marginBottom: 4 }}>// retrieval</div>
            {[
              ["evidence    ", "10 lines", "var(--green)"],
              ["retrieval_ms", "1", "var(--green)"],
              ["agreement   ", "1.000", "var(--green)"],
            ].map(([k,v,c],i) => <div key={i}><span style={{ color: "var(--dim)" }}>{k}</span><span style={{ color: c as string }}>{v}</span></div>)}
            <br />
            <div style={{ color: "var(--dim)", opacity: 0.6, fontSize: 11, marginBottom: 4 }}>// prediction</div>
            {[
              ["predicted_gl", '"6300"', "var(--green)"],
              ["confidence  ", "0.85", "var(--green)"],
              ["routing     ", '"auto_post"', "var(--amber)"],
            ].map(([k,v,c],i) => <div key={i}><span style={{ color: "var(--dim)" }}>{k}</span><span style={{ color: c as string }}>{v}</span></div>)}
            <br />
            <div style={{ color: "var(--dim)", opacity: 0.6, fontSize: 11, marginBottom: 4 }}>// write-back</div>
            {[
              ["corpus_after", "2,293 pts", "var(--text)"],
              ["gate.correct", "1.0 ✓", "var(--green)"],
            ].map(([k,v,c],i) => <div key={i}><span style={{ color: "var(--dim)" }}>{k}</span><span style={{ color: c as string }}>{v}</span></div>)}
          </div>
        </motion.div>
      </div>
    </div>
  );
}
