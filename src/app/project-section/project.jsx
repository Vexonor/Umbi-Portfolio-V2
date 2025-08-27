"use client"

import { ArrowUpRightIcon } from "@phosphor-icons/react";
import Image from "next/image";
import { useEffect, useState } from "react";



const ProjectSection = () => {
  const [projects, setProjects] = useState([]);

  useEffect(() => {
    const getProjects = async () => {
      const res = await fetch("data/project-data.json");
      const data = await res.json();
      setProjects(data);
    };

    getProjects();
  }, []);
  return (
    <div className='size-full md:p-10'>
      <div className="h-20 w-full flex items-end justify-center">
        <h1 className="font-bold text-5xl lg:text-7xl text-center">Our Works</h1>
      </div>

      <div className="flex flex-wrap md:gap-4 justify-center xl:justify-between my-20">
        {projects.map((project, index) => (
          <ProjectCard
            key={index}
            title={project.title}
            img={project.img}
            type={project.type}
            topic={project.topic}
          />
        ))}
      </div>
    </div>
  )
}

const ProjectCard = ({ title, img, type, topic }) => {
  return (
    <div className="relative w-[25rem] h-[32.8rem] flex flex-col justify-between items-end group cursor-pointer scale-90 md:scale-100">
      <div className="size-[7rem] relative border-8 border-beluga rounded-bl-[65%]">
        <div className="size-full rounded-full bg-charcoal flex justify-center items-center absolute -top-2 -right-2">
          <ArrowUpRightIcon className="size-10 text-white group-hover:rotate-45 transition-all duration-600" />
        </div>
      </div>
      <div className="w-[16rem] sm:w-[17rem] md:w-[18rem] h-[8rem] absolute top-0 left-0 bg-charcoal rounded-tl-xl rounded-tr-4xl
          before:content-[''] before:absolute before:w-40 before:h-44 before:bg-transparent before:-top-16 before:-right-[9.91rem] before:rounded-[90%] before:shadow-[-105px_140px_0_40px_rgba(29,29,29,1)]
          ">
        <div className="size-full flex items-center gap-4 px-10 text-white text-base font-semibold">
          <Image width={28} height={28} className="size-7 rounded-full object-cover border border-white" src="assets/umbi-logo.svg" alt="Umbi Logo" />
          <h2 className="z-10">{title}</h2>
        </div>
      </div>
      <div className="w-full h-[26rem] rounded-b-xl rounded-tr-4xl bg-charcoal">
        <div className="size-full p-8 flex flex-col gap-8 text-white">
          {/* Image */}
          <Image width={400} height={224} className="w-full h-[14rem] bg-neutral-400 z-10 rounded-[1.3rem] object-cover" src={img} alt={title} />

          {/* Body */}
          <div className="flex flex-col gap-2">
            <span className="text-sm font-medium bg-mine-shaft px-3 py-1 rounded-full w-max">{type}</span>
            <h1 className="text-xl sm:text-3xl font-bold">{topic}</h1>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ProjectSection