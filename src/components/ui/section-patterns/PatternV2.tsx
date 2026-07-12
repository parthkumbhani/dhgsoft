import { BRAND_LINEAR_GRAD } from './shared';

export function PatternV2() {
  return (
    <div className="pointer-events-none absolute top-0 left-0 h-[75%] w-[50%] z-[-1] opacity-70 md:opacity-100" aria-hidden="true">
      <svg viewBox="0 0 500 500" preserveAspectRatio="xMinYMin slice" className="w-full h-full">
        <defs>{BRAND_LINEAR_GRAD('v2-grad', true)}</defs>
        <g fill="none" stroke="url(#v2-grad)" strokeWidth="0.7">
          {Array.from({ length: 12 }, (_, i) => {
            const startY = -30 + i * 8;
            const midY = 60 + i * 20;
            const endY = 80 + i * 40;
            return <path key={i} d={`M -30,${startY} Q 100,${midY} 550,${endY}`} />;
          })}
        </g>
      </svg>
    </div>
  );
}
