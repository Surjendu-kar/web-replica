import { useState, useRef, useEffect } from "react";
import VectorIcon from "../assets/Vector.png";
import FrameIcon from "../assets/Frame.png";
import ScrollIcon from "../assets/Rectangle.png";

const tabs = ["About Me", "Experiences", "Recommended"];

const ProfileWidget = () => {
  const [activeTab, setActiveTab] = useState("About Me");
  const [tabUnderlineWidth, setTabUnderlineWidth] = useState(0);
  const [tabUnderlineLeft, setTabUnderlineLeft] = useState(0);
  const tabsRef = useRef<(HTMLButtonElement | null)[]>([]);

  useEffect(() => {
    function setTabPosition() {
      const currentTab = tabsRef.current.find(
        (tab) => tab?.innerText === activeTab
      );
      setTabUnderlineLeft(currentTab?.offsetLeft ?? 0);
      setTabUnderlineWidth(currentTab?.clientWidth ?? 0);
    }

    setTabPosition();
    window.addEventListener("resize", setTabPosition);

    return () => window.removeEventListener("resize", setTabPosition);
  }, [activeTab]);

  return (
    <div className="flex bg-box-bg rounded-[18.89px] w-[720px]">
      <div className="w-[50px] h-[170px] py-4 flex flex-col items-center justify-between">
        <img src={VectorIcon} alt="Grid" className="w-[24px] h-[24px]" />
        <img src={FrameIcon} alt="Scroll" className="w-[22px] h-[34px]" />
      </div>

      <div className="flex-1 py-4 pr-4">
        <div className="bg-main rounded-[23px] p-1.5 mb-4 w-[597px] mx-auto relative">
          <div className="flex justify-between">
            {tabs.map((tab, index) => (
              <button
                key={tab}
                ref={(el) => (tabsRef.current[index] = el)}
                className={`rounded-[16px] px-12 py-2.5 text-sm flex items-center justify-center transition-colors duration-300 relative z-10 ${
                  activeTab === tab ? "text-white" : "text-text"
                }`}
                onClick={() => setActiveTab(tab)}
              >
                {tab}
              </button>
            ))}
          </div>
          <span
            className="absolute bottom-1.5 block h-[40px] rounded-[16px] bg-box-bg transition-all duration-300 ease-in-out"
            style={{
              left: tabUnderlineLeft,
              width: tabUnderlineWidth,
            }}
          />
        </div>
        <div className="text-text overflow-y-auto h-[175px] w-[611px]">
          <p>
            Hello! I'm Dave, your sales rep here from Salesforce. I've been
            working at this awesome company for 3 years now.
            <br />
            <br />I was born and raised in Albany, NY& have been living in Santa
            Carla for the past 10 years my wife Tiffany and my 4 year old twin
            daughters- Emma and Ella. Both of them are just starting school, so
            my calender is usually blocked between 9-10 AM. This is a...
          </p>
        </div>
      </div>
      <div className="w-[40px] py-4 flex flex-col items-center justify-center">
        <img src={ScrollIcon} alt="Grid" className="w-[12px] h-[64px]" />
      </div>
    </div>
  );
};

export default ProfileWidget;
