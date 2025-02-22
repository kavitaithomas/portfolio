import React from "react";

const Button = ({ label, link }) => {
  return (
    <a href={link} target="_blank" rel="noopener noreferrer">
      <button className="bg-blue-200 rounded-xl py-1 px-4 border-blue-700 border-2 hover:scale-110 duration-500">
        <p className="text-darkest-purple text-center text-base">{label}</p>
      </button>
    </a>
  );
};

export default Button;
