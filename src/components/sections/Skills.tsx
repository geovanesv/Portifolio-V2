"use client";

import React from "react";
import { CheckCircle, Loader } from "lucide-react";
import { useInView } from "react-intersection-observer";


const skills = [
  
  {
    title: "Spring Boot",
    logo: "https://static-00.iconduck.com/assets.00/spring-icon-256x256-2efvkvky.png",
    details: "",
    confidence: 1,
  },

  {
    title: "Angular",
    logo: "https://static-00.iconduck.com/assets.00/file-type-angular-icon-90x96-6dvemgrj.png",
    details: "",
    confidence: 1,
  },
  
  {
    title: "TypeScript",
    logo: "https://seekvectors.com/files/download/TYPE%20SCRIPT%20LOGO.png",
    details: "",
    confidence: 1,
  },
  {
    title: "Node.js",
    logo: "https://ih1.redbubble.net/image.404031065.2191/tst,small,507x507-pad,600x600,f8f8f8.u1.jpg",
    details: "",
    confidence: 1,
  },

  {
    title: "NestJS",
    logo: "https://static-00.iconduck.com/assets.00/nestjs-plain-icon-96x96-e8vg3rjl.png",
    details: "",
    confidence: 0,
  },

  {
    title: "Next.js",
    logo: "https://static-00.iconduck.com/assets.00/nextjs-icon-512x512-y563b8iq.png",
    details: "",
    confidence: 0,
  },

  {
    title: "Docker",
    logo: "https://static-00.iconduck.com/assets.00/docker-icon-96x69-f2zgm2tb.png",
    details: "",
    confidence: 0,
  },
  {
    title: "Laravel",
    logo: "https://static-00.iconduck.com/assets.00/laravel-icon-93x96-1my3j2lv.png",
    details: "",
    confidence: 1,
  },
  {
    title: "PostgreSQL",
    logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/2/29/Postgresql_elephant.svg/993px-Postgresql_elephant.svg.png",
    details: "",
    confidence: 1,
  },
];




function Skills() {
  const [ref, inView, entry] = useInView({
    triggerOnce: true, // Animation will trigger only once when it comes into view
    threshold: 0.2, // Percentage of element visible to trigger the animation
  });

  return (
    <section
      className="bg-transparent w-full md:min-h-screen text-center mt-6 md:mt-32 mb-44"
      id="skills"
    >
      <div className="relative isolate md:px-6 lg:px-8">
        <div
          className="absolute inset-x-0 top-[10rem] -z-10 transform-gpu overflow-hidden blur-3xl"
          aria-hidden="true"
        >
          <div
            className="relative left-[calc(50%)] aspect-[1155/678] h-[75rem] md:h-[20%] w-[17rem] -translate-x-1/2 bg-gradient-to-tr from-blue-600 to-[#1fbeda] opacity-30 sm:w-[45rem]"
            style={{
              clipPath:
                "polygon(30% 8%, 0% 20%, 14% 54%, 0 97%, 36% 97%, 54% 83%, 80% 100%, 100% 80%, 100% 48%, 100% 20%, 80% 0%, 60% 0)",
            }}
          />
        </div>
      </div>

      <div className="relative z-20">
        <h2>My Skills</h2>
        <h3 className="mx-8 md:mx-0">
          Principais habilidades que possuo!
        </h3>

        <div
          ref={ref}
          className="flex flex-wrap md:gap-x-16 gap-y-10 md:gap-y-20 justify-center px-10 md:px-80 my-24"
        >
          {skills.map((skill, index) => (
            <div
              key={index}
              className={`flex mx-auto items-center bg-[#ffffff25] h-10 md:h-14 rounded-full`}
            >
              <div className="h-14 w-14 md:h-20 md:w-20 group rounded-full border border-gray-600 bg-white grid place-items-center">
                <img
                  src={skill.logo}
                  alt={skill.title}
                  className="rounded-full group-hover:opacity-30 duration-200"
                />
                {skill.confidence === 0 ? (
                  <Loader
                    className="absolute hidden group-hover:flex text-gray-700 duration-500"
                    size={40}
                    strokeWidth={2.4}
                  />
                ) : (
                  <CheckCircle
                    className="absolute hidden group-hover:flex text-gray-700 duration-500"
                    size={40}
                    strokeWidth={2.4}
                  />
                )}
              </div>
              <div className="rounded-lg  flex justify-center items-center ml-2 mr-3 md:mr-5">
                <h6 className="text-sm md:text-lg">{skill.title}</h6>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="my-8 mt-12 text-center grid relative">
        <div className="flex flex-row items-center gap-2 mx-auto my-2 hover:text-[#1fbeda] hover:font-bold">
          Proficiência <CheckCircle size={20} />
        </div>
        <div className="flex flex-row items-center gap-2 mx-auto my-2 hover:text-[#1fbeda] hover:font-bold">
          Em Desenvolvimento <Loader size={20} />
        </div>
      </div>
    </section>
  );
}

export default Skills;
