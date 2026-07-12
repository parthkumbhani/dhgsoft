import { BRAND_RADIAL_GRAD } from './shared';

export function PatternV5() {
  return (
    <div className="pointer-events-none absolute top-0 right-[-100px] h-full w-[60%] z-[-1] opacity-70 md:opacity-100" aria-hidden="true">
      <svg viewBox="0 0 500 500" preserveAspectRatio="xMidYMid slice" className="w-full h-full">
        <defs>{BRAND_RADIAL_GRAD('v5-grad')}</defs>
        <g fill="none" stroke="url(#v5-grad)" strokeWidth="0.7">
          {Array.from({ length: 10 }, (_, i) => (
            <circle key={i} cx="350" cy="250" r={50 + i * 30} />
          ))}
        </g>
      </svg>
    </div>
  );
}
