import React from "react";
import { LiaVectorSquareSolid } from "react-icons/lia";
import { FaArrowRight } from "react-icons/fa6";

const Project = () => {
  return (
    <>
      <section id="projects" className="text-gray-900 body-font bg-[#F0F4FF]">
        <div className="container py-24 mx-auto max-w-7xl px-5 lg:px-0">
          <div className="flex flex-col sm:flex-row sm:items-center items-start justify-between mx-auto px-0">
            <div>
              <p className="leading-relaxed text-xl text-[#684DF4]">
                <LiaVectorSquareSolid className="text-white bg-[#684DF4] inline-flex text-2xl mr-1" />{" "}
                LATEST PROJECTS
              </p>
              <h1 className="text-3xl font-bold py-5">
                See We Have Solution
                <br /> Done{" "}
                <span className="text-[#684DF4] font-medium">IT Projects</span>
              </h1>
            </div>
            <button className=" text-white bg-indigo-500 border-0 py-3 px-6 focus:outline-none hover:bg-gray-900 transition-colors duration-700 rounded">
              VIEW ALL PROJECTS{" "}
              <FaArrowRight className="inline-flex mb-1 ml-1" />
            </button>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-6 py-10">
            <div className="w-full bg-white rounded-lg sahdow-lg overflow-hidden flex flex-col justify-center items-center">
              <div>
                <img
                  className="object-center object-cover h-auto w-full"
                  src="https://placehold.co/600x400"
                  alt="photo"
                />
              </div>
              <div className="text-center py-8 sm:py-6">
                <p className="text-xl text-gray-700 font-bold mb-2">
                  Project title
                </p>
                <p className="text-base text-gray-400 font-normal">
                  Project description
                </p>
                <button className=" text-white bg-indigo-500 border-0 mt-3 py-2 px-4 focus:outline-none hover:bg-gray-900 transition-colors duration-700 rounded">
                  VIEW MORE <FaArrowRight className="inline-flex mb-1 ml-1" />
                </button>
              </div>
            </div>
            <div className="w-full bg-white rounded-lg sahdow-lg overflow-hidden flex flex-col justify-center items-center">
              <div>
                <img
                  className="object-center object-cover h-auto w-full"
                  src="https://placehold.co/600x400"
                  alt="photo"
                />
              </div>
              <div className="text-center py-8 sm:py-6">
                <p className="text-xl text-gray-700 font-bold mb-2">
                  Project title
                </p>
                <p className="text-base text-gray-400 font-normal">
                  Project description
                </p>
                <button className=" text-white bg-indigo-500 border-0 mt-3 py-2 px-4 focus:outline-none hover:bg-gray-900 transition-colors duration-700 rounded">
                  VIEW MORE <FaArrowRight className="inline-flex mb-1 ml-1" />
                </button>
              </div>
            </div>
            <div className="w-full bg-white rounded-lg sahdow-lg overflow-hidden flex flex-col justify-center items-center">
              <div>
                <img
                  className="object-center object-cover h-auto w-full"
                  src="https://placehold.co/600x400"
                  alt="photo"
                />
              </div>
              <div className="text-center py-8 sm:py-6">
                <p className="text-xl text-gray-700 font-bold mb-2">
                  Project title
                </p>
                <p className="text-base text-gray-400 font-normal">
                  Project description
                </p>
                <button className=" text-white bg-indigo-500 border-0 mt-3 py-2 px-4 focus:outline-none hover:bg-gray-900 transition-colors duration-700 rounded">
                  VIEW MORE <FaArrowRight className="inline-flex mb-1 ml-1" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Project;
