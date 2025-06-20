import { React, useEffect } from "react";
import Hero from "./components/Hero";
import AOS from "aos";
import "aos/dist/aos.css";
import About from "./components/About";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Experience from "./components/Experiences";
import Formations from "./components/Formations";
import Footer from "./components/Footer";

export default function App() {
  useEffect(() => {
    AOS.init({
      duration: 1000,
    });
  }, []);
  return (
    <main className="bg-gray-950">
      <Hero />
      <About />
      <Formations />
      <Skills />
      <Experience />
      <Projects />
      <Footer />
    </main>
  );
}
