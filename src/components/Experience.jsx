import React from "react";
import { useState } from "react";

const Experience = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const handleToggle = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  const accordionData = [
    {
      title: "Instrcutional Designer",
      place: "Queen's Law",
      year: "2025",
      content:
        "Tailwind CSS is a utility-first CSS framework for building custom designs quickly and efficiently.",
    },
    {
      title: "Web Developer",
      place: "Queen's Women in Computing (QWIC)",
      year: "2025",
      content:
        "Tailwind CSS allows for rapid development, responsive designs, and complete control over styling.",
    },
    {
      title: "UI/UX Designer and Front-end Developer",
      place: "Queen's Web Development Club (QWeb)",
      year: "2024",
      content:
        "Tailwind CSS can be installed via npm or using a CDN for quick prototyping.",
    },
    {
      title: "Marketing, Communications, Publications Assistant",
      place: "Career Services",
      year: "2023",
      content:
        "Tailwind CSS can be installed via npm or using a CDN for quick prototyping.",
    },
  ];

  return (
    <div>
      {/* Wave Text */}
      <div className="flex flex-col items-center md:mt-16">
        {/* Title */}
        <div className="font-title sm:text-2xl md:text-3xl">
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
            <text fill="#F2F2F2" fontWeight="bold">
              <textPath href="#wave" textAnchor="middle" startOffset="50%">
                Experience
              </textPath>
            </text>
          </svg>
        </div>
      </div>
      {/* Accordion */}
      <div className="w-full max-w-5xl mx-auto pb-20">
        {accordionData.map((item, index) => (
          <div key={index} className="border-b border-my-gray overflow-hidden">
            <button
              onClick={() => handleToggle(index)}
              className={`w-full flex justify-between rounded-lg items-center p-4 text-my-gray font-semibold group
    ${activeIndex === index ? "bg-darkest-purple" : "hover:bg-darkest-purple"}`}
            >
              {/* Left Section: Title and Place */}
              <div className="flex text-left space-x-4">
                <span>{item.title}</span>
                <div className="text-gray-400">
                  <span>{item.place}</span>
                </div>
              </div>

              {/* Right Section: Year and Toggle Icon */}
              <div className="flex items-center space-x-2">
                <span>{item.year}</span>
                <span>{activeIndex === index ? "-" : "+"}</span>
              </div>
            </button>
            <div
              className={`transition-[max-height] duration-300 ease-in-out overflow-hidden ${
                activeIndex === index ? "max-h-40 p-4" : "max-h-0"
              }  text-my-gray`}
            >
              {item.content}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Experience;
