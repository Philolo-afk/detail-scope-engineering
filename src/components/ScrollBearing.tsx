import { useEffect, useRef, useState } from 'react';

const ScrollBearing = () => {
  const bearingRef = useRef<HTMLDivElement>(null);
  const rotationRef = useRef(0);
  const velocityRef = useRef(0);
  const lastScrollRef = useRef(0);
  const animationFrameRef = useRef<number>();

  useEffect(() => {
    let lastScrollTime = Date.now();

    const handleScroll = () => {
      const currentScroll = window.scrollY;
      const currentTime = Date.now();
      const deltaTime = currentTime - lastScrollTime;
      const deltaScroll = currentScroll - lastScrollRef.current;

      velocityRef.current = (deltaScroll / deltaTime) * 10;

      lastScrollRef.current = currentScroll;
      lastScrollTime = currentTime;
    };

    const animate = () => {
      if (Math.abs(velocityRef.current) > 0.01) {
        rotationRef.current += velocityRef.current;

        velocityRef.current *= 0.92;

        if (bearingRef.current) {
          bearingRef.current.style.transform = `rotate(${rotationRef.current}deg)`;
        }
      }

      animationFrameRef.current = requestAnimationFrame(animate);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    animationFrameRef.current = requestAnimationFrame(animate);

    return () => {
      window.removeEventListener('scroll', handleScroll);
      if (animationFrameRef.current) {
        cancelAnimationFrame(animationFrameRef.current);
      }
    };
  }, []);

  return (
    <div className="fixed bottom-8 left-1/2 transform -translate-x-1/2 z-40 pointer-events-none hidden md:block">
      <div
        ref={bearingRef}
        className="relative w-16 h-16 transition-transform will-change-transform"
        style={{ transformOrigin: 'center' }}
      >
        <svg
          viewBox="0 0 100 100"
          className="w-full h-full drop-shadow-lg"
          style={{ filter: 'drop-shadow(0 4px 6px rgba(0, 0, 0, 0.3))' }}
        >
          <defs>
            <radialGradient id="outerRing" cx="50%" cy="50%">
              <stop offset="0%" stopColor="#8B9DC3" />
              <stop offset="50%" stopColor="#5A6A8A" />
              <stop offset="100%" stopColor="#3E4A5F" />
            </radialGradient>
            <radialGradient id="innerRing" cx="50%" cy="50%">
              <stop offset="0%" stopColor="#B8C5D9" />
              <stop offset="50%" stopColor="#7A8CA8" />
              <stop offset="100%" stopColor="#556477" />
            </radialGradient>
            <radialGradient id="center" cx="50%" cy="50%">
              <stop offset="0%" stopColor="#E8EDF2" />
              <stop offset="50%" stopColor="#A8B5C7" />
              <stop offset="100%" stopColor="#6B7A8F" />
            </radialGradient>
          </defs>

          <circle
            cx="50"
            cy="50"
            r="48"
            fill="url(#outerRing)"
            stroke="#2A3544"
            strokeWidth="1"
          />

          <circle
            cx="50"
            cy="50"
            r="38"
            fill="none"
            stroke="#3E4A5F"
            strokeWidth="1.5"
          />

          {[0, 45, 90, 135, 180, 225, 270, 315].map((angle) => {
            const radian = (angle * Math.PI) / 180;
            const x = 50 + 33 * Math.cos(radian);
            const y = 50 + 33 * Math.sin(radian);
            return (
              <circle
                key={angle}
                cx={x}
                cy={y}
                r="4"
                fill="url(#innerRing)"
                stroke="#2A3544"
                strokeWidth="0.5"
              />
            );
          })}

          <circle
            cx="50"
            cy="50"
            r="28"
            fill="none"
            stroke="#4A5A70"
            strokeWidth="1"
          />

          <circle
            cx="50"
            cy="50"
            r="18"
            fill="url(#center)"
            stroke="#2A3544"
            strokeWidth="1"
          />

          <circle
            cx="50"
            cy="50"
            r="6"
            fill="#556477"
          />

          {[0, 60, 120, 180, 240, 300].map((angle) => (
            <line
              key={angle}
              x1="50"
              y1="50"
              x2={50 + 15 * Math.cos((angle * Math.PI) / 180)}
              y2={50 + 15 * Math.sin((angle * Math.PI) / 180)}
              stroke="#3E4A5F"
              strokeWidth="1.5"
              strokeLinecap="round"
            />
          ))}
        </svg>
      </div>
    </div>
  );
};

export default ScrollBearing;
