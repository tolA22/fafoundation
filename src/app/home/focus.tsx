import HomeCard from "../_shared/ui_components/home_card";
import HomeSection from "../_shared/ui_components/home_section";

export default function FafFocus() {
  return (
    <div className='bg-[url("/focus_mobile.svg")] lg:bg-[url("/focus.svg")] bg-cover lg:bg-auto bg-no-repeat min-h-[1000px] px-2 pt-16 pb-4 mt-[-4em] z-50 pb-[4em]'>
      <HomeSection
        title="OUR FOCUS"
        description="We believe in empowering & uplifting local communities"
      />
      <section className="pt-16 flex flex-col gap gap-y-12">
        <HomeCard
          title="Food Security"
          content="We combat hunger by working with local farmers, food banks, and distribution networks. Our initiatives include food drives, community gardens, and nutrition education programs"
        />
        <HomeCard
          title="Education"
          content="Education breaks the cycle of poverty. We provide scholarships, improve schools, and offer programs to empower students and strengthen communities"
        />
        <HomeCard
          title="Mental Health"
          content="We promote mental health awareness and support. Collaborating with professionals and organisations, we establish facilities, offer counselling, and reduce mental health stigma"
        />
        <HomeCard
          title="Healthcare Access"
          content="We support the establishment and maintenance of hospitals, clinics, and medical facilities in underserved areas. Our foundation provides medical supplies, equipment, and training to ensure quality patient care"
        />
      </section>
    </div>
  );
}
