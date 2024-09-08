import React from "react";
import Picture from "./Picture";
import Goals from "./Goals";
import Focus from "./Focus";
import Profile from "./Profile";

const page = () => {
  return (
    <div>
      <div className=' pt-36 bg-[url("/hero_mobile.svg")]   lg:bg-auto lg:bg-[url("/Hero-bg.png")]  bg-no-repeat min-h-[600px]  pb-4 flex items-center flex-col lg:pt-44'>
        <span className="font-aventa mb-3 text-[16px] text-white ">ABOUT US</span>
        <h3 className="font-sentient  px-6 text-center text-[36px] font-medium italic leading-[44.68px] pb-6 text-white lg:max-w-[850px] lg:font-semibold lg:text-6xl">
          Dedicated to creating positive impact, improving lives across Africa &
          Beyond
        </h3>
        <div className=' min-w-full bg-[url("/focus_mobile.svg")] lg:bg-[url("/focus.svg")] bg-cover  bg-no-repeat min-h-[1000px] mt-32 px-4  lg:mt-96'>
          <section className="flex items-center flex-col">
            <div className="relative  bottom-28 lg:bottom-80">
              <Picture />
              <p className="font-aventa w-[250px] text-[24px] text-white absolute bottom-3 leading-[29px] left-3 lg:text-[40px] lg:w-[400px] lg:bottom-8 lg:left-12 lg:leading-[48px] ">
                Roundtable with our Founder
              </p>
            </div>
            <h3 className=" leading-[28px] font-aventa text-center relative bottom-16 lg:text-[30px] lg:max-w-[860px]  lg:bottom-48 lg:leading-[42px]">
              <span className=" font-aventa-Semibold font-semibold">Funmilayo Akinrinmisi</span>
              <span>
                {" "}
                Foundation is a non-profit organization dedicated to creating
                positive change and improving lives across Africa & beyond
              </span>
            </h3>
          </section>
          <section className="relative bottom-5 gap-4 flex flex-col  lg:flex-row min-w-full  lg:justify-center lg:bottom-20">
            <Goals
              title="Our Mission"
              color="#76AC3C"
              text="Our mission is to empower and uplift communities by addressing fundamental needs and promoting holistic well-being"
              imgMd="/mision.svg"
              imgSm="/mobile_mission.png"
            />
            <Goals
              title="Our Vision"
              color="#0D6032"
              imgMd="vision.svg"
              imgSm="mobile-vision.png"
              text="We envision a thriving global community where every individual has access to essential resources and opportunities for growth and development, leading to prosperous and resilient communities"
            />
          </section>
          <section className="mt-12">
            <p className=" font-aventa text-center text-[14px]  lg:text-[18px] lg:text-left lg:ml-[6vw]">
              OUR FOCUS
            </p>
            <h3 className="leading-[38px] max-w-[517px] font-sentient text-[30px]  text-center italic lg:text-[40px] lg:text-left lg:ml-[6vw] lg:leading-[52px]">
              We believe in empowering & uplifting local communities
            </h3>
            <div className="flex w-[87vw] overflow-x-scroll gap-4 mt-10  lg:ml-[8vw] scrollbar-hide ">
              <Focus
                img="/focus3.svg"
                title="Food Security"
                text="We combat hunger by working with local farmers, food banks, and distribution networks.
Our initiatives include food drives, community gardens, and nutrition education programs"
                mini_color="#DA5901"
                mini_header="109m"
                mini_sub_text="People globally are facing food insecurity"
                position="TopLeft"
              />
              <Focus
                img="/focus2.svg"
                title=" Education"
                text="We believe education is key to breaking the  cycle of poverty.
Through scholarships, school infrastructure projects, and educational programs, we support students' access to quality education, empowering them to reach their full potential and contribute positively to their communities"
                mini_color="#331374"
                mini_header="20%"
                mini_sub_text="Primary school-age children in Sub-saharan Africa are
out of school"
position="BottomLeft"
              />
              <Focus
                img="/focus1.svg"
                title="Mental Health"
                text="We promote mental health awareness and provide support services.
Our foundation collaborates with mental health professionals, advocacy groups, and community organisations to establish mental health facilities, offer counselling services, and reduce the stigma associated with mental health challenges."
                mini_color="#76AC3C"
                mini_header="1.4b+"
                mini_sub_text="People are facing prevalent mental health issues"
                position="TopRight"
              />
              <Focus
                img="/focus4.svg"
                title="Healthcare Access"
                text="We support the establishment and maintenance of hospitals, clinics, and medical facilities in underserved areas. Our foundation provides medical supplies, equipment, and training to ensure quality patient care"
                mini_color="#0B3434"
                mini_header="56%"
                mini_sub_text="Africans lack access to quality healthcare"
                position="BottomLeft"
              />
            </div>
          </section>

          <section className="mt-24 lg:mt-44">
            <p className=" font-aventa text-[14px] text-center lg:text-[18px]">MEET THE TEAM</p>
            <h4 className="leading-[39px] text-center text-[30px] lg:text-[40px]"> A collective of  passionate individuals</h4>
            <div className="flex flex-wrap my-8 justify-evenly gap-4 lg:w-[80vw] lg:mx-auto lg:max-w-[1500px] lg:gap-8 lg:justify-start lg:pl-6"  >
              <Profile name="Funmilayo Akinrinmisi" image="/p1.svg" text="Founder & President"/>
              <Profile name="James Obrien" image="/p2.svg" text="Vice President, Global Operations"/>
              <Profile name="Ellene Bachor" image="/p3.svg" text="Vice President,Finance"/>
              <Profile name="Buchi Gloria" image="/p4.svg" text="Vice President,Grants & Programs"/>
              <Profile name="Steven Hassan" image="/p5.svg" text="Director,West Africa"/>
              <Profile name="Funmilayo Akinrinmisi" image="/p6.svg" text="Founder"/>
              <Profile name="Funmilayo Akinrinmisi" image="/p6.svg" text="Founder"/>
              <Profile name="Funmilayo Akinrinmisi" image="/p6.svg" text="Founder"/>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
};

export default page;
