import React from "react";
import Navbar from "../src/Sections/Navbar";
import Hero from "../src/Sections/Hero";
import About from "../src/Sections/About";
import Projects from "./Sections/Projects";
import Experiences from "./Sections/Experiences";
import Testimonial from "./Sections/Testimonial";
import Contact from "./Sections/Contact";
import Footer from "./Sections/Footer";
import Education from "./Sections/Education";

const App = () => {
  return (
    <div className="container mx-auto max-w-7xl">
      <Navbar />
      <Hero />
      <About />
      <Education />
      <Projects />
      <Experiences />
      {/* <Testimonial /> */}
      <Contact />
      <Footer />
    </div>
  );
};

export default App;
