import Link from "next/link";
import React from "react";
import { LiaVectorSquareSolid } from "react-icons/lia";
import { IoEyeOutline } from "react-icons/io5";
import { FiMessageCircle } from "react-icons/fi";
import { FaArrowRight } from "react-icons/fa6";

const Blog = () => {
  return (
    <>
      <section id="blog" className="text-gray-700 bg-[#F5F5F5] body-font">
        <div className="container px-5 py-24 mx-auto max-w-7xl">
          <p className="leading-3 text-xl text-center text-[#684DF4]">
            <LiaVectorSquareSolid className="text-white bg-[#684DF4] inline-flex text-2xl mr-1" />{" "}
            LATEST BLOG
          </p>
          <h1 className="text-xl font-bold pt-5 pb-10 text-center">
            Exploring ideas, sharing stories, and inspiring creative journeys
            together.
          </h1>
          <div className="flex flex-wrap -m-4">
            <div className="p-4 md:w-1/3">
              <div className="h-full border-2 shadow-lg border-gray-200 border-opacity-60 rounded-lg overflow-hidden">
                <img
                  className="lg:h-48 md:h-36 w-full object-cover object-center"
                  src="https://dummyimage.com/720x400"
                  alt="blog"
                />
                <div className="p-6">
                  <h2 className="tracking-widest text-xs title-font font-medium text-gray-400 mb-1">
                    CATEGORY
                  </h2>
                  <h1 className="title-font text-lg font-medium text-gray-900 mb-3">
                    Blog Title
                  </h1>
                  <p className="leading-relaxed mb-3">
                    Photo booth fam kinfolk cold-pressed sriracha leggings
                    jianbing microdosing tousled waistcoat.
                  </p>
                  <div className="flex items-center flex-wrap ">
                    <Link
                      href="#"
                      className="text-indigo-500 hover:text-gray-700 transition-colors duration-300 inline-flex items-center md:mb-2 lg:mb-0"
                    >
                      Learn More
                      <FaArrowRight className="inline-flex w-4 h-4 ml-2" />
                    </Link>
                    <span className="text-gray-400 mr-3 inline-flex items-center lg:ml-auto md:ml-0 ml-auto leading-none text-sm pr-3 py-1 border-r-2 border-gray-200">
                      <IoEyeOutline className="w-4 h-4 mr-1" />
                      1.2K
                    </span>
                    <span className="text-gray-400 inline-flex items-center leading-none text-sm">
                      <FiMessageCircle className="w-4 h-4 mr-1" />6
                    </span>
                  </div>
                </div>
              </div>
            </div>
            <div className="p-4 md:w-1/3">
              <div className="h-full border-2 shadow-lg border-gray-200 border-opacity-60 rounded-lg overflow-hidden">
                <img
                  className="lg:h-48 md:h-36 w-full object-cover object-center"
                  src="https://dummyimage.com/721x401"
                  alt="blog"
                />
                <div className="p-6">
                  <h2 className="tracking-widest text-xs title-font font-medium text-gray-400 mb-1">
                    CATEGORY
                  </h2>
                  <h1 className="title-font text-lg font-medium text-gray-900 mb-3">
                    Blog Title
                  </h1>
                  <p className="leading-relaxed mb-3">
                    Photo booth fam kinfolk cold-pressed sriracha leggings
                    jianbing microdosing tousled waistcoat.
                  </p>
                  <div className="flex items-center flex-wrap">
                    <Link
                      href="#"
                      className="text-indigo-500 hover:text-gray-700 transition-colors duration-300 inline-flex items-center md:mb-2 lg:mb-0"
                    >
                      Learn More
                      <FaArrowRight className="inline-flex w-4 h-4 ml-2" />
                    </Link>
                    <span className="text-gray-400 mr-3 inline-flex items-center lg:ml-auto md:ml-0 ml-auto leading-none text-sm pr-3 py-1 border-r-2 border-gray-200">
                      <IoEyeOutline className="w-4 h-4 mr-1" />
                      1.2K
                    </span>
                    <span className="text-gray-400 inline-flex items-center leading-none text-sm">
                      <FiMessageCircle className="w-4 h-4 mr-1" />6
                    </span>
                  </div>
                </div>
              </div>
            </div>
            <div className="p-4 md:w-1/3">
              <div className="h-full border-2 shadow-lg border-gray-200 border-opacity-60 rounded-lg overflow-hidden">
                <img
                  className="lg:h-48 md:h-36 w-full object-cover object-center"
                  src="https://dummyimage.com/722x402"
                  alt="blog"
                />
                <div className="p-6">
                  <h2 className="tracking-widest text-xs title-font font-medium text-gray-400 mb-1">
                    CATEGORY
                  </h2>
                  <h1 className="title-font text-lg font-medium text-gray-900 mb-3">
                    Blog Title
                  </h1>
                  <p className="leading-relaxed mb-3">
                    Photo booth fam kinfolk cold-pressed sriracha leggings
                    jianbing microdosing tousled waistcoat.
                  </p>
                  <div className="flex items-center flex-wrap ">
                    <Link
                      href="#"
                      className="text-indigo-500 hover:text-gray-700 transition-colors duration-300 inline-flex items-center md:mb-2 lg:mb-0"
                    >
                      Learn More
                      <FaArrowRight className="inline-flex w-4 h-4 ml-2" />
                    </Link>
                    <span className="text-gray-400 mr-3 inline-flex items-center lg:ml-auto md:ml-0 ml-auto leading-none text-sm pr-3 py-1 border-r-2 border-gray-200">
                      <IoEyeOutline className="w-4 h-4 mr-1" />
                      1.2K
                    </span>
                    <span className="text-gray-400 inline-flex items-center leading-none text-sm">
                      <FiMessageCircle className="w-4 h-4 mr-1" />6
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Blog;
