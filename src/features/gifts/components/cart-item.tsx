"use client";

import Image from "next/image";

import { Text } from "@/shared/components/ui";

import type { Gift } from "../types/gift";
import { formatPrice } from "../utils/format-price";

interface CartItemProps {
  gift: Gift;
  onRemove: () => void;
}

export function CartItem({ gift, onRemove }: CartItemProps) {
  return (
    <li className="flex items-center gap-3.5 py-3.5">
      <div className="relative w-16 h-16 rounded-lg overflow-hidden flex-none">
        <Image
          src={gift.image}
          alt={gift.title}
          fill
          className="object-cover"
        />
      </div>

      <div className="flex-1 min-w-0">
        <Text as="span" variant="ui" className="block leading-snug truncate">
          {gift.title}
        </Text>
        <Text
          as="span"
          variant="price"
          className="text-base text-terra mt-1 block"
        >
          {formatPrice(gift.priceInCents)}
        </Text>
      </div>

      <button
        type="button"
        onClick={onRemove}
        className="flex-none font-sans font-medium text-sm text-muted underline underline-offset-2 bg-transparent border-none cursor-pointer p-0 hover:text-ink transition-colors"
      >
        remover
      </button>
    </li>
  );
}
