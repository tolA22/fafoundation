import HomeSection from "../_shared/ui_components/home_section";
import StoryCard from "../_shared/ui_components/story_card";

export default function FafStories() {
  return (
    <div className="pt-12 px-2 pb-[10em] mt-24">
      <HomeSection
        title="OUR STORIES"
        description="Real Impact, Real Lives"
        center
      />
      <section className="flex gap-4 mt-4 overflow-auto">
        <StoryCard
          content="“I felt alone and ashamed of my struggles with depression.
            The mental health workshop by Funmilayo Akinrinmisi Foundation opened my eyes and gave me the courage to seek help.
            The support and counseling I received changed my life”"
          fullName="Tunde Akindayomi"
          profession="Tech Professional"
        />
        <StoryCard
          content="“Before Funmilayo Akinrinmisi Foundation came into our lives,
          I worried every day about how to feed my children.
          Now, we have food on our table, and I have learned how to grow our own vegetables”"
          fullName="Maria Mouseni"
          profession="Mother of three"
        />
        <StoryCard
          content="“I always dreamed of becoming a doctor, but I thought it was impossible.
          The scholarship from Funmilayo Akinrinmisi Foundation changed everything.
          Now I can go to school, and I have everything I need to succeed”"
          fullName="James Edene"
          profession="Student"
        />
      </section>
    </div>
  );
}
