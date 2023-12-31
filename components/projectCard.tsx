import React from 'react'
import Image from "next/image"


interface ProjectCardProps {
  cardInfo: {
    category: string;
    title: string;
    imagePath: string;
    indexNumber: string;
    description: string;
    repoLink: string;
  };
}
const ProjectCard: React.FC<ProjectCardProps> = ({ cardInfo }) => {
    const{
        category,
        title,
        imagePath,
        indexNumber,
        description,
        repoLink }=cardInfo;
  return (
<div className="w-full lg:w-4/12 p-0">
            <a className="relative group block w-full h-full text-left px-6 sm:pl-10 sm:pr-14 pt-32 md:pt-52 xl:pt-80 pb-10 border rounded-4xl overflow-hidden" target="_blank" href={repoLink}>
              <img className=" absolute top-0 left-0 h-auto w-full object-cover" src={imagePath} alt=""/>
              <span className="absolute top-0 right-0 my-8 px-7 text-gray-700 font-bold group-hover:text-gray-800">{indexNumber}</span>
              <span className="relative inline-block mb-3 py-2 px-3 text-sm group-hover:text-white leading-none border-1.5 border-black group-hover:border-white rounded-full transition duration-100">{category}</span>
              <div className="relative max-w-sm">
                <div className="max-w-xs pr-10">
                  <h5 className="text-4xl group-hover:text-white mb-6">{title}</h5>
                </div>
                <p className="group-hover:text-white">{description}</p>
              </div>
            </a>
          </div>  )
}

export default ProjectCard