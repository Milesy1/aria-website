"use client";
import { useRef } from "react";
import { motion, useInView } from "framer-motion";

const layers = [
  { icon: "⚡", color: "rgba(79,142,255,0.1)", name: "Retrieval layer", sub: "Hybrid dense + BM25 + RRF · per-tenant Qdrant collections · 1ms p95 latency", tags: ["Qdrant", "text-embedding-3-small", "BM25", "RRF"] },
  { icon: "🧠", color: "rgba(79,142,255,0.1)", name: "Confidence & routing", sub: "Weighted agreement scoring · adaptive per-vendor thresholds · sparse evidence gate", tags: ["Python", "FastAPI", "Pydantic v2", "Celery"] },
  { icon: "🤖", color: "rgba(167,139,250,0.1)", name: "Agentic layer", sub: "LangGraph state machine · tool registry · plain-English explanations · conversational review", tags: ["LangGraph", "Claude", "Tool calling"] },
  { icon: "🏦", color: "rgba(251,191,36,0.1)", name: "ERP integration", sub: "Abstract connector · iplicit, NetSuite, Sage, Xero, SAP · async write-back with circuit breakers", tags: ["iplicit", "NetSuite", "Webhooks"] },
  { icon: "📊", color: "rgba(79,142,255,0.1)", name: "Observability", sub: "Full distributed tracing · custom evals · calibration scoring · Recall@10 · PagerDuty alerting", tags: ["Langfuse", "Prometheus", "Grafana"] },
  { icon: "🔒", color: "rgba(52,211,153,0.1)", name: "Security & compliance", sub: "OAuth2/JWT · RBAC · append-only audit log · 7-year retention · SOC 2 aligned · Postgres RLS", tags: ["Postgres RLS", "Vault", "AWS KMS"] },
];

export default function Architecture() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <div style={{ maxWidth: 1120, margin: "0 auto", padding: "140px 48px" }} id="architecture" ref={ref}>
      <motion.div initial={{ opacity: 0, y: 20 }} animate={inView ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.6 }}>
        <div style={{ fontFamily: "var(--font-mono)", fontSize: 11, color: "var(--blue)", letterSpacing: "0.15em", textTransform: "uppercase", marginBottom: 20 }}>Architecture</div>
        <h2 style={{ fontSize: "clamp(28px,4vw,52px)", fontWeight: 300, letterSpacing: -2, lineHeight: 1.1, marginBottom: 18 }}>Built for <strong style={{ fontWeight: 600 }}>production.</strong></h2>
        <p style={{ fontSize: "clamp(15px,1.5vw,17px)", color: "var(--muted)", maxWidth: 540, lineHeight: 1.75, marginBottom: 72, fontWeight: 300 }}>
          Every layer designed for multi-tenant SaaS at scale — from sub-millisecond retrieval to compliance-grade audit trails and zero-downtime deploys.
        </p>
      </motion.div>
      <div style={{ display: "flex", flexDirection: "column", gap: 10 }}>
        {layers.map((l, i) => (
          <motion.div key={i}
            initial={{ opacity: 0, x: -20 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.4, delay: 0.1 + i * 0.07 }}
            whileHover={{ x: 4, transition: { duration: 0.15 } }}
            style={{ display: "flex", alignItems: "center", gap: 16, background: "var(--s1)", border: "1px solid var(--border)", borderRadius: 10, padding: "18px 22px", cursor: "default", transition: "border-color 0.2s" }}>
            <div style={{ width: 36, height: 36, borderRadius: 8, background: l.color, display: "flex", alignItems: "center", justifyContent: "center", fontSize: 16, flexShrink: 0 }}>{l.icon}</div>
            <div>
              <div style={{ fontSize: 14, fontWeight: 500, marginBottom: 3 }}>{l.name}</div>
              <div style={{ fontSize: 11.5, color: "var(--muted)", fontFamily: "var(--font-mono)" }}>{l.sub}</div>
            </div>
            <div style={{ marginLeft: "auto", display: "flex", gap: 6, flexWrap: "wrap", justifyContent: "flex-end" }}>
              {l.tags.map(t => <span key={t} style={{ fontSize: 10.5, padding: "3px 9px", borderRadius: 4, border: "1px solid var(--border)", color: "var(--dim)", fontFamily: "var(--font-mono)" }}>{t}</span>)}
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
