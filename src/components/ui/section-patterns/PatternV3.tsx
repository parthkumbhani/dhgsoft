import React from 'react';

export function PatternV3() {
  return (
    <div className="pointer-events-none absolute top-0 left-0 w-full h-[40%] z-[-1] opacity-70 md:opacity-100" aria-hidden="true">
      <svg viewBox="0 0 1200 200" preserveAspectRatio="none" className="w-full h-full">
        <defs>
          <linearGradient id="v3-grad" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%"   stopColor="#B4123F" stopOpacity="0.85" />
            <stop offset="50%"  stopColor="#E11D5C" stopOpacity="0.9" />
            <stop offset="100%" stopColor="#F5B301" stopOpacity="0.85" />
          </linearGradient>
        </defs>
        <g fill="none" stroke="url(#v3-grad)" strokeWidth="0.8">
          {Array.from({ length: 8 }, (_, i) => {
            const y = 20 + i * 18;
            return <path key={i} d={`M 0,${y} Q 300,${y - 30} 600,${y + 10} T 1200,${y}`} />;
          })}
        </g>
      </svg>
    </div>
  );
}
