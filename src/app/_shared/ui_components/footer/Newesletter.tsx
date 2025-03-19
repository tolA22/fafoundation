"use client";
import React, { useState } from "react";

const Newesletter = () => {
  const [input, setInput] = useState("");

  return (
    <div className="pt-32 pb-20">
      <article className="text-center">
        <p className="font-aventa text-[14px] lg:text-[16px]">NEWSLETTER</p>
        <h4 className="font-sentient_italic lg:text-[40px] text-[30px] lg:leading-[50px] leading-[40px] font-semibold">
          Get more stories like this
        </h4>
      </article>
      <main className="w-[90vw] lg:w-[50vw] max-w-[707px] mx-auto mt-8 lg:mt-12 bg-white rounded-2xl font-aventa p-6 text-[#072222CC]">
        <h6 className="font-semibold">Subscribe to our newsletter</h6>
        <p>Don’t miss out on any of our insightful and impactful stories</p>
        <div className="mt-5">
          <p>Your Email*</p>
          <div className="flex justify-between lg:flex-row flex-col">
            <input
              value={input}
              onChange={(e: any) => {
                setInput(e.target.value);
              }}
              className="lg:w-[68%] rounded-2xl  mt-2 p-3  bg-[#F3F4F7] outline-none text-[14px]"
              type="text"
              disabled
              placeholder="Your Email"
            />
            <button
              disabled
              className=" mt-3 lg:mt-0 font-semibold-aventa lg:w-[28%] rounded-3xl bg-[#76AC3C] p-3 text-black transition-all duration-150 hover:opacity-65"
            >
              Subscribe
            </button>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Newesletter;
