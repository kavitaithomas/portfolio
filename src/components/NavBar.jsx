import React from "react";
import { FaBars, FaTimes } from "react-icons/fa";

const NavBar = () => {
  const links = [
    { id: 1, link: "About Me" },
    { id: 2, link: "Experience" },
    { id: 3, link: "Projects" },
    { id: 4, link: "Contact" },
  ];

  return (
    <div className="flex justify-between items-center w-full h-20 text-white bg-black fixed px-4">
      <div className="text-2xl">K</div>
      <ul className="flex justify-center cursor-pointer ">
        {links.map(({ id, link }) => (
          <li key={id} className="px-4 hover:scale-105 duration-200">
            {link}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default NavBar;
