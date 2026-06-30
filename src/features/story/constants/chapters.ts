import birthday from "@/assets/birthday.jpeg";
import cachu from "@/assets/cachu.jpeg";
import quad from "@/assets/quad.jpeg";

import type { Chapter } from "../types/chapter";

export const chapters: Chapter[] = [
  {
    title: "Quando nos conhecemos",
    description:
      "Foi num dia comum que tudo mudou. Um sorriso, uma conversa, e o tempo parou por um instante. A gente não sabia ainda, mas aquele era o começo de algo muito especial.",
    image: cachu.src,
  },
  {
    title: "Construindo um nós",
    description:
      "Com o tempo, fomos descobrindo que o melhor lugar do mundo era ao lado um do outro. Cada pequeno momento virou memória, e cada memória virou parte de quem somos.",
    image: quad.src,
  },
  {
    title: "Nosso novo lar",
    description:
      "Agora chegou a hora de transformar quatro paredes em um lar de verdade. Com amor, com carinho e, com sorte, com a ajuda de quem a gente ama.",
    image: birthday.src,
  },
];
