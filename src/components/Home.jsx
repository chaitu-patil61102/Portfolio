import React from "react";
import pic from "../../public/photo.avif"; // Ensure this image exists or replace with resume photo
// import { FaSquareFacebook } from "react-icons/fa6";
// import { FaLinkedin } from "react-icons/fa";
// import { IoLogoYoutube } from "react-icons/io";
// import { FaTelegram } from "react-icons/fa6";
import { FaSquareFacebook, FaLinkedin, FaTelegram } from "react-icons/fa6";
import { IoLogoYoutube } from "react-icons/io5";

import { SiAngular, SiSpringboot } from "react-icons/si";
import { SiMongodb, } from "react-icons/si";
import { FaReact, FaJsSquare } from "react-icons/fa";
import { GrMysql } from "react-icons/gr";

import { ReactTyped } from "react-typed";

function Home() {
  return (
    <>
      <div
        name="Home"
        className="max-w-screen-2xl container mx-auto px-4 md:px-20 my-28"
      >
        <div className="flex flex-col md:flex-row">
          {/* Text Content */}
          <div className="md:w-1/2 mt-12 md:mt-24 space-y-2 order-2 md:order-1">
            <span className="text-xl">Welcome To My Profile</span>
            <div className="flex space-x-1 text-2xl md:text-4xl">
              <h1>Hello, I'm a</h1>
              <ReactTyped
                className="text-red-700 font-bold"
                strings={[
                  "Full Stack Developer",
                  "Java Developer",
                  "React Developer",
                  "Angular Developer",
                ]}
                typeSpeed={40}
                backSpeed={50}
                loop={true}
              />
            </div>
            <br />
            <p className="text-sm md:text-md text-justify">
              I’m Chaitali Patil, a passionate developer from Pimpri Chinchwad,
              Pune. I specialize in Core Java, Spring Boot, REST APIs, React,
              and Angular. I love creating robust full-stack applications with
              clean UI/UX and impactful backend functionality.
            </p>
            <br />

            {/* Social media icons */}
            <div className="flex flex-col items-center md:flex-row justify-between space-y-6 md:space-y-0">
              <div className="space-y-2">
                <h1 className="font-bold text-center">Available on</h1>
                <ul className="flex space-x-5">
                  <li>
                    <a
                      href="https://www.facebook.com/share/1CjkWPGCBQ/ "
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <FaSquareFacebook className="text-2xl cursor-pointer" />
                    </a>
                  </li>
                  <li>
                    <a
                      href="https://www.linkedin.com/in/chaitali-patil-8a76b2338"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <FaLinkedin className="text-2xl cursor-pointer" />
                    </a>
                  </li>
                  <li>
                    <a
                      href="https://www.youtube.com/"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <IoLogoYoutube className="text-2xl cursor-pointer" />
                    </a>
                  </li>
                  <li>
                    <a
                      href="https://t.me/Cp061108/"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <FaTelegram className="text-2xl cursor-pointer" />
                    </a>
                  </li>
                </ul>
              </div>

              <div className="space-y-2">
                <h1 className="font-bold text-center">Currently working on</h1>
                <div className="flex space-x-5">
                  <SiAngular className="text-3xl text-red-600 hover:scale-110 duration-200 border-[2px] rounded-full p-1 cursor-pointer" />
                  <FaReact className="text-3xl text-cyan-500 hover:scale-110 duration-200 border-[2px] rounded-full p-1 cursor-pointer" />
                  {/* <SiMongodb className="text-3xl hover:scale-110 duration-200 border-[2px] rounded-full cursor-pointer" /> */}
                  <SiSpringboot className="text-3xl text-green-700 hover:scale-110 duration-200 border-[2px] rounded-full p-1 cursor-pointer" />
                  <FaJsSquare className="text-3xl text-yellow-400 hover:scale-110 duration-200 border-[2px] rounded-full p-1 cursor-pointer" />
                  {/* <GrMysql className="text-3xl text-blue-600 hover:scale-110 duration-200 border-[2px] rounded-full p-1 cursor-pointer" /> */}
                </div>
              </div>

            </div>
          </div>

          {/* Profile Image */}
          <div className="md:w-1/2 md:ml-48 md:mt-20 mt-8 order-1">
            <img
              src={pic}
              className="rounded-full md:w-[450px] md:h-[450px]"
              alt="Chaitali Patil"
            />
          </div>
        </div>
      </div>

      <hr />
    </>
  );
}

export default Home;
