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
        className="text-gray-800 bg-[#F5F5F5] body-font overflow-hidden"
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
                ABOUT FUSION PULSE TECH
              </p>
              <h1 className="text-3xl font-bold py-5">
                For Your Business We Provide Best <br />
                <span className="text-[#684DF4] font-medium">IT Solution</span>
              </h1>
              <p className="leading-relaxed pb-2">
                At FusionPulse Tech, we specialize in delivering innovative and
                intuitive e-services tailored to your unique business needs. Our
                team is dedicated to re-engineering value-added IT systems and
                creating compelling solutions for various niches.
              </p>
              <p className="leading-relaxed">
                We combine strategic agile practices with cutting-edge
                technology to deliver superior results. Our mission is to
                globally customize and deliver high-quality, equity-invested
                imperatives that drive your business forward.
              </p>
              <div className="font-semibold space-y-3 py-10 text-sm">
                <p>
                  <FaCheckSquare className="bg-white text-[#684DF4] inline-flex text-xl mr-1" />{" "}
                  Custom Software Development
                </p>
                <p>
                  <FaCheckSquare className="bg-white text-[#684DF4] inline-flex text-xl mr-1" />{" "}
                  Website & Mobile Application Design & Development
                </p>
                <p>
                  <FaCheckSquare className="bg-white text-[#684DF4] inline-flex text-xl mr-1" />{" "}
                  Professional User Experience & Interface Research
                </p>
                <p>
                  <FaCheckSquare className="bg-white text-[#684DF4] inline-flex text-xl mr-1" />{" "}
                  Maintenance and Domain-Hosting Support
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
