import React from "react";
import { AiFillLinkedin } from "react-icons/ai";
import { FaGithub } from "react-icons/fa";
import { MdOutlineEmail } from "react-icons/md";

const Contact = () => {
  return (
    <div name="contact" className="w-full pb-20">
      {/* Title */}
      <div className="w-full flex justify-center mt-16">
        <div className="text-my-gray font-title sm:text-2xl md:text-3xl">
          <svg
            className="w-[1000px] h-[200px]"
            viewBox="0 0 400 100"
            xmlns="http://www.w3.org/2000/svg"
          >
            <defs>
              <path
                id="wave"
                d="M10,50 C60,10 140,90 200,50 C260,10 340,90 390,50"
                fill="transparent"
              />
            </defs>
            <text fill="#F2F2F2" fontWeight="bold">
              <textPath href="#wave" textAnchor="middle" startOffset="50%">
                Contact
              </textPath>
            </text>
          </svg>
        </div>
      </div>

      {/* Content */}
      <div className=" text-my-gray flex flex-col justify-center items-center max-w-2xl py-6">
        {/* Social icons for mobile */}
        <div className="flex flex-row justify-center items-center space-x-4 xl:hidden">
          <AiFillLinkedin size={95} color="#f2f2f2" />
          <FaGithub size={90} color="#f2f2f2" />
          <MdOutlineEmail size={95} color="#f2f2f2" />
        </div>
      </div>

      <p className="py-4 text-my-gray text-xl text-center md:text-left">
        Submit the form below to get in touch with me!
      </p>

      <div className="flex flex-col xl:flex-row justify-between">
        {/* Contact form half */}
        <div className="flex flex-col w-full xl:w-2/3">
          <form action="">
            <div className="pb-4 flex flex-col space-y-4 xl:flex-row xl:space-x-4 xl:space-y-0">
              <input
                type="text"
                name="name"
                placeholder="Enter your name"
                className="p-2 bg-transparent border-2 rounded-md text-my-gray focus:outline-none xl:w-2/3"
              />
              <input
                type="text"
                name="email"
                placeholder="Enter your e-mail"
                className="p-2 bg-transparent border-2 rounded-md text-my-gray focus:outline-none xl:w-2/3"
              />
            </div>
            <textarea
              name="message"
              placeholder="Enter your message"
              rows="10"
              className="p-2 w-full bg-transparent border-2 rounded-md text-my-gray focus:outline-none"
            ></textarea>
          </form>
        </div>

        {/* Social links half */}
        <div className="hidden xl:ms-16 text-my-gray xl:flex flex-col justify-between items-start md:w-1/3 space-y-4">
          <div className="flex items-center hover:scale-105 duration-150">
            <AiFillLinkedin size={90} color="#f2f2f2" />
            <p className="p-4 text-xl hidden md:block">Username</p>
          </div>
          <div className="flex items-center hover:scale-105 duration-150">
            <FaGithub size={85} color="#f2f2f2" />
            <p className="p-4 text-xl hidden md:block">Username</p>
          </div>
          <div className="flex items-center hover:scale-105 duration-150">
            <MdOutlineEmail size={90} color="#f2f2f2" />
            <p className="p-4 text-xl hidden md:block">
              kavitathomas10@gmail.com
            </p>
          </div>
        </div>
      </div>
      <button className="text-darkest-purple text-xl font-semibold bg-my-gray px-4 py-2 my-4 rounded-md hover:scale-110 duration-200 hover:bg-darkest-purple hover:text-my-gray">
        Send
      </button>
    </div>
  );
};

export default Contact;
