import React, { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";

const NavBar = () => {
  const [nav, setNav] = useState(false);

  const links = [
    { id: 1, link: "About Me" },
    { id: 2, link: "Experience" },
    { id: 3, link: "Projects" },
    { id: 4, link: "Contact" },
  ];

  return (
    <div className="flex justify-center items-center">
      {/* md and up NavBar */}
      <div className="hidden md:flex justify-center items-center w-2/3 h-10 px-16 text-white bg-dark-purple bg-opacity-70 rounded-3xl">
        <ul className="flex justify-between items-center w-full">
          {links.map(({ id, link }) => (
            <li
              key={id}
              className="text-base px-4 hover:scale-95 duration-200 cursor-pointer"
            >
              {link}
            </li>
          ))}
        </ul>
      </div>

      {/* Mobile hamburger NavBar */}
      <div
        onClick={() => setNav(!nav)}
        className="cursor-pointer text-my-gray p-4 md:hidden"
      >
        {nav ? <FaTimes size={30} /> : <FaBars size={30} />}
      </div>

      {nav && (
        <ul className="flex flex-col justify-center items-center absolute top-0 left-0 w-full h-screen bg-gradient-to-b from-darkest-purple to-dark-purple text-my-gray">
          {links.map(({ id, link }) => (
            <li key={id} className="cursor-pointer px-4 py-6 text-4xl">
              {link}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default NavBar;
