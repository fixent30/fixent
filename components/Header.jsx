import React, { useState } from "react";
import NextLink from "next/link";
import { Link } from "react-scroll";
import { useStore, useUser } from "../Redux/useStore";
import SignInForm from "./SignInform";
import { Input } from "@mantine/core";
import {
  collection,
  doc,
  onSnapshot,
  query,
  queryEqual,
  refEqual,
} from "firebase/firestore";
import { db } from "../utils/firebase";

const Header = ({ open, setOpen, isHome }) => {
  const [opened, setOpened] = useState(false);
  const [searchTerm, setSearchTerm] = useState("");

  const count = useStore((state) => state.basket);
  const user = useUser((state) => state.User);

  const serachFilter = (e) => {
    const ref = doc(collection(db, "Prodcuts"));
    const snapshot = query();
    console.log(snapshot);
  };

  return (
    <header className="flex items-center lg:w-[80%] mx-auto justify-between">
      <NextLink href="/">
        <img src="/logo.png" className="h-32 w-32 lg:h-40 lg:w-40" />
      </NextLink>
      {isHome ? (
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
      ) : (
        <nav className="hidden lg:flex space-x-8 ">
          <NextLink href="/">
            <p className="text-lg transition cursor-pointer duration-600 hover:scale-110 ease-out hover:font-bold">
              Home
            </p>
          </NextLink>
          <Link
            to="computerPrice"
            smooth
            delay={200}
            className="transition cursor-pointer duration-600 hover:scale-110 ease-out hover:font-bold"
          >
            ComputerPrice
          </Link>
          <Link
            smooth
            delay={200}
            to="laptopPrice"
            className="transition cursor-pointer duration-600 hover:scale-110 ease-out hover:font-bold"
          >
            LaptopPrice
          </Link>
        </nav>
      )}

      <div className="flex items-center  space-x-4">
        {!user ? (
          <>
            <button
              onClick={() => setOpened(true)}
              className="bg-[#ee2b55] px-10 py-2 hidden lg:flex cursor-pointer  font-bold rounded-md text-white"
            >
              Sign in
            </button>
            <SignInForm opened={opened} setOpened={setOpened} />
          </>
        ) : null}
        <Input
          onKeyUp={(e) => serachFilter(e)}
          onChange={(e) => setSearchTerm(e.target.value)}
          icon={
            <svg
              xmlns="http://www.w3.org/2000/svg"
              class="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              stroke-width="2"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
              />
            </svg>
          }
          placeholder="search..."
        />
        {user ? (
          <div onClick={() => setOpen(!open)} className="flex">
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
              {count.length}
            </span>
          </div>
        ) : null}
      </div>
    </header>
  );
};

export default Header;
