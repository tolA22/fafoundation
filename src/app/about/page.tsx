"use client";
import React, { useEffect } from "react";
import Picture from "./Picture";
import Goals from "./Goals";
import Focus from "./Focus";
import Profile from "./Profile";
import HomeSection from "../_shared/ui_components/home_section";
import HeaderWrapper from "../_shared/ui_components/header_wrapper";
import AboutFocus from "./aboutFocus";
import { useStateContext } from "../StateContext";

const Page = () => {
  const { setFounderText, setValue } = useStateContext();
  useEffect(() => {
    // This will only run on the client side

    setValue(false);
    setFounderText(false);
  }, []);
  return (
    <div className="bg-[#0B3434] h-full min-h-[200px] lg:h-auto relative">
      {/* <div className='px-2 pt-12 lg:pt-36 bg-[url("/hero_mobile.svg")]   lg:bg-auto lg:bg-[url("/Hero-bg.png")]  bg-no-repeat min-h-[600px]  pb-4 flex items-center flex-col lg:pt-44'> */}
      <HeaderWrapper>
        <HomeSection
          title="ABOUT US"
          description="Dedicated to creating positive impact, improving lives across Africa &
          Beyond"
          titleClassName="!text-[#FFFFFFCC]"
          descriptionClassName="!text-[#EAE5D3] lg:max-w-[850px]"
          center
          sectionClassName="mt-[7rem] lg:mt-[14rem] mb-[9rem] lg:mb-[6rem] lg:pb-[27rem]"
          descriptionHeaderStyle
          header
        />
      </HeaderWrapper>

      <AboutFocus />
    </div>
  );
};

export default Page;
