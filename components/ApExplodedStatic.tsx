import fs from 'node:fs';
import path from 'node:path';

const svgPath = path.join(process.cwd(), 'public', 'diagrams', 'ap-exploded-static.svg');

function sanitizeSvg(svg: string) {
  return svg
    .replace(/<script[\s\S]*?<\/script>/gi, '')
    .replace(/\son\w+\s*=\s*"[^"]*"/gi, '')
    .replace(/\son\w+\s*=\s*'[^']*'/gi, '');
}

export function staticDiagramExists() {
  return fs.existsSync(svgPath);
}

export function staticDiagramOgPath() {
  const png = path.join(process.cwd(), 'public', 'diagrams', 'ap-exploded-static.png');
  if (fs.existsSync(png)) return '/diagrams/ap-exploded-static.png';
  if (fs.existsSync(svgPath)) return '/diagrams/ap-exploded-static.svg';
  return null;
}

export default function ApExplodedStatic() {
  if (!staticDiagramExists()) return null;
  const svg = sanitizeSvg(fs.readFileSync(svgPath, 'utf8'));

  return (
    <figure style={{ margin: '28px 0 36px' }}>
      <div
        aria-label="Exploded architecture diagram, frozen fully exploded"
        dangerouslySetInnerHTML={{ __html: svg }}
        style={{ width: '100%', border: '1px solid var(--border)' }}
      />
      <figcaption className="mono" style={{ fontSize: 12, color: 'var(--muted)', marginTop: 12, lineHeight: 1.6 }}>
        Every part separates along its projection axis — governance pulls off the request path. Interactive version on the capabilities page.
      </figcaption>
    </figure>
  );
}
