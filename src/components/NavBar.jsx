import React, { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";

const NavBar = () => {
  const [nav, setNav] = useState(false);

  const links = [
    { id: 1, link: "About Me" },
    { id: 2, link: "Projects" },
    { id: 3, link: "Experience" },
    { id: 4, link: "Contact" },
  ];

  return (
    <div className="flex justify-center items-center">
      {/* md and up NavBar */}
      <div className="hidden md:flex justify-center items-center mt-36 w-2/3 h-10 px-16 text-white bg-dark-purple rounded-3xl absolute">
        <ul className="flex justify-between items-center w-full">
          {links.map(({ id, link }) => (
            <li
              key={id}
              className="text-base font-normal px-4 hover:scale-125 duration-200 cursor-pointer"
            >
              {link}
            </li>
          ))}
        </ul>
      </div>

      {/* Mobile hamburger NavBar */}
      <div
        onClick={() => setNav(!nav)}
        className="cursor-pointer text-my-gray p-4 md:hidden z-50"
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
