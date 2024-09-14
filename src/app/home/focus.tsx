import HomeCard from "../_shared/ui_components/home_card";
import HomeSection from "../_shared/ui_components/home_section";
import FafStories from "./stories";

export default function FafFocus() {
  return (
    <div className='bg-[url("/focus_mobile.svg")] lg:bg-[url("/focus.svg")] bg-cover lg:bg-cover bg-no-repeat min-h-[1000px] px-2 lg:px-40 pt-[6em] lg:pt-[14em] pb-4 mt-[-9em] z-50 pb-[4em]'>
      <HomeSection
        title="OUR FOCUS"
        description="We believe in empowering & uplifting local communities"
      />
      <section className="pt-16 flex flex-col gap gap-y-12">
        <HomeCard
          title="Food Security"
          content="We combat hunger by working with local farmers, food banks, and distribution networks. Our initiatives include food drives, community gardens, and nutrition education programs"
          imageUrl="/focus_food_security.svg"
          swap
          imageMainText="109m"
          imageSubText="People globally are facing food insecurity"
          imageBgColor="#DA5901"
        />
        <HomeCard
          title="Education"
          content="Education breaks the cycle of poverty. We provide scholarships, improve schools, and offer programs to empower students and strengthen communities"
          imageUrl="/focus_education.svg"
          imageMainText="20%"
          imageSubText="Primary school-age children in Sub-saharan Africa are
          out of school"
          imageBgColor="#331374"
          imageTextBottom
        />
        <HomeCard
          title="Mental Health"
          content="We promote mental health awareness and support. Collaborating with professionals and organisations, we establish facilities, offer counselling, and reduce mental health stigma"
          imageUrl="/focus_mental_health.svg"
          swap
          imageMainText="1.4b+"
          imageSubText="People are facing prevalent mental health issues"
          imageBgColor="#76AC3C"
          imageTextRight
        />
        <HomeCard
          title="Healthcare Access"
          content="We support the establishment and maintenance of hospitals, clinics, and medical facilities in underserved areas. Our foundation provides medical supplies, equipment, and training to ensure quality patient care"
          imageUrl="/focus_healthcare_access.svg"
          imageMainText="56%"
          imageSubText="Africans lack access to quality healthcare"
          imageBgColor="#0B3434"
          imageTextBottom
        />
      </section>
      <section id="faf_stories_section">
        <FafStories />
      </section>
    </div>
  );
}
