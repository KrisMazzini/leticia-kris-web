import Image from "next/image";

import { cn } from "@/lib/utils";
import { Heading, Text } from "@/shared/components/ui";

import type { Chapter } from "../types/chapter";

interface StoryChapterProps {
  chapter: Chapter;
  index: number;
}

export function StoryChapter({ chapter, index }: StoryChapterProps) {
  const imageOnLeft = index % 2 === 0;

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 items-center gap-11">
      <div className={cn(!imageOnLeft && "md:text-right")}>
        <span className="block font-script font-semibold text-6xl text-olive leading-none">
          {String(index + 1).padStart(2, "0")}
        </span>

        <Heading level="h3" className="mt-1.5 mb-3">
          {chapter.title}
        </Heading>

        <Text variant="muted" className={cn(imageOnLeft && "md:ml-auto")}>
          {chapter.description}
        </Text>
      </div>

      <div
        className={cn(
          "relative h-80 rounded-2xl overflow-hidden bg-bg",
          imageOnLeft && "md:order-first",
        )}
      >
        <Image
          src={chapter.image}
          alt={chapter.title}
          fill
          className="object-cover"
        />
      </div>
    </div>
  );
}
