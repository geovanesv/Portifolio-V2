"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

const testimonialsData = [
  
  {
    img: "/certs/udemy.png",
    company: "Udemy",
    title: "Entenda o Inertia e crie com Laravel, Vue uma SPA",
    cert: true,
    link:"",
  },

  {
    img: "/certs/dio.png",
    company: "Digital Innovation One",
    title: "Eduzz Fullstack Developer",
    cert: true,
    link:"",
  },

  {
    img: "/certs/dio.png",
    company: "Digital Innovation One",
    title: "Microsserviços e Integrações com Node.js",
    cert: true,
    link:"https://www.dio.me/certificate/56E5E50E",

  },
  
  {
    img: "/certs/dio.png",
    company: "Digital Innovation One",
    title: "Desenvolvimento de aplicações para internet com ReactJS",
    cert: true,
    link:"https://www.dio.me/certificate/1A138DC4",
    
  },
  
  {
    img: "/certs/dio.png",
    company: "Digital Innovation One",
    title: "Explorando o Estilo Arquitetural REST com Node.js",
    cert: true,
    link:"https://www.dio.me/certificate/4078CF70",

  },

  {
    img: "/certs/dio.png",
    company: "Digital Innovation One",
    title: "Projetos ágeis com SCRUM",
    cert: true,
    link:"https://www.dio.me/certificate/8A6BE5C9/share",

  },

  {
    img: "/certs/dio.png",
    company: "Digital Innovation One",
    title: "Desenvolvimento avançado com JavaScript ES6",
    cert: true,
    link:"https://www.dio.me/certificate/4C5B7455",

  },

  {
    img: "/certs/dio.png",
    company: "Digital Innovation One",
    title: "Trabalhando com Componentes em React",
    cert: true,
    link:"https://www.dio.me/certificate/53113521",

  },

  {
    img: "/certs/dio.png",
    company: "Digital Innovation One",
    title: "Práticas avançadas em projetos com ReactJS",
    cert: true,
    link:"https://www.dio.me/certificate/13840CAF",

  },

  {
    img: "/certs/dio.png",
    company: "Digital Innovation One",
    title: "Node.js com Bancos de Dados Relacionais (SQL)",
    cert: true,
    link:"https://www.dio.me/certificate/3CD160D9",

  },

  {
    img: "/certs/dio.png",
    company: "Digital Innovation One",
    title: "Fundamentos e arquitetura de sistemas",
    cert: true,
    link:"https://certificates.digitalinnovation.one/07B441EA",

  },

  {
    img: "/certs/dio.png",
    company: "Digital Innovation One",
    title: "Introdução ao TypeScript: Explorando Classes, Tipos e Interfaces",
    cert: true,
    link:"",

  },

  
];

const disabled_link =
  "pointer-events-none border-2 font-bold hover:font-normal border-white/50 text-white/50 hover:shadow-lg p-3 rounded-lg 2xl:text-xl";

const enabled_link =
  "border-2 font-bold hover:font-normal border-[#fc0303] red-text hover:shadow-lg hover:shadow-red-600 hover:bg-red-700 hover:text-white p-3 rounded-lg 2xl:text-xl";

