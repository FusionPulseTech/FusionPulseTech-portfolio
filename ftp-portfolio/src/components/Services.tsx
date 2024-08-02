import React from "react";
import { LiaVectorSquareSolid } from "react-icons/lia";
import { FaArrowRight } from "react-icons/fa6";
import Image from "next/image";

const Services = () => {
  const services = [
    {
      id: "1",
      title: "Custom Software Development",
      description:
        "Tailored software solutions designed to meet specific business requirements. Application development for web, mobile, and desktop platforms.",
    },
    {
      id: "2",
      title: "Website Development",
      description:
        "Designing and developing responsive, user-friendly websites.E-commerce solutions and content management systems (CMS).",
    },
    {
      id: "3",
      title: "Mobile Application Development",
      description:
        "Development of mobile apps for iOS, Android, and cross-platform solutions. App maintenance and updates.",
    },
    {
      id: "4",
      title: "Software Integration",
      description:
        "Integration of software systems and applications to streamline operations. API development and integration.",
    },
    {
      id: "5",
      title: "User Experience (UX) and User Interface (UI) Design",
      description:
        "Research and design services to enhance user experience. Prototyping and wireframing.",
    },
    {
      id: "6",
      title: "Maintenance and Domain-Hosting Support",
      description:
        "Ongoing support and maintenance for software applications. Bug fixes, updates, and feature enhancements.",
    },
  ];
  return (
    <>
      <section id="services" className="text-gray-800 body-font bg-[#F0F4FF]">
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
                <div className="grid max-w-lg gap-5 mx-auto md:grid-cols-2 md:max-w-none lg:grid-cols-3 lg:max-w-none">
                  {services.map((service) => (
                    <div
                      key={service.id}
                      className="flex flex-col overflow-hidden rounded-lg shadow-lg"
                    >
                      <div className="flex-shrink-0">
                        <Image
                          src="/meeting2.jpg"
                          width={500}
                          height={500}
                          alt="Picture of services card"
                          className="hover:scale-110 duration-300"
                        />
                      </div>
                      <div className="flex flex-col justify-center flex-1 p-3 bg-white">
                        <div className="flex-1 text-center">
                          <a href="#" className="block mt-2">
                            <p className="text-xl font-semibold text-gray-900">
                              {service.title}
                            </p>
                            <p className="mt-3 text-base text-gray-500">
                              {service.description}
                            </p>
                          </a>
                          <button className=" text-white bg-indigo-500 border-0 mt-3 py-2 px-4 focus:outline-none hover:bg-gray-900 transition-colors duration-700 rounded">
                            READ MORE{" "}
                            <FaArrowRight className="inline-flex mb-1 ml-1" />
                          </button>
                        </div>
                      </div>
                    </div>
                  ))}
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
