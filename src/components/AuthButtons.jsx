import React from "react";

const AuthButtons = () => {
  return (
    <div className="absolute top-[22px] left-[1138px] flex gap-[14px] w-[182px] h-[40px]">
      <button className="w-[86px] h-[40px]  text-green-700 bg-[#F5F7FA] rounded-md hover:cursor-pointer">
        Login
      </button>
      <button className="w-[86px] h-[40px] bg-green-700 text-[#F5F7FA] rounded-md hover:cursor-pointer">
        Signup
      </button>
    </div>
  );
};
export default AuthButtons;
