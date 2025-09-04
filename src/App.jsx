// import { useState } from "react";
import "./App.css";
import About from "./components/About";
import Contact from "./components/Contact";
import Header from "./components/Header";
import Hero from "./components/Hero";
import Project from "./components/Project";
import Resume from "./components/Resume";
import Footer from "./components/Footer";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import NewHead from "./components/NewHead";
function App() {
  return (
    <>
      <div className="App">
        {/* <NewHead />
        <section id="home">
          <Hero />
        </section>
        <section id="about">
          <About />
        </section>
        <section id="projects">
          <Project />
        </section>
        <section id="resume">
          <Resume />
        </section>
        <section id="contact">
          <Contact />
        </section>
        <Footer /> */}

        <Header />
        <Hero />
        <About />
        <Project />
        <Resume />
        <Contact />
        <Footer />
      </div>
    </>
  );
}

export default App;
