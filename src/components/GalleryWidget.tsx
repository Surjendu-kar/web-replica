import { useRef } from "react";
import VectorIcon from "../assets/Vector.png";
import FrameIcon from "../assets/Frame.png";
import BlackImg from "../assets/DefaultImg.png";
import ColorfulImg from "../assets/Colourful-Img.jpeg";

const GalleryWidget = () => {
  const scrollContainerRef = useRef<HTMLDivElement>(null);

  const images = [
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
      <div className="w-[50px] h-[170px] py-4 flex flex-col items-center justify-between">
        <img src={VectorIcon} alt="Grid" className="w-[24px] h-[24px]" />
        <img src={FrameIcon} alt="Scroll" className="w-[22px] h-[34px]" />
      </div>

      <div className="flex-1 py-4 overflow-hidden">
        <div className="flex justify-between items-center mb-4 p-1.5">
          <button className="bg-[#171717] text-white w-[150px] h-[62px] rounded-[20px] text-lg font-semibold">
            Gallery
          </button>
          <div className="flex items-center space-x-4">
            <button className="relative bg-[#4A4B53] text-white px-5 py-4 rounded-full text-sm font-semibold flex items-center shadow-[0_-4px_6px_-1px_rgba(0,0,0,0.1)] hover:shadow-[0_-4px_6px_-1px_rgba(0,0,0,0.2)] transition-shadow duration-300 overflow-hidden">
              <span className="relative z-10 mr-1">+</span>
              <span className="relative z-10">ADD IMAGE</span>
              <div className="absolute inset-x-0 top-0 h-1/2 bg-gradient-to-b from-white/10 to-transparent"></div>
            </button>
            <div className="flex space-x-2">
              <button
                onClick={() => scroll("left")}
                className="bg-[#303439] hover:bg-[#96BEE7] text-[#6F787C] hover:text-white w-12 h-12 rounded-full flex items-center justify-center text-2xl transition-colors duration-300"
              >
                &#8592;
              </button>
              <button
                onClick={() => scroll("right")}
                className="bg-[#303439] hover:bg-[#96BEE7] text-[#6F787C] hover:text-white w-12 h-12 rounded-full flex items-center justify-center text-2xl transition-colors duration-300"
              >
                &#8594;
              </button>
            </div>
          </div>
        </div>
        <div
          ref={scrollContainerRef}
          className="flex space-x-4 overflow-x-auto scrollbar-hide"
          style={{
            scrollbarWidth: "none",
            msOverflowStyle: "none",
          }}
        >
          {images.map((img, index) => (
            <div
              key={index}
              className="relative w-[200px] h-[180px] overflow-hidden rounded-lg group flex-shrink-0"
            >
              <img
                src={img.black}
                alt={`Gallery image ${index + 1}`}
                className="w-full h-full object-cover transition-all duration-300 ease-in-out group-hover:opacity-0"
              />
              <img
                src={img.color}
                alt={`Gallery image ${index + 1} color`}
                className="absolute top-0 left-0 w-full h-full object-cover opacity-0 group-hover:opacity-100 transition-all duration-300 ease-in-out transform group-hover:rotate-6 group-hover:scale-110 origin-center"
              />
            </div>
          ))}
        </div>
      </div>

      <div className="w-[40px] py-4 flex flex-col items-center justify-center"></div>
    </div>
  );
};

export default GalleryWidget;
