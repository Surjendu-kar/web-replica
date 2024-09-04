import React from "react";
import { ImagePair } from "./GalleryWidget";

interface ImageGalleryProps {
  images: ImagePair[];
  scrollContainerRef: React.RefObject<HTMLDivElement>;
}

const ImageGallery: React.FC<ImageGalleryProps> = ({
  images,
  scrollContainerRef,
}) => (
  <div
    ref={scrollContainerRef}
    className="flex space-x-4 overflow-x-auto scrollbar-hide"
    style={{
      scrollbarWidth: "none",
      msOverflowStyle: "none",
    }}
  >
    {images.map((img, index) => (
      <GalleryImage key={index} img={img} index={index} />
    ))}
  </div>
);

interface GalleryImageProps {
  img: ImagePair;
  index: number;
}

const GalleryImage: React.FC<GalleryImageProps> = ({ img, index }) => (
  <div className="relative w-[200px] h-[180px] overflow-hidden rounded-lg group flex-shrink-0">
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
);

export default ImageGallery;
