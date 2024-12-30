import React from "react";
import figma from "../assets/techstack/Figma.png";
import adobe from "../assets/techstack/adobe.png";
import bash from "../assets/techstack/bash.png";
import bootstrap from "../assets/techstack/bootstrap.png";
import css from "../assets/techstack/css.png";
import github from "../assets/techstack/github.png";
import html from "../assets/techstack/html.png";
import javascript from "../assets/techstack/javascript.png";
import latex from "../assets/techstack/latex.png";
import nextjs from "../assets/techstack/nextjs.png";
import node from "../assets/techstack//node.png";
import python from "../assets/techstack/python.svg.png";
import react from "../assets/techstack/react.png";
import tailwind from "../assets/techstack/tailwind.png";

const TechStack = () => {
  const techs = [
    {
      id: 1,
      src: javascript,
      title: "Javascript",
      style: "shadow-yellow-300",
    },
    {
      id: 2,
      src: react,
      title: "React js",
      style: "shadow-cyan-300",
    },
    {
      id: 3,
      src: nextjs,
      title: "Next js",
      style: "shadow-white",
    },
    {
      id: 4,
      src: node,
      title: "Node js",
      style: "shadow-green-400",
    },
    {
      id: 5,
      src: html,
      title: "HTML",
      style: "shadow-orange-500",
    },
    {
      id: 6,
      src: css,
      title: "CSS",
      style: "shadow-sky-500",
    },
    {
      id: 7,
      src: tailwind,
      title: "Tailwind",
      style: "shadow-cyan-600",
    },
    {
      id: 8,
      src: bootstrap,
      title: "Bootstrap",
      style: "shadow-purple-500",
    },
    {
      id: 9,
      src: python,
      title: "Python",
      style: "shadow-yellow-200",
    },
    {
      id: 10,
      src: bash,
      title: "Bash",
      style: "shadow-white",
    },
    {
      id: 11,
      src: github,
      title: "GitHub",
      style: "shadow-gray-400",
    },
    {
      id: 12,
      src: latex,
      title: "LaTeX",
      style: "shadow-green-300",
    },
    {
      id: 13,
      src: figma,
      title: "Figma",
      style: "shadow-red-300",
    },
    {
      id: 14,
      src: adobe,
      title: "Adobe Creative Cloud",
      style: "shadow-pink-400",
    },
  ];

  return (
    <div>
      <div className="mt-16">
        <div className="text-my-gray text-5xl">
          <p>Tech stack</p>
        </div>

        <div className="w-full justify-between grid grid-cols-4 lg:grid-cols-7 gap-8 text-center py-8 px-0 md:px-12">
          {techs.map(({ id, src, title, style }) => (
            <div
              key={id}
              className={`text-my-gray shadow-md hover:scale-105 duration-500 py-2 rounded-lg ${style}`}
            >
              <img src={src} className="w-10 lg:w-20 mx-auto" />
              <p className="mt-4">{title}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default TechStack;
