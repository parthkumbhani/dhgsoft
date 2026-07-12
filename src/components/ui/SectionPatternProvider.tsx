'use client';

import React, { createContext, useContext, useRef, useEffect } from 'react';
import { usePathname } from 'next/navigation';

const Ctx = createContext<{ next: () => number }>({ next: () => 1 });

export function SectionPatternProvider({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();
  const counterRef = useRef(0);

  // Reset pattern cycle counter whenever user navigates to a new page
  useEffect(() => {
    counterRef.current = 0;
  }, [pathname]);

  const next = () => {
    const val = (counterRef.current % 8) + 1;
    counterRef.current++;
    return val;
  };

  return <Ctx.Provider value={{ next }}>{children}</Ctx.Provider>;
}

export const usePatternCycle = () => useContext(Ctx);
