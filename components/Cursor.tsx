'use client';
import { useEffect, useRef } from 'react';

export default function Cursor() {
  const dotRef = useRef<HTMLDivElement>(null);
  const tx = useRef(0);
  const ty = useRef(0);

  useEffect(() => {
    const onMove = (e: MouseEvent) => {
      tx.current = e.clientX;
      ty.current = e.clientY;
    };
    window.addEventListener('mousemove', onMove);

    let x = 0, y = 0, raf: number;
    const tick = () => {
      x += (tx.current - x) * 0.55;
      y += (ty.current - y) * 0.55;
      if (dotRef.current) {
        dotRef.current.style.transform = `translate(${x - 4}px, ${y - 4}px)`;
      }
      raf = requestAnimationFrame(tick);
    };
    raf = requestAnimationFrame(tick);

    return () => {
      window.removeEventListener('mousemove', onMove);
      cancelAnimationFrame(raf);
    };
  }, []);

  return (
    <div
      ref={dotRef}
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        width: 8,
        height: 8,
        borderRadius: '50%',
        background: 'var(--text)',
        opacity: 0.35,
        pointerEvents: 'none',
        zIndex: 9999,
        mixBlendMode: 'multiply',
      }}
    />
  );
}
