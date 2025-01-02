import React, { useState } from "react";
import qwic from "../assets/projects/qwic.png";
import magazine from "../assets/projects/magazine.png";
import qvsa from "../assets/projects/qvsa.png";
import ProjectCard from "./ProjectCard";

const Projects = () => {
  const [expandedIndex, setExpandedIndex] = useState(null);

  const handleExpand = (index) => {
    if (expandedIndex === index) {
      setExpandedIndex(null); // Collapse the current card
    } else {
      setExpandedIndex(index); // Expand the clicked card
    }
  };

  const projects = [
    {
      title: "Outreach & Community Web App",
      description:
        "A platform designed to facilitate community engagement and outreach programs. Features include event scheduling, volunteer signups, and real-time updates.",
      type: "Full-stack Development",
      technologies: ["React", "Tailwind CSS", "Node.js"],
      image: qwic,
    },
    {
      title: "Student Association Web App",
      description:
        "A comprehensive system for managing student records, teacher schedules, and administrative workflows with cloud integration.",
      type: "Design and Front-end Development",
      technologies: ["Django", "PostgreSQL", "Docker"],
      image: qvsa,
    },
    {
      title: "Student Service Magazine",
      description:
        "An interactive magazine platform with multimedia support, dynamic layouts, and reader analytics. Designed for modern publishers.",
      type: "Digital + Print Design",
      technologies: ["Vue.js", "SCSS", "Firebase"],
      image: magazine,
    },
  ];

  return (
    <div>
      <div className="flex flex-col justify-center items-center md:my-10">
        {/* Wave Text */}
        <div className="font-title my-4 sm:text-2xl md:text-3xl">
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

        {/* Project Cards */}
        <div className="flex flex-col space-y-8 md:flex-row md:space-x-6 md:space-y-0">
          {projects.map((project, index) => (
            <ProjectCard
              key={index}
              project={project}
              isExpanded={expandedIndex === index} // Check if the current card is expanded
              onExpand={() => handleExpand(index)} // Pass expand handler
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Projects;
