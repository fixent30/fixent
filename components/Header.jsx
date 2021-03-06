import React, { useState } from "react";
import NextLink from "next/link";
import { Link, scroller } from "react-scroll";
import { useStore, useUser } from "../Redux/useStore";
import SignInForm from "./SignInform";
import { Input, Modal } from "@mantine/core";
import Image from "next/image";
import toast, { Toaster } from "react-hot-toast";

const Header = ({ isHome, productData }) => {
  const [opened, setOpened] = useState(false);
  const [searchTerm, setSearchTerm] = useState("");

  const [searchList, setSearchList] = useState([]);

  const count = useStore((state) => state.basket);
  const user = useUser((state) => state.User);

  const [open, setOpen] = useState(false);

  const serachFilter = (e) => {
    if (e.key == "Enter") {
      const res = productData.filter((val) =>
        val.name.toLowerCase().includes(searchTerm)
      );
      setSearchList(res);
      console.log(res);
    } else {
      setSearchList([]);
    }
  };

  const basket = useStore((state) => state.basket);

  const removeItemfromBasket = (item) => {
    basket.splice(
      basket.findIndex((e) => e.name === item.id),
      1
    );
    toast.success("Product Removed");
  };

  console.log(basket);

  return (
    <header className="flex items-center lg:w-[80%] mx-auto justify-between">
      <NextLink href="/">
        <img src="/logo.png" className="h-32 w-32 lg:h-40 lg:w-40" />
      </NextLink>
      {isHome ? (
        <nav className="hidden lg:flex items-center space-x-8 ">
          <Link
            className="transition cursor-pointer duration-600 hover:scale-110 ease-out hover:font-bold"
            to="Hero"
            smooth={true}
            delay={200}
          >
            Home
          </Link>
          <NextLink href="/Categories">
            <p className="text-lg transition cursor-pointer duration-600 hover:scale-110 ease-out hover:font-bold">
              Categories
            </p>
          </NextLink>
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
          <NextLink href="/Categories">
            <p className="text-lg transition cursor-pointer duration-600 hover:scale-110 ease-out hover:font-bold">
              Categories
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
        <div className="flex flex-col relative ">
          <Input
            onKeyDown={(e) => serachFilter(e)}
            onChange={(e) => setSearchTerm(e.target.value)}
            icon={
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth="2"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                />
              </svg>
            }
            placeholder="search..."
          />
          <div className="absolute top-6 z-10 ">
            {searchList.map((item) => (
              <div
                key={item.id}
                onClick={() => scroller.scrollTo(`${item.id}`)}
                className="p-2  cursor-pointer hover:bg-blue-100 space-x-4 border my-1 flex items-center bg-white"
              >
                <Image
                  src={item.pictures.src}
                  width={40}
                  height={40}
                  objectFit="contain"
                />
                <h2>{item.name}</h2>
              </div>
            ))}
          </div>
        </div>
        {user ? (
          <>
            <div onClick={() => setOpen(!open)} className="flex relative">
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
              {open && (
                <Modal
                  opened={open}
                  centered
                  overlayOpacity={0.55}
                  radius="md"
                  overflow="inside"
                  onClose={() => setOpen(false)}
                  title="cart"
                >
                  <Toaster />
                  <div className="py-4">
                    {basket.map((item) => (
                      <div
                        key={item.id}
                        className="flex space-x-4 border-b pb-2 justify-between items-center"
                      >
                        <div className="flex space-x-2 items-center">
                          <img
                            src={item.img}
                            className="h-10 w-10 object-contain"
                          />

                          <p className="text-xl font-medium">{item.name}</p>
                          {item.quantity && (
                            <p className="text-white rounded-full p-1 text-sm w-6 grid place-items-center h-6 bg-red-600 font-bold">
                              {item.quantity}
                            </p>
                          )}
                        </div>
                        {
                          <p>{`??? ${item.price}   *${
                            item.quantity && item.quantity
                          }`}</p>
                        }
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          className="h-6 w-6 cursor-pointer"
                          onClick={() => removeItemfromBasket(item)}
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                          strokeWidth={2}
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"
                          />
                        </svg>
                      </div>
                    ))}
                  </div>
                </Modal>
              )}
            </div>
          </>
        ) : null}
      </div>
    </header>
  );
};

export default Header;
