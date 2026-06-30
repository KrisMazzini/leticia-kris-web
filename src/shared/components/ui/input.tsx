import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/lib/utils";

const fieldVariants = cva(
  "w-full font-sans text-sm text-ink bg-card border rounded-lg px-3 py-2.5 transition-colors placeholder:text-muted/50",
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

interface InputProps
  extends React.InputHTMLAttributes<HTMLInputElement>,
    VariantProps<typeof fieldVariants> {
  label?: string;
  error?: string;
}

export function Input({
  label,
  error,
  className,
  state,
  id,
  ...props
}: InputProps) {
  return (
    <div className="flex flex-col gap-1.5">
      {label && (
        <label htmlFor={id} className="font-sans font-medium text-sm text-ink">
          {label}
        </label>
      )}
      <input
        id={id}
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
