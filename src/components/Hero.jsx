import React from 'react';
import { FaArrowRightLong } from "react-icons/fa6";
import { Fade } from "react-awesome-reveal";

export default function Hero() {
  return (
    <div className="flex flex-col justify-between gap-3 h-screen pb-3 relative lg:flex-row lg:justifiy-center lg:gap-[2rem]">
      <div className="relative z-1 lg:w-1/2">
        <img
          className="rounded-[1rem] w-full h-[60vh] object-cover lg:h-full"
          src="/images/model.jpg"
          alt="model with purse"
        />
        <div className="absolute inset-0 bg-brown opacity-40 rounded-[1rem] z-10"></div> {/* Transparent Overlay */}
      </div>
  
      <div className="flex flex-col gap-3 lg:w-1/2 lg:justify-center">
        <h1 className="font-dm-sans text-brown text-7xl lg:text-9xl">Elevate <br /> your <br /> style.</h1>
        <p>Be stylish with quality handbags and purses.</p>
        <button className=" flex items-center gap-2 text-left uppercase font-dm-sans font-semibold text-brown">Shop now <FaArrowRightLong /></button>
      </div>
    </div>
  );
}
