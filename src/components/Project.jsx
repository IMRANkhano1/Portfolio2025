import React from "react";
import webImg1 from "../assets/Electronics shop.png";
import webImg2 from "../assets/coffeeShopProject.png";
import webImg3 from "../assets/foodCart.jpg";

function Project() {
  const config = {
    project: [
      {
        image: webImg1,
        description: `An interactive electronics shop cart built using React.js!
This project showcases my frontend development skills with a sleek and user-friendly design.
The cart updates in real-time as users add or remove items, ensuring a smooth shopping experience.
It’s fully responsive, offering seamless usability across both mobile and desktop devices.`,
        link: "https://elecronicszone.web.app/",
      },
      {
        image: webImg2,

        description: ` A modern coffee ordering web application built with React.js. It features a clean, responsive design and interactive components for a smooth browsing experience. The project includes real-time updates and efficient state management using React hooks. Designed to offer users an intuitive and engaging coffee shop experience.`,
        link: "https://coffee-maky.web.app/",
      },
      {
        image: webImg3,
        description: ` A dynamic food ordering web application built with HTML, CSS, and JavaScript. It features a sleek, responsive design and interactive elements for smooth navigation. The project includes dynamic content updates and showcases efficient use of front-end technologies. Designed to deliver a seamless and engaging user experience.`,
        link: "https://imrankhano1.github.io/FootCart-Using-JavaScript/",
      },
    ],
  };
  return (
    <section
      className="flex flex-col py-20 px-5 justify-center bg-primary text-white"
      id="projects"
    >
      <div className="w-full">
        <div className="flex flex-col px-10 py-5">
          <h1 className="text-4xl  border-b-4 border-secondary mb-5 w-[150px] font-bold">
            Projects
          </h1>
          <p>
            These are best projects , i have buit these with
            Html,Css,JavaScript,Tailwind CSS,ReactJs Check them out.
          </p>
        </div>
      </div>
      <div className="w-full">
        <div className="flex flex-col md:flex-row px-10 gap-5">
          {config.project.map((pro) => (
            <a href={pro.link} target="_blanck">
              <div className="relative">
                <img
                  className="h-[200px] w-[500px]"
                  src={pro.image}
                  alt="no img"
                />
                <div className="pro-desc">
                  <p className="text-center px-5 py-5">{pro.description}</p>
                  <div className="flex justify-center">
                    <a className="btn" href={pro.link} target="_blanck">
                      View Project
                    </a>
                  </div>
                </div>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Project;
