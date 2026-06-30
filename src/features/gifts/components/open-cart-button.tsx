"use client";

import { Button } from "@/shared/components/ui";

import { useCartContext } from "../context/cart-context";

export function OpenCartButton() {
  const { cartIds, openDrawer } = useCartContext();

  return (
    <Button size="md" onClick={openDrawer}>
      Carrinho
      {cartIds.length > 0 && (
        <span className="inline-flex items-center justify-center min-w-5 h-5 px-1 rounded-full bg-white text-terra font-bold text-xs">
          {cartIds.length}
        </span>
      )}
    </Button>
  );
}
