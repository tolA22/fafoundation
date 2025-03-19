"use client";
import React, { useEffect } from "react";
import AccountDetails from "./Components/AccountDetails";
import FAQ from "./Components/FAQ";
import { useStateContext } from "../StateContext";

const FafDonate = () => {
  const { setValue, setFounderText } = useStateContext();
  useEffect(() => {
    setValue(true);
    setFounderText(false);
  }, []);
  return (
    <div className="bg-white bg-[url('/rubber.png')]  bg-right bg-no-repeat min-h-[120vh]">
      <p className="bg-[#EAE5D3] font-sentient_italic p-8 w-[90%] lg:w-[80%] mx-auto max-w-[1183px] relative bottom-20 lg:bottom-40  rounded-3xl text-center font-semiBold text-[22px] lg:text-[30px] ">
        Every day, millions of people face challenges that no one should have to
        endure—hunger, lack of education, poor healthcare, and more. At
        Funmilayo Akinrinmisi Foundation, we believe in a world where everyone
        has a fair chance at a better life, and we know that change starts with
        you.
      </p>
      <section>
        <div className=" w-[90%] lg:w-[70vw] mx-auto max-w-[1030px] grid lg:grid-cols-2 gap-8">
          <div className="text-[#0B3434]">
            {" "}
            <h5 className="font-aventa text-center lg:text-left text-[14px] lg:text-[18px]">
              DONATION INFO
            </h5>
            <p className="font-sentient_italic text-[30px] text-center lg:text-left lg:text-[40px] mt-2 lg:mt-4 leading-[40px] lg:leading-[50px] font-semibold">
              Be the reason someone smiles today. Join us in making a
              difference.
            </p>
          </div>
          <aside className="rounded-2xl px-5 py-8 bg-white shadow-sm">
            <AccountDetails label="Bank Name" content="Access Bank PLC" />
            <AccountDetails
              label="Account Name"
              content="Funmilayo Akinrinmisi Foundation"
            />{" "}
            <AccountDetails label="Account Number" content="2007462856" />
          </aside>
        </div>
      </section>
      <FAQ />
    </div>
  );
};

export default FafDonate;
