import { ReactNode } from "react";
import Image from "next/image";

export interface IContactBox {
  img: string;
  title: string;
  children?: ReactNode;
  subText: string;
}

export default function ContactBox({ img, title, subText }: IContactBox) {
  return (
    <section className=" flex border border-[#DCDCDC] border-solid rounded-3xl flex-col  lg:flex-row bg-white px-3 py-5 lg:px-5 min-h-[200px] lg:gap-x-4">
      <section className="rounded-full border-[3px] border-solid border-[#0D603233] w-fit h-fit lg:scale-150 ">
        <Image
          width={20}
          height={20}
          src={img}
          alt="Contact Button"
          className="0"
        />
      </section>
      <section className="flex flex-col mt-4 lg:mt-0">
        <section className="leading-[-2%] font-aventa text-[16px] ">
          {title}
        </section>
        <section className="trailing-[-2%] text-[18px] font-normal font-avenir pt-1 w-[90%]">
          {subText}
        </section>
      </section>
    </section>
  );
}
