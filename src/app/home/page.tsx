import PillButton from "../_shared/ui_components/button";
import FafFocus from "./focus";
import FafStories from "./stories";

export default function FafHome() {
  return (
    <div className="bg-white h-full min-h-[500px]">
      <div className='bg-[url("/hero_mobile.svg")] lg:bg-[url("/hero.svg")] bg-cover lg:bg-auto bg-no-repeat min-h-[1200px] px-2 pb-4'>
        <section className="pt-24 ">
          <h1 className="text-[42px] font-medium italic leading-[43.68px] pb-6 text-white">
            Creating Positive Change & Improving Lives
          </h1>
          <h3 className="text-base font-normal text-white/80 leading-[24.64px]">
            A thriving society where every individual has access to essential
            resources and opportunities for growth and development, promoting
            holistic well-being
          </h3>
        </section>
        <section className="pb-4 pt-8 flex gap gap-x-3">
          <PillButton buttonText="Learn More" />
          <PillButton buttonText="Donate Now" color="yellow" />
        </section>
      </div>
      <section id="faf_focus_section ">
        <FafFocus />
      </section>
      <section id="faf_stories_section">
        <FafStories />
      </section>
    </div>
  );
}
