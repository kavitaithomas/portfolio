import React from "react";
import headshot from "../assets/headshot.png";
import { AiFillLinkedin } from "react-icons/ai";
import { Typewriter } from "react-simple-typewriter";

const AboutMe = () => {
  return (
    <div name="aboutme">
      <div className="w-full flex flex-col items-center md:my-10">
        <h1 className="text-darkest-purple text-5xl md:text-6xl font-title font-medium pt-16 pb-20">
          <Typewriter
            words={["About Me"]}
            loop={1}
            cursor
            cursorStyle="_"
            typeSpeed={200}
            deleteSpeed={100}
            delaySpeed={1000}
          />
        </h1>

        <div className="flex flex-col items-center xl:flex-row xl:space-x-24 justify-center w-full px-6">
          <div className="flex justify-center">
            <a
              href="https://www.linkedin.com/in/kavitaithomas"
              target="_blank"
              rel="noopener noreferrer"
              className="relative w-80 h-80 rounded-xl border-4 border-my-gray overflow-hidden mb-8 xl:mb-0 group"
            >
              <img
                src={headshot}
                alt="Kavita Thomas Headshot"
                className="w-full h-full object-cover transition-opacity duration-300 border-4 border-darkest-purple group-hover:opacity-50"
              />

              {/* LinkedIn Icon - Appears on Hover */}
              <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <AiFillLinkedin
                  size={90}
                  color="#F2E1FF"
                  className="p-2 rounded-full shadow-lg"
                />
              </div>
            </a>
          </div>

          <div className="text-darkest-purple text-lg sm:text-xl max-w-3xl leading-relaxed">
            <p className="mb-4">
              I am a fourth-year Computing student graduating in Spring 2025
              from Queen’s University in Kingston, Ontario. I have a specific
              interest in front-end and full-stack development, and enjoy web
              and UI/UX design.
            </p>
            <p className="mb-4">
              I am passionate about combining my love for design and technology
              to build user-focused tools that will help people and businesses
              thrive. My goal is to break through barriers in technology and
              make tech accessible to women and marginalized peoples, which I
              practice as a member of Queen’s Women in Computing, a student-run
              organization dedicated to exploring technology and embracing
              empowerment.
            </p>
            <p className="mb-4">
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
