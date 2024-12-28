import React from "react";
import hero from "../assets/hero.png";
import { FaArrowDownLong } from "react-icons/fa";

const Hero = () => {
  return (
    <div className="relative">
      {/* Image */}
      <div className="flex justify-center items-center">
        <img src={hero} className="w-full h-auto" />
      </div>

      {/* Text */}
      <div className="absolute top-0 left-0 w-full h-full flex flex-col justify-center items-center text-my-gray">
        {/* "web design" */}
        <p className="text-xl lg:text-2xl xl:text-3xl font-semibold absolute top-[35%] left-[5%] sm:top-[37%] sm:left-[8%] md:top-[39%] md:left-[10%]">
          web design
        </p>

        {/* "Kavita Thomas" */}
        <h1 className="text-5xl md:text-5xl lg:text-6xl xl:text-8xl p-4 font-bold text-center">
          Kavita Thomas
        </h1>

        {/* "software development" */}
        <p className="text-xl lg:text-2xl xl:text-3xl font-semibold absolute bottom-[35%] right-[5%] sm:bottom-[37%] sm:right-[8%] md:bottom-[39%] md:right-[10%]">
          software development
        </p>
      </div>
    </div>
  );
};

export default Hero;
