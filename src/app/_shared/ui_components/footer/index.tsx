import HomeSection from "../home_section";
import JoinCard from "../join_card";
import HeaderText, { HeaderSubText } from "./text";

export default function Footer() {
  return (
    <section className='bg-[url("/footer_mobile.svg")] lg:bg-[url("/footer.svg")] bg-cover mt-[-8em] bg-no-repeat min-h-[1000px] px-2 lg:px-40'>
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
          <HeaderSubText text="42th Elekuku Idera Behind Trumed Chemist, off Adeoyo Hospital Road, Ibadan, Oyo State" />
        </section>
      </section>
    </section>
  );
}
