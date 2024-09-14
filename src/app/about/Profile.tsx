import React from "react";

interface data {
  name: string;
  image: string;
  text: string;
}
const Profile = (props: data) => {
  const { name, image, text } = props;
  return (
    <div className="flex flex-col max-w-[143px] lg:max-w-[255px]">
      <img src={image} alt="" />
      <div className=" font-aventa_Medium text-center">
        <p className="text-[12px] lg:text-[18px]">{name}</p>
        <p className="text-[9px] lg:text-[14px] text-[#072222B2]">{text}</p>
      </div>
    </div>
  );
};

export default Profile;
