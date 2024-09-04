import React from "react";
import ScrollIcon from "../../assets/Rectangle.png";
import Sidebar from "../Sidebar/Sidebar";
import TabNav from "./TabNav";
import Content from "./Content";


const ProfileWidget: React.FC = () => {
  return (
    <div className="flex bg-box-bg rounded-[18.89px] w-[720px]">
      <Sidebar />
      <div className="flex-1 py-4 pr-4">
        <TabNav />
        <Content />
      </div>
      <div className="w-[40px] py-4 flex flex-col items-center justify-center">
        <img src={ScrollIcon} alt="Grid" className="w-[12px] h-[64px]" />
      </div>
    </div>
  );
};

export default ProfileWidget;