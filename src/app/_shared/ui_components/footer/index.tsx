import HomeSection from "../home_section";
import JoinCard from "../join_card";
import HeaderText, { HeaderSubText } from "./text";

export default function Footer() {
  return (
    <section>
      <div className=' bg-[url("/footer_mobile.svg")] bg-cover lg:mt-[-4em] bg-no-repeat min-h-[1000px] px-2'>
        <div className="pt-28">
          <HomeSection
            title="JOIN US"
            description="Get involved and make a difference today"
          />
        </div>
        <section className="grid gap-6 mt-8 lg:grid-cols-2 lg:mx-28">
          <JoinCard
            title="Partner with Us"
            description="Collaborate with us as a partner. Whether you're an organization, business, or individual, your partnership can amplify our efforts and bring about positive change"
            actionText="Contact Us"
            actionColor="green"
            img="/partner.svg"
          />
          <JoinCard
            title="Make a Donation"
            description="Your generous donations help us fund our projects and reach more people in need.Every contribution, no matter the size, makes an impact"
            actionText="Donate Now"
            actionColor="yellow"
            img="/donation.svg"
          />
        </section>
      </div>
      <section className="mt-20 px-2">
        <h5 className="text-white">
          Funmilayo Akinrinmisi Foundation is a non-profit organization
          dedicated to creating positive change and improving lives across
          Africa & beyond
        </h5>
        <section className="flex text-white font-normal ">
          <div>
            <HeaderText text="COMPANY" />
            <HeaderSubText text="About Us" />
            <HeaderSubText text="Contact Us" />
          </div>
          <div>
            <HeaderText text="SUPPORT US" />
            <HeaderSubText text="Make a Donation" />
            <HeaderSubText text="Become A Partner" />
          </div>
        </section>
        <section className="text-white">
          <HeaderText text="ADDRESS" />
        </section>
      </section>
    </section>
  );
}
