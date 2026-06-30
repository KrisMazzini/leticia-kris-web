"use client";

import { Link } from "./ui";

const NAV_ITEMS = [
  { label: "Nossa história", id: "historia" },
  { label: "Lista de presentes", id: "presentes" },
];

export function NavLinks() {
  function scrollTo(id: string) {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  }

  return (
    <>
      {NAV_ITEMS.map(({ label, id }) => (
        <Link
          key={id}
          href={`#${id}`}
          onClick={(e) => {
            e.preventDefault();
            scrollTo(id);
          }}
        >
          {label}
        </Link>
      ))}
    </>
  );
}
