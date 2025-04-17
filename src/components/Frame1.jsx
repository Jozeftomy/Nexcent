import React from "react";
import Button from "./Button";

const Frame1 = () => {
  return (
    <div className="w-[772px] h-[313px] flex flex-col gap-[32px] bg-white">
    <p className="text-[#4D4D4D] font-inter text-[2.78425rem] font-semibold leading-[3.30631rem] block my-[1em] mx-[0px]">
        Lessons and insights
        <br />
        <span className="text-[#4CAF4F]">from 8 years</span>
    </p>
    <p className="block my-[1em] mx-[0px] isolate text-gray-400">
       Where to grow your business as a photographer: site or social media?
    </p>
   <Button />
    </div>
  );
};

export default Frame1;
