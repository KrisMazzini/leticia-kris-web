import { Button, Text } from "@/shared/components/ui";

import { useCartContext } from "../context/cart-context";
import { formatPrice } from "../utils/format-price";

export function CartTotal() {
  const { total, cartItems, goToStep } = useCartContext();

  if (cartItems.length === 0) return null;

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

      <Button size="lg" className="w-full" onClick={() => goToStep(2)}>
        Prosseguir com a compra
      </Button>
    </div>
  );
}
