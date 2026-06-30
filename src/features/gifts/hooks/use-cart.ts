"use client";

import { useEffect, useState } from "react";

import { gifts } from "../constants/gifts";

import { readStorageItems } from "../storage/read-items";
import { setStorageItems } from "../storage/set-items";

export function useCart() {
  const [cartIds, setCartIds] = useState<string[]>([]);
  const [drawerOpen, setDrawerOpen] = useState(false);

  useEffect(() => {
    setCartIds(readStorageItems());
  }, []);

  useEffect(() => {
    setStorageItems(cartIds);
  }, [cartIds]);

  const cartItems = gifts.filter((gift) => isInCart(gift.id));
  const total = cartItems.reduce((sum, gift) => sum + gift.priceInCents, 0);

  function isInCart(id: string) {
    return cartIds.includes(id);
  }

  function addToCart(id: string) {
    setCartIds((prev) => (prev.includes(id) ? prev : [...prev, id]));
  }

  function removeFromCart(id: string) {
    setCartIds((prev) => prev.filter((cartId) => cartId !== id));
  }

  function openDrawer() {
    setDrawerOpen(true);
  }

  function closeDrawer() {
    setDrawerOpen(false);
  }

  return {
    cartIds,
    cartItems,
    total,
    isInCart,
    addToCart,
    removeFromCart,
    drawerOpen,
    openDrawer,
    closeDrawer,
  };
}
