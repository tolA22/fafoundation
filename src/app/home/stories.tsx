import HomeSection from "../_shared/ui_components/home_section";
import StoryCard from "../_shared/ui_components/story_card";

export default function FafStories() {
  return (
    <div className="pt-12 px-2 pb-[10em] ">
      <HomeSection title="OUR STORIES" description="Real Impact, Real Lives" />
      <section>
        <StoryCard
          content="“I felt alone and ashamed of my struggles with depression.
            The mental health workshop by Funmilayo Akinrinmisi Foundation opened my eyes and gave me the courage to seek help.
            The support and counseling I received changed my life”"
          fullName="Tunde Akindayomi"
          profession="Tech Professional"
        />
      </section>
    </div>
  );
}
