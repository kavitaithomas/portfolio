import React from "react";
import hero from "../assets/hero.png";
import { IoIosArrowRoundDown } from "react-icons/io";
import { Link } from "react-scroll";

const Hero = () => {
  return (
    <div className="relative z-10">
      {/* Image */}
      <div className="flex justify-center items-center">
        <img
          src={hero}
          alt="Purple wave pattern design"
          className="w-full h-auto"
        />
      </div>

      {/* Text */}
      <div className="flex flex-col justify-center items-center">
        <div className="font-title absolute top-0 left-0 w-full h-full flex flex-col justify-center items-center text-my-gray">
          <p className="text-sm sm:text-lg md:text-xl xl:text-2xl font-semibold absolute top-[25%] left-[5%] sm:top-[37%] sm:left-[8%] md:top-[39%] md:left-[10%]">
            web design
          </p>
          <h1 className="text-lg sm:text-3xl md:text-5xl lg:text-6xl lg:my-8 p-10 font-bold text-center">
            Kavita Thomas
          </h1>
          <p className="text-sm w-1/3 sm:w-auto sm:text-lg md:text-xl xl:text-2xl font-semibold absolute bottom-[20%] right-[5%] sm:bottom-[37%] sm:right-[8%] md:bottom-[39%] md:right-[10%]">
            software development
          </p>
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
