"use client";
import React, { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import { LiaVectorSquareSolid } from "react-icons/lia";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Contact = () => {
  const form = useRef(null);
  let notify;

  const sendEmail = (e: any) => {
    e.preventDefault();

    form.current &&
      emailjs
        .sendForm("service_ccp0vis", "template_d9bza4q", form.current, {
          publicKey: "9TWeT3P0eSQC-YB2E",
        })
        .then(
          (result: { text: any }) => {
            console.log("SUCCESS!", result.text);
            notify = () => toast("Message Sent Successfully!");
          },
          (error: { text: any }) => {
            console.log("FAILED...", error.text);
            notify = () => toast("Message Failed");
          }
        );
  };

  return (
    <>
      <section
        id="contact"
        className="text-gray-600 body-font relative bg-[#F0F4FF]"
      >
        <div className="container px-5 py-24 mx-auto">
          <div className="flex flex-col text-center w-full mb-12">
            <h1 className="leading-3 text-xl text-[#684DF4]">
              <LiaVectorSquareSolid className="text-white bg-[#684DF4] inline-flex text-2xl mr-1" />{" "}
              CONTACT US
            </h1>
            <h1 className="text-xl font-bold py-5">
              Have Questions? We are Just a Message Away!
            </h1>
          </div>
          <div className="lg:w-1/2 md:w-2/3 mx-auto">
            <form
              ref={form}
              onSubmit={sendEmail}
              className="flex flex-wrap -m-2"
            >
              <div className="p-2 w-1/2">
                <div className="relative">
                  <label
                    htmlFor="user_name"
                    className="leading-7 text-sm text-gray-600"
                  >
                    Name
                  </label>
                  <input
                    type="text"
                    id="user_name"
                    name="user_name"
                    required
                    className="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                  />
                </div>
              </div>
              <div className="p-2 w-1/2">
                <div className="relative">
                  <label
                    htmlFor="user_email"
                    className="leading-7 text-sm text-gray-600"
                  >
                    Email
                  </label>
                  <input
                    type="email"
                    id="user_email"
                    name="user_email"
                    required
                    className="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                  />
                </div>
              </div>
              <div className="p-2 w-full">
                <div className="relative">
                  <label
                    htmlFor="message"
                    className="leading-7 text-sm text-gray-600"
                  >
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    required
                    className="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-200 h-32 text-base outline-none text-gray-700 py-1 px-3 resize-none leading-6 transition-colors duration-200 ease-in-out"
                  ></textarea>
                </div>
              </div>
              <ToastContainer
                position="top-right"
                autoClose={5000}
                hideProgressBar={false}
                newestOnTop={false}
                closeOnClick
                rtl={false}
                pauseOnFocusLoss
                draggable
                pauseOnHover
                theme="light"
              />
              <ToastContainer />
              <div className="p-2 w-full">
                <button
                  onClick={notify}
                  type="submit"
                  className="flex mx-auto text-white bg-[#684DF4] border-0 py-2 px-8 focus:outline-none hover:bg-gray-900 transition-colors duration-300 rounded text-lg"
                >
                  Send
                </button>
              </div>
            </form>
          </div>
        </div>
      </section>
    </>
  );
};

export default Contact;
