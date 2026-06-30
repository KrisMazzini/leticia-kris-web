"use client";

import { Drawer } from "@base-ui/react";

import { useCartContext } from "../context/cart-context";
import { CartEmpty } from "./cart-empty";
import { CartItem } from "./cart-item";
import { CartTotal } from "./cart-total";

export function CartDrawer() {
  const {
    cartItems,
    total,
    removeFromCart,
    drawerOpen,
    openDrawer,
    closeDrawer,
  } = useCartContext();

  return (
    <Drawer.Root
      open={drawerOpen}
      onOpenChange={(open) => (open ? openDrawer() : closeDrawer())}
      swipeDirection="right"
    >
      <Drawer.Portal>
        <Drawer.Backdrop className="fixed inset-0 z-50 bg-ink/40 transition-opacity duration-300 data-starting-style:opacity-0 data-ending-style:opacity-0" />

        <Drawer.Viewport>
          <Drawer.Popup className="fixed inset-y-0 right-0 z-60 flex w-96 max-w-[92vw] flex-col bg-bg shadow-drawer transition-transform duration-300 ease-spring data-starting-style:translate-x-full data-ending-style:translate-x-full">
            <div className="flex items-center justify-between px-6 py-5 border-b border-black/[.07]">
              <Drawer.Title className="m-0 font-serif font-semibold text-2xl text-ink leading-none">
                Seu carrinho
              </Drawer.Title>

              <Drawer.Close className="flex items-center justify-center w-8 h-8 text-2xl text-muted bg-transparent border-none cursor-pointer leading-none">
                ×
              </Drawer.Close>
            </div>

            <div className="flex-1 overflow-y-auto px-6 py-4">
              {cartItems.length === 0 ? (
                <CartEmpty />
              ) : (
                <ul className="flex flex-col divide-y divide-black/6">
                  {cartItems.map((gift) => (
                    <CartItem
                      key={gift.id}
                      gift={gift}
                      onRemove={() => removeFromCart(gift.id)}
                    />
                  ))}
                </ul>
              )}
            </div>

            {cartItems.length > 0 && <CartTotal total={total} />}
          </Drawer.Popup>
        </Drawer.Viewport>
      </Drawer.Portal>
    </Drawer.Root>
  );
}
