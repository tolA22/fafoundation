import React from "react";

interface Data {
  link: string;
  imgSrc: string;
}
const index = (props: Data) => {
  const { link, imgSrc } = props;
  return (
    <a href={link}>
      {" "}
      <img src={imgSrc} alt="" />
    </a>
  );
};

export default index;
