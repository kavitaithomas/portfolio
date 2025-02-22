import React from "react";
import { AiFillLinkedin } from "react-icons/ai";
import { FaGithub } from "react-icons/fa";
import { MdOutlineEmail } from "react-icons/md";

const Contact = () => {
  return (
    <div name="contact" className="w-full pb-20">
      {/* Title */}
      <div className="w-full flex justify-center md:mt-10">
        <div className="text-my-gray font-title mt-4 sm:text-2xl md:text-3xl">
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
            <text fill="#241527" fontWeight="bold">
              <textPath href="#wave" textAnchor="middle" startOffset="50%">
                Contact
              </textPath>
            </text>
          </svg>
        </div>
      </div>

      {/* Social Icons for mobile*/}
      <div className="w-full flex justify-center pb-12">
        <div className="flex flex-row justify-center items-center space-x-8 xl:hidden">
          <a
            href="https://www.linkedin.com/in/kavitaithomas"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center hover:scale-105 duration-500"
          >
            <AiFillLinkedin size={95} color="#241527" />
          </a>
          <a
            href="https://github.com/kavitaithomas"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center hover:scale-105 duration-500"
          >
            <FaGithub size={90} color="#241527" />
          </a>
          <a
            href="mailto:kavita.t@queensu.ca"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center hover:scale-105 duration-500"
          >
            <MdOutlineEmail size={95} color="#241527" />
          </a>
        </div>
      </div>

      <p className="pb-4 text-my-gray text-xl font-medium text-center xl:text-left">
        Submit the form below to get in touch with me!
      </p>

      <div className="flex flex-col xl:flex-row justify-between">
        {/* Contact form half */}
        <div className="flex flex-col w-full xl:w-2/3">
          <form action="https://getform.io/f/azyyeoqb" method="POST">
            <div className="pb-4 flex flex-col space-y-4 xl:flex-row xl:space-x-4 xl:space-y-0">
              <input
                type="text"
                name="name"
                placeholder="Enter your name"
                className="p-2 bg-transparent border-2 border-my-gray rounded-md text-my-gray focus:outline-none xl:w-2/3"
              />
              <input
                type="text"
                name="email"
                placeholder="Enter your e-mail"
                className="p-2 bg-transparent border-2 border-my-gray rounded-md text-my-gray focus:outline-none xl:w-2/3"
              />
            </div>
            <textarea
              name="message"
              placeholder="Enter your message"
              rows="10"
              className="p-2 w-full bg-transparent border-2 border-my-gray rounded-md text-my-gray focus:outline-none"
            ></textarea>
            <div className="flex justify-center xl:justify-start">
              <button className="text-my-gray text-lg font-semibold bg-darkest-purple border-2 border-my-gray px-4 py-2 my-4 rounded-md hover:scale-105 duration-500 hover:bg-my-gray hover:text-darkest-purple">
                Send
              </button>
            </div>
          </form>
        </div>

        {/* Social links for desktop */}
        <div className="hidden xl:ms-16 text-my-gray xl:flex flex-col items-start xl:1/3 space-y-8">
          <div className="flex items-center hover:scale-105 duration-500">
            <a
              href="https://www.linkedin.com/in/kavitaithomas"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center"
            >
              <AiFillLinkedin size={90} color="#241527" />
              <p className="p-4 text-xl hidden md:block">Kavita Thomas</p>
            </a>
          </div>
          <div className="flex items-center hover:scale-105 duration-500">
            <a
              href="https://github.com/kavitaithomas"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center"
            >
              <FaGithub size={85} color="#241527" />
              <p className="p-4 text-xl hidden md:block">kavitaithomas</p>
            </a>
          </div>
          <div className="flex items-center hover:scale-105 duration-500">
            <a
              href="mailto:kavita.t@queensu.ca"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center"
            >
              <MdOutlineEmail size={90} color="#241527" />
              <p className="p-4 text-xl hidden md:block">kavita.t@queensu.ca</p>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
