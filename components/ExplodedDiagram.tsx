'use client';

const SRC = '/diagrams/ap-exploded.html?state=assembled';

export default function ExplodedDiagram() {
  return (
    <iframe
      src={SRC}
      title="Exploded architecture diagram — AP automation"
      loading="lazy"
      style={{
        display: 'block',
        width: '100%',
        aspectRatio: '16 / 9',
        border: '1px solid var(--border)',
        background: 'var(--bg)',
      }}
    />
  );
}
