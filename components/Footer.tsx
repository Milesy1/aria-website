export default function Footer() {
  return (
    <footer style={{
      borderTop: '1px solid var(--border)',
      padding: '28px 80px',
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
      flexWrap: 'wrap',
      gap: 12,
    }}>
      <span style={{ fontSize: 12, color: 'var(--dim)', fontFamily: 'var(--font-mono)' }}>
        Aria — AI systems that work
      </span>
      <div style={{ display: 'flex', gap: 20, alignItems: 'center' }}>
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
