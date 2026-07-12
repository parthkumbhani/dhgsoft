import React from 'react';

export const BRAND_LINEAR_GRAD = (id: string, reverse = false) => (
  <linearGradient id={id} x1="0%" y1="0%" x2="100%" y2="100%">
    {reverse ? (
      <>
        <stop offset="0%"   stopColor="#B4123F" stopOpacity="0.9" />
        <stop offset="50%"  stopColor="#E11D5C" stopOpacity="0.85" />
        <stop offset="100%" stopColor="#F5B301" stopOpacity="0.75" />
      </>
    ) : (
      <>
        <stop offset="0%"   stopColor="#F5B301" stopOpacity="0.85" />
        <stop offset="45%"  stopColor="#E11D5C" stopOpacity="0.9" />
        <stop offset="100%" stopColor="#B4123F" stopOpacity="1" />
      </>
    )}
  </linearGradient>
);

export const BRAND_RADIAL_GRAD = (id: string) => (
  <radialGradient id={id} cx="50%" cy="50%" r="50%">
    <stop offset="0%"   stopColor="#F5B301" stopOpacity="0.9" />
    <stop offset="50%"  stopColor="#E11D5C" stopOpacity="0.85" />
    <stop offset="100%" stopColor="#B4123F" stopOpacity="0.7" />
  </radialGradient>
);
