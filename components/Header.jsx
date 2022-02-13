import React from "react";
import { Link } from "react-scroll";

const Header = () => {
  return (
    <header className="flex items-center justify-between">
      <img src="/logo.png" className="h-32 w-32 lg:h-40 lg:w-40" />
      <nav className="hidden lg:flex space-x-8 ">
        <Link
          className="transition duration-600 hover:scale-110 ease-out hover:font-bold"
          to="Hero"
          smooth={true}
          delay={200}
        >
          Home
        </Link>
        <Link
          className="transition duration-600 hover:scale-110 ease-out hover:font-bold"
          to="About"
          smooth
          delay={200}
        >
          About
        </Link>
        <Link
          className="transition duration-600 hover:scale-110 ease-out hover:font-bold"
          to="Services"
          smooth
          delay={200}
        >
          Services
        </Link>
        <Link
          className="transition duration-600 hover:scale-110 ease-out hover:font-bold"
          to="pricing"
          smooth
          delay={200}
        >
          pricing
        </Link>
      </nav>
      <Link
        to="Contact"
        smooth
        delay={200}
        className="bg-[#ee2b55] cursor-pointer p-2 rounded-md text-white"
      >
        Contact me
      </Link>
    </header>
  );
};

export default Header;
