import Link from "next/link";
import React from "react";
import { LiaVectorSquareSolid } from "react-icons/lia";
import { IoEyeOutline } from "react-icons/io5";
import { FiMessageCircle } from "react-icons/fi";
import { FaArrowRight } from "react-icons/fa6";
import Image from "next/image";

const Blog = () => {
  const blogList = [
    {
      id: "1",
      category: "CATEGORY",
      title: "Blog Title",
      description:
        "Photo booth fam kinfolk cold-pressed sriracha leggings jianbing microdosing tousled waistcoat.",
      views: "30",
      comments: "15",
      img: "https://dummyimage.com/720x400",
    },
    {
      id: "2",
      category: "CATEGORY",
      title: "Blog Title",
      description:
        "Photo booth fam kinfolk cold-pressed sriracha leggings jianbing microdosing tousled waistcoat.",
      views: "25",
      comments: "12",
      img: "https://dummyimage.com/720x400",
    },
    {
      id: "3",
      category: "CATEGORY",
      title: "Blog Title",
      description:
        "Photo booth fam kinfolk cold-pressed sriracha leggings jianbing microdosing tousled waistcoat.",
      views: "20",
      comments: "10",
      img: "https://dummyimage.com/720x400",
    },
  ];

  return (
    <>
      <section id="blog" className="text-gray-900 body-font bg-[#F5F5F5]">
        <div className="container py-24 mx-auto max-w-7xl px-5 lg:px-0">
          <div className="mx-auto px-0">
            <p className="leading-3 text-xl text-center text-[#684DF4]">
              <LiaVectorSquareSolid className="text-white bg-[#684DF4] inline-flex text-2xl mr-1" />{" "}
              LATEST BLOG
            </p>
            <h1 className="text-xl font-bold pt-5 pb-10 text-center">
              Exploring ideas, sharing stories, and inspiring creative journeys
              together.
            </h1>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-6 py-10">
            {blogList.map((blog) => (
              <div
                key={blog.id}
                className="flex flex-col overflow-hidden rounded-lg shadow-lg"
              >
                <div className="flex-shrink-0 overflow-hidden">
                  <Image
                    src={blog.img}
                    width={500}
                    height={500}
                    alt="Picture of blog card"
                    className="object-cover hover:scale-110 duration-300 h-56"
                  />
                </div>
                <div className="flex flex-col justify-between flex-1 p-6 bg-white">
                  <h2 className="tracking-widest text-xs title-font font-medium text-gray-400 mb-1">
                    {blog.category}
                  </h2>
                  <h1 className="title-font text-lg font-medium text-gray-900 mb-3">
                    {blog.title}
                  </h1>
                  <p className="leading-relaxed mb-3">
                    {blog.description}
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
                      {blog.views}
                    </span>
                    <span className="text-gray-400 inline-flex items-center leading-none text-sm">
                      <FiMessageCircle className="w-4 h-4 mr-1" />
                      {blog.comments}
                    </span>
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

export default Blog;
