"use client";
import React from "react";
import { Disclosure } from "@headlessui/react";
import { ChevronUpIcon } from "@heroicons/react/24/solid";

const faqs = [
  {
    question: "Can I donate in someone’s honor?",
    answer:
      "Yes! If you'd like to donate in honor of a loved one, simply include their name in your payment reference and let us know ",
  },
  {
    question: "How do I know my donation is making a difference?",
    answer:
      "We share regular updates, impact reports, and success stories on our website and social media.",
  },
  {
    question: "How do I know my donation is secure?",
    answer:
      "Since we only accept direct bank transfers, there’s no risk of third-party fraud or transaction mishandling. Our account details are verified and officially listed on our website.",
  },
  {
    question: "Is there a minimum donation amount?",
    answer:
      "No! Every contribution, big or small, makes a difference. Whether it's [$5, $50, or $500], your generosity directly impacts those in need.",
  },

  {
    question: "Can I donate goods or services instead of money?",
    answer:
      "Yes! If you’d like to contribute supplies, food, educational materials, or professional services, please contact us to arrange a donation",
  },
  {
    question: "Can I donate on behalf of a company or organization.",
    answer:
      "Absolutely! Businesses and organizations can make donations via bank transfer and request an official acknowledgment letter for their records. ",
  },
];

export default function FAQ() {
  return (
    <div className=" w-[90%] lg:w-[80vw] max-w-[1048px] mx-auto p-4 bg-white rounded-2xl shadow-sm mt-12 border-gray-100 border text-[#072222]">
      {faqs.map((faq, index) => (
        <Disclosure key={index}>
          {({ open }) => (
            <>
              <Disclosure.Button className="flex justify-between w-full p-4 text-lg font-medium text-left border-b">
                {faq.question}
                <ChevronUpIcon
                  className={`w-5 h-5 ${open ? "rotate-180" : ""}`}
                />
              </Disclosure.Button>
              {faq.answer && (
                <Disclosure.Panel className="p-4 text-gray-600">
                  {faq.answer}
                </Disclosure.Panel>
              )}
            </>
          )}
        </Disclosure>
      ))}
    </div>
  );
}
