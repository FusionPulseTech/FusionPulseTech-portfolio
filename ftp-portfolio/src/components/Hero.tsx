import React from "react";
import { IoIosSquare } from "react-icons/io";
import Image from "next/image";
import Link from "next/link";

const Hero = () => {
  return (
    <>
      <section className="bg-[#F0F4FF] text-gray-800 flex items-center">
        <div className="rotate-180 [writing-mode:_vertical-lr] p-5 hidden lg:block">
          <div className="text-sm font-medium">
            <Link
              href="#"
              className="hover:text-[#684DF4] transition-colors duration-300"
            >
              FACEBOOK{" "}
              <IoIosSquare className="text-[#684DF4] inline-flex my-3 mr-2" />
            </Link>
            <Link
              href="#"
              className="hover:text-[#684DF4] transition-colors duration-300"
            >
              TWITTER{" "}
              <IoIosSquare className="text-[#684DF4] inline-flex my-3 mr-2" />
            </Link>
            <Link
              href="#"
              className="hover:text-[#684DF4] transition-colors duration-300"
            >
              INSTAGRAM{" "}
              <IoIosSquare className="text-[#684DF4] inline-flex my-3 mr-2" />
            </Link>
            <Link
              href="#"
              className="hover:text-[#684DF4] transition-colors duration-300"
            >
              LINKEDIN{" "}
            </Link>
          </div>
        </div>
        <div className="max-w-7xl container mx-auto flex flex-col items-center justify-center p-6 sm:py-12 lg:py-24 lg:flex-row lg:justify-between">
          <div className="flex flex-col justify-center py-6 text-center rounded-sm lg:max-w-md xl:max-w-lg lg:text-left">
            <p className="leading-relaxed text-xl font-medium pb-4 text-[#684DF4]">
              Empowering Your Digital Transformation.
            </p>
            <h1 className="text-5xl font-bold sm:text-6xl">
              Your Simplest Path to Success.
            </h1>
            <p className="mt-6 mb-8 text-lg sm:mb-12 text-gray-500">
              Transform your business with FusionPulse Tech&apos;s cutting-edge
              software solutions. We provide the tools and expertise you need to
              streamline operations, enhance productivity, and stay ahead in the
              digital age.
            </p>
            <div className="flex flex-col space-y-4 sm:items-center sm:justify-center sm:flex-row sm:space-y-0 sm:space-x-4 lg:justify-start">
              <a
                href="#"
                className="px-8 py-3 mr-4 text-lg font-medium rounded bg-[#684DF4] text-white hover:bg-gray-900 transition-colors duration-700"
              >
                MAKE SCHEDULE
              </a>
            </div>
          </div>
          <div className="flex items-center justify-center py-6 lg:py-5 my-12 lg:my-0 h-72 sm:h-80 lg:h-96 xl:h-112 2xl:h-128">
            <Image
              src="/strategy-development.png"
              className="drop-shadow-md"
              width={500}
              height={500}
              alt="Picture of the author"
            />
          </div>
        </div>
      </section>
    </>
  );
};

export default Hero;
