import React from "react";
import CommunityCard from "./CommunityCard";
import Icon from "../assets/images/icon.png";
import Icon1 from "../assets/images/icon1.png";
import Icon2 from "../assets/images/icon2.png";

const Community = () => {
  return (
    <div className="w-[1440px] h-[400px] flex flex-col items-center gap-[24px] px-[144px] py-[40px] bg-white mt-[24px]">
      <h2 className="text-[2rem] font-bold text-gray-800 text-center">
        Manage your entire community in a single system
      </h2>
      <p className="text-gray-600 text-center">Who is Nextcent suitable for?</p>

      {/* Card Section */}
      <div className="flex justify-center gap-[16px]">
        <CommunityCard
          title="Membership Organisations"
          description="Our membership management software provides full automation of membership renewals and payments."
          icon={Icon}
        />
        <CommunityCard
          title="National Associations"
          description="Our system helps associations manage members, finances, and growth efficiently."
          icon={Icon1}
        />
        <CommunityCard
          title="Clubs And Groups"
          description="Designed for clubs to enhance engagement, scheduling, and membership tracking."
          icon={Icon2}
        />
      </div>
    </div>
  );
};

export default Community;
