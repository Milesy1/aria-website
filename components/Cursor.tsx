'use client';
import { useEffect, useRef, useState } from 'react';

export default function Cursor() {
  const dotRef = useRef<HTMLDivElement>(null);
  const tx = useRef(-100);
  const ty = useRef(-100);
  const visible = useRef(false);
  const [show, setShow] = useState(false);

  useEffect(() => {
    // Only show on non-touch devices
    const isTouch = window.matchMedia('(hover: none)').matches;
    if (isTouch) return;
    setShow(true);

    const onMove = (e: MouseEvent) => {
      tx.current = e.clientX;
      ty.current = e.clientY;
      if (!visible.current && dotRef.current) {
        dotRef.current.style.opacity = '0.5';
        visible.current = true;
      }
    };
    const onLeave = () => {
      if (dotRef.current) dotRef.current.style.opacity = '0';
    };
    const onEnter = () => {
      if (dotRef.current) dotRef.current.style.opacity = '0.5';
    };

    window.addEventListener('mousemove', onMove);
    document.documentElement.addEventListener('mouseleave', onLeave);
    document.documentElement.addEventListener('mouseenter', onEnter);

    let x = -100, y = -100, raf: number;
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
      document.documentElement.removeEventListener('mouseleave', onLeave);
      document.documentElement.removeEventListener('mouseenter', onEnter);
      cancelAnimationFrame(raf);
    };
  }, []);

  if (!show) return null;

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
        opacity: 0,
        pointerEvents: 'none',
        zIndex: 9999,
        transition: 'opacity 0.2s',
      }}
    />
  );
}
