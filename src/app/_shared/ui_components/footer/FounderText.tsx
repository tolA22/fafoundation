import React from "react";

const FounderText = () => {
  return (
    <div className=" p-4 pt-32 pb-20 grid lg:grid-cols-2 text-center lg:text-left">
      <h4 className="font-sentient_italic leading-[40px] lg:leading-[50px] text-[30px] lg:text-[40px] font-bold text-[#0B3434]">
        A Message from Our Founder
      </h4>
      <article className="flex gap-3 w-[100%] items-start justify-start mt-12 lg:mt-20">
        <img src="/up.png" className="object-contain scale-90" alt="" />
        <div className="flex justify-end gap-1 items-end">
          <p className="font-aventa text-[20px]">
            Our work is far from done. Every step forward is a testament to the
            incredible strength of the people we serve and the unwavering
            support of our donors. Together, we are creating a brighter
            future—one act of kindness at a time.
          </p>
          <img
            src="/down.png"
            className="object-contain scale-90  relative top-5 lg:top-0"
            alt=""
          />
        </div>
      </article>
    </div>
  );
};

export default FounderText;
