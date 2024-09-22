import React from "react";
import Link from "next/link";
import { useState, useEffect } from "react";

interface Data {
  name: string;
  link: string;
  bg?: string;
  Navref: React.RefObject<HTMLElement | null>;
  toggler(): void;
  route(path: string): boolean;
}

export default function Navigation(props: Data) {
  const { name, link, bg, Navref, toggler, route } = props;
  const [screenWidth, setWidth] = useState(false);

  useEffect(() => {
    setWidth(window.screen.availWidth > 1024);
  }, []);

  function handleClick(e: React.MouseEvent<HTMLElement>) {
    if (!screenWidth) {
      Navref.current?.classList.remove("toggle");
      toggler();
    }
  }
  // currentPage === name?
  return (
    <Link
      onClick={handleClick}
      className={`${
        bg ? bg : ""
      } py-2 px-6 rounded-[25px] text-center mr-3 font-aventa_Semibold transition-all duration-300 ${
        route(link) ? "bg-[#F2F2F2]" : ""
      } hover:bg-[#F2F2F2] mb-3 lg:mb-0 ml-3 lg:ml-0`}
      href={link}
    >
      {" "}
      {name}
    </Link>
  );
}