const TestimonialSlider = () => {
  const [ref, inView, entry] = useInView({
    triggerOnce: true, // Animation will trigger only once when it comes into view
    threshold: 0.5, // Percentage of element visible to trigger the animation
  });

  const [currentTestimonialIndex, setCurrentTestimonialIndex] = useState(0);

  const nextTestimonial = () => {
    setCurrentTestimonialIndex(
      (prevIndex) => (prevIndex + 1) % testimonialsData.length
    );
  };

  const prevTestimonial = () => {
    setCurrentTestimonialIndex(
      (prevIndex) =>
        (prevIndex - 1 + testimonialsData.length) % testimonialsData.length
    );
  };

  useEffect(() => {
    const interval = setInterval(nextTestimonial, 5000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section id="certificates">
      <div className="relative isolate md:px-6 lg:px-8">
        <div
          className="absolute inset-x-0 top-[10rem] md:top-[16rem] -z-10 transform-gpu overflow-hidden blur-3xl"
          aria-hidden="true"
        >
          <div
            className="relative left-[calc(50%)] aspect-[1155/678] h-[75rem] md:h-[12%] w-[17rem] -translate-x-1/2 bg-gradient-to-tl from-blue-600 to-[#1fbeda] opacity-30 sm:w-[35rem]"
            style={{
              clipPath:
                "polygon(30% 8%, 0% 20%, 14% 54%, 0 97%, 36% 97%, 54% 83%, 80% 100%, 100% 80%, 100% 48%, 100% 20%, 80% 0%, 60% 0)",
            }}
          />
        </div>
      </div>
 
      <div
        ref={ref}
        className="py-[10rem] w-full min-h-screen text-center relative z-10"
      >
        <h2>Certificados</h2>
        <h3 className={`px-10 mx-10`}>
          Habilidades e certificados adquiridos
        </h3>

        <div className="px-1 flex flex-row place-content-center my-6">
          <motion.button
            initial={{ opacity: 0, x: 100 }} // Initial animation values
            animate={{
              opacity: inView ? 1 : 0,
              x: inView ? 0 : 100,
            }} // Target animation values
            transition={{ duration: 0.6, delay: 0.7 }} // Animation duration
            className="text-white/50 hover:text-white text-[4rem] md:px-4 py-2 md:mx-[4rem]"
            onClick={prevTestimonial}
          >
            <i className="uil uil-angle-left"></i>
          </motion.button>

          <motion.div
            initial={{ opacity: 0, scale: 0.6, y: 100 }} // Initial animation values
            animate={{
              opacity: inView ? 1 : 0,
              scale: inView ? 1 : 0.6,
              y: inView ? 0 : 100,
            }} // Target animation values
            transition={{ duration: 0.7 }} // Animation duration
            className="w-[70%] md:w-1/3 text-center"
          >
            {testimonialsData.map((testimonial, index) => (
              <div
                key={index}
                className={`${
                  index === currentTestimonialIndex ? "block" : "hidden"
                } p-6 rounded-lg mb-6`}
              >
                <div className="w-auto grid place-content-center my-8">
                  <Image
                    src={testimonial.img}
                    alt="Company"
                    height="100"
                    width="100"
                    className="rounded-[1.3em] w-[80px] md:w-[100px]"
                  ></Image>
                </div>
                <p className="mb-4 red-text">{testimonial.company}</p>
                <div>
                  <h2 className="text-center text-[1.2rem] md:text-[1.5rem]">
                    {testimonial.title}
                  </h2>
                </div>
                <div className="mt-10" >
                  <Link
                  id="btn"
                    href={testimonial.link}
                    target="_blank"
                    className={testimonial.cert ? enabled_link : disabled_link}
                  >
                    Certificate{" "}
                    {testimonial.cert ? (
                      <i className="uil uil-file-alt"></i>
                    ) : (
                      <i className="uil uil-ban"></i>
                    )}
                  </Link>
                </div>
              </div>
            ))}
          </motion.div>

          <motion.button
            initial={{ opacity: 0, x: -100 }} // Initial animation values
            animate={{
              opacity: inView ? 1 : 0,
              x: inView ? 0 : -100,
            }} // Target animation values
            transition={{ duration: 0.6, delay: 0.7 }} // Animation duration
            className="text-white/50 hover:text-white text-[4rem] md:px-4 py-2 md:mx-[4rem]"
            onClick={nextTestimonial}
          >
            <i className="uil uil-angle-right"></i>
          </motion.button>
        </div>
      </div>
    </section>
  );
};

export default function Certificates() {
  return <TestimonialSlider />;
}
