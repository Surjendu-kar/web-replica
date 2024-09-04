import React from "react";
import ProfileWidget from "./components/ProfileWidget/ProfileWidget";
import GalleryWidget from "./components/GalleryWidget/GalleryWidget";
import HrLine from "../src/assets/HrLine.png";

const App: React.FC = () => {
  return (
    <div className="bg-main flex justify-end main min-h-screen p-5">
      <div className="w-1/2 flex flex-col items-center space-y-4">
        <ProfileWidget />
        <img src={HrLine} alt="" />
        <GalleryWidget />
        <img src={HrLine} alt="" />
      </div>
    </div>
  );
};

export default App;
