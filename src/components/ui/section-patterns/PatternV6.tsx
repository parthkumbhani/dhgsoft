import { BRAND_LINEAR_GRAD } from './shared';

export function PatternV6() {
  return (
    <div className="pointer-events-none absolute inset-0 z-[-1] opacity-70 md:opacity-100" aria-hidden="true">
      <svg viewBox="0 0 1200 400" preserveAspectRatio="none" className="w-full h-full">
        <defs>{BRAND_LINEAR_GRAD('v6-grad', true)}</defs>
        <g fill="none" stroke="url(#v6-grad)" strokeWidth="0.6" opacity="0.75">
          {Array.from({ length: 12 }, (_, i) => {
            const start = -100 + i * 30;
            return <path key={i} d={`M -50,${start} L 1250,${start + 400}`} />;
          })}
          {Array.from({ length: 6 }, (_, i) => {
            const start = i * 60;
            return <path key={`b${i}`} d={`M 1250,${start} L -50,${start + 340}`} />;
          })}
        </g>
      </svg>
    </div>
  );
}
