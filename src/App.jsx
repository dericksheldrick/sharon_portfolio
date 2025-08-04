import React from "react";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import About from "./pages/About";      
import Skills from "./pages/Skills";
import Projects from "./pages/Projects";
import Contact from "./pages/Contact";

export default function App() {
  return (
    <div>
      <Navbar />
      <Home />
      <About />         
      <Skills />
      <Projects />
      <Contact />
    </div>
  );
}
