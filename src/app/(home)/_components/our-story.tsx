import { StoryChaptersList } from "@/features/story/components/story-chapters-list";
import { Heading, Text } from "@/shared/components/ui";

export function OurStory() {
  return (
    <section id="historia" className="bg-card py-20 px-8">
      <div className="max-w-6xl mx-auto">
        <header className="text-center mb-14">
          <Text as="span" variant="label" className="block">
            O começo de tudo
          </Text>

          <Heading level="h2" className="mt-3.5">
            Nossa história
          </Heading>
        </header>

        <StoryChaptersList />
      </div>
    </section>
  );
}
