import React, { useState, useEffect } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import { Link } from "react-scroll";

const NavBar = () => {
  const [nav, setNav] = useState(false);

  const links = [
    { id: 1, link: "About Me", name: "aboutme" },
    { id: 2, link: "Projects", name: "projects" },
    { id: 3, link: "Experience", name: "experience" },
    { id: 4, link: "Contact", name: "contact" },
  ];

  // Disable scrolling when nav is open
  useEffect(() => {
    if (nav) {
      document.body.classList.add("overflow-hidden");
    } else {
      document.body.classList.remove("overflow-hidden");
    }
  }, [nav]);

  return (
    <div className="flex justify-center items-center z-50">
      {/* md and up NavBar */}
      <div className="hidden md:flex justify-center items-center mt-36 w-2/3 h-10 px-16 text-white bg-dark-purple rounded-3xl absolute z-50">
        <ul className="flex justify-between items-center w-full">
          {links.map(({ id, name, link }) => (
            <li
              key={id}
              className="font-normal px-4 hover:scale-110 duration-200 cursor-pointer"
            >
              <Link
                to={name}
                spy={true}
                smooth={true}
                offset={-50}
                duration={500}
              >
                {link}
              </Link>
            </li>
          ))}
        </ul>
      </div>

      {/* Mobile hamburger NavBar */}
      <div
        onClick={() => setNav(!nav)}
        className="cursor-pointer fixed top-4 right-4 text-my-gray p-4 md:hidden z-50"
      >
        {nav ? <FaTimes size={30} /> : <FaBars size={30} />}
      </div>

      {/* Mobile menu */}
      {nav && (
        <div className="fixed top-0 left-0 w-full h-screen bg-gradient-to-b from-darkest-purple to-dark-purple text-my-gray flex flex-col justify-center items-center z-50">
          {/* Close Icon */}
          <div
            onClick={() => setNav(false)}
            className="cursor-pointer fixed top-4 right-4 text-my-gray p-4 z-50"
          >
            <FaTimes size={30} />
          </div>

          {/* Menu Links */}
          <ul>
            {links.map(({ id, name, link }) => (
              <li
                key={id}
                className="text-center cursor-pointer px-4 py-6 text-4xl"
              >
                <Link
                  to={name}
                  spy={true}
                  smooth={false}
                  offset={-50}
                  duration={500}
                  onClick={() => setNav(false)} // Close the menu on click
                >
                  {link}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};

export default NavBar;
