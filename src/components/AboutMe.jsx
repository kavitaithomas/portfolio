import React from "react";
import headshot from "../assets/headshot.png";
import { AiFillLinkedin } from "react-icons/ai";

const AboutMe = () => {
  return (
    <div name="aboutme">
      <div className="w-full flex flex-col items-center md:my-10">
        {/* Wave Text */}
        <div
          className="font-title my-4
         sm:text-2xl md:text-3xl"
        >
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
                Hi! I'm Kavita
              </textPath>
            </text>
          </svg>
        </div>
        <div className="flex flex-col items-center xl:flex-row justify-evenly w-full">
          {/* Headshot with Link*/}
          <a
            href="https://www.linkedin.com/in/kavitaithomas"
            target="_blank"
            rel="noopener noreferrer"
            className="relative w-72 h-80 rounded-lg border-8 border-my-gray overflow-hidden mb-8 xl:mb-0 mr-4 group"
          >
            {/* Profile Image */}
            <img
              src={headshot}
              alt="Kavita Thomas Headshot"
              className="w-full h-full object-cover transition-opacity duration-300 group-hover:opacity-50"
            />

            {/* LinkedIn Icon - Appears on Hover */}
            <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
              <AiFillLinkedin
                size={90}
                color="#241527"
                className="p-2 rounded-full shadow-lg"
              />
            </div>
          </a>

          {/* About Me text */}
          <div className="text-my-gray max-w-2xl lg:flex-grow text-left text-xl">
            <p className="my-4">
              I am a fourth year Computing student graduating in Spring 2025
              from Queen’s University in Kingston, Ontario. I have a specific
              interest in front-end and full-stack development, and enjoy web
              and UI/UX design.
            </p>
            <p>
              I am passionate about combining my love for design and technology
              to build user-focused tools that will help people and businesses
              thrive. My goal is to break through barriers in technology and
              make tech accessible to women and marginalized peoples, which I
              practice as a member of Queen’s Women in Computing, a student-run
              organization dedicated to exploring technology and embracing
              empowerment.
            </p>
            <p className="my-4">
              Outside of my work in tech, you can often find me channeling my
              love for design through other mediums such as crochet and paint,
              or participating in dance classes or enjoying the outdoors!
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutMe;
