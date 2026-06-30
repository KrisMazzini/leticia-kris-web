import { Heading, Text } from "@/shared/components/ui";

export function CartEmpty() {
  return (
    <div className="flex flex-col items-center justify-center py-16 text-center px-4">
      <Heading level="h4" className="text-ink">
        Carrinho vazio
      </Heading>

      <Text variant="muted" className="mt-2.5">
        Escolha um presente na lista para começar.
      </Text>
    </div>
  );
}
