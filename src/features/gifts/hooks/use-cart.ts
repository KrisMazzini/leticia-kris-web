"use client";

import { useEffect, useState } from "react";

import { gifts } from "../constants/gifts";
import { readStorageItems } from "../storage/read-items";
import { setStorageItems } from "../storage/set-items";

export function useCart() {
  const [cartIds, setCartIds] = useState<string[]>([]);
  const [drawerOpen, setDrawerOpen] = useState(false);
  const [step, setStep] = useState<1 | 2 | 3>(1);
  const [guestName, setGuestName] = useState("");
  const [guestMessage, setGuestMessage] = useState("");

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

  function clearCart() {
    setCartIds([]);
  }

  function goToStep(n: 1 | 2 | 3) {
    setStep(n);
  }

  function setGuestData(name: string, message: string) {
    setGuestName(name);
    setGuestMessage(message);
  }

  function openDrawer() {
    setDrawerOpen(true);
  }

  function closeDrawer() {
    setDrawerOpen(false);
    setStep(1);
  }

  return {
    cartIds,
    cartItems,
    total,
    isInCart,
    addToCart,
    removeFromCart,
    clearCart,
    drawerOpen,
    openDrawer,
    closeDrawer,
    step,
    goToStep,
    guestName,
    guestMessage,
    setGuestData,
  };
}
