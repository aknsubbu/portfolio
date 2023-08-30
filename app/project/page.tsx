import React from 'react';
import ProjectCard from '@/components/projectCard';

const Project = () => {
  const projectInfo = [
    {
      category: "Full Stack",
      title: "Anand",
      imagePath: "./anand.png",
      indexNumber: "01",
      description: "BLE",
    },
    {
      category: "Full Stack",
      title: "Anand",
      imagePath: "./anand.png",
      indexNumber: "01",
      description: "BLE",
    }
  ];

  return (
    <section className="py-12 md:py-24 bg-[#041C32] overflow-hidden">
      <div className="container mx-auto px-4 mb-20">
        <h1 className="font-heading text-6xl xs:text-8xl sm:text-10xl tracking-tighter">Projects</h1>
      </div>
      <div className="px-5">
        <div className="max-w-md lg:max-w-none mx-auto">
          <div className="flex flex-wrap">
            {projectInfo.map((projectItem, index) => (
              <ProjectCard key={index} cardInfo={projectItem} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export default Project;
