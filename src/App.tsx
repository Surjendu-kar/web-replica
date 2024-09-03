import React from "react";
import ProfileWidget from "./components/ProfileWidget";
import GalleryWidget from "./components/GalleryWidget";

const App: React.FC = () => {
  return (
    <div className="bg-main flex justify-end main min-h-screen p-10">
      <div className="w-1/2 space-y-4">
        <ProfileWidget />
        <GalleryWidget />
      </div>
    </div>
  );
};

export default App;
