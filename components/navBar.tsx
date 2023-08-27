
// export default () => {


//     return (
//         <section className="py-8 px-4 lg:px-10 bg-[#041C32]"><nav className="relative flex justify-between items-center">
//           <a className="text-2xl text-white font-bold" href="/">
//   <img className="h-7" src="https://static.shuffle.dev/uploads/files/c2/c295a93ee68902ec0dcaf992bde79c0a26a6a8f5/Personal-Logo-SVG.svg" alt="" width="auto"/></a>
//   <div className="lg:hidden">
  //   <button className="p-2 navbar-burger">
  //     <svg className="w-10 h-3" width="39" height="13" viewBox="0 0 39 13" fill="none" xmlns="http://www.w3.org/2000/svg"><rect width="39" height="2" rx="1" fill="#C4C4C4"></rect><rect x="19" y="11" width="20" height="2" rx="1" fill="#C4C4C4"></rect></svg></button>
  // </div>
//   <div className="hidden lg:block absolute top-1/2 left-1/2 transform -translate-y-1/2 -translate-x-1/2">
//     <ul className="flex items-center text-white space-x-10"><li><a className="text-white font-bold text-lg" href="#project">Projects</a></li>
//       <span>
//         <svg width="5" height="5" viewBox="0 0 5 5" fill="none" xmlns="http://www.w3.org/2000/svg"><circle cx="2.5" cy="2.5" r="2.5" fill="#726B6B"></circle></svg></span>
//       <li><a className="text-white font-bold text-lg" href="#contact">Contact</a></li>
//     </ul></div>
//   </nav><div className="hidden navbar-menu fixed top-0 left-0 bottom-0 w-5/6 max-w-sm z-50">
//   <div className="navbar-backdrop fixed inset-0 bg-gray-800 opacity-80"></div>
//   <nav className="relative flex flex-col py-8 h-full w-full bg-white overflow-y-auto"><div className="flex items-center mb-16 pr-6">
//     <a className="ml-10 text-2xl text-gray-800 font-bold" href="#">
//       <img className="h-7" src="zospace-assets/logos/zospace-dark-logo.svg" alt="" width="auto"/></a>
//     </div>
//     <div>
//       <ul><li className="mb-1 px-10"><a className="block pl-8 py-4 text-xl text-gray-800 hover:bg-blueGray-50 rounded-xl" href="/project">Projects</a></li>
//         <li className="mb-1 px-10"><a className="block pl-8 py-4 text-xl text-gray-800 hover:bg-blueGray-50 rounded-xl" href="/contact">Contact</a></li>
//       </ul></div>
//     <div className="mt-auto px-10">
//       <p className="mt-6 mb-4 text-lg text-center">
//         <span>By Anandkumar NS.</span>
//       </p>
//     </div>
//   </nav></div>
// </section>
//     )
// }


import Link from 'next/link';

const Navbar = () => {
  return (
    <section className="py-8 px-4 lg:px-10 bg-[#041C32]">
      <nav className="relative flex justify-between items-center">
        <Link href="/">
          
            <img className="h-7" src="https://static.shuffle.dev/uploads/files/c2/c295a93ee68902ec0dcaf992bde79c0a26a6a8f5/Personal-Logo-SVG.svg" alt="" width="auto"/>
          
        </Link>
        <div className="lg:hidden">
          <button className="p-2 navbar-burger">
      <svg className="w-10 h-3" width="39" height="13" viewBox="0 0 39 13" fill="none" xmlns="http://www.w3.org/2000/svg"><rect width="39" height="2" rx="1" fill="#C4C4C4"></rect><rect x="19" y="11" width="20" height="2" rx="1" fill="#C4C4C4"></rect></svg></button>
        </div>
        <div className="hidden lg:block absolute top-1/2 left-1/2 transform -translate-y-1/2 -translate-x-1/2">
          <ul className="flex items-center text-white space-x-10">
            <li>
              <Link href="/project">
          Projects
              </Link>
            </li>
            <li>
              <Link href="/contact">
                Contact
              </Link>
            </li>
          </ul>
        </div>
      </nav>

    </section>
  );
};

export default Navbar;
