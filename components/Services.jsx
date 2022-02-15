import { useEffect, useRef, useState } from "react";
import { db } from "../utils/firebase";
import getCollectionData from "../utils/getCollectionData";
import Pricing from "./Pricing";

const Services = () => {
  const ServicesRef = useRef(null);
  const [Lapdata, setLapData] = useState();
  const Scroll = (offset) => {
    ServicesRef.current.scrollLeft += offset;
  };
  const [computerData, setComputerData] = useState();
  useEffect(() => {
    const getLapData = async () => {
      const result = await getCollectionData("laptopPrices");
      setLapData(result);
    };
    const getComData = async () => {
      const res = await getCollectionData("computerPrices");
      setComputerData(res);
    };

    getLapData();
    getComData();
  }, [db]);
  return (
    <div name="Services" className="my-8 lg:w-[80%] mx-auto">
      <h2 className="text-center font-bold text-xl lg:text-2xl my-2">
        Our Services
      </h2>

      <div
        ref={ServicesRef}
        className="flex space-x-4 items-center realtive justify-between overflow-x-auto"
      >
        <div className="min-w-[200px] flex flex-col items-center   w-full h-[300px]">
          <img src="/computer.jpeg" className="h-[50%] w-[80%]" />
          <h2 className="text-lg leading-[2]  text-gray-900 font-medium ">
            Refurbished Computer
          </h2>
          <p className="font-light text-gray-600">
            We sell Refurbished Computer at very affordable price
          </p>
        </div>
        <div className="min-w-[200px] flex flex-col items-center w-full h-[300px]">
          <img src="/laptop.jpeg" className="h-[50%]" />
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
          <img src="/mreapring.jpeg" className="h-[50%]" />
          <h2 className="text-lg leading-[2]  text-gray-900 font-medium ">
            Mobile Reapring
          </h2>
          <p className="font-light text-gray-600">
            we can fix all kind of issues you'r having with your mobile
          </p>
        </div>
      </div>
      <div name="pricing">
        {Lapdata && (
          <Pricing title={"Refurbished Laptop Price"} priceList={Lapdata} />
        )}
        {computerData && (
          <Pricing
            title={"Refurbished Computer Price"}
            priceList={computerData}
          />
        )}
      </div>
    </div>
  );
};

export default Services;
