import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/lib/utils";

const fieldVariants = cva(
  "w-full font-sans text-sm text-ink bg-card border rounded-lg px-3 py-2.5 transition-colors placeholder:text-muted/50 resize-none",
  {
    variants: {
      state: {
        default: "border-black/15",
        error: "border-terra",
      },
    },
    defaultVariants: { state: "default" },
  },
);

interface TextareaProps
  extends React.TextareaHTMLAttributes<HTMLTextAreaElement>,
    VariantProps<typeof fieldVariants> {
  label?: string;
  error?: string;
}

export function Textarea({
  label,
  error,
  className,
  state,
  id,
  rows = 3,
  ...props
}: TextareaProps) {
  return (
    <div className="flex flex-col gap-1.5">
      {label && (
        <label htmlFor={id} className="font-sans font-medium text-sm text-ink">
          {label}
        </label>
      )}
      <textarea
        id={id}
        rows={rows}
        className={cn(
          fieldVariants({ state: error ? "error" : state }),
          className,
        )}
        {...props}
      />
      {error && <span className="font-sans text-xs text-terra">{error}</span>}
    </div>
  );
}
