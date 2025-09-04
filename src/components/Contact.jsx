import React from "react";
import ResumeImg from "../assets/Resume.jpg";
function Contact() {
  return (
    <section
      className="flex flex-col  bg-primary px-5 py-32  text-white"
      id="contact"
    >
      <div className=" flex flex-col items-center ">
        <h1 className="text-4xl  border-b-4 border-secondary mb-5 w-[140px] font-bold">
          Contact
        </h1>
        <p className="pb-5">
          If you want to dicuss more in detail , please contact me.
        </p>
        <p className="py-2">
          <span className="font-bold">Email :</span> imranshakils69@gmail.com
        </p>
        <p className="py-2">
          <span className="font-bold">Phone :</span> 6369130750
        </p>
      </div>
    </section>
  );
}

export default Contact;
