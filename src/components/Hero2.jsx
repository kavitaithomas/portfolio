import React from "react";
import { Typewriter } from "react-simple-typewriter";
import { IoIosArrowRoundDown } from "react-icons/io";
import { Link } from "react-scroll";

const Hero = () => {
  return (
    <div className="relative min-h-screen flex flex-col items-center justify-center">
      {/* Content Wrapper */}
      <div className="flex flex-col md:flex-row items-center justify-center w-full max-w-6xl mx-auto space-y-16 md:space-y-0 md:space-x-16 my-20 px-6">
        <div className="p-8 md:p-12 text-center">
          <h1 className="text-darkest-purple text-4xl md:text-6xl lg:text-7xl font-title font-bold">
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
          <p className="font-title text-lg md:text-2xl text-darkest-purple mt-4 font-semibold">
            Web Design • Software Development
          </p>
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
