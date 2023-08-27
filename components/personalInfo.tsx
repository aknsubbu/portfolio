import React from 'react';

const PersonalInfo = () => {
  return (
    <section className="py-20 2xl:py-40 overflow-hidden bg-[#041C32]">
      <div className="container px-4 mx-auto">
        <div className="max-w-3xl mx-auto text-center p-5">
          <h2 className="mb-14 text-6xl lg:text-7xl font-bold font-heading text-white">I am Anandkumar NS </h2>
          <div className="inline-flex mb-14 lg:mb-20 items-center">
            <div className="text-left"></div>
          </div>
        </div>
        <div className="relative h-96 mb-20 flex justify-center items-center">
          <img className="h-auto w object-cover" src="./anand.png" alt=""/>
          <div className="max-w-xl mx-auto p-10 flex items-end justify-end">
            <p className="mb-6 text-left text-xl text-gray-200">Hello, I'm Anandkumar NS, a passionate Computer Science engineer based in Chennai. I have a deep fascination for exploring new technologies and tools that shape our ever-evolving digital landscape. I firmly believe in the adage that the only constant in the world is change, and I embrace it wholeheartedly.
              Having recognized the prominent role of computers in today's modern world, I find great joy in delving into the intricacies of this fascinating field. By continuously expanding my knowledge and skills, I strive to stay ahead of the curve and prepare myself for the future.
            </p>
            
          </div>
        </div>
        <p className="mb-6 text-left text-xl text-gray-200">Throughout my journey, I have enjoyed immersing myself in various aspects of computer science, including software development, system architecture, and emerging technologies. This diverse exposure has not only broadened my understanding but also fueled my curiosity to explore further.</p>
        <p className="mb-6 text-left text-xl text-gray-200">With a solid foundation in computer science and an insatiable thirst for learning, I am committed to leveraging technology to drive innovation and make a meaningful impact. I am excited about the endless possibilities that lie ahead and look forward to collaborating with like-minded individuals and organizations on exciting projects.
          Thank you for visiting my portfolio, and I invite you to join me on this exhilarating journey of exploration and growth.</p>
      </div>
    </section>
  );
};

export default PersonalInfo;