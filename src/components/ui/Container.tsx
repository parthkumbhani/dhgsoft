import React from "react";

type ContainerProps = React.HTMLAttributes<HTMLDivElement> & {
  size?: "default" | "wide" | "prose";
  as?: React.ElementType;
};

export function Container({ size = "default", as: Tag = "div", className = "", ...props }: ContainerProps) {
  const sizeClass =
    size === "wide"  ? "max-w-site-wide" :
    size === "prose" ? "max-w-prose"     :
                       "max-w-site";
  return (
    <Tag
      className={`mx-auto w-full px-gutter md:px-gutter-md ${sizeClass} ${className}`}
      {...props}
    />
  );
}
