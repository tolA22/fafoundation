import HomeSection from "../home_section";
import JoinCard from "../join_card";
import ImageLink, { IImageLink } from "./ImageLink";
import { SOCIAL_MEDIA_PARAMS } from "./constant";
import HeaderText, { HeaderSubText } from "./text";
import Image from "next/image";

export default function Footer() {
  return (
    <section className='bg-[url("/footer_mobile.svg")] lg:bg-[url("/footer.svg")] bg-cover mt-[-6em] bg-no-repeat min-h-[1000px] px-2 lg:px-40 '>
      <div>
        <div className="pt-28 lg:pt-40">
          <HomeSection
            title="JOIN US"
            description="Get involved and make a difference today"
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
            />
          </section>
        </section>
      </div>
      <section className="mt-20 lg:mt-52 px-2 flex flex-col gap-y-2 lg:flex-row gap-x-[6rem]">
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
                <HeaderSubText text="About Us" />
                <HeaderSubText text="Contact Us" />
              </div>
              <div className="flex flex-col gap-y-3">
                <HeaderText text="SUPPORT US" />
                <HeaderSubText text="Make a Donation" />
                <HeaderSubText text="Become A Partner" />
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
    </section>
  );
}
