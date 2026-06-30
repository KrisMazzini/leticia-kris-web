import { GiftList } from "@/features/gifts/components/gift-list";
import { HowToGift } from "@/features/gifts/components/how-to-gift";
import { Heading, Text } from "@/shared/components/ui";

export function GiftsSection() {
  return (
    <section
      id="presentes"
      className="flex flex-col space-y-8 max-w-6xl mx-auto px-8 pt-20 pb-10"
    >
      <header className="text-center max-w-xl mx-auto">
        <Text as="span" variant="label" className="block">
          Para o nosso cantinho
        </Text>

        <Heading level="h2" className="mt-3.5 mb-4">
          Lista de presentes
        </Heading>

        <Text variant="muted" className="text-lg leading-relaxed">
          Escolha um ou mais presentes, adicione ao carrinho e finalize com um
          PIX. O mais importante é a sua presença — o presente é só um carinho a
          mais. 🤍
        </Text>
      </header>

      <GiftList />

      <HowToGift />
    </section>
  );
}
