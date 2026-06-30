"use client";

import { Drawer } from "@base-ui/react";

import { useCartContext } from "../context/cart-context";
import { CartEmpty } from "./cart-empty";
import { CartItem } from "./cart-item";
import { CartTotal } from "./cart-total";
import { CheckoutStepForm } from "./checkout-step-form";
import { CheckoutStepPix } from "./checkout-step-pix";
import { CheckoutStepperHeader } from "./checkout-stepper-header";

export function CartDrawer() {
  const {
    cartItems,
    removeFromCart,
    drawerOpen,
    openDrawer,
    closeDrawer,
    step,
    goToStep,
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
            <CheckoutStepperHeader step={step} goToStep={goToStep} />

            <div
              key={step}
              className="flex-1 flex flex-col overflow-y-auto animate-fade-in"
            >
              {step === 1 && (
                <>
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
                  <CartTotal />
                </>
              )}

              {step === 2 && <CheckoutStepForm />}
              {step === 3 && <CheckoutStepPix />}
            </div>
          </Drawer.Popup>
        </Drawer.Viewport>
      </Drawer.Portal>
    </Drawer.Root>
  );
}
