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
      date: "June 2024 - Present",
      description:
        "Designed, developed and deployed a web app to market QWIC's resources, merchandise and events, resulting in an effective platform for sponsorship and community outreach. Next steps will be building an admin panel and backend using Docker, Prisma and PostgreSQL.",
      type: "Full-stack Development",
      technologies: [
        "Next.js",
        "Tailwind CSS",
        "Vercel",
        "Docker",
        "Prisma",
        "PostgreSQL",
      ],
      image: qwic,
      label1: "Demo",
      label2: "Code",
      link1: "https://qwic.org/",
      link2: "https://github.com/queens-wic/qwic",
    },
    {
      title: "Student Association Web App",
      date: "January - May 2024",
      description:
        "Led the design and collaborated for front-end development in a team of 5 for a 4-month development sprint working on a student club website. Effectively learned and implemented React.js, Tailwind CSS, and Git in a 4 month time frame.",
      type: "Design and Front-end Development",
      technologies: ["Figma", "React.js", "Tailwind CSS"],
      image: qvsa,
      label1: "Design",
      link1:
        "https://www.figma.com/design/U8qyWbu5f8JCwlPeCJZfSy/QVSA?node-id=81-2&p=f&t=QjsKe8dDDs1vBH8x-0",
      label2: "Code",
      link2: "https://github.com/queens-web-development-club/qvsa",
    },
    {
      title: "Student Service Magazine",
      date: "May - August 2023",
      description:
        "Designed and produced a career development magazine intended for students for digital and physical print. Implemented brand guidelines, accessibility features and print specifications, resulting in 300+ physical copies and an accesible digital copy marketing Queen's Career Services resources.",
      type: "Digital + Print Design",
      technologies: ["Adobe InDesign", "Adobe Illustrator"],
      image: magazine,
      label1: "Demo",
      link1:
        "https://careers.queensu.ca/sites/cars3www/files/uploaded_files/Queens%20Best%20magazine%20Online.pdf",
    },
  ];

  return (
    <div>
      <div
        name="projects"
        className="flex flex-col justify-center items-center md:my-10"
      >
        {/* Wave Text */}
        <div
          className="font-title my-4
         sm:text-2xl md:text-3xl"
        >
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
