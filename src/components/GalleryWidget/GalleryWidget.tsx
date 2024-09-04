import { useRef } from "react";
import BlackImg from "../../assets/DefaultImg.png";
import ColorfulImg from "../../assets/Colourful-Img.jpeg";
import Sidebar from "../Sidebar/Sidebar";
import GalleryHeader from "./GalleryHeader";
import ImageGallery from "./ImageGallery";

export interface ImagePair {
  black: string;
  color: string;
}

const GalleryWidget = () => {
  const scrollContainerRef = useRef<HTMLDivElement>(null);

  const images: ImagePair[] = [
    { black: BlackImg, color: ColorfulImg },
    { black: BlackImg, color: ColorfulImg },
    { black: BlackImg, color: ColorfulImg },
    { black: BlackImg, color: ColorfulImg },
  ];

  const scroll = (direction: "left" | "right") => {
    if (scrollContainerRef.current) {
      const scrollAmount = 220;
      scrollContainerRef.current.scrollBy({
        left: direction === "left" ? -scrollAmount : scrollAmount,
        behavior: "smooth",
      });
    }
  };

  return (
    <div className="flex bg-box-bg rounded-[18.89px] w-[720px] h-[310px]">
      <Sidebar />
      <div className="flex-1 py-4 overflow-hidden">
        <GalleryHeader onScroll={scroll} />
        <ImageGallery images={images} scrollContainerRef={scrollContainerRef} />
      </div>
      <div className="w-[40px] py-4 flex flex-col items-center justify-center"></div>
    </div>
  );
};

export default GalleryWidget;
