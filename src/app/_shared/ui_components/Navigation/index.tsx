import React from "react";
import Link from "next/link";
import { useState, useEffect } from "react";

interface Data {
  name: string;
  link: string;
  bg?: string;
  currentPage: string;
  Navref: React.RefObject<HTMLElement | null>;
  toggler(): void;
  setPage(e:string):void
}

const index = (props: Data) => {
  const { name, link, bg, currentPage, Navref, toggler,setPage } = props;
  const [screenWidth, setWidth] = useState(false);

  useEffect(() => {
    setWidth(window.screen.availWidth > 1024);
  }, []);

  function handleClick(e: React.MouseEvent<HTMLElement>) {
    setPage(name)
    
    if (!screenWidth) {
      Navref.current?.classList.remove("toggle");
      toggler();
    }
  }
  return (
    <Link
    onClick={handleClick}
      className={`${
        bg ? bg : ""
      } py-3 px-3 rounded-[20px] text-center mr-3 font-aventa_Semibold transition-all duration-300 ${
        currentPage === name? "bg-[#F2F2F2]" : ""
      } hover:bg-[#F2F2F2] mb-3 lg:mb-0 ml-3 lg:ml-0`}
      href={link}
    >
      {" "}
      {name}
    </Link>
  );
};

export default index;
