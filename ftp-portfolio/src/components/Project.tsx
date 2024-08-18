import React from "react";
import { LiaVectorSquareSolid } from "react-icons/lia";
import { FaArrowRight } from "react-icons/fa6";
import Image from "next/image";

const Project = () => {
  const productList = [
    {
      id: "1",
      title: "Doctor Portfolio Website",
      description:
        "Explore comprehensive medical expertise and patient care excellence, showcasing clinical achievements and compassionate healthcare services.",
      img: "https://i.ibb.co/RjkKfcW/Doctor-portfolio.png",
    },
    {
      id: "2",
      title: "Lawyer Portfolio Website",
      description:
        "Discover legal expertise tailored to your needs on a lawyer's portfolio website, highlighting successful case outcomes and client-focused advocacy.",
      img: "https://i.ibb.co/XxDTQBP/Lawyear-Portfolio.jpg",
    },
    {
      id: "3",
      title: "Engineer Portfolio Website",
      description:
        "Showcasing innovative engineering solutions and technical prowess, an engineer's portfolio website highlights project achievements and a commitment to cutting-edge design and development.",
      img: "https://i.ibb.co/bQ9cL42/Engineer-Portfolio-Website.png",
    },
  ];

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
            {productList.map((product) => (
              <div
                key={product.id}
                className="flex flex-col overflow-hidden rounded-lg shadow-lg"
              >
                <div className="flex-shrink-0 overflow-hidden">
                  <Image
                    src={product.img}
                    width={500}
                    height={500}
                    alt="Picture of services card"
                    className="object-cover hover:scale-110 duration-300 h-56"
                  />
                </div>
                <div className="flex flex-col justify-between flex-1 p-6 bg-white">
                  <div className="flex-1 text-center">
                    <a href="#" className="block mt-2">
                      <p className="text-xl font-semibold text-neutral-600">
                        {product.title}
                      </p>
                      <p className="mt-3 text-base text-gray-500">
                        {product.description}
                      </p>
                    </a>
                  </div>
                  <div className="flex items-center justify-center mt-6">
                    <button className=" text-white bg-indigo-500 border-0 mt-3 py-2 px-4 focus:outline-none hover:bg-gray-900 transition-colors duration-700 rounded">
                      VIEW MORE{" "}
                      <FaArrowRight className="inline-flex mb-1 ml-1" />
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default Project;
