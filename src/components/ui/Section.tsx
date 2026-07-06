"use client";

import React from "react";
import { Container } from "./Container";
import { motion, HTMLMotionProps } from "framer-motion";

type SectionProps = HTMLMotionProps<"section"> & {
  variant?: "white" | "mist" | "ink" | "brandTint" | "gradient";
  size?: "default" | "hero" | "compact"; // controls py
  containerSize?: "default" | "wide" | "prose";
  children?: React.ReactNode;
};

export function Section({
  variant = "white",
  size = "default",
  containerSize = "default",
  className = "",
  children,
  ...props
}: SectionProps) {
  const bg =
    variant === "mist"      ? "bg-mist"                                         :
    variant === "ink"       ? "bg-ink text-white"                               :
    variant === "brandTint" ? "bg-brand/5"                                      :
    variant === "gradient"  ? "bg-gradient-to-r from-brand-hot to-brand-deep text-white" :
                              "bg-white";

  const py =
    size === "hero"    ? "py-sec-y-lg md:py-sec-y-lg"    :
    size === "compact" ? "py-12 md:py-16"                :
                          "py-sec-y md:py-sec-y-md";

  return (
    <motion.section className={`relative w-full ${bg} ${py} ${className}`} {...props}>
      <Container size={containerSize}>{children}</Container>
    </motion.section>
  );
}

