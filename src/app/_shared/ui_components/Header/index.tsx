"use client";
import React, { useRef } from "react";
import Link from "next/link";
import { useEffect, useState } from "react";
import Navigation from "../Navigation";
import Socials from "../Socials";
import "./custom.css";

const index = () => {
  const [currentPage, setCurrentPage] = useState("");
  const [show, setShow] = useState(false);

  const navRef = useRef<HTMLElement | null>(null);

  useEffect(() => {
    // Check if window is available to ensure client-side execution
    if (typeof window !== "undefined") {
      const path = window.location.pathname;

      // Determine the current page based on the path
      if (path === "/home") {
        setCurrentPage("Home");
      } else if (path === "/about") {
        setCurrentPage("About");
      } else if (path === "/register") {
        setCurrentPage("Register");
      } else if (path === "/contact") {
        setCurrentPage("Contact");
      } else {
        setCurrentPage("Unknown"); // Fallback for untracked routes
      }
    }
  }, []);

  function toggle() {
    setShow(!show);
    if (show) {
      navRef.current?.classList.remove("toggle");
    } else {
      navRef.current?.classList.add("toggle");
    }
  }
  console.log(currentPage);
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
            link="/home"
            currentPage={currentPage}
            toggler={() => {
              setShow(false);
            }}
            setPage={(e: string) => {
              setCurrentPage(e);
            }}
          />
          <Navigation
            Navref={navRef}
            name="About"
            link="/about"
            currentPage={currentPage}
            toggler={() => {
              setShow(false);
            }}
            setPage={(e: string) => {
              setCurrentPage(e);
            }}
          />
          {/* <Navigation
            Navref={navRef}
            name="Blog"
            link="/Blog"
            currentPage={currentPage}
            toggler={() => {
              setShow(false);
            }}
            setPage={(e: string) => {
              setCurrentPage(e);
            }}
          /> */}
          <Navigation
            Navref={navRef}
            name="Contact"
            link="/contact"
            toggler={() => {
              setShow(false);
            }}
            currentPage={currentPage}
            setPage={(e: string) => {
              setCurrentPage(e);
            }}
          />
          <Link
            className="ml-3 lg:hidden mr-3 rounded-[20px] px-3 py-2 font- bg-[#EEA523] hover:opacity-70 duration-500 text-center font-aventa_Semibold"
            href="/donate"
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
};

export default index;
