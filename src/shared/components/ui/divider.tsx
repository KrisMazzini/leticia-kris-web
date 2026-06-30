import { Separator } from "@base-ui/react";
import { cn } from "@/lib/utils";

interface DividerProps {
  children?: React.ReactNode;
  className?: string;
}

export function Divider({ children, className }: DividerProps) {
  if (!children) {
    return (
      <Separator className={cn("border-none h-px bg-black/10", className)} />
    );
  }

  return (
    <div className={cn("flex items-center gap-3", className)}>
      <Separator className="flex-1 border-none h-px bg-black/10" />
      <span className="font-sans text-sm text-muted">{children}</span>
      <Separator className="flex-1 border-none h-px bg-black/10" />
    </div>
  );
}
