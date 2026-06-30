import { Heart } from "lucide-react";
import Link from "next/link";

import { cn } from "@/lib/utils";
import { Heading, Text } from "@/shared/components/ui";
import { buttonVariants } from "@/shared/components/ui/button";

export default function SuccessPage() {
  return (
    <main className="flex flex-col items-center justify-center min-h-[80dvh] px-6 text-center">
      <div className="flex flex-col items-center gap-6 max-w-md">
        <div className="flex items-center justify-center w-16 h-16 rounded-full bg-terra/10">
          <Heart size={32} className="text-terra fill-terra" />
        </div>

        <div className="flex flex-col gap-3">
          <Heading level="h1" className="text-4xl">
            Que presente lindo!
          </Heading>
          <Text variant="muted" className="text-lg leading-relaxed">
            O casal já foi notificado. Muito obrigado pelo carinho ♡
          </Text>
        </div>

        <Link
          href="/"
          className={cn(buttonVariants({ variant: "outline", size: "md" }))}
        >
          Voltar para o início
        </Link>
      </div>
    </main>
  );
}
