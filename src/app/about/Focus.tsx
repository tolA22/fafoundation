"use client";

import React, { useEffect, useState } from "react";

interface data {
  title: string;
  text: string;
  img: string;
  mini_color: string;
  mini_header: string;
  mini_sub_text: string;
  position: string;
}
const Focus = (props: data) => {
  const { title, text, img, mini_color, mini_header, mini_sub_text, position } =
    props;
  const [location, setLocation] = useState("");

  useEffect(() => {
    switch (position) {
      case "TopLeft":
        setLocation("left-[0.9rem] top-[1rem] lg:left-[1.5rem]");
        break;
      case "BottomLeft":
        setLocation("left-[0.9rem] bottom-[1rem] lg:left-[1.5rem]");
        break;
      case "TopRight":
        setLocation("right-[0.9rem] top-[1rem] lg:right-[1.5rem]");
        break;
      default:
        setLocation("right-[0.9rem] bottom-[1rem] lg:right-[1.5rem]");
    }
  }, [position]);

  return (
    <div className="font-aventa h-[max-content] border rounded-3xl border-gray-200 p-4 min-w-[250px] lg:min-w-[525px] lg:max-w-[700px] lg:p-8 ">
      <div className="relative">
        <img className="border rounded-2xl" src={img} alt="" />
        <p
          style={{ backgroundColor: mini_color }}
          className={`${location} text-white absolute p-2 rounded-2xl flex flex-col  max-w-[63px] lg:max-w-[130px] lg:p-5`}
        >
          <span className=" text-center italic font-semibold lg:text-[27px]">
            {mini_header}
          </span>
          <span className="text-center text-[6px] lg:text-[11px] ">
            {mini_sub_text}
          </span>
        </p>
      </div>

      <h2 className=" my-4 text=[18px] lg:text-[32px] ">{title}</h2>
      <p className="text-[14px] lg:text-[20px]">{text}</p>
    </div>
  );
};

export default Focus;
