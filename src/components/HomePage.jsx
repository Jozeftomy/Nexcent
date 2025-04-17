import React from "react";
import HeroSection from "./HeroSection";
import Client from "./Client";

const HomePage = () => {
  return (
    <div className="relative w-[1440px] min-h-[800px] flex flex-col gap-[24px] bg-white items-center">
      <HeroSection />
      <Client />
    </div>
  );
};

export default HomePage;
