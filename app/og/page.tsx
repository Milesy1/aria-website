'use client';

export default function OGImage() {
  return (
    <div
      style={{
        width: 1200,
        height: 630,
        background: '#f9f6f1',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'flex-end',
        padding: '80px 100px',
        fontFamily: 'Inter, system-ui, sans-serif',
        position: 'relative',
      }}
    >
      <div style={{ position: 'absolute', top: 80, left: 100 }}>
        <span style={{ fontSize: 18, fontWeight: 500, color: '#1a1a18', letterSpacing: '-0.02em' }}>
          Aria<span style={{ color: '#1a56db' }}>.</span>
        </span>
      </div>
      <p style={{ fontSize: 13, color: '#b5b0a8', letterSpacing: '0.1em', marginBottom: 24, fontFamily: 'monospace' }}>
        AI ENGINEERING
      </p>
      <h1 style={{ fontSize: 64, fontWeight: 300, color: '#1a1a18', letterSpacing: '-0.03em', lineHeight: 1.05, margin: 0 }}>
        AI systems that work:<br />
        <span style={{ color: '#6b6860' }}>deployed, governed, verified</span>
      </h1>
      <div style={{ width: 36, height: 1, background: '#c8c4bc', margin: '32px 0' }} />
      <p style={{ fontSize: 18, color: '#6b6860', fontWeight: 300, margin: 0 }}>
        RAG · Agentic ERP · AP Automation · Fine-tuning
      </p>
    </div>
  );
}
