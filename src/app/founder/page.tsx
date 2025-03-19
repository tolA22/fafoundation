"use client";
import React, { useEffect } from "react";
import HeaderWrapper from "../_shared/ui_components/header_wrapper";
import ImageLink, {
  IImageLink,
} from "../_shared/ui_components/footer/ImageLink";
import HomeSection from "../_shared/ui_components/home_section";
import { SOCIAL_MEDIA_PARAMS } from "../_shared/ui_components/footer/constant";
import Goals from "../about/Goals";
import { useStateContext } from "../StateContext";

const Page = () => {
  const { setFounderText, setValue } = useStateContext();
  useEffect(() => {
    setValue(true);
    setFounderText(true);
  }, []);
  return (
    <div className=" ">
      <HeaderWrapper>
        <HomeSection
          title="Meet Our Founder"
          description="The Vision, Passion, and Story Behind This foundation"
          titleClassName="!text-[#FFFFFFCC]"
          descriptionClassName="!text-[#EAE5D3] lg:max-w-[850px]"
          center
          sectionClassName="mt-[7rem] lg:mt-[20rem] mb-[9rem] lg:mb-[0]"
          descriptionHeaderStyle
          header
        />
      </HeaderWrapper>
      <main className="bg-white bg-[url('/rubber.png')]  bg-right bg-no-repeat min-h-[120vh]">
        <div className="py-24 lg:py-32 px-4  lg:w-[70vw] max-w-[900px] text-[#1E1E1E] mx-auto grid lg:grid-cols-2 gap-8 font-aventa text-[17px]lg:text-[20px]">
          <article className="text-center lg:text-left">
            <p className="font-aventa   text-[14px] lg:text-[18px]">
              THE FOUNDER
            </p>
            <h4 className="my-2 font-sentient_italic text-[30px] leading-[40px] lg:text-[40px] lg:leading-[50px]">
              Funmilayo Akinrinmisi MSN, PMHNP-BC
            </h4>
            <div className="flex my-6 justify-center  lg:hidden items-center">
              <img src="/p1.svg" alt="" />
            </div>

            <p className="mt-4 lg:my-3">
              The story of Funmi Akinrimisi Foundation begins with the passion
              and unwavering dedication of its founder, Funmi Akinrimisi. With a
              deep-rooted belief in the power of community and compassion, Funmi
              Akinrimisi set out to address the pressing challenges faced by
              underprivileged communities, children in need, and individuals
            </p>
            <p>
              Funmi Akinrimisi is a Board Certified Psychiatric Mental Health
              Nurse Practitioner. She completed her undergraduate degree in
              Nursing at Texas Tech University and completed her Master of
              Science in Nursing at Walden University. Before working in the NP
              role, Funmi has several years of experience in medical-surgical
              /Pediatric but specifically 10 years of experience in geriatric,
              adult, and child Psychiatry nursing.
            </p>
            <footer className="flex justify-center lg:justify-start mt-6  gap-1">
              {SOCIAL_MEDIA_PARAMS.map((param: IImageLink, index: number) => (
                <ImageLink
                  key={index}
                  img={param.img}
                  href={param.href}
                  alt={param.alt}
                  scale={true}
                />
              ))}
            </footer>
          </article>
          <div className="hidden lg:flex flex-col justify-start">
            <img className="object-cover" src="/p1.svg" alt="" />
          </div>
        </div>
        <div className="lg:w-[70%] p-4  mx-auto justify-center">
          <header className="text-center">
            <p className="text-[14px] lg:text-[18px] font-aventa">WHO WE ARE</p>
            <h5 className="font-sentient_italic text-[30px] leading-[40px] lg:text-[40px] lg:leading-[50px] max-w-[260px] mx-auto lg:max-w-max">
              Our Purpose and Future
            </h5>
          </header>
          <section className="flex flex-col gap-6 mt-10 lg:mt-20 px-2 lg:flex-row">
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
        </div>
        <div className="lg:w-[70%] p-4  mx-auto mt-20 lg:mt-20 justify-center">
          <header className="text-center my-8 lg:my-16">
            <p className="text-[14px] lg:text-[18px] font-aventa">Our Story</p>
            <h5 className="font-sentient_italic text-[30px] leading-[40px] lg:text-[40px] lg:leading-[50px] max-w-[260px] mx-auto lg:max-w-max">
              Our Journey from a Dream to a Movement
            </h5>
          </header>
          <article className="text-center">
            <p>
              The story of Funmi Akinrimisi Foundation is one of passion,
              purpose, and unwavering commitment to making a difference. Founded
              by Funmi Akinrimisi , the foundation started as a small initiative
              aimed at addressing the urgent needs of underprivileged children,
              families struggling with hunger, What began as a single act of
              kindness has since grown into a global movement, touching the
              lives of thousands.
            </p>
            <div className="mt-6 lg:mt-10">
              <h6 className="font-aventa_bold my-1">Where We Are Today:</h6>
              <p>
                Today, Funmilayo Akinrinmis Foundation proudly celebrates a
                major milestone—serving over a thousand nutritious meals to
                underprivileged communities across Nigeria. This achievement
                reflects our commitment to eradicating hunger and ensuring no
                child goes to bed hungry. With the unwavering support of our
                volunteers, donors, and advocates, we continue to expand our
                impact, providing sustainable food solutions and nutritional
                education. Together, we are building a future where every family
                has access to nutritious meals and no one suffers from hunger.
              </p>
            </div>
            <div className="pb-[10rem] lg:pb-[16rem] mt-6 lg:mt-10">
              <h6 className="font-aventa_bold my-1"> Looking Ahead:</h6>
              <p>
                Our journey is just beginning. We are committed to scaling our
                efforts and deepening our impact by expanding to new regions,
                launching innovative food programs, and empowering communities
                with sustainable solutions. As we move forward, we invite you to
                be part of this change—to help us build a world where no one
                goes hungry and every individual has the opportunity to thrive.
              </p>
            </div>
          </article>
        </div>
      </main>
    </div>
  );
};

export default Page;
