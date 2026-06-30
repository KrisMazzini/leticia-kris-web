import { cva, type VariantProps } from "class-variance-authority";
import NextLink, { type LinkProps as NextLinkProps } from "next/link";

import { cn } from "@/lib/utils";

const linkVariants = cva("", {
  variants: {
    variant: {
      nav: "font-sans font-medium text-sm text-ink no-underline hover:text-terra transition-colors",
      inline:
        "font-serif text-terra underline underline-offset-2 hover:opacity-80 transition-opacity",
      muted:
        "font-sans font-medium text-sm text-muted underline hover:text-ink transition-colors",
    },
  },
  defaultVariants: {
    variant: "nav",
  },
});

interface LinkProps extends NextLinkProps, VariantProps<typeof linkVariants> {
  className?: string;
  children?: React.ReactNode;
}

export function Link({ className, variant, ...props }: LinkProps) {
  return (
    <NextLink className={cn(linkVariants({ variant }), className)} {...props} />
  );
}
