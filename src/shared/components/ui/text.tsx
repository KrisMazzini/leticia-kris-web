import { cva, type VariantProps } from "class-variance-authority";
import type { HTMLAttributes } from "react";

import { cn } from "@/lib/utils";

const textVariants = cva("m-0 text-base font-sans", {
  variants: {
    variant: {
      body: "font-serif font-light leading-relaxed text-ink",
      muted: "font-serif font-light leading-relaxed text-muted",
      caption: "text-sm leading-normal text-muted",
      label: "font-semibold tracking-widest uppercase text-terra",
      price: "font-serif font-semibold text-xl text-ink",
      ui: "font-medium text-ink",
    },
  },
  defaultVariants: {
    variant: "body",
  },
});

interface TextProps
  extends HTMLAttributes<HTMLElement>,
    VariantProps<typeof textVariants> {
  as?: "p" | "span" | "div";
}

export function Text({
  className,
  variant,
  as: Tag = "p",
  ...props
}: TextProps) {
  return (
    <Tag className={cn(textVariants({ variant }), className)} {...props} />
  );
}
