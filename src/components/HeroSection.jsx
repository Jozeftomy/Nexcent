import React from "react";
import IllustrationSection from "./Illustration";
import Frame1 from "./Frame1";

const HeroSection = () => {
  return (
    <div className="w-[1440px] h-[599px] flex items-center justify-center gap-[104px] px-[144px] py-[76px] bg-white">
      <Frame1 />

      <IllustrationSection />
    </div>
  );
};

export default HeroSection;
