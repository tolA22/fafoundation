import ContactBox from "./contactBox";
import ContactText, { ContactSubText } from "./contactText";
import Form from './form'
export default function ContactBody() {
  return (
    <section className='bg-[url("/focus_mobile.svg")] lg:bg-[url("/focus.svg")] bg-cover bg-no-repeat min-h-[400px] mt-[-10rem] lg:mt-[-3.3rem] '>
      <section
        id="contact_body_centering_wrapper"
        className="px-2 lg:w-[70%] lg:mx-auto justify-center"
      >
        <section
          id="contact_body_form_title_and_description"
          className="pt-[5rem] lg:pt-[7rem]"
        >
          <ContactText text="Send us a message" />
          <ContactSubText text="Kindly provide the required information (*)" />
        </section>
        <Form/>
        <section id="contact_body_reach_us_section " className="pb-[12rem]">
          <section>
            <ContactText text=" or Reach us at" />
            <ContactSubText text="You can stop by our head office or give us a call" />
          </section>
          <section
            id="contact_and_address"
            className="flex flex-col lg:flex-row gap-y-6 mt-4 lg:gap-x-6"
          >
            <section className="lg:w-3/5">
              <ContactBox
                title="Address"
                img="/location.svg"
                subText="42 Elekuku Idera Behind Trumed Chemist, off Adeoyo Hospital
                  Road, Ibadan, Oyo State, Nigeria."
              />
            </section>
            <section className="lg:w-2/5">
              <ContactBox
                title="Phone Number"
                img="/phone.svg"
                subText="+234 903 2298 754, +234 803 4280 407,+234 811 3949 700"
              />
            </section>
          </section>
        </section>
      </section>
    </section>
  );
}
