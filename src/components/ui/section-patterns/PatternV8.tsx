import React from 'react';

export function PatternV8() {
  return (
    <div className="pointer-events-none absolute top-0 left-0 h-full w-[35%] z-[-1] opacity-70 md:opacity-100" aria-hidden="true">
      <svg viewBox="0 0 350 700" preserveAspectRatio="xMinYMid slice" className="w-full h-full">
        <defs>
          <linearGradient id="v8-grad" x1="0%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%"   stopColor="#F5B301" stopOpacity="0.7" />
            <stop offset="50%"  stopColor="#E11D5C" stopOpacity="0.9" />
            <stop offset="100%" stopColor="#B4123F" stopOpacity="1" />
          </linearGradient>
        </defs>
        <g fill="none" stroke="url(#v8-grad)" strokeWidth="0.7">
          {Array.from({ length: 10 }, (_, i) => {
            const startX = 40 + i * 20;
            const endX = 60 + i * 20;
            const midX = startX + 70;
            return <path key={i} d={`M ${startX},-30 Q ${midX},350 ${endX},760`} />;
          })}
        </g>
      </svg>
    </div>
  );
}
