import HomeCard from "../_shared/ui_components/home_card";
import HomeSection from "../_shared/ui_components/home_section";
import Goals from "./Goals";
import MeetTheTeam from "./meetTheTeam";

export default function AboutFocus() {
  return (
    <section className='bg-[url("/focus_mobile.svg")] lg:bg-[url("/focus.svg")] bg-cover lg:bg-cover bg-no-repeat min-h-[1000px]  pt-[6em] lg:pt-[14em] pb-4 mt-[-4em] z-50 pb-[4em]'>
      <section className="px-2 lg:px-0 lg:w-[80%] text-center lg:mx-auto font-normal text-[20px] lg:text-[30px] leading-[28.6px] lg:leading-[42.9px] trailing-[-2%]">
        <span className="font-aventa_bold">
          Funmilayo Akinrinmisi Foundation
        </span>
        <span className="font-aventa">
          {" "}
          is a non-profit organization dedicated to creating positive change and
          improving lives across Africa & beyond
        </span>
      </section>
      <section className="flex flex-col gap-4 lg:gap-6 mt-[4rem] px-2 lg:px-0 lg:flex-row lg:w-[80%] lg:mx-auto justify-center">
        <section className="w-[1/2]">
          <Goals
            title="Our Mission"
            color="#76AC3C"
            text="Our mission is to empower and uplift communities by addressing fundamental needs and promoting holistic well-being"
            imgMd="/mision.svg"
            imgSm="/mobile_mission.png"
          />
        </section>
        <section>
          <Goals
            title="Our Vision"
            color="#0D6032"
            imgMd="vision.svg"
            imgSm="mobile-vision.png"
            text="We envision a thriving global community where every individual has access to essential resources and opportunities for growth and development, leading to prosperous and resilient communities"
          />
        </section>
      </section>
      <section className="mt-[4rem] px-2 lg:px-0 lg:w-[90%] lg:ml-[10%] flex flex-col grow">
        <HomeSection
          title="OUR FOCUS"
          description="We believe in empowering & uplifting local communities"
        />
        <section className="flex overflow-scroll gap-4 lg:gap-6 max-width-[100%] grow flex-row mt-[2rem] lg:mt-[4rem]">
          {/* <div className="w-[1000px]"> */}
          <HomeCard
            title="Food Security"
            content="We combat hunger by working with local farmers, food banks, and distribution networks. Our initiatives include food drives, community gardens, and nutrition education programs"
            imageUrl="/focus_food_security.svg"
            swap
            imageMainText="109m"
            imageSubText="People globally are facing food insecurity"
            imageBgColor="#DA5901"
            colMode
            hasBorder
            hideButton
            className="w-[100%] lg:w-[500px] grow flex-none"
          />
          {/* </div> */}
          <HomeCard
            title="Education"
            content="Education breaks the cycle of poverty. We provide scholarships, improve schools, and offer programs to empower students and strengthen communities"
            imageUrl="/focus_education.svg"
            imageMainText="20%"
            imageSubText="Primary school-age children in Sub-saharan Africa are
          out of school"
            imageBgColor="#331374"
            imageTextBottom
            colMode
            hasBorder
            hideButton
            className="w-[100%] lg:w-[500px] grow flex-none"
            swap
          />
          <HomeCard
            title="Mental Health"
            content="We promote mental health awareness and support. Collaborating with professionals and organisations, we establish facilities, offer counselling, and reduce mental health stigma"
            imageUrl="/focus_mental_health.svg"
            imageMainText="1.4b+"
            imageSubText="People are facing prevalent mental health issues"
            imageBgColor="#76AC3C"
            imageTextRight
            colMode
            hasBorder
            hideButton
            className="w-[100%] lg:w-[500px] grow flex-none"
            swap
          />
          <HomeCard
            title="Healthcare Access"
            content="We support the establishment and maintenance of hospitals, clinics, and medical facilities in underserved areas. Our foundation provides medical supplies, equipment, and training to ensure quality patient care"
            imageUrl="/focus_healthcare_access.svg"
            imageMainText="56%"
            imageSubText="Africans lack access to quality healthcare"
            imageBgColor="#0B3434"
            imageTextBottom
            colMode
            hasBorder
            hideButton
            className="w-[100%] lg:w-[500px] grow flex-none"
            swap
          />
        </section>
      </section>
      <MeetTheTeam />
    </section>
  );
}
