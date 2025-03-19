import React from "react";
import QA from "./QA";

const Index = () => {
  return (
    <div className="mt-20 pb-[10rem] lg:pb-[16rem] lg:mt-40 lg:  z-30">
      <p className="text-center text-[14px] lg:text-[16px]">FAQS</p>
      <h4 className="font-sentient_italic text-[30px] leading-[40px] lg:leading-[50px] w-[90%]   lg:text-[40px] text-center max-w-[631px] mx-auto">
        Everything You Need to Know – Your Questions, Answered
      </h4>
      <QA />
    </div>
  );
};

export default Index;
