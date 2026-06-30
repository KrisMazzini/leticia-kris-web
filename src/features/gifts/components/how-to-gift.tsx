import { Card, Heading, Text } from "@/shared/components/ui";

const steps = [
  "Escolha os presentes e adicione ao carrinho.",
  "Deixe seu nome e uma mensagem para o casal.",
  "Pague com PIX pelo QR Code ou copia e cola. Pronto! 🤍",
];

export function HowToGift() {
  return (
    <Card.Root className="p-11">
      <Card.Body className="flex-row flex-wrap gap-8 items-start">
        <div className="flex-1 min-w-64">
          <Heading level="h3">Como presentear</Heading>

          <Text variant="muted" className="mt-2">
            É rapidinho e tudo pelo PIX, do conforto de casa.
          </Text>
        </div>

        <div className="flex-1 min-w-72 flex flex-col gap-4">
          {steps.map((step, i) => (
            <div key={step} className="flex gap-4 items-center">
              <span className="flex-none w-8 h-8 rounded-full bg-terra text-white flex items-center justify-center font-sans font-bold text-sm">
                {i + 1}
              </span>

              <Text as="span" variant="ui" className="leading-relaxed">
                {step}
              </Text>
            </div>
          ))}
        </div>
      </Card.Body>
    </Card.Root>
  );
}
