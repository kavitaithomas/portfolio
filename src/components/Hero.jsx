import React from "react";
import heroimg from "../assets/hero-img.png";
import { Typewriter } from "react-simple-typewriter";
import { IoIosArrowRoundDown } from "react-icons/io";
import { Link } from "react-scroll";

const Hero = () => {
  return (
    <div className="relative h-screen">
      {/* Text */}
      <div className="flex flex-col justify-center items-center">
        <div className="flex flex-col md:flex-row md:space-x-20 justify-between items-center my-44">
          <img
            src={heroimg}
            alt="retro computer graphic"
            className="w-96 h-auto mt-8"
          />
          {/* Browser Mockup */}
          <div className="bg-white shadow-lg rounded-lg w-[600px] md:w-[700px] lg:w-[800px]">
            {/* Fake Browser Header */}
            <div className="flex items-center space-x-2 p-2 bg-gray-200 rounded-t-lg">
              <span className="w-3 h-3 bg-red-500 rounded-full"></span>
              <span className="w-3 h-3 bg-yellow-500 rounded-full"></span>
              <span className="w-3 h-3 bg-green-500 rounded-full"></span>
            </div>

            {/* Typing Effect & Subtitle */}
            <div className="p-10 md:p-16 text-center">
              <h1 className="text-my-gray text-5xl md:text-6xl font-title font-bold whitespace-nowrap">
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

          {/* Image */}
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
