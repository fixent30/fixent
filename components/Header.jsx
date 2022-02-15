import React from "react";
import { Link } from "react-scroll";

const Header = () => {
  return (
    <header className="flex items-center justify-between">
      <img src="/logo.png" className="h-32 w-32 lg:h-40 lg:w-40" />
      <nav className="hidden lg:flex space-x-8 ">
        <Link
          className="transition cursor-pointer duration-600 hover:scale-110 ease-out hover:font-bold"
          to="Hero"
          smooth={true}
          delay={200}
        >
          Home
        </Link>
        <Link
          className="transition cursor-pointer duration-600 hover:scale-110 ease-out hover:font-bold"
          to="About"
          smooth
          delay={200}
        >
          About
        </Link>
        <Link
          className="transition cursor-pointer duration-600 hover:scale-110 ease-out hover:font-bold"
          to="Services"
          smooth
          delay={200}
        >
          Services
        </Link>
        <Link
          className="transition cursor-pointer duration-600 hover:scale-110 ease-out hover:font-bold"
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
      <div className="flex">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-8 w-8 cursor-pointer"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"
          />
        </svg>
        <span className="bg-red-500 text-white grid place-items-center rounded-full w-6 h-6">
          5
        </span>
      </div>
    </header>
  );
};

export default Header;
