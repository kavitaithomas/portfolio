import React from "react";
import qwic from "../assets/projects/qwic.png";
import magazine from "../assets/projects/magazine.png";
import qvsa from "../assets/projects/qvsa.png";
import ProjectCard from "./ProjectCard";

const projects = () => {
  const projects = [
    {
      title: "Outreach & Community Website",
      shortTitle: "Community Website",
      description:
        "A platform designed to facilitate community engagement and outreach programs. Features include event scheduling, volunteer signups, and real-time updates.",
      technologies: ["React", "Tailwind CSS", "Node.js"],
      image: qwic,
    },
    {
      title: "Outreach & Community Website",
      shortTitle: "Community Website",
      description:
        "A platform designed to facilitate community engagement and outreach programs. Features include event scheduling, volunteer signups, and real-time updates.",
      technologies: ["React", "Tailwind CSS", "Node.js"],
      image: qvsa,
    },
    {
      title: "Outreach & Community Website",
      shortTitle: "Community Website",
      description:
        "A platform designed to facilitate community engagement and outreach programs. Features include event scheduling, volunteer signups, and real-time updates.",
      technologies: ["React", "Tailwind CSS", "Node.js"],
      image: magazine,
    },
  ];
  return (
    <div>
      <div className="flex flex-col justify-center items-center pb-20">
        {/* Wave Text */}
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
                My Projects
              </textPath>
            </text>
          </svg>
        </div>

        <div className="flex flex-col space-y-6 md:flex-row md:space-x-6 md:space-y-0">
          <div className="flex flex-col space-y-6 md:flex-row md:space-x-6 md:space-y-0">
            {projects.map((project, index) => (
              <ProjectCard key={index} project={project} />
            ))}
          </div>
        </div>

        {/* closing div */}
      </div>
    </div>
  );
};

export default projects;
