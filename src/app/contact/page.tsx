"use client";
import React, { useState } from "react";
import PhoneInput from "react-phone-number-input";
import "react-phone-number-input/style.css";
import HomeSection from "../_shared/ui_components/home_section";
import HeaderWrapper from "../_shared/ui_components/header_wrapper";
import ContactBody from "./body";

const page = () => {
  return (
    <section className="bg-[#0B3434] h-full min-h-[200px] lg:h-auto ">
      <HeaderWrapper>
        <HomeSection
          title="CONTACT US"
          description="For donations, partnership & further enquiries"
          titleClassName="!text-[#FFFFFFCC]"
          descriptionClassName="!text-[#EAE5D3] lg:max-w-[850px]"
          center
          sectionClassName="mt-[7rem] lg:mt-[20rem] mb-[15rem] lg:mb-[0]"
          descriptionHeaderStyle
          header
        />
      </HeaderWrapper>
      
      <ContactBody />
    </section>
  );
};

export default page;
