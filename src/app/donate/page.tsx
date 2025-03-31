import React from "react";
import HeaderWrapper from "../_shared/ui_components/header_wrapper";
import HomeSection from "../_shared/ui_components/home_section";
import FafDonate from "./FafDonate";

const page = () => {
  return (
    <div>
      <HeaderWrapper>
        <HomeSection
          title="DONATE NOW"
          description="Make a Lasting Impact – Change Lives Today"
          titleClassName="!text-[#FFFFFFCC]"
          descriptionClassName="!text-[#EAE5D3] lg:max-w-[850px]"
          center
          sectionClassName="mt-[7rem] lg:mt-[14rem] mb-[9rem] lg:pb-[10rem]"
          descriptionHeaderStyle
          header
        />
      </HeaderWrapper>
      <FafDonate />
    </div>
  );
};

export default page;
