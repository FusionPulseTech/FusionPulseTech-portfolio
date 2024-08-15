import Link from "next/link";
import React from "react";
import { LiaVectorSquareSolid } from "react-icons/lia";
import { MdEmail } from "react-icons/md";
import { FaLinkedin, FaGithub } from "react-icons/fa";
import Image from "next/image";

const Team = () => {
  const Founder = {
    id: 7,
    name: "Md Mostafejur Rahman",
    role: "Founder",
    email: "mrraju.ice.iu@gmail.com",
    linkedin: "https://www.linkedin.com/in/mmr-raju/",
    github: "https://github.com/mmrraju",
    img: "https://i.ibb.co/4VsWphJ/Mostafejur-Rahman.png",
  };

  const Data = [
    {
      id: 1,
      name: "MD HASNAIN RABBY",
      role: "Flutter Developer",
      email: "hasnainrabby@gmail.com",
      linkedin: "https://www.linkedin.com/in/md-hasnain-rabby-37b16a102/",
      github: "https://github.com/hasnainrabby",
      img: "https://i.ibb.co/ZWNYgPF/Hasnain.png",
    },
    {
      id: 2,
      name: "Anamul Haque",
      role: "Software Engineer",
      email: "anamul.ice14@gmail.com",
      linkedin: "www.linkedin.com/in/md-anamul-haque94",
      github: "https://github.com/anamul94",
      img: "https://i.ibb.co/TBHWXLs/anmul.jpg",
    },
    {
      id: 3,
      name: "RAKIB HASAN",
      role: "Software Developer",
      email: "rakibsobuz@gmail.com",
      linkedin: "https://www.linkedin.com/in/rakib-hasan-4a2836185/",
      github: "https://github.com/rakibhasan421",
      img: "https://i.ibb.co/gDHtKfD/Rakib-Hasan.jpg",
    },
    {
      id: 4,
      name: "Md Chanchal Hossain",
      role: "Frontend Developer",
      email: "chanchal.mch2613@gmail.com",
      linkedin: "https://www.linkedin.com/in/md-chanchal-hossain",
      github: "https://github.com/chanchal26",
      img: "https://i.ibb.co/VBBTxdt/chanchal.png",
    },
    {
      id: 5,
      name: "Nazmul Hussain",
      role: "Frontend Developer",
      email: "thenazmulh@gmail.com",
      linkedin: "https://www.linkedin.com/in/thenazmulh/",
      github: "https://github.com/theNazmulH",
      img: "https://i.ibb.co/bKzGtzS/Nazmul-Hussain.png",
    },
    {
      id: 6,
      name: "MD. ABDUR RAHMAN",
      role: "QA & Digital Marketing Executive",
      email: "mabrahman44@gmail.com",
      linkedin: "https://www.linkedin.com/md-abdur-rahman-723313248/",
      github: "https://github.com/abdurrahmaniu",
      img: "https://i.ibb.co/YDxCfNX/Md-abdur-rahman-photo.jpg",
    },
    {
      id: 7,
      name: "Mobarak Hosen",
      role: "DevOps Engineer",
      email: "mh.ice.iu@gmail.com",
      linkedin: "https://www.linkedin.com/in/imShakil/",
      github: "https://github.com/imShakil",
      img: "https://i.ibb.co/MDn8jyv/Mobarak-Hosen-Shakil.jpg",
    },
  ];

  return (
    <>
      <section id="team" className="py-6 bg-[#F5F5F5] text-gray-700">
        <div className="container flex flex-col items-center justify-center p-4 mx-auto max-w-7xl sm:p-10">
          <p className="leading-3 text-xl text-[#684DF4]">
            <LiaVectorSquareSolid className="text-white bg-[#684DF4] inline-flex text-2xl mr-1" />{" "}
            GREAT TEAM
          </p>
          <h1 className="text-3xl font-bold py-5 text-center mb-8">
            See Our Skilled Expert{" "}
            <span className="text-[#684DF4] font-medium">Team</span>
          </h1>

          <div className="flex flex-col justify-center w-full px-8 mx-6 my-12 text-center rounded-md md:w-96 lg:w-80 xl:w-64 bg-white text-gray-800 shadow-lg">
            <Image
              src={Founder.img}
              className="self-center -mt-12 rounded-full aspect-square object-cover hover:scale-125 duration-300"
              width={100}
              height={100}
              alt="Picture of Employees"
            />
            <div className="flex-1 my-4">
              <p className="text-xl font-semibold leading-snug">
                {Founder.name}
              </p>
              <p className="text-gray-500">{Founder.role}</p>
            </div>
            <div className="flex items-center justify-center p-3 space-x-3 border-t-2">
              <Link
                target="_blank"
                href={`mailto:${Founder.email}`}
                title="Email"
                className="text-gray-700 hover:text-[#684DF4]"
              >
                <MdEmail className="w-6 h-6" />
              </Link>
              <Link
                target="_blank"
                href={Founder.linkedin}
                title="LinkedIn"
                className="text-gray-700 hover:text-[#684DF4]"
              >
                <FaLinkedin className="w-6 h-6" />
              </Link>
              <Link
                target="_blank"
                href={Founder.github}
                title="GitHub"
                className="text-gray-700 hover:text-[#684DF4]"
              >
                <FaGithub className="w-6 h-6" />
              </Link>
            </div>
          </div>
          <div className="flex flex-row flex-wrap justify-between">
            {Data.map((singleData) => (
              <div
                key={singleData.id}
                className="flex flex-col justify-center w-full px-8 mx-6 my-12 text-center rounded-md md:w-96 lg:w-80 xl:w-64 bg-white text-gray-800 shadow-lg"
              >
                <Image
                  src={singleData.img}
                  className="self-center -mt-12 rounded-full aspect-square object-cover hover:scale-125 duration-300"
                  width={100}
                  height={100}
                  alt="Picture of Employees"
                />
                <div className="flex-1 my-4">
                  <p className="text-xl font-semibold leading-snug">
                    {singleData.name}
                  </p>
                  <p className="text-gray-500">{singleData.role}</p>
                </div>
                <div className="flex items-center justify-center p-3 space-x-3 border-t-2">
                  <Link
                    target="_blank"
                    href={`mailto:${singleData.email}`}
                    title="Email"
                    className="text-gray-700 hover:text-[#684DF4]"
                  >
                    <MdEmail className="w-6 h-6" />
                  </Link>
                  <Link
                    target="_blank"
                    href={singleData.linkedin}
                    title="LinkedIn"
                    className="text-gray-700 hover:text-[#684DF4]"
                  >
                    <FaLinkedin className="w-6 h-6" />
                  </Link>
                  <Link
                    target="_blank"
                    href={singleData.github}
                    title="GitHub"
                    className="text-gray-700 hover:text-[#684DF4]"
                  >
                    <FaGithub className="w-6 h-6" />
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default Team;
