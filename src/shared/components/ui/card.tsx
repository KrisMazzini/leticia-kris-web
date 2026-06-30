import type { HTMLAttributes } from "react";
import { cn } from "@/lib/utils";

function Root({ className, ...props }: HTMLAttributes<HTMLDivElement>) {
  return (
    <div
      className={cn(
        "bg-card border border-black/5 rounded-2xl shadow-card overflow-hidden p-5",
        className,
      )}
      {...props}
    />
  );
}

function Body({ className, ...props }: HTMLAttributes<HTMLDivElement>) {
  return <div className={cn("flex flex-col gap-2", className)} {...props} />;
}

export const Card = {
  Root,
  Body,
};
