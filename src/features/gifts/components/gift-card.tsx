"use client";

import Image from "next/image";

import { Button, Heading, Text } from "@/shared/components/ui";

import { useCartContext } from "../context/cart-context";
import type { Gift } from "../types/gift";
import { formatPrice } from "../utils/format-price";

export function GiftCard({ gift }: { gift: Gift }) {
  const { isInCart, addToCart, removeFromCart } = useCartContext();
  const inCart = isInCart(gift.id);

  return (
    <div className="bg-card border border-black/5 rounded-2xl shadow-card overflow-hidden flex flex-col">
      <div className="relative w-full h-48 flex-none">
        <Image
          src={gift.image}
          alt={gift.title}
          fill
          className="object-cover"
        />
      </div>

      <div className="flex flex-col flex-1 gap-2 px-5 pt-5 pb-5">
        <Text as="span" variant="label" className={"text-olive"}>
          {gift.category}
        </Text>
        <Heading level="h4">{gift.title}</Heading>
        <Text variant="muted" className="flex-1 text-sm">
          {gift.description}
        </Text>

        <div className="flex items-center justify-between gap-2.5 mt-2">
          <Text variant="price">{formatPrice(gift.priceInCents)}</Text>
          <Button
            variant={inCart ? "outline" : "primary"}
            size="md"
            onClick={() =>
              inCart ? removeFromCart(gift.id) : addToCart(gift.id)
            }
          >
            {inCart ? "Adicionado ✓" : "Presentear"}
          </Button>
        </div>
      </div>
    </div>
  );
}
