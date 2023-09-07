import React from 'react'

const Footer = () => {
  return (
<section className="relative py-16 bg-[#041C32] overflow-hidden border-t border-gray-500">
  <div className="relative z-10 container px-4 mx-auto">
    <div className="flex flex-wrap justify-between items-center -m-8">
      <div className="w-auto p-8">
        <a href="#">
          <img src="./Personal Logo SVG.svg" alt=""/>
        </a>
      </div>
      <div className="w-auto p-8">
        <ul className="flex flex-wrap items-center -m-5">
          <li className="p-5"><a className="text-white hover:text-gray-200 font-medium" href="#">Home</a></li>
          <li className="p-5"><a className="text-white hover:text-gray-200 font-medium" href="#project">Project</a></li>
          <li className="p-5"><a className="text-white hover:text-gray-200 font-medium" href="#contact">Contact</a></li>
        </ul>
      </div>
      <div className="w-auto p-8">
        <div className="flex flex-wrap -m-1.5">
          <div className="w-12 p-1.5">
            <a className="text-indigo-600 hover:text-indigo-700" href="www.linkedin.com/in/anandkumar-ns" target="_blank">
              <img src="https://icongr.am/simple/linkedin.svg?size=128&color=ffffff&colored=false" alt=""/>

            </a>
          </div>
          <div className="w-12  p-1.5">
            <a className="text-blueGray-400 hover:text-blueGray-500" href="https://www.instagram.com/anandkumar_ns" target="_blank">
              <img src="https://icongr.am/simple/instagram.svg?size=128&color=ffffff&colored=false" alt=""/>

            </a>
          </div>
          <div className="w-12 p-1.5">
            <a className="text-indigo-600 hover:text-indigo-700" href="https://github.com/aknsubbu" target="_blank">
              <img src="https://icongr.am/simple/github.svg?size=128&color=f1eeee&colored=false" alt=""/>

            </a>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>
  )
}

export default Footer
