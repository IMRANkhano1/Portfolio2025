import React from "react";
import "../App.css";
import HeroImg from "../assets/hero.png";
import {
  AiOutlineGithub,
  AiOutlineLinkedin,
  AiOutlineMail,
} from "react-icons/ai";
function Hero() {
  const config = {
    subtitle: "Iam a ReactJs Developer",
  };
  return (
    <section
      className="flex flex-col md:flex-row px-5 py-32 bg-primary justify-center"
      id="home"
    >
      <div className="md:w-1/2">
        <h1 className="  text-white text-6xl font-my-font">
          Hi, <br />
          Iam Imran Shakil
          <p className="text-2xl">{config.subtitle}</p>
        </h1>
        <div className="flex py-10">
          <a
            href="https://github.com/IMRANkhano1"
            className="pr-5 hover:text-white"
            target="_blank"
          >
            <AiOutlineGithub size={40} />
          </a>
          <a
            href="https://www.linkedin.com/in/imran-khan001"
            target="_blank"
            className="pr-5  hover:text-white"
          >
            <AiOutlineLinkedin size={40} />
          </a>
          <a
            href="mailto:imranshakils69@gmail.com"
            className=" hover:text-white"
            target="_blank"
          >
            <AiOutlineMail size={40} />
          </a>
        </div>
      </div>

      <img className="md:w-1/3" src={HeroImg} alt="no image" />
    </section>
  );
}
export default Hero;
