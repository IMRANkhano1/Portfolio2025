import React, { useState } from "react";
import { Bars3Icon } from "@heroicons/react/24/solid";
function Header() {
  const [btnToggle, setBtnToggle] = useState(false);
  return (
    <>
      <header className="flex justify-between px-5 py-2 bg-primary border-b-[1px] border-blue-800  sticky top-0 z-10">
        <a className="font-bold text-black" href="#">
          Imran Shakil s
        </a>
        <nav className="hidden md:block">
          <ul className="flex text-white">
            <li>
              <a href="#home" className="nav-hover">
                Home
              </a>
            </li>
            <li>
              <a href="#about" className="nav-hover">
                About
              </a>
            </li>
            <li>
              <a href="#projects" className="nav-hover">
                Projects
              </a>
            </li>
            <li>
              <a href="#resume" className="nav-hover">
                Resume
              </a>
            </li>
            <li>
              <a href="#contact" className="nav-hover">
                Contact
              </a>
            </li>
          </ul>
        </nav>
        {btnToggle && (
          <nav className="block md:hidden ">
            <ul
              onClick={() => setBtnToggle((cur) => !cur)}
              className="flex flex-col text-white mobile-nav"
            >
              <a href="#home" className="w-full">
                <li>Home</li>
              </a>

              <a href="#about">
                <li>About</li>
              </a>

              <a href="#projects" className="w-full">
                <li>Projects</li>
              </a>
              <a href="#resume">
                <li>Resume</li>
              </a>
              <a href="#contact">
                <li>Contact</li>
              </a>
            </ul>
          </nav>
        )}
        <button
          onClick={() => setBtnToggle((cur) => !cur)}
          className="block md:hidden"
        >
          <Bars3Icon className="text-white h-5" />
        </button>
      </header>
    </>
  );
}

export default Header;
