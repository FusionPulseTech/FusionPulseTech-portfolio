import Link from "next/link";
import React from "react";
import {
  FaFacebook,
  FaGithub,
  FaLinkedinIn,
  FaWhatsapp,
  FaYoutube,
} from "react-icons/fa";
import { SiMinutemailer } from "react-icons/si";

const Footer = () => {
  return (
    <>
      <footer className="bg-[#080E1C] text-white body-font">
        <div className="container px-5 py-24 mx-auto max-w-7xl flex md:items-center lg:items-start md:flex-row md:flex-nowrap flex-wrap flex-col">
          <div className="w-72 flex-shrink-0 md:mx-0 mx-auto text-center md:text-left">
            <a className="flex title-font font-medium items-center md:justify-start justify-center">
              <span className="text-2xl border-b-4 border-[#684DF4]">
                ABOUT COMPANY
              </span>
            </a>
            <p className="mt-2 text-md text-gray-500 leading-relaxed pt-5">
              Professionally redefine transparent ROI through low-risk
              high-yield imperatives. Progressively create empowered. cost
              effective users via team driven.
            </p>
            <div className="flex flex-col justify-center pt-5 lg:pt-2">
              <div className="flex justify-center lg:justify-start space-x-4 pt-5">
                <Link
                  href="https://www.linkedin.com/company/fusionpulse-tech/"
                  target="_blank"
                  title="LinkedIn"
                  className="flex items-center justify-center border hover:bg-[#684DF4] transition-colors duration-300 w-8 h-8 rounded-full sm:w-10 sm:h-10 text-gray-50"
                >
                  <FaLinkedinIn />
                </Link>
                <Link
                  href="https://github.com/FusionPulseTech"
                  target="_blank"
                  title="Github"
                  className="flex items-center justify-center border hover:bg-[#684DF4] transition-colors duration-300 w-8 h-8 rounded-full sm:w-10 sm:h-10 text-gray-50"
                >
                  <FaGithub />
                </Link>
              </div>
            </div>
          </div>
          <div className="flex-grow flex justify-end flex-wrap md:pl-20 -mb-10 md:mt-0 mt-10 md:text-left text-center">
            <div className="lg:w-1/2 md:w-1/2 w-full px-4">
              <span className="title-font font-medium tracking-widest text-2xl mb-3 border-b-4 border-[#684DF4]">
                QUICK LINKS
              </span>
              <div className="list-none mb-10 leading-10 pt-5">
                <li>
                  <Link
                    href="#"
                    className="hover:text-[#684DF4] transition-colors duration-300"
                  >
                    About Us
                  </Link>
                </li>
                <li>
                  <Link
                    href="#"
                    className="hover:text-[#684DF4] transition-colors duration-300"
                  >
                    Meet Our Team
                  </Link>
                </li>
                <li>
                  <Link
                    href="#"
                    className="hover:text-[#684DF4] transition-colors duration-300"
                  >
                    Our Projects
                  </Link>
                </li>
                <li>
                  <Link
                    href="#"
                    className="hover:text-[#684DF4] transition-colors duration-300"
                  >
                    Help & FAQs
                  </Link>
                </li>
                <li>
                  <Link
                    href="#"
                    className="hover:text-[#684DF4] transition-colors duration-300"
                  >
                    Contact Us
                  </Link>
                </li>
              </div>
            </div>

            <div className="lg:w-1/3 md:w-1/2 w-full px-4">
              <span className="title-font font-medium tracking-widest text-xl mb-3 border-b-4 border-[#684DF4]">
                GET IN TOUCH!
              </span>
              <div className="py-6">
                <p className="text-gray-500">
                  Subsrcibe to our upcoming latest article and news resources.
                  Sign up today for hints. tips and the latest product news.
                </p>
              </div>
              <div>
                <div className="flex items-center">
                  <input
                    type="email"
                    className="w-full h-10 px-3 text-sm text-gray-700 border border-r-0 rounded-r-none border-blue-500 focus:outline-none rounded shadow-sm"
                    placeholder="user@mail.com"
                  />
                  <button className="h-10 px-4 text-sm bg-[#684DF4] border border-l-0 border-[#684DF4] rounded-r shadow-sm text-blue-50 hover:text-white hover:bg-gray-800 hover:border-gray-800 transition-colors duration-300 focus:outline-none">
                    <SiMinutemailer className="w-5 h-5" />
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="bg-[#684DF4] text-white">
          <div className="container mx-auto max-w-7xl py-4 px-5 flex items-center justify-center sm:flex-row">
            <p className="text-sm text-center sm:text-left">
              Copyright © 2024{" "}
              <Link
                href="#"
                className="hover:text-gray-700  transition-colors duration-300"
              >
                Fusion Pulse Tech
              </Link>
              . All Rights Reserved.
            </p>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
