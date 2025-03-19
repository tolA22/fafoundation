import React from "react";
import ArrowOutwardIcon from "@mui/icons-material/ArrowOutward";
import Link from "next/link";

interface data {
  name: string;
  image: string;
  text: string;
  founder?: boolean;
}
const Profile = (props: data) => {
  const { name, image, text, founder } = props;
  return (
    <div className="flex flex-col max-w-[143px] lg:max-w-[255px]">
      <img src={image} alt="" />
      <div className=" font-aventa_Medium text-center">
        <p className="text-[12px] lg:text-[18px]">{name}</p>
        <p className="text-[9px] lg:text-[14px] text-[#072222B2]">{text}</p>
      </div>
      {founder && (
        <Link
          href="/founder"
          className=" pb-1 text-[#76AC3C]  transition-all duration-150 hover:opacity-70 mt-2 flex items-center justify-center font-aventa text-[14px]"
        >
          {" "}
          <p className=" text-[10px] lg:text-[14px] border-b border-b-[#76AC3C] flex gap-1">
            <span className=" ">Read more </span>{" "}
            <span className="relative -bottom-1 ">
              {" "}
              <img src="/arrow.png" alt="" />
            </span>
          </p>
        </Link>
      )}
    </div>
  );
};

export default Profile;
