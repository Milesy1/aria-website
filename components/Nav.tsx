"use client";
import { useEffect, useState } from "react";
import { useTheme } from "./ThemeProvider";

export default function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const { theme, toggle } = useTheme();
  const dark = theme === 'dark';

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const bg = dark
    ? scrolled ? "rgba(5,8,15,0.97)" : "rgba(5,8,15,0.7)"
    : scrolled ? "rgba(247,248,252,0.97)" : "rgba(247,248,252,0.7)";

  return (
    <nav style={{ position: "fixed", top: 0, left: 0, right: 0, zIndex: 200, height: 60, padding: "0 48px", display: "flex", alignItems: "center", justifyContent: "space-between", background: bg, backdropFilter: "blur(24px) saturate(180%)", borderBottom: "1px solid var(--border)", transition: "background 0.3s" }}>
      <div style={{ fontFamily: "var(--font-mono)", fontSize: 17, fontWeight: 500, letterSpacing: -0.5, color: "var(--text)" }}>
        aria<span style={{ color: "var(--blue)" }}>.</span>ai
      </div>

      <ul style={{ display: "flex", gap: 32, listStyle: "none" }}>
        {[["Solutions","#solutions"],["How we work","#how-we-work"],["Results","#results"],["About","#about"]].map(([l, h]) => (
          <li key={l}>
            <a href={h} style={{ color: "var(--muted)", textDecoration: "none", fontSize: 13.5, fontWeight: 400, letterSpacing: "0.01em", transition: "color 0.15s" }}
              onMouseEnter={e => (e.currentTarget.style.color = "var(--text)")}
              onMouseLeave={e => (e.currentTarget.style.color = "var(--muted)")}>
              {l}
            </a>
          </li>
        ))}
      </ul>

      <div style={{ display: "flex", gap: 10, alignItems: "center" }}>
        <button onClick={toggle}
          title={dark ? "Switch to light (L)" : "Switch to dark (D)"}
          style={{ background: "transparent", border: "1px solid var(--border2)", borderRadius: 6, padding: "6px 10px", cursor: "pointer", fontSize: 13, color: "var(--muted)", fontFamily: "var(--font-mono)", transition: "all 0.15s", letterSpacing: "0.05em" }}
          onMouseEnter={e => { e.currentTarget.style.color = "var(--text)"; e.currentTarget.style.borderColor = "var(--blue)"; }}
          onMouseLeave={e => { e.currentTarget.style.color = "var(--muted)"; e.currentTarget.style.borderColor = "var(--border2)"; }}>
          {dark ? "L" : "D"}
        </button>
        <button onClick={() => document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" })}
          style={{ background: "var(--blue)", color: "#fff", padding: "8px 18px", borderRadius: 6, fontSize: 13, fontWeight: 500, cursor: "pointer", border: "none", fontFamily: "var(--font-inter)", transition: "opacity 0.15s" }}
          onMouseEnter={e => e.currentTarget.style.opacity = "0.85"}
          onMouseLeave={e => e.currentTarget.style.opacity = "1"}>
          Get in touch
        </button>
      </div>
    </nav>
  );
}
