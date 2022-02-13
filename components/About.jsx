import React from "react";

const About = () => {
  return (
    <div
      name="About"
      className="flex flex-col lg:w-[80%]  mx-auto lg:flex-row space-x-4 items-center my-4 space-y-5"
    >
      <img
        src="/logo.png"
        className="border-4 w-36 h-36 lg:w-40 lg:h-40 border-[#ee2b55] rounded-full cursor-pointer"
      />
      <div className="bg-[#ee2b55] lg:text-xl p-4 lg:p-6 rounded-md text-white font-bold">
        100% BEST PRICE WE DEAL IN:- Laptop Battery | Laptop keyboard | Laptop
        Harddisk | Laptop Ram | Desktop Ram | Laptop Adapters | Refurbished
        Adapter| Laptop Cuddy | Laptop Screen | Laptop Casing| Wifi Adapter|
        Cables Panel Base | Touchpad Fan Hinges | Speaker | SSD | Graphic Cards
        | Old Laptop | Dc Cable and Dc Jack Hdmi Cable | Vga Cable | laptop
        Power Cord All type of Laptop and desktop Accessories available Ready
        Stock Courier service available All over India
      </div>
    </div>
  );
};

export default About;
