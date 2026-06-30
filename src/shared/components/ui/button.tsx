import { cva, type VariantProps } from "class-variance-authority";
import type { ButtonHTMLAttributes } from "react";

import { cn } from "@/lib/utils";

const buttonVariants = cva(
  "inline-flex items-center justify-center gap-2 font-sans font-semibold border rounded-full transition-opacity cursor-pointer disabled:opacity-50 disabled:cursor-not-allowed",
  {
    variants: {
      variant: {
        primary: "bg-terra border-terra text-white hover:opacity-90",
        outline:
          "border-olive text-olive bg-transparent not-disabled:hover:bg-olive/10",
        ghost:
          "border-transparent bg-transparent text-muted not-disabled:hover:text-ink",
      },
      size: {
        sm: "text-xs px-3 py-2",
        md: "text-sm px-4 py-2",
        lg: "text-base px-8 py-4",
      },
    },
    defaultVariants: {
      variant: "primary",
      size: "md",
    },
  },
);

interface ButtonProps
  extends ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {}

export function Button({ className, variant, size, ...props }: ButtonProps) {
  return (
    <button
      className={cn(buttonVariants({ variant, size }), className)}
      {...props}
    />
  );
}
