import { useRouter } from "next/router";
import { useRef } from "react";

const Services = () => {
  const ServicesRef = useRef(null);
  const router = useRouter();

  return (
    <div name="Services" className="my-8 lg:w-[80%] mx-auto">
      <h2 className="text-center font-bold text-xl lg:text-2xl my-2">
        Our Services
      </h2>

      <div
        ref={ServicesRef}
        className="flex space-x-4 items-center realtive justify-between overflow-x-auto"
      >
        <div
          onClick={() => router.push("/ComputerPrice")}
          className="min-w-[200px] group cursor-pointer  flex flex-col items-center   w-full h-[300px]"
        >
          <img
            src="/computer.jpeg"
            className="h-[50%] hover:scale-110 transition ease-out  duration-75  w-[80%]"
          />
          <h1 className="text-red-500 my-2 hidden group-hover:block transition duration-100 ease-out  font-bold text-xl">
            Show more{" "}
          </h1>
          <h2 className="text-lg leading-[2]  text-gray-900 font-medium ">
            Refurbished Computer
          </h2>
          <p className="font-light text-gray-600">
            We sell Refurbished Computer at very affordable price
          </p>
        </div>
        <div
          onClick={() => router.push("/ComputerPrice")}
          className="min-w-[200px] group cursor-pointer flex flex-col items-center w-full h-[300px]"
        >
          <img
            src="/laptop.jpeg"
            className="h-[50%] hover:scale-110 transition ease-out  duration-75"
          />
          <h1 className="text-red-500 my-2 hidden group-hover:block transition duration-100 ease-out  font-bold text-xl">
            Show more{" "}
          </h1>
          <h2 className="text-lg leading-[2]  text-gray-900 font-medium ">
            Refurbished Laptop
          </h2>
          <p className="font-light text-gray-600">
            We alos sell Refurbished Laptops at very affordable price
          </p>
        </div>
        <div className="min-w-[200px] flex flex-col items-center w-full h-[300px]">
          <img src="/cleaning.jpeg" className="h-[50%]" />
          <h2 className="text-lg leading-[2]  text-gray-900 font-medium ">
            Computer Cleaning
          </h2>
          <p className="font-light text-gray-600">
            In out store we clean full pc or it's components
          </p>
        </div>
        <div className="min-w-[200px] w-full h-[300px] flex flex-col items-center">
          <img src="/creapring.jpg" className="h-[50%]" />
          <h2 className="text-lg leading-[2]  text-gray-900 font-medium ">
            Computer Reapring
          </h2>
          <p className="font-light text-gray-600">
            We can fix any kind of computer issue you have
          </p>
        </div>
        <div className="min-w-[200px] w-full h-[300px] flex flex-col items-center">
          <img src="/newcom.webp" className="h-[50%]" />
          <h2 className="text-lg leading-[2]  text-gray-900 font-medium ">
            New Computer
          </h2>
          <p className="font-light text-gray-600">
            Now you can also get new computer in out store with latest
            technology
          </p>
        </div>
      </div>
    </div>
  );
};

export default Services;
