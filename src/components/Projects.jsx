import React from "react";
import qwic from "../assets/projects/qwic.png";
import magazine from "../assets/projects/magazine.png";
import qvsa from "../assets/projects/qvsa.png";

const projects = () => {
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
          {/* Project Card */}
          {/* qwic */}
          <div className="rounded-2xl bg-darkest-purple p-4 w-full md:w-1/3 flex flex-col">
            <div className="h-64 w-full overflow-hidden rounded-lg">
              <img
                src={qwic}
                alt="qwic website preview"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="flex justify-between mt-4">
              <p className="text-my-gray text-xl">
                Outreach & Community Website
              </p>
            </div>
          </div>
          {/* qvsa */}
          <div className="rounded-2xl bg-darkest-purple p-4 w-full md:w-1/3 flex flex-col">
            <div className="h-64 w-full overflow-hidden rounded-lg">
              <img
                src={qvsa}
                alt="qvsa website preview"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="flex justify-between mt-4">
              <p className="text-my-gray text-xl">
                Student Association Website
              </p>
            </div>
          </div>
          {/* cs magazine */}
          <div className="rounded-2xl bg-darkest-purple p-4 w-full md:w-1/3 flex flex-col">
            <div className="h-64 w-full overflow-hidden rounded-lg">
              <img
                src={magazine}
                alt="magazine preview"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="flex justify-between mt-4">
              <p className="text-my-gray text-xl">Student Service Magazine</p>
            </div>
          </div>
        </div>

        {/* closing div */}
      </div>
    </div>
  );
};

export default projects;
