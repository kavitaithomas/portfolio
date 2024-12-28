import React from "react";
import hero from "../assets/hero.png";
import { FaArrowDownLong } from "react-icons/fa";

const Hero = () => {
  return (
    <div className="relative">
      {/* Image  */}
      <div className="flex justify-center items-center">
        <img src={hero} className="w-full h-auto" />
      </div>

      {/* Text */}
      <div className="absolute top-0 left-0 w-full h-full flex flex-col justify-center items-center text-my-gray">
        <p className="text-4xl font-semibold absolute top-[39%] left-[10%]">
          web design
        </p>
        <h1 className="text-8xl font-bold">Kavita Thomas</h1>
        <p className="text-4xl font-semibold absolute bottom-[39%] right-[10%]">
          software development
        </p>
      </div>
    </div>
  );
};

export default Hero;
