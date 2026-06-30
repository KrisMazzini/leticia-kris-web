import type { HTMLAttributes } from "react";

import { OpenCartButton } from "@/features/gifts/components/open-cart-button";
import { cn } from "@/lib/utils";

import { LogoLink } from "./logo-link";
import { NavLinks } from "./nav-links";

interface HeaderProps extends HTMLAttributes<HTMLElement> {}

export function Header({ className, ...props }: HeaderProps) {
  return (
    <header
      className={cn(
        "sticky top-0 z-40 flex items-center gap-4",
        "px-6 py-3 border-b border-black/5",
        "backdrop-blur-md bg-bg/85 font-sans",
        className,
      )}
      {...props}
    >
      <LogoLink />

      <nav className="hidden items-center gap-4 sm:flex">
        <NavLinks />
      </nav>

      <OpenCartButton />
    </header>
  );
}
