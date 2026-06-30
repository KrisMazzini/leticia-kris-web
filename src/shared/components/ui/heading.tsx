import { cva, type VariantProps } from "class-variance-authority";
import type { HTMLAttributes } from "react";

import { cn } from "@/lib/utils";

const headingVariants = cva(
  "m-0 text-ink font-serif font-semibold leading-none",
  {
    variants: {
      level: {
        display: "font-script text-8xl",
        h1: "text-5xl",
        h2: "text-3xl",
        h3: "text-2xl",
        h4: "text-xl ",
      },
    },
    defaultVariants: {
      level: "h2",
    },
  },
);

const tagMap = {
  display: "h1",
  h1: "h1",
  h2: "h2",
  h3: "h3",
  h4: "h4",
} as const;

interface HeadingProps
  extends HTMLAttributes<HTMLHeadingElement>,
    VariantProps<typeof headingVariants> {}

export function Heading({ className, level = "h2", ...props }: HeadingProps) {
  const Tag = tagMap[level ?? "h2"];
  return (
    <Tag className={cn(headingVariants({ level }), className)} {...props} />
  );
}
