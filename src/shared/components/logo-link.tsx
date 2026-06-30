"use client";

import NextLink from "next/link";

import { Heading } from "./ui";

export function LogoLink() {
  return (
    <NextLink
      href="/"
      className="mr-auto no-underline"
      onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
    >
      <Heading level="h3">
        L <span className="text-terra">&amp;</span> K
      </Heading>
    </NextLink>
  );
}
