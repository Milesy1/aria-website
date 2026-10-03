"use client";
import { useRef } from "react";
import { motion, useInView } from "framer-motion";

const stages = [
  { num: "01", title: "Ingestion & MDM", desc: "Invoice received. Vendor resolved to canonical ID. Description preprocessed. Amount band assigned.", hi: false },
  { num: "02", title: "Hybrid retrieval", desc: "Dense + BM25 + RRF fusion. Vendor pre-filter. Top-10 evidence lines returned from Qdrant in 1ms.", hi: false },
  { num: "03", title: "Confidence scoring", desc: "Agreement ratio 70% + similarity 30%. Per-vendor adaptive threshold. Sparse evidence gate.", hi: false },
  { num: "04", title: "Confidence gate", desc: "≥50% → auto-post to ERP. <50% → human review. Cold-start → always review. Never guesses.", hi: true },
  { num: "05", title: "Write-back loop", desc: "Every confirmation indexed to corpus. System learns automatically. No PS intervention required.", hi: false },
];

export default function Pipeline() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <div style={{ maxWidth: 1120, margin: "0 auto", padding: "140px 48px" }} id="pipeline">
      <motion.div initial={{ opacity: 0, y: 20 }} animate={inView ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.6 }} ref={ref}>
        <div style={{ fontFamily: "var(--font-mono)", fontSize: 11, color: "var(--blue)", letterSpacing: "0.15em", textTransform: "uppercase", marginBottom: 20 }}>Core pipeline</div>
        <h2 style={{ fontSize: "clamp(28px,4vw,52px)", fontWeight: 300, letterSpacing: -2, lineHeight: 1.1, marginBottom: 18 }}><strong style={{ fontWeight: 600 }}>Five steps.</strong> Zero rules.</h2>
        <p style={{ fontSize: "clamp(15px,1.5vw,17px)", color: "var(--muted)", maxWidth: 540, lineHeight: 1.75, marginBottom: 72, fontWeight: 300 }}>
          The system codes invoices from historical evidence — not hand-authored rules. Every confirmation makes the next prediction more confident.
        </p>
      </motion.div>

      <div style={{ display: "flex", alignItems: "stretch", gap: 2, overflowX: "auto", paddingBottom: 4 }}>
        {stages.map((s, i) => (
          <motion.div key={i}
            initial={{ opacity: 0, y: 24 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.1 + i * 0.1 }}
            style={{
              flex: 1, minWidth: 170,
              background: s.hi ? "rgba(251,191,36,0.03)" : "var(--s1)",
              border: `1px solid ${s.hi ? "rgba(251,191,36,0.2)" : "var(--border)"}`,
              borderRadius: 10, padding: "24px 20px", cursor: "default",
              transition: "border-color 0.2s,transform 0.2s,background 0.2s",
            }}
            whileHover={{ y: -5, transition: { duration: 0.2 } }}
          >
            <div style={{ fontFamily: "var(--font-mono)", fontSize: 10, fontWeight: 500, color: s.hi ? "var(--amber)" : "var(--blue)", letterSpacing: "0.12em", textTransform: "uppercase", marginBottom: 12 }}>{s.num}</div>
            <div style={{ fontSize: 14, fontWeight: 500, marginBottom: 8, lineHeight: 1.3 }}>{s.title}</div>
            <div style={{ fontSize: 12, color: "var(--muted)", lineHeight: 1.65 }}>{s.desc}</div>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
