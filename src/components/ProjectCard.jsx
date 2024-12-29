import React from "react";
import { useState } from "react";

const ProjectCard = ({ project }) => {
  const [isExpanded, setIsExpanded] = useState(false);

  const handleExpand = () => setIsExpanded(!isExpanded);

  return (
    <div
      onClick={handleExpand}
      className={`rounded-2xl bg-darkest-purple p-4 cursor-pointer transition-all duration-300 ease-in-out ${
        isExpanded ? "w-full" : "w-full md:w-1/3"
      } flex flex-col ${isExpanded ? "h-auto" : "h-64"} ${
        isExpanded ? "overflow-visible" : "overflow-hidden"
      } hover:scale-105`}
    >
      {/* Conditionally Render Content */}
      {isExpanded ? (
        <div className="flex flex-col space-y-4">
          <h2 className="text-2xl font-bold text-my-gray">{project.title}</h2>
          <p className="text-my-gray">{project.description}</p>
          <div>
            <h3 className="text-lg text-pink-300 font-semibold">
              Technologies
            </h3>
            <ul className="text-my-gray list-disc pl-4">
              {project.technologies.map((tech, index) => (
                <li key={index}>{tech}</li>
              ))}
            </ul>
          </div>
        </div>
      ) : (
        <div>
          {/* Compact Card */}
          <div className="text-my-gray w-full overflow-hidden rounded-lg">
            <img
              src={project.image}
              alt={`${project.title} preview`}
              className="w-full h-32 object-cover"
            />
          </div>
          <div className="flex justify-between mt-4">
            <p className="text-my-gray text-xl">{project.shortTitle}</p>
          </div>
        </div>
      )}
    </div>
  );
};

export default ProjectCard;
