import React from 'react';

export function PatternV4() {
  return (
    <div className="pointer-events-none absolute bottom-0 left-0 w-full h-[55%] z-[-1] opacity-70 md:opacity-100" aria-hidden="true">
      <svg viewBox="0 0 1200 250" preserveAspectRatio="none" className="w-full h-full">
        <defs>
          <linearGradient id="v4-grad" x1="0%" y1="100%" x2="100%" y2="0%">
            <stop offset="0%"   stopColor="#B4123F" stopOpacity="0.9" />
            <stop offset="50%"  stopColor="#E11D5C" stopOpacity="0.85" />
            <stop offset="100%" stopColor="#F5B301" stopOpacity="0.75" />
          </linearGradient>
        </defs>
        <g fill="none" stroke="url(#v4-grad)" strokeWidth="0.7">
          {Array.from({ length: 10 }, (_, i) => {
            const baseY = 200 - i * 20;
            return <path key={i} d={`M 0,${baseY + 20} Q 200,${baseY - 40} 400,${baseY - 10} T 800,${baseY - 30} T 1200,${baseY}`} />;
          })}
        </g>
      </svg>
    </div>
  );
}
