import React, { useState, useRef, useEffect } from "react";

const tabs = ["About Me", "Experiences", "Recommended"];

const TabNav: React.FC = () => {
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
  );
};

export default TabNav;
