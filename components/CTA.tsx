"use client";
import { motion } from "framer-motion";

export default function CTA() {
  return (
    <div id="contact" style={{ textAlign: "center", padding: "140px 48px", background: "radial-gradient(ellipse 60% 50% at 50% 0%,rgba(79,142,255,0.04),transparent)" }}>
      <motion.div initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: "-80px" }} transition={{ duration: 0.7 }}>
        <div style={{ fontFamily: "var(--font-mono)", fontSize: 11, color: "var(--blue)", letterSpacing: "0.15em", textTransform: "uppercase", marginBottom: 20 }}>Get started</div>
        <h2 style={{ fontSize: "clamp(28px,4vw,52px)", fontWeight: 300, letterSpacing: -2, lineHeight: 1.1, marginBottom: 18 }}>
          Ready to automate <strong style={{ fontWeight: 600 }}>your AP?</strong>
        </h2>
        <p style={{ color: "var(--muted)", fontSize: 17, maxWidth: 480, margin: "0 auto 48px", fontWeight: 300, lineHeight: 1.75 }}>
          Talk to us about your invoice volume, ERP, and what production could look like. We&apos;ll show you the live POC and run a corpus density analysis on your historical data.
        </p>
        <div style={{ display: "flex", gap: 12, justifyContent: "center", flexWrap: "wrap" }}>
          <a href="mailto:miles.waite@akkoda.com"
            style={{ background: "var(--blue)", color: "#fff", padding: "12px 28px", borderRadius: 7, fontSize: 14, fontWeight: 500, textDecoration: "none" }}
            onMouseEnter={e => { e.currentTarget.style.opacity = "0.88"; }}
            onMouseLeave={e => { e.currentTarget.style.opacity = "1"; }}>
            Book a call
          </a>
          <a href="https://github.com/Milesy1/ap-automation" target="_blank"
            style={{ background: "transparent", color: "var(--muted)", padding: "12px 28px", borderRadius: 7, fontSize: 14, fontWeight: 400, textDecoration: "none", border: "1px solid var(--border2)" }}
            onMouseEnter={e => { e.currentTarget.style.color = "var(--text)"; }}
            onMouseLeave={e => { e.currentTarget.style.color = "var(--muted)"; }}>
            View on GitHub →
          </a>
        </div>
      </motion.div>
    </div>
  );
}
