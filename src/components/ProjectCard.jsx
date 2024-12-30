import React from "react";
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
        <div className="flex flex-col p-4 space-y-4 min-h-[300px]">
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
