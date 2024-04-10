"use client";

import Link from 'next/link'; // Import the Link component
import "flowbite";
import Toggler from "./Toggler";
import { useState, useEffect, FC } from "react";
import "@/custom-styling/Underline.css";
import { usePathname } from "next/navigation";
import { Disclosure } from "@headlessui/react";


const Navbar: FC = () => {
  const [theme, setTheme] = useState<string>("dark"); // Specify type for state
  const pathname = usePathname();
    const [isSmallScreen, setIsSmallScreen] = useState(false);

  
  const isCurrentPage = (href: string) => {
    // Adjust this logic based on how your URLs are structured
    return (
      pathname === href
    );
  };

  useEffect(() => {
    const checkScreenSize = () => {
      setIsSmallScreen(window.innerWidth < 768); // 640px is Tailwind's 'sm' breakpoint
    };

    checkScreenSize();
    window.addEventListener("resize", checkScreenSize);

    return () => window.removeEventListener("resize", checkScreenSize);
  }, []);

  return (
    <Disclosure
      as="nav"
      className={` z-10 bg-white dark:bg-gray-800 ${
        isSmallScreen ? "sticky top-0" : ""
      }`}
    >      <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
        <div className="flex items-center space-x-3 rtl:space-x-reverse">
        <Link href="/">
            <h1 className="text-xl dark:text-white text-black font-normal">
                Daniel Ha
            </h1>
        </Link>
        <Toggler/>
        </div>
        <button
          data-collapse-toggle="navbar-multi-level"
          type="button"
          className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
          aria-controls="navbar-multi-level"
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
              strokeWidth="2"
              d="M1 1h15M1 7h15M1 13h15"
            />
          </svg>
        </button>
        <div
          className="hidden w-full md:block md:w-auto"
          id="navbar-multi-level"
        >
          <ul className="flex flex-col font-medium p-4 md:p-0 rounded-lg md:space-x-8 rtl:space-x-reverse md:flex-row md:mt-0 md:border-0">
            <li>
              <Link
                href="/"
                className={`block py-2 px-3 text-gray-900 rounded md:border-0 md:hover:custom-underline md:p-0 dark:text-white md:dark:hover:text-gray-700 md:hover:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent ${
                  isCurrentPage("/") ? "custom-underline" : ""
                }`}
              >
                About
              </Link>
            </li>
            <li>
              <Link
                href="/projects"
                className={`block py-2 px-3 text-gray-900 rounded md:border-0 md:hover:custom-underline md:p-0 dark:text-white md:dark:hover:text-gray-700 md:hover:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent ${
                  isCurrentPage("/projects") ? "custom-underline" : ""
                }`}              >
                Projects
              </Link>
            </li>
            <li>
              <Link
                href="/data_visualizations"
                className={`block py-2 px-3 text-gray-900 rounded md:border-0 md:hover:custom-underline md:p-0 dark:text-white md:dark:hover:text-gray-700 md:hover:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent ${
                  isCurrentPage("/data_visualizations") ? "custom-underline" : ""
                }`}              >
                Data Visualizations
              </Link>
            </li>
            <li>
              <Link
                href="/daniel_ha_resume.pdf"
                className="block py-2 px-3 text-gray-900 rounded md:border-0 md:hover:custom-underline md:p-0 dark:text-white md:dark:hover:text-gray-700 md:hover:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent"
              >
                Resume
              </Link>
            </li>
            {/* <li>
              <button
                id="dropdownNavbarLink"
                data-dropdown-toggle="dropdownNavbar"
                className="flex items-center py-2 px-3 text-gray-900 rounded md:border-0 md:hover:custom-underline md:p-0 dark:text-white md:dark:hover:text-gray-700 md:hover:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent">
                More{" "}
                <svg
                  className="w-2.5 h-2.5 ms-2.5"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 10 6"
                >
                  <path
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="m1 1 4 4 4-4"
                  />
                </svg>
              </button>
              <div
                id="dropdownNavbar"
                className="z-10 hidden font-normal bg-white divide-y divide-gray-100 rounded-lg shadow w-44 dark:bg-gray-700 dark:divide-gray-600"
              >
                <ul
                  className="py-2 text-sm text-gray-700 dark:text-gray-200"
                  aria-labelledby="dropdownLargeButton"
                >
                  <li>
                    <Link href="/team/daniel-ha" className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">
                      Create notes!
                    </Link>
                  </li>
                  <li>
                    <Link href="/team/daniel-bird" className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">
                      Daniel Bird
                    </Link>
                  </li>
                  <li>
                    <Link href="/team/adam-gill" className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">
                      Adam Gill
                    </Link>
                  </li>
                </ul>
              </div>
            </li> */}
          </ul>
        </div>
      </div>
    </Disclosure>
  );
}

export default Navbar;
