"use client";

import { useState, useEffect } from "react";
import Image from "next/image";

import PillButton from "../_shared/ui_components/button";
import FafFocus from "./focus";
// import FafStories from "./stories";

export default function FafHome() {
  const [screenWidth, setScreenWidth] = useState<number>(0);

  useEffect(() => {
    // This will only run on the client side
    setScreenWidth(window.screen.availWidth);
  }, []);

  return (
    <div className="bg-[#0B3434] h-full min-h-[200px] lg:h-auto">
      <div className='bg-[url("/hero_mobile.svg")] lg:bg-[url("/hero.svg")] bg-cover lg:bg-cover bg-no-repeat min-h-[1200px] md:min-h-[600px] lg:min-h-[810px] px-2 lg:px-24 pb-4'>
        <section className="flex flex-col lg:flex-row">
          <section className="pt-40 lg:pt-60 lg:max-w-[40%] ">
            <section>
              <h1 className="text-[42px] font-sentient font-medium italic leading-[43.68px] pb-6 text-white">
                Creating Positive Change & Improving Lives
              </h1>
              <h3 className="text-base font-aventa font-normal text-white/80 leading-[24.64px]">
                A thriving society where every individual has access to
                essential resources and opportunities for growth and
                development, promoting holistic well-being
              </h3>
            </section>
            <section className="pb-4 pt-8 flex gap gap-x-3">
              <PillButton buttonText="Learn More" />
              <PillButton buttonText="Donate Now" color="yellow" />
            </section>
          </section>
        </section>
      </div>
      <section id="faf_focus_section " className="">
        <FafFocus />
      </section>
      {/* <section id="faf_stories_section">
        <FafStories />
      </section> */}
    </div>
  );
}
