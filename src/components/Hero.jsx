import React from "react";
import heroimg from "../assets/hero-img.png";
import { Typewriter } from "react-simple-typewriter";
import { IoIosArrowRoundDown } from "react-icons/io";
import { Link } from "react-scroll";

const Hero = () => {
  return (
    <div className="relative min-h-screen flex flex-col items-center justify-center">
      {/* Content Wrapper */}
      <div className="flex flex-col md:flex-row items-center justify-center w-full max-w-6xl mx-auto space-y-16 md:space-y-0 md:space-x-16 my-20 px-6">
        <img
          src={heroimg}
          alt="Retro Computer Graphic"
          className="w-72 md:w-96 lg:w-[400px] h-auto object-contain"
        />
        <div className="bg-white shadow-lg rounded-lg w-full max-w-lg md:max-w-xl lg:max-w-2xl">
          <div className="flex items-center space-x-2 p-2 bg-darkest-purple rounded-t-lg">
            <span className="w-3 h-3 bg-red-500 rounded-full"></span>
            <span className="w-3 h-3 bg-yellow-500 rounded-full"></span>
            <span className="w-3 h-3 bg-green-500 rounded-full"></span>
          </div>

          <div className="p-8 md:p-12 text-center">
            <h1 className="text-my-gray text-4xl md:text-5xl lg:text-6xl font-title font-bold">
              <Typewriter
                words={["Kavita Thomas"]}
                loop={0}
                cursor
                cursorStyle="_"
                typeSpeed={200}
                deleteSpeed={100}
                delaySpeed={1000}
              />
            </h1>
            <p className="font-title text-lg md:text-xl text-my-gray mt-4 font-semibold">
              Web Design • Software Development
            </p>
          </div>
        </div>
      </div>

      {/* Arrow Button */}
      <div className="absolute bottom-10 flex items-center justify-center text-my-gray rounded-3xl h-16 bg-darkest-purple lg:flex z-20">
        <Link to="aboutme" spy={true} smooth={true} offset={-40} duration={500}>
          <IoIosArrowRoundDown size={50} className="animate-bounce mt-4" />
        </Link>
      </div>
    </div>
  );
};

export default Hero;
