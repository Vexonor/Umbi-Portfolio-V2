"use client"

import { ArrowUpRightIcon } from "@phosphor-icons/react";
import Image from "next/image";
import Link from "next/link";
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
        {projects.map((project) => (
          <Link key={project.id} href={project.url ? project.url : `/project-section/${project.id}`} className="shrink-0">
            <ProjectCard
              key={project.id}
              logo={project.logo}
              title={project.title}
              img={project.firstImg}
              type={project.type}
              topic={project.topic}
            />
          </Link>
        ))}

      </div>
    </div >
  )
}

const ProjectCard = ({ logo, title, img, type, topic }) => {
  return (
    <div className="w-[25rem] h-[30rem] relative group cursor-pointer scale-90 md:scale-100">
      <div className="size-full bg-charcoal flex flex-col justify-between card">
        <div className="">
          {/* App Brand */}
          <div className="w-full h-20 flex items-end px-10 text-white text-base font-semibold">
            <div className="flex items-center gap-4">
              <Image width={28} height={28} className="size-10 rounded-full object-cover border border-white" src={logo} alt="Umbi Logo" />
              <h2 className="z-10">{title}</h2>
            </div>
          </div>
          {/* Card Body */}
          <div className="w-full h-[26rem] px-8 py-10">
            <div className="size-full flex flex-col gap-4 text-white">
              {/* Image */}
              <Image width={400} height={224} className="w-full min-h-[14rem] bg-neutral-400 z-10 rounded-[1.3rem] object-cover" src={img} alt={title} />

              {/* Body */}
              <div className="flex flex-col gap-2">
                <span className="text-sm font-medium bg-mine-shaft px-3 py-1 rounded-full w-max">{type}</span>
                <h1 className="text-xl sm:text-2xl font-bold h-40">{topic}</h1>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* Button */}
      <div className="size-20 absolute top-0 right-0">
        <div className="size-full rounded-full bg-charcoal flex justify-center items-center">
          <ArrowUpRightIcon className="size-10 text-white group-hover:rotate-45 transition-all duration-600" />
        </div>
      </div>
    </div >
  )
}

export default ProjectSection