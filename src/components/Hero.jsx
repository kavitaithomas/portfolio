import React from "react";
import hero from "../assets/Hero.png";
import { IoIosArrowRoundDown } from "react-icons/io";
import { Link } from "react-scroll";

const Hero = () => {
  return (
    <div className="relative z-10">
      {/* Hero Image - Touches Top of Page */}
      <div className="relative flex justify-center items-center">
        <img
          src={hero}
          alt="Purple waves of life design"
          className="w-full h-auto mt-8"
        />
      </div>

      {/* Text */}
      <div className="flex flex-col justify-center items-center">
        <div className="font-title absolute top-0 left-0 w-full h-full flex flex-col justify-center items-center text-my-gray">
          <h1 className="sm:text-lg md:text-2xl lg:text-3xl xl:4xl font-bold absolute top-[25%] left-[5%] sm:top-[37%] sm:left-[8%] md:top-[30%] md:left-[10%]">
            web design
          </h1>
          <h1 className="w-1/3 sm:w-auto sm:text-lg md:text-2xl lg:text-3xl xl:4xl font-bold absolute bottom-[10%] right-[5%] sm:bottom-[20%] sm:right-[8%] md:bottom-[20%] md:right-[5%]">
            software development
          </h1>
        </div>

        {/* Arrow Button */}
        <div className="absolute bottom-20 items-center text-my-gray rounded-3xl h-16 bg-darkest-purple hidden lg:flex z-20">
          <Link
            to="aboutme"
            spy={true}
            smooth={true}
            offset={-80}
            duration={500}
          >
            <IoIosArrowRoundDown size={50} className="animate-bounce mt-4" />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Hero;
