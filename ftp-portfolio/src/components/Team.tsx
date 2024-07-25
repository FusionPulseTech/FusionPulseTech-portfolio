import Link from "next/link";
import React from "react";
import { LiaVectorSquareSolid } from "react-icons/lia";
import { MdEmail } from "react-icons/md";
import { FaLinkedin, FaGithub } from "react-icons/fa";
import Image from "next/image";

const Team = () => {
  return (
    <>
      <section className="py-6 bg-[#F5F5F5] text-gray-700">
        <div className="container flex flex-col items-center justify-center p-4 mx-auto max-w-7xl sm:p-10">
          <p className="leading-3 text-xl text-[#684DF4]">
            <LiaVectorSquareSolid className="text-white bg-[#684DF4] inline-flex text-2xl mr-1" />{" "}
            GREAT TEAM
          </p>
          <h1 className="text-3xl font-bold py-5 text-center">
            See Our Skilled Expert{" "}
            <span className="text-[#684DF4] font-medium">Team</span>
          </h1>
          <div className="flex flex-row flex-wrap-reverse justify-around mt-8">
            <div className="flex flex-col justify-center w-full px-8 mx-6 my-12 text-center rounded-md md:w-96 lg:w-80 xl:w-64 bg-white text-gray-800 shadow-lg">
              <Image
                src="/employee.jpg"
                className="self-center -mt-12 rounded-full aspect-square object-cover"
                width={100}
                height={100}
                alt="Picture of Employees"
              />
              <div className="flex-1 my-4">
                <p className="text-xl font-semibold leading-snug">
                  Leroy Jenkins
                </p>
                <p className="text-gray-500">Visual Designer</p>
              </div>
              <div className="flex items-center justify-center p-3 space-x-3 border-t-2">
                <Link
                  rel="noopener noreferrer"
                  href="#"
                  title="Email"
                  className="text-gray-700 hover:text-[#684DF4]"
                >
                  <MdEmail className="w-6 h-6" />
                </Link>
                <Link
                  rel="noopener noreferrer"
                  href="#"
                  title="LinkedIn"
                  className="text-gray-700 hover:text-[#684DF4]"
                >
                  <FaLinkedin className="w-6 h-6" />
                </Link>
                <Link
                  rel="noopener noreferrer"
                  href="#"
                  title="GitHub"
                  className="text-gray-700 hover:text-[#684DF4]"
                >
                  <FaGithub className="w-6 h-6" />
                </Link>
              </div>
            </div>
            <div className="flex flex-col justify-center w-full px-8 mx-6 my-12 text-center rounded-md md:w-96 lg:w-80 xl:w-64 bg-white text-gray-800 shadow-lg">
              <Image
                src="/employee.jpg"
                className="self-center -mt-12 rounded-full aspect-square object-cover"
                width={100}
                height={100}
                alt="Picture of Employees"
              />
              <div className="flex-1 my-4">
                <p className="text-xl font-semibold leading-snug">
                  Leroy Jenkins
                </p>
                <p className="text-gray-500">Visual Designer</p>
              </div>
              <div className="flex items-center justify-center p-3 space-x-3 border-t-2">
                <Link
                  rel="noopener noreferrer"
                  href="#"
                  title="Email"
                  className="text-gray-700 hover:text-[#684DF4]"
                >
                  <MdEmail className="w-6 h-6" />
                </Link>
                <Link
                  rel="noopener noreferrer"
                  href="#"
                  title="LinkedIn"
                  className="text-gray-700 hover:text-[#684DF4]"
                >
                  <FaLinkedin className="w-6 h-6" />
                </Link>
                <Link
                  rel="noopener noreferrer"
                  href="#"
                  title="GitHub"
                  className="text-gray-700 hover:text-[#684DF4]"
                >
                  <FaGithub className="w-6 h-6" />
                </Link>
              </div>
            </div>
            <div className="flex flex-col justify-center w-full px-8 mx-6 my-12 text-center rounded-md md:w-96 lg:w-80 xl:w-64 bg-white text-gray-800 shadow-lg">
              <Image
                src="/employee.jpg"
                className="self-center -mt-12 rounded-full aspect-square object-cover"
                width={100}
                height={100}
                alt="Picture of Employees"
              />
              <div className="flex-1 my-4">
                <p className="text-xl font-semibold leading-snug">
                  Leroy Jenkins
                </p>
                <p className="text-gray-500">Visual Designer</p>
              </div>
              <div className="flex items-center justify-center p-3 space-x-3 border-t-2">
                <Link
                  rel="noopener noreferrer"
                  href="#"
                  title="Email"
                  className="text-gray-700 hover:text-[#684DF4]"
                >
                  <MdEmail className="w-6 h-6" />
                </Link>
                <Link
                  rel="noopener noreferrer"
                  href="#"
                  title="LinkedIn"
                  className="text-gray-700 hover:text-[#684DF4]"
                >
                  <FaLinkedin className="w-6 h-6" />
                </Link>
                <Link
                  rel="noopener noreferrer"
                  href="#"
                  title="GitHub"
                  className="text-gray-700 hover:text-[#684DF4]"
                >
                  <FaGithub className="w-6 h-6" />
                </Link>
              </div>
            </div>
            <div className="flex flex-col justify-center w-full px-8 mx-6 my-12 text-center rounded-md md:w-96 lg:w-80 xl:w-64 bg-white text-gray-800 shadow-lg">
              <Image
                src="/employee.jpg"
                className="self-center -mt-12 rounded-full aspect-square object-cover"
                width={100}
                height={100}
                alt="Picture of Employees"
              />
              <div className="flex-1 my-4">
                <p className="text-xl font-semibold leading-snug">
                  Leroy Jenkins
                </p>
                <p className="text-gray-500">Visual Designer</p>
              </div>
              <div className="flex items-center justify-center p-3 space-x-3 border-t-2">
                <Link
                  rel="noopener noreferrer"
                  href="#"
                  title="Email"
                  className="text-gray-700 hover:text-[#684DF4]"
                >
                  <MdEmail className="w-6 h-6" />
                </Link>
                <Link
                  rel="noopener noreferrer"
                  href="#"
                  title="LinkedIn"
                  className="text-gray-700 hover:text-[#684DF4]"
                >
                  <FaLinkedin className="w-6 h-6" />
                </Link>
                <Link
                  rel="noopener noreferrer"
                  href="#"
                  title="GitHub"
                  className="text-gray-700 hover:text-[#684DF4]"
                >
                  <FaGithub className="w-6 h-6" />
                </Link>
              </div>
            </div>
            <div className="flex flex-col justify-center w-full px-8 mx-6 my-12 text-center rounded-md md:w-96 lg:w-80 xl:w-64 bg-white text-gray-800 shadow-lg">
              <Image
                src="/employee.jpg"
                className="self-center -mt-12 rounded-full aspect-square object-cover"
                width={100}
                height={100}
                alt="Picture of Employees"
              />
              <div className="flex-1 my-4">
                <p className="text-xl font-semibold leading-snug">
                  Leroy Jenkins
                </p>
                <p className="text-gray-500">Visual Designer</p>
              </div>
              <div className="flex items-center justify-center p-3 space-x-3 border-t-2">
                <Link
                  rel="noopener noreferrer"
                  href="#"
                  title="Email"
                  className="text-gray-700 hover:text-[#684DF4]"
                >
                  <MdEmail className="w-6 h-6" />
                </Link>
                <Link
                  rel="noopener noreferrer"
                  href="#"
                  title="LinkedIn"
                  className="text-gray-700 hover:text-[#684DF4]"
                >
                  <FaLinkedin className="w-6 h-6" />
                </Link>
                <Link
                  rel="noopener noreferrer"
                  href="#"
                  title="GitHub"
                  className="text-gray-700 hover:text-[#684DF4]"
                >
                  <FaGithub className="w-6 h-6" />
                </Link>
              </div>
            </div>
            <div className="flex flex-col justify-center w-full px-8 mx-6 my-12 text-center rounded-md md:w-96 lg:w-80 xl:w-64 bg-white text-gray-800 shadow-lg">
              <Image
                src="/employee.jpg"
                className="self-center -mt-12 rounded-full aspect-square object-cover"
                width={100}
                height={100}
                alt="Picture of Employees"
              />
              <div className="flex-1 my-4">
                <p className="text-xl font-semibold leading-snug">
                  Leroy Jenkins
                </p>
                <p className="text-gray-500">Visual Designer</p>
              </div>
              <div className="flex items-center justify-center p-3 space-x-3 border-t-2">
                <Link
                  rel="noopener noreferrer"
                  href="#"
                  title="Email"
                  className="text-gray-700 hover:text-[#684DF4]"
                >
                  <MdEmail className="w-6 h-6" />
                </Link>
                <Link
                  rel="noopener noreferrer"
                  href="#"
                  title="LinkedIn"
                  className="text-gray-700 hover:text-[#684DF4]"
                >
                  <FaLinkedin className="w-6 h-6" />
                </Link>
                <Link
                  rel="noopener noreferrer"
                  href="#"
                  title="GitHub"
                  className="text-gray-700 hover:text-[#684DF4]"
                >
                  <FaGithub className="w-6 h-6" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Team;
