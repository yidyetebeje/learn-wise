"use client";

import React, { useState, useEffect } from "react";

import Link from "next/link";
import { useRouter } from "next/navigation";
import {GiEarthAfricaEurope} from 'react-icons/gi'

export default function Nav() {
  const [openMenu, setOpenMenu] = useState<boolean>(false);
  const router = useRouter();

  useEffect(() => {
    const handleScroll = () => {
      const navbar:Element|null = document.querySelector(".bg-transparent");
      const scrolled = window.scrollY > 0;

      if (scrolled) {
        navbar.classList.add("bg-gray-100");
      } else {
        navbar.classList.remove("bg-gray-100");
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const handleToggle = () => {
    setOpenMenu(!openMenu);
  };
  return (
    <nav className="bg-transparent fixed w-full z-50 top-0">
      <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto py-4 px-2">
        <Link href="/">
            <h2 className="text-4xl font-semibold">
                <GiEarthAfricaEurope size={50} className='inline-block text-purple-800 pb-2' />
                <span className="font-montserrat">Learn</span>
                <span className="text-purple-800 text-4xl">Wise</span>
            </h2>
        </Link>
        <div className="flex lg:order-2 items-center">
          <div className="hidden content-end row-span-1 lg:flex lg:gap-0 lg:items-center">
            {/* <Image 
                src='/profileAvatar.jpeg'
                alt="profile image"
                width={50} 
                height={50} /> */}
            <span
            className={`text-[#3C3C3C] text-base font-semibold font-montserrat cursor-pointer hover:bg-purple-800/20 hover:border-1  h-12 pt-[10px] text-center rounded-full w-28`}
            >
            Login
            </span>
            <span>
              <button
                onClick={() => router.push("/")}
                className="border-2 rounded-full w-28  px-5 h-12 bg-purple-800 hover:bg-purple-900 text-white text-base font-semibold font-montserrat"
              >
                sign up
              </button>
            </span>
          </div>
          <button
            data-collapse-toggle="navbar-sticky"
            type="button"
            onClick={handleToggle}
            className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg lg:hidden hover:bg-gray-100 lg focus:outline-none focus:ring-2"
            aria-controls="navbar-sticky"
            aria-expanded="false"
          >
            <span className="sr-only">Open main menu</span>
            <svg
              className="w-5 h-5"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 17 14"
            >
              <path
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M1 1h15M1 7h15M1 13h15"
              />
            </svg>
          </button>
        </div>
        <div
          className={`${
            openMenu ? "" : "hidden"
          } items-center justify-between w-full lg:flex lg:w-auto lg:order-1 lg:ml-10`}
          id="navbar-sticky"
        >
          <ul className="flex flex-col p-4 lg:p-0 mt-4 font-medium  lg:flex-row lg:space-x-8 lg:mt-0 lg:border-0  ">
            <li>
              <Link
                href="/"
                className="block py-2 pl-3 pr-4 lg:bg-transparent  lg:p-0 text-[#3C3C3C] text-base font-semibold font-montserrat border-transparent hover:text-purple-800 border-b-2  hover:border-purple-800 "
                aria-current="page"
              >
                Home
              </Link>
            </li>
            <li>
              <Link
                href=""
                className="block py-2 pl-3 pr-4 lg:bg-transparent  lg:p-0 text-[#3C3C3C] text-base font-semibold font-montserrat border-transparent hover:text-purple-800 border-b-2 hover:border-purple-800 "
              >
                About
              </Link>
            </li>
            <li>
              <Link
                href=""
                className="block py-2 pl-3 pr-4 lg:bg-transparent  lg:p-0 text-[#3C3C3C] text-base font-semibold font-montserrat border-transparent hover:text-purple-800 border-b-2 hover:border-purple-800 "
              >
                Testimonials  
              </Link>
            </li>
            <li>
              <Link
                href=""
                className="block py-2 pl-3 pr-4 lg:bg-transparent  lg:p-0 text-[#3C3C3C] text-base font-semibold font-montserrat border-transparent hover:text-purple-800 border-b-2  hover:border-purple-800 "
              >
                FAQs 
              </Link>
            </li>
            <li>
              <Link
                href=""
                className="block py-2 pl-3 pr-4 lg:bg-transparent  lg:p-0 text-[#3C3C3C] text-base font-semibold font-montserrat border-transparent hover:text-purple-800 border-b-2  hover:border-purple-800 "
              >
                Get Involved 
              </Link>
            </li>
            <li>
              <Link
                href="#"
                className="lg:hidden block py-2 pl-3 pr-4 rounded text-[#3C3C3C] text-base font-semibold font-montserrat hover:bg-gray-100 lg:hover:bg-white   lg:p-0   "
              >
                Login
              </Link>
            </li>
            <li>
              <Link
                href="#"
                className="lg:hidden block py-2 pl-3 pr-4 rounded text-[#3C3C3C] text-base font-semibold font-montserrat hover:bg-gray-100 lg:hover:bg-white   lg:p-0   "
              >
                Donate
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}
