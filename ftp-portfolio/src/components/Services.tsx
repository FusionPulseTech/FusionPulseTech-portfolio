import React from "react";
import { LiaVectorSquareSolid } from "react-icons/lia";
import { FaArrowRight } from "react-icons/fa6";
import Image from "next/image";

const Services = () => {
  return (
    <>
      <section id="services" className="text-gray-900 body-font bg-[#F0F4FF]">
        <div className="container py-24 mx-auto max-w-7xl px-5 lg:px-0">
          <div className=" flex flex-col sm:flex-row sm:items-center items-start justify-between mx-auto px-0 lg:px-5">
            <div>
              <p className="leading-relaxed text-xl text-[#684DF4]">
                <LiaVectorSquareSolid className="text-white bg-[#684DF4] inline-flex text-2xl mr-1" />{" "}
                WHAT WE DO
              </p>
              <h1 className="text-3xl font-bold py-5">
                We Provide Exclusive Service
                <br /> For{" "}
                <span className="text-[#684DF4] font-medium">
                  Your Business
                </span>
              </h1>
            </div>
            <button className=" text-white bg-indigo-500 border-0 py-3 px-6 focus:outline-none hover:bg-gray-900 transition-colors duration-700 rounded">
              VIEW ALL SERVICES{" "}
              <FaArrowRight className="inline-flex mb-1 ml-1" />
            </button>
          </div>

          {/* card */}

          <div>
            <div className="relative py-12 sm:px-6 lg:pt-16">
              <div className="relative mx-auto max-w-7xl">
                <div className="grid max-w-lg gap-5 mx-auto md:grid-cols-2 md:max-w-none lg:grid-cols-4 lg:max-w-none">
                  <div className="flex flex-col overflow-hidden rounded-lg shadow-lg">
                    <div className="flex-shrink-0">
                      <Image
                      src="/meeting2.jpg"
                      width={500}
                      height={500}
                      alt="Picture of services card"
                      />
                    </div>
                    <div className="flex flex-col justify-center flex-1 p-3 bg-white">
                      <div className="flex-1 text-center">
                        <a href="#" className="block mt-2">
                          <p className="text-xl font-semibold text-gray-900">
                            Web Development
                          </p>
                          <p className="mt-3 text-base text-gray-500">
                            Globally optimize highly efficient solution whereas
                            open-source application. Completely strategize
                            quality internal or organic sources for virtual
                            e-business.
                          </p>
                        </a>
                        <button className=" text-white bg-indigo-500 border-0 mt-3 py-2 px-4 focus:outline-none hover:bg-gray-900 transition-colors duration-700 rounded">
                        READ MORE{" "}
                        <FaArrowRight className="inline-flex mb-1 ml-1" />
                      </button>
                      </div>
                    </div>
                  </div>
                  <div className="flex flex-col overflow-hidden rounded-lg shadow-lg">
                    <div className="flex-shrink-0">
                    <Image
                      src="/meeting2.jpg"
                      width={500}
                      height={500}
                      alt="Picture of services card"
                      />
                    </div>
                    <div className="flex flex-col justify-center flex-1 p-3 bg-white">
                      <div className="flex-1 text-center">
                        <a href="#" className="block mt-2">
                          <p className="text-xl font-semibold text-gray-900">
                            UI/UX Design
                          </p>
                          <p className="mt-3 text-base text-gray-500">
                            Globally optimize highly efficient solution whereas
                            open-source application. Completely strategize
                            quality internal or organic sources for virtual
                            e-business.
                          </p>
                        </a>
                        <button className=" text-white bg-indigo-500 border-0 mt-3 py-2 px-4 focus:outline-none hover:bg-gray-900 transition-colors duration-700 rounded">
                        READ MORE{" "}
                        <FaArrowRight className="inline-flex mb-1 ml-1" />
                      </button>
                      </div>
                    </div>
                  </div>
                  <div className="flex flex-col overflow-hidden rounded-lg shadow-lg">
                    <div className="flex-shrink-0">
                    <Image
                      src="/meeting2.jpg"
                      width={500}
                      height={500}
                      alt="Picture of services card"
                      />
                    </div>
                    <div className="flex flex-col justify-center flex-1 p-3 bg-white">
                      <div className="flex-1 text-center">
                        <a href="#" className="block mt-2">
                          <p className="text-xl font-semibold text-gray-900">
                            Digital Marketing
                          </p>
                          <p className="mt-3 text-base text-gray-500">
                            Globally optimize highly efficient solution whereas
                            open-source application. Completely strategize
                            quality internal or organic sources for virtual
                            e-business.
                          </p>
                        </a>
                        <button className=" text-white bg-indigo-500 border-0 mt-3 py-2 px-4 focus:outline-none hover:bg-gray-900 transition-colors duration-700 rounded">
                        READ MORE{" "}
                        <FaArrowRight className="inline-flex mb-1 ml-1" />
                      </button>
                      </div>
                    </div>
                  </div>
                  <div className="flex flex-col overflow-hidden rounded-lg shadow-lg">
                    <div className="flex-shrink-0">
                    <Image
                      src="/meeting2.jpg"
                      width={500}
                      height={500}
                      alt="Picture of services card"
                      />
                    </div>
                    <div className="flex flex-col justify-center flex-1 p-3 bg-white ">
                      <div className="flex-1 text-center">
                        <a href="#" className="block mt-2">
                          <p className="text-xl font-semibold text-gray-900">
                            Software Services
                          </p>
                          <p className="mt-3 text-base text-gray-500">
                            Globally optimize highly efficient solution whereas
                            open-source application. Completely strategize
                            quality internal or organic sources for virtual
                            e-business.
                          </p>
                        </a>
                        <button className=" text-white bg-indigo-500 border-0 mt-3 py-2 px-4 focus:outline-none hover:bg-gray-900 transition-colors duration-700 rounded">
                        READ MORE{" "}
                        <FaArrowRight className="inline-flex mb-1 ml-1" />
                      </button>
                      </div>
                    </div>
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

export default Services;
