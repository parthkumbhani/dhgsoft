"use client";

import React from "react";
import { Container } from "./Container";
import { motion, HTMLMotionProps } from "framer-motion";
import * as Patterns from "./section-patterns";

type SectionProps = HTMLMotionProps<"section"> & {
  variant?: "white" | "mist" | "ink" | "brandTint" | "gradient";
  size?: "default" | "hero" | "compact" | "snug"; // controls py — snug = between compact and default
  containerSize?: "default" | "wide" | "prose";
  pattern?: "none" | "v1" | "v2" | "v3" | "v4" | "v5" | "v6" | "v7" | "v8";
  children?: React.ReactNode;
};

export function Section({
  variant = "white",
  size = "default",
  containerSize = "default",
  pattern = "none",
  className = "",
  children,
  ...props
}: SectionProps) {
  const bg =
    variant === "mist"      ? "bg-mist bg-tech-grid"                                         :
    variant === "ink"       ? "bg-mesh-glow-dark bg-tech-grid text-white"                               :
    variant === "brandTint" ? "bg-brand/5 bg-dot-matrix"                                      :
    variant === "gradient"  ? "bg-gradient-to-r from-brand-hot to-brand-deep text-white bg-tech-grid" :
                              "bg-mesh-glow-light bg-dot-matrix text-foreground";

  const py =
    size === "hero"    ? "py-sec-y-lg md:py-sec-y-lg"    :
    size === "compact" ? "py-12 md:py-16"                :
    size === "snug"    ? "py-14 md:py-20"                :
                          "py-sec-y md:py-sec-y-md";

  const PatternComponent = 
    pattern === "v1" ? <Patterns.PatternV1 /> :
    pattern === "v2" ? <Patterns.PatternV2 /> :
    pattern === "v3" ? <Patterns.PatternV3 /> :
    pattern === "v4" ? <Patterns.PatternV4 /> :
    pattern === "v5" ? <Patterns.PatternV5 /> :
    pattern === "v6" ? <Patterns.PatternV6 /> :
    pattern === "v7" ? <Patterns.PatternV7 /> :
    pattern === "v8" ? <Patterns.PatternV8 /> :
    null;

  return (
    <motion.section className={`dhg-section relative w-full ${bg} ${py} ${className}`} {...props}>
      {PatternComponent}
      <Container size={containerSize}>{children}</Container>
    </motion.section>
  );
}
