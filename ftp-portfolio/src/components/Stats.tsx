import React from "react";
import { FaShoppingCart, FaRegSmile } from "react-icons/fa";
import { BsSpeedometer } from "react-icons/bs";
import { MdTouchApp } from "react-icons/md";

const Stats = () => {
  return (
    <>
      <section className="bg-[#694FF4]">
        <div className="container mx-auto max-w-7xl grid gap-6 grid-cols-2 xl:grid-cols-4 py-20">
          <div className="flex p-4 space-x-4 rounded-lg md:space-x-6 text-white">
            <div className="flex justify-center items-center p-2 rounded-lg sm:p-4 bg-white shadow-xl shadow-gray-900">
              <FaShoppingCart className="h-9 w-9 text-[#694FF4] hover:rotate-180 duration-300" />
            </div>
            <div className="flex flex-col justify-center align-middle">
              <p className="text-4xl font-bold leading-none pb-2">10 +</p>
              <p className="capitalize font-semibold">Orders</p>
            </div>
          </div>
          <div className="flex p-4 space-x-4 rounded-lg md:space-x-6 text-white">
            <div className="flex justify-center items-center p-2 rounded-lg sm:p-4 bg-white shadow-xl shadow-gray-900">
              <FaRegSmile className="h-9 w-9 text-[#694FF4] hover:rotate-180 duration-300" />
            </div>
            <div className="flex flex-col justify-center align-middle">
              <p className="text-4xl font-bold leading-none pb-2">5</p>
              <p className="capitalize font-semibold">New customers</p>
            </div>
          </div>
          <div className="flex p-4 space-x-4 rounded-lg md:space-x-6 text-white">
            <div className="flex justify-center items-center p-2 rounded-lg sm:p-4 bg-white shadow-xl shadow-gray-900">
              <BsSpeedometer className="h-9 w-9 text-[#694FF4] hover:rotate-180 duration-300" />
            </div>
            <div className="flex flex-col justify-center align-middle">
              <p className="text-4xl font-bold leading-none pb-2">30%</p>
              <p className="capitalize font-semibold">Growth</p>
            </div>
          </div>
          <div className="flex p-4 space-x-4 rounded-lg md:space-x-6 text-white">
            <div className="flex justify-center items-center p-2 rounded-lg sm:p-4 bg-white shadow-xl shadow-gray-900">
              <MdTouchApp className="h-9 w-9 text-[#694FF4] hover:rotate-180 duration-300" />
            </div>
            <div className="flex flex-col justify-center align-middle">
              <p className="text-4xl font-bold leading-none pb-2">15%</p>
              <p className="capitalize font-semibold">Bounce rate</p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Stats;
