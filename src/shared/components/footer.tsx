import { Divider, Heading, Text } from "./ui";

export function Footer() {
  return (
    <footer className="bg-card border-t border-black/[.07] py-10 px-6 text-center">
      <div className="flex flex-col items-center gap-1.5 mb-6">
        <Heading level="display" className="text-4xl">Letícia & Kris</Heading>
        <Text variant="muted" className="font-script text-xl leading-snug">
          Feito com amor para celebrar nosso lar
        </Text>
      </div>

      <Divider className="max-w-xs mx-auto mb-6" />

      <Text variant="caption">Desenvolvido por Kristopher Mazzini</Text>
    </footer>
  );
}
