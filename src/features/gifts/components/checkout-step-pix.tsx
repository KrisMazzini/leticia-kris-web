"use client";

import { Check, Copy } from "lucide-react";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { useState } from "react";

import qrcodePix from "@/assets/qrcode-pix.png";

import { Button, Divider, Text } from "@/shared/components/ui";
import { PIX_KEY } from "../constants/pix";
import { useCartContext } from "../context/cart-context";
import { formatPrice } from "../utils/format-price";

function buildWhatsAppUrl(
  name: string,
  message: string,
  items: string[],
): string {
  const bulletList = items.map((item) => `• ${item}`).join("\n");
  const lines = [
    "Olá, Letícia & Kris",
    "",
    message,
    "",
    "E por isso, gostaria de presenteá-los com",
    "",
    bulletList,
    "",
    `Com carinho, ${name}.`,
  ];
  return `https://wa.me/5532991800066?text=${encodeURIComponent(lines.join("\n"))}`;
}

export function CheckoutStepPix() {
  const {
    cartItems,
    total,
    guestName,
    guestMessage,
    clearCart,
    closeDrawer,
    setGuestData,
  } = useCartContext();
  const router = useRouter();
  const [copied, setCopied] = useState(false);

  async function handleCopy() {
    await navigator.clipboard.writeText(PIX_KEY);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  }

  function handleConfirm() {
    const url = buildWhatsAppUrl(
      guestName,
      guestMessage,
      cartItems.map((g) => g.title),
    );
    clearCart();
    setGuestData("", "");
    closeDrawer();
    router.push("/sucesso");
    window.open(url, "_blank");
  }

  return (
    <div className="flex flex-col flex-1">
      <div className="flex-1 flex flex-col gap-6 px-6 py-6 overflow-y-auto">
        <div className="flex flex-col gap-2">
          <Text as="span" variant="label">
            Resumo
          </Text>
          <ul className="flex flex-col divide-y divide-black/6">
            {cartItems.map((gift) => (
              <li
                key={gift.id}
                className="flex items-center justify-between py-2.5"
              >
                <Text as="span" variant="body" className="text-sm">
                  {gift.title}
                </Text>
                <Text
                  as="span"
                  variant="muted"
                  className="text-sm shrink-0 ml-4"
                >
                  {formatPrice(gift.priceInCents)}
                </Text>
              </li>
            ))}
          </ul>
          <div className="flex items-center justify-between pt-1">
            <Text
              as="span"
              variant="muted"
              className="font-sans font-medium text-sm"
            >
              Total
            </Text>
            <Text as="span" variant="price" className="text-lg">
              {formatPrice(total)}
            </Text>
          </div>
        </div>

        <Divider className="w-full" />

        <div className="flex flex-col gap-2 w-full">
          <Text as="span" variant="label">
            Chave PIX
          </Text>
          <div className="flex items-center gap-2 bg-card border border-black/10 rounded-lg px-3 py-2.5">
            <span className="flex-1 font-sans text-xs text-muted truncate">
              {PIX_KEY}
            </span>
            <button
              type="button"
              onClick={handleCopy}
              className="shrink-0 text-muted hover:text-ink transition-colors cursor-pointer border-none bg-transparent"
              aria-label="Copiar chave PIX"
            >
              {copied ? (
                <Check size={16} className="text-olive" />
              ) : (
                <Copy size={16} />
              )}
            </button>
          </div>
        </div>

        <Divider className="w-full">ou</Divider>

        <div className="flex flex-col gap-3 w-full">
          <Text as="span" variant="label">
            Escaneie o QR Code
          </Text>

          <Image
            src={qrcodePix}
            alt="QR Code PIX"
            className="p-2 bg-white w-48 h-48 mx-auto rounded-xl border border-black/8"
          />
        </div>

        <Divider className="w-full">ou</Divider>

        <Text variant="caption" className="text-center">
          Caso prefira utilizar cartão de crédito, entre em contato com o casal
        </Text>
      </div>

      <div className="px-6 py-5 border-t border-black/8 flex flex-col gap-3">
        <Text variant="caption" className="text-center">
          Após realizar o pagamento, clique em{" "}
          <strong className="font-semibold text-ink">Notificar casal</strong>{" "}
          para que o casal receba a sua mensagem.
        </Text>

        <Button size="lg" className="w-full" onClick={handleConfirm}>
          Notificar casal
        </Button>
      </div>
    </div>
  );
}
