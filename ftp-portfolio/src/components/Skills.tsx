import Image from "next/image";
import React from "react";
import { LiaVectorSquareSolid } from "react-icons/lia";

const Skills = () => {
  return (
    <>
      <section className="text-gray-600 body-font overflow-hidden bg-[#F5F5F5]">
        <div className="container px-5 py-24 mx-auto max-w-7xl">
          <div className="mx-auto flex items-center flex-wrap">
            <div className="lg:w-1/2 w-full lg:pr-10 lg:py-6 mb-6 lg:mb-0">
              <p className="leading-3 text-xl text-[#684DF4]">
                <LiaVectorSquareSolid className="text-white bg-[#684DF4] inline-flex text-2xl mr-1" />{" "}
                GREAT IT SKILLS
              </p>
              <h1 className="text-3xl font-bold py-10">
                Decades of Expertise Delivering Innovative{" "}
                <span className="text-[#684DF4] font-medium">IT Solution</span>
              </h1>
              <p className="leading-relaxed">
                Empower your business with unparalleled IT expertise. Our great
                IT skills drive innovation, streamline processes, and deliver
                customized solutions that elevate your digital transformation.
                Partner with us to unlock your full potential.
              </p>
              <div className="py-5">
                <div className="flex items-center justify-between px-2">
                  <h1 className="text-sm font-bold text-center">
                    Business Strategy
                  </h1>
                  <p className="text-sm font-medium">85%</p>
                </div>
                <div className="bg-white rounded-xl shadow-sm overflow-hidden p-1">
                  <div className="relative h-1 flex items-center justify-center">
                    <div className="absolute top-0 bottom-0 left-0 rounded-lg w-[85%] bg-[#684DF4]"></div>
                  </div>
                </div>
              </div>
              <div>
                <div className="flex items-center justify-between px-2">
                  <h1 className="text-sm font-bold text-center">
                    Softwer Development
                  </h1>
                  <p className="text-sm font-medium">95%</p>
                </div>
                <div className="bg-white rounded-xl shadow-sm overflow-hidden p-1">
                  <div className="relative h-1 flex items-center justify-center">
                    <div className="absolute top-0 bottom-0 left-0 rounded-lg w-[95%] bg-[#684DF4]"></div>
                  </div>
                </div>
              </div>
              <div className="py-5">
                <div className="flex items-center justify-between px-2">
                  <h1 className="text-sm font-bold text-center">
                    Cyber Security
                  </h1>
                  <p className="text-sm font-medium">80%</p>
                </div>
                <div className="bg-white rounded-xl shadow-sm overflow-hidden p-1">
                  <div className="relative h-1 flex items-center justify-center">
                    <div className="absolute top-0 bottom-0 left-0 rounded-lg w-[80%] bg-[#684DF4]"></div>
                  </div>
                </div>
              </div>
              <div className="pb-5">
                <div className="flex items-center justify-between px-2">
                  <h1 className="text-sm font-bold text-center">
                    Artificial Intelligence
                  </h1>
                  <p className="text-sm font-medium">90%</p>
                </div>
                <div className="bg-white rounded-xl shadow-sm overflow-hidden p-1">
                  <div className="relative h-1 flex items-center justify-center">
                    <div className="absolute top-0 bottom-0 left-0 rounded-lg w-[90%] bg-[#684DF4]"></div>
                  </div>
                </div>
              </div>
            </div>
            <Image
              src="/vector2.svg"
              className="drop-shadow-md hover:scale-105 duration-300"
              width={600}
              height={500}
              alt="Picture of about vector"
            />
          </div>
        </div>
      </section>
    </>
  );
};

export default Skills;
