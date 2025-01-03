import React from "react";
import Button from "./Button";

// applying an image that is 16:9 in ration will make your life easier

const ProjectCard = ({ project, isExpanded, onExpand }) => {
  return (
    <div
      onClick={onExpand}
      className={`rounded-2xl bg-darkest-purple p-2 cursor-pointer transition-all duration-200 ease-in-out hover:scale-105 ${
        isExpanded ? "w-full" : "w-full md:w-1/3"
      } flex flex-col ${isExpanded ? "overflow-visible" : "overflow-hidden"}`}
    >
      {/* Conditionally Render Content */}
      {isExpanded ? (
        <div className="flex flex-col text-lg p-4 space-y-4 min-h-[300px]">
          <div className="flex flex-row space-x-4 justify-start items-center">
            <h2 className="text-2xl font-bold text-my-gray">{project.title}</h2>
            <Button label={project.label1} link={project.link1} />
            {project.label2 && project.link2 && (
              <Button label={project.label2} link={project.link2} />
            )}
          </div>
          <p className="text-blue-200 font-semibold">{project.date}</p>
          <p className="text-my-gray">{project.description}</p>
          <div>
            <h3 className="text-blue-200 font-semibold">Technologies</h3>
            <ul className="text-my-gray list-disc grid grid-cols-2 pl-4 gap-2 w-2/3">
              {project.technologies.map((tech, index) => (
                <li key={index}>{tech}</li>
              ))}
            </ul>
          </div>
        </div>
      ) : (
        <div className="rounded-2xl bg-darkest-purple p-2 w-full md:flex flex-col min-h-[275px]">
          <div className="h-auto w-full overflow-hidden rounded-lg">
            <img
              src={project.image}
              alt={`${project.title} preview`}
              className="w-full h-full object-cover"
            />
          </div>
          <div className="flex flex-col text-my-gray text-left pt-4 flex-grow">
            <p className="text-my-gray text-xl">{project.title}</p>
            <p>{project.type}</p>
            <p className="pt-4 bottom-0 right-0">more +</p>
          </div>
        </div>
      )}
    </div>
  );
};

export default ProjectCard;
