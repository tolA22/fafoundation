import HomeSection from "../home_section";

export default function Footer() {
  return (
    <section>
      <div className='bg-[url("/footer_mobile.svg")] bg-cover mt-[-4em] bg-no-repeat min-h-[1000px]'>
        <div className="pt-28">
          <HomeSection
            title="JOIN US"
            description="Get involved and make a difference today"
          />
        </div>
      </div>
    </section>
  );
}
