"use client";

import React from "react";
import { useState, useEffect } from "react";

interface data {
  title: string;
  text: string;
  color: string;
  imgSm: string;
  imgMd: String;
}
const Goals = (props: data) => {
  const { title, text, imgSm, imgMd, color } = props;
  const [screenWidth, setScreenWidth] = useState<number>(0);

  useEffect(() => {
    // This will only run on the client side
    setScreenWidth(window.screen.availWidth);
  }, []);

  return (
    <div
      style={{
        backgroundColor: color,
        backgroundImage: screenWidth > 500 ? `url(${imgMd})` : `url(${imgSm}`,
      }}
      className={
        " font-aventa bg-half p-5 min-h-[194px] bg-right-bottom bg-no-repeat rounded-2xl lg:lg:max-w-[525px] lg:min-h-[375px] lg:rounded-[50px] lg:p-10"
      }
    >
      <h2 className="font-normal text-2xl leading-[29.64px] text-aventa_bold text-white mb-2">
        {title}
      </h2>
      <p className="font-normal leading-[21.42px]  text-sm pt-2 font-aventa text-[#FFFFFFCC]">
        {text}
      </p>
    </div>
  );
};

export default Goals;
