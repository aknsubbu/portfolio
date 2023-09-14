
import Link from 'next/link';

const Navbar = () => {
  return (
    <section className="py-8 px-4 lg:px-10 bg-[#041C32] border-b border-gray-500 ">
      <nav className="relative flex justify-between items-center">
        <Link href="/">
            <img className="h-12" src="./Personal Logo SVG.svg" alt="" width="auto"/>
        </Link>
        <div className=" absolute top-1/2 left-1/2 transform -translate-y-1/2 -translate-x-1/2">
          <ul className="flex items-center text-white space-x-10">
            <li>
              <Link href="/">
          Home
              </Link>
            </li>
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
