'use client';
import React, { useEffect, useRef, useState } from 'react';

export default function BackgroundBlobs() {
  const [mouse, setMouse] = useState({ x: 0.5, y: 0.5 });
  const rafRef = useRef<number | null>(null);
  const targetRef = useRef({ x: 0.5, y: 0.5 });
  const currentRef = useRef({ x: 0.5, y: 0.5 });

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      targetRef.current = {
        x: e.clientX / window.innerWidth,
        y: e.clientY / window.innerHeight,
      };
    };

    const animate = () => {
      const lerp = (a: number, b: number, t: number) => a + (b - a) * t;
      currentRef.current.x = lerp(currentRef.current.x, targetRef.current.x, 0.04);
      currentRef.current.y = lerp(currentRef.current.y, targetRef.current.y, 0.04);
      setMouse({ x: currentRef.current.x, y: currentRef.current.y });
      rafRef.current = requestAnimationFrame(animate);
    };

    window.addEventListener('mousemove', handleMouseMove, { passive: true });
    rafRef.current = requestAnimationFrame(animate);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      if (rafRef.current) cancelAnimationFrame(rafRef.current);
    };
  }, []);

  const mx = mouse.x;
  const my = mouse.y;

  return (
    <div className="fixed inset-0 pointer-events-none overflow-hidden z-0">
      {/* Grid texture */}
      <div className="absolute inset-0 grid-texture opacity-60 dark:opacity-20" />

      {/* Cursor-following glow */}
      <div
        className="absolute rounded-full transition-none"
        style={{
          width: '500px',
          height: '500px',
          left: `calc(${mx * 100}% - 250px)`,
          top: `calc(${my * 100}% - 250px)`,
          background: 'radial-gradient(circle, rgba(245,158,11,0.13) 0%, transparent 70%)',
          filter: 'blur(60px)',
          transform: 'translate3d(0,0,0)',
        }}
      />

      {/* Amber blob top-right — parallax */}
      <div
        className="blob-1 absolute"
        style={{
          width: '600px',
          height: '600px',
          top: '-100px',
          right: '-100px',
          transform: `translate(${(mx - 0.5) * -30}px, ${(my - 0.5) * -20}px)`,
          transition: 'transform 0.1s linear',
        }}
      />

      {/* Soft orange blob bottom-left — parallax */}
      <div
        className="blob-2 absolute"
        style={{
          width: '500px',
          height: '500px',
          bottom: '20%',
          left: '-150px',
          transform: `translate(${(mx - 0.5) * 25}px, ${(my - 0.5) * 20}px)`,
          transition: 'transform 0.1s linear',
        }}
      />

      {/* Subtle center glow */}
      <div
        className="blob-3 absolute"
        style={{
          width: '800px',
          height: '400px',
          top: '40%',
          left: '50%',
          transform: `translateX(-50%) translate(${(mx - 0.5) * 15}px, ${(my - 0.5) * 10}px)`,
          transition: 'transform 0.1s linear',
        }}
      />

      {/* Extra dark-mode blob */}
      <div
        className="absolute rounded-full hidden dark:block"
        style={{
          width: '700px',
          height: '700px',
          top: '10%',
          left: '30%',
          background: 'radial-gradient(circle, rgba(245,158,11,0.07) 0%, transparent 70%)',
          filter: 'blur(80px)',
          transform: `translate(${(mx - 0.5) * -20}px, ${(my - 0.5) * -15}px)`,
          transition: 'transform 0.1s linear',
        }}
      />
    </div>
  );
}