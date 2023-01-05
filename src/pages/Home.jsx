import React, { useEffect } from "react";
import { Hero } from "../components/Hero";
import { About } from "../components/About";
import { Skills } from "../components/Skills";
import { Contact } from "../components/Contact";
import { Services } from "../components/Services";

export const Home = () => {
  useEffect(() => {
    document.title = "Home";
  });

  return (
    <>
      <main className="snap-y snap-y-mandatory scroll-smooth max-w-full px-[8%] overflow-hidden">
        <section id="hero" className="scroll-smooth py-5 snap-start transition">
          <Hero />
        </section>

        <section
          id="about"
          className="scroll-smooth py-5 snap-center transition"
        >
          <About />
        </section>

        <section
          id="services"
          className="scroll-smooth snap-center transition py-5 items-center"
        >
          <Services />
        </section>

        <section
          id="skills"
          className="scroll-smooth py-5 snap-center transition"
        >
          <Skills />
        </section>

        <section
          id="contact"
          className="scroll-smooth py-5 snap-center transition"
        >
          <Contact />
        </section>
      </main>
    </>
  );
};
