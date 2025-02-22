import React from "react";
import { useState } from "react";

const Experience = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const handleToggle = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  const accordionData = [
    {
      title: "Instructional Designer",
      place: "Queen's Law",
      year: "2025",
      content1:
        "Developed interactive learning web component templates using HTML5 and Bootstrap CSS for use in the Queen's Faculty of Law online courses. The reusable templates allow course developers to build courses quickly and without code, making work more efficient. The templates also rebrand the previous UI of the courses, and provide different ways to display content for a modern, clean and organized learning experience.",
    },
    {
      title: "Web Developer",
      place: "Queen's Women in Computing (QWIC)",
      year: "2025",
      content1:
        "Designed and developing the QWIC website to market resources, merchandise and events. Working in a team of 3, I prototyped 5 different pages in Figma, then developed the front-end using Next.js, Tailwind CSS and Vercel. The next steps of this project will be buiding the backend to include an admin panel.",
      content2:
        "As co-lead web developer, I mentor the first-year web developer by providing 1:1 guidance, tutorials, and resources for front-end development in this project.",
    },
    {
      title: "UI/UX Designer and Front-end Developer",
      place: "Queen's Web Development Club (QWeb)",
      year: "2024",
      content1:
        "In a 4-month development sprint, I led a team of 3 in the design of a student association web app, implementing and developing brand guidelines, and wireframing and prototyping for web development in Figma. I was also responsible for developing the front-end of multiple pages, where I successfully learned and implemented React.js, Tailwind, Git, and debugging procedures over the 4 months.",
    },
    {
      title: "Marketing, Communications, and Publications Assistant",
      place: "Career Services",
      year: "2023",
      content1:
        "Led the major revision of 3 Career Services Magazines, and redesigned and published 3 rebranded magazines ready for print and distribution in the new academic year. Leading this project, I learned valuable project management techniques and used Microsoft Planner to coordinate contributors and design tasks, ensuring deadlines and specifications were met.",
      content2:
        "Furthermore, I designed other print and digital promotional media such as posters, newsletters, stickers, and social media posts, successfully marketing Career Services events and resources to employers and students.",
    },
  ];

  return (
    <div>
      {/* Wave Text */}
      <div name="experience" className="flex flex-col items-center md:my-6">
        {/* Title */}
        <div className="font-title mt-2 sm:text-2xl md:text-3xl">
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
      <div className="w-full">
        {accordionData.map((item, index) => (
          <div
            key={index}
            className="text-lg border-b border-my-gray overflow-hidden"
          >
            <button
              onClick={() => handleToggle(index)}
              className={`w-full flex justify-between rounded-lg items-center p-6 text-my-gray font-semibold group
    ${
      activeIndex === index
        ? "bg-darkest-purple"
        : "hover:bg-darkest-purple duration-700"
    }`}
            >
              {/* Left Section: Title and Place */}
              <div className="flex text-left space-x-2">
                <span>{item.title}</span>
                <div className="text-gray-400">
                  <span>{item.place}</span>
                </div>
              </div>

              {/* Right Section: Year and + Icon */}
              <div className="flex items-center space-x-2">
                <span>{item.year}</span>
                <span className="text-2xl">
                  {activeIndex === index ? "-" : "+"}
                </span>
              </div>
            </button>
            <div
              className={`transition-[max-height] duration-500 ease-in-out overflow-hidden ${
                activeIndex === index ? "h-auto p-6" : "h-0"
              } text-my-gray`}
            >
              {item.content1 && <p className="mb-4">{item.content1}</p>}
              {item.content2 && <p className="mb-4">{item.content2}</p>}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Experience;
