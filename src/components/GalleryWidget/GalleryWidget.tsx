import React, { useRef, useState } from "react";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
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
  const fileInputRef = useRef<HTMLInputElement>(null);
  const [images, setImages] = useState<ImagePair[]>([
    { black: BlackImg, color: ColorfulImg },
    { black: BlackImg, color: ColorfulImg },
    { black: BlackImg, color: ColorfulImg },
    { black: BlackImg, color: ColorfulImg },
  ]);

  const scroll = (direction: "left" | "right") => {
    if (scrollContainerRef.current) {
      const scrollAmount = 220;
      scrollContainerRef.current.scrollBy({
        left: direction === "left" ? -scrollAmount : scrollAmount,
        behavior: "smooth",
      });
    }
  };

  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = (e) => {
        const newImage = e.target?.result as string;
        setImages([...images, { black: newImage, color: newImage }]);
        toast.success("Image added successfully!", {
          position: "bottom-right",
          autoClose: 3000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
        });
      };
      reader.readAsDataURL(file);
    }
  };

  const addImage = () => {
    fileInputRef.current?.click();
  };

  return (
    <div className="flex bg-box-bg rounded-[18.89px] w-[720px] h-[310px]">
      <Sidebar />
      <div className="flex-1 py-4 overflow-hidden">
        <GalleryHeader onScroll={scroll} onAddImage={addImage} />
        <ImageGallery images={images} scrollContainerRef={scrollContainerRef} />
        <input
          type="file"
          ref={fileInputRef}
          onChange={handleFileChange}
          accept="image/*"
          className="hidden"
        />
        <ToastContainer />
      </div>
      <div className="w-[40px] py-4 flex flex-col items-center justify-center"></div>
    </div>
  );
};

export default GalleryWidget;
