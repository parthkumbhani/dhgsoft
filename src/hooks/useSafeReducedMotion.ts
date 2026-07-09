"use client";

import { useSyncExternalStore } from "react";

const REDUCED_MOTION_QUERY = "(prefers-reduced-motion: reduce)";

function subscribe(callback: () => void) {
  if (typeof window === "undefined") {
    return () => {};
  }
  const mediaQueryList = window.matchMedia(REDUCED_MOTION_QUERY);
  mediaQueryList.addEventListener("change", callback);
  return () => {
    mediaQueryList.removeEventListener("change", callback);
  };
}

function getSnapshot() {
  if (typeof window === "undefined") {
    return false;
  }
  return window.matchMedia(REDUCED_MOTION_QUERY).matches;
}

function getServerSnapshot() {
  return false;
}

/**
 * A safe version of framer-motion's useReducedMotion hook that avoids Next.js hydration mismatches.
 * It uses React's useSyncExternalStore to safely read media queries, rendering false during SSR
 * and initial client hydration, then updating to the user's preference without triggering
 * eslint-react-hooks/set-state-in-effect.
 */
export function useSafeReducedMotion() {
  return useSyncExternalStore(subscribe, getSnapshot, getServerSnapshot);
}
