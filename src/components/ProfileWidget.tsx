import { useState } from "react";
import VectorIcon from "../assets/Vector.png";
import FrameIcon from "../assets/Frame.png";
import ScrollIcon from "../assets/Rectangle.png";

const tabs = ["About Me", "Experiences", "Recommended"];

const ProfileWidget = () => {
  const [activeTab, setActiveTab] = useState("About Me");

  return (
    <div className="flex bg-box-bg rounded-[18.89px] w-[720px]">
      <div className="w-[50px] h-[170px] py-4 flex flex-col items-center justify-between">
        <img src={VectorIcon} alt="Grid" className="w-[24px] h-[24px]" />
        <img src={FrameIcon} alt="Scroll" className="w-[22px] h-[34px]" />
      </div>

      <div className="flex-1 py-4 pr-4">
        <div className="bg-main rounded-[23px] p-1.5 flex justify-between mb-4 w-[597px]  mx-auto">
          {tabs.map((tab) => (
            <button
              key={tab}
              className={`rounded-[16px] px-12 py-2.5 text-sm flex items-center justify-center ${
                activeTab === tab ? "bg-box-bg text-white" : "text-text"
              }`}
              onClick={() => setActiveTab(tab)}
            >
              {tab}
            </button>
          ))}
        </div>
        <div className="text-text overflow-y-auto h-[175px] w-[611px]">
          {activeTab === "About Me" && (
            <p>
              Hello! I'm Dave, your sales rep here from Salesforce. I've been
              working at this awesome company for 3 years now.
              <br />
              <br />I was born and raised in Albany, NY& have been living in
              Santa Carla for the past 10 years my wife Tiffany and my 4 year
              old twin daughters- Emma and Ella. Both of them are just starting
              school, so my calender is usually blocked between 9-10 AM. This is
              a...
            </p>
          )}
          {activeTab === "Experiences" && <p>Experiences content goes here.</p>}
          {activeTab === "Recommended" && <p>Recommended content goes here.</p>}
        </div>
      </div>
      <div className="w-[50px] py-4 flex flex-col items-center justify-center">
        <img src={ScrollIcon} alt="Grid" className="w-[12px] h-[64px]" />
      </div>
    </div>
  );
};

export default ProfileWidget;
