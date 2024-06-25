"use client";

import React from "react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

function About() {
  const [ref, inView] = useInView({
    triggerOnce: true, // Animation will trigger only once when it comes into view
    threshold: 0.5, // Percentage of element visible to trigger the animation
  });

  return (
    <section className="bg-transparent w-full md:min-h-screen mb-16" id="about">
      <div className="relative inset-0">
        <div
          className="absolute inset-x-0 transform-gpu overflow-hidden blur-3xl -top-30 md:-top-[2rem]"
          aria-hidden="true"
        >
          <div
            className="-z-10 relative aspect-[1155/678] xl:aspect-[600/700] -translate-x-1/3 bg-gradient-to-tr from-blue-600 to-[#1fbeda] opacity-30 w-[28.125rem] md:w-[24rem] left-[75%] md:left-[62%] 2xl:-translate-x-1/3"
            style={{
              clipPath:
                "polygon(51% 7%, 87% 9%, 100% 50%, 70% 99%, 10% 100%, 0% 50%)",
            }}
          />
        </div>
      </div>

      <div
        ref={ref}
        className="z-10 text-center py-[8rem] px-12 md:px-16 lg:px-[18rem] xl:px-[25rem] relative"
      >
        <h2>Sobre</h2>
        <h3>Introdução</h3>

        <motion.div
          initial={{ opacity: 0, scale: 0.6 }} // Initial animation values
          animate={{ opacity: inView ? 1 : 0, scale: inView ? 1 : 0.6 }} // Target animation values
          transition={{ duration: 0.7 }} // Animation duration
          className="md:text-lg 2xl:text-xl mb-12 my-4 2xl:px-24 text-center"
        >
          <p style={{textAlign:"justify"}}> 
          Olá eu sou Geovane Araujo, um desenvolvedor entusiasmado que se dedica a criar soluções inovadoras para impulsionar a
          experiência do usuário e resolver problemas de maneira eficiente. Com uma formação em Ciência da Computação pelo Instituto Federal do Ceará,
          concentrei meus estudos no desenvolvimento FullStack, priorizando tecnologias como NodeJS, NestJS, ReactJS, NextJS, Laravel, VueJS, Docker, Mysql, PostgreSQL, MongoDB.
          estou constantimente em busca de desafios que impulsionem meu crescimento profissional.
          </p>
        </motion.div>
        <a href="/resumo/CV_GEOVANE_ARAUJO.pdf" download="CV_GEOVANE_ARAUJO.pdf" id="btn" >
          Download CV <i className="uil uil-file-download"></i>
        </a>
      </div>
    </section>
  ); 
}

export default About;
