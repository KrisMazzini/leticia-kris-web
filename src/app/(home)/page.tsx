import { GiftsSection } from "./_components/gifts-section";
import { Hero } from "./_components/hero";
import { OurStory } from "./_components/our-story";

export default function Home() {
  return (
    <main>
      <Hero />
      <OurStory />
      <GiftsSection />
    </main>
  );
}
