export default function Footer() {
  return (
    <footer className="site-footer">
      <div style={{ display: 'flex', flexDirection: 'column', gap: 6 }}>
        <span style={{ fontSize: 12, color: 'var(--dim)', fontFamily: 'var(--font-mono)' }}>
          Aria — AI systems that work
        </span>
        <span style={{ fontSize: 12, color: 'var(--dim)', fontFamily: 'var(--font-mono)' }}>
          Aria — Miles Waite, United Kingdom
        </span>
        <span style={{ fontSize: 12, color: 'var(--dim)', fontFamily: 'var(--font-mono)' }}>
          Last updated: October 2026
        </span>
      </div>
      <div style={{ display: 'flex', gap: 20, alignItems: 'center', flexWrap: 'wrap' }}>
        <a href="/evals" className="footer-link">
          Evaluation results
        </a>
        <a href="/privacy" className="footer-link">
          Privacy Policy
        </a>
        <a href="https://linkedin.com/in/miles-waite-46628a3b2" target="_blank" rel="noopener noreferrer" className="footer-link">
          LinkedIn
        </a>
        <a href="https://github.com/Milesy1/miles-rag" target="_blank" rel="noopener noreferrer" className="footer-link">
          GitHub
        </a>
        <span style={{ fontSize: 12, color: 'var(--dim)' }}>© {new Date().getFullYear()}</span>
      </div>
    </footer>
  );
}
