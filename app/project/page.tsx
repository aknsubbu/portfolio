import React from 'react';
import ProjectCard from '@/components/projectCard';

const Project = () => {
  const projectInfo = [
    {
      category: "Full Stack",
      title: "BLE Attendance Project",
      imagePath: "./project1.jpeg",
      indexNumber: "01",
      description: "Me and my teams constructed a Flutter App as well as a Node JS Rest-API to serve as a communication mechanism between the Database and the App. During our first year in college, we constructed this to learn about the software development process. This has given us a better understanding of the technologies and enabled us to apply them in future projects...",
      repoLink:"https://github.com/akashShanmugraj/psgscapes-production-server"
    },
    // {
    //   category: "Full Stack",
    //   title: "Anand",
    //   imagePath: "./anand.png",
    //   indexNumber: "01",
    //   description: "BLE",
    //  repoLink:" "
    // }
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
