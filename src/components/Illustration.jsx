import React from "react";
import Illustration from "../assets/images/illustration.png";

const IllustrationSection = () => {
  return (
    <div className="w-[657px] h-[276px] flex justify-center items-center bg-white">
      <img 
        src={Illustration}
        alt="Illustration"
        className="w-[274px] h-[284px] hover:cursor-pointer"
      />
    </div>
  );
};

export default IllustrationSection;
