import HomeSection from "../_shared/ui_components/home_section";
import Profile from "./Profile";

export default function MeetTheTeam() {
  return (
    <section className="px-2 lg:px-0 lg:w-[80%] lg:mx-auto justify-center pt-[4rem] lg:pt-[8rem] pb-[4rem] lg:pb-[8rem]">
      <HomeSection
        title="MEET THE TEAM"
        description="A collective of passionate individuals"
        center
      />
      <section className="flex flex-col lg:flex-row items-center gap-4 lg:gap-6 justify-center pt-[4rem]">
        <Profile
          name="Funmilayo Akinrinmisi"
          image="/p1.svg"
          text="Founder & President"
        />
        <Profile
          name="James Obrien"
          image="/p2.svg"
          text="Vice President, Global Operations"
        />
        <Profile
          name="Funmilayo Akinrinmisi"
          image="/p1.svg"
          text="Founder & President"
        />
        <Profile
          name="James Obrien"
          image="/p2.svg"
          text="Vice President, Global Operations"
        />
      </section>
    </section>
  );
}
