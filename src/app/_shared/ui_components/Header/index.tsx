"use client";
import React, { useRef } from "react";
import Link from "next/link";
import { useEffect, useState } from "react";
import Navigation from "../Navigation";
import Socials from "../Socials";
import "./custom.css";
import { usePathname } from "next/navigation";

export default function Header() {
  const [show, setShow] = useState(false);
  const pathname = usePathname();

  const navRef = useRef<HTMLElement | null>(null);

  const isActive = (path: string) => pathname === path;

  function toggle() {
    setShow(!show);
    if (show) {
      navRef.current?.classList.remove("toggle");
    } else {
      navRef.current?.classList.add("toggle");
    }
  }
  return (
    <header className=" py-5 sticky top-0 mx-auto items-center py lg:absolute lg:top-10 left-0 right-0 w-full flex justify-between max-w-[1050px] bg-white px-4 lg:rounded-2xl">
      <img className="max-w-[133px]" src="/icon.svg" alt="" />
      <div className="flex gap-10 items-center   ">
        <nav
          ref={navRef}
          className="flex w-full-minus-10 rounded-[20px] lg:rounded-0 lg:w-max flex-col lg:flex-row top-[-600px] absolute lg:relative lg:left-[-170px] bg-white lg:top-0 left-5 pt-5 lg:pt-0"
        >
          <Navigation
            Navref={navRef}
            name="Home"
            link="/"
            toggler={() => {
              setShow(false);
            }}
            route={isActive}
          />
          <Navigation
            Navref={navRef}
            name="About"
            link="/about"
            toggler={() => {
              setShow(false);
            }}
            route={isActive}
          />
          <Navigation
            Navref={navRef}
            name="Contact"
            link="/contact"
            toggler={() => {
              setShow(false);
            }}
            route={isActive}
          />
          <Link
            className="ml-3 lg:hidden mr-3 rounded-[20px] px-3 py-2 font- bg-[#EEA523] hover:opacity-70 duration-500 text-center font-aventa_Semibold"
            href="/contact"
          >
            Donate Now
          </Link>
          <div className="lg:hidden flex justify-between mt-5 border-t border-[#EFEFEF] py-5 mx-5">
            <Socials link="" imgSrc="/four.png" />
            <Socials link="" imgSrc="/one.svg" />
            <Socials link="" imgSrc="/two.svg" />
            <Socials link="" imgSrc="/three.svg" />
          </div>
        </nav>

        <Link
          className="hidden lg:inline-block rounded-[20px] px-3 py-2 font-aventa_Semibold bg-[#EEA523] hover:opacity-70 duration-500 "
          href="/contact"
        >
          Donate Now
        </Link>
      </div>
      <div className="lg:hidden flex ">
        <div className=" ">
          {show ? (
            <img
              className="cursor-pointer"
              onClick={toggle}
              src="/cancel.png"
            />
          ) : (
            <img
              className="cursor-pointer"
              onClick={toggle}
              src="/coolicon.png"
            />
          )}
        </div>
      </div>
    </header>
  );
}
