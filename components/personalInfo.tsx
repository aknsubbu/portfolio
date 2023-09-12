import React from 'react';

const PersonalInfo = () => {
  return (

    <section className='h-auto bg-[#041C32]' >
      <div className='flex flex-row bg-[#041C32]'>
        <div className='w-1/2 bg-[#041C32] flex justify-center items-center p-10'>
          <img className="transform hover:scale-105 transition ease-in-out duration-1000 w-96 h-auto rounded-2xl" src="./anand.png" alt=""/>
          
        </div>
        <div className='bg-[#041C32] w-1/2  '>
          <h1 className='text-5xl font-extrabold p-10 mt-5'>Hi, I&apos;m Anandkumar NS,</h1>
<p className='text-white p-10 mt-15 w-4/5 '>Hello, I&apos;m Anandkumar NS, a passionate Computer Science engineer based in Chennai. <br /> I have a deep fascination for exploring new technologies and tools that shape our ever-evolving digital landscape. I firmly believe in the adage that the only constant in the world is change, and I embrace it wholeheartedly. <br /> Having recognized the prominent role of computers in today&apos;s modern world, I find great joy in delving into the intricacies of this fascinating field. By continuously expanding my knowledge and skills, I strive to stay ahead of the curve and prepare myself for the future.  <br /> Throughout my journey, I have enjoyed immersing myself in various aspects of computer science, including software development, system architecture, and emerging technologies. This diverse exposure has not only broadened my understanding but also fueled my curiosity to explore further. <br /> With a solid foundation in computer science and an insatiable thirst for learning, I am committed to leveraging technology to drive innovation and make a meaningful impact. I am excited about the endless possibilities that lie ahead and look forward to collaborating with like-minded individuals and organizations on exciting projects. Thank you for visiting my portfolio, and I invite you to join me on this exhilarating journey of exploration and growth.</p>


        </div>
      </div>
    </section>

  );
};

export default PersonalInfo;
