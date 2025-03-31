"use client";
import HomeSection from "../home_section";
import JoinCard from "../join_card";
import ImageLink, { IImageLink } from "./ImageLink";
import { SOCIAL_MEDIA_PARAMS } from "./constant";
import HeaderText, { HeaderSubText } from "./text";
import Image from "next/image";
import { useStateContext } from "@/app/StateContext";
import Newesletter from "./Newesletter";
import FounderText from "./FounderText";
import { useRouter } from "next/navigation";

export default function Footer() {
  const { value, founderText } = useStateContext();
  //bg-[url("/footer_mobile.svg")] lg:bg-[url("/footer.svg")]
  const route = useRouter();

  return (
    <footer className="bg-[#0B3434]  bg-no-repeat bg-[url('/footer_bg.png')] bg-right-bottom ">
      <div className="bg-[url('/smallbg.png')] lg:bg-[url('/footer1.png')] bg-cover  bg-no-repeat  px-2 lg:px-40 z-10 relative bottom-8 lg:bottom-16">
        {!value ? (
          <div>
            <div className="pt-28 lg:pt-40">
              <HomeSection
                title="JOIN US"
                description="Get involved and make a difference to day"
                center
              />
            </div>
            <section className="flex mt-8 flex-col lg:flex-row gap-4">
              <section className="w-full lg:w-1/2 h-full">
                <JoinCard
                  title="Partner with Us"
                  description="Collaborate with us as a partner. Whether you're an organization, business, or individual, your partnership can amplify our efforts and bring about positive change"
                  actionText="Contact Us"
                  actionColor="green"
                  img="/partner.svg"
                  action={() => {
                    route.push("/contact");
                  }}
                />
              </section>
              <section className="w-full lg:w-1/2 h-full">
                <JoinCard
                  title="Make a Donation"
                  description="Your generous donations help us fund our projects and reach more people in need.
          Every contribution, no matter the size, makes an impact"
                  actionText="Donate Now"
                  actionColor="yellow"
                  img="/donation.svg"
                  action={() => {
                    route.push("/donate");
                  }}
                />
              </section>
            </section>
          </div>
        ) : (
          <div>{founderText ? <FounderText /> : <Newesletter />}</div>
        )}
      </div>
      <section className="mt-10 lg:mt-16  flex flex-col gap-y-2 lg:flex-row gap-x-[6rem] px-3 lg:px-40">
        <section className="lg:w-2/5">
          <Image
            alt="Faf Black White logo"
            src="/faf_bw.svg"
            priority
            width={100}
            height={100}
            className="w-[250px]"
          />
          <h5 className="text-[#FFFFFFE5] font-aventa text-base mt-2 lg-max-w-[50%]">
            Funmilayo Akinrinmisi Foundation is a non-profit organization
            dedicated to creating positive change and improving lives across
            Africa & beyond
          </h5>
        </section>
        <section className="flex flex-col lg:flex-row lg:w-3/5">
          <section>
            <section className="flex text-white font-normal  my-12 lg:mt-4">
              <div className="flex flex-col w-1/2 gap-y-3">
                <HeaderText text="COMPANY" />
                <HeaderSubText text="About Us" footer={true} path="/about" />
                <HeaderSubText
                  text="Contact Us"
                  footer={true}
                  path="/contact"
                />
              </div>
              <div className="flex flex-col gap-y-3">
                <HeaderText text="SUPPORT US" />
                <HeaderSubText
                  text="Make a Donation"
                  footer={true}
                  path="/donate"
                />
                <HeaderSubText
                  text="Become A Partner"
                  footer={true}
                  path="/donate"
                />
              </div>
            </section>
            <section className="text-white flex flex-col gap-y-3 lg:max-w-[70%]">
              <HeaderText text="ADDRESS" />
              <HeaderSubText
                text="42 Elekuku Idera Behind Trumed Chemist, off Adeoyo Hospital Road, Ibadan, Oyo State"
                font="avenir"
              />
            </section>
          </section>
          <section className="flex my-12 lg:mt-4 lg:w-1/3 lg:gap-y-2 flex-col ">
            <HeaderText text="CONNECT WITH US" hide_mobile />
            <section className="flex justify-center lg:justify-start gap-x-2 ">
              {SOCIAL_MEDIA_PARAMS.map((param: IImageLink, index: number) => (
                <ImageLink
                  key={index}
                  img={param.img}
                  href={param.href}
                  alt={param.alt}
                />
              ))}
            </section>
          </section>
        </section>
      </section>

      <section className="text-center pb-12 lg:pt-32">
        <h3 className="font-aventa trailing-tight text-base font-normal text-[#FFFFFF99]">
          Copyright © Funmilayo Akinrimisi Foundation
        </h3>
      </section>
    </footer>
  );
}
