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
  const headerRef = useRef<HTMLElement | null>(null);

  const isActive = (path: string) => pathname === path;

  function toggle() {
    setShow(!show);
    if (show) {
      navRef.current?.classList.remove("toggle");
    } else {
      navRef.current?.classList.add("toggle");
    }
  }

  // useEffect(() => {
  //   const handleScroll = () => {
  //     if (window.innerWidth >= 1024) {
  //       if (window.scrollY > 0) {
  //         headerRef.current?.classList.remove("lg:absolute");
  //         headerRef.current?.classList.remove("lg:top-10");
  //       } else {
  //         headerRef.current?.classList.add("lg:absolute");
  //         headerRef.current?.classList.add("lg:top-10");
  //       }
  //     }
  //   };

  //   window.addEventListener("scroll", handleScroll);
  //   return () => {
  //     window.removeEventListener("scroll", handleScroll);
  //   };
  // }, []);
  // max-w-[1050px] lg:top-10
  return (
    <header
      ref={headerRef}
      className=" py-5 sticky top-0 mx-auto items-center py  lg:top-0 left-0 right-0 w-full flex justify-between  bg-white px-4  z-50 transition-all duration-100 lg:px-10 "
    >
      <img className="max-w-[133px]" src="/icon.svg" alt="" />
      <div className="flex gap-10 items-center  lg:w-[60vw]  lg:flex justify-between ">
        <nav
          ref={navRef}
          className="flex w-full h-[95vh]  lg:rounded-0 lg:w-max flex-col lg:flex-row -top-[1000px] absolute lg:relative bg-white lg:top-0 left-0 pt-5 lg:pt-0 "
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
          <div className="mt-5 border-t border-[#EFEFEF]  pt-5">
            <Link
              className="ml-3 lg:hidden mr-3 rounded-[20px] px-3 py-3 font- bg-[#EEA523] hover:opacity-70 duration-500 text-center font-aventa_Semibold border-t border-[#EFEFEF] w-[90vw] block mx-auto"
              href="/donate"
              onClick={() => {
                if (window.screen.availWidth < 1024) {
                  navRef.current?.classList.remove("toggle");
                  setShow(false);
                }
              }}
            >
              Donate Now
            </Link>
          </div>

          <div className="lg:hidden flex justify-center gap-10 mt-5 border-y border-[#EFEFEF] py-5 ">
            <Socials link="" imgSrc="/four.png" />
            <Socials link="" imgSrc="/one.svg" />
            <Socials link="" imgSrc="/two.svg" />
            <Socials link="" imgSrc="/three.svg" />
          </div>
          <p className="mt-7 text-center lg:hidden">
            Copyright © Funmilayo Akinrimisi Foundation
          </p>
        </nav>

        <Link
          className="hidden lg:inline-block rounded-[20px] px-3 py-2 font-aventa_Semibold bg-[#EEA523] hover:opacity-70 duration-500 "
          href="/donate"
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
