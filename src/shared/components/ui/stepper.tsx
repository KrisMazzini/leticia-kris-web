import { cn } from "@/lib/utils";

interface StepperProps {
  currentStep: number;
  totalSteps: number;
}

export function Stepper({ currentStep, totalSteps }: StepperProps) {
  return (
    <div className="flex items-center">
      {Array.from({ length: totalSteps }, (_, i) => {
        const step = i + 1;
        const isActive = step === currentStep;
        const isCompleted = step < currentStep;

        return (
          <div key={step} className="flex items-center">
            <div
              className={cn(
                "w-5 h-5 rounded-full flex items-center justify-center text-xs font-sans font-semibold transition-colors",
                isCompleted && "bg-olive text-white",
                isActive && "bg-terra text-white",
                !isActive && !isCompleted && "bg-black/10 text-muted",
              )}
            >
              {step}
            </div>
            {step < totalSteps && (
              <div
                className={cn(
                  "w-6 h-px transition-colors",
                  isCompleted ? "bg-olive" : "bg-black/10",
                )}
              />
            )}
          </div>
        );
      })}
    </div>
  );
}
