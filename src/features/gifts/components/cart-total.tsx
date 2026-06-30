import { Text } from "@/shared/components/ui";

import { formatPrice } from "../utils/format-price";

interface CartTotalProps {
  total: number;
}

export function CartTotal({ total }: CartTotalProps) {
  return (
    <div className="bg-card px-6 py-5 border-t border-black/8">
      <div className="flex items-baseline justify-between mb-4">
        <Text
          as="span"
          variant="muted"
          className="font-sans font-medium text-base"
        >
          Total
        </Text>
        <Text as="span" variant="price" className="text-3xl">
          {formatPrice(total)}
        </Text>
      </div>

      <button
        type="button"
        className="w-full bg-terra text-white font-sans font-semibold text-base py-4 rounded-lg border-none cursor-pointer hover:opacity-90 transition-opacity"
      >
        Finalizar
      </button>
    </div>
  );
}
