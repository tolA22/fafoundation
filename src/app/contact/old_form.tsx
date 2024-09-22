"use client";
import React, { useState } from "react";
import PhoneInput from "react-phone-number-input";
import "react-phone-number-input/style.css";
import { useFormik } from "formik";
import * as Yup from "yup";
import HomeSection from "../_shared/ui_components/home_section";

const page = () => {
  const [phoneNumber, Phone] = useState("");
  const [Name, SetName] = useState("");
  const [email, SetEmail] = useState("");
  const [Message, SetMessage] = useState("");

  const formik = useFormik({
    initialValues: {
      phoneNumber: "",
      Name: "",
      email: "",
      Message: "",
    },
    validationSchema: Yup.object({
      phoneNumber: Yup.string()
        .matches(/^[0-9]+$/, "Must be only digits")
        .min(10, "Phone number must be at least 10 digits")
        .required("Phone number is required"),
      Name: Yup.string().required("Please Input Your Name"),
      email: Yup.string().required("Email is Required"),
      Message: Yup.string().required("Please Enter Text"),
    }),

    onSubmit: (values) => {
      console.log("Form values", values);
    },
  });
  return (
    <div className=" ">
      <header className=' pt-[2rem] pb-12 bg-[url("/hero_mobile.svg")]   lg:bg-cover lg:bg-[url("/Hero-bg.png")]  bg-no-repeat min-h-[100px] lg:pt-[11rem]  lg:pb-32 flex items-center flex-col lg:pt-64 mx-auto 2xl:bg-cover '>
        <HomeSection
          title="CONTACT US"
          description="For donations, partnership & further enquiries"
          titleClassName="!text-[#FFFFFFCC]"
          descriptionClassName="!text-[#EAE5D3] lg:max-w-[850px]"
          center
          sectionClassName="mt-16"
          descriptionHeaderStyle
        />
      </header>
      <section className='pt-16 lg:pt-[12rem] min-w-full bg-[url("/focus_mobile.svg")] lg:bg-[url("/focus.svg")] bg-cover  bg-no-repeat min-h-[300px]  px-4  pb-16 lg:pb-32  mt-[-5rem]'>
        <p className="font-aventa_Semibold lg:text-[32px] text-left">
          Send us a message
        </p>
        <h3 className="font-aventa_Medium mt-3 mb-6 text-[20px] text-left">
          Kindly provide the required information
        </h3>
        <form
          onSubmit={formik.handleSubmit}
          className="bg-white lg:bg-inherit max-w-[891px] mx-auto border-[#DCDCDC] rounded-3xl px-8 pt-10 pb-28 border"
        >
          <div className="grid lg:grid-cols-2 gap-10 mb-5">
            <div className="flex flex-col ">
              <label
                htmlFor="Name"
                className="mb-2 text-sm font-medium text-gray-700 font-poppins_semiBold"
              >
                <span>First Name </span>
                <span className="">*</span>
              </label>
              <input
                id="Name"
                name="Name"
                type="text"
                placeholder="First Name"
                value={formik.values.Name}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                className="p-2 border border-gray-300  focus:outline-none focus:ring-1 focus:ring-gray-500 bg-white rounded-[18px]"
              />
              {formik.touched.Name && formik.errors.Name ? (
                <div className="text-red-500 text-sm mt-1">
                  {formik.errors.Name}
                </div>
              ) : null}
            </div>
            <div className="flex flex-col">
              <label
                htmlFor="email"
                className="mb-2 text-sm font-medium text-gray-700 font-poppins_semiBold"
              >
                <span>Last Name </span>
                <span className="">*</span>
              </label>
              <input
                id="email"
                name="email"
                type="text"
                placeholder="Email"
                value={formik.values.email}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                className="p-2 border border-gray-300   focus:outline-none focus:ring-1 focus:ring-gray-500 bg-white rounded-[18px] "
              />
              {formik.touched.email && formik.errors.email ? (
                <div className="text-red-500 text-sm mt-1">
                  {formik.errors.email}
                </div>
              ) : null}
            </div>
          </div>
          <div className="grid lg:grid-cols-2 gap-10 mt-3">
            <div>
              <p className="text-sm font-medium">Type Of Request</p>
              <p className="rounded-[16px] p-2 mt-2 border border-gray-300 text-sm font-medium text-gray-600">
                Mail
              </p>
            </div>
            <div className="rounded-[16px] b ">
              <p className="text-sm font-medium mb-2">Phone Number</p>
              <div className="rounded-[16px] p-2 mt-2 border border-gray-300 bg-white">
                <PhoneInput
                  className="phone "
                  value={formik.values.phoneNumber}
                  defaultCountry="NG"
                  placeholder="271553047545"
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                />
              </div>
              {formik.touched.phoneNumber && formik.errors.phoneNumber ? (
                <div className="text-red-500 text-sm mt-1">
                  {formik.errors.phoneNumber}
                </div>
              ) : null}
            </div>
          </div>

          <div className="flex flex-col mt-3">
            <label
              htmlFor="message"
              className="mb-2 text-sm font-medium text-gray-700 font-poppins_semiBold"
            >
              <span>Last Name </span>
              <span className="">*</span>
            </label>
            <textarea
              id="message"
              name="message"
              placeholder="Message"
              value={formik.values.Message}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              className="p-2 border border-gray-300   focus:outline-none focus:ring-1 focus:ring-gray-500 bg-white rounded-[18px] resize-none h-[130px]"
            />
            {formik.touched.Message && formik.errors.Message ? (
              <div className="text-red-500 text-sm mt-1">
                {formik.errors.Message}
              </div>
            ) : null}
          </div>

          <button
            type="submit"
            className="float-right py-3 font-aventa_Semibold px-7 rounded-2xl bg-[#76AC3C] mt-5"
          >
            Submit
          </button>
        </form>
        <article className="max-w-[891px] mx-auto mt-20">
          <h5 className="font-aventa_Semibold text-[20px] lg:text-[32px]">
            or Reach us at
          </h5>
          <p className="mb-6">
            You can stop by our head office or give us a call
          </p>
          <div className=" flex gap-5 flex-col justify-between lg:flex-row">
            <div className="p-5 flex lg:w-3/5 border-[#DCDCDC] rounded-3xl border">
              <div className="rounded-full p-[5px] border-[#DCDCDC] border h-max mr-2">
                <img src="/location.svg" alt="" />
              </div>

              <article className=" font-aventa_Light">
                <span className="mb-2 font-aventa_Light">Address</span>
                <p className="">
                  42 Elekuku Idera Behind Trumed Chemist, off Adeoyo Hospital
                  Road, Ibadan, Oyo State, Nigeria.
                </p>
              </article>
            </div>
            <div className="border-[#DCDCDC] rounded-3xl border lg:w-2/5 flex p-5">
              <div className="rounded-full p-[5px] border-[#DCDCDC] border h-max mr-2">
                {" "}
                <img className="w-[15px] h-[15px]" src="/phone.svg" alt="" />
              </div>

              <article className="font-aventa_Light">
                <span className="mb-2 font-aventa_Light">Phone Number</span>
                <p className="">+234 903 2298 754</p>
                <p className="mt-2">+234 803 4280 407</p>
                <p className="mt-2">+234 811 3949 700</p>
              </article>
            </div>
          </div>
        </article>
      </section>
    </div>
  );
};

export default page;
