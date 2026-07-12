import { BRAND_LINEAR_GRAD } from './shared';

export function PatternV1() {
  return (
    <div className="pointer-events-none absolute top-0 right-0 h-full w-[55%] z-[-1] opacity-70 md:opacity-100" aria-hidden="true">
      <svg viewBox="0 0 600 700" preserveAspectRatio="xMaxYMid slice" className="w-full h-full">
        <defs>{BRAND_LINEAR_GRAD('v1-grad')}</defs>
        <g fill="none" stroke="url(#v1-grad)" strokeWidth="0.7">
          {Array.from({ length: 30 }, (_, i) => {
            const startX = 620 - i * 20;
            const controlY = 150 + i * 15;
            const endX = 640 - i * 5;
            return <path key={i} d={`M ${startX},-50 Q 720,${controlY} ${endX},760`} />;
          })}
        </g>
      </svg>
    </div>
  );
}
