import React from "react";
import AboutImg from "../assets/about.png";
function About() {
  const config = {
    line1:
      "  Front-End Developer skilled in building responsive, user-friendly web interfaces using HTML, CSS, JavaScript, and React.js.",
    line2:
      "  Proficient in Tailwind CSS for rapid UI development and Redux Toolkit for efficient state management in scalable applications.",
    line3:
      "             Experienced with Firebase Hosting for deployment and GitHub for version control, following modern best practices for clean , maintainable code.",
  };
  return (
    <section className="flex flex-col md:flex-row bg-secondary px-5" id="about">
      <div className="py-10 md:w-1/2 ">
        <img src={AboutImg} alt="no img" />
      </div>
      <div className="md:w-1/2 flex justify-center ">
        <div className="flex flex-col justify-center text-white">
          <h1 className="text-4xl  border-b-4 border-primary mb-5 w-[170px] font-bold">
            About Me
          </h1>
          <p className="pb-5">{config.line1}</p>
          <p className="pb-5">{config.line2}</p>
          <p className="pb-5">{config.line3}</p>
        </div>
      </div>
    </section>
  );
}

export default About;
