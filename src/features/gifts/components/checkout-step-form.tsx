"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";

import { Button, Input, Textarea } from "@/shared/components/ui";

import { useCartContext } from "../context/cart-context";

const schema = z.object({
  name: z.string().min(1, "Nome obrigatório"),
  message: z.string().min(1, "Mensagem obrigatória"),
});

type FormData = z.infer<typeof schema>;

export function CheckoutStepForm() {
  const { setGuestData, goToStep, guestName, guestMessage } = useCartContext();

  const {
    register,
    handleSubmit,
    formState: { errors, isValid },
  } = useForm<FormData>({
    resolver: zodResolver(schema),
    mode: "onChange",
    defaultValues: {
      name: guestName,
      message: guestMessage,
    },
  });

  function onSubmit(data: FormData) {
    setGuestData(data.name, data.message ?? "");
    goToStep(3);
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col flex-1">
      <div className="flex-1 flex flex-col gap-5 px-6 py-6">
        <Input
          id="name"
          label="Seu nome"
          placeholder="Como você quer ser chamado?"
          error={errors.name?.message}
          {...register("name")}
        />
        <Textarea
          id="message"
          label="Mensagem para o casal"
          placeholder="Escreva uma mensagem carinhosa…"
          rows={4}
          {...register("message")}
        />
      </div>

      <div className="px-6 py-5 border-t border-black/8">
        <Button type="submit" size="lg" className="w-full" disabled={!isValid}>
          Ir para pagamento
        </Button>
      </div>
    </form>
  );
}
