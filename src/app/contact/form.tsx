import useSendMessage from "./hooks/useSendMessage";
import clsx from "clsx";
import {
  ContactFormInput,
  ContactFormLabel,
  ContactFormPhone,
  ContactRequestType,
} from "./contactFormField";

export default function ContactForm() {
  const { formik } = useSendMessage();
  return (
    <section className="mt-8 mb-24">
      <form
        className={clsx("border border-[#DCDCDC] rounded-2xl bg-white p-7")}
        onSubmit={formik.handleSubmit}
      >
        <div className="grid lg:grid-cols-2 gap-x-10 gap-y-5">
          <div>
            <ContactFormLabel id="Name" label="Name*" />
            <ContactFormInput
              onblur={formik.handleBlur}
              onchange={formik.handleChange}
              name="Name"
              id="Name"
              textarea={false}
              value={formik.values.Name}
              placeholder="Your Name"
              type="text"
              touched={!!formik.touched.Name && !!formik.errors.Name}
              errorText={formik.errors.Name}
            />
          </div>
          <div>
            <ContactFormLabel id="email" label="Email*" />
            <ContactFormInput
              onblur={formik.handleBlur}
              onchange={formik.handleChange}
              name="email"
              id="email"
              textarea={false}
              value={formik.values.email}
              placeholder="Your Email"
              type="email"
              touched={!!formik.touched.email && !!formik.errors.email}
              errorText={formik.errors.email}
            />
          </div>
        </div>
        <div className="grid lg:grid-cols-2 gap-x-10 my-5">
          <ContactRequestType />
          {/* Phone number field */}
          <ContactFormPhone
           name="phoneNumber"
           placeholder="Enter your phone number"
           value={formik.values.phoneNumber}
           onchange={(value) => formik.setFieldValue("phoneNumber", value)}
           onblur={formik.handleBlur} // Pass Formik's handleBlur
           touched={!!formik.touched.phoneNumber}
           label="Phone Number"
           errorText={formik.errors.phoneNumber}
          />
        </div>
        <div>
          <ContactFormLabel id="Message" label="Message*" />
          <ContactFormInput
            onblur={formik.handleBlur}
            onchange={formik.handleChange}
            name="Message"
            id="Message"
            textarea={true}
            value={formik.values.Message}
            placeholder="Your Message"
            type=""
            touched={!!formik.touched.Message && !!formik.errors.Message}
            errorText={formik.errors.Message}
          />
        </div>
        <button type="submit">submit</button>
      </form>
    </section>
  );
}
