"use client";
import { useState } from "react";
import Link from "next/link";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
    <nav className="bg-[#E1EAFF] sticky top-0 z-10">
      <div className="max-w-7xl mx-auto p-2 sm:px-6 lg:px-4">
        <div className="relative flex items-center justify-between h-16">
          <div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white"
              aria-controls="mobile-menu"
              aria-expanded="false"
            >
              <span className="sr-only">Open main menu</span>
              {!isOpen ? (
                <svg
                  className="block h-6 w-6"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  aria-hidden="true"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M4 6h16M4 12h16m-7 6h7"
                  />
                </svg>
              ) : (
                <svg
                  className="block h-6 w-6"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  aria-hidden="true"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              )}
            </button>
          </div>
          <div className="flex-1 flex items-center justify-center lg:justify-between sm:items-stretch sm:justify-start">
            <div className="flex-shrink-0">
              <Link href="#" className="text-gray-700 text-3xl font-bold">
                FPT
              </Link>
            </div>
            <div className="hidden sm:block sm:ml-6">
              <div className="flex space-x-4">
                <Link
                  href="#"
                  className="text-gray-700 hover:text-[#684DF4] transition-colors duration-300 px-3 py-2 rounded-md text-sm font-medium"
                >
                  HOME
                </Link>
                <Link
                  href="#projects"
                  className="text-gray-700 hover:text-[#684DF4] transition-colors duration-300 px-3 py-2 rounded-md text-sm font-medium"
                >
                  PRODUCT
                </Link>
                <Link
                  href="#services"
                  className="text-gray-700 hover:text-[#684DF4] transition-colors duration-300 px-3 py-2 rounded-md text-sm font-medium"
                >
                  SERVICES
                </Link>
                <Link
                  href="#aboutus"
                  className="text-gray-700 hover:text-[#684DF4] transition-colors duration-300 px-3 py-2 rounded-md text-sm font-medium"
                >
                  ABOUT US
                </Link>
                <Link
                  href="#contact"
                  className="text-gray-700 hover:text-[#684DF4] transition-colors duration-300 px-3 py-2 rounded-md text-sm font-medium"
                >
                  CONTACT US
                </Link>
                <Link
                  href="#blog"
                  className="text-gray-700 hover:text-[#684DF4] transition-colors duration-300 px-3 py-2 rounded-md text-sm font-medium"
                >
                  BLOG
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div
        className={`sm:hidden ${isOpen ? "block" : "hidden"}`}
        id="mobile-menu"
      >
        <div className="px-2 pt-2 pb-3 space-y-1">
          <Link
            href="#"
            className="text-gray-700 hover:text-[#684DF4] transition-colors duration-300 block px-3 py-2 rounded-md text-base font-medium"
          >
            HOME
          </Link>
          <Link
            href="#projects"
            className="text-gray-700 hover:text-[#684DF4] transition-colors duration-300 block px-3 py-2 rounded-md text-base font-medium"
          >
            PRODUCT
          </Link>
          <Link
            href="#services"
            className="text-gray-700 hover:text-[#684DF4] transition-colors duration-300 block px-3 py-2 rounded-md text-base font-medium"
          >
            SERVICES
          </Link>
          <Link
            href="#aboutus"
            className="text-gray-700 hover:text-[#684DF4] transition-colors duration-300 block px-3 py-2 rounded-md text-base font-medium"
          >
            ABOUT US
          </Link>
          <Link
            href="#contact"
            className="text-gray-700 hover:text-[#684DF4] transition-colors duration-300 block px-3 py-2 rounded-md text-base font-medium"
          >
            CONTACT
          </Link>
          <Link
            href="#blog"
            className="text-gray-700 hover:text-[#684DF4] transition-colors duration-300 block px-3 py-2 rounded-md text-base font-medium"
          >
            BLOG
          </Link>
        </div>
      </div>
    </nav>
    </>
  );
};

export default Header;
