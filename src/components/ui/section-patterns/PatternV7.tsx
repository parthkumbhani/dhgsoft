import React from 'react';

export function PatternV7() {
  return (
    <div className="pointer-events-none absolute top-0 right-0 w-[50%] h-[70%] z-[-1] opacity-70 md:opacity-100" aria-hidden="true">
      <svg viewBox="0 0 500 300" preserveAspectRatio="xMaxYMin slice" className="w-full h-full">
        <defs>
          <linearGradient id="v7-grad" x1="100%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%"   stopColor="#F5B301" stopOpacity="0.9" />
            <stop offset="50%"  stopColor="#E11D5C" stopOpacity="0.9" />
            <stop offset="100%" stopColor="#B4123F" stopOpacity="0.5" />
          </linearGradient>
        </defs>
        <g fill="none" stroke="url(#v7-grad)" strokeWidth="0.7">
          {Array.from({ length: 12 }, (_, i) => {
            const y = -30 + i * 15;
            const cy = 80 + i * 10;
            const endY = 90 + i * 20;
            return <path key={i} d={`M 520,${y} Q 400,${cy} -30,${endY}`} />;
          })}
        </g>
      </svg>
    </div>
  );
}
