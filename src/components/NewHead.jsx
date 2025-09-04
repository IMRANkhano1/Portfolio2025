import React, { useState } from "react";
import { Bars3Icon } from "@heroicons/react/24/solid";
import { Link as ScrollLink } from "react-scroll";

function NewHead() {
  const [btnToggle, setBtnToggle] = useState(false);

  const navItems = [
    { name: "Home", to: "home" },
    { name: "About", to: "about" },
    { name: "Projects", to: "projects" },
    { name: "Resume", to: "resume" },
    { name: "Contact", to: "contact" },
  ];

  return (
    <>
      <header className="flex justify-between px-5 py-2 bg-primary border-b border-blue-800 sticky top-0 z-10">
        <a className="font-bold text-black" href="#">
          Imran Shakil s
        </a>

        {/* Desktop Nav */}
        <nav className="hidden md:block">
          <ul className="flex text-white gap-6">
            {navItems.map((item) => (
              <li key={item.to}>
                <ScrollLink
                  to={item.to}
                  smooth={true}
                  duration={500}
                  offset={-60} // adjust for sticky header
                  className="nav-hover cursor-pointer"
                >
                  {item.name}
                </ScrollLink>
              </li>
            ))}
          </ul>
        </nav>

        {/* Mobile Menu Toggle */}
        <button
          onClick={() => setBtnToggle((cur) => !cur)}
          className="block md:hidden"
          aria-label="Toggle menu"
          aria-expanded={btnToggle}
        >
          <Bars3Icon className="text-white h-6 w-6" />
        </button>
      </header>

      {/* Mobile Nav */}
      {btnToggle && (
        <nav className="absolute top-12 left-0 w-full bg-primary md:hidden transition-all duration-300 ease-in-out">
          <ul className="flex flex-col text-white mobile-nav">
            {navItems.map((item) => (
              <li key={item.to}>
                <ScrollLink
                  to={item.to}
                  smooth={true}
                  duration={500}
                  offset={-60}
                  className="block w-full py-2 px-4 cursor-pointer"
                  onClick={() => setBtnToggle(false)}
                >
                  {item.name}
                </ScrollLink>
              </li>
            ))}
          </ul>
        </nav>
      )}
    </>
  );
}

export default NewHead;
