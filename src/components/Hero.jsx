import React from "react";
import { assets } from "../assets/frontend_assets/assets";

const Hero = () => {
  return (
    <div className="flex flex-col sm:flex-row border w-full justify-start items-center ">
      <div className="flex flex-col justify-center items-center sm:w-1/2 gap-8">
        <div className="flex flex-col gap-5">
          <div className=" flex items-center gap-6 mr-4">
            <span className="h-0.5 w-10 bg-[#414141]"></span>
            <h2 className="text-[20px] text-[#414141]">OUR BESTSELLERS</h2>
          </div>
          <div>
            <h2 className="text-6xl text-[#414141]">Latest Arrivals</h2>
          </div>
          <div className=" flex items-center gap-6 ">
            <h2 className="text-[20px] text-[#414141]">OUR BESTSELLERS</h2>
            <span className="h-0.5 w-10 bg-[#414141]"></span>
          </div>
        </div>
      </div>
      <img src={assets.hero_img} alt="" className="sm:w-1/2" />
    </div>
  );
};

export default Hero;
