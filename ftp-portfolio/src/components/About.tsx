import React from "react";
import { FaCheckSquare } from "react-icons/fa";
import { LiaVectorSquareSolid } from "react-icons/lia";
import { FaArrowRight } from "react-icons/fa6";
import Image from "next/image";

const About = () => {
  return (
    <>
      <section
        id="aboutus"
        className="text-gray-900 bg-[#F5F5F5] body-font overflow-hidden"
      >
        <div className="container px-5 py-24 mx-auto max-w-7xl">
          <div className="mx-auto flex items-center flex-wrap">
            <Image
              src="/vector1.svg"
              className="drop-shadow-md"
              width={600}
              height={500}
              alt="Picture of about vector"
            />
            <div className="lg:w-1/2 w-full lg:pl-10 lg:py-6 mt-6 lg:mt-0">
              <p className="leading-relaxed text-xl text-[#684DF4]">
                <LiaVectorSquareSolid className="text-white bg-[#684DF4] inline-flex text-2xl mr-1" />{" "}
                ABOUT FUSION PULSE TECH IT SOLUTIONS
              </p>
              <h1 className="text-3xl font-bold py-10">
                Preparing For Your Business Provide Best{" "}
                <span className="text-[#684DF4] font-medium">IT Solution</span>
              </h1>
              <p className="leading-relaxed">
                Quickly re-engineer intuitive e-services whereas compelling
                niches. Professionally syndicate strategic e-commerce without
                covalent leadership skills. Globally customize equity invested
                imperatives.
              </p>
              <div className="font-semibold space-y-3 py-10 text-sm">
                <p>
                  <FaCheckSquare className="bg-white text-[#684DF4] inline-flex text-xl mr-1" />{" "}
                  Dramatically re-engineer value added IT systems via mission
                </p>
                <p>
                  <FaCheckSquare className="bg-white text-[#684DF4] inline-flex text-xl mr-1" />{" "}
                  Website & Mobile application design & Development
                </p>
                <p>
                  <FaCheckSquare className="bg-white text-[#684DF4] inline-flex text-xl mr-1" />{" "}
                  Professional User Experince & Interface researching
                </p>
              </div>
              <div className="flex">
                <button className=" text-white bg-indigo-500 border-0 py-3 px-6 focus:outline-none hover:bg-gray-900 transition-colors duration-700 rounded">
                  DISCOVER MORE{" "}
                  <FaArrowRight className="inline-flex mb-1 ml-1" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default About;
