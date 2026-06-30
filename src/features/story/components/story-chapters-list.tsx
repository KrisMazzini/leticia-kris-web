import { chapters } from "../constants/chapters";
import { StoryChapter } from "./story-chapter";

export function StoryChaptersList() {
  return (
    <div className="flex flex-col gap-16">
      {chapters.map((chapter, index) => (
        <StoryChapter key={chapter.title} chapter={chapter} index={index} />
      ))}
    </div>
  );
}
