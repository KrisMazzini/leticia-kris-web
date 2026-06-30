import NextLink from "next/link";
import type { HTMLAttributes } from "react";

import { OpenCartButton } from "@/features/gifts/components/open-cart-button";
import { cn } from "@/lib/utils";

import { Heading, Link } from "./ui";

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
      <NextLink href="/" className="mr-auto no-underline">
        <Heading level="h3">
          L <span className="text-terra">&amp;</span> K
        </Heading>
      </NextLink>

      <nav className="hidden items-center gap-4 sm:flex">
        <Link href="#historia">Nossa história</Link>
        <Link href="#presentes">Lista de presentes</Link>
      </nav>

      <OpenCartButton />
    </header>
  );
}
