import HomeSection from "../home_section";
import JoinCard from "../join_card";

export default function Footer() {
  return (
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
          description="Your generous donations help us fund our projects and reach more people in need.
          Every contribution, no matter the size, makes an impact"
          actionText="Donate Now"
          actionColor="yellow"
          img="/donation.svg"
        />
      </section>
    </div>
  );
}
