import Image from "next/image";

import hero from "@/assets/hero.jpeg";

import { InfoCard } from "@/shared/components/info-card";
import { Heading, Text } from "@/shared/components/ui";

export function Hero() {
  return (
    <section className="flex flex-wrap items-center gap-12 min-h-[90dvh] max-w-6xl mx-auto px-8 pt-8 pb-12 md:pt-16 md:pb-20">
      <div className="flex-1 min-w-80">
        <Text as="span" variant="label" className="m-0 mb-5">
          Chá de Casa Nova
        </Text>

        <Heading level="display" className="text-6xl md:text-8xl">
          Letícia <span className="text-terra">&amp;</span> Kris
        </Heading>

        <Text as="p" variant="body" className="text-xl mt-6 mb-0 max-w-md">
          Estamos começando uma vida juntos sob o mesmo teto e gostaríamos muito
          da sua presença e carinho nesse momento especial.
        </Text>

        <div className="grid grid-cols-[repeat(auto-fill,minmax(300px,1fr))] gap-3.5 mt-8">
          <InfoCard label="Data & Horário" value="A combinar" />
          <InfoCard
            label="Local"
            value="R. Octavio Malvaccini, 580, Apto 1601 Bl. 2"
          />
        </div>
      </div>

      <div className="flex-1 min-w-72 relative">
        <div className="absolute top-5 -right-5 -bottom-5 left-5 border-2 border-terra/50 rounded-xl pointer-events-none" />
        <div className="relative w-full h-96 md:h-[460px] rounded-xl overflow-hidden border-2 border-dashed border-muted/50">
          <Image
            src={hero}
            alt="Letícia e Kris"
            fill
            priority
            className="object-cover"
          />
        </div>
      </div>
    </section>
  );
}
