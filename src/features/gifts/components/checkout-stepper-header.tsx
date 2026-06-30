import { Drawer } from "@base-ui/react";
import { ArrowLeft } from "lucide-react";

import { Stepper } from "@/shared/components/ui";

const STEP_TITLES: Record<1 | 2 | 3, string> = {
  1: "Seu carrinho",
  2: "Seus dados",
  3: "Pagamento",
};

interface CheckoutStepperHeaderProps {
  step: 1 | 2 | 3;
  goToStep: (n: 1 | 2 | 3) => void;
}

export function CheckoutStepperHeader({
  step,
  goToStep,
}: CheckoutStepperHeaderProps) {
  return (
    <div className="flex flex-col px-6 py-4 border-b border-black/[.07]">
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-3">
          {step > 1 && (
            <button
              type="button"
              onClick={() => goToStep((step - 1) as 1 | 2 | 3)}
              className="flex items-center justify-center w-7 h-7 text-muted bg-transparent border-none cursor-pointer hover:text-ink transition-colors"
              aria-label="Voltar"
            >
              <ArrowLeft size={18} />
            </button>
          )}
          <Drawer.Title className="m-0 font-serif font-semibold text-2xl text-ink leading-none">
            {STEP_TITLES[step]}
          </Drawer.Title>
        </div>

        <Drawer.Close className="flex items-center justify-center w-8 h-8 text-2xl text-muted bg-transparent border-none cursor-pointer leading-none">
          ×
        </Drawer.Close>
      </div>

      {step > 1 && (
        <div className="flex justify-center pt-3">
          <Stepper currentStep={step} totalSteps={3} />
        </div>
      )}
    </div>
  );
}
