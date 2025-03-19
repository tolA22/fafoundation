import React from "react";

interface props {
  label: string;
  content: string;
}
const AccountDetails = (props: props) => {
  const { label, content } = props;
  return (
    <div className="mt-4 font-aventa  w-full  text-[14px] lg:text-[16px]">
      <p>{label}</p>
      <input
        className="mt-2 rounded-xl py-3 px-2 bg-[#F3F4F7] w-full"
        type="text"
        value={content}
        readOnly
      />
    </div>
  );
};

export default AccountDetails;
